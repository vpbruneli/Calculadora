// ================================================================
// ARQUIVO: test/calculadora.test.js
// DESCRIÇÃO: Este arquivo contém testes automatizados para a
// Calculadora definida em 'src/calculadora.js'. Os testes garantem
// que cada operação (somar, subtrair, multiplicar e dividir) funcione
// corretamente.
// ================================================================

/*
  Conceitos Básicos para Entender os Testes:

  1. assert:
     - É um módulo que contém funções para verificar se um valor é igual
       ao esperado. É como conferir se a resposta do robô está certa.

  2. describe:
     - Agrupa testes relacionados. Imagine que você está organizando uma
       lista de verificação para cada parte do robô (cada operação da calculadora).

  3. it:
     - Define um teste individual. Cada "it" é como um item da lista de
       verificação que diz "ao realizar essa tarefa, o resultado deve ser tal".

  4. beforeEach:
     - Uma função que é executada antes de cada teste individual, garantindo
       que o robô comece do zero (ou com um estado limpo) para cada verificação.
*/

const assert = require('assert'); // Importa o módulo 'assert' para realizar as verificações.
const Calculadora = require('../src/calculadora'); // Importa a classe 
// Calculadora criada em 'src/calculadora.js'.

// 'describe' agrupa todos os testes da Calculadora.
// Imagine que é uma caixa que organiza vários itens (testes) relacionados à calculadora.
describe('Calculadora', function () {
    // Declaramos uma variável para armazenar nossa "instância" do robô calculador.
    let calc;

    // 'beforeEach' garante que antes de cada teste a calculadora seja reiniciada,
    // assim cada teste começa com um novo robô, sem "bagunça" de testes anteriores.
    beforeEach(function () {
        calc = new Calculadora(); // Cria uma nova Calculadora para cada teste.
    });

    // ==============================================================
    // Testes para o método 'somar'
    // ==============================================================

    // Agrupa os testes do método somar.
    describe('somar', function () {
        // "it" define um teste específico.
        it('deve retornar 5 quando somar 2 e 3', function () {
            /*
              Aqui estamos dizendo: "ao usar a função somar com os números 2 e 3,
              o resultado deve ser 5". O método 'assert.strictEqual' verifica se o
              valor retornado pela função é exatamente o esperado.
            */
            assert.strictEqual(calc.somar(2, 3), 5);
        });
    });

    // ==============================================================
    // Testes para o método 'subtrair'
    // ==============================================================

    describe('subtrair', function () {
        it('deve retornar 1 quando subtrair 3 de 4', function () {
            /*
              Esse teste confere se ao subtrair 3 de 4, o resultado é 1.
              É como verificar se o robô calculadora está tirando corretamente
              o valor de uma caixa (3) do valor de outra (4).
            */
            assert.strictEqual(calc.subtrair(4, 3), 1);
        });
    });

    // ==============================================================
    // Testes para o método 'multiplicar'
    // ==============================================================

    describe('multiplicar', function () {
        it('deve retornar 6 quando multiplicar 2 e 3', function () {
            /*
              Aqui o teste verifica se o robô multiplica corretamente:
              2 vezes 3 deve resultar em 6.
              Pense na multiplicação como uma soma repetida.
            */
            assert.strictEqual(calc.multiplicar(2, 3), 6);
        });
    });

    // ==============================================================
    // Testes para o método 'dividir'
    // ==============================================================

    describe('dividir', function () {
        it('deve retornar 2 quando dividir 6 por 3', function () {
            /*
              Testa a operação de divisão: 6 dividido por 3 deve dar 2.
              É como distribuir 6 chocolates igualmente entre 3 amigos.
            */
            assert.strictEqual(calc.dividir(6, 3), 2);
        });

        it('deve lançar um erro quando dividir por zero', function () {
            /*
              Esse teste verifica se o robô calcula corretamente uma situação
              proibida: divisão por zero. Como não é possível dividir algo
              entre zero pessoas, esperamos que o método lance um erro.
              Usamos 'assert.throws' para confirmar que o erro ocorre e que
              a mensagem do erro é a esperada.
            */
            assert.throws(() => calc.dividir(6, 0), /Divisao por zero não é permitida\./);
        });
    });
});