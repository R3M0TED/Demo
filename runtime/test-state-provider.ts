import { BrowserContext } from 'playwright';
import TestParticipant from './test-participant';
import MainPage from '../page-object-models/main-page';
import ScreenshotUtilities from './utilities/screenshot-utilities';
import TestParticipantFactory from './factories/test-participant-factory';

class TestStateProvider {
  private browserContext: BrowserContext;
  private participants: TestParticipant[] = [];
  private testName?: string;

  constructor(context: BrowserContext, testName?: string) {
    this.browserContext = context;
    this.testName = testName;
  }

  public async createTestParticipant(): Promise<MainPage> {
    const page = await this.browserContext.newPage();
    const participant = TestParticipantFactory.createTestParticipant(page);
    this.participants.push(participant);

    await this.goToUrl(participant);
    const mainPage = new MainPage(participant);
    return mainPage;
  }

  public async teardown() {
    for (const participant of this.participants) {
      await participant.page.close();
    }
    await this.browserContext.close();
  }

  public async screenshotPages() {
    if (!this.testName){
      console.error("Aborting failure screenshots. No test name was found.");
      return;
    }
    
    await ScreenshotUtilities.takeFailureScreenshots(this.participants, this.testName);
  }

  private async goToUrl(participant: TestParticipant) {
    await participant.page.goto('https://www.appliedblockchain.com/');
  }
}

export default TestStateProvider;
