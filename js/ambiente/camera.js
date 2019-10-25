import * as THREE from "../../three.js-master/build/three.module";

import { MapControls } from "../../three.js-master/examples/jsm/controls/OrbitControls.js";

//ANCHOR Camera
function Camera(render) {
  var camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    800
  );

  const objeto = new THREE.Vector3(500, 10, -4.5);

  //Posição da câmera
  camera.position.x = 40;
  camera.position.y = 10;
  camera.position.z = -5;

  // MapControls : Usa a câmera com o mouse, (camera, onde irá renderizar)
  var camControles = new MapControls(camera, render.domElement);
  //camControles.addEventListener("change   ", animate);
  camControles.minDistance = 1;
  camControles.maxDistance = 100;
  // Ângulo máximo de rotação da image, PI = 180°
  camControles.maxPolarAngle = Math.PI / 2.2; //Math.PI / 2;

  return camera;
}

export { Camera };
