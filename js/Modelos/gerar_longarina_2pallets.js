import { GLTFLoader } from "../three.js-master/examples/jsm/loaders/GLTFLoader";
const loader = new GLTFLoader();
// ANCHOR gerar longarina de 2 pallets
function gerar_longarina_2pallets(cena, posição_x, posição_y, posição_z) {
  loader.load(
    "../../Projeto_ThreeJS/Modelagens/Longarina_junto_2pallets_256px.gltf",
    (modelo) => {
      modelo.scene.position.x = posição_x;
      modelo.scene.position.y = posição_y;
      modelo.scene.position.z = posição_z;
      modelo.scene.frustumCulled = true;
      // modelo.scene.children[0].castShadow = true;
      // modelo.scene.children[0].receiveShadow = true;
      // modelo.scene.receiveShadow = true;

      cena.add(modelo.scene); // cena.add(modelo.scene);

      modelo.scene.traverse((mdl) => {
        if (mdl.isMesh) {
          mdl.castShadow = true;
          mdl.receiveShadow = true;
        }
      });
    },
    undefined,
    (erro) => {
      console.log(erro);
    }
  );
}

export { gerar_longarina_2pallets };
