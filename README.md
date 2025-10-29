# Portfolio - Rafael Manzano

Proyecto React + Vite + Tailwind preparado para desplegar en GitHub Pages.
Homepage configurado: https://RafaManzano.github.io

## Uso local

1. Instalar dependencias:
```bash
npm install
```

2. Levantar servidor de desarrollo:
```bash
npm run dev
```

3. Crear build de producción:
```bash
npm run build
```

## Despliegue en GitHub Pages

Este proyecto usa `gh-pages`. Configura un repositorio llamado `RafaManzano.github.io` y ejecuta:

```bash
npm install --save-dev gh-pages
npm run deploy
```

Esto hará push de la carpeta `dist` a la rama `gh-pages` y servirá tu página como https://RafaManzano.github.io
