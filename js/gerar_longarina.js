import * as THREE from "../three.js-master/build/three.module";
import { gerar_cubo } from "./gerar_cubo";
import * as piso from "./ambiente/Piso";

//ANCHOR  Gerar_rua
function gerar_rua(
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
    function resetar_posX() {
        return (pos_x = 0);
    }
    function resetar_posZ() {
        return (pos_z = 0);
    }
    function resetar_posY() {
        return (pos_y = 0);
    }
    // Verificar quais posições já foram usadas
    /*var conferir_frente_esquerda,
        conferir_frente_direita,
        conferir_tras_esquerda,
        conferir_tras_direita;
    
    var conferir_baixo, conferir_cima;
    */
    //Frente

    vertical(
        //Esquerda
        cena,
        0.1,
        4.5,
        0.1,
        cor_hexadecimal_vertical,
        (pos_x = pos_x - 5), // -5
        pos_y, // = pos_y,
        pos_z
    );

    // ANCHOR  Proteções
    var largura_base = 3;
    var largura_total = 3.2;
    var altura_do_chão = 0.2;
    var alt = 4.5;
    var tamanho_diagonal_DS = Math.sqrt(
        Math.pow(alt / 2, 2) + Math.pow(largura_total, 2)
    );
    var altura_longarina = 4;
    // Proteção vertical esquerda
    vertical_protecao(
        cena,
        0.01,
        7.85,
        0.1,
        cor_hexadecimal_vertical,
        pos_x,
        pos_y - 0.65,
        pos_z - 1.48,
        -0.872665
    );
    vertical_protecao(
        cena,
        0.01,
        7,
        0.1,
        cor_hexadecimal_vertical,
        pos_x,
        pos_y + 1.4,
        pos_z - 1.51,
        1.0472
    );
    //
    //Proteção Vertical Direita
    vertical_protecao(
        cena,
        0.01,
        7.85,
        0.1,
        cor_hexadecimal_vertical,
        pos_x + 10,
        pos_y - 0.65,
        pos_z - 1.48,
        -0.872665
    );
    vertical_protecao(
        cena,
        0.01,
        7,
        0.1,
        cor_hexadecimal_vertical,
        pos_x + 10,
        pos_y + 1.4,
        pos_z - 1.51,
        1.0472
    );

    vertical(
        //Direita
        cena,
        0.1,
        4.5,
        0.1,
        cor_hexadecimal_vertical,
        (pos_x = pos_x + 10), // 5
        (pos_y = pos_y),
        pos_z
    );

    //Trás
    vertical(
        //Esquerda
        cena,
        0.1,
        4.5,
        0.1,
        cor_hexadecimal_vertical,
        (pos_x = pos_x - 10), // -5
        (pos_y = pos_y),
        (pos_z = pos_z - 3)
    );
    vertical(
        //Direita
        cena,
        0.1,
        4.5,
        0.1,
        cor_hexadecimal_vertical,
        (pos_x = pos_x + 10), // 5
        (pos_y = pos_y),
        (pos_z = pos_z)
    );

    // Baixo
    horizontal(
        cena,
        largura,
        altura,
        profundidade,
        cor_hexadecimal_horizontal,
        (pos_x = pos_x - 5), // 0
        (pos_y = pos_y + altura_do_chão), //0 .2
        (pos_z = pos_z + 1.5)
    );
    // Cima
    horizontal(
        cena,
        largura,
        altura,
        profundidade,
        cor_hexadecimal_horizontal,
        (pos_x = pos_x), // 0
        (pos_y = pos_y + altura_longarina), //4.2
        (pos_z = pos_z)
    );

    // ANCHOR  Gerar Caixas
    var mult_largura = 3;
    var mult_altura = 0.245;
    var posição_y = 0.2;

    var c1_x, c1_y, c1_z;
    c1_x = 2;
    c1_y = 1;
    c1_z = 3;
    /*
    var cubo1 = gerar_cubo(
        cena,
        c1_x,
        c1_y,
        c1_z,
        0xff0000,
        pos_x - mult_largura,
        posição_y + c1_y / 2 + 0.2, //pos_y - 13 * mult_altura,
        pos_z
    );
    */

    var cubo1 = gerar_cubo(
        cena,
        2,
        1,
        3,
        0xff0000,
        pos_x - mult_largura,
        pos_y - 13 * mult_altura,
        pos_z
    );

    var cubo2 = gerar_cubo(
        cena,
        3,
        2,
        3,
        0x00ff00,
        pos_x,
        pos_y - 11 * mult_altura,
        pos_z
    );
    var cubo3 = gerar_cubo(
        cena,
        2,
        3,
        3,
        0x0000ff,
        pos_x + mult_largura,
        pos_y - 9 * mult_altura,
        pos_z
    );

    posição_y += altura_longarina;
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
    var geometria_rua_vertical = new THREE.BoxGeometry(
        largura,
        altura,
        profundidade
    );
    var material_rua_vertical = new THREE.MeshBasicMaterial({
        color: cor_hexadecimal
    });

    var rua_vertical = new THREE.Mesh(
        geometria_rua_vertical,
        material_rua_vertical
    );

    rua_vertical.position.x = pos_x;
    rua_vertical.position.y = pos_y + altura / 2;
    rua_vertical.position.z = pos_z;

    return cena.add(rua_vertical);
}

//ANCHOR Vertical Proteção
function vertical_protecao(
    cena,
    largura,
    altura,
    profundidade,
    cor_hexadecimal,
    pos_x = 0,
    pos_y = 0,
    pos_z = 0,
    angulo
) {
    var geometria_protecao_vertical = new THREE.BoxGeometry(
        largura,
        altura / 2,
        profundidade
    );
    var material_protecao_vertical = new THREE.MeshBasicMaterial({
        color: cor_hexadecimal
    });

    var protecao_vertical = new THREE.Mesh(
        geometria_protecao_vertical,
        material_protecao_vertical
    );

    protecao_vertical.position.x = pos_x;
    protecao_vertical.position.y = pos_y + 2;
    protecao_vertical.position.z = pos_z;

    protecao_vertical.rotateX(angulo);

    return cena.add(protecao_vertical);
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
    var profund = 3;
    var geometria_rua_horizontal = new THREE.BoxGeometry(
        (largura = 10),
        (altura = 0.2),
        (profundidade = 3)
    );
    var material_rua_horizontal = new THREE.MeshBasicMaterial({
        color: cor_hexadecimal
    });

    var rua_horizontal = new THREE.Mesh(
        geometria_rua_horizontal,
        material_rua_horizontal
    );

    rua_horizontal.position.x = pos_x;
    rua_horizontal.position.y = pos_y;
    rua_horizontal.position.z = pos_z;

    return cena.add(rua_horizontal);
}

//ANCHOR Rua procedural
//ANCHOR Rua Dupla
var corredor = 0;
var espaçamento_vertical = 4;
var espaçamento_horizontal = 10;
function gerar_rua_dupla(
    cena,
    quantidade,
    horizontal,
    corredor,
    posição_x = 0,
    posição_y = 0
) {
    var profundidade_padrão = -5;

    var repetir = 0;
    var espaçamento_vertical = 4;
    var espaçamento_horizontal = 10;

    if (corredor > 0) {
        //         QNT.corredores * 3(profundidade)
        corredor = corredor * 3 * profundidade_padrão;
    }

    for (repetir = 0; repetir < horizontal; repetir++) {
        var pos_z_2 = corredor - 3.2;
        var i = 0;

        while (i < quantidade) {
            gerar_rua(
                //1
                cena,
                0,
                0,
                0,
                0xff4500,
                0x8b4513,
                posição_x,
                posição_y,
                corredor
            );
            gerar_rua(
                //2
                cena,
                0,
                0,
                0,
                0xff4500,
                0x8b4513,
                posição_x,
                posição_y,
                pos_z_2
            );

            posição_y += espaçamento_vertical;
            i++;
        }
        posição_y = 0;
        posição_x += espaçamento_horizontal;
    }
    //var corredor = -(3 * profundidade_padrão);
}
//ANCHOR Rua Única
function gerar_rua_unica(
    cena,
    comprimento,
    altura,
    posição_x,
    posição_y,
    posição_z
) {
    for (var repetir = 0; repetir < comprimento; repetir++) {
        var i = 0;
        while (i < altura) {
            gerar_rua(
                cena,
                0,
                0,
                0,
                0xff4500,
                0x8b4513,
                posição_x,
                posição_y,
                posição_z
            );
            posição_y += espaçamento_vertical;
            i++;
        }
        posição_y = 0;
        posição_x += espaçamento_horizontal;
    }
}

export { gerar_rua, gerar_rua_dupla, gerar_rua_unica };
