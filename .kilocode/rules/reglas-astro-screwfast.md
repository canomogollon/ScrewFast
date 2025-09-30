# Reglas Generales para el Proyecto Astro.js (Plantilla ScrewFast)

Estas son las directrices que el asistente de IA debe seguir para el desarrollo de este sitio web. El objetivo es mantener la consistencia, seguir las mejores prácticas de Astro.js y respetar la arquitectura de la plantilla "ScrewFast".

## 1. Estructura de Archivos y Nomenclatura

### 1.1. Componentes (`src/components/`)

- **Nomenclatura:** Los componentes de Astro (`.astro`), React (`.tsx`) o Svelte (`.svelte`) deben nombrarse en `PascalCase`.
  
  - **Correcto:** `Header.astro`, `CallToAction.astro`, `InteractiveCard.tsx`.

  - **Incorrecto:** `header.astro`, `call-to-action.astro`.

- **Organización:** Si un componente se vuelve complejo y requiere archivos adicionales (estilos, scripts), debe crearse una carpeta con el mismo nombre del componente para agrupar sus archivos relacionados.
  
### 1.2. Páginas (`src/pages/`)

- **Nomenclatura:** Las páginas deben nombrarse en `kebab-case` para URL amigables, excepto el `index.astro`.
  
  - **Correcto:** `sobre-nosotros.astro`, `contacto.astro`.

  - **Incorrecto:** `SobreNosotros.astro`.

- **Rutas Dinámicas:** Para páginas generadas dinámicamente, usar corchetes `[param]`. Por ejemplo, `src/pages/blog/[slug].astro`.
  
### 1.3. Layouts (`src/layouts/`)

- **Nomenclatura:** Los layouts deben nombrarse en `PascalCase`.
  
  - **Correcto:** `BaseLayout.astro`, `BlogLayout.astro`.
- **Propósito:** Los layouts deben contener la estructura HTML base (`<html>`, `<head>`, `<body>`), metadatos, y elementos comunes como el `Header` y `Footer`. El contenido de la página se inyectará a través de un `<slot />`.
  
### 1.4. Endpoints de API (`src/pages/api/`)

- **Nomenclatura:** Los archivos de endpoints deben nombrarse según la función que realizan, en `kebab-case`.
  
  - **Ejemplo:** `src/pages/api/enviar-formulario.ts`.

## 2. Desarrollo de Componentes (`.astro`)

### 2.1. Component Script (`---`)

- **Importaciones:** Todas las importaciones de componentes, utilidades y datos deben estar dentro del bloque de script (`---`).
  
- **Props:** Las props se deben definir usando `Astro.props`. Si se usa TypeScript, se deben definir las interfaces para las props.
  
  ```
  ---import type { SomeType } from '../types';interface Props {  title: string;  items: SomeType[];}const { title, items } = Astro.props;---
  ```
  
- **Lógica del Lado del Servidor:** Toda la lógica de obtención de datos (`fetch`), cálculos y preparación de variables debe realizarse exclusivamente en este bloque.
  
### 2.2. Component Template (`<template>`)

- **Renderizado Condicional:** Utiliza operadores ternarios o `&&` para el renderizado condicional.
  
  ```
  {condition && <p>Visible si 'condition' es verdadera.</p>}
  ```
  
- **Iteraciones:** Utiliza `.map()` para renderizar listas de elementos. **Siempre** incluye un atributo `key` único cuando sea posible, aunque Astro no lo requiera estrictamente.
  
  ```
  <ul>  {items.map(item => <li>{item.name}</li>)}</ul>
  ```
  
- **Slots:** Usa `<slot />` para hacer componentes componibles. Los slots con nombre (`<slot name="nombre" />`) son preferibles para componentes complejos como tarjetas o layouts.
  
## 3. Estilos (Styling)

- **Prioridad a Tailwind CSS:** Este proyecto utiliza Tailwind CSS como framework principal. **Siempre** se deben usar las clases de utilidad de Tailwind para estilizar componentes.
  
- **Estilos Scoped:** Para estilos muy específicos de un componente que no puedan lograrse con Tailwind, utiliza una etiqueta `<style>` dentro del archivo `.astro`. Estos estilos son `scoped` (locales) por defecto.
  
  ```
  <style>  .special-gradient {    background: linear-gradient(to right, #ff0000, #0000ff);  }</style>
  ```
  
- **Estilos Globales:** Modifica el archivo `src/styles/global.css` solo para definir estilos base de HTML, variables CSS personalizadas o aplicar capas base de Tailwind (`@layer base`). No agregues clases de utilidad personalizadas allí.
  
## 4. Interactividad y JavaScript

- **Astro Islands:** La interactividad del lado del cliente debe ser manejada con "Astro Islands". Los componentes interactivos (React, Svelte, Vue, etc.) deben importarse en archivos `.astro` y utilizar una directiva `client:*`.
  
- **Elegir la Directiva Correcta:**
  
  - `client:load`: Para componentes que deben ser interactivos inmediatamente (ej. un `Header` con menú desplegable).

  - `client:idle`: Para componentes de baja prioridad que pueden esperar a que el navegador esté libre.

  - `client:visible`: Para componentes que solo necesitan ser interactivos cuando son visibles en la pantalla (ej. animaciones al hacer scroll).

- **Scripts Nativos:** Para JavaScript simple y sin estado, usa etiquetas `<script>` estándar dentro de los archivos `.astro`. Por defecto, se procesan y empaquetan.
  
## 5. Manejo de Contenido y Datos

- **Colecciones de Contenido:** Para contenido como posts de blog o portafolios, utiliza las Colecciones de Contenido de Astro (`src/content/`). Define los esquemas en `src/content/config.ts` para asegurar la consistencia de los datos.
  
- **Imágenes:** Las imágenes deben ser importadas y utilizadas con el componente `<Image />` de Astro (`astro:assets`) para optimización automática. Coloca las imágenes en `src/assets`.
  
- **Archivos Estáticos:** Los archivos que no necesitan procesamiento (como `favicon.ico`, `robots.txt` o PDFs) deben colocarse en la carpeta `public/`.
