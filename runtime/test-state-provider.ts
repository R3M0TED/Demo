import { BrowserContext } from 'playwright';
import TestParticipant from './test-participant';
import MainPage from '../page-object-models/main-page';
import ScreenshotUtilities from './screenshot-utilities';

class TestStateProvider {
  private browserContext: BrowserContext;
  private participants: TestParticipant[] = [];

  constructor(context: BrowserContext) {
    this.browserContext = context;
  }

  public async createTestParticipant(navigate: boolean = true): Promise<MainPage> {
    const page = await this.browserContext.newPage();
    const participant = new TestParticipant(page);
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
    if (this.participants.length === 0) {
      return;
    }

    const testName = expect.getState().currentTestName ?? 'Null';
    await ScreenshotUtilities.takeFailureScreenshots(this.participants, testName);
  }

  private async goToUrl(participant: TestParticipant) {
    await participant.page.goto('https://www.appliedblockchain.com/');
  }
}

export default TestStateProvider;
