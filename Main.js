import * as THREE from "./three.js-master/build/three.module";
import * as rua from "./js/gerar_prédios(antigo)";
import * as Piso from "./js/ambiente/Piso";
//import { Camera } from "./js/ambiente/camera";
import { gerar_prédios } from "./js/gerar_prédios";
import { MapControls } from "./three.js-master/examples/jsm/controls/OrbitControls.js";

// TODO Testar frustum;

//var longarina = require("./js/gerar_longarina");

//ANCHOR  Init
//var canvas = document.querySelector("#c");
var cena = new THREE.Scene();
var renderizar = new THREE.WebGLRenderer({
    preserveDrawingBuffer: true,
    antialias: true
});
var cam = Camera(renderizar);

init();
//rend();
/*var largura_piso = 250,
    profundidade_piso = 250;
*/
function init() {
    //Cena
    //Cor de fundo
    cena.background = new THREE.Color(0x000000);
    //Tipo de renderizador

    //Renderizador
    renderizar.autoClear = false;
    renderizar.setPixelRatio(window.devicePixelRatio);
    var render = renderizar.setSize(window.innerWidth, window.innerHeight);

    //document.body.appendChild(renderizar.domElement);
    //Gerar elementos
    //Piso
    // Parâmetros em js/Ambiente

    //ANCHOR  Gerar longarinas
    // (cena aonde será renderizado , altura, largura , corredor)
    // Por Prompt
    var r = 0;
    var lr = 2.7;
    var largura_rua = lr + 3 * (lr / 2);
    var profundidade_do_piso = largura_rua;
    var comprimento_do_piso = 10.2;

    var luz = new THREE.AmbientLight(0xffffff);
    piso(250, 50);
    cena.add(luz);
    gerar_prédios(cena, 53, 6);

    /*var galpao = Array();
    while (r < 1) {
        var qnt = prompt("Quantas ruas gerar ? ");
        var profpiso = profundidade_do_piso * qnt + 15.5;

        for (var i = 0; i < qnt; i++) {
            var altura_rua = prompt("Níveis da rua " + (i + 1) + " : ");
            var comprimento_rua = prompt("Prédio(s) da rua " + (i + 1) + " : ");
            var compiso = comprimento_do_piso * comprimento_rua + 10;
            // Sempre gera o piso a cada for, ficando sobreposto sempre o maior
            Piso.p(qnt, comprimento_rua);
            piso(Piso.comprimento_piso, Piso.profundidade_piso);
            if (i == 0) {
                var n = rua.gerar_rua_unica(
                    cena,
                    comprimento_rua, //comprimento_rua,
                    altura_rua, //altura_rua,
                    0,
                    0,
                    12
                    //Piso.profundidade_piso - Piso.profundidade_piso + 12
                );
            } else if (i == qnt - 1) {
                var n = rua.gerar_rua_unica(
                    cena,
                    comprimento_rua, //comprimento_rua,
                    altura_rua, //altura_rua,
                    0,
                    0,
                    -Piso.profundidade_piso + largura_rua
                    //-Piso.profundidade_piso + 15 + 1
                );
            }

            var r = rua.gerar_rua_dupla(cena, altura_rua, comprimento_rua, i);
        }
        r = 1;
    }
    */
    //cena.updateMatrixWorld();
    function piso(comprimento_piso, profundidade_piso) {
        //Piso
        var piso_geometria = new THREE.BoxGeometry(
            comprimento_piso,
            0.001,
            profundidade_piso
        );
        var textura_piso = new THREE.TextureLoader().load("./Imagens/piso.jpg");
        var piso_material = new THREE.MeshBasicMaterial({ map: textura_piso });
        var piso = new THREE.Mesh(piso_geometria, piso_material);
        piso.position.x = comprimento_piso / 2 - 6; // 110;
        piso.position.z = -(profundidade_piso / 2) + 12.2; // -110;
        //piso.rotateX(-Math.PI / 2);
        cena.add(piso);
    }
    //Manualmente
    /*var long_1 = rua.gerar_longarina_total(cena, 4, 5, 0);
    var long_2 = rua.gerar_longarina_total(cena, 4, 8, 1);
    var long_3 = rua.gerar_longarina_total(cena, 4, 6, 2);
    var long_4 = rua.gerar_longarina_total(cena, 4, 5, 3);
    var long_5 = rua.gerar_longarina_total(cena, 4, 4, 4);
    */

    // Loop de renderização

    var animate = function() {
        requestAnimationFrame(animate);
        renderizar.render(cena, cam);
    };
    animate();

    // appends
    document.body.appendChild(renderizar.domElement);
    console.log(renderizar.info.render);
}

//ANCHOR  Eventos de renderização
//document.addEventListener("mousedown", request_render, false);
//document.addEventListener("mousemove", request_render, false);
//document.addEventListener("wheel", request_render, false);

// ANCHOR render
/*
function rend() {
    renderizar.render(cena, cam);
    if (ultimo_clique + standby < Date.now()) {
        clicando = false;
    } else {
        clicando = true;
        requestAnimationFrame(rend);
    }
}
var ultimo_clique = Date.now();
var clicando = true;
var standby = 4000; // ms
function request_render() {
    ultimo_clique = Date.now();
    if (!clicando) {
        requestAnimationFrame(rend);
    }
}
*/
//ANCHOR Camera
function Camera(render) {
    var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        150
    );

    //Posição da câmera
    camera.position.x = 0;
    camera.position.y = 20;
    camera.position.z = 18;

    // MapControls : Usa a câmera com o mouse, (camera, onde irá renderizar)
    var camControles = new MapControls(camera, render.domElement);
    //camControles.addEventListener("change   ", animate);
    camControles.minDistance = 1;
    camControles.maxDistance = 50;
    // Ângulo máximo de rotação da image, PI = 180°
    camControles.maxPolarAngle = Math.PI / 2.2; //Math.PI / 2;

    return camera;
}
