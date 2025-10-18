# Roadmap Estratégico: Adaptación de Plantilla AstroJS para LOGIKIA

## Introducción

Este documento es la guía maestra para la adaptación de la plantilla AstroJS "ScrewFast" a la identidad de marca y contenido del proyecto LOGIKIA. El objetivo es asegurar una implementación coherente, profesional y fiel a la visión de la marca, sirviendo como única fuente de verdad para el proceso de desarrollo.

**Referencia Principal:** [`@/.kilocode/rules/memory-bank/brand-identity.md`](./.kilocode/rules/memory-bank/brand-identity.md)

---

## Plan de Ejecución (v3)

| Fase | Tarea Específica | Descripción Detallada (Acciones y Criterios de Marca) | Entregable Clave | Prioridad |
| :--- | :--- | :--- | :--- | :--- |
| **0. Configuración Inicial** | 0.1. Configuración de Tailwind CSS | Crear el archivo `tailwind.config.mjs` en la raíz del proyecto y poblarlo con la configuración de la paleta de colores y tipografía de LOGIKIA. | Archivo `tailwind.config.mjs` creado. | Crítica |
| | 0.2. Configuración de Internacionalización (i18n) | Modificar `astro.config.mjs` para ajustar las configuraciones de i18n dentro de las integraciones `sitemap` y `starlight`, limitando los idiomas a `es` (defecto) y `en`. | `astro.config.mjs` actualizado con i18n. | Crítica |
| | **0.3. Configuración de Git y Estrategia de Fork** | **Configurar `upstream`, crear `.gitattributes` para merge strategy, y establecer carpeta `.upstream-backups/` para respaldos.** | **Repositorio configurado para mantenimiento del fork.** | **Crítica** |
| **1. Análisis y Preparación** | 1.1. Auditoría de Componentes | Revisar `src/components/` para identificar componentes reutilizables, a modificar o a eliminar. | Documento de mapeo de componentes. | Alta |
| | 1.2. Análisis de Configuración de Plantilla | Revisar `README.md` y archivos de configuración como `src/utils/navigation.ts` y `src/data_files/constants.ts` para entender los puntos clave de personalización. | Resumen de puntos de configuración. | Alta |
| | 1.3. Mapeo de Contenido y Marca | Conectar el contenido de `brand-identity.md` con la nueva estructura de páginas (Inicio, Servicios, Productos, etc.). | Borrador de la arquitectura de contenido del sitio. | Alta |
| | 1.4. Preparación de Activos | Recopilar logotipo de LOGIKIA (SVG), imágenes y cualquier iconografía específica. | Carpeta de activos (`src/assets/logikia/`) organizada. | Alta |
| **2. Adaptación Visual (Branding)** | 2.1. Configuración de Paleta de Colores | Modificar `tailwind.config.mjs` para incluir la paleta de colores de LOGIKIA: primario (`#0A2342`), secundario (`#F8F9FA`), y acentos (`#2ECC71`, `#E67E22`). | `tailwind.config.mjs` actualizado. | Alta |
| | 2.2. Implementación de Tipografía | Configurar estilos globales en `src/styles/global.css` para usar las fuentes corporativas [A definir], aplicando la jerarquía de la guía de marca. | Estilos de tipografía globales implementados. | Alta |
| | 2.3. Reemplazo de Logotipo | Actualizar `src/components/BrandLogo.astro` y `public/favicon.ico` con los activos de LOGIKIA. | Logotipo de LOGIKIA visible en el sitio. | Alta |
| | 2.4. Ajuste de Navegación y Footer | Modificar `src/utils/navigation.ts` para reflejar la estructura de menú (Inicio, Servicios, Productos, Blog, Contacto) y añadir "Quienes Somos" a los enlaces del footer. | Menú de navegación y footer actualizados. | Alta |
| | 2.5. Estilizado de Componentes UI | Adaptar los componentes en `src/components/ui` (botones, tarjetas, etc.) para que utilicen los nuevos colores y tipografía. | Componentes UI alineados con la marca. | Media |
| **3. Integración de Contenido** | 3.1. Adaptar Página de Inicio | Modificar `src/pages/index.astro` y su `HeroSection` para comunicar el tagline y la propuesta de valor de LOGIKIA. | Landing page adaptada. | Alta |
| | 3.2. Crear Página "Quienes Somos" | Crear la página `src/pages/quienes-somos.astro`. Poblarla con la Misión, Visión y Objetivos del `brand-identity.md`. Asegurar que esté enlazada desde el footer. | Página `quienes-somos.astro` publicada. | Alta |
| | 3.3. Crear/Adaptar Página de Servicios | Adaptar `src/pages/services.astro` para describir los servicios generales que ofrece LOGIKIA. | Página de Servicios con contenido final. | Media |
| | 3.4. Crear/Adaptar Página de Productos | Adaptar `src/pages/products/index.astro` y las páginas de detalle para los productos: "Asesor Comercial" (Terminado) y "Asistente Legal" (En proceso). | Páginas de Productos con contenido y estado actualizados. | Alta |
| | 3.5. Adaptar Página de Contacto | Revisar y adaptar `src/pages/contact.astro` y el componente `ContactSection` con la información de contacto real de LOGIKIA. | Página de Contacto funcional. | Media |
| | 3.6. Adaptar Página de Blog | Asegurar que la sección de blog (`/blog`) esté visualmente alineada con la marca, lista para futura publicación de contenido. | Sección de Blog alineada con la marca. | Baja |
| **4. Revisión y QA** | 4.1. Verificación de Consistencia de Marca | Realizar una revisión visual completa para asegurar que la marca (colores, logos, tipografía) es consistente en todo el sitio. | Checklist de consistencia de marca OK. | Alta |
| | 4.2. Pruebas de Responsividad | Navegar el sitio en diferentes resoluciones (móvil, tablet, desktop). | Reporte de responsividad sin errores. | Alta |
| | 4.3. Pruebas Funcionales | Probar todos los enlaces, botones y formularios. | Reporte de funcionalidad exitoso. | Media |
| **5. Entrega y Documentación** | 5.1. Optimización y Build Final | Ejecutar `npm run build` y verificar la correcta generación de los archivos en `dist/`. | Build de producción exitoso. | Alta |
| | 5.2. Actualizar README.md | Reemplazar el contenido del `README.md` principal con la descripción del proyecto LOGIKIA, en lugar de la información genérica de la plantilla. | `README.md` actualizado. | Media |
| | 5.3. Creación de Guía de Mantenimiento | Crear un archivo simple `MANUAL_USO.md` en `/docs` explicando cómo actualizar contenido básico. | `MANUAL_USO.md` creado. | Media |

---

## Anexo: Estrategia de Mantenimiento del Fork

### Configuración Inicial (Una sola vez)

```bash
# 1. Agregar upstream
git remote add upstream https://github.com/mearashadowfax/ScrewFast.git
git fetch upstream

# 2. Crear archivo .gitattributes
cat > .gitattributes << 'EOF'
# LOGIKIA - Archivos de marca que siempre mantienen nuestra versión
data_files/constants.ts merge=ours
src/utils/navigation.ts merge=ours
src/components/BrandLogo.astro merge=ours
tailwind.config.mjs merge=ours
public/favicon.ico merge=ours
public/social.webp merge=ours

# Archivos que requieren revisión manual en cada update
astro.config.mjs merge=union
src/layouts/MainLayout.astro merge=union
EOF

# 3. Crear carpeta para respaldos
mkdir -p src/components/.upstream-backups
echo "*.original.astro" >> .gitignore
```

### Flujo de Actualización desde Upstream

```bash
# PASO 1: Actualizar rama main con cambios de upstream
git checkout main
git fetch upstream
git merge upstream/main --no-ff -m "chore: sync with ScrewFast upstream $(date +%Y-%m-%d)"
git push origin main

# PASO 2: Revisar cambios antes de merge a logikia-dev
git log main..logikia-dev --oneline  # Ver qué cambios propios tienes
git diff main logikia-dev -- data_files/constants.ts  # Verificar archivos críticos

# PASO 3: Merge a logikia-dev con estrategia de respaldo
git checkout logikia-dev
git merge main --no-ff -m "chore: integrate upstream updates to dev"

# Si hay conflictos en componentes personalizados:
git checkout --ours src/components/sections/landing/HeroSection.astro
git add src/components/sections/landing/HeroSection.astro

# PASO 4: Probar build después del merge
npm run build

# PASO 5: Si todo funciona, llevar a producción
git checkout logikia-prod
git merge logikia-dev --no-ff -m "chore: promote tested upstream updates to prod"
```

### Checklist de Verificación Post-Update

- [ ] Build exitoso (`npm run build`)
- [ ] Colores de marca correctos (revisar [`tailwind.config.mjs`](tailwind.config.mjs))
- [ ] Logo LOGIKIA visible (revisar [`src/components/BrandLogo.astro`](src/components/BrandLogo.astro))
- [ ] Navegación correcta (revisar [`src/utils/navigation.ts`](src/utils/navigation.ts))
- [ ] SEO metadata correcta (revisar [`data_files/constants.ts`](data_files/constants.ts))
- [ ] i18n funcional (es/en) (revisar [`astro.config.mjs`](astro.config.mjs))
- [ ] Pruebas visuales en dev: `npm run dev`
