import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class DashboardPage extends BasePage {
  // Locators
  readonly welcomeMessage = '.welcome-message';
  readonly userProfile = '.user-profile';
  readonly logoutButton = 'button[data-action="logout"]';
  readonly userMenu = '.user-menu';
  readonly settingsButton = 'a[href="/settings"]';
  readonly dashboardTitle = 'h1';

  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to dashboard
   */
  async goto(): Promise<void> {
    await this.page.goto('/dashboard');
  }

  /**
   * Check if dashboard is loaded
   */
  async isDashboardLoaded(): Promise<boolean> {
    return await this.isVisible(this.dashboardTitle);
  }

  /**
   * Get welcome message
   */
  async getWelcomeMessage(): Promise<string | null> {
    return await this.getText(this.welcomeMessage);
  }

  /**
   * Check if user profile is visible
   */
  async isUserProfileVisible(): Promise<boolean> {
    return await this.isVisible(this.userProfile);
  }

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    await this.click(this.userMenu);
    await this.click(this.logoutButton);
  }

  /**
   * Navigate to settings
   */
  async goToSettings(): Promise<void> {
    await this.click(this.settingsButton);
  }

  /**
   * Get dashboard title
   */
  async getDashboardTitle(): Promise<string | null> {
    return await this.getText(this.dashboardTitle);
  }
}
