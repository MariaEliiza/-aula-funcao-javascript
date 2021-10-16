/* 1)      Criar uma função para receber  uma string como parâmetro:

a)       Contar a quantidade de palavras repetidas em uma frase e retornar o total.

b)      Chamar a função e exibir o resultado no console. */

function receber(parametros, parametros1) {

    return parametros.localeCompare(parametros1);

    

}

console.log(receber('olamundo', "fase")); 




/* 2)      Criar uma função que receba um array com 5 números como parâmetros:

a)       Inverter o array e retornar o resultado.

b)      Chamar a função e exibir o resultado no console. */

function arrayss (number) {

    number = [1, 2, 3, 4, 5];

    return number.reverse();
    
};

console.log(arrayss()); 




/* 3)      Criar uma função que receba 4 números inteiros positivos como parâmetros:

a)       Calcular a soma de todos os números.

b)      Retornar o Resultado.

c)       Chamar a função e exibir o resultado no console. */

function funcao(n0, n1, n2, n3 ) {

    return n0 + n1 + n2 + n3;
};

console.log(funcao(1, 2, 3, 4)); 