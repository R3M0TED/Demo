import TestParticipant from '../../runtime/test-participant';
import AbstractSolutionsPage from './abstract-solutions-page';

class AutomotiveSolutionsPage extends AbstractSolutionsPage {
  constructor(participant: TestParticipant) {
    super(participant);
  }

  public async waitForTitle(){
    await super.waitForTitle("Solutions in Automotive");
  }
}

export default AutomotiveSolutionsPage;
