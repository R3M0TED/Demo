import SetupFixture from '../runtime/setup-fixture';

describe('IndustriesNavigationBarTests', () => {
  it('ClickingArtDirectsUserToCorrectPage ', async () => {
    await SetupFixture.runTest(async (sp) => {
      const subjectMainPage = await sp.createTestParticipant();
      const subjectIndustriesPopover = await subjectMainPage.navigationBarPage.hoverIndustries();
      const subjectSolutionsPage = await subjectIndustriesPopover.clickArt();
      await expect(subjectSolutionsPage.waitForTitle()).resolves.not.toThrow();
    });
  });

  it('ClickingAutomotiveDirectsUserToCorrectPage ', async () => {
    await SetupFixture.runTest(async (sp) => {
      const subjectMainPage = await sp.createTestParticipant();
      const subjectIndustriesPopover = await subjectMainPage.navigationBarPage.hoverIndustries();
      const subjectSolutionsPage = await subjectIndustriesPopover.clickAutomotive();
      
      await expect(subjectSolutionsPage.waitForTitle()).resolves.not.toThrow();
    });
  });
});
