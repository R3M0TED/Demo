import { Browser, BrowserContext, chromium, firefox, webkit} from 'playwright-core';
import testSettings from '../../testSettings.config';

class BrowserContextFactory {
  public static async createBrowserContext() : Promise<BrowserContext> {
    const browser = await this.createBrowser(testSettings.browser)
      
    const context = await browser.newContext();
    return context;
  }

  private static async createBrowser(browserType: string): Promise<Browser> {
    const options = this.getBrowserOptions(); 
  
    switch (browserType.toLowerCase()) {
      case 'chromium':
        return await chromium.launch(options);
      case 'firefox':
        return await firefox.launch(options);
      case 'webkit':
        return await webkit.launch(options);
      default:
        throw new Error(`Unsupported browser type: ${browserType}`);
    }
  }
  
  private static getBrowserOptions(): { headless: boolean } {
    return { headless: testSettings.headless };
  }
}

export default BrowserContextFactory;
