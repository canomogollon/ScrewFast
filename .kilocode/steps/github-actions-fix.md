# Step: Corregir el Despliegue en GitHub Pages

## Problema Identificado

El workflow de GitHub Actions (`deploy.yml`) no está desplegando correctamente el sitio de Astro en GitHub Pages. Las causas probables son una configuración de rama incompleta, la ausencia de la configuración `base` de Astro, y una versión de Node.js que podría no ser la óptima.

## Solución Propuesta

Se modificará el archivo `deploy.yml` para incluir ambas ramas (`logikia-dev` y `logikia-prod`), se usará una versión LTS de Node.js, y se configurará dinámicamente la variable de entorno `BASE_URL` para que Astro genere las rutas de assets correctamente. También se ajustará `astro.config.mjs` para que utilice esta variable.

## Implementación Steps

1. **Actualizar `deploy.yml`:**
    - Añadir la rama `logikia-dev` a la sección `on.push.branches`.
    - Cambiar la versión de Node.js de `18` a `20.x` para usar la LTS.
    - Añadir un paso en el job `build` para establecer la variable `BASE_URL` con el nombre del repositorio.
    - Pasar la `BASE_URL` al comando `npm run build`.

2. **Actualizar `package.json`:**
    - Modificar el script `build` para que acepte y utilice la variable `BASE_URL`.

3. **Actualizar `astro.config.mjs`:**
    - Modificar las propiedades `site` y `base` para que usen `process.env.BASE_URL`, permitiendo una configuración dinámica.

## Archivos a Modificar

- `.github/workflows/deploy.yml`
- `package.json`
- `astro.config.mjs`

## Métricas de Éxito

- [ ] El workflow se ejecuta exitosamente para las ramas `logikia-dev` y `logikia-prod`.
- [ ] El sitio se despliega correctamente en GitHub Pages.
- [ ] Todos los assets (CSS, JS, imágenes) cargan sin errores 404.
