import { test, expect } from '@playwright/test';

test.describe('New Todo', () => {
  test('should allow me to add todo items', async ({ page }) => {
    // create a new todo locator
    
    console.log('This is test 04');

    await page.goto('http://192.168.100.8:30552/hello');

    await expect(page).toHaveURL('http://192.168.100.8:30552/welcome');
    
  });
});


