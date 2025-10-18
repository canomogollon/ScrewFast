
# Sistema de Steps - Guía Detallada de Implementación

## Propósito del Sistema de Steps

El sistema de Steps (`.kilocode/steps/`) es una metodología de documentación previa a la implementación que sirve como blueprint para evitar alucinaciones y asegurar un enfoque metódico en el desarrollo. Cada step es un plan detallado que documenta exactamente qué se va a hacer antes de escribir código.

## Filosofía Central

**"Documentar primero, implementar después"**

Este principio se alinea con las mejores prácticas de desarrollo:

- **KISS**: Planes simples y claros
- **DRY**: Reutilizar patrones documentados
- **Clean Code**: Documentación clara y estructurada
- **TDD**: Planificación antes de implementación

## Cuándo Crear Steps

### Obligatorio en estos casos

- **Implementación de nuevas funcionalidades complejas**
- **Integración de librerías o dependencias externas**
- **Refactorizaciones mayores que afectan múltiples archivos**
- **Solución de problemas complejos o bugs críticos**
- **Cambios en la arquitectura del sistema**

### Recomendado en estos casos

- **Implementación de componentes personalizados**
- **Configuración de nuevas herramientas o servicios**
- **Migraciones o actualizaciones importantes**
- **Implementación de patrones de diseño específicos**

## Estructura de un Archivo de Step

Cada archivo de step debe seguir esta estructura estándar:

```markdown
# [Título Descriptivo del Step]

## Problema Identificado
[Descripción clara y concisa del problema que se va a resolver]

## Solución Propuesta
[Descripción detallada del enfoque de solución]

## Implementación Steps
1. [Paso específico 1]
2. [Paso específico 2]
3. [Paso específico 3]
...

## Archivos a Modificar
- `ruta/archivo1.ext` - [Descripción del cambio]
- `ruta/archivo2.ext` - [Descripción del cambio]
...

## Ejemplos de Código
[Código exacto que se va a implementar]

## Estrategia de Pruebas
[Cómo se verificará que la implementación funciona]

## Posibles Problemas y Soluciones
[Problemas comunes y cómo resolverlos]

## Métricas de Éxito
- [ ] [Criterio de verificación 1]
- [ ] [Criterio de verificación 2]
- [ ] [Criterio de verificación 3]
```

## Nomenclatura de Archivos

Usa nombres descriptivos siguiendo el formato estándar: **`tema-categoría-descripción.md`**

### Categorías Disponibles

Ver el documento completo de categorías en: **[CATEGORIES_STANDARD.md](../steps/CATEGORIES_STANDARD.md)**

### Formato Estandarizado

```
tema-categoría-descripción.md
```

### Componentes del Nombre

1. **Tema**: Elemento principal (aos, jarallax, tiny-slider, etc.)
2. **Categoría**: Tipo de acción según [CATEGORIES_STANDARD.md](../steps/CATEGORIES_STANDARD.md)
3. **Descripción**: Detalle específico de la tarea

### Ejemplos por Categoría

#### Implementation

```
aos-implementation-initial.md
jarallax-implementation-parallax.md
tiny-slider-implementation-gallery.md
```

#### Migration

```
aos-migration-from-taos.md
taos-migration-to-aos.md
```

#### Fix

```
aos-fix-blink-issues.md
jarallax-fix-logo-movement.md
tiny-slider-fix-import.md
```

#### Guide

```
aos-guide-migration.md
jarallax-guide-configuration.md
```

#### Summary

```
aos-summary-migration.md
jarallax-summary-implementation.md
```

### Convenciones

- Usar minúsculas
- Separar con guiones (-)
- Ser descriptivo pero conciso
- Incluir palabras clave para búsqueda fácil

## Flujo de Trabajo del Sistema de Steps

### 1. Fase de Planificación

- **Crear el archivo de step** antes de cualquier cambio de código
- **Documentar el problema** de manera clara y específica
- **Investigar soluciones** y documentar la propuesta
- **Identificar todos los archivos** que serán modificados

### 2. Fase de Revisión

- **Revisar el plan** con atención a los detalles
- **Validar que todos los pasos** estén completos y en orden lógico
- **Verificar que los ejemplos de código** sean correctos
- **Asegurar que las métricas de éxito** sean medibles

### 3. Fase de Implementación

- **Seguir los pasos exactamente** como están documentados
- **No desviarse del plan** sin actualizar el step primero
- **Documentar cualquier desviación** o descubrimiento importante
- **Marcar cada paso completado** a medida que se avanza

### 4. Fase de Verificación

- **Ejecutar la estrategia de pruebas** documentada
- **Verificar cada métrica de éxito**
-

- **Documentar los resultados** obtenidos
- **Archivar el step** para referencia futura

## Ejemplos Prácticos

### Ejemplo 1: Integración de Librería

```markdown
# Integración de Shuffle.js para Galerías

## Problema Identificado
La galería de imágenes actual no tiene funcionalidad de filtrado por categorías, lo que limita la experiencia del usuario.

## Solución Propuesta
Integrar Shuffle.js para proporcionar filtrado dinámico y animaciones suaves en las galerías de imágenes del proyecto.

## Implementación Steps
1. Instalar Shuffle.js como dependencia
2. Importar estilos CSS en Layout.astro
3. Configurar inicialización en BasicScripts.astro
4. Modificar estructura HTML de GalleryBulan.astro
5. Agregar botones de filtrado por categoría
6. Implementar animaciones de transición

## Archivos a Modificar
- `package.json` - Añadir dependencia shufflejs
- `src/layouts/Layout.astro` - Importar CSS de Shuffle
- `src/components/common/BasicScripts.astro` - Inicialización
- `src/components/widgets/GalleryBulan.astro` - Estructura HTML

## Ejemplos de Código
```javascript
// BasicScripts.astro
import('shufflejs').then(({ default: Shuffle }) => {
  const shuffleInstance = new Shuffle(document.querySelector('.gallery-grid'), {
    itemSelector: '.gallery-item',
    sizer: '.gallery-sizer'
  });
});
```

## Estrategia de Pruebas

1. Verificar que el filtrado funcione correctamente
2. Comprobar animaciones en diferentes navegadores
3. Testear responsive design
4. Validar accesibilidad

## Posibles Problemas y Soluciones

- **Problema**: Conflictos con otros scripts
- **Solución**: Usar namespace específico para Shuffle

## Métricas de Éxito

- [ ] El filtrado responde en menos de 300ms
- [ ] Las animaciones son suaves (60fps)
- [ ] Funciona en móviles y desktop
- [ ] No hay errores en consola

```

### Ejemplo 2: Corrección de Bug

```markdown
# Fix: Parallax no funciona en navegación del cliente

## Problema Identificado
El efecto parallax de jarallax se pierde al navegar entre páginas usando el sistema de routing de Astro.

## Solución Propuesta
Re-inicializar jarallax después de cada cambio de página usando el evento astro:after-swap.

## Implementación Steps
1. Identificar el evento de navegación de Astro
2. Modificar script de inicialización de jarallax
3. Agregar listener para astro:after-swap
4. Probar navegación entre páginas

## Archivos a Modificar
- `src/components/common/BasicScripts.astro` - Re-inicialización

## Ejemplos de Código
```javascript
document.addEventListener('astro:after-swap', () => {
  jarallax(document.querySelectorAll('[data-jarallax]'));
});
```

## Estrategia de Pruebas

1. Navegar entre diferentes páginas
2. Verificar que parallax se mantenga
3. Testear en diferentes navegadores

## Posibles Problemas y Soluciones

- **Problema**: Múltiples inicializaciones
- **Solución**: Destruir instancia anterior antes de re-inicializar

## Métricas de Éxito

- [ ] Parallax funciona después de navegación
- [ ] No hay duplicación de instancias
- [ ] Rendimiento se mantiene óptimo

## Buenas Prácticas Adicionales

### Documentación de Código

- **Comentarios explicativos**: Añade comentarios en el código que expliquen el porqué de decisiones importantes
- **Referencias cruzadas**: Menciona otros steps relacionados cuando sea relevante
- **Versionado**: Incluye información de versiones de librerías o dependencias

### Manejo de Errores

- **Casos edge**: Documenta siempre los casos límite y cómo manejarlos
- **Fallbacks**: Incluye planes B cuando la solución principal pueda fallar
- **Rollback**: Documenta cómo revertir los cambios si algo sale mal

### Colaboración

- **Revisión por pares**: Siempre que sea posible, haz que otro desarrollador

revise el step antes de la implementación

- **Documentación compartida**: Mantén los steps accesibles para todo el equipo

### Integración con Memory Bank

Los steps deben integrarse con el Memory Bank existente:

1. **Antes de crear un step**: Revisa el Memory Bank para entender el contexto actual
2. **Después de implementar**: Actualiza `context.md` con los cambios realizados
3. **Para tareas repetitivas**: Considera añadir el patrón a `tasks.md`

### Automatización y Plantillas

Crea plantillas para tipos comunes de steps:

```markdown
# Plantilla para Integración de Librería
## Problema Identificado
## Solución Propuesta
## Implementación Steps
## Archivos a Modificar
## Ejemplos de Código
## Estrategia de Pruebas
## Posibles Problemas y Soluciones
## Métricas de Éxito
```

## Métricas de Calidad para Steps

Un step de alta calidad debe tener:

### Características Obligatorias

- [ ] Título descriptivo y claro
- [ ] Problema bien definido
- [ ] Solución específica y medible
- [ ] Pasos de implementación ordenados
- [ ] Lista de archivos a modificar
- [ ] Métricas de éxito verificables

### Características Recomendadas

- [ ] Ejemplos de código funcionales
- [ ] Estrategia de pruebas detallada
- [ ] Posibles problemas y soluciones
- [ ] Referencias a documentación externa
- [ ] Tiempos estimados de implementación

## Flujo de Trabajo Integrado

### 1. Inicio de Tarea

```
Usuario solicita nueva funcionalidad
↓
IA revisa Memory Bank para contexto
↓
IA evalúa si requiere step (complejidad/impacto)
```

### 2. Creación de Step (si aplica)

```
IA crea archivo en .kilocode/steps/
↓
Usuario revisa y aprueba el plan
↓
IA procede con implementación
```

### 3. Implementación

```
IA sigue los pasos documentados
↓
Marca cada paso completado
↓
Reporta progreso y desviaciones
```

### 4. Verificación y Cierre

```
Ejecutar métricas de éxito
↓
Actualizar Memory Bank (context.md)
↓
Archivar step para referencia futura
```

## Mantenimiento del Sistema de Steps

### Revisión Periódica

- **Mensual**: Revisar steps archivados para identificar patrones
- **Trimestral**: Actualizar plantillas y mejores prácticas
- **Semestral**: Evaluar efectividad del sistema y hacer mejoras

### Organización

- **Categorizar**: Agrupar steps por tipo (integración, bug, refactor, etc.)
- **Etiquetar**: Usar etiquetas para tecnologías específicas
- **Versionar**: Mantener versiones cuando los steps evolucionan

## Referencias y Recursos

### Enlaces Útiles

- [Documentación de Astro](https://docs.astro.build/)
- [Guías de mejores prácticas](https://github.com/onwidget/astrowind)
- [Memory Bank Instructions](./memory-bank-instructions.md)
- [Reglas Generales](./general.md)

### Ejemplos Existentes

- `.kilocode/steps/jarallax-implementation-plan.md`
- `.kilocode/steps/jarallax-logo-adjustment.md`

---

**Recuerda**: Un step bien documentado es tan valioso como el código que implementa. La claridad en la planificación reduce errores, acelera el desarrollo y facilita el mantenimiento futuro.
