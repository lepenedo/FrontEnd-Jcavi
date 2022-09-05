// alert('Sejam Bem vindos!')

// console.log('Sejam Bem vindos!');

// let é o comando para criar uma variavel. let pode ser alterado.
// const é uma constancia um valor que não pode ser alterado.

// // String
// let variavelTexto = "Alert"
// // variavelTexto.length quantidade de strings de um texto


// // Number
// let variavelNumerica = 333


// // Array é um conjunto de strings 
// let nomes = ["Leandro", "Nicole", "Helena"]

//For laço de repetição

// let email = 'leandro.penedo28@gmail.com'
// let age = 35
// let nome = 'Leandro'
// let sobrenome = 'Penedo'

// let nomeCompleto = nome + ' ' + sobrenome
// let nomeCompletoNovo = `${nome} ${sobrenome}`

// console.log(email.indexOf('@'));
// console.log(email.split('@'));


// let emailDividido = email.split('@')
// console.log(emailDividido[0]);

// Number
// + - * / ** %

// console.log(3 ** 3);

// let likes = 0;

// likes += 1
// console.log(likes);

//Boleana
// true 
// false


let senha = "1234"
// > Maior
// < Menor
// == Igual
// >= maior ou igual
// <= menor ou igual
// != diferente

// if(true/false)
if(senha.length < 6) {
    console.log('Senha deve ter mais de que 6 caracteres');
} else {
    console.log('Senha cadastrada')
}

// criança até 18
// adulto até 60
// idoso + 60

const idade = 13;
let isMaiorDeIdade = idade >= 18;

if (idade < 18) {
    // console.log('Criança')
} 
else if (idade < 60) {
    // console.log('Adulto')
} else {
    // console.log('Idoso')
}

console.log(10 == 10);


let nomes = ['Leandro', 'Nicole', 'Helena']
let idades = [35, 31, 1]

for (let i = 0; i < nomes.length; i++) {
    const nome = nomes[i];
    const idade = idades[i];
    alert(`Meu nome é: ${nome} e tenho minha: ${idade} ano(s)`)
}

