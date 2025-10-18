# Servidores MCP (Model Context Protocol) del Proyecto

Este documento describe los servidores MCP disponibles para este proyecto, divididos en globales y específicos del proyecto.

## Servidores MCP Específicos del Proyecto

Estos servidores están definidos en `.kilocode/mcp.json` y están configurados para las necesidades particulares de este proyecto Astro.

### Astro docs

- **Alcance:** Proyecto
- **Propósito:** Proporciona una herramienta para buscar directamente en la documentación oficial de Astro. Esencial para resolver dudas y aplicar las mejores prácticas del framework.
- **Herramientas Clave:** `search_astro_docs`

### Playwright

- **Alcance:** Proyecto
- **Propósito:** Permite la automatización y pruebas End-to-End (E2E) del sitio web utilizando el navegador Chrome en modo headless. Útil para validación visual y funcional.
- **Herramientas Clave:** `browser_navigate`, `browser_click`, `browser_fill_form`, `browser_take_screenshot`.
- **⚠️ Advertencia sobre Alucinaciones:** Se ha detectado que la IA puede "alucinar" nombres de herramientas incorrectos (ej. `playwright_navigate` en lugar de `browser_navigate`). **Verificar siempre los nombres de las herramientas disponibles en la documentación o en los mensajes de error.** El prefijo correcto para las herramientas de Playwright es `browser_`.

### Puppeteer

- **Alcance:** Proyecto
- **Propósito:** Ofrece otra opción para la automatización del navegador, configurado para usar una instancia existente de Google Chrome. Alternativa a Playwright para tareas de scripting en el navegador.
- **Herramientas Clave:** `puppeteer_navigate`, `puppeteer_screenshot`, `puppeteer_click`

## Servidores MCP Globales

Estos servidores están disponibles globalmente y proporcionan herramientas de propósito general.

### filesystem

- **Alcance:** Global
- **Propósito:** Gestión completa del sistema de archivos, permitiendo leer, escribir, editar y listar archivos y directorios.
- **Herramientas Clave:** `read_file`, `write_file`, `list_directory`

### context7

- **Alcance:** Global
- **Propósito:** Obtener documentación actualizada y ejemplos de código para cualquier librería o paquete de NPM.
- **Herramientas Clave:** `resolve-library-id`, `get-library-docs`

### deepwiki

- **Alcance:** Global
- **Propósito:** Realizar preguntas y obtener documentación sobre repositorios de GitHub.
- **Herramientas Clave:** `ask_question`
