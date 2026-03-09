import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';
import { Timeouts } from './utils';

const AUTH_STATE_PATH = '.auth/state.json';
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: './tests',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [
        ['html', { outputFolder: 'reports/playwright-report' }],
        ['allure-playwright', { resultsDir: 'reports/allure-results' }],
        ['list']
    ],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        baseURL: process.env.BASE_URL || 'http://localhost:3000',
        actionTimeout: Timeouts.LONG,
        navigationTimeout: Timeouts.NAVIGATION,
        trace: 'on-first-retry',
        video: 'retain-on-failure',
        screenshot: 'only-on-failure',
        extraHTTPHeaders: {
            'Accept': 'application/json',
        },
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'setup',
            testMatch: /.*\.setup\.ts/,
        },
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                storageState: AUTH_STATE_PATH,
            },
            dependencies: ['setup'],
        },
        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox'],
                storageState: AUTH_STATE_PATH,
            },
            dependencies: ['setup'],
        },
        {
            name: 'webkit',
            use: {
                ...devices['Desktop Safari'],
                storageState: AUTH_STATE_PATH,
            },
            dependencies: ['setup'],
        },
        {
            name: 'api',
            testDir: './tests/api',
            use: {
                baseURL: process.env.API_BASE_URL || 'https://httpbin.org',
            },
        },
    ],
    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://127.0.0.1:3000',
    //   reuseExistingServer: !process.env.CI,
    // },

    /* Output directory for artifacts like screenshots, videos, traces, etc. */
    outputDir: 'reports/test-results',
});
