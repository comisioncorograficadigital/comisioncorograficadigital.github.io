# AGENTS.md

## Propósito del sitio

Este repo corresponde al sitio informativo institucional de la Comisión Corográfica Digital (CCD).

Su función principal es:
- explicar qué es el proyecto
- mostrar quiénes participan
- registrar acciones y actividades
- informar el estado de los recursos en desarrollo

No debe pensarse primero como:
- repositorio principal
- exposición autónoma
- portal de exploración compleja

## Fuente editorial y arquitectura de contenido

La fuente editorial del sitio es híbrida y debe mantenerse así:

- `content/pages/*.md`: narrativa visible de las páginas internas
- `content/*.csv`: datos estructurados, listas, estados, cifras, enlaces y metadatos
- `content/site-content.md`: documento rector de contexto editorial y referencia institucional

Reglas:
- no inventar datos que no estén respaldados por `content/site-content.md`, los markdown de página o los CSV del repo
- no dejar contenido editorial hardcodeado en las rutas cuando pueda vivir razonablemente en `md` o `csv`
- usar `markdown` para narrativa y `csv` para datos relacionales o repetibles
- si falta información, señalarlo explícitamente
- preferir formulaciones neutrales antes que completar con suposiciones

## Criterios editoriales

- comunicar primero el proyecto y luego derivar a recursos
- dar contexto antes de mostrar enlaces
- evitar lenguaje genérico como “explora” si no orienta realmente
- evitar tono grandilocuente o promocional
- el tono debe ser institucional, claro y sobrio
- mantener coherencia entre home y páginas internas

## Forma de trabajar

- no hacer cambios grandes de UI sin propuesta previa
- hacer un solo tipo de cambio por iteración cuando sea posible
- priorizar claridad del sitio sobre complejidad visual
- antes de escribir código, verificar la función del bloque dentro del sitio
- no alterar diseño o estructura visible cuando el objetivo sea solo migración de fuente editorial

## Prioridades actuales

1. claridad del mensaje
2. coherencia entre home y secciones
3. contenido institucional suficiente
4. navegación simple
5. pulido visual
6. mantenimiento editorial sin hardcode de contenido

## Restricciones

- no asumir que el sitio es el repositorio principal
- no reorganizar el producto como portal de recursos sin justificarlo
- no introducir complejidad de navegación innecesaria
- no cambiar estructura general sin explicación previa
- no mezclar narrativa larga en CSV si corresponde mejor a markdown
