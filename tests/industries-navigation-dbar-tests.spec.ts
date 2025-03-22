import { runTest } from '../runtime/run-test';

describe('IndustriesNavigationBarTests', () => {
  it('ClickingArtDirectsUserToCorrectPage ', async () => {
    await runTest(async (sp) => {
      let subjectMainPage = await sp.createTestParticipant();
      let subjectIndustriesPopover = await subjectMainPage.navigationBarPage.hoverIndustries();
      let subjectSolutionsPage = await subjectIndustriesPopover.clickArt();
      
      await expect(subjectSolutionsPage.waitForTitle()).toThrow();
    });
  });

  it('ClickingAutomotiveDirectsUserToCorrectPage ', async () => {
    await runTest(async (sp) => {
      let subjectMainPage = await sp.createTestParticipant();
      let subjectIndustriesPopover = await subjectMainPage.navigationBarPage.hoverIndustries();
      let subjectSolutionsPage = await subjectIndustriesPopover.clickAutomotive();
      
      await expect(subjectSolutionsPage.waitForTitle()).toThrow();
    });
  });
});
