# E2E Automation Core: Playwright & TypeScript Migration Framework

Framework de automatización de pruebas End-to-End desarrollado desde cero utilizando **Playwright** y **TypeScript**, aplicando el patrón de diseño **Page Object Model (POM)** sobre la plataforma de comercio electrónico de prueba *SauceDemo*.

## 🚀 Competencias Demostradas
* Transición de Selenium hacia una arquitectura moderna basada en **Playwright** y **TypeScript**.
* Implementación de **Auto-waits** nativas y aserciones de tipo *Web-First*.
* Estructuración limpia del código mediante el patrón **Page Object Model (POM)**.
* Cobertura de flujos positivos y negativos (casos de prueba de inicio de sesión).
* Control de versiones profesional y estructurado con Git y GitHub.

## 🛠️ Tecnologías Utilizadas
* **Lenguaje:** TypeScript (Node.js)
* **Framework de Testing:** Playwright
* **Control de Versiones:** Git & GitHub

## 📂 Estructura del Proyecto
```text
playwright-ts-framework/
├── pages/
│   └── LoginPage.ts        # Page Object para la vista de autenticación
├── tests/
│   ├── example.spec.ts     # Pruebas de ejemplo iniciales
│   └── login.spec.ts       # Pruebas E2E de login (positivo y negativo con POM)
├── playwright.config.ts    # Configuración global de Playwright
└── package.json            # Dependencias y scripts del proyecto
