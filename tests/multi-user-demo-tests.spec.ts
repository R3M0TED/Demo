import SetupFixture from '../runtime/setup-fixture';

describe('MultipleUsersDemoTests', () => {
  it('WhenTwoUsersDoSomethingThenThisHappens', async () => {
    await SetupFixture.runTest(async (sp) => {
      const subjectMainPage = await sp.createTestParticipant();
      const witnessMainPage = await sp.createTestParticipant();

      const subjectIndustriesPopover = await subjectMainPage.navigationBarPage.hoverIndustries();
      const witnessIndustriesPopover = await witnessMainPage.navigationBarPage.hoverIndustries();

      const subjectSolutionsPage = await subjectIndustriesPopover.clickArt();
      const witnessSolutionsPage = await witnessIndustriesPopover.clickArt();
      
      await expect(subjectSolutionsPage.waitForTitle()).resolves.not.toThrow();
      await expect(witnessSolutionsPage.waitForTitle()).resolves.not.toThrow();
    });
  });
});
