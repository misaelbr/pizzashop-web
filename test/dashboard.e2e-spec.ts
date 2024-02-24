import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  await expect(page.getByText('20', { exact: true })).toBeVisible()
  await expect(page.getByText('-5% em relação a ontem')).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  await expect(page.getByText('1.000', { exact: true })).toBeVisible()
  await expect(page.getByText('+200% em relação ao mês anterior')).toBeVisible()
})

test('display month cancel orders amount metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  await expect(page.getByText('300', { exact: true })).toBeVisible()
  await expect(page.getByText('-10% em relação ao mês anterior')).toBeVisible()
})

test('display month revenue metrics', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  await expect(page.getByText('R$ 158,84', { exact: true })).toBeVisible()
  await expect(page.getByText('-500% em relação ao mês anterior')).toBeVisible()
})
