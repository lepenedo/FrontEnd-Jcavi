// Exercicio 5

// 5. Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao
// final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média
// para aprovação é igual ou superior a 8.  

let nota01 = 6
let nota02 = 9
let nota03 = 10
let nota = ((nota01 + nota02 + nota03) /3)
if (nota >=7){
    console.log(`Sua nota é:` ,nota,`Você foi aprovado!`);
} else{
    console.log('Você está reprovado!');
}