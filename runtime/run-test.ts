import BrowserContextFactory from './browser-context-factory';
import TestStateProvider from './test-state-provider';

const runTest = async (testLogic: (sp: TestStateProvider) => Promise<void>) => {
  const testStateProvider = new TestStateProvider(await BrowserContextFactory.createBrowserContext());

  try {
    await testLogic(testStateProvider);
  }
  catch (error){
    await testStateProvider.screenshotPages();
    throw error;
  }
   finally {
    await testStateProvider.teardown();
  }
};

export { runTest };
