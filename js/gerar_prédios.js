import * as THREE from "../three.js-master/build/three.module";
import { GLTFLoader } from "../three.js-master/examples/jsm/loaders/GLTFLoader";
//import { BufferGeometryUtils } from "../three.js-master/examples/jsm/utils/BufferGeometryUtils";
//import { GeometryReducer } from "./geometry_reducer";
import { gerar_cubo } from "./gerar_cubo";
import { OBJLoader } from "../three.js-master/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "../three.js-master/examples/jsm/loaders/MTLLoader";

// Variáveis do arquivo
const altura_longarina = 1.9;
const largura_longarina_2pallets = 2.4 - 0.04;
const largura_longarina_3pallets = 3.6 - 0.04;
const profundidade_longarina = 1.3 + 0.05;
const largura_corredor = 3 * profundidade_longarina;
var longarina_base = 2;

// Loader do formato gltf/glb
const loader = new GLTFLoader();
//const ld_obj = new OBJLoader();
const mtl_obj = new MTLLoader();
// ANCHOR  gerar prédios
function gerar_prédios(
    cena,
    n_predios,
    n_niveis,
    cor_hexadecimal_base,
    cor_hexadecimal_vertical,
    pos_x = 0,
    pos_y = 0,
    pos_z = 0
) {
    //Frente
    var matriz_rua = [];
    var predios = n_predios;
    var niveis = n_niveis;
    var repetir_comprimento = 0;
    var p = 0;

    /*
    for (var i = 0; i <= 20; i++) {
        gerar_longarina_2pallets_chao(cena, p, 0, 0);
        p += largura_longarina_2pallets;
    }
    */

    while (repetir_comprimento < predios) {
        for (var i = 0; i < niveis; i++) {
            switch (longarina_base) {
                case 2:
                    var long_base = gerar_longarina_2pallets_chao(
                        cena,
                        pos_x,
                        0,
                        pos_z
                    );

                    if (i >= 1) {
                        var long_altura = gerar_longarina_2pallets(
                            cena,
                            pos_x,
                            i * altura_longarina,
                            0
                        );
                    }
                    if (i == niveis - 1) {
                        pos_x = pos_x + largura_longarina_2pallets;
                    }
                    break;
                case 3:
                    var long_Base = gerar_longarina_3pallets_chao(
                        cena,
                        pos_x,
                        pos_z
                    );

                    if (i >= 1) {
                        var long_altura = gerar_longarina_3pallets(
                            cena,
                            pos_x,
                            i * altura_longarina
                        );
                    }
                    if (i == niveis - 1) {
                        pos_x = pos_x + largura_longarina_3pallets;
                    }
                    break;
                default:
                    break;
            }
        }
        repetir_comprimento++;
    }
    //const geometria_predio = new THREE.BufferGeometry();
    //var predio = [];
    /*
        if (longarina_base == 2) {
            var long_base = gerar_longarina_2pallets_chao(cena, pos_x, pos_z);
            //predio.push(long_Base);
            if (i >= 1) {
                var long_altura = gerar_longarina_2pallets(
                    cena,
                    pos_x,
                    i * altura_longarina
                );
                //predio.push(long_altura);
            }
            if (i == niveis - 1) {
                pos_x = pos_x + largura_longarina_2pallets;
            }
        } else {
            var long_Base = gerar_longarina_3pallets_chao(cena, pos_x, pos_z);
            //predio.push(long_Base);
            if (i >= 1) {
                var long_altura = gerar_longarina_3pallets(
                    cena,
                    pos_x,
                    i * altura_longarina
                );
                // predio.push(long_altura);
            }
            if (i == niveis - 1) {
                pos_x = pos_x + largura_longarina_3pallets;
            }
        }
        matriz_rua.push(predio);
    }
    */
    //repetir_comprimento++;
}
//repetir_comprimento = 0;
//pos_z = -1.35;

/*
    gerar_longarina_3pallets_chao(cena, 0, 0);
    gerar_longarina_2pallets_chao(cena, 3.56);
    gerar_longarina_3pallets_chao(cena, 5.92, 0);

    gerar_cubo(cena, 1, 1.7, 1.2, 0xff0000, 0.1 + 0.5, 0.15 + 0.85, -0.6);

    gerar_longarina_3pallets(cena, 0, 1.9);
    gerar_longarina_2pallets(cena, 3.56, 1.9);
    gerar_longarina_3pallets(cena, 5.92, 1.9);

    gerar_longarina_3pallets_chao(cena, 0, -1.35);
    */
/* barra_vertical(
        //Esquerda
        cena,
        0.1,
        altura_barra_lateral,
        0.1,
        0xff4500,
        pos_x,
        pos_y,  
        pos_z
    );*/

//var m = new THREE.Mesh(merge_geometry);
//cena.add(m);
//console.log(matriz_rua);
//}

//ANCHOR gerar longarina de 2 pallets
function gerar_longarina_2pallets(cena, posição_x, posição_y, posição_z) {
    loader.load(
        "../../Projeto_ThreeJS/Modelagens/Longarina_Separado_2pallets_128px.glb",
        (modelo) => {
            modelo.scene.position.x = posição_x;
            modelo.scene.position.y = posição_y;
            modelo.scene.autoUpdate = true;
            modelo.scene.frustumCulled = true;
            cena.add(modelo.scene); //cena.add(modelo.scene);
        },
        undefined,
        (erro) => {
            console.log(erro);
        }
    );
}

//ANCHOR gerar longarina de 3 pallets
function gerar_longarina_3pallets(cena, posição_x, posição_y) {
    loader.load(
        "../../Projeto_ThreeJS/Modelagens/Longarina_Separado_3pallets_pronto.glb",
        (modelo) => {
            modelo.scene.position.x = posição_x;
            modelo.scene.position.y = posição_y;
            cena.add(modelo.scene);
        },
        undefined,
        (erro) => {
            console.log(erro);
        }
    );
}
//ANCHOR gerar longarina 2 pallets no chão
function gerar_longarina_2pallets_chao(cena, posição_x, posição_y, posição_z) {
    mtl_obj.load("../../Projeto_ThreeJS/Modelagens/384_2.mtl", (material) => {
        material.preload();

        const ld_obj = new OBJLoader();

        ld_obj.setMaterials(material);
        ld_obj.load(
            "../../Projeto_ThreeJS/Modelagens/384_2.obj",
            function(modelo) {
                modelo.position.x = posição_x;
                modelo.add;
                cena.add(modelo);
            },
            undefined,
            function(erro) {
                console.log(erro);
            }
        );
    });

    /*loader.load(
        "../../Projeto_ThreeJS/Modelagens/Longarina_Junto_2pallets_chao_384.gltf",
        (modelo) => {
            modelo.scene.position.x = posição_x;
            modelo.scene.position.y = posição_y + 0.01;
            modelo.scene.position.z = posição_z;
            modelo.scene.autoUpdate = true;
            modelo.scene.frustumCulled = true;
            //var m = new GeometryReducer(modelo.scene);
            return cena.add(modelo.scene); //cena.add(modelo.scene);
        },
        undefined,
        (erro) => {
            console.log(erro);
        }
    );
    */
}

//ANCHOR gerar longarina 3 pallets no chão
function gerar_longarina_3pallets_chao(cena, posição_x, posição_z) {
    loader.load(
        "../../Projeto_ThreeJS/Modelagens/Longarina_Separado_3pallets_chão_pronto.glb",
        (modelo) => {
            modelo.scene.position.x = posição_x;
            modelo.scene.position.z = posição_z;
            modelo.scene.autoUpdate = false;

            cena.add(modelo.scene);
        },
        undefined,
        (erro) => {
            console.log(erro);
        }
    );
}

/*
//ANCHOR Vertical

function barra_vertical(
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
        comprimento,
        altura_barra_lateral,
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

function barra_horizontal(
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
        comprimento,
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

//ANCHOR horizontal
function base_horizontal(
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
        largura,
        altura,
        profundidade
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
*/

export { gerar_prédios };
