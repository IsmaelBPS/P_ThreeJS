import * as THREE from "./three.js-master/build/three.module.js";
import { MapControls } from "./three.js-master/examples/jsm/controls/OrbitControls.js";
import * as longarina from "./js/gerar_longarina";
//var longarina = require("./js/gerar_longarina");

//ANCHOR  Init
init();

function init() {
    //Cena
    var cena = new THREE.Scene();
    //Cor de fundo
    cena.background = new THREE.Color(0xd3d3d3);
    //Tipo de renderizador
    var renderizar = new THREE.WebGLRenderer({
        antialias: true
    });
    var cam = Camera(renderizar);
    //Renderizador
    renderizar.setPixelRatio(window.devicePixelRatio);
    var render = renderizar.setSize(window.innerWidth, window.innerHeight);

    //document.body.appendChild(renderizar.domElement);
    //Gerar elementos
    //Piso
    //var piso_geometria = new THREE.PlaneGeometry(250, 50, 0.01);
    var p_g = new THREE.BoxGeometry(250, 0.001, 150);
    var textura_piso = new THREE.TextureLoader().load("./Imagens/piso.jpg");
    var piso_material = new THREE.MeshBasicMaterial({ map: textura_piso });
    var piso = new THREE.Mesh(p_g, piso_material);
    piso.position.x = 90;
    //piso.rotateX(-Math.PI / 2);
    cena.add(piso);

    var profundidade_padrão = 3.5;
    //var vert_total = longarina.vertical_total(cena, 3);
    //var horz_total = longarina.horizontal_total(cena, 4);
    //var v_total_2 = longarina.vertical_total(cena, 4, 0, -3.2);
    var total = longarina.gerar_longarina_total(cena, 4, 5);

    /*var longarina1 = longarina.gerar_longarina(
        cena,
        0,
        0,
        0,
        0xff4500,
        0x8b4513,
        0,
        0,
        0
    );
    var longarina2 = longarina.gerar_longarina(
        cena,
        0,
        0,
        0,
        0xff4500,
        0x8b4513,
        0,
        0,
        -profundidade_padrão
    );
    var longarina3 = longarina.gerar_longarina(
        cena,
        0,
        0,
        0,
        0xff4500,
        0x8b4513,
        0,
        4,
        -profundidade_padrão
    );
    var longarina4 = longarina.gerar_longarina(
        cena,
        0,
        0,
        0,
        0xff4500,
        0x8b4513,
        0,
        4,
        0
    );
    var longarina4 = longarina.gerar_longarina(
        cena,
        0,
        0,
        0,
        0xff4500,
        0x8b4513,
        0,
        4,
        0
    );
    */

    // Loop de renderização
    function animate() {
        requestAnimationFrame(animate);
        renderizar.render(cena, cam);
    }
    animate();

    // appends
    document.body.appendChild(renderizar.domElement);
}

//ANCHOR Camera
function Camera(render) {
    var camera = new THREE.PerspectiveCamera(
        90,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    //Posição da câmera
    camera.position.x = 3;
    camera.position.z = 5;
    camera.position.y = 2;

    controles(camera, render);

    return camera;
}

function controles(camera, render) {
    // MapControls : Usa a câmera com o mouse, (camera, onde irá renderizar)
    var camControles = new MapControls(camera, render.domElement);
    camControles.minDistance = 2;
    camControles.maxDistance = 500;
    // Ângulo máximo de rotação da image, PI = 180°
    camControles.maxPolarAngle = Math.PI / 2.2; //Math.PI / 2;

    return camControles;
}
