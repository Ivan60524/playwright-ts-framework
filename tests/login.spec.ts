import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Debería iniciar sesión exitosamente usando POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // 1. Usar el método encapsulado para navegar
  await loginPage.goto();

  // 2. Usar el método encapsulado para iniciar sesión
  await loginPage.login('standard_user', 'secret_sauce');

  // 3. Validaciones de éxito
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.title')).toHaveText('Products');
});

test('Debería mostrar un mensaje de error con usuario bloqueado usando POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // 1. Navegar y hacer login con usuario bloqueado
  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');

  // 2. Validar el mensaje de error utilizando el método del Page Object
  const errorMessage = await loginPage.getErrorMessage();
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Epic sadface: Sorry, this user has been locked out.');
});