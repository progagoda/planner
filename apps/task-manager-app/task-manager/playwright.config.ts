import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

// For CI, you may want to set BASE_URL to the deployed application.
const baseURL = process.env['BASE_URL'] ?? 'http://localhost:3000';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    ...nxE2EPreset(__filename, { testDir: './e2e' }),
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        baseURL,
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
    },
    /* Run your local dev server before starting the tests */
    webServer: {
        command: 'npx serve task-manager',
        url: 'http://localhost:3000',
        reuseExistingServer: !process.env.CI,
    },
    projects: [
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

        // Uncomment for mobile browsers support
        /* {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    }, */

        // Uncomment for branded browsers
    /* {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    } */
    ],
});