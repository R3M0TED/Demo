import TestParticipant from '../test-participant';
import { Page } from 'playwright';

class TestParticipantFactory {
  public static createTestParticipant(page : Page) : TestParticipant {
    return new TestParticipant(page);
  }
}

export default TestParticipantFactory;
