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
    var piso_geometria = new THREE.BoxGeometry(250, 0.001, 250);
    var textura_piso = new THREE.TextureLoader().load("./Imagens/piso.jpg");
    var piso_material = new THREE.MeshBasicMaterial({ map: textura_piso });
    var piso = new THREE.Mesh(piso_geometria, piso_material);
    piso.position.x = 110;
    piso.position.z = -110;
    //piso.rotateX(-Math.PI / 2);
    cena.add(piso);

    //ANCHOR  Gerar longarinas
    // (cena aonde será renderizado , altura, largura , corredor)

    // Por Prompt
    var r = 0;
    while (r < 1) {
        var qnt = prompt("Quantas longarinas gerar ? ");
        for (var i = 0; i < qnt; i++) {
            var altura_longarina = prompt("Altura : ");
            var comprimento_longarina = prompt("Comprimento : ");
            var corredor = prompt("Corredor : ");

            var long = longarina.gerar_longarina_total(
                cena,
                altura_longarina,
                comprimento_longarina,
                corredor
            );
        }
        r = 1;
    }

    //Manualmente
    /*var long_1 = longarina.gerar_longarina_total(cena, 4, 5, 0);
    var long_2 = longarina.gerar_longarina_total(cena, 4, 8, 1);
    var long_3 = longarina.gerar_longarina_total(cena, 4, 6, 2);
    var long_4 = longarina.gerar_longarina_total(cena, 4, 5, 3);
    var long_5 = longarina.gerar_longarina_total(cena, 4, 4, 4);
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
        80,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    //Posição da câmera
    camera.position.x = 0;
    camera.position.y = 20;
    camera.position.z = 18;

    controles(camera, render);

    return camera;
}

function controles(camera, render) {
    // MapControls : Usa a câmera com o mouse, (camera, onde irá renderizar)
    var camControles = new MapControls(camera, render.domElement);
    camControles.minDistance = 10;
    camControles.maxDistance = 500;
    // Ângulo máximo de rotação da image, PI = 180°
    camControles.maxPolarAngle = Math.PI / 2.2; //Math.PI / 2;

    return camControles;
}
