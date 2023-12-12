# 02. What is WebGL and why use Three.js

## What is Three.js

Three.js is a 3D JS lib for creating 3D experiences for the web

Works with WebGL but can be made to work with SVG and CSS. (SVG and CSS are quite limited)

Exists a layer above WebGL meaning you can still do some optimization/customization using WebGL when using Three.js

## What is WebGL

JS API

Renders triangles very fast

Results can be drawn in a canvas

Compatible with most modern browsers

Uses the GPU:

*  CPU can do fast calculation but sequentially (usually)

* GPU isn’t as fast but can do lots of parallel calculations

  * GPU places many vertices and draws the pixels for the shape created by the vertices

Can be used for 2D and 3D

## Shaders

Instructions to place vertices and draw the pixels are written in shaders.

Shaders also carry extra info such as model transformations, camera coordinates, colors.etc