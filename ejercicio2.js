const nivelPersonaje = parseFloat("20")
const acrobata = 10
const ninja = 20

if(nivelPersonaje < ninja){
    if(nivelPersonaje < acrobata){
        console.log('Actualmente eres Aprendiz')
    }
    else{
        console.log('Actualmente eres Acróbata')
    }
}
else{
    console.log('Actualmente eres Ninja')
}