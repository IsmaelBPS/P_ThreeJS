import { GLTFLoader } from "../three.js-master/examples/jsm/loaders/GLTFLoader";
const loader = new GLTFLoader();
// ANCHOR gerar longarina de 3 pallets
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

export { gerar_longarina_3pallets };
