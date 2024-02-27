// Declara uma variável tempoFilme e atribui a ela o valor 60, representando a duração do filme em segundos. //
var tempoFilme = 60;
// Declara uma variável inicioFilme e inicializa com o valor 0, que será usada para acompanhar o progresso de início do filme.//
var inicioFilme = 0;
// Inicia um loop for que vai de 0 até o valor de tempoFilme (60 segundos). Ele itera em cada segundo do filme.//
for (var t = 0; t < tempoFilme; t++){
//: Define um temporizador que chama uma função de callback após um atraso específico, onde t é o índice do loop multiplicado por 1000 (convertendo segundos em milissegundos). Isso cria uma sequência de atrasos, aumentando a cada iteração do loop.//
    setTimeout(function() {
//Limpa o console a cada iteração para uma atualização visual limpa.//
    console.clear();
//Imprime no console uma mensagem indicando que o filme está sendo assistido, junto com a contagem regressiva de segundos restantes até o final do filme. A variável inicioFilme é usada para calcular quantos segundos já passaram.//
    console.log("assistindo filme 60 segundos... ainda faltam [" + (tempoFilme - 
//Incrementa a variável inicioFilme a cada iteração para acompanhar o progresso do filme.//
    inicioFilme)+ "] segundos.");
//é uma expressão em uma linguagem de programação, onde inicioFilme é uma variável. O ++ é um operador de incremento que adiciona 1 ao valor atual de inicioFilme. Em resumo, essa linha de código está aumentando o valor da variável inicioFilme em 1.//
    inicioFilme++;
//1000 (convertendo segundos em milissegundos)//
    }, t*1000);
}

//Este código simula o progresso de assistir a um filme de 60 segundos, atualizando o console a cada segundo para mostrar a contagem regressiva até o final do filme. Cada atualização é feita através de um atraso de tempo definido pelo setTimeout, criando assim uma sensação de tempo decorrido no console.//





