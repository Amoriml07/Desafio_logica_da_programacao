function saldoVitorias (vitorias,derrotas){
   return vitorias - derrotas }
 
let saldoRanqueadas = saldoVitorias(10,2)
 


let Nivel ;


    if (saldoRanqueadas < 10) {
        nivel = "ferro.";
    } else if (saldoRanqueadas < 20){
        nivel = "Bronze.";
    } else if (saldoRanqueadas < 50){
    nivel = "Prata.";
    }else if (saldoRanqueadas < 80){
    nivel = "Ouro.";
    }else if (saldoRanqueadas < 90){
        nivel = "Diamante.";
    }
    else if (saldoRanqueadas < 100){
        nivel = "Lendario.";
    } else{ nivel = Imortal}




console.log("O heroi tem de saldo " + saldoRanqueadas + " vitorias e está no nível " + nivel )
