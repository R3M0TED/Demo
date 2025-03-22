import TestParticipant from '../../runtime/test-participant';
import AbstractPage from '../abstract-page';
import IndustriesPopoverPage from './industries-popover-page';

const selectors = {
  navigationBarContainer: `nav.ab-nav-menu`,
  navigationBarItem: 'a.ab-navbar-dropdown-root-link.w-inline-block'
};

class NavigationBarPage extends AbstractPage {
  constructor(participant: TestParticipant) {
    super(participant);
  }

  public async clickIndustries() {
    await this.clickNavBarButton("Industries");
  }

  public async hoverIndustries() : Promise<IndustriesPopoverPage> {
    await this.hoverNavBarButton("Industries");
    return new IndustriesPopoverPage(this.participant);
  }

  private async clickNavBarButton(title: string) {
    await this.participant.page.locator(selectors.navigationBarContainer).locator(selectors.navigationBarItem).getByText(title).click();
  }

  private async hoverNavBarButton(title: string) {
    await this.participant.page.locator(selectors.navigationBarContainer).locator(selectors.navigationBarItem).getByText(title).hover();
  }
}

export default NavigationBarPage;
