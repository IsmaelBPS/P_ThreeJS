import * as THREE from '../../three.js-master/build/three.module'
// const THREE = require("../../three.js-master/build/three.module")

function iluminacao (cena, pos_x, pos_z) {
  const light3 = new THREE.PointLight(0xffffff, 1, 1000)
  light3.castShadow = true
  light3.position.set(pos_x, 14, -pos_z)
  light3.shadow.mapSize.width = 512
  light3.shadow.mapSize.height = 512

  const lightHelp = new THREE.PointLightHelper(light3)
  cena.add(lightHelp)

  cena.add(light3)
  cena.background = new THREE.Color(0x000000)
}

export {
  iluminacao
}
