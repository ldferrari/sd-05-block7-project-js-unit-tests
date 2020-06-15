/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 2]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arr) => {
  let soma = 0
  let media = 0
  if (arr.length === 0) {
    return undefined;
  }
  for (let i in arr) {
    if (typeof arr[i] !== 'number') {
      return undefined;
    } else {
      soma += arr[i];
      media = soma / arr.length;
    }
  }
  let res = media.toFixed(0);
  console.log(res);
  return Number(res);
};
// console.log(average([0, 0, 0, 0, 0, 0, 0]));
module.exports = average;
