
let numeroDigitado
let cont = 1
let isPrime = true
let cont5 = 0


while(cont5 < 5){
    
    numeroDigitado = Number(prompt('Digite um número'))

    while(cont <= numeroDigitado){
        
        if(cont > 1 && cont < numeroDigitado){
            
            if(numeroDigitado % cont == 0){
                
                isPrime = false
                break
            }
        }
        
        cont++
     }
     if(isPrime == false || numeroDigitado == 1){
     
         console.log( numeroDigitado + ' n é primo')
     }
     else{
     
         console.log( numeroDigitado + ' é primo')
     }
    cont5++
}
    