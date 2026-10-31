import { defineConfig, devices } from '@playwright/test'

/**
 * PhantomShield Playwright configuration.
 * E2E tests target Chromium only for the MVP.
 * The dev server must be started manually before running tests:
 *   npm run dev
 * Then in a separate terminal:
 *   npm run test:e2e
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
