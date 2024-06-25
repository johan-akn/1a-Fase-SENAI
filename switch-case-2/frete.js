/* Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50.
 A loja possui benefícios para assinantes em três categorias:
  1) Assinante Premium, ganha 20% de desconto e frete grátis 2) Assinante Gold, ganha 20% de desconto mas paga frete 
  3) Assinante Silver, ganha 10% de desconto mas paga frete. 4) Não assinante, sem benefícios.
 Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4).
 Mostrar na tela o valor da compra de acordo com a opção escolhida.*/


 //Declarar variáveis
 let valorCompra, valorFrete = 12.50
 let nivelAssinatura, valorDesconto, valorFinal


 //Entrada de dados
 valorCompra = Number(prompt('Digite o valor da compra:'))

 nivelAssinatura = Number(prompt('Selecione um nível de assinatura:\n\n1) Assinante Premium, ganha 20% de desconto e frete grátis \n2) Assinante Gold, ganha 20% de desconto mas paga frete\n3) Assinante Silver, ganha 10% de desconto mas paga frete.\n4) Não assinante, sem benefícios.\n\nAção:'))

 switch(nivelAssinatura){

    case 1:
        valorDesconto = 20 / 100 * valorCompra
        valorFinal = valorCompra - valorDesconto
        alert('Assinante Premium!\nValor final: R$' + valorFinal)
        break;

    case 2:
        valorDesconto = 20 / 100 * valorCompra
        valorFinal = valorCompra + valorFrete - valorDesconto
        alert('Assinante Premium!\nValor final: R$' + valorFinal)
        break;

    case 3:
        valorDesconto = 10 / 100 * valorCompra
        valorFinal = valorCompra + valorFrete - valorDesconto
        alert('Assinante Premium!\nValor final: R$' + valorFinal)
        break;

    case 4:
        valorFinal = valorCompra + valorFrete
        alert('Sem assinatura =~\nValor final: R$' + valorFinal)
        break;

    default:
        alert('Nível de assinatura inválido!')
 }





