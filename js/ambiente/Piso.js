var profundidade_piso, comprimento_piso;
function p(quantidade, pr = 15.6, cr = 10.5) {
    var largura_padrao_predio = 3;
    ++quantidade;
    comprimento_piso = cr * quantidade + 3 * largura_padrao_predio;
    profundidade_piso = pr * quantidade;
}

export { p, comprimento_piso, profundidade_piso };
