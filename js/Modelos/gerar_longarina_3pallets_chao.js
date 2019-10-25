import { GLTFLoader } from "../three.js-master/examples/jsm/loaders/GLTFLoader";
const loader = new GLTFLoader();
// ANCHOR gerar longarina 3 pallets no chão
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
