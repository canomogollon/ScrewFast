
# Plan de Refactorización: BasicScripts.astro

## Resumen Ejecutivo

Basado en el análisis detallado de [`BasicScripts.astro`](src/components/common/BasicScripts.astro:276), se recomienda implementar la **Opción 2: Organización y Limpieza** como primera fase, seguida de una refactorización modular progresiva. Este enfoque minimiza el riesgo de romper funcionalidades existentes mientras mejora significativamente el rendimiento y mantenibilidad.

## Decisión Estratégica: Opción 2 Híbrida

### Por qué no la Refactorización Completa (Opción 1) ahora

1. **Sitio en producción** funcionando correctamente
2. **Riesgo alto** de romper funcionalidades críticas
3. **Tiempo limitado** para pruebas exhaustivas
4. **Complejidad** de migrar todas las importaciones dinámicas

### Enfoque Híbrido Recomendado

1. **Fase 1**: Limpieza y organización inmediata (bajo riesgo)
2. **Fase 2**: Migración modular progresiva (mediano plazo)

## Fase 1: Limpieza y Organización Inmediata

### 1.1 Eliminación de Código No Utilizado

#### Librerías a Eliminar Completamente

```javascript
// LÍNEAS A ELIMINAR:
- Líneas 291-292: Swiper slider y Countdown Js
- Líneas 293-294: Maintenance js y Data Counter  
- Líneas 295-296: Datepicker js
- Líneas 298-299: CK Editor y Fade Animation
- Líneas 302-303: Switcher Pricing Plan
- Líneas 305-306: Particles
- Líneas 1529-1530: Gumshoe (Small Menu)
- Líneas 1534-1535: WOW Js
```

#### Componentes No Utilizados a Eliminar

```javascript
// LÍNEAS A ELIMINAR:
- Líneas 527-588: Typed Text animation (typewrite)
- Líneas 1542-1602: Contact Js (form validation PHP)
- Líneas 1607-1625: Dark & Light Mode duplicado
- Líneas 1630-1643: LTR & RTL Mode
```

### 1.2 Consolidación de Funcionalidades Duplicadas

#### Sistema de Tema

- **Mantener**: Líneas 12-31 (sistema AstroWind)
- **Eliminar**: Líneas 1607-1625 (sistema TechWind duplicado)

#### Menú de Navegación

- **Mantener**: Líneas 47-65 (sistema AstroWind)
- **Eliminar**: Líneas 1312-1408 (sistema TechWind duplicado)

#### Scroll Sticky

- **Mantener**: Líneas 122-143 (sistema AstroWind)
- **Eliminar**: Líneas 1412-1426 (sistema TechWind duplicado)

### 1.3 Optimización de Importaciones Dinámicas

#### Problema Actual

```javascript
// LÍNEAS 318, 375, 472, 498, 1472, 1498
import('/node_modules/tiny-slider/src/tiny-slider.js')
import('/node_modules/shufflejs/dist/shuffle.min.js')
import('/node_modules/feather-icons/dist/feather.min.js')
import('/node_modules/jarallax/dist/jarallax.min.js')
```

#### Solución Inmediata (Mínimo Riesgo)

```javascript
// REEMPLAZAR CON IMPORTACIONES ESTÁTICAS EN FRONTMATTER
---
import { UI } from 'astrowind:config';
import { tns } from 'tiny-slider';
import Shuffle from 'shufflejs';
import feather from 'feather-icons';
import jarallax from 'jarallax';
---

// LUEGO USAR EN LUGAR DE IMPORTACIONES DINÁMICAS
if (typeof tns === 'function') {
  // tiny-slider configuration
}
```

### 1.4 Mejora del Manejo de Errores

#### Eliminar Bloques try-catch Redundantes

```javascript
// ANTES (líneas 317-368):
try {
  import('/node_modules/tiny-slider/src/tiny-slider.js')
    .then(({ tns }) => {
      // código
    })
    .catch((error)


    .catch((error) => {
      console.error('Error cargando tiny-slider:', error);
    });
} catch (error) {
  console.error('Error en el bloque de tiny-slider:', error);
}

// DESPUÉS (con importaciones estáticas):
if (typeof tns === 'function') {
  // tiny-slider configuration
  console.log('Tiny-slider inicializado correctamente');
} else {
  console.error('tns no es una función:', tns);
}
```

### 1.5 Optimización de AOS

#### Problema: Configuración Duplicada

- **Mantener**: Líneas 475-525 (configuración profesional de AOS)
- **Eliminar**: Conflictos con Intersection Observer personalizado

#### Solución

```javascript
// MANTENER SOLO LA CONFIGURACIÓN AOS OPTIMIZADA
// ELIMINAR INTERSECTION OBSERVER PERSONALIZADO (líneas 168-275)
// YA QUE AOS MANEJA LAS ANIMACIONES DE FORMA MÁS EFICIENTE
```

## Fase 2: Migración Modular Progresiva

### 2.1 Estructura de Archivos Propuesta

```
src/components/scripts/
├── TinySlider.astro          # tiny-slider configuration
├── ShuffleGallery.astro      # shufflejs para galerías
├── FeatherIcons.astro        # feather icons initialization
├── Jarallax.astro            # jarallax parallax effects
├── TobiiLightbox.astro       # tobii lightbox
├── AOSAnimations.astro       # AOS configuration
├── Components.astro          # tabs, modals, carousel, accordions
└── Utilities.astro           # cookies, back button, preloader
```

### 2.2 Implementación por Componentes

#### TinySlider.astro

```astro
---
// Importación estática
import { tns } from 'tiny-slider';
---

<script is:inline>
  // Configuración para tiny-single-item
  if (document.getElementsByClassName('tiny-single-item').length > 0) {
    tns({
      container: '.tiny-single-item',
      items: 1,
      controls: false,
      mouseDrag: true,
      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      navPosition: 'bottom',
      speed: 400,
      gutter: 16,
    });
  }

  // Configuración para tiny-one-item
  if (document.getElementsByClassName('tiny-one-item').length > 0) {
    tns({
      container: '.tiny-one-item',
      items: 1,
      controls: true,
      mouseDrag: true,
      loop: true,
      rewind: true,
      autoplay: true,
      autoplayButtonOutput: false,
      autoplayTimeout: 3000,
      navPosition: 'bottom',
      controlsText: ['<i class="uil uil-angle-left"></i>', '<i class="uil uil-angle-right"></i>'],
      nav: false,
      speed: 400,
      gutter: 0,
    });
  }
</script>
```

#### ShuffleGallery.astro

```astro
---
import Shuffle from 'shufflejs';
---

<script is:inline>
  class GalleryFilter {
    constructor() {
      this.element = document.getElementById('grid');
      if (this.element) {
        this.shuffle = new Shuffle(this.element, {
          itemSelector: '.picture-item',
          sizer: this.element.querySelector('.my-sizer-element'),
        });
        this.addFilterButtons();
      }
    }

    addFilterButtons() {
      const options = document.querySelector('.filter-options');
      if (!options) return;

      const filterButtons = Array.from(options.children);
      filterButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
          const btn = e.currentTarget;
          const isActive = btn.classList.contains('active');
          const btnGroup = btn.getAttribute('data-group');

          // Remove active class from all buttons
          filterButtons.forEach(b => b.classList.remove('active'));
          
          if (!isActive) {
            btn.classList.add('active');
            this.shuffle.filter(btnGroup);
          } else {
            this.shuffle.filter(Shuffle.ALL_ITEMS);
          }
        });
      });
    }
  }

  // Inicializar galería
  document.addEventListener('DOMContentLoaded', () => {
    new GalleryFilter();
  });

  // Re-inicializar después de navegación Astro
  document.addEventListener('astro:after-swap', () => {

    new GalleryFilter();
  });
</script>
```

#### FeatherIcons.astro

```astro
---
import feather from 'feather-icons';
---

<script is:inline>
  // Inicializar feather icons
  if (typeof feather === 'object' && typeof feather.replace === 'function') {
    feather.replace();
    console.log('Feather icons inicializado correctamente');
  }

  // Re-inicializar después de navegación Astro
  document.addEventListener('astro:after-swap', () => {
    feather.replace();
  });
</script>
```

#### Jarallax.astro

```astro
---
import jarallax from 'jarallax';
---

<script is:inline>
  // Inicializar jarallax
  if (typeof jarallax === 'function') {
    jarallax(document.querySelectorAll('[data-jarallax]'));
    console.log('Jarallax inicializado correctamente');
  }

  // Re-inicializar después de navegación Astro
  document.addEventListener('astro:after-swap', () => {
    jarallax(document.querySelectorAll('[data-jarallax]'));
  });
</script>
```

### 2.3 Integración en Layout.astro

#### Modificación de Layout.astro

```astro
---
// Importaciones existentes
import BasicScripts from '~/components/common/BasicScripts.astro';

// Nuevas importaciones modulares
import TinySlider from '~/components/scripts/TinySlider.astro';
import ShuffleGallery from '~/components/scripts/ShuffleGallery.astro';
import FeatherIcons from '~/components/scripts/FeatherIcons.astro';
import Jarallax from '~/components/scripts/Jarallax.astro';
---

<body>
  <slot />
  
  <!-- Scripts modulares (cargar solo cuando sea necesario) -->
  <TinySlider />
  <ShuffleGallery />
  <FeatherIcons />
  <Jarallax />
  
  <!-- Script principal optimizado -->
  <BasicScripts />
</body>
```

## Plan de Implementación

### Paso 1: Limpieza Inmediata (1-2 horas)

1. **Eliminar código no utilizado** (≈200 líneas)
2. **Consolidar funcionalidades duplicadas** (≈150 líneas)
3. **Optimizar manejo de errores** (≈50 líneas)

### Paso 2: Migración de Importaciones (2-3 horas)

1. **Mover importaciones al frontmatter**
2. **Actualizar configuración de librerías**
3. **Probar funcionalidades críticas**

### Paso 3: Modularización Progresiva (3-4 horas)

1. **Crear componentes modulares**
2. **Migrar librerías una por una**
3. **Actualizar Layout.astro**

### Paso 4: Pruebas y Optimización (1-2 horas)

1. **Pruebas exhaustivas en todas las páginas**
2. **Verificar rendimiento**
3. **Optimización final**

## Beneficios Esperados

### Inmediatos (Fase 1)

- **Reducción de 40%** del tamaño del archivo (1,644 → ~986 líneas)
- **Mejora del rendimiento** por eliminación de código no utilizado
- **Reducción de errores** por consolidación de funcionalidades

### Mediano Plazo (Fase 2)

- **Mantenibilidad mejorada** por separación de responsabilidades
- **Carga condicional** de librerías según página
- **Actualizaciones más sencillas** de librerías individuales

## Riesgos y Mitigación

### Riesgos Identificados

1. **Romper funcionalidades existentes**
2. **Problemas de carga de librerías**
3. **Impacto en SEO/rendimiento**

### Estrategias de Mitigación

1. **Pruebas incrementales** después de cada cambio
2. **Mantener backup** del archivo original
3. **Monitoreo de rendimiento** durante la implementación

## Recomendación Final

Implementar la **Fase 1 inmediatamente** por su bajo riesgo y alto impacto. La **Fase 2** puede implementarse de forma progresiva según el tiempo disponible y la prioridad de las funcionalidades.

Este enfoque híbrido ofrece el mejor balance entre **mejoras inmediatas** y **riesgo controlado** para un sitio en producción.
