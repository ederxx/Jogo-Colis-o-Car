let yAtor = 366;
let xAtor = 220;
let colisao = false;
let meusPontos = 0;
function mostraAtor(){
  image(imageDoAtor,xAtor,yAtor,30,30)
}



function movimentaAtor() {
  if(keyIsDown(UP_ARROW)){
    yAtor  -= 4
  }
  if(keyIsDown(DOWN_ARROW)&& yAtor<=366){
    yAtor  += 4
}
}

function verificaColisao() {
for(let i = 0; i < imageCarros.length; i++)
{
  colisao = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarro,alturaCarro,xAtor,yAtor,15)
  if(colisao ){
   print("colidiu")
   colidiu()

  }
}  
}

function colidiu() {
  if(colisao)
  {
    yAtor=366;
    if(meusPontos>0){
    meusPontos-=1
    somDaColisao.play()
  }
  }
}

function addPontos() {
  fill(color(255,240,60))
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width /5, 27);
  
  
}

function marcaPontos() {
  if(yAtor < 13){
    meusPontos+=1
    yAtor = 366
    somDoPonto.play()
  }
}