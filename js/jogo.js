console.log('[DevSoutinho] Flappy Bird');

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


const sapo2 = {
  spriteX: 273,
  spriteY: 810,
  largura: 529,
  altura: 1078,
  x: 170,     //posição no canva (Inicio = 170)
  y: 410,     //posição no canva (Inicio = 410)
  tamTelax: 120, //tamanho no canva
  tamTelay: 260,
  desenha() {
    contexto.drawImage(
      sprites,
      sapo2.spriteX, sapo2.spriteY, // Sprite X, Sprite Y
      sapo2.largura, sapo2.altura, // Tamanho do recorte na sprite
      sapo2.x, sapo2.y,
      sapo2.tamTelax, sapo2.tamTelay,
    );
  },
  atualiza() {

  }
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

const dado = {
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
      dado.spriteX, dado.spriteY, // Sprite X, Sprite Y
      dado.largura, dado.altura, // Tamanho do recorte na sprite
      dado.x, dado.y,
      dado.tamTelax, dado.tamTelay,
    );
  }
}

const dado2 = {
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
      dado2.spriteX, dado2.spriteY, // Sprite X, Sprite Y
      dado2.largura, dado2.altura, // Tamanho do recorte na sprite
      dado2.x, dado2.y,
      dado2.tamTelax, dado2.tamTelay,
    );
  }
}

const dado3 = {
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
      dado3.spriteX, dado3.spriteY, // Sprite X, Sprite Y
      dado3.largura, dado3.altura, // Tamanho do recorte na sprite
      dado3.x, dado3.y,
      dado3.tamTelax, dado3.tamTelay,
    );
  }
}

const dado4 = {
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
      dado4.spriteX, dado4.spriteY, // Sprite X, Sprite Y
      dado4.largura, dado4.altura, // Tamanho do recorte na sprite
      dado4.x, dado4.y,
      dado4.tamTelax, dado4.tamTelay,
    );
  }
}

const dado5 = {
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
      dado5.spriteX, dado5.spriteY, // Sprite X, Sprite Y
      dado5.largura, dado5.altura, // Tamanho do recorte na sprite
      dado5.x, dado5.y,
      dado5.tamTelax, dado5.tamTelay,
    );
  }
}

const dado6 = {
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
      dado6.spriteX, dado6.spriteY, // Sprite X, Sprite Y
      dado6.largura, dado6.altura, // Tamanho do recorte na sprite
      dado6.x, dado6.y,
      dado6.tamTelax, dado6.tamTelay,
    );
  }
}




//[telas]
let telaAtiva = {};

function mudaParaTela(novaTela) {
  telaAtiva = novaTela;
}
const Telas = {
  INICIO: {
    desenha() {
      planoDeFundo.desenha();
      sapo2.desenha();
    },
    click() {
      mudaParaTela(Telas.JOGO)
    },
    atualiza() {

    }
  },
  JOGO: {
    desenha() {
      planoDeFundo.desenha();
      sapo2.desenha();
      sapo.desenha();
      setTimeout(() => {
        sort()

      }, 50)

    },
    click() {

    },
    atualiza() {
      sapo2.atualiza();
    }

  }
}


function loop() {
  telaAtiva.desenha();
  telaAtiva.atualiza();

  requestAnimationFrame(loop);

}
mudaParaTela(Telas.INICIO)
loop();



document.addEventListener("mousedown", function () {
  if (telaAtiva.click) {
    telaAtiva.click();
  }
})
let x = 0
function sort() {
  if (x <= 30) {
    sorteia()
    x++;
  }

}

function sorteia() {

  console.log("contador")


  let sorteiaDado = Math.floor(Math.random() * 6 + 1)
  console.log("num " + sorteiaDado)

  switch (sorteiaDado) {
    case 1:
      dado.desenha()
      break;
    case 2:
      dado2.desenha()
      break;
    case 3:
      dado3.desenha()
      break;
    case 4:
      dado4.desenha()
      break;
    case 5:
      dado5.desenha()
      break;
    case 6:
      dado6.desenha()
      break;

    default:
      break;
  }

  //requestAnimationFrame(sorteia);

}


// contexto.drawImage(

//   sprites,
//   0, 0, //sprite x, sprite y
//   1053, 717, //tamanho do recorte na sprite 1053, 717,
//   0, 0,
//   800, 544,
// );


// // [Plano de Fundo]
// const planoDeFundo = {
//   spriteX: 390,
//   spriteY: 0,
//   largura: 275,
//   altura: 204,
//   x: 0,
//   y: canvas.height - 204,
//   desenha() {
//     contexto.fillStyle = '#70c5ce';
//     contexto.fillRect(0,0, canvas.width, canvas.height)

//     contexto.drawImage(
//       sprites,
//       planoDeFundo.spriteX, planoDeFundo.spriteY,
//       planoDeFundo.largura, planoDeFundo.altura,
//       planoDeFundo.x, planoDeFundo.y,
//       planoDeFundo.largura, planoDeFundo.altura,
//     );


//   },
// };

// // [Chao]
// const chao = {
//   spriteX: 0,
//   spriteY: 610,
//   largura: 224,
//   altura: 112,
//   x: 0,
//   y: canvas.height - 112,
//   desenha() {
//     contexto.drawImage(
//       sprites,
//       chao.spriteX, chao.spriteY,
//       chao.largura, chao.altura,
//       chao.x, chao.y,
//       chao.largura, chao.altura,
//     );

//     contexto.drawImage(
//       sprites,
//       chao.spriteX, chao.spriteY,
//       chao.largura, chao.altura,
//       (chao.x + chao.largura), chao.y,
//       chao.largura, chao.altura,
//     );
//   },
// };

// const flappyBird = {
//   spriteX: 0,
//   spriteY: 0,
//   largura: 33,
//   altura: 24,
//   x: 10,
//   y: 50,
//   desenha() {
//     contexto.drawImage(
//       sprites,
//       flappyBird.spriteX, flappyBird.spriteY, // Sprite X, Sprite Y
//       flappyBird.largura, flappyBird.altura, // Tamanho do recorte na sprite
//       flappyBird.x, flappyBird.y,
//       flappyBird.largura, flappyBird.altura,
//     );
//   }
// }

// function loop() {
//   planoDeFundo.desenha();
//   chao.desenha();
//   flappyBird.desenha();

//   flappyBird.y = flappyBird.y + 1;

//   requestAnimationFrame(loop);
// }

// loop();