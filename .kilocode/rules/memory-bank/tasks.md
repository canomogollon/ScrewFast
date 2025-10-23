# Tareas Repetitivas del Proyecto

## Corrección de Enlaces para Despliegue en Subdirectorio

**Última ejecución:** 2025-10-23
**Problema:** Al desplegar el sitio en un subdirectorio (ej. GitHub Pages), los enlaces internos hardcodeados no incluyen la ruta `base` de Astro, lo que resulta en enlaces rotos.
**Solución:** Modificar los archivos de datos y los componentes para que construyan las URLs dinámicamente usando `import.meta.env.BASE_URL`.

### Archivos Modificados

- `src/utils/navigation.ts`
- `src/utils/fr/navigation.ts`
- `src/components/ui/cards/CardBlog.astro`
- `src/components/ui/cards/CardInsight.astro`
- `src/components/ui/cards/CardBlogRecent.astro`
- `src/components/ui/cards/CardWide.astro`
- `src/components/ui/cards/CardSmall.astro`
- `src/components/ui/cards/CardRelated.astro`
- `src/components/ui/buttons/PrimaryCTA.astro`
- `src/components/ui/buttons/SecondaryCTA.astro`
- `src/components/sections/pricing/PricingSection.astro`
- `src/components/ui/starlight/SiteTitle.astro`

### Pasos del Flujo de Trabajo

1. **Modificar Archivos de Datos de Navegación**:
    - En `src/utils/navigation.ts` y `src/utils/fr/navigation.ts`, importar `import.meta.env.BASE_URL` y prefijar todas las URLs.

    ```typescript
    const base = import.meta.env.BASE_URL;
    const navBarLinks = [
      { name: "Home", url: `${base}` },
      { name: "Products", url: `${base}/products` },
      // ...etc
    ];
    ```

2. **Modificar Componentes con URLs Dinámicas**:
    - En componentes como las tarjetas de blog o productos, construir el `href` en el frontmatter usando `import.meta.env.BASE_URL`.

    ```astro
    ---
    const base = import.meta.env.BASE_URL;
    const href = `${base}/${productLocale}/products/${product.id}`;
    ---
    <a {href}>...</a>
    ```

3. **Modificar Componentes de Botones CTA**:
    - En `src/components/ui/buttons/PrimaryCTA.astro` y `src/components/ui/buttons/SecondaryCTA.astro`, asegurarse de que el `href` se construye correctamente con `import.meta.env.BASE_URL`.

    ```astro
    <a href={url ? `${import.meta.env.BASE_URL}/${url.startsWith('/') ? url.slice(1) : url}` : undefined}>
    ```

4. **Modificar Secciones con Enlaces Directos**:
    - En secciones como `src/components/sections/pricing/PricingSection.astro`, modificar los enlaces directos para que se construyan con `import.meta.env.BASE_URL`.

    ```astro
    <a href={pricing.starterKit.purchaseLink ? `${import.meta.env.BASE_URL}${pricing.starterKit.purchaseLink.startsWith('/') ? pricing.starterKit.purchaseLink : `/${pricing.starterKit.purchaseLink}`}` : undefined}>
    ```

### Consideraciones Importantes

- No aplicar el helper a enlaces externos (`target="_blank"`) o anclas (`#`).
- Esta tarea es crucial después de añadir nuevos componentes que contengan enlaces de navegación.
