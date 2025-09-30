# Arquitectura del Sistema: Logikia (basado en ScrewFast)

## Descripción General

La arquitectura del proyecto Logikia se basa en la plantilla "ScrewFast", que utiliza un enfoque de componentes modulares con Astro. La estructura está diseñada para ser flexible y escalable, permitiendo una fácil personalización para las necesidades comerciales de Logikia.

## Estructura de Directorios Clave

- `src/components/`: Contiene todos los componentes de Astro, organizados en subdirectorios:
  - `sections/`: Componentes de alto nivel que representan secciones de una página (ej. `HeroSection`, `PricingSection`).
  - `ui/`: Componentes de interfaz de usuario reutilizables y de bajo nivel (ej. botones, tarjetas, íconos).
  - `layouts/`: Define la estructura general de las páginas.
- `src/content/`: Almacena el contenido gestionado como colecciones de Astro.
  - `blog/`: Para artículos de blog y marketing de contenidos.
  - `products/`: Para las páginas de detalle de productos/servicios.
  - `insights/`: Contenido similar al blog.
  - `docs/`: Utilizado por Starlight para la sección de "blog/insights" y cualquier documentación de apoyo.
- `src/pages/`: Define las rutas del sitio. Las páginas aquí pueden usar componentes de `src/components/` para construir la interfaz.
- `astro.config.mjs`: El corazón de la configuración del proyecto, donde se definen las integraciones (Starlight, Tailwind, etc.) y el comportamiento del sitio.

## Flujo de Datos y Renderizado

1. **Generación de Páginas:** Astro renderiza las páginas (`.astro` o `.mdx`) en HTML estático durante el build.
2. **Componentes:** Las páginas están compuestas por componentes de Astro (`.astro`), que encapsulan HTML, CSS y JavaScript del lado del cliente.
3. **Contenido:** El contenido de las colecciones (`src/content/`) se consulta y se inyecta en las páginas y componentes de Astro.
4. **Estilos:** Tailwind CSS se utiliza para estilizar los componentes, proporcionando un sistema de clases de utilidad.
5. **Interactividad:** El JavaScript del lado del cliente se maneja a través de las islas de Astro, asegurando que solo se envíe el JS necesario al navegador.

## Adaptación para Logikia

- **Personalización de Componentes:** Los componentes de la plantilla en `src/components/` serán modificados para reflejar la marca, el contenido y la funcionalidad de Logikia.
- **Contenido Comercial:** Las colecciones en `src/content/` se poblarán con los productos, servicios y artículos de blog de Logikia.
- **Internacionalización (i18n):** Se aprovechará la estructura i18n existente para ofrecer el sitio en español e inglés, creando los archivos de contenido correspondientes.
- **Starlight:** La integración de Starlight se utilizará para la sección de "blog" o "insights", proporcionando una plataforma robusta para el marketing de contenidos.

## Diagrama de Arquitectura (Simplificado)

```mermaid
graph TD
    A[Usuario] --> B(Navegador)
    B --> C{Sitio Estático (Astro)}
    C --> D[Páginas (.astro)]
    C --> E[Contenido (.mdx)]
    C --> F[Componentes (.astro)]
    D --> F
    E --> D
    F -- usa --> G[Tailwind CSS]
```
