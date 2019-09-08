/* eslint-disable camelcase */
// Requires / imports
import * as THREE from "three";
//var gerar_cubo = require("./Formas_Geométricas/gerar_cubo");
import { gerar_cubo } from "./Formas_Geométricas/gerar_cubo";
//var gerar_longarina = require("./Formas_Geométricas/gerar_longarina");
import { longarina as gerar_longarina } from "./Formas_Geométricas/gerar_longarina";
//var camera = require("./Geral/camera");
import { Camera } from "./Geral/camera";
var iluminação = require("./Geral/ambiente");

//-----------------
init();
function init() {
    var cena = new THREE.Scene();
    /*var cam = new THREE.PerspectiveCamera(
        90,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );*/
    var renderizar = new THREE.WebGLRenderer();
    var cam = Camera(renderizar);
    renderizar.setPixelRatio(window.devicePixelRatio);
    var render = renderizar.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderizar.domElement);
    //document.body.addEventListener("pressionar", movimentacao, false);
    //Gerar elementos
    var cubo1 = gerar_cubo(cena, 2, 1, 1, 0xff0000, 0, 0.5, 0);
    var cubo2 = gerar_cubo(cena, 3, 2, 1.3, 0x00ff00, 3, 1, 0);

    var longarina = gerar_longarina(cena, 0, 0, 0, 0xff4500, 0x00ffff, 0, 0, 0);

    var ambiente = iluminação.Iluminação(cena);

    function animate() {
        requestAnimationFrame(animate);
        renderizar.render(cena, cam);
    }
    animate();
}

//Posição da câmera

// Funções
/*function movimentacao() {
    var cam_controles = new THREE.FirstPersonControls();
}
*/
