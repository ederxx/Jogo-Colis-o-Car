//imagens
let imageDaEstrada;
let imageDoAtor;
let imageCarro1;
let imageCarro2;
let imageCarro3;
let imageCarro4;
let imageCarro5;
let imageCarro6;

//sons
let somDaTrilha;
let somDaColisao;
let somDoPonto;



function preload(){
  imageDaEstrada = loadImage('imagens/estrada.png')
  imageDoAtor = loadImage('imagens/ator-1.png')
  imageCarro1 = loadImage("imagens/carro-1.png")
  imageCarro2 = loadImage("imagens/carro-2.png")
  imageCarro3 = loadImage("imagens/carro-3.png")
  imageCarro4 = loadImage("imagens/carro-1.png")
  imageCarro5 = loadImage("imagens/carro-2.png")
  imageCarro6 = loadImage("imagens/carro-3.png")
  somDaTrilha = loadSound("sons/trilha.mp3")
  somDaColisao = loadSound("sons/colidiu.mp3")
  somDoPonto = loadSound("sons/pontos.wav")

  
  imageCarros = [imageCarro1,imageCarro2,imageCarro3,imageCarro4,imageCarro5,imageCarro6]
  
}  