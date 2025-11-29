import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration
 *
 * Feature Slice 35: Cross-Browser Testing
 * Configured for testing across all supported browsers:
 * - Chrome (Desktop)
 * - Firefox (Desktop)
 * - Safari/WebKit (Desktop)
 * - Edge (Desktop)
 * - Mobile Safari (iPhone)
 * - Mobile Chrome (Android)
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout: 30000, // 30 second default timeout
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
    // Give actions more time to complete
    actionTimeout: 15000,
  },
  projects: [
    // Desktop Browsers
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'edge',
      use: { ...devices['Desktop Edge'] },
    },
    // Mobile Browsers
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 14'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 7'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
