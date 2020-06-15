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

const average = (number) => {
  let Retorno = 0;
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] === (number[i] + 0)) {
      Retorno += number[i];
    } else {
      console.log('undefined');
      return (undefined);
    }
  }
  console.log(Retorno / number.length);
  return (Retorno / number.length);
};
/*
  let arr = [1, 2, 3, 4, 5];
  average(arr);
 */

module.exports = average;
