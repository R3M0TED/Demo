import { runTest } from '../runtime/run-test';

describe('MultipleUsersDemoTests', () => {
  it('WhenTwoUsersDoSomethingThenThisHappens', async () => {
    await runTest(async (sp) => {
      let subjectMainPage = await sp.createTestParticipant();
      let witnessMainPage = await sp.createTestParticipant();

      let subjectIndustriesPopover = await subjectMainPage.navigationBarPage.hoverIndustries();
      let witnessIndustriesPopover = await witnessMainPage.navigationBarPage.hoverIndustries();

      let subjectSolutionsPage = await subjectIndustriesPopover.clickArt();
      let witnessSolutionsPage = await witnessIndustriesPopover.clickArt();
      
      await expect(subjectSolutionsPage.waitForTitle()).toThrow();
      await expect(witnessSolutionsPage.waitForTitle()).resolves.not.toThrow();
    });
  });
});
