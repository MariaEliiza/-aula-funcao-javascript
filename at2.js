/* Criar uma função para receber dois parâmetros: numero e percentual.

a) Calcular a porcentagem de um número usando a fórmula:

(numero/100) * percentual

b) Chamar a função e exibir o resultado no console. */



function parametros(numero, percentual) {
    console.log((numero/100) * percentual);
    
    
    }
    
    parametros(100,2);

  /*  2)      Criar uma função que recebe dois arrays como parâmetro e juntar os arrays:

a)       Converter o array para string e retornar o resultado.

b)      Chamar a função e exibir o resultado no console. */



 function parametros1 (array, array1) {

     array = [1, 2];
     array1 = [3, 4, true];

    let juntar = array.concat(array1);

    return juntar.join(' ');

}; 

console.log(parametros1()); 