import TestParticipant from '../runtime/test-participant';
import AbstractPage from './abstract-page';
import NavigationBarPage from './navigation-bar/navigation-bar-page';

class MainPage extends AbstractPage {

  public navigationBarPage: NavigationBarPage;

  constructor(participant: TestParticipant) {
    super(participant);

    this.navigationBarPage = new NavigationBarPage(this.participant);
  }
}

export default MainPage;
