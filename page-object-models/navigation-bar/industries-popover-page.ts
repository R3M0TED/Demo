import TestParticipant from '../../runtime/test-participant';
import AbstractIndustriesPopoverPage from './abstract-industries-popover-page';
import ArtSolutionsPage from '../industries/art-solutions-page';
import AutomotiveSolutionsPage from '../industries/automotive-solutions-page';

class IndustriesPopoverPage extends AbstractIndustriesPopoverPage {
  constructor(participant: TestParticipant) {
    super(participant);
  }
  
  public async clickArt() : Promise<ArtSolutionsPage> {
    await this.clickMenuItemButton("Art");
    return new ArtSolutionsPage(this.participant);
  }

  public async clickAutomotive() : Promise<AutomotiveSolutionsPage> {
    await this.clickMenuItemButton("Automotive");
    return new AutomotiveSolutionsPage(this.participant);
  }
}

export default IndustriesPopoverPage;
