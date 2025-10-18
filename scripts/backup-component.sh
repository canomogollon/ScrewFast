<!-- filepath: /home/elkin/devs/astrojs/logikia/scripts/backup-component.sh -->
#!/bin/bash
# Script para respaldar componente original antes de personalizar

if [ -z "$1" ]; then
  echo "Uso: ./scripts/backup-component.sh <ruta-al-componente>"
  echo "Ejemplo: ./scripts/backup-component.sh src/components/sections/landing/HeroSection.astro"
  exit 1
fi

COMPONENT_PATH="$1"
BACKUP_DIR="src/components/.upstream-backups"
COMPONENT_NAME=$(basename "$COMPONENT_PATH")
BACKUP_NAME="${COMPONENT_NAME%.astro}.original.astro"

mkdir -p "$BACKUP_DIR"

if [ ! -f "$BACKUP_DIR/$BACKUP_NAME" ]; then
  cp "$COMPONENT_PATH" "$BACKUP_DIR/$BACKUP_NAME"
  echo "✅ Respaldo creado: $BACKUP_DIR/$BACKUP_NAME"
  echo "📝 Ahora puedes modificar: $COMPONENT_PATH"
else
  echo "⚠️  Respaldo ya existe: $BACKUP_DIR/$BACKUP_NAME"
  echo "📝 Procede a modificar: $COMPONENT_PATH"
fi