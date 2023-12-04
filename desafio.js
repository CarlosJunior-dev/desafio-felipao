let nomeHeroi = ("Marques")
let experienciaHeroi = 10032

if(experienciaHeroi >= 10001){ 
    nivel = " Radiante"
}
else if (experienciaHeroi >= 9001 && experienciaHeroi <= 10000){
    nivel = " Imortal "
} 
else if (experienciaHeroi >= 8001 && experienciaHeroi <= 9000){
    nivel = " Ascendente"
}
else if (experienciaHeroi >= 7001 && experienciaHeroi <= 8000)
{
    nivel = " Diamante "
}
else if (experienciaHeroi >= 6001 && experienciaHeroi <= 7000){
		nivel = " Platina"
}
else if(experienciaHeroi >= 2001 && experienciaHeroi <= 5000){
		nivel = " Ouro "
}
else if(experienciaHeroi >= 1001 && experienciaHeroi <= 2000){
		nivel = " Prata " 
}
else if(experienciaHeroi <= 1000){
		nivel = " Bronze"
}
console.log("O heroi de nome: " + nomeHeroi + ", " + "está no nivel de" + nivel)