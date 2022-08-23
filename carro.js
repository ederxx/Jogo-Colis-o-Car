let xCarros=[600,600,600,0,0,0];
let yCarros=[40,96,150,212,266,322];
let velocidadesCarros=[5,3.2,4.5,6,7,1]
let comprimentoCarro=50;
let alturaCarro=40;

function mostraCarro() {
    for(let i=0; i<imageCarros.length; i++){
    image(imageCarros[i],xCarros[i], yCarros[i],comprimentoCarro,alturaCarro)
   }
  
}
function movimentaCarro() {
    for(let i=0; i<imageCarros.length; i++){
  xCarros[i] -= velocidadesCarros[i]
    }
}

function voltaCarro () {
      for(let i=0; i<imageCarros.length; i++){
  if(passouTela(xCarros[i])) {
    xCarros[i]=600;
  }
}
}
function passouTela(xCarro) {
  return xCarro  < -50;
}

