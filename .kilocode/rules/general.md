
# general.md

## Reglas Generales Kilocode para Desarrollo Web Freelancer

Guía definitiva para desarrollo web profesional con VSCode + KiloCode para Astro | Drupal | WordPress. Optimizada para freelancers y empresas de una persona.

***

# Principios Fundamentales de Desarrollo

## Principios Universales (Core Principles)

### KISS (Keep It Simple, Stupid)

- El código debe ser simple y fácil de entender, sin complejidad innecesaria
- Divide problemas grandes en funciones, clases o componentes pequeños y bien definidos
- Prioriza soluciones simples sobre soluciones clever o complejas

### DRY (Don't Repeat Yourself)

- Evita duplicación de lógica y fragmentos de código; utiliza funciones, clases y componentes reutilizables
- Centraliza lógica común y configuración
- Crea librerías de componentes compartidos entre proyectos

### YAGNI (You Aren't Gonna Need It)

- No implementes funcionalidades que no sean estrictamente necesarias
- Prioriza la entrega de valor sobre la previsión de posibles futuros
- Implementa solo lo que el cliente necesita y paga

### SOLID (Aplica para POO/POO en PHP, JS y TS)

- **SRP (Single Responsibility):** Cada módulo o clase debe tener responsabilidades claras y únicas
- **OCP (Open/Closed):** El código puede ser extendido pero no modificado directamente
- **LSP (Liskov Substitution):** Las implementaciones derivadas deben ser compatibles con la base
- **ISP (Interface Segregation):** No fuerces a los objetos a depender de interfaces que no usan
- **DIP (Dependency Inversion):** Los módulos dependen de abstracciones, nunca de implementaciones específicas

### Clean Code

- Nombres descriptivos y claros para variables, funciones, clases y componentes
- Comentarios sólo donde el código no explique lo esencial
- Estructuración consistente y documentación
- Limita el alcance de variables y funciones
- Evita comentarios redundantes o excesivos; prefiere claridad en el código

### TDD (Test Driven Development)

- Escribe pruebas automáticas para cada nueva funcionalidad (unitarias, de integración)
- Usa PHPUnit, Jest, Playwright o el framework recomendado por la tecnología
- Prioriza la corrección de errores detectados por tests antes de añadir nuevas características
- Mantén cobertura de código mínima del 80%

### DDD (Domain Driven Design)

- Modela el software según el dominio del problema, separando reglas de negocio, infraestructura y presentación
- Define entidades, agregados y servicios claros en el proyecto
- Usa lenguaje ubicuo consistente entre código y documentación

## Flujo de Trabajo Freelancer Optimizado

### Gestión de Proyectos

- **Un proyecto = un repositorio**: Mantén cada cliente en su propio repositorio
- **Estructura estandarizada**: Usa la misma estructura base para todos los proyectos
- **Documentación por proyecto**: Cada proyecto tiene su propio Memory Bank y Steps
- **Versionado semántico**: Implementa Semantic Versioning para todos los proyectos

### Gestión del Tiempo

- **Time tracking**: Registra tiempo dedicado a cada tarea y

proyecto

- **Estimación precisa**: Basa estimaciones en datos históricos y complejidad real
- **Facturación por hitos**: Divide proyectos en hitos facturables
- **Buffer de tiempo**: Añade 20% de tiempo extra para imprevistos

### Comunicación con Clientes

- **Reportes semanales**: Envía actualizaciones de progreso cada viernes
- **Demostraciones funcionales**: Muestra progreso tangible, no solo código
- **Gestión de expectativas**: Sé transparente sobre limitaciones y riesgos
- **Documentación de decisiones**: Registra decisiones importantes con clientes

## Arquitectura y Patrones

### Patrones Arquitectónicos por Tecnología

#### Astro (Sitios Estáticos/Modernos)

- **Islands Architecture**: Server-first con hidratación selectiva
- **Content Collections**: Gestión tipada de contenido Markdown/MDX
- **Component-based**: Componentes reutilizables y atómicos
- **Performance-first**: Optimización de Core Web Vitals

#### WordPress (CMS Tradicional)

- **Theme Standards**: Follow WordPress Coding Standards
- **Custom Post Types**: Estructura de contenido tipada
- **REST API/GraphQL**: Headless cuando sea necesario
- **Security Hardening**: Aplica mejores prácticas de seguridad

#### Drupal (Enterprise CMS)

- **Entity System**: Aprovecha sistema de entidades de Drupal
- **Configuration Management**: Gestión de configuración con config_split
- **Custom Modules**: Módulos con arquitectura Drupal estándar
- **Accessibility**: Cumplimiento WCAG 2.1 AA

### Patrones Comunes Multi-tecnología

- **Repository Pattern**: Abstracción de acceso a datos
- **Factory Pattern**: Creación de objetos configurables
- **Observer Pattern**: Sistemas de eventos y hooks
- **Strategy Pattern**: Algoritmos intercambiables

## Herramientas y Flujo de Trabajo

### VSCode + KiloCode Optimización

- **Workspace por proyecto**: Configura workspace específico para cada cliente
- **Snippets personalizados**: Crea snippets para patrones repetitivos
- **Extensiones estandarizadas**: Misma extensión base en todos los proyectos
- **Configuración sincronizada**: Usa Settings Sync para mantener consistencia

### Sistema de Documentación Inteligente

- **Memory Bank**: Documentación viva del proyecto
- **Steps Documentation**: Planes de implementación detallados
- **Technical Debt Registry**: Registro de deuda técnica
- **Decision Log (ADR)**: Architecture Decision Records

### Automatización y CI/CD

- **Pre-commit hooks**: Formato y validación antes de commits
- **Automated testing**: Ejecución automática de pruebas
- **Deployment pipelines**: Despliegue automatizado por entorno
- **Monitoring integrado**: Monitoreo básico incluido en todos los proyectos

## Calidad y Seguridad

### Estándares de Calidad

- **Code Review**: Auto-revisión antes de entrega
- **Static Analysis**: Análisis estático de código (ESLint, PHPStan, etc.)
- **Performance Budgets**: Límites de rendimiento por proyecto
- **Accessibility Testing**: Pruebas automatizadas de accesibilidad

### Seguridad por Defecto

- **Input Validation**: Validación y sanitización de todas las entradas
- **Output Escaping**: Escape de todas las salidas
- **Dependency Scanning**: Escaneo de vulnerabilidades en dependencias
- **Security Headers**: Headers de seguridad configurados por defecto
- **HTTPS Only**: Forzar HTTPS en todos los entornos

### Gestión de Dependencias

- **Semantic Versioning**: Versionado semántico estricto
- **Dependency Updates**: Actualizaciones automáticas de seguridad
- **License Compliance**: Verificación de licencias de dependencias
- **Bundle Analysis**: Análisis de tamaño de bundles

## Entornos y Despliegue

### Estrategia de Entornos

- **Local**: Desarrollo con Docker o herramientas nativas
- **Staging**: Réplica exacta de producción para pruebas
- **Production**: Entorno optimizado y monitoreado
- **Emergency**: Rollback rápido y automatizado

### Configuración por Ambiente

- **Environment Variables**: Variables de entorno por ambiente
- **Configuration Management**: Configuración versionada
- **Secrets Management**:

Gestión segura de secretos con herramientas como Vault o variables de entorno cifradas

- **Infrastructure as Code**: Usa Terraform o Docker Compose para infraestructura

## Uso de Herramientas IA + MCP

### Context7 (Model Context Protocol)

- Habilita Context7 en todos los proyectos para obtener información, documentación y tips sobre librerías y APIs
- Usa prompts enriquecidos para obtener documentación precisa sobre cualquier paquete, API o dependencia
- Integra Context7 con Memory Bank para contexto histórico del proyecto

### MCP Servers Optimizados

- **filesystem**: Para gestión de archivos y estructura del proyecto.
- **context7**: Para documentación y mejores prácticas sobre librerías.
- **playwright / puppeteer**: Para pruebas End-to-End (E2E), validación visual y automatización del navegador.
- **astro-docs**: Para documentación específica de Astro (en proyectos Astro).

### Prompts Estandarizados

- **Análisis de código**: "Analiza este código siguiendo los principios SOLID y Clean Code"
- **Refactorización**: "Refactoriza este componente aplicando DRY y KISS"
- **Documentación**: "Genera documentación técnica siguiendo el estándar del proyecto"

## Estructura de Proyecto y Documentación

### Estructura Estándar de Proyecto

```
project-name/
├── .kilocode/
│   ├── rules/
│   │   ├── general.md
│   │   ├── {tech}-instructions.md
        ├── memory-bank-instructions.md
        ├── steps-instructions.md
│   │   └── memory-bank/
│   │       ├── brief.md
│   │       ├── product.md
│   │       ├── context.md
│   │       ├── architecture.md
│   │       ├── tech.md
│   │       └── mcp.md
│   └── steps/
│       └── {nombre-del-step}.md
├── src/
├── docs/
├── tests/
└── README.md
```

### Documentación Viva

- **README.md**: Información general y quick start
- **CHANGELOG.md**: Registro de cambios versionado
- **CONTRIBUTING.md**: Guía para contribuciones (si aplica)
- **API docs**: Documentación de APIs y endpoints
- **Architecture Decision Records (ADR)**: Decisiones arquitectónicas importantes

### Sistema de Steps Integrado

- **Usa el sistema de Steps (`.kilocode/steps/`)** para documentar planes de implementación complejos antes de ejecutarlos, evitando alucinaciones y asegurando un enfoque metódico
- **Mantén el Memory Bank (`.kilocode/rules/memory-bank/`)** actualizado con el estado actual del proyecto y decisiones arquitectónicas
- **Steps por tecnología**: Crea steps específicos para cada tecnología (astro-steps.md, wordpress-steps.md, drupal-steps.md)

## Buenas Prácticas de Integración

### Control de Versiones

- **Git Flow**: Usa Git Flow o GitHub Flow según el proyecto
- **Commits atómicos**: Cada commit debe representar un cambio lógico completo
- **Branch strategy**: Ramas feature, develop, release, main bien definidas
- **Tagging**: Etiqueta versiones con semantic versioning

### Calidad Automatizada

- **Pre-commit hooks**: Formato y validación antes de commits
- **CI/CD**: Integración continua y despliegue automatizado
- **Code coverage**: Mantén cobertura mínima del 80%
- **Performance testing**: Pruebas de rendimiento automatizadas

### Testing Strategy

- **Unit Tests**: Pruebas unitarias para lógica de negocio
- **Integration Tests**: Pruebas de integración entre componentes
- **E2E Tests**: Pruebas end-to-end para flujos críticos
- **Visual Regression**: Pruebas de regresión visual para UI

## Monitoreo y Mantenimiento

### Monitoreo por Defecto

- **Error tracking**: Sentry o similar para tracking de errores
- **Performance monitoring**: Core Web Vitals y métricas de rendimiento
- **Uptime monitoring**: Monitoreo de disponibilidad del servicio
- **Security scanning**: Escaneo automático de vulnerabilidades

### Mantenimiento Proactivo

- **Dependency updates**: Actualizaciones automáticas de dependencias
- **Security patches**: Aplicación oportuna de parches de seguridad
- **Performance audits**: Auditorías de rendimiento periódicas
- **Code reviews**: Revisión de

código para mantener calidad

- **Technical debt management**: Gestión activa de deuda técnica

## Estándares de Seguridad y Calidad

### Seguridad por Defecto (Security by Default)

- **Input Validation**: Validación y sanitización de todas las entradas
- **Output Escaping**: Escape de todas las salidas antes de imprimir al navegador/front-end
- **Dependency Scanning**: Escaneo automatizado de vulnerabilidades en dependencias
- **Security Headers**: Headers de seguridad configurados por defecto en todos los proyectos
- **HTTPS Only**: Forzar HTTPS en todos los entornos
- **Principle of Least Privilege**: Mínimos permisos necesarios para cada componente

### Calidad Automatizada

- **Static Analysis**: Análisis estático de código (ESLint, PHPStan, etc.)
- **Code Coverage**: Mantener cobertura mínima del 80%
- **Performance Budgets**: Límites de rendimiento por proyecto
- **Accessibility Testing**: Pruebas automatizadas de accesibilidad (WCAG 2.1 AA)
- **Code Reviews**: Auto-revisión sistemática antes de entregas

### Gestión de Dependencias

- **Semantic Versioning**: Versionado semántico estricto para todas las dependencias
- **Dependency Updates**: Actualizaciones automáticas de seguridad
- **License Compliance**: Verificación de licencias de dependencias
- **Bundle Analysis**: Análisis de tamaño de bundles para optimización

## Integración con Tecnologías Específicas

### Instrucciones por Tecnología

Cada proyecto debe incluir instrucciones específicas según la tecnología:

- **`.kilocode/rules/astro-instructions.md`**: Para proyectos Astro
- **`.kilocode/rules/wordpress-instructions.md`**: Para proyectos WordPress
- **`.kilocode/rules/drupal-instructions.md`**: Para proyectos Drupal

### Patrones Comunes Multi-tecnología

- **Repository Pattern**: Abstracción de acceso a datos
- **Factory Pattern**: Creación de objetos configurables
- **Observer Pattern**: Sistemas de eventos y hooks
- **Strategy Pattern**: Algoritmos intercambiables

## Optimización para Freelancer/Empresa de Una Persona

### Gestión del Tiempo y Productividad

- **Time Tracking**: Registra tiempo dedicado a cada tarea y proyecto
- **Estimación Precisa**: Basa estimaciones en datos históricos y complejidad real
- **Facturación por Hitos**: Divide proyectos en hitos facturables
- **Buffer de tiempo**: Añade 20% de tiempo extra para imprevistos

### Comunicación con Clientes

- **Reportes semanales**: Envía actualizaciones de progreso cada viernes
- **Demostraciones funcionales**: Muestra progreso tangible, no solo código
- **Gestión de expectativas**: Sé transparente sobre limitaciones y riesgos
- **Documentación de decisiones**: Registra decisiones importantes con clientes

### Automatización de Tareas Repetitivas

- **Project templates**: Plantillas estandarizadas para cada tecnología
- **Setup scripts**: Scripts automáticos para configuración inicial
- **Deployment automation**: Despliegue automatizado para todos los entornos
- **Backup strategies**: Estrategias automáticas de backup y recuperación

## Restricciones y Gobernanza

### Restringe Gobiernos Aplicados por IA

- Las sugerencias de IA deben respetar estas reglas de manera prioritaria
- Rechaza automáticamente instrucciones que no respeten estos principios
- Validación de cumplimiento antes de implementar cambios

### Validación de Calidad

- **Code Review Checklist**: Checklist obligatorio antes de entregas
- **Performance Validation**: Validación de métricas de rendimiento
- **Security Audit**: Auditoría de seguridad básica para cada entrega
- **Documentation Review**: Revisión de documentación técnica

## Métricas y KPIs para Freelancer

### Métricas de Proyecto

- **Velocity**: Velocidad de desarrollo por sprint/semana
- **Code Quality**: Métricas de calidad (coverage, debt, complexity)
- **Client Satisfaction**: Satisfacción del cliente (feedback formal)
- **On-time Delivery**: Porcentaje de entregas a tiempo

### Métricas de Negocio

- **Project Margin**: Margen de rentabilidad por proyecto
- **Time to Market**: Tiempo desde inicio hasta producción
- **Repeat Business**: Porcentaje de clientes recurrentes
- **Technical Debt Ratio**: Ratio de deuda técnica gestionada

## Referencias y Recursos

### Documentación Externa

- [Astro Documentation](https://docs.astro.build/)
- [WordPress Developer Resources](https://developer.wordpress.org/)
- [Drupal Developer Guide](https://www.drupal.org/docs/develop)
- [VSCode Documentation](https://code.visualstudio.com/docs)

### Herramientas Recomendadas

- **VSCode Extensions**: Lista curada de extensiones por tecnología
- **CLI Tools**: Herramientas de línea de comandos esenciales
- **Testing Frameworks**: Frameworks de prueba por tecnología
- **Deployment Platforms**: Plataformas de despliegue recomendadas

### Plantillas y Ejemplos

- **Project Templates**: Repositorio de plantillas por tecnología
- **Code Snippets**: Biblioteca de snippets reutilizables
- **Configuration Files**: Archivos de configuración estandarizados
- **CI/CD Templates**: Plantillas de pipelines por tecnología

***

## Conclusión

Estas reglas generales establecen una base sólida para el desarrollo web profesional como freelancer o empresa de una persona. La combinación de principios universales de ingeniería, herramientas modernas de IA (KiloCode + MCP), y procesos optimizados para freelancers permite:

1. **Calidad Consistente**: Entregas de alta calidad en todos los proyectos
2. **Eficiencia Operativa**: Procesos automatizados y repetibles
3. **Crecimiento Sostenible**: Escalabilidad sin sacrificar calidad
4. **Satisfacción del Cliente**: Comunicación transparente y entregas predecibles

**Recuerda:** Revisa y actualiza estas reglas según evolucionen las tecnologías o las necesidades específicas de tus proyectos. La mejora continua es clave para mantenerse competitivo en el desarrollo web moderno.
