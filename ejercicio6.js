dado1 = 5
dado2 = 6
dado3 = 1

if(dado1 === dado2){
    console.log('Ganaste')
}
else{
    if(dado1 === dado3){
        console.log('Ganaste')
    }
    else{
        if(dado2 === dado3){
            console.log('Ganaste')
        }
        else{
            console.log('Perdiste')
        }
    }
}