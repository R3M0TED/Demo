import TestParticipant from '../../runtime/test-participant';
import AbstractSolutionsPage from './abstract-solutions-page';

class ArtSolutionsPage extends AbstractSolutionsPage {
  constructor(participant: TestParticipant) {
    super(participant);
  }

  public async waitForTitle(){
    await super.waitForTitle("Solutions in Art");
  }
}

export default ArtSolutionsPage;
