# Portfolio de Rafael Manzano

Sitio estático listo para desplegar en GitHub Pages.
Contenido generado: página estática (index.html + app.js) y el CV en `/CV-Rafael-Manzano.pdf`.

## Cómo usar

1. Descomprime `rafael_portfolio.zip`.
2. Coloca todo el contenido en el branch `gh-pages` o en la rama principal si usas `/docs` en GitHub Pages.
3. Sube los archivos al repositorio `rafaelmanzanomedina.github.io` y GitHub Pages servirá `index.html` automáticamente.
4. El botón "Descargar CV" apunta al archivo `CV-Rafael-Manzano.pdf` incluido.

## Notas técnicas

- Interfaz creada con Tailwind via CDN (play CDN) y React/Framer Motion vía UMD para evitar pasos de compilación.
- Para producción se recomienda migrar a un build con Vite/React y Tailwind configurado si desea optimización.
