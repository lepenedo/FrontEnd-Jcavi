// Exercicio 04

// 4. A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o
// valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for
// parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o
// parcelamento for em 5 vezes, o acréscimo será de 20%. 


let preco = 242.90
let porcentagem10 = 10
let porcentagem20 = 20
let parcela05 = (((preco / 3) /100) / 5)

if((((preco * porcentagem10) /100) / 3)){
    console.log(`Sua parcela será de 3x de:`,porcentagem10,`R$`);
} else((((preco * porcentagem20) /100) / 5)){
    console.log(`Sua parcela será de 5x de:`,porcentagem20,`R$`);
}