import TestParticipant from '../runtime/test-participant';

abstract class AbstractPage {
  protected participant: TestParticipant;
  
  constructor(participant : TestParticipant){
    this.participant = participant;
  }
 
  public async pauseTest(){
    await this.participant.page.pause();
  }

}

export default AbstractPage;
