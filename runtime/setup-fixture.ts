import TestStateProvider from './test-state-provider';
import TestStateProviderFactory from './factories/test-state-provider-factory';

class SetupFixture {
    public static async runTest(testLogic: (sp: TestStateProvider) => Promise<void>): Promise<void> {
        const testStateProvider = await TestStateProviderFactory.createTestStateProvider(
          expect.getState().currentTestName
        );
    
        try {
          await testLogic(testStateProvider);
        } catch (error) {
          await testStateProvider.screenshotPages();
          throw error;
        } finally {
          await testStateProvider.teardown();
        }
      }
}

export default SetupFixture;
