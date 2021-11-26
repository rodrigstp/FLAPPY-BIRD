console.log("flappy do digao");

const sprites = new Image();

sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

///
//***CHAO***
const chao = {
    spritex: 0,
    spritey: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    desenha(){ // funçao q chama a imagem do chao
        ctx.drawImage(
            sprites,
            chao.spritex, chao.spritey, // sx sy
            chao.largura, chao.altura, //tamanho do recorte da sprite
            chao.x, chao.y, // x e y 
            chao.largura, chao.altura);
                //chao 2
            ctx.drawImage(
                sprites,
                chao.spritex, chao.spritey, // sx sy
                chao.largura, chao.altura, //tamanho do recorte da sprite // codigo pra completar o chao
                chao.x + chao.largura, chao.y, // x e y 
                chao.largura, chao.altura)
    }

        
    };

//cod responsavel pelo ***Flappy Bird***
const bird = {
spritex: 0,
spritey: 0,
largura: 33,
altura: 24,
x: 10,
y: 50,
desenha(){ //funçao que chama a imagem
    ctx.drawImage(
        sprites,
        bird.spritex, bird.spritey, // sx sy
        bird.largura, bird.altura, //tamanho do recorte da sprite
        bird.x, bird.y, // x e y 
        bird.largura, bird.altura)
}
}
const planodf = {
spritex: 390,
spritey: 0,
largura: 275,
altura: 204,
x: 0,
y: canvas.height - 204 ,
desenha(){
    
        ctx.fillStyle = "#70c5ce";
        ctx.fillRect(0 , 0 , canvas.width , canvas.height)

    //funçao que chama a imagem
    ctx.drawImage(
        sprites,
        planodf.spritex, planodf.spritey, // sx sy
        planodf.largura, planodf.altura, //tamanho do recorte da sprite
        planodf.x, planodf.y, // x e y 
        planodf.largura, planodf.altura);


ctx.drawImage(
    sprites,
    planodf.spritex, planodf.spritey, // sx sy
    planodf.largura, planodf.altura, //tamanho do recorte da sprite
    planodf.x + planodf.largura, planodf.y, // x e y 
    planodf.largura, planodf.altura);
}}





//start menu 'get ready'

const menuGet ={
spritex: 134,
spritey: 0,
largura: 174,
altura: 152,
x: (canvas.width / 2 ) - 174 / 2 ,
y: 50 ,

desenha(){ //funçao que chama a imagem
    ctx.drawImage(
        sprites,
        menuGet.spritex, menuGet.spritey, // sx sy
        menuGet.largura, menuGet.altura, //tamanho do recorte da sprite
        menuGet.x, menuGet.y, // x e y 
        menuGet.largura, menuGet.altura)
}
}



 //function responsavel por tornar a imagem constante na tela por finalizar sempre chamando ela mesma
 function loop() {
 menuGet.desenha();
    planodf.desenha();
    bird.desenha();
    chao.desenha();
    bird.y = bird.y +3; 
  
    menuGet.desenha();
    
    requestAnimationFrame(loop);

        
    }
   loop();

