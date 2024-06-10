import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bukalapak.com/');
  await page.getByPlaceholder('Aku mau belanja...').click();
  await page.getByPlaceholder('Aku mau belanja...').click();
  await page.getByPlaceholder('Aku mau belanja...').fill('pixel 7a');
  await page.getByPlaceholder('Aku mau belanja...').press('Enter');
});