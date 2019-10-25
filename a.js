texto = {
  atributo1: "valor 1",
  atributo2: 23
};

// console.log(objeto);
console.log(texto.atributo1);
console.log(texto.atributo2);
console.log(texto);
console.log(texto[texto.length - 1]);

JSON.parse('{ "name":"John", "age":30, "city":"New York"}');

var json = require("./json/teste2.json");
console.log(json.recordset[json.recordset.length - 1].PREDIO);
console.log(json.recordset[0].NIVEL);
console.log(json.recordset[2].NIVEL);
console.log(json.recordset[4].NIVEL);
console.log(json.recordset[6].NIVEL);
console.log(json.recordset[8].NIVEL);
console.log(json.recordset[10].NIVEL);

var nivel = json.recordset[0].NIVEL;
var iw = 0;
var i = 0;
while (iw < 1) {
  if (json.recordset[i + 2].NIVEL > nivel) {
    nivel = json.recordset[i + 2].NIVEL;
  } else if (json.recordset[i + 2].NIVEL < nivel) {
    iw = 1;
  }
  i += 2;
}
console.log(nivel);

console.log(json.recordset[0].APTO);
console.log(json.recordset[1].APTO);

if (json.recordset[0].APTO == null) {
  console.log("Válido");
}

console.log(6 % 2);

var ar = new Array();
for (let k = 0; k < 5; k++) {
  for (let i = 0; i < 5; i++) {
    if (json.recordset[k].PREDIO != null && json.recordset[i].NIVEL != null) {
      var st = String(k + 1) + String(i + 1) + "correto";
      ar.push(st);
    }
  }
}

console.log(ar);

console.log(json.recordset[0].NIVEL);
console.log(json.recordset[0].PREDIO);

console.log(json.recordset[10].NIVEL);
console.log(json.recordset[10].PREDIO);

const longarina_base = () => {
  let it = 0,
    i = 0,
    tamanho_longarina = 0;

  while (it < 1) {
    if (json.recordset[i].APTO >= tamanho_longarina) {
      tamanho_longarina = json.recordset[i].APTO;
    } else {
      it = 1;
    }

    i++;
  }
  return tamanho_longarina;
};

console.log(longarina_base());

/*"END":"010101002",
    "RUA":"01",
    "PREDIO":"01",
    "NIVEL":"01",
    "APTO":"002"
    */

var string_completa =
  String(json.recordset[1].RUA) +
  String(json.recordset[1].PREDIO) +
  String(json.recordset[1].NIVEL) +
  String(json.recordset[1].APTO);
console.log(string_completa);
console.log(typeof string_completa);

console.log(json.recordset[40].APTO);

var v1 = 0;
var v2 = 0;
function teste() {
  console.log(v1);
  console.log(json.recordset[v2]);
}
teste();

var valorRepetirCaixas = {
  v: 0,
  set valor(valor) {
    this.v = valor;
  },
  get valor() {
    return this.v;
  }
};
console.log(valorRepetirCaixas.valor);

valorRepetirCaixas.valor = 5;
console.log(valorRepetirCaixas.valor);

console.log(json.recordset[9]);
console.log(json.recordset.length);

let n_niveis = json.recordset[140].NIVEL;
console.log(n_niveis);

console.log(teste);

var niveis = 5;
var vet = 0;

for (var i = 0; i <= niveis; i++) {
  if (i == niveis) {
    console.log(vet);
  }
  vet++;
}

console.log(vet);
console.log(niveis == vet);

var kds = [3, 2, 1];
console.log(kds.sort());

var caixa = 0;
var n_niveis_global = 5;
var n_predios_global = 10;
var il = 3;
if (il == 1) {
  caixa = 0;
} else if (il > 1) {
  for (var i = 1; i < il; i++) {
    caixa += 2 * n_niveis_global * n_predios_global;
  }
} else {
  console.log("Não existe rua negativa ou zero");
}
console.log("valor caixas em rua dupla : " + caixa);
console.log(json.recordset[99]);

console.log(json.recordset[199]);
console.log(json.recordset[200]);

//
console.log(json.recordset[11]);
console.log(json.recordset[12]);

console.log(json.recordset[49]);

console.log(json.recordset[299]);
console.log(json.recordset[json.recordset.length - 1]);
