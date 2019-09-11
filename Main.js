import * as THREE from "./three.js-master/build/three.module.js";
import { MapControls } from "./three.js-master/examples/jsm/controls/OrbitControls.js";
import * as rua from "./js/gerar_longarina";
import * as Piso from "./js/ambiente/Piso";
//var longarina = require("./js/gerar_longarina");

//ANCHOR  Init
init();
/*var largura_piso = 250,
    profundidade_piso = 250;
*/
function init() {
    //Cena
    var cena = new THREE.Scene();
    //Cor de fundo
    cena.background = new THREE.Color(0x000000);
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
    // Parâmetros em js/Ambiente

    //ANCHOR  Gerar longarinas
    // (cena aonde será renderizado , altura, largura , corredor)
    // Por Prompt
    var r = 0;
    var lr = 6.2;
    var largura_rua = lr + 3 * (lr / 2);
    var profundidade_do_piso = largura_rua;
    var comprimento_do_piso = 10.2;

    while (r < 1) {
        var qnt = prompt("Quantas ruas gerar ? ");
        var profpiso = profundidade_do_piso * qnt + 15.5;
        for (var i = 0; i < qnt; i++) {
            var altura_rua = prompt("Níveis da rua " + (i + 1) + " : ");
            var comprimento_rua = prompt("Prédio(s) da rua " + (i + 1) + " : ");
            var compiso = comprimento_do_piso * comprimento_rua + 10;
            Piso.p(qnt);
            piso(Piso.comprimento_piso, Piso.profundidade_piso);
            if (i == 0) {
                var n = rua.gerar_rua_unica(
                    cena,
                    3, //comprimento_rua,
                    4, //altura_rua,
                    0,
                    0,
                    12
                    //Piso.profundidade_piso - Piso.profundidade_piso + 12
                );
            } else if (i == qnt - 1) {
                var n = rua.gerar_rua_unica(
                    cena,
                    3, //comprimento_rua,
                    4, //altura_rua,
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
        piso.position.x = comprimento_piso / 2 - 5 - 1; // 110;
        piso.position.z = -(profundidade_piso / 2) + 12.5; // -110;
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
    camControles.maxDistance = 50;
    // Ângulo máximo de rotação da image, PI = 180°
    camControles.maxPolarAngle = Math.PI / 2.2; //Math.PI / 2;

    return camControles;
}
