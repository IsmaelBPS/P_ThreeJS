/* eslint-disable camelcase */
// Requires / imports
var THREE = require("three");
var gerar_cubo = require("./Formas_Geométricas/gerar_cubo");

//-----------------
var cena = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
var renderizar = new THREE.WebGLRenderer();
var render = renderizar.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizar.domElement);
var cubo1 = gerar_cubo(cena, 2, 1, 1, 0xff0000, 0, 0.5, 0);
var cubo2 = gerar_cubo(cena, 3, 2, 1.3, 0x00ff00, 3, 1, 0);
var animate = function() {
    requestAnimationFrame(animate);
    renderizar.render(cena, cam);
};

//Posição da câmera
cam.position.x = 5;
cam.position.z = 8;
animate();
