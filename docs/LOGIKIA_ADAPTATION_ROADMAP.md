# Roadmap Estratégico: Adaptación de Plantilla AstroJS para LOGIKIA

## Introducción

Este documento es la guía maestra para la adaptación de la plantilla AstroJS "ScrewFast" a la identidad de marca y contenido del proyecto LOGIKIA. El objetivo es asegurar una implementación coherente, profesional y fiel a la visión de la marca, sirviendo como única fuente de verdad para el proceso de desarrollo.

**Referencia Principal:** [`@/.kilocode/rules/memory-bank/brand-identity.md`](./.kilocode/rules/memory-bank/brand-identity.md)

---

## Plan de Ejecución

| Fase | Tarea Específica | Descripción Detallada (Acciones y Criterios de Marca) | Entregable Clave | Prioridad |
| :--- | :--- | :--- | :--- | :--- |
| **1. Análisis y Preparación** | 1.1. Auditoría de Componentes de la Plantilla | Revisar cada componente en `src/components/sections` y `src/components/ui` para entender su función y estructura. Identificar qué componentes son reutilizables, cuáles necesitan adaptación y cuáles deben ser eliminados. | Documento de mapeo de componentes (Componente Plantilla -> Uso en LOGIKIA). | Alta |
| | 1.2. Mapeo de Contenido y Marca | Conectar el contenido de la guía de marca (`brand-identity.md`) con las secciones de la plantilla. Decidir dónde se mostrará la misión, visión, servicios, etc. Por ejemplo: `HeroSection` para el tagline, `Features` para los servicios. | Borrador de la estructura de contenido del sitio web. | Alta |
| | 1.3. Preparación de Activos | Recopilar todos los activos de marca necesarios: logotipo de LOGIKIA en formato SVG, imágenes de productos/servicios, y cualquier iconografía específica que reemplace la genérica de la plantilla. | Carpeta de activos (`src/assets/logikia/`) organizada. | Alta |
| **2. Adaptación Visual (Branding)** | 2.1. Configuración de Paleta de Colores | Modificar `tailwind.config.mjs` para incluir la paleta de colores corporativa. Definir los colores primario (`#0A2342`), secundario (`#F8F9FA`), y de acento (`#2ECC71`, `#E67E22`) como utilidades de Tailwind. | Archivo `tailwind.config.mjs` actualizado con los colores de LOGIKIA. | Alta |
| | 2.2. Implementación de Tipografía | Configurar los estilos globales en `src/styles/global.css` o `tailwind.config.mjs` para usar las fuentes corporativas. Aplicar jerarquía (H1, H2, párrafos) según la guía de marca para asegurar consistencia y legibilidad. | Estilos de tipografía globales implementados. | Alta |
| | 2.3. Reemplazo de Logotipo | Actualizar el componente `src/components/BrandLogo.astro` y el `favicon.ico` en `public/` para usar el logotipo oficial de LOGIKIA. Asegurar que se visualice correctamente en modos claro y oscuro. | Logotipo de LOGIKIA visible en el navbar y la pestaña del navegador. | Alta |
| | 2.4. Estilizado de Componentes UI | Adaptar los componentes base en `src/components/ui` (botones, tarjetas, formularios) para que utilicen la nueva paleta de colores y tipografía. Los botones de acción principal deben usar el color de acento. | Componentes UI alineados con la identidad visual de la marca. | Media |
| **3. Integración de Contenido** | 3.1. Adaptación de la Sección Principal (Hero) | Modificar el componente `src/components/sections/landing/HeroSection.astro` para incluir el tagline principal de LOGIKIA ("Inteligencia Artificial basada en Lógica...") y un llamado a la acción (CTA) relevante. | `HeroSection` con el mensaje y la identidad de LOGIKIA. | Alta |
| | 3.2. Carga de Contenido de Secciones | Reemplazar el texto e imágenes de relleno en las secciones (`Features`, `Pricing`, `About`, `Contact`) con el contenido real de LOGIKIA. Asegurarse de que el tono de voz sea profesional y refleje confianza y precisión. | Secciones principales del sitio con contenido final. | Alta |
| | 3.3. Creación de Páginas de Producto/Servicio | Utilizar la colección de Astro en `src/content/products/` para crear las páginas detalladas de los servicios "Abogado 100% colombiano" y "Asesor comercial adaptado". | Páginas de servicios publicadas y accesibles. | Media |
| | 3.4. Configuración del Blog/Insights | Adaptar la sección de `insights` o `blog` para que sirva como plataforma de marketing de contenidos, alineada con los objetivos de negocio. | Sección de Blog/Insights lista para publicar contenido. | Baja |
| **4. Revisión y QA** | 4.1. Verificación de Consistencia de Marca | Realizar una revisión visual completa de todas las páginas para asegurar que los colores, fuentes y espaciados son consistentes y se aplican correctamente según la guía de marca. | Checklist de consistencia de marca completado. | Alta |
| | 4.2. Pruebas de Responsividad | Navegar el sitio completo en diferentes resoluciones (móvil, tablet, desktop) para garantizar que la experiencia de usuario es óptima y no hay elementos rotos o desalineados. | Reporte de pruebas de responsividad sin errores críticos. | Alta |
| | 4.3. Pruebas Funcionales | Probar todos los enlaces, botones, formularios de contacto y cualquier otro elemento interactivo para confirmar que funcionan como se espera. | Reporte de pruebas funcionales exitoso. | Media |
| **5. Entrega y Documentación** | 5.1. Optimización y Build Final | Ejecutar el comando `npm run build` para generar la versión final y optimizada del sitio. Verificar que no haya errores en la consola y que los archivos generados sean correctos. | Archivos de producción listos en la carpeta `dist/`. | Alta |
| | 5.2. Creación de Guía de Mantenimiento | Crear un archivo simple `MANUAL_USO.md` en `/docs` que explique cómo actualizar contenido básico (ej. cambiar texto en la página de inicio, agregar un nuevo post al blog). | `MANUAL_USO.md` creado. | Media |
