import * as THREE from "../three.js-master/build/three.module";

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
export { gerar_cubo };
