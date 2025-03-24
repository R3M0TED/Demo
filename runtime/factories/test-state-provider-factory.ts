import TestStateProvider from '../test-state-provider';
import BrowserContextFactory from './browser-context-factory';

class TestStateProviderFactory {
  public static async createTestStateProvider(testName? : string) : Promise<TestStateProvider> {
    return new TestStateProvider(await BrowserContextFactory.createBrowserContext(), testName);
  }
}

export default TestStateProviderFactory;
