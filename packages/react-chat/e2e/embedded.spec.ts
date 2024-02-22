import { expect, test } from '@playwright/test';

test('renders embedded webchat and starts automatically', async ({ page }) => {
  await page.goto('embedded');

  const chat = page.locator('.vfrc-chat');
  await chat.waitFor({ state: 'visible' });
  expect(chat).toBeInViewport();

  await page.locator('.vfrc-chat-input').waitFor({ state: 'visible' });
});
