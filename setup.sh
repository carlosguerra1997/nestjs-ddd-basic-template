#!/bin/sh
HOME_DIR="./"
BIN_DIR="./bin/"

cd "$BIN_DIR" || { echo "Error: No se pudo acceder a la carpeta $BIN_DIR"; exit 1; }

for file in migration-make migration-revert migration-run migration-show; do
  if [ -f "$file" ]; then
    chmod +x "$file"
    echo "Se otorgaron permisos de ejecución a $file"
  else
    echo "Error: $file no se encontró en $BIN_DIR"
  fi
done

cd "$HOME_DIR" || { echo "Error: No se pudo acceder a la carpeta $HOME_DIR"; exit 1; }

echo "Creando los contenedores"
docker-compose create