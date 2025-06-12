import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",

  timeout: 2 * 60 * 1000, // 2 minute 60 seconds and 1000 milliseconds (Each test should be execute with in the given time)

  // This sets the default timeout for all expect() assertions in your tests.
  // expect: {
  //   timeout: 10000, // 10 seconds
  // },

  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only   2: run in CI/CD,  0: run in local*/
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  reporter: "html", // Use multiple report generaion using [ ["html"], ["json", { outputFile: "json-test-report.json" }],["junit", { outputFile: "junit-test-report.xml" }]],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    // Capture screenshot after each test failure.
    screenshot: "only-on-failure",

    // Capture video for each test.
    // video: "on",

    // Capture video for each test, but only if the test fails.
    // video: "retain-on-failure",

    // Turn on trace for all the tests.
    trace: "on",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: "on-first-retry",

    colorScheme: "dark",

    // This controls how long Playwright waits for actions like click, fill, hover, etc.. Defaults to 30 seconds.
    actionTimeout: 60_000,

    // This controls how long Playwright waits for a page to load during navigation (goto, click that triggers navigation, etc.). Defaults to 30 seconds.
    navigationTimeout: 60_000,

    // Maximum time each action such as `click()` can take. Defaults to 0 (no limit).
    // actionTimeout: 0,

    // Name of the browser that runs tests. For example `chromium`, `firefox`, `webkit`.
    // browserName: 'chromium',

    // Toggles bypassing Content-Security-Policy.
    // bypassCSP: true,

    // Channel to use, for example "chrome", "chrome-beta", "msedge", "msedge-beta".
    // channel: 'chrome',

    // Run browser in headless mode.
    headless: false,

    // Credentials for HTTP authentication.
    // httpCredentials: {
    //   username: "user",
    //   password: "pass",
    // },

    // Whether to ignore HTTPS errors during navigation.
    // ignoreHTTPSErrors: true,

    // Proxy settings used for all pages in the test.
    // proxy: {
    //   server: "http://myproxy.com:3128",
    //   bypass: "localhost",
    // },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: "Google Chrome",
    //   use: { ...devices["Desktop Chrome"], channel: "chrome" },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
