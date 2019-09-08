import * as THREE from "./three.js-master/build/three.module.js";
import { MapControls } from "./three.js-master/examples/jsm/controls/OrbitControls.js";

//ANCHOR  Init
init();
function init() {
    var cena = new THREE.Scene();
    cena.background = new THREE.Color(0xd3d3d3);
    var renderizar = new THREE.WebGLRenderer({ antialias: true });
    var cam = Camera(renderizar);
    renderizar.setPixelRatio(window.devicePixelRatio);
    var render = renderizar.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderizar.domElement);
    //Gerar elementos
    var cubo1 = gerar_cubo(cena, 2, 1, 1, 0xff0000, -3, 0.8, -0.5);
    var cubo2 = gerar_cubo(cena, 3, 2, 1, 0x00ff00, 0, 1.3, -0.5);
    var cubo3 = gerar_cubo(cena, 2, 1, 1, 0x0000ff, 3, 0.8, -0.5);
    var longarina = gerar_longarina(cena, 0, 0, 0, 0xff4500, 0xcd853f, 0, 0, 0);

    var ambiente = Iluminação(cena);

    // Loop de renderização
    function animate() {
        requestAnimationFrame(animate);
        renderizar.render(cena, cam);
    }
    animate();
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
    camControles.maxDistance = 50;
    // Ângulo máximo de rotação da image, PI = 180°
    camControles.maxPolarAngle = Math.PI / 2;

    return camControles;
}

//ANCHOR gerar_cubo
function gerar_cubo(
    cena,
    largura = 0,
    altura = 0,
    profundidade = 0,
    cor_hexadecimal,
    pos_x = 0,
    pos_y = 0,
    pos_z = 0
) {
    var geometria_cubo = new THREE.BoxGeometry(largura, altura, profundidade);
    var material_cubo = new THREE.MeshBasicMaterial({
        color: cor_hexadecimal
    });
    var cubo = new THREE.Mesh(geometria_cubo, material_cubo);

    cubo.position.x = pos_x;
    cubo.position.y = pos_y;
    cubo.position.z = pos_z;

    return cena.add(cubo);
}

//ANCHOR longarina
function gerar_longarina(
    cena,
    largura,
    altura,
    profundidade,
    cor_hexadecimal_vertical,
    cor_hexadecimal_horizontal,
    pos_x = 0,
    pos_y = 0,
    pos_z = 0
) {
    //Frente

    vertical(
        //Esquerda
        cena,
        largura,
        altura,
        profundidade,
        cor_hexadecimal_vertical,
        (pos_x = -5),
        (pos_y = 2),
        pos_z
    );
    vertical(
        //Direita
        cena,
        largura,
        altura,
        profundidade,
        cor_hexadecimal_vertical,
        (pos_x = 5),
        (pos_y = 2),
        pos_z
    );

    //Trás
    vertical(
        //Esquerda
        cena,
        largura,
        altura,
        profundidade,
        cor_hexadecimal_vertical,
        (pos_x = -5),
        (pos_y = 2),
        (pos_z = -3)
    );
    vertical(
        //Direita
        cena,
        largura,
        altura,
        profundidade,
        cor_hexadecimal_vertical,
        (pos_x = 5),
        (pos_y = 2),
        (pos_z = -3)
    );

    // Baixo
    horizontal(
        cena,
        largura,
        altura,
        profundidade,
        cor_hexadecimal_horizontal,
        (pos_x = 0),
        (pos_y = 0.2),
        (pos_z = -1.5)
    );
    // Cima
    horizontal(
        cena,
        largura,
        altura,
        profundidade,
        cor_hexadecimal_horizontal,
        pos_x,
        (pos_y = 4.2),
        (pos_z = -1.5)
    );

    //base
}
//ANCHOR Vertical
function vertical(
    cena,
    largura,
    altura,
    profundidade,
    cor_hexadecimal,
    pos_x = 0,
    pos_y = 0,
    pos_z = 0
) {
    var geometria_longarina_vertical = new THREE.BoxGeometry(
        (largura = 0.1),
        (altura = 5),
        (profundidade = 0.1)
    );
    var material_longarina_vertical = new THREE.MeshBasicMaterial({
        color: cor_hexadecimal
    });

    var longarina_vertical = new THREE.Mesh(
        geometria_longarina_vertical,
        material_longarina_vertical
    );

    longarina_vertical.position.x = pos_x;
    longarina_vertical.position.y = pos_y;
    longarina_vertical.position.z = pos_z;

    return cena.add(longarina_vertical);
}
//ANCHOR horizontal
function horizontal(
    cena,
    largura,
    altura,
    profundidade,
    cor_hexadecimal,
    pos_x = 0,
    pos_y = 0,
    pos_z = 0
) {
    var geometria_longarina_horizontal = new THREE.BoxGeometry(
        (largura = 10),
        (altura = 0.1),
        (profundidade = 3)
    );
    var material_longarina_horizontal = new THREE.MeshBasicMaterial({
        color: cor_hexadecimal
    });

    var longarina_horizontal = new THREE.Mesh(
        geometria_longarina_horizontal,
        material_longarina_horizontal
    );

    longarina_horizontal.position.x = pos_x;
    longarina_horizontal.position.y = pos_y;
    longarina_horizontal.position.z = pos_z;

    return cena.add(longarina_horizontal);
}
function Iluminação(cena) {
    var luzes = new THREE.AmbientLight(0xffffff, 0.5);
    //var pontosluzes = new THREE.PointLight(0xffffff, 1, 100);
    return cena.add(luzes);
}
