var profundidade_piso, comprimento_piso;
function p(
    quantidade_profundidade,
    quantidade_comprimento,
    pr = 15.6,
    cr = 10.2
) {
    var largura_padrao_predio = 3;
    var largura_padrao_corredor = 3 * largura_padrao_predio;
    ++quantidade_profundidade;
    comprimento_piso = cr * quantidade_comprimento;
    //Mesma largura de um corredor, para por no fim da maior rua
    comprimento_piso += largura_padrao_corredor;
    profundidade_piso = pr * quantidade_profundidade;
}

export { p, comprimento_piso, profundidade_piso };
