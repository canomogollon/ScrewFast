
# Steps - Planes de Implementación

Esta carpeta contiene planes detallados de implementación para tareas complejas del proyecto "Bulan Sky Line". Cada archivo sirve como un blueprint que documenta exactamente qué se va a hacer antes de escribir código, siguiendo el principio "Documentar primero, implementar después".

## 📁 Estructura de Archivos

Los archivos están organizados siguiendo la nomenclatura estándar: **`tema-categoría-descripción.md`**

### Componentes del Nombre

1. **Tema**: Elemento principal (aos, jarallax, tiny-slider, etc.)
2. **Categoría**: Tipo de acción según [CATEGORIES_STANDARD.md](./CATEGORIES_STANDARD.md)
3. **Descripción**: Detalle específico de la tarea

## 📋 Categorías Disponibles

Ver [CATEGORIES_STANDARD.md](./CATEGORIES_STANDARD.md) para la documentación completa de categorías y ejemplos.

### Resumen de Categorías Principales

- **Implementation**: Para nuevas funcionalidades o integraciones iniciales
- **Migration**: Para migraciones entre tecnologías o versiones
- **Fix**: Para corrección de bugs o problemas específicos
- **Guide**: Para guías de configuración o uso
- **Summary**: Para resúmenes de implementaciones completadas
- **Refactor**: Para refactorizaciones de código existente
- **Test**: Para estrategias de pruebas
- **Config**: Para configuraciones de entorno o herramientas
- **Deploy**: Para procesos de despliegue
- **Analysis**: Para análisis técnicos o de rendimiento

## 📂 Archivos Actuales por Tema

### AOS (Animate On Scroll)

- `aos-examples-migration.md` - Ejemplos de migración a AOS
- `aos-guide-migration.md` - Guía para migrar desde otras librerías
- `aos-migration-from-taos.md` - Migración específica desde TAOS
- `aos-summary-migration.md` - Resumen del proceso de migración

### JARALLAX (Efectos Parallax)

- `jarallax-fix-logo-movement.md` - Corrección de movimiento del logo
- `jarallax-implementation-plan.md` - Plan de implementación de parallax

### TINY-SLIDER (Carruseles)

- `tiny-slider-fix-descriptionBulan.md` - Corrección en componente DescriptionBulan
- `tiny-slider-fix-import.md` - Solución de problemas de importación

### TAOS (Librería Anterior)

- `taos-migration-to-intersect.md` - Plan de migración desde TAOS a Intersect

### Documentación del Sistema

- `CATEGORIES_STANDARD.md` - Definiciones estándar de categorías
- `README.md` - Este archivo de documentación
- `RENAME_PLAN.md` - Plan de reorganización de archivos

## 🔄 Flujo de Trabajo

1. **Planificación**: Crear archivo step antes de cualquier cambio de código
2. **Revisión**: Validar el plan antes de implementar
3. **Implementación**: Seguir los pasos documentados exactamente
4. **Verificación**: Ejecutar métricas de éxito definidas
5. **Archivo**: Mantener el archivo para referencia futura

## 📝 Estructura de un Archivo Step

Cada archivo de step debe incluir:

1. **Problema Identificado**: Descripción clara del problema a resolver
2. **Solución Propuesta**: Enfoque detallado de la solución
3. **Implementación Steps**: Pasos ordenados y específicos
4. **Archivos a Modificar**: Lista completa de archivos afectados
5. **Ejemplos de Código**: Fragmentos de código exactos a implementar
6. **Estrategia de Pruebas**: Cómo verificar la implementación
7. **Posibles Problemas**: Problemas comunes y soluciones
8. **Métricas de Éxito**: Checklist para verificar completitud

## 🎯 Mejores Prácticas

- **Nomenclatura Consistente**: Seguir siempre el formato `tema-categoría-descripción.md`
- **Documentación Clara**: Ser específico y detallado en cada paso
- **Referencias Cruzadas**: Mencionar otros steps relacionados cuando sea relevante
- **Actualización Regular**: Mantener los archivos actualizados con los cambios reales
- **Métricas de Éxito**: Definir criterios claros y verificables

## 🔗 Integración con Memory Bank

Los steps están diseñados para integrarse con el Memory Bank del proyecto:

1. **Antes de crear un step**: Revisar el Memory Bank para entender el contexto actual
2. **Durante la implementación**: Seguir los pasos documentados meticulosamente
3. **Después de implementar**: Actualizar `context.md` con los cambios realizados
4. **Para tareas repetitivas**: Considerar añadir el patrón a `tasks.md`

## 📚 Documentación Relacionada

- [Memory Bank Instructions](../rules/memory-bank-instructions.md) - Instrucciones del Memory Bank
- [Steps Instructions](../rules/steps-instructions.md) - Guía detallada de implementación
- [Categories Standard](./CATEGORIES_STANDARD.md) - Definiciones completas de categorías
- [Rename Plan](./RENAME_PLAN.md) - Plan de reorganización de archivos

---

**Última actualización**: 10 de octubre de 2025
**Versión**: 1.0.0
**Mantenido por**: Sistema de Documentación Kilo Code
