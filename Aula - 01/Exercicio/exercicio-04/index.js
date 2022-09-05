// Exercicio 04

// 4. A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o
// valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for
// parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o
// parcelamento for em 5 vezes, o acréscimo será de 20%. 


let preco = 242.90
let porcentagemDez = 10
let porcentagemVinte = 20
let totalTresVezes = (preco + (preco * porcentagemDez /100))
let parcelaTresVezes = (totalTresVezes / 3)
let totalCincoVezes = (preco + (preco * porcentagemVinte /100))
let parcelaCincoVezes = (totalCincoVezes / 5)

if((preco + (preco * porcentagemDez /100))){
    alert(`O valor total da prestação com acrecimo de 10% ficou no total de:R$ ${totalTresVezes}`);
    alert(` e a parcela dividida em 3x é de: ${parcelaTresVezes}`);
}else((preco + (preco * porcentagemCinco /100)))
    alert(`O valor total da prestação com acrecimo de 20% ficou no total de:R$ ${totalCincoVezes}`);
    alert(` e a parcela dividida em 5x é de: ${parcelaCincoVezes}`);
