
# Categorías Estándar de la Industria para Steps

## 🏷️ Categorías Principales de Desarrollo

### 1. Desarrollo e Implementación

- `implementation` - Nueva funcionalidad o librería desde cero
- `integration` - Integración con servicios externos o APIs
- `setup` - Configuración inicial del entorno
- `installation` - Instalación de dependencias o herramientas

### 2. Mantenimiento y Correcciones

- `fix` - Corrección de bugs específicos
- `patch` - Parches menores o urgentes
- `hotfix` - Correcciones críticas de producción
- `debug` - Procesos de debugging y diagnóstico

### 3. Mejoras y Optimización

- `refactor` - Refactorización de código existente
- `optimization` - Mejoras de rendimiento
- `enhancement` - Mejoras funcionales
- `upgrade` - Actualizaciones de versiones

### 4. Cambios Estructurales

- `migration` - Migración entre sistemas/tecnologías
- `transition` - Transiciones graduales
- `deprecation` - Eliminación de funcionalidades obsoletas
- `replacement` - Reemplazo de componentes

### 5. Documentación y Guías

- `guide` - Guías paso a paso
- `tutorial` - Tutoriales detallados
- `examples` - Ejemplos de uso
- `reference` - Documentación de referencia
- `cheatsheet` - Referencias rápidas

### 6. Configuración y Ambiente

- `config` - Configuraciones específicas
- `environment` - Configuraciones por ambiente
- `deployment` - Procesos de despliegue
- `build` - Configuraciones de build

### 7. Pruebas y Calidad

- `test` - Estrategias de testing
- `validation` - Procesos de validación
- `verification` - Verificación de funcionalidad
- `qa` - Procesos de control de calidad

### 8. Análisis y Planificación

- `analysis` - Análisis técnicos o de negocio
- `research` - Investigación de soluciones
- `planning` - Planificación de tareas
- `strategy` - Definición de estrategias
- `roadmap` - Planes a largo plazo

### 9. Comunicación y Reportes

- `summary` - Resúmenes de cambios
- `report` - Reportes técnicos
- `changelog` - Registro de cambios
- `notes` - Notas técnicas o de reunión

### 10. Seguridad y Accesibilidad

- `security` - Implementaciones de seguridad
- `accessibility` - Mejoras de accesibilidad
- `compliance` - Cumplimiento de estándares
- `audit` - Auditorías de seguridad o código

## 📊 Matriz de Decisión por Tipo de Tarea

| Tipo de Tarea | Categoría Recomendada | Ejemplo |
|---------------|---------------------|---------|
| Nueva librería | `implementation` | `aos-implementation-initial.md` |
| Corregir bug | `fix` | `aos-fix-blink-issues.md` |
| Mejorar código | `refactor` | `aos-refactor-performance.md` |
| Cambiar tecnología | `migration` | `aos-migration-from-taos.md` |
| Crear guía | `guide` | `aos-guide-migration.md` |
| Configurar ambiente | `config` | `aos-config-production.md` |
| Probar funcionalidad | `test` | `aos-test-cross-browser.md` |
| Analizar problema | `analysis` | `aos-analysis-performance.md` |
| Documentar cambios | `summary` | `aos-summary-migration.md` |
| Mejorar seguridad | `security` | `aos-security-xss-prevention.md` |

## 🎯 Estructura Final: `tema-categoría-descripción.md`

### Ejemplos por Tema

#### AOS (Animaciones)

```
aos-implementation-initial.md
aos-migration-from-taos.md
aos-fix-blink-issues.md
aos-refactor-performance.md
aos-guide-migration.md
aos-config-production.md
aos-test-cross-browser.md
aos-analysis-performance.md
aos-summary-migration.md
```

#### JARALLAX (Parallax)

```
jarallax-implementation-plan.md
jarallax-fix-logo-movement.md
jarallax-refactor-performance.md
jarallax-config-speed.md
```

#### TINY-SLIDER (Carruseles)

```
tiny-slider-fix-import.md
tiny-slider-fix-descriptionBulan.md
tiny-slider-implementation-gallery.md
tiny-slider-config-responsive.md
```

#### TAOS (Sistema Anterior)

```
taos-migration-to-aos.md
taos-migration-to-intersect.md
taos-deprecation-plan.md
taos-replacement-aos.md
```

## 🔄 Mapeo de Archivos Actuales

| Archivo Actual | Nuevo Nombre Propuesto | Categoría |
|---------------|----------------------|-----------|
| `jarallax-implementation-plan.md` | `jarallax-implementation-plan.md` | implementation |
| `jarallax-logo-adjustment.md` | `jarallax-fix-logo-movement.md` | fix |
| `estrategia-final-aos.md` | `aos-migration-from-taos.md` | migration |
| `guia-migracion-taos.md` | `aos-guide-migration.md` | guide |
| `ejemplos-migracion-taos.md` | `aos-examples-migration.md` | examples |
| `resumen-migracion-aos.md` | `aos-summary-migration.md` | summary |
| `taos-to-intersect-migration.md` | `taos-migration-to-intersect.md` | migration |
| `tiny-slider-descriptionBulan-fix.md` | `tiny-slider-fix-descriptionBulan.md` | fix |
| `tiny-slider-import-fix.md` | `tiny-slider-fix-import.md` | fix |

## 📋 Reglas de Nomenclatura

### Formato Estandarizado

```
tema-categoría-descripción.md
```

### Componentes del Nombre

1. **Tema**: Elemento principal (aos, jarallax, tiny-slider, etc.)
2. **Categoría**: Tipo de acción (fix, migration, implementation, etc.)
3. **Descripción**: Detalle específico (logo-movement, from-taos, etc.)

### Convenciones

- Usar minúsculas
- Separar con guiones (-)
- Ser descriptivo pero conciso
- Incluir palabras clave para búsqueda fácil

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

## 🎯 Beneficios de esta Estructura

1. **Agrupación por tema**: Todos los archivos relacionados están juntos alfabéticamente
2. **Identificación rápida**: El nombre indica inmediatamente el tema y tipo
3. **Búsqueda simple**: `ls aos-*` muestra todo relacionado con AOS
4. **Escalabilidad**: Fácil agregar nuevos archivos para temas existentes
5. **Estándar industrial**: Categorías reconocidas universalmente
6. **Sin carpetas complejas**: Todo en un nivel, fácil de navegar
