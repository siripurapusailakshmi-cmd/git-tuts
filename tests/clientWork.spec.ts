import { test, expect } from '@playwright/test';

// Test: EPAM Client Work navigation
test.describe('EPAM site - Client Work navigation', () => {
  test('should navigate to Client Work page and display "Client Work"', async ({ page }) => {
    // Navigate to the EPAM homepage and wait for content to load
    await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });

    // Locate the "Services" menu item in the header and ensure it's visible before clicking
    const servicesLink = page.getByRole('link', { name: 'Services' });
    await expect(servicesLink).toBeVisible({ timeout: 10000 });
    await servicesLink.click();

    // Locate the "Explore Our Client Work" link and wait for it to be visible
    const exploreClientWork = page.getByRole('link', { name: 'Explore Our Client Work' });
    await expect(exploreClientWork).toBeVisible({ timeout: 10000 });

    // Click the link and wait for navigation to complete
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
      exploreClientWork.click(),
    ]);

    // Verify that the text "Client Work" is visible on the resulting page
    const clientWorkHeading = page.getByText('Client Work');
    await expect(clientWorkHeading).toBeVisible({ timeout: 10000 });
  });
});
