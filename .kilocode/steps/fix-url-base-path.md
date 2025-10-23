# Step: Corregir Rutas de Enlaces para Despliegue en Subdirectorio

## Problema Identificado

Los enlaces internos (hardcodeados en archivos `.ts` y componentes `.astro`) no incluyen la ruta `base` definida en `astro.config.mjs`. Esto causa errores 404 cuando el sitio se despliega en un subdirectorio (ej. GitHub Pages), ya que los enlaces no tienen el prefijo necesario (ej. `/ScrewFast/`).

## Solución Propuesta

La solución es modificar manualmente todos los lugares donde se definen o usan rutas relativas para que incluyan el `base` path de Astro, que está disponible a través de la variable de entorno `import.meta.env.BASE_URL`. Esto se hará directamente en los archivos de datos y en el frontmatter de los componentes, como lo recomienda la documentación de la plantilla.

## Implementación Steps

1. **Modificar Archivos de Navegación**:
    - Editar `src/utils/navigation.ts` para prefijar todas las URLs con `import.meta.env.BASE_URL`.
    - Editar `src/utils/fr/navigation.ts` de la misma manera.
2. **Modificar Componentes con Lógica de URL**:
    - Editar los componentes de tarjetas (`CardBlog.astro`, `CardInsight.astro`, etc.) para construir el `href` final usando `import.meta.env.BASE_URL` en el frontmatter.
    - Editar `SiteTitle.astro` para corregir los enlaces al home y a la documentación.
    - **No** modificar el script de `LanguagePicker.astro`, ya que su lógica de `window.location` es diferente y no debe ser alterada en este paso.
3. **Verificación**:
    - Detener el servidor de `preview`.
    - Ejecutar `npm run build` para reconstruir el sitio con los nuevos paths.
    - Ejecutar `npm run preview` para iniciar el servidor de prueba.
    - Usar Playwright para navegar y verificar que los enlaces ahora incluyen la ruta base correctamente.

## Archivos a Modificar

- `src/utils/navigation.ts`
- `src/utils/fr/navigation.ts`
- `src/components/ui/cards/CardBlog.astro`
- `src/components/ui/cards/CardInsight.astro`
- `src/components/ui/cards/CardBlogRecent.astro`
- `src/components/ui/cards/CardWide.astro`
- `src/components/ui/cards/CardSmall.astro`
- `src/components/ui/starlight/SiteTitle.astro`

## Métricas de Éxito

- [ ] Al ejecutar `npm run preview`, los enlaces en el menú de navegación y en las tarjetas apuntan a `http://localhost:4321/ScrewFast/...`.
- [ ] La navegación en el sitio de preview funciona sin errores 404.
