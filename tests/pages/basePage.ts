import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to a specific URL
   */
  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  /**
   * Fill a text input field
   */
  async fill(selector: string, text: string): Promise<void> {
    await this.page.fill(selector, text);
  }

  /**
   * Click an element
   */
  async click(selector: string): Promise<void> {
    await this.page.click(selector);
  }

  /**
   * Get text content of an element
   */
  async getText(selector: string): Promise<string | null> {
    return await this.page.textContent(selector);
  }

  /**
   * Check if element is visible
   */
  async isVisible(selector: string): Promise<boolean> {
    return await this.page.isVisible(selector);
  }

  /**
   * Wait for element to be visible
   */
  async waitForElement(selector: string, timeout: number = 5000): Promise<void> {
    await this.page.waitForSelector(selector, { timeout });
  }

  /**
   * Take a screenshot
   */
  async takeScreenshot(name: string): Promise<void> {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
  }

  /**
   * Press a key
   */
  async press(key: string): Promise<void> {
    await this.page.press('body', key);
  }

  /**
   * Get current URL
   */
  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  /**
   * Get page title
   */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }
}
