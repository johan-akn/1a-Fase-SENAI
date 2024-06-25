/*Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que: 

Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
Triângulo Obtusângulo: possui um ângulo obtuso. (maior que 90º) 
Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)*/


//Declarar variáveis
let ladoUm, ladoDois, ladoTres
let totalTriangulo, mediaNoventa = 90

//Entrada de dados
ladoUm = Number(prompt('Digite o valor do primeiro lado: '))
ladoDois = Number(prompt('Digite o valor do segundo lado: '))
ladoTres = Number(prompt('Digite o valor do terceiro lado: '))

//Cálculo
totalTriangulo = ladoUm + ladoDois + ladoTres

//Saída de dados
if(totalTriangulo > mediaNoventa){

    alert('Triângulo Obtusângulo.')

}
else if( totalTriangulo < mediaNoventa){

    alert('Triângulo Acutângulo.')

    
}
else{

    alert('Triângulo Retângulo.')
}
