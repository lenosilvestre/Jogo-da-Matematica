console.log('[Jogo da matemática] ');

/* Posção inicial dos dados */
let posicaoX = 140
let posicaoY = 195

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
      x: posicaoX,   //posição onde começa a desenhar no canva
      y: posicaoY,   //posição onde começa a desenhar no canva
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
          globais.faceDoDado = this.face

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
      x: posicaoX,   //posição onde começa a desenhar no canva
      y: posicaoY,   //posição onde começa a desenhar no canva
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
          globais.faceDoDado = this.face
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
      x: posicaoX,   //posição onde começa a desenhar no canva
      y: posicaoY,   //posição onde começa a desenhar no canva
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
          globais.faceDoDado = this.face

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
      x: posicaoX,   //posição onde começa a desenhar no canva
      y: posicaoY,   //posição onde começa a desenhar no canva
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
          globais.faceDoDado = this.face

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
      x: posicaoX,   //posição onde começa a desenhar no canva
      y: posicaoY,   //posição onde começa a desenhar no canva
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
          globais.faceDoDado = this.face

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
      x: posicaoX,   //posição onde começa a desenhar no canva
      y: posicaoY,   //posição onde começa a desenhar no canva
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
          globais.faceDoDado = this.face
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




    },
    atualiza() {
      globais.personagem.atualiza();


    }

  }
}

let sort = false
let contador = 0;


function loop() {
  telaAtiva.desenha();
  telaAtiva.atualiza();
  frames++;
  sorteiaDados(sort)
  requestAnimationFrame(loop);
}
mudaParaTela(Telas.INICIO)
loop();


let faceDoDado1;
let faceDoDado2;
let faceDoDado3;

function sorteiaDados(x) {
  sort = x

  globais.dados = criaDados();

  if (sort) {
    globais.dados[sorteiaNumero()].atualiza()
    contador++
  }
  if (contador > 50) {
    if (!faceDoDado1) {
      faceDoDado1 = globais.faceDoDado
      console.log('dado1 foi: ', faceDoDado1)
      posicaoX += 170

    }
    else if (!faceDoDado2) {
      faceDoDado2 = globais.faceDoDado
      console.log('dado2 foi: ', faceDoDado2)
      posicaoX += 170
    }
    else if (!faceDoDado3) {
      faceDoDado3 = globais.faceDoDado
      console.log('dado3 foi: ', faceDoDado3)
      document.getElementById("btSorteia").disabled = "true"
      posicaoX = 140
      mostraCalculadora()
    }

    escreveNaTela(globais.faceDoDado)
    sort = false
    contador = 0;
  }

}

function escreveNaTela(msg) {
  contexto.font = '60px arial';
  contexto.fillText(msg, 400, 250)
}

document.addEventListener("mousedown", function () {
  /* Captura onde o mouse clicou*/
  let cliqueMouse = document.querySelector("canvas");
  cliqueMouse.addEventListener("mousedown", function (e) {
    retorno = getMousePosition(cliqueMouse, e);
  });

  if (telaAtiva.click) {
    telaAtiva.click();
  }
})

//sorteia um número aleatorio
function sorteiaNumero() {

  let numDadoSorteado = Math.floor(Math.random() * globais.dados.length)

  return numDadoSorteado

}

//localiza onde foi o clique do mouse
function getMousePosition(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  console.log("Coordenada x: " + x,
    "Coordenada y: " + y);

}

function mostraCalculadora() {
  document.getElementById("inputCalc").innerHTML = ` 
      <label for="numero1" class="label">1º Dado</label>
      <label for="operador1" class="label">Operador</label>
      <label for="numero2" class="label">2º Dado</label>
      <label for="operador2" class="label">Operador</label>
      <label for="numero3" class="label">3º Dado</label><br>

  <input type="number"> <select name="operadores" id="operadores">
  <option value="+">+</option>
  <option value="-">-</option>
  <option value="/">/</option>
  <option value="*">*</option>

</select> 
<input type="number"> <select name="operadores" id="operadores">
  <option value="+">+</option>
  <option value="-">-</option>
  <option value="/">/</option>
  <option value="*">*</option>

</select>
<input type="number"><br>
<button onclick="calcular()" class="button">Calcular</button>`

}

//limpa a tela do canva
function limpaTela() {
  contexto.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("btSorteia").disabled = false
  faceDoDado1 = false;
  faceDoDado2 = false;
  faceDoDado3 = false;
  document.getElementById("inputCalc").innerHTML = ""
}