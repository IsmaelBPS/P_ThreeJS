import * as THREE from "../three.js-master/build/three.module";
import { gerar_cubo } from "./gerar_cubo";

//ANCHOR  Gerar_longarina
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
    // Verificar quais posições já foram usadas
    var conferir_frente_esquerda,
        conferir_frente_direita,
        conferir_tras_esquerda,
        conferir_tras_direita;

    var conferir_baixo, conferir_cima;
    //Frente

    vertical(
        //Esquerda
        cena,
        largura,
        altura,
        profundidade,
        cor_hexadecimal_vertical,
        (pos_x = pos_x - 5),
        (pos_y = pos_y),
        pos_z
    );
    vertical(
        //Direita
        cena,
        largura,
        altura,
        profundidade,
        cor_hexadecimal_vertical,
        (pos_x = pos_x + 10),
        (pos_y = pos_y),
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
        (pos_x = pos_x - 10),
        (pos_y = pos_y),
        (pos_z = pos_z - 3)
    );
    vertical(
        //Direita
        cena,
        largura,
        altura,
        profundidade,
        cor_hexadecimal_vertical,
        (pos_x = pos_x + 10),
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
        (pos_x = pos_x - 5),
        (pos_y = pos_y + 0.2),
        (pos_z = pos_z + 1.5)
    );
    // Cima
    horizontal(
        cena,
        largura,
        altura,
        profundidade,
        cor_hexadecimal_horizontal,
        (pos_x = pos_x),
        (pos_y = pos_y + 3.8),
        (pos_z = pos_z)
    );

    // Gerar Caixas
    var mult_largura = 3;
    var mult_altura = 0.245;
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
    /*var vertical_tras_direita,
        vertical_tras_esquerda,
        vertical_frente_direita,
        vertical_frente_esquerda;
        var horizontal_baixo, horizontal_cima;

    // Conferir já usados
    var total_conferidos = 0;
    conferir_cima = true;
    total_conferidos++;
    conferir_baixo = true;
    total_conferidos++;
    conferir_tras_direita = true;
    total_conferidos++;
    conferir_tras_esquerda = true;
    total_conferidos++;
    conferir_frente_direita = true;
    total_conferidos++;
    conferir_frente_esquerda = true;
    total_conferidos++;

    if (total_conferidos == 6) {
    }
    */
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
    longarina_vertical.position.y = pos_y + 2.5;
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
        (altura = 0.2),
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

//ANCHOR Longarina_procedural
/*function horizontal_total(cena, quantidade, posição_y = 0, posição_z = 0) {
    var i = 0;
    var posição_x = 0;
    var espaçamento_horizontal = 10;

    while (i < quantidade) {
        gerar_longarina(
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
        posição_x += espaçamento_horizontal;

        i++;
    }
}*/

function gerar_longarina_total(
    cena,
    quantidade,
    horizontal,
    posição_x = 0,
    posição_y = 0,
    posição_z = 0
) {
    var repetir = 0;
    var espaçamento_vertical = 4;
    var espaçamento_horizontal = 10;
    for (repetir = 0; repetir < horizontal; repetir++) {
        var pos_z_2 = posição_z - 3.5;
        var i = 0;
        while (i < quantidade) {
            gerar_longarina(
                //1
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
            gerar_longarina(
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
}

export { gerar_longarina, gerar_longarina_total };
