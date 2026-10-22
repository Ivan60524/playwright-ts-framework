import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Flujo E2E de Compra en SauceDemo', () => {

  test('Debería iniciar sesión y agregar el primer producto al carrito con éxito', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // 1. Iniciar sesión con el usuario estándar
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // 2. Agregar el primer producto al carrito de forma explícita
    await inventoryPage.addFirstItemToCart();

    // 3. Ir al carrito y verificar que el producto esté presente
    await inventoryPage.goToCart();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    
    // Validar que el badge del carrito muestra 1 producto con espera web-first implícita
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toBeVisible();
    await expect(cartBadge).toHaveText('1');
  });

});