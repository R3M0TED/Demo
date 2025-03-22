import TestParticipant from '../../runtime/test-participant';
import AbstractPage from '../abstract-page';

const selectors = {
  menuContainer: `figure.ab-navbar-dropdown-list.w-dropdown-list.w--open`,
  menuListItem: `a.ab-navbar-dd-list-link.w-dropdown-link`
};

abstract class AbstractIndustriesPopoverPage extends AbstractPage {
  constructor(participant: TestParticipant) {
    super(participant);
  }
  
  protected async clickMenuItemButton(title : string) {
    await this.participant.page.locator(selectors.menuContainer).locator(selectors.menuListItem).getByText(title).click();
  }
}

export default AbstractIndustriesPopoverPage;
