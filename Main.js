import * as THREE from "./three.js-master/build/three.module";
import * as rua from "./js/gerar_prédios(antigo)";
import * as Piso from "./js/ambiente/Piso";
import {
    Camera
} from "./js/ambiente/camera";
import {
    gerar_prédios
} from "./js/gerar_prédios";
import {
    iluminacao
} from "./js/ambiente/iluminação";
//import { MapControls } from "./three.js-master/examples/jsm/controls/OrbitControls.js";

// TODO Testar frustum;

//var longarina = require("./js/gerar_longarina");

//ANCHOR  Init
//var canvas = document.querySelector("#c");
var cena = new THREE.Scene();
var renderizar = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: "high-performance"
});
renderizar.shadowMap.enabled = true;
renderizar.shadowMap.type = THREE.PCFSoftShadowMap;
//renderizar.shadowMap.type = THREE.PCFSoftShadowMap;
//renderizar.shadowMapSoft = true;
const cam = Camera(renderizar);

init();
rend();
/*var largura_piso = 250,
    profundidade_piso = 250;
*/
function init() {
    //Cena
    //Cor de fundo
    /*  const light = new THREE.DirectionalLight(0xffffff, 1, 100);
    light.castShadow = true;
    light.position.set(0, 1, -25);
    //light.position.multiplyScalar(1.3);
    light.shadowCameraVisible = true;
  */
    var ruas = new Array();
    ruas[0] = gerar_prédios(cena, -15, 1, 10, 4);
    console.log(ruas[0]);
    for (let i = 0; i < 2; i++) {

    }

    /*
    const light = new THREE.PointLight(0xffffff, 1, 1000);
    light.castShadow = true;
    light.position.set(0, 20, -3.5);
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;

    const light2 = new THREE.PointLight(0xffffff, 1, 1000);
    light2.castShadow = true;
    light2.position.set(20, 14, -25);

    const light3 = new THREE.PointLight(0xffffff, 1, 1000);
    light3.castShadow = true;
    light3.position.set(40, 14, -25);
    light3.shadow.mapSize.width = 4096;
    light3.shadow.mapSize.height = 4096;
    */
    //light.castShadow = true;

    //cena.add(light);
    //cena.add(light);
    //cena.add(light2);
    //cena.add(light3);
    iluminacao(cena);
    //cena.background = new THREE.Color(0x000000);
    //Tipo de renderizador

    //Renderizador
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
    const largura_longarina_2pallets = 2.4;
    const profundidade_longarina = 1.35;
    const profundidade_rua_total = 6.75;

    var luz = new THREE.AmbientLight(0xffffff, 0.8);
    piso(100, 50);
    cena.add(luz);
    //gerar_prédios(cena, 26, 6);
    //colocar_caixas(cena);

    while (r < 1) {
        var qnt_ruas = prompt("Ruas : ");
        var comprimento_piso = 0;
        var profundidade_piso = 0;
        //const profundidade_piso = lr * qt
        var pos_Z = -15;
        for (var i = 0; i < qnt_ruas; i++) {
            const n_ruas = qnt_ruas;
            var altura_rua = prompt("Níveis da rua " + (i + 1) + " : ");
            var comprimento_rua = prompt("Prédio(s) da rua " + (i + 1) + " : ");
            comprimento_piso = largura_longarina_2pallets * comprimento_rua;
            profundidade_piso = n_ruas * profundidade_longarina;
            gerar_prédios(cena, pos_Z, n_ruas, comprimento_rua, altura_rua);
            pos_Z -= profundidade_rua_total;
        }
        //piso(comprimento_piso, profundidade_piso);
        r = 1;
    }

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
    //ANCHOR  Piso
    function piso(comprimento_piso, profundidade_piso) {
        //Piso
        var piso_geometria = new THREE.BoxGeometry(
            comprimento_piso,
            0.001,
            profundidade_piso
        );
        var textura_piso = new THREE.TextureLoader().load("./Imagens/piso.jpg");
        var piso_material = new THREE.MeshLambertMaterial({
            map: textura_piso
        });
        var piso = new THREE.Mesh(piso_geometria, piso_material);
        piso.receiveShadow = true;
        piso.position.x = comprimento_piso / 2; // 110;
        piso.position.z = -(profundidade_piso / 2) + 7; // -110;
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
    /*
    var animate = function() {
        requestAnimationFrame(animate);
        renderizar.render(cena, cam);
    };
    animate();

    */
    // appends
    document.body.appendChild(renderizar.domElement);
    console.log(renderizar.info.render);
}

//ANCHOR  Eventos de renderização
document.addEventListener("mousedown", request_render, false);
document.addEventListener("mousemove", request_render, false);
//document.addEventListener("wheel", request_render, false);

// ANCHOR render

function rend() {
    renderizar.render(cena, cam);
    //console.log(renderizar.info.render);
    if (ultimo_clique + standby < Date.now()) {
        clicando = false;
    } else {
        clicando = true;
        requestAnimationFrame(rend);
    }
}
var ultimo_clique = Date.now();
var clicando = true;
var standby = 600; // ms
function request_render() {
    ultimo_clique = Date.now();
    if (!clicando) {
        requestAnimationFrame(rend);
    }
}

export {
    THREE
};