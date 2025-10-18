# Guía de Despliegue: Astro v5 en GitLab Pages

Esta guía explica paso a paso cómo preparar, configurar y desplegar proyectos modernos hechos con Astro (v5 o superior) en GitLab Pages, con enfoque en problemas comunes y procedimientos reutilizables para freelancers y desarrolladores individuales que valoran el opensource.

## Requisitos Previos

- Proyecto Astro inicializado y funcional (v5 o superior)
- Acceso y permisos en un repositorio GitLab
- Conocimientos básicos de CI/CD
- El repositorio debe ser publico facilita el despliegue

## Paso 0: Consideraciones Críticas para Repositorios Privados vs Públicos

Diferencias en URLs de GitLab Pages
Repositorios Públicos:

URL predecible: <https://usuario.gitlab.io/repositorio/>
Configuración estándar funciona directamente
Ideal para proyectos open source y portfolios
Repositorios Privados:

URL generada aleatoriamente: <https://proyecto-usuario-[hash-aleatorio].gitlab.io/>
Ejemplo real: <https://bulan-bygoto-09a0412e4fd544e4d4d3e08c46be797e4f6ad5415fe415b21e.gitlab.io/>
Requiere configuración específica del base
Configuración para Repositorios Privados
Cuando tu repositorio es privado, GitLab genera URLs únicas por seguridad. La configuración debe ajustarse:

```javascript
// Para repositorio privado
export default defineConfig({
  site: 'https://proyecto-usuario-hash-generado.gitlab.io/',
  base: '', // Base VACÍO para repos privados
  // ...resto de configuración
});
```

⚠️ Importante: Para repositorios privados, el base debe estar vacío ("") o completamente omitido, no usar "/".

Configuración para Repositorios Públicos

```javascript
// Para repositorio público
export default defineConfig({
  site: 'https://usuario.gitlab.io/repositorio/',
  base: '/repositorio/', // Base con nombre del repo
  // ...resto de configuración
});
```

### Recomendación Estratégica

- Para desarrollo y testing: Usar repositorios públicos facilita el despliegue y las URLs son más manejables
- Para producción comercial: Considera usar tu propio dominio/servidor para mayor control
- Para proyectos confidenciales: Los repos privados requieren configuración adicional pero mantienen la privacidad

## Paso 1: Configuración de Astro para despliegue en subcarpeta

### 1.1 Configurar `site` y `base` en `astro.config.ts`

GitLab Pages publica sitios en una URL del tipo `https://<usuario>.gitlab.io/<repositorio>/` Ó `https://<gitlabgroup>.gitlab.io/<repositorio>/`. Es crucial definir correctamente la URL del sitio en la propiedad `site` y **SIEMPRE** ajustar la propiedad `base` con el nombre del repositorio precedido y seguido de `/`.

⚠️ **Advertencia**: Si `base` no está definido (o está vacío), los recursos estáticos (imágenes, JS, CSS) pueden no cargarse correctamente en producción.

```javascript
// astro.config.ts
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bygoto.gitlab.io/bulan/', // URL completa del sitio
  base: '/bulan/',                         // Subcarpeta necesaria para rutas correctas
  // Otras configuraciones...
});
```

### 1.2 Definir el directorio de salida y assets estáticos

Astro genera el sitio en una carpeta llamada `dist` por defecto. La plantilla AstroWind permite sobreescribir esto en `src/config.yaml`. Para este proyecto, se usa `dist`.

```javascript
// src/config.yaml
site:
  ...
  outdir: "dist"
```

El `publicDir` por defecto de Astro es `public`. Si se desea usar `static`, debe configurarse explícitamente en `astro.config.ts`.

```javascript
// astro.config.ts
export default defineConfig({
  // ...
  publicDir: 'static',
  // ...
});
```

### 1.3 Tabla de configuración de referencia

| Parámetro   | Valor (ejemplo)                   | Descripción                  |
| ----------- | --------------------------------- | ---------------------------- |
| `site`      | `https://bygoto.gitlab.io/bulan/` | URL completa del sitio       |
| `base`      | `/bulan/`                         | Subcarpeta del repo en Pages |
| `outDir`    | `dist`                            | Carpeta para el build (configurado en `src/config.yaml`) |
| `publicDir` | `static`                          | Carpeta de assets estáticos  |

### 1.4 Configuración completa de ejemplo

```javascript
// astro.config.ts
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Configuración de despliegue (ejemplo para GitLab Pages)
  // La configuración real se gestiona en src/config.yaml para este proyecto
  site: 'https://bygoto.gitlab.io/bulan/',
  base: '/bulan/',
  trailingSlash: 'never',
  output: 'static',
  
  // Integraciones
  integrations: [
    sitemap(),
    tailwind({ applyBaseStyles: false }),
  ],
  
  // Configuración de imágenes optimizada
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
```

## Paso 2: Crear archivo de CI/CD `.gitlab-ci.yml`

GitLab utiliza este archivo para definir el pipeline de despliegue. La configuración optimizada incluye mejores prácticas para proyectos Astro modernos.

```yaml
# Usa Node.js LTS para compatibilidad y estabilidad
image: node:lts

# Cache para acelerar builds posteriores
cache:
  paths:
    - node_modules/

# Script que se ejecuta antes de todos los jobs
before_script:
  - node --version
  - npm --version
  - npm ci  # Utiliza package-lock.json para instalaciones rápidas y deterministas

# Job principal de GitLab Pages
pages:
  script:
    - npm run build  # Ejecuta el build de Astro
  artifacts:
    paths:
      - dist       # Carpeta que Astro genera con el sitio estático (configurado en src/config.yaml)
    expire_in: 1 week  # Los artefactos se eliminan después de 1 semana
  only:
    - update2025     # Cambia a la rama que uses en tu flujo de trabajo (main, master, etc.)
  # Opcional: solo ejecutar si hay cambios relevantes
  # changes:
  #   - "src/**/*"
  #   - "astro.config.ts"
  #   - "package.json"
```

### 2.1 Configuración avanzada para múltiples ramas

Si necesitas desplegar desde diferentes ramas o tener builds de preview:

```yaml
# Job para rama principal
pages:
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist
  only:
    - main

# Job para preview de development
preview:
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist
    expire_in: 1 day
  only:
    - development
  environment:
    name: preview
    url: https://bygoto.gitlab.io/bulan
```

## Paso 3: Referencias correctas para assets

### 3.1 Rutas en HTML estático

Cuando publiques imágenes, JS, CSS o cualquier recurso, asegúrate que las rutas incluyen siempre el `base` del proyecto:

```html
<!-- ✅ Correcto: incluye el base del proyecto -->
<img src="/bulan/assets/images/logo.png" alt="Logo">
<link rel="stylesheet" href="/bulan/css/styles.css">
<script src="/bulan/js/main.js"></script>

<!-- ❌ Incorrecto: rutas absolutas sin base -->
<img src="/assets/images/logo.png" alt="Logo">
<link rel="stylesheet" href="/css/styles.css">
```

### 3.2 Rutas en componentes Astro

En componentes Astro puedes usar la propiedad `base` dinámicamente:

```astro
---
// Component.astro
import { getAsset } from '~/utils/permalinks';
---

<!-- Usando getAsset helper (recomendado) -->
<img src={getAsset('/images/logo.png')} alt="Logo" />

<!-- Usando import de assets (mejor práctica) -->
<script>
import logoImage from '~/assets/images/logo.png';
</script>
<img src={logoImage} alt="Logo" />

<!-- Usando base directamente (menos recomendado) -->
<img src={`${import.meta.env.BASE_URL}assets/images/logo.png`} alt="Logo" />
```

### 3.3 Configuración de permalinks

Crea un helper para gestionar rutas de manera consistente:

```typescript
// src/utils/permalinks.ts
import { SITE } from '~/utils/config';

export const getAsset = (path: string): string => {
  return path.startsWith('/') 
    ? `${import.meta.env.BASE_URL}${path.slice(1)}`
    : `${import.meta.env.BASE_URL}${path}`;
};

export const getPermalink = (slug = '', type = 'page'): string => {
  const normalizeSlug = (text: string): string => 
    text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');

  if (type === 'page') {
    return getAsset(slug === '' ? '' : `/${normalizeSlug(slug)}`);
  }
  
  return getAsset(`/${type}/${normalizeSlug(slug)}`);
};
```

## Paso 4: Validar la build antes de publicar

### 4.1 Validación local

Ejecuta siempre estos comandos antes de hacer push:

```bash
# Limpiar build anterior
rm -rf dist/

# Instalar dependencias
npm ci

# Generar build de producción
npm run build

# Previsualizar el sitio localmente
npm run preview
```

### 4.2 Checklist de validación

Antes de publicar, verifica:

- [ ] Las rutas de imágenes comienzan con `/bulan/`
- [ ] Los enlaces internos funcionan correctamente
- [ ] El sitemap se genera correctamente
- [ ] Los meta tags incluyen las URLs correctas
- [ ] Los iconos y favicons cargan apropiadamente
- [ ] Las fuentes y estilos CSS se aplican correctamente

### 4.3 Herramientas de debugging

```bash
# Verificar estructura del build
ls -la dist/

# Buscar rutas hardcoded problemáticas
grep -r 'src="/' dist/ || echo "No se encontraron rutas problemáticas"

# Verificar que el index.html incluye el base correcto
grep -n 'base' dist/index.html
```

## Paso 5: Flujo de despliegue automática en GitLab

### 5.1 Proceso paso a paso

1. **Commit y Push**: Realiza un push a la rama configurada (generalmente `main` o `update2025`)

```bash
git add .
git commit -m "feat: update content and fix deployment config"
git push origin update2025
```

2. **Pipeline Execution**: GitLab ejecuta automáticamente el pipeline definido en `.gitlab-ci.yml`

3. **Build Process**: El job `pages` instala dependencias y genera el build

4. **Publication**: GitLab publica el contenido de `dist/` en tu URL de Pages

5. **Verification**: Tu sitio estará disponible en `https://<usuario>.gitlab.io/<repositorio>/`

### 5.2 Monitoreo del pipeline

- Ve a **CI/CD > Pipelines** en tu repositorio GitLab
- Revisa los logs del job `pages` si hay errores
- Verifica que los artefactos se generen correctamente

## Solución de problemas frecuentes

### 6.1 Problemas comunes y soluciones

| Problema                           | Causa probable                     | Solución                                          |
| ---------------------------------- | ---------------------------------- | ------------------------------------------------- |
| Imágenes/JS/CSS no cargan          | `base` incorrecto o ausente        | Verificar `base: '/repositorio/'` en config       |
| Error 404 en recursos              | Rutas hardcoded sin base           | Usar helpers de permalinks o `getAsset()`         |
| Build local funciona pero Pages no | Diferencias de configuración       | Revisar `astro.config.ts` y variables de entorno |
| Pipeline falla en `npm ci`         | `package-lock.json` desactualizado | Ejecutar `npm install` y commitear lock file      |
| Sitio muestra página en blanco     | Error de JavaScript o rutas        | Revisar console del navegador y logs del build    |

### 6.2 Debugging avanzado

```bash
# Verificar configuración de Astro
npm run astro info

# Analizar bundle de producción
npm run build -- --verbose

# Verificar rutas generadas
find public -name "*.html" -exec grep -l "href=" {} \;
```

### 6.3 Variables de entorno útiles

```bash
# En tu pipeline de GitLab, puedes usar:
echo "Base URL: $CI_PAGES_URL"
echo "Branch: $CI_COMMIT_REF_NAME"
echo "Site URL: https://$CI_PROJECT_NAMESPACE.gitlab.io/$CI_PROJECT_NAME/"
```

## Recomendaciones Avanzadas y Buenas Prácticas

### 7.1 Optimizaciones de rendimiento

```javascript
// astro.config.mjs - Configuraciones de rendimiento
export default defineConfig({
  // ... configuración base
  
  build: {
    inlineStylesheets: 'auto',
    format: 'directory',
  },
  
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },
  
  vite: {
    ssr: {
      noExternal: ['@astrojs/*'],
    },
    build: {
      rollupOptions: {
        external: ['sharp'],
      },
    },
  },
});
```

### 7.2 Configuración de headers y caching

Crea un archivo `static/_headers` para optimizar el caching:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/_astro/*
  Cache-Control: public, max-age=31536000, immutable

*.js
  Cache-Control: public, max-age=31536000
  
*.css
  Cache-Control: public, max-age=31536000

*.woff2
  Cache-Control: public, max-age=31536000
```

### 7.3 Automatización y scripts útiles

Crea un script de despliegue en `package.json`:

```json
{
  "scripts": {
    "deploy": "npm run build && npm run preview",
    "deploy:check": "npm run build && ls -la dist/ && echo 'Build completed successfully'",
    "clean": "rm -rf dist/ node_modules/.astro",
    "verify-config": "node -e \"console.log('Base:', process.env.npm_config_base || 'not set')\""
  }
}
```

### 7.4 Template reutilizable

Para futuros proyectos, usa este template base en `astro.config.mjs`:

```javascript
// Template para nuevos proyectos en astro.config.ts
import { defineConfig } from 'astro/config';

// Configurar estas variables para cada proyecto
const GITLAB_GROUP = 'bygoto';
const REPO_NAME = 'mi-nuevo-proyecto';

export default defineConfig({
  // La configuración de site y base se recomienda manejarla en src/config.yaml
  // para plantillas como AstroWind.
  // site: `https://${GITLAB_GROUP}.gitlab.io/${REPO_NAME}/`,
  // base: `/${REPO_NAME}/`,
  
  // outDir y publicDir también se pueden gestionar desde la config.
  // outDir: 'dist',
  // publicDir: 'static',

  trailingSlash: 'never',
  output: 'static',
  
  // Resto de configuración específica del proyecto...
});
```

## Referencias y Documentación

- [Astro: Deploy to GitLab Pages](https://docs.astro.build/en/guides/deploy/gitlab/)
- [GitLab Pages Documentation](https://docs.gitlab.com/ee/user/project/pages/)
- [Astro Configuration Reference](https://docs.astro.build/en/reference/configuration-reference/)
- [GitLab CI/CD Configuration](https://docs.gitlab.com/ee/ci/yaml/)

# Guía de Despliegue: Astro v5 en producción

Esta guía explica paso a paso cómo preparar, configurar y desplegar proyectos modernos hechos con Astro (v5 o superior) en GitLab Pages, con enfoque en problemas comunes y procedimientos reutilizables para freelancers y desarrolladores individuales que valoran el opensource.

// astro.config.mjs

```javascript
export default defineConfig({
  site: 'https://tudominio.com/2025/',
  base: '/2025/',
  outDir: 'dist', // Cambiar de 'public' a 'dist' para servidores propios
  // ...resto de configuración
});

```yml
# src/config.yaml
site:
  site: "https://tudominio.com/2025/"
  base: "/2025/"
  # ...resto de configuración
```

## Para despliegue en subdominio (ej: <https://proyecto.tudominio.com/>)

```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://proyecto.tudominio.com/',
  base: '/', // o simplemente omitir
  outDir: 'dist',
  // ...resto de configuración
});
```

# Changelog

- **v2.1**: Adicion de recomendaciones de despliegue en server privado
- **v2.0**: Actualización para Astro v5, mejores prácticas, solución de problemas frecuentes
- **v1.0**: Versión inicial básica

---

💡 **Tip**: Guarda esta guía como referencia y actualízala conforme evolucionen las mejores prácticas de Astro y GitLab Pages.
