function longarina(
    cena,
    largura,
    altura,
    profundidade,
    cor_hexadecimal,
    pos_x = 0,
    pos_y = 0,
    pos_z = 0
) {
    vertical();
    vertical(cena, largura, altura, profundidade, pos_x, pos_y, (pos_z = 2));
    var geometria_logarina = new THREE.BoxGeometry();
}
function vertical(
    cena,
    largura = 0.3,
    altura = 4,
    profundidade = 0.3,
    cor_hexadecimal,
    pos_x = 0,
    pos_y = 0,
    pos_z = 0
) {
    var geometria_longarina_vertical = new THREE.BoxGeometry(
        largura,
        altura,
        profundidade
    );
}
function horizontal(
    cena,
    largura = 7,
    altura = 0.3,
    profundidade = 1.95,
    cor_hexadecimal,
    pos_x = 0,
    pos_y = 0,
    pos_z = 0
) {}

module.exports = longarina;
