

function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();

}

function draw() {
  background(imageDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro()
  movimentaAtor()
 voltaCarro()
  verificaColisao()
  addPontos()
marcaPontos()

}



