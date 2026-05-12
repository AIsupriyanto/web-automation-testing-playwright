/**
 * Test Data and Helper Functions
 */

export const testUsers = {
  validUser: {
    email: 'user@example.com',
    password: 'password123',
    firstName: 'John',
    lastName: 'Doe',
  },
  invalidUser: {
    email: 'invalid@example.com',
    password: 'wrongpassword',
  },
  adminUser: {
    email: 'admin@example.com',
    password: 'adminpass123',
  },
};

export const testUrls = {
  login: '/login',
  dashboard: '/dashboard',
  settings: '/settings',
  profile: '/profile',
};

export const errorMessages = {
  invalidCredentials: 'Invalid email or password',
  requiredField: 'This field is required',
  invalidEmail: 'Please enter a valid email',
};

/**
 * Generate random email for testing
 */
export function generateRandomEmail(): string {
  return `user${Math.random().toString(36).substring(7)}@example.com`;
}

/**
 * Generate random password
 */
export function generateRandomPassword(): string {
  return `Pass${Math.random().toString(36).substring(2, 15)}123!`;
}

/**
 * Wait for a specified time in milliseconds
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Get current timestamp
 */
export function getCurrentTimestamp(): string {
  return new Date().toISOString();
}
