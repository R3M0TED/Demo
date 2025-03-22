import TestParticipant from '../../runtime/test-participant';
import AbstractPage from '../abstract-page';

const selectors = {
  title: `h3.ab-heading-h3-main`
};

abstract class AbstractSolutionsPage extends AbstractPage {
  constructor(participant: TestParticipant) {
    super(participant);
  }
  
  protected async waitForTitle(content : string) {
    await this.participant.page.locator(selectors.title).getByText(content).waitFor();
  }

  protected async otherFunctionsThatDoStuffAcrossAllSolutionPages(){
    // Stuff
  }

}

export default AbstractSolutionsPage;
