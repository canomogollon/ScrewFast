# Step: Plan de Adaptación de ScrewFast a LOGIKIA

## 1. Problema Identificado

Se necesita un plan de acción estructurado y documentado para adaptar la plantilla de Astro "ScrewFast" a la identidad de marca, contenido y requisitos funcionales del proyecto LOGIKIA. El objetivo es asegurar una transición ordenada, eficiente y alineada con las mejores prácticas del proyecto.

## 2. Solución Propuesta

Ejecutar una serie de fases y tareas priorizadas, comenzando por la configuración centralizada y el branding, seguido de la adaptación de contenido y finalizando con la verificación y limpieza. Este plan servirá como la única fuente de verdad para la implementación.

## 3. Fases y Tareas de Implementación

---

### **Fase 0: Configuración Crítica (Basada en la Arquitectura de ScrewFast)**

El objetivo es establecer las bases de la configuración del sitio para que los cambios de branding se apliquen globalmente, siguiendo los patrones definidos por la plantilla.

- **Tarea 0.1: Configurar Internacionalización (i18n)**
  - **Archivo a modificar:** `astro.config.mjs`
  - **Acción:** Limitar los idiomas soportados a `es` (default) y `en`. Esto afecta a las integraciones de `starlight` y `sitemap`.
  - **Referencia:** Sección "Internationalization (i18n) Features" del README.

- **Tarea 0.2: Configurar Colores de Marca en Tailwind**
  - **Archivo a modificar:** `src/assets/styles/global.css`
  - **Acción:** Actualizar las variables CSS en la sección @theme con los colores de LOGIKIA.
    - `primary`: `#0a2342`
    - `secondary`: `#f8f9fa`
    - `accent`: `#2ecc71` (verde), `#e67e22` (naranja)
  - **Nota:** La plantilla ya usa Tailwind CSS. Esta acción extiende la configuración existente. Eliminar: tailwind.config.mjs (si existe, ya que no se usa en v4)

- **Tarea 0.3: Actualizar Constantes del Sitio (SEO Centralizado)**
  - **Archivo a modificar:** `src/data_files/constants.ts`
  - **Acción:** Modificar las constantes `SITE`, `SEO` y `OG` para que reflejen el nombre, descripción y URL del proyecto LOGIKIA.
  - **Referencia:** Sección "SEO Configuration > Using constants.ts" del README. Este es el método centralizado para gestionar el SEO.

---

### **Fase 1: Branding y Contenido Centralizado**

Con la configuración base lista, el siguiente paso es reemplazar los activos visuales y la estructura de navegación, utilizando los métodos recomendados por la plantilla.

- **Tarea 1.1: Reemplazar Activos de Marca**
  - **Archivos a modificar:** `src/components/BrandLogo.astro`, `public/favicon.ico`, `public/social.webp`
  - **Acción:** Sustituir los logos y favicons de "ScrewFast" por los de LOGIKIA. Usar los archivos ya existentes en `src/images/logikia/`.
  - **Referencia:** Sección "Static Assets and Public Resources" del README.

- **Tarea 1.2: Actualizar Navegación y Footer (Método Centralizado)**
  - **Archivo a modificar:** `src/utils/navigation.ts`
  - **Acción:** Modificar los arrays `navBarLinks`, `footerLinks` y `socialLinks` para que coincidan con la estructura de LOGIKIA.
    - **`navBarLinks`**: Para el menú principal (Inicio, Quienes Somos, Servicios, Productos, Blog, Contacto).
    - **`footerLinks`**: Para las secciones del pie de página.
    - **`socialLinks`**: Para los perfiles de redes sociales.
  - **Referencia:** Sección "Customizing Navigation and Footer Links" del README.
- el selector de idiomas a usar lo maneja el archivo 'src/utils/ui.ts'

---

### **Fase 2: Adaptación de Páginas y Contenido**

Ahora se procede a modificar el contenido de las páginas principales, utilizando las dos estrategias de personalización de la plantilla: edición de variables internas y uso de props.

- **Tarea 2.1: Adaptar Página de Inicio (Usando Props)**
  - **Archivos a modificar:** `src/pages/index.astro`
  - **Acción:** Personalizar los componentes de sección (ej. `HeroSection`, `ClientsSection`) pasando los valores de LOGIKIA directamente como props en el archivo de la página.
    - **Ejemplo:** `<HeroSection subTitle="Nuestra Propuesta de Valor" primaryBtn="Contactar" primaryBtnURL="/contact" />`
  - **Referencia:** Sección "Props in Component Instances" del README.

- **Tarea 2.2: Crear Página "Quienes Somos"**
  - **Archivo a crear:** `src/pages/quienes-somos.astro`
  - **Acción:** Crear una nueva página usando `MainLayout.astro`. El contenido (Misión, Visión, Objetivos) se puede escribir directamente en Markdown dentro del componente o extraer de `brand-identity.md`.

- **Tarea 2.3: Adaptar Páginas de Productos y Servicios**
  - **Archivos a modificar:** `src/pages/products/index.astro`, `src/pages/services.astro` y sus páginas de detalle.
  - **Acción:** Adaptar el contenido para reflejar los productos y servicios reales de LOGIKIA. Utilizar la estrategia de props o edición de variables según convenga.

---

### **Fase 3: Verificación, Limpieza y Ajustes Finales**

La fase final se centra en asegurar la calidad, eliminar código innecesario y realizar ajustes específicos según las necesidades de LOGIKIA.

- **Tarea 3.1: Auditoría y Eliminación de Componentes**
  - **Acción:** Analizar la carpeta `src/components/` y eliminar los componentes que no se utilizarán en la versión final de LOGIKIA para mantener el código limpio.

- **Tarea 3.2: Pruebas y QA**
  - **Acción:** Realizar una revisión completa del sitio, verificando la consistencia de la marca, la responsividad en diferentes dispositivos y la funcionalidad de todos los enlaces y formularios.

- **Tarea 3.3: Actualizar Documentación Final**
  - **Archivo a modificar:** `README.md`
  - **Acción:** Reemplazar el contenido genérico de la plantilla con la descripción y las instrucciones de configuración del proyecto LOGIKIA.

- **Tarea 3.4: Ajustes Opcionales (Según Necesidad)**
  - **Animaciones (GSAP):** Modificar o eliminar las animaciones de GSAP en `src/pages/products/[id].astro` si no se requieren. **Referencia:** Sección "GSAP Integration".
  - **Smooth Scrolling (Lenis):** Considerar desactivar Lenis si causa conflictos de accesibilidad o rendimiento. **Referencia:** Sección "Lenis for Smooth Scrolling".
  - **Scrollbar:** Decidir si se mantiene la scrollbar oculta o se restaura la por defecto. **Referencia:** Sección "Hiding Scrollbar".

## 4. Estrategia de Pruebas

- **Visual:** Después de cada fase de branding, verificar visualmente que los colores, fuentes y logos son correctos.
- **Funcional:** Probar todos los enlaces de navegación y botones después de la Fase 1.
- **Build:** Ejecutar `npm run build` después de cada fase importante para asegurar que no se introduzcan errores de compilación.
- **Responsividad:** Comprobar el diseño en resoluciones de móvil, tablet y escritorio antes de la entrega final.

## 5. Métricas de Éxito

- [ ] El sitio web refleja completamente la identidad de marca de LOGIKIA.
- [ ] Toda la información y contenido de la plantilla "ScrewFast" ha sido reemplazada.
- [ ] El sitio compila sin errores (`npm run build`).
- [ ] Todos los enlaces internos y externos son funcionales.
- [ ] El sitio es responsive y se visualiza correctamente en los principales dispositivos.
