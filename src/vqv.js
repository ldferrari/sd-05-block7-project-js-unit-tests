/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

//console.log(paragrafo);

const vqv = (nome, idade) => {
  if (nome === undefined || idade === undefined) return undefined;  
  return  (`Oi, meu nome é ${nome}!\n` +
  `Tenho ${idade} anos,\n` +
  'trabalho na Trybe e mando muito em programação!\n' +
  '#VQV!');
  };

module.exports = vqv;

//console.log(vqv ('Erling', 38));
//console.log(vqv ());
//console.log(vqv("Erling"));
