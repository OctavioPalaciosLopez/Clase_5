diaSemana = "viernes"

if(diaSemana === "Lunes" && diaSemana === "Miercoles" ){
    console.log('Toca Historia')
}
else{
    if(diaSemana === "Martes"){
        console.log('Toca Natacion')
    }
    else{
        if(diaSemana === "Jueves"){
            console.log('Toca Esgrima')
        }
        else{
            console.log('Toca Descansar')
        }
    }
}