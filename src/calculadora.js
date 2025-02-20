// ================================================================
// ARQUIVO: src/calculadora.js
// DESCRIÇÃO: Este arquivo contém a definição de uma "Calculadora"
// simples, ou seja, um robô que sabe fazer operações matemáticas
// básicas: soma, subtração, multiplicação e divisão.
// ================================================================

/*
  Imagine que você quer construir um robô que faz cálculos. Para isso,
  você precisa de uma receita ou plano para criar esse robô. Em programação,
  usamos algo chamado "classe" para escrever essa receita.

  ---------------
  Conceitos Básicos:
  ---------------
  1. Classe:
     - Pense na classe como uma "fórmula" ou "receita" para criar objetos.
     - No nosso exemplo, a classe é "Calculadora". Ela define como é e como
       se comporta o nosso robô calculador.
  
  2. Método:
     - Métodos são como as "funções" ou "tarefas" que o nosso robô pode realizar.
     - Por exemplo, a tarefa de somar dois números está definida no método "somar".
  
  3. Variável:
     - Variáveis são como "caixinhas" que guardam informações (números, textos, etc.).
     - Nos métodos, os parâmetros "a" e "b" são variáveis que armazenam os números
       que queremos usar nas operações.
  
  4. Erro:
     - Às vezes, quando algo não está certo (como tentar dividir por zero), o robô
       precisa avisar que houve um problema. É isso que fazemos com "throw new Error".
*/

// Definindo a classe Calculadora (a nossa receita para criar um robô que calcula)
class Calculadora {

    /*
      Método: somar
      --------------
      O que faz:
      - Recebe dois números (a e b) e retorna a soma deles.
      
      Analogia:
      - Imagine duas caixas com números. Este método pega o número da primeira
        caixa, soma com o número da segunda caixa e entrega o resultado.
    */
    somar(a, b) {
      return a + b;  // "return" significa "entregar" o resultado da soma.
    }
  
    /*
      Método: subtrair
      -----------------
      O que faz:
      - Recebe dois números (a e b) e retorna o resultado da subtração de b de a.
      
      Analogia:
      - Imagine que você tem uma caixa com um número maior (a) e outra caixa
        com um número menor (b). Este método tira o valor da segunda caixa do
        valor da primeira caixa e retorna o que sobrou.
    */
    subtrair(a, b) {
      return a - b;
    }
  
    /*
      Método: multiplicar
      --------------------
      O que faz:
      - Recebe dois números (a e b) e retorna o produto, ou seja, a multiplicação
        deles.
      
      Analogia:
      - Pense em multiplicar como repetir uma adição várias vezes. Se você tem
        uma caixa com o número a e quer repetir esse número b vezes, o método faz isso.
    */
    multiplicar(a, b) {
      return a * b;
    }
  
    /*
      Método: dividir
      ----------------
      O que faz:
      - Recebe dois números (a e b) e retorna o resultado da divisão de a por b.
      
      Atenção:
      - Em matemática, não podemos dividir por zero. Por isso, o método verifica
        se o divisor (b) é 0 e, nesse caso, gera um erro.
      
      Analogia:
      - Imagine que você tem uma barra de chocolate (a) e quer dividi-la igualmente
        entre b amigos. Se b for 0, não faz sentido dividir o chocolate (ninguém para
        receber), então o robô avisa que isso não pode ser feito.
    */
    dividir(a, b) {
      // Verifica se o divisor é zero
      if (b === 0) {
        // Se for zero, para e avisa que não é permitido dividir por zero.
        throw new Error('Divisão por zero não é permitida.');
      }
      // Se o divisor não for zero, realiza a divisão normalmente.
      return a / b;
    }
  
  } // Fim da classe Calculadora
  
  /*
  module.exports:
  ---------------
  - Este comando permite que a classe Calculadora seja usada em outros arquivos.
  - Pense nele como uma etiqueta que diz: "Este é o robô calculadora, pode usá-lo
    em outras partes do seu programa se precisar."
  */
  module.exports = Calculadora; 