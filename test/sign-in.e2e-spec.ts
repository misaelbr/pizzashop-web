import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', {
    waitUntil: 'networkidle',
  })

  await page.getByLabel('Seu e-mail').fill('teste@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText(
    'Enviamos um link de autenticação para seu e-mail.',
  )

  await expect(toast).toBeVisible()
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', {
    waitUntil: 'networkidle',
  })

  await page.getByLabel('Seu e-mail').fill('john@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Credenciais inválidas.')

  expect(toast).toBeVisible()
})

test('navigate to new restaurante page', async ({ page }) => {
  await page.goto('/sign-in', {
    waitUntil: 'networkidle',
  })

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')
  await page.waitForTimeout(250)
})
