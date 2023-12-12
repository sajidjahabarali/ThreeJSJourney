# Local server and build tools

Opening a HTML file has limited functionality for three js websites for security reasons.

To fix this we need to run a local server which can be setup using a “build tool” or “bundler”

## The state of build tools

Example build tools: Webpack, Vite, Gulp, Parcel.etc

All have pros and cons

Most common is Webpack

Most appreciated is Vite

## Vite

Vite is a build tool which will take the HTML/CSS/JS we provide and will build the final website.

It will also do other tasks like optimizations, cache breaking, source mapping, running a local server.etc

Plugins can be added to Vite

## First Scene

### Scene

A scene acts like a container to place objects, models, lights.etc

### Objects

Can be many things such as geometries, models, particles, lights.etc

### Mesh

A mesh is the combination of a geometry and a material:

- Geometry : The shape of the object
- Material: How the object looks

### Camera

Camera is the perspective from which the scene is rendered.
It is possible to have multiple cameras in a scene and switch between them.

#### Perspective Camera

This is one type of camera avaiable in ThreeJS which takes 2 parameters:

- Field of View: How large the vision angle is.
- Aspect Ratio: Width of the canvas / Height of canvas

### Renderer

The renderer will render the scene from the camera's point of view and the result can be drawn into a canvas.
