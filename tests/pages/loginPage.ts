import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  // Locators
  readonly usernameInput = '#username';
  readonly passwordInput = '#password';
  readonly loginButton = 'button[type="submit"]';
  readonly errorMessage = '.error-message';
  readonly rememberMeCheckbox = '#rememberMe';
  readonly forgotPasswordLink = 'a[href="/forgot-password"]';

  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to login page
   */
  async goto(): Promise<void> {
    await this.page.goto('/login');
  }

  /**
   * Login with email and password
   */
  async login(email: string, password: string): Promise<void> {
    await this.fill(this.usernameInput, email);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  /**
   * Check if login form is visible
   */
  async isLoginFormVisible(): Promise<boolean> {
    return await this.isVisible(this.usernameInput);
  }

  /**
   * Get error message text
   */
  async getErrorMessage(): Promise<string | null> {
    return await this.getText(this.errorMessage);
  }

  /**
   * Check if error message is displayed
   */
  async isErrorMessageDisplayed(): Promise<boolean> {
    return await this.isVisible(this.errorMessage);
  }

  /**
   * Check remember me checkbox
   */
  async checkRememberMe(): Promise<void> {
    await this.click(this.rememberMeCheckbox);
  }

  /**
   * Click forgot password link
   */
  async clickForgotPassword(): Promise<void> {
    await this.click(this.forgotPasswordLink);
  }

  /**
   * Verify username field has value
   */
  async verifyUsernameField(email: string): Promise<void> {
    const value = await this.page.inputValue(this.usernameInput);
    if (value !== email) {
      throw new Error(`Expected username to be '${email}' but got '${value}'`);
    }
  }
}
