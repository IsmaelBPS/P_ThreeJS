import { GLTFLoader } from "../three.js-master/examples/jsm/loaders/GLTFLoader";
const loader = new GLTFLoader();
// ANCHOR gerar longarina 2 pallets no chão
function gerar_longarina_2pallets_chao(cena, posição_x, posição_y, posição_z) {
  /*
          mtl_obj.load("../../Projeto_ThreeJS/Modelagens/384_2.mtl", (material) => {
              material.preload();

              const ld_obj = new OBJLoader();

              ld_obj.setMaterials(material);
              ld_obj.load(
                  "../../Projeto_ThreeJS/Modelagens/384_2.obj",
                  (modelo) => {
                      modelo.position.z = posição_z;
                      modelo.position.y = posição_y;
                      modelo.position.x = posição_x;

                      //modelo.add;
                      cena.add(modelo);
                  },
                  undefined,
                  (erro) => {
                      console.log(erro);
                  }
              );
          });
          */

  loader.load(
    "../../Projeto_ThreeJS/Modelagens/Longarina_Junto_2pallets_chão_256px.glb",
    (modelo) => {
      modelo.scene.position.x = posição_x;
      modelo.scene.position.y = posição_y;
      modelo.scene.position.z = posição_z;
      modelo.scene.receiveShadow = true;
      modelo.scene.frustumCulled = true;
      modelo.scene.children[0].castShadow = true;
      modelo.scene.children[0].receiveShadow = true;
      // var m = new GeometryReducer(modelo.scene);
      cena.add(modelo.scene); // cena.add(modelo.scene);
    },
    undefined,
    (erro) => {
      console.log(erro);
    }
  );
}
