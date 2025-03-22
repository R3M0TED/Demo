import { BrowserContext, chromium } from 'playwright-core';

class BrowserContextFactory {
  public static async createBrowserContext() : Promise<BrowserContext> {
    let browser = await chromium.launch(
      { 
        headless: false 
      });
      
    let context = await browser.newContext();
    return context;
  }
}

export default BrowserContextFactory;
