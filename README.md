# 🚀 E2E Automation Core: Playwright & TypeScript Migration Framework

Framework de automatización de pruebas End-to-End desarrollado desde cero utilizando **Playwright** y **TypeScript**, aplicando el patrón de diseño **Page Object Model (POM)** sobre la plataforma de comercio electrónico de prueba **SauceDemo**. Este proyecto forma parte de mi evolución técnica desde Selenium hacia estándares modernos de ingeniería de calidad.

## 🚀 Competencias Demostradas
- **Migración a Playwright y TypeScript:** Transición desde conceptos clásicos (Selenium) hacia una arquitectura moderna con tipado estricto y aserciones *Web-First*.
- **Patrón Page Object Model (POM):** Abstracción limpia de selectores y acciones en clases modulares (`LoginPage`, `InventoryPage`).
- **Pruebas E2E Robustas:** Cobertura de flujos críticos de autenticación (casos positivos y negativos) y el proceso completo de compra (*checkout*).
- **Integración Continua (CI/CD):** Pipeline automatizado con **GitHub Actions** para ejecución en entornos virtuales y validación constante en la nube.
- **Control de Versiones Profesional:** Gestión de ramas, commits semánticos y sincronización remota en GitHub.

## 🛠️ Tecnologías Utilizadas
- **Lenguaje:** TypeScript (Node.js)[cite: 1]
- **Framework de Testing:** Playwright[cite: 1]
- **Integración Continua:** GitHub Actions[cite: 1]
- **Control de Versiones:** Git & GitHub[cite: 1]

## 📂 Estructura del Proyecto
playwright-ts-framework/
├── .github/workflows/
│   └── playwright.yml      # Pipeline de CI/CD automatizado
├── pages/
│   ├── LoginPage.ts        # Page Object para la vista de autenticación
│   └── InventoryPage.ts    # Page Object para el catálogo y carrito
├── tests/
│   ├── checkout.spec.ts    # Pruebas E2E completas del flujo de compra
│   ├── example.spec.ts     # Pruebas de ejemplo iniciales
│   └── login.spec.ts       # Pruebas E2E de login (positivo y negativo con POM)
├── playwright.config.ts    # Configuración global multi-navegador
└── package.json            # Dependencias y scripts del proyecto