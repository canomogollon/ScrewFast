# Step: Corregir Build y Desplegar en GitHub Pages

## Problema Identificado

El `build` del proyecto falla debido a 11 errores de TypeScript, lo que impide el despliegue a través de la acción de GitHub. Adicionalmente, la configuración de `site` y `base` en `astro.config.mjs` es incorrecta para el repositorio de destino.

## Solución Propuesta

Se realizarán las siguientes acciones:

1. Corregir todos los errores de TypeScript para permitir que `astro check` y, por ende, `npm run build`, se completen con éxito.
2. Actualizar `astro.config.mjs` con los valores correctos de `site` y `base` para el despliegue en GitHub Pages en el repositorio `canomogollon/ScrewFast`.

## Implementación Steps

### 1. Corregir Errores de TypeScript

#### a. `src/components/ui/cards/CardBlogRecent.astro`

- **Cambio**: Eliminar la referencia a la propiedad `role` que no existe en el `blogCollection` schema.
- **Archivo a modificar**: `src/components/ui/cards/CardBlogRecent.astro`

#### b. `src/pages/en/blog/[id].astro` y `src/pages/fr/blog/[id].astro`

- **Cambio**: Reemplazar el uso de `post.data.contents` (que no existe) por el componente `<Content />` para renderizar el cuerpo del post y usar `post.data.excerpt` para el `metaDescription`.
- **Archivos a modificar**: `src/pages/en/blog/[id].astro`, `src/pages/fr/blog/[id].astro`

#### c. `src/pages/faq.astro`

- **Cambio**:
  - Añadir un tipo explícito `any[]` a la variable `faqStructuredData`.
  - Añadir una comprobación de tipo segura para `window.HSAccordion` para evitar errores de TypeScript.
- **Archivo a modificar**: `src/pages/faq.astro`

#### d. `src/pages/404.astro`

- **Cambio**: Añadir una comprobación de nulidad para el elemento `goBackButton` antes de asignarle un `addEventListener`.
- **Archivo a modificar**: `src/pages/404.astro`

### 2. Actualizar Configuración de Despliegue

#### a. `astro.config.mjs`

- **Cambio**: Modificar las propiedades `site` y `base` para que apunten al repositorio y URL correctos de GitHub Pages. El nombre del repositorio es `ScrewFast`.
- **Archivo a modificar**: `astro.config.mjs`

## Archivos a Modificar y Ejemplos de Código

### 1. `src/components/ui/cards/CardBlogRecent.astro`

```diff
<<<<<<< SEARCH
:start_line:54
-------
        <p class="text-xs text-neutral-500">
          {blogEntry.data.role}
        </p>
=======
        <p class="text-xs text-neutral-500">
          {blogEntry.data.category || 'Artículo'}
        </p>
>>>>>>> REPLACE
```

### 2. `src/pages/en/blog/[id].astro`

```diff
<<<<<<< SEARCH
:start_line:42
-------
const metaDescription =
  post.data.contents[0] || `Lisez ${post.data.title} sur le blog de ScrewFast`;
=======
const metaDescription =
  post.data.excerpt || `Read ${post.data.title} on the Logikia blog`;
>>>>>>> REPLACE
<<<<<<< SEARCH
:start_line:121
-------
          post.data.contents.map((content: string, index: any) =>
            index === 1 ? (
              <>
                <p class="text-lg text-pretty text-neutral-700 dark:text-neutral-300">
                  {content}
                </p>
                <Image
                  class="w-full rounded-xl object-cover"
                  src={post.data.cardImage}
                  alt={post.data.cardImageAlt}
                  draggable={"false"}
                  format={"avif"}
                />
              </>
            ) : (
              <p class="text-lg text-pretty text-neutral-700 dark:text-neutral-300">
                {content}
              </p>
            )
          )
=======
          <div class="prose dark:prose-invert max-w-none">
            <Content />
          </div>
>>>>>>> REPLACE
```

### 3. `src/pages/fr/blog/[id].astro`

```diff
<<<<<<< SEARCH
:start_line:42
-------
const metaDescription =
  post.data.contents[0] || `Lisez ${post.data.title} sur le blog de ScrewFast`;
=======
const metaDescription =
  post.data.excerpt || `Lisez ${post.data.title} sur le blog de Logikia`;
>>>>>>> REPLACE
<<<<<<< SEARCH
:start_line:121
-------
          post.data.contents.map((content: string, index: any) =>
            index === 1 ? (
              <>
                <p class="text-lg text-pretty text-neutral-700 dark:text-neutral-300">
                  {content}
                </p>
                <Image
                  class="w-full rounded-xl object-cover"
                  src={post.data.cardImage}
                  alt={post.data.cardImageAlt}
                  draggable={"false"}
                  format={"avif"}
                />
              </>
            ) : (
              <p class="text-lg text-pretty text-neutral-700 dark:text-neutral-300">
                {content}
              </p>
            )
          )
=======
          <div class="prose dark:prose-invert max-w-none">
            <Content />
          </div>
>>>>>>> REPLACE
```

### 4. `src/pages/faq.astro`

```diff
<<<<<<< SEARCH
:start_line:125
-------
      if (typeof window.HSAccordion !== 'undefined') {
        window.HSAccordion.autoInit();
      } else {
=======
      if (typeof (window as any).HSAccordion !== 'undefined') {
        (window as any).HSAccordion.autoInit();
      } else {
>>>>>>> REPLACE
<<<<<<< SEARCH
:start_line:155
-------
    const faqStructuredData = [];
=======
    const faqStructuredData: any[] = [];
>>>>>>> REPLACE
```

### 5. `src/pages/404.astro`

```diff
<<<<<<< SEARCH
:start_line:69
-------
  const goBackButton = document.getElementById('go-back');
  goBackButton.addEventListener('click', () => {
    history.back();
  });
=======
  const goBackButton = document.getElementById('go-back');
  if (goBackButton) {
    goBackButton.addEventListener('click', () => {
      history.back();
    });
  }
>>>>>>> REPLACE
```

### 6. `astro.config.mjs`

```diff
<<<<<<< SEARCH
:start_line:12
-------
  site: "https://canomogollon.github.io",
  base: "/ScrewFast",
=======
  site: "https://canomogollon.github.io",
  base: "/ScrewFast",
>>>>>>> REPLACE
```

(Nota: El `base` ya era `/ScrewFast`, lo cual es correcto según tu feedback. Lo mantengo así).

## Estrategia de Pruebas

1. Ejecutar `npm run build` localmente para confirmar que todos los errores de TypeScript se han resuelto y el build se completa sin errores.
2. Hacer `push` a la rama `logikia-dev` para disparar la acción de GitHub y verificar que el pipeline de `build` y `deploy` se ejecute correctamente.
3. Verificar que el sitio desplegado en GitHub Pages (`https://canomogollon.github.io/ScrewFast/`) cargue correctamente, incluyendo estilos, imágenes y scripts.

## Métricas de Éxito

- [ ] El comando `npm run build` se completa localmente sin errores.
- [ ] El pipeline de GitHub Actions en la rama `logikia-dev` se completa exitosamente.
- [ ] El sitio web es visible y funcional en la URL de GitHub Pages.
