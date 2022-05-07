console.log('[Jogo da matemática] ');

let frames = 0;
const velocidadeSorteioDado = 5;
const sprites = new Image();
sprites.src = './img/sprites.png';


const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const planoDeFundo = {
  spriteX: 0, //posição X na imagem sprites.png
  spriteY: 0, //posição Y na imagem sprites.png
  largura: 1053, //tamanho do recorte na imagem sptrites.png
  altura: 717,  //tamanho do recorte na imagem sptrites.png
  x: 0,   //posição onde começa a desenhar no canva
  y: 0,   //posição onde começa a desenhar no canva
  tamTelax: 800, //tamanho do plano de fundo no canva
  tamTelay: 544, //tamanho do plano de fundo no canva
  desenha() {
    // contexto.fillStyle = '#70c5ce';
    // contexto.fillRect(0, 0, canvas.width, canvas.height)
    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      planoDeFundo.x, planoDeFundo.y,
      planoDeFundo.tamTelax, planoDeFundo.tamTelay,
    );
  }

}

function criaPersonagem() {

  const sapo2 = {
    spriteX: 273,
    spriteY: 810,
    largura: 529,
    altura: 1078,
    x: 170,     //posição no canva (Inicio = 170)
    y: 410,     //posição no canva (Inicio = 410)
    tamTelax: 120, //tamanho no canva
    tamTelay: 260,
    atualiza() {

    },
    desenha() {
      contexto.drawImage(
        sprites,
        sapo2.spriteX, sapo2.spriteY, // Sprite X, Sprite Y
        sapo2.largura, sapo2.altura, // Tamanho do recorte na sprite
        sapo2.x, sapo2.y,
        sapo2.tamTelax, sapo2.tamTelay,
      );
    }
  }
  return sapo2

}


const sapo = {
  spriteX: 0,
  spriteY: 810,
  largura: 256,
  altura: 1078,
  x: 170,     //posição no canva (Inicio = 170)
  y: 410,     //posição no canva (Inicio = 410)
  tamTelax: 58, //tamanho no canva
  tamTelay: 260,
  desenha() {
    contexto.drawImage(
      sprites,
      sapo.spriteX, sapo.spriteY, // Sprite X, Sprite Y
      sapo.largura, sapo.altura, // Tamanho do recorte na sprite
      sapo.x, sapo.y,
      sapo.tamTelax, sapo.tamTelay,
    );
  }
}




function criaDados() {
  const dado = [

    {
      face: 1,
      spriteX: 1066, //posição X na imagem sprites.png
      spriteY: 0, //posição Y na imagem sprites.png
      largura: 195, //tamanho do recorte na imagem sptrites.png
      altura: 195,  //tamanho do recorte na imagem sptrites.png
      x: 0,   //posição onde começa a desenhar no canva
      y: 0,   //posição onde começa a desenhar no canva
      tamTelax: 100, //tamanho do plano de fundo no canva
      tamTelay: 100, //tamanho do plano de fundo no canva
      desenha() {
        contexto.drawImage(
          sprites,
          this.spriteX, this.spriteY, // Sprite X, Sprite Y
          this.largura, this.altura, // Tamanho do recorte na sprite
          this.x, this.y,
          this.tamTelax, this.tamTelay,
        );
      },
      atualiza() {
        const passou10Frames = frames % velocidadeSorteioDado === 0
        if (passou10Frames) {

          this.desenha()
        }
      }
    },

    {
      face: 2,
      spriteX: 1265, //posição X na imagem sprites.png
      spriteY: 0, //posição Y na imagem sprites.png
      largura: 194, //tamanho do recorte na imagem sptrites.png
      altura: 191,  //tamanho do recorte na imagem sptrites.png
      x: 0,   //posição onde começa a desenhar no canva
      y: 0,   //posição onde começa a desenhar no canva
      tamTelax: 100, //tamanho do plano de fundo no canva
      tamTelay: 100, //tamanho do plano de fundo no canva
      desenha() {
        contexto.drawImage(
          sprites,
          this.spriteX, this.spriteY, // Sprite X, Sprite Y
          this.largura, this.altura, // Tamanho do recorte na sprite
          this.x, this.y,
          this.tamTelax, this.tamTelay,
        );
      },
      atualiza() {
        const passou10Frames = frames % velocidadeSorteioDado === 0
        if (passou10Frames) {

          this.desenha()
        }
      }

    },

    {
      face: 3,
      spriteX: 1467, //posição X na imagem sprites.png
      spriteY: 0, //posição Y na imagem sprites.png
      largura: 194, //tamanho do recorte na imagem sptrites.png
      altura: 191,  //tamanho do recorte na imagem sptrites.png
      x: 0,   //posição onde começa a desenhar no canva
      y: 0,   //posição onde começa a desenhar no canva
      tamTelax: 100, //tamanho do plano de fundo no canva
      tamTelay: 100, //tamanho do plano de fundo no canva
      desenha() {
        contexto.drawImage(
          sprites,
          this.spriteX, this.spriteY, // Sprite X, Sprite Y
          this.largura, this.altura, // Tamanho do recorte na sprite
          this.x, this.y,
          this.tamTelax, this.tamTelay,
        );
      },
      atualiza() {
        const passou10Frames = frames % velocidadeSorteioDado === 0
        if (passou10Frames) {

          this.desenha()
        }
      }
    },

    {
      face: 4,
      spriteX: 1670, //posição X na imagem sprites.png
      spriteY: 0, //posição Y na imagem sprites.png
      largura: 194, //tamanho do recorte na imagem sptrites.png
      altura: 191,  //tamanho do recorte na imagem sptrites.png
      x: 0,   //posição onde começa a desenhar no canva
      y: 0,   //posição onde começa a desenhar no canva
      tamTelax: 100, //tamanho do plano de fundo no canva
      tamTelay: 100, //tamanho do plano de fundo no canva
      desenha() {
        contexto.drawImage(
          sprites,
          this.spriteX, this.spriteY, // Sprite X, Sprite Y
          this.largura, this.altura, // Tamanho do recorte na sprite
          this.x, this.y,
          this.tamTelax, this.tamTelay,
        );
      },
      atualiza() {
        const passou10Frames = frames % velocidadeSorteioDado === 0
        if (passou10Frames) {

          this.desenha()
        }
      }
    },

    {
      face: 5,
      spriteX: 1066, //posição X na imagem sprites.png
      spriteY: 200, //posição Y na imagem sprites.png
      largura: 200, //tamanho do recorte na imagem sptrites.png
      altura: 191,  //tamanho do recorte na imagem sptrites.png
      x: 0,   //posição onde começa a desenhar no canva
      y: 0,   //posição onde começa a desenhar no canva
      tamTelax: 100, //tamanho do plano de fundo no canva
      tamTelay: 100, //tamanho do plano de fundo no canva
      desenha() {
        contexto.drawImage(
          sprites,
          this.spriteX, this.spriteY, // Sprite X, Sprite Y
          this.largura, this.altura, // Tamanho do recorte na sprite
          this.x, this.y,
          this.tamTelax, this.tamTelay,
        );
      },
      atualiza() {
        const passou10Frames = frames % velocidadeSorteioDado === 0
        if (passou10Frames) {

          this.desenha()
        }
      }
    },

    {
      face: 6,
      spriteX: 1271, //posição X na imagem sprites.png
      spriteY: 195, //posição Y na imagem sprites.png
      largura: 200, //tamanho do recorte na imagem sptrites.png
      altura: 191,  //tamanho do recorte na imagem sptrites.png
      x: 0,   //posição onde começa a desenhar no canva
      y: 0,   //posição onde começa a desenhar no canva
      tamTelax: 100, //tamanho do plano de fundo no canva
      tamTelay: 100, //tamanho do plano de fundo no canva
      desenha() {
        contexto.drawImage(
          sprites,
          this.spriteX, this.spriteY, // Sprite X, Sprite Y
          this.largura, this.altura, // Tamanho do recorte na sprite
          this.x, this.y,
          this.tamTelax, this.tamTelay,
        );
      },
      atualiza() {
        const passou10Frames = frames % velocidadeSorteioDado === 0
        if (passou10Frames) {

          this.desenha()
        }
      }
    }
  ]

  return dado
}

//[telas]

const globais = {}
let telaAtiva = {}

function mudaParaTela(novaTela) {
  telaAtiva = novaTela;
  if (telaAtiva.inicializa) {
    telaAtiva.inicializa();

  }
}
const Telas = {
  INICIO: {
    inicializa() {
      globais.personagem = criaPersonagem();
      globais.dados = criaDados();

    },
    desenha() {
      // planoDeFundo.desenha();
      globais.personagem.desenha();
      // sapo.desenha();

    },
    click() {
      mudaParaTela(Telas.JOGO)
    },
    atualiza() {

    }
  },
  JOGO: {
    desenha() {
      // planoDeFundo.desenha();
      globais.personagem.desenha();
     
    },
    click() {
      console.log('frames ', frames)

      let cliqueMouse = document.querySelector("canvas");

      cliqueMouse.addEventListener("mousedown", function (e) {
        retorno = getMousePosition(cliqueMouse, e);
      });

    },
    atualiza() {
      globais.personagem.atualiza();


    }

  }
}

let sort = false
let contador = 0;
let dadoSorteado= [];
function loop() {
  telaAtiva.desenha();
  telaAtiva.atualiza();
  frames++;

  if (sort) {
    dadoSorteado = sorteia()
    console.log(dadoSorteado)
    globais.dados[dadoSorteado].atualiza();
    contador++
    
    //contexto.clearRect(0, 0, canvas.width, canvas.height);
  } if (contador > 50) {
 
    //escreveNaTela(dadoSorteado.face)
    sort = false
    
    contador = 0;
  }

  requestAnimationFrame(loop);

}
mudaParaTela(Telas.INICIO)
loop();

function escreveNaTela(msg){
  contexto.font = '60px arial';
  contexto.fillText(msg , 400,250)

}


document.addEventListener("mousedown", function () {
  if (telaAtiva.click) {
    telaAtiva.click();
  }
})



function sorteia() {

  let numDadoSorteado = Math.floor(Math.random() * globais.dados.length)

  return numDadoSorteado

}
function getMousePosition(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  console.log("Coordenada x: " + x,
    "Coordenada y: " + y);
  if (globais.dados[0].x <= x) {
    sort = true
  }


}