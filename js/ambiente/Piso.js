import * as THREE from '../../three.js-master/build/three.module'
var profundidade_piso, comprimento_piso
// ANCHOR  Piso
function piso (
  cena,
  quantidade_profundidade,
  quantidade_comprimento

) {
  // Piso
  var piso_geometria = new THREE.BoxGeometry(
    comprimento_piso,
    0.001,
    profundidade_piso
  )
  var textura_piso = new THREE.TextureLoader().load('./Imagens/piso.jpg')
  var piso_material = new THREE.MeshLambertMaterial({
    map: textura_piso
  })
  var piso = new THREE.Mesh(piso_geometria, piso_material)
  piso.receiveShadow = true
  piso.position.x = comprimento_piso / 2
  piso.position.z = -(profundidade_piso / 2)
  // piso.rotateX(-Math.PI / 2);
  cena.add(piso)
}
export {
  piso
}
