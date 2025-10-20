# Step: Resolver Error de i18n MissingLocaleError

## Problema Identificado

El proyecto tiene un error crítico que impide el build:

```
[MissingLocaleError] The locale/path `fr` does not exist in the configured `i18n.locales`.
Location: /home/elkin/devs/astrojs/logikia/node_modules/astro/dist/runtime/server/render/astro/render.js:91:31
```

El error ocurre porque la configuración de i18n en `astro.config.mjs` está configurada para español (`es`) e inglés (`en`), pero existen páginas que intentan usar francés (`fr`), específicamente:

- `src/pages/fr/services.astro`

## Solución Propuesta

1. **Identificar todas las páginas con locale `fr`** que están causando el conflicto
2. **Eliminar o reubicar** las páginas en francés que no son necesarias para Logikia
3. **Actualizar la configuración de i18n** para que solo incluya español e inglés
4. **Verificar que el build funcione** correctamente después de los cambios

## Implementación Steps

1. **Identificar archivos problemáticos:**
   - Buscar todas las páginas y contenido en francés (`fr`)
   - Identificar qué archivos necesitan ser eliminados o reubicados

2. **Eliminar páginas en francés innecesarias:**
   - Eliminar páginas `.astro` en directorio `fr/`
   - Eliminar contenido `.md` y `.mdx` en directorios `fr/`
   - Actualizar referencias en la configuración de Starlight

3. **Actualizar configuración de i18n:**
   - Asegurar que solo `es` e `en` estén configurados
   - Verificar que Starlight y sitemap tengan configuraciones consistentes

4. **Probar el build:**
   - Ejecutar `npm run build` para verificar que el error se resuelve
   - Verificar que las páginas en español e inglés funcionen correctamente

## Archivos a Modificar

- `astro.config.mjs` - Actualizar configuración de i18n
- `src/pages/fr/` - Eliminar directorio y archivos en francés
- `src/content/blog/fr/` - Eliminar contenido en francés
- `src/content/docs/fr/` - Eliminar documentación en francés
- `src/content/insights/fr/` - Eliminar insights en francés
- `src/content/products/fr/` - Eliminar productos en francés
- `src/data_files/fr/` - Eliminar datos en francés

## Estrategia de Pruebas

1. Ejecutar `npm run build` para verificar que no hay errores
2. Ejecutar `npm run dev` para verificar que el sitio funciona correctamente
3. Navegar por las páginas en español e inglés para verificar funcionalidad

## Posibles Problemas y Soluciones

- **Problema**: Dependencias entre páginas que referencian contenido en francés
- **Solución**: Actualizar todas las referencias para usar español o inglés
- **Problema**: Configuración de Starlight puede tener referencias a francés
- **Solución**: Revisar y actualizar la configuración de sidebar en Starlight

## Métricas de Éxito

- [ ] El comando `npm run build` se ejecuta sin errores
- [ ] El comando `npm run dev` funciona correctamente
- [ ] Las páginas en español (`/es/`) funcionan correctamente
- [ ] Las páginas en inglés (`/en/`) funcionan correctamente
- [ ] No hay referencias a francés (`fr`) en la configuración
