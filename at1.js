//1)      Criar uma função que exibe no console um array com os nomes de 3 estados da região Norte do Brasil:

//a)       Ordenar os elementos do array na ordem invertida

 function regioes (regiao) {

    regiao = ["norte1", 'norte2', 'norte3'];

    let inverte = regiao.reverse();

    return inverte;
}

console.log(regioes());


/* 2)      Criar uma função que recebe duas strings:

a)       Transformar todas as letras em maiúsculas do primeiro parâmetro usando toUpperCase().

b)      Concatenar as duas strings e retornar o resultado.

c)       Chamar a função e exibir no console o resultado. */

function strings (string0, string1) {

    string0 = "- Nome";
    string1 = " Completo";

    let transformar0 = string0.toUpperCase();
    
    let transformar = transformar0.concat( string1);

    return transformar;

    
};

console.log(strings()); 

/* 3)      Criar uma função que retorne 17 vezes a palavra Repetição.

a)       Chamar a função e exibir no console o resultado. */

 function repeticoes() {

    for (let i = 0; i <= 17 ; i++) {

        console.log('Repetição');
    }
};

console.log(repeticoes()); 
