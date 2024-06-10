import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.tokopedia.com/');
  await page.getByPlaceholder('Cari di Tokopedia').click();
  await page.getByPlaceholder('Cari di Tokopedia').fill('pixel 7a');
  await page.getByRole('link', { name: 'HP Google Pixel 7a 5G 8GB RAM Google Tensor-Pajak Resmi IMEI Terdaftar status' }).click();
});