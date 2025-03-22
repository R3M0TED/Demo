import { Page } from 'playwright';

class TestParticipant {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}

export default TestParticipant;
