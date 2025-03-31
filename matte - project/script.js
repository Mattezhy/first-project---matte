let hora = new Date().getHours();
let minutos = new Date().getMinutes();
let segundos = new Date().getSeconds();
let saida = document.getElementById('saida');
hora=23;

if(hora>=0 && hora <=12) {
     saida.innerHTML = hora+':'+minutos+':'+segundos+ ' bom dia!';
}  

else if(hora>=13 && hora<=18) {
    saida.innerHTML = hora+':'+minutos+':'+segundos+ ' boa tarde!';
}

else if(hora>=19 && hora<=23) {
    saida.innerHTML = hora+':'+minutos+':'+segundos+' boa noite!';
} 

else {
    saida.innerHTML = 'erro: número desconhecido!';
}