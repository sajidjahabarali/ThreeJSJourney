import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

//group
const group = new THREE.Group();
group.scale.y = 2;
group.rotation.y = 2;
scene.add(group);

const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

mesh.position.x = -0.5;
mesh.position.y = -1.2;
mesh.position.z = 0.2;

mesh.rotation.z = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;

mesh.position.set(0, 1, 0);

const mesh2 = new THREE.Mesh(geometry, material);
mesh2.scale.y = 0.5;

console.log(mesh.position.length());

mesh.scale.set(2, 0.2, 3);

group.add(mesh);
group.add(mesh2);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.lookAt(mesh.position);
scene.add(camera);
console.log(mesh.position.distanceTo(camera.position));

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
