import * as THREE from "../../three.js-master/build/three.module"; //"./three.js-master/build/three.module";

function iluminacao(cena) {
    const light3 = new THREE.PointLight(0xffffff, 1, 1000);
    light3.castShadow = true;
    light3.position.set(15, 14, -10);
    light3.shadow.mapSize.width = 2048;
    light3.shadow.mapSize.height = 2048;

    cena.add(light3);
    cena.background = new THREE.Color(0x000000);
}

export {
    iluminacao
};