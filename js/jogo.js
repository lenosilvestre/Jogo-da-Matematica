console.log('[Jogo da matemática] ');

//proporção da tela
const proporcaoDaTela = 2


/* Posção inicial dos dados */
let posicaoX = 185
let posicaoY = 203

//contador de frames
let frames = 0;

//velocidade que os dados giram 
const velocidadeSorteioDado = 5;

//definindo a imagem principal 
const sprites = new Image();
sprites.src = './img/sprites.png';


const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');


//dividindo a tela
canvas.width = canvas.width / proporcaoDaTela
canvas.height = canvas.height / proporcaoDaTela

const planoDeFundo = {
  spriteX: 0, //posição X na imagem sprites.png
  spriteY: 0, //posição Y na imagem sprites.png
  largura: 1053, //tamanho do recorte na imagem sptrites.png
  altura: 717,  //tamanho do recorte na imagem sptrites.png
  x: 0,   //posição onde começa a desenhar no canva
  y: 0,   //posição onde começa a desenhar no canva
  tamTelax: 800 / proporcaoDaTela, //tamanho do plano de fundo no canva
  tamTelay: 544 / proporcaoDaTela, //tamanho do plano de fundo no canva
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
    x: 45 / proporcaoDaTela,     //posição no canva (Inicio = 170)
    y: 40 / proporcaoDaTela,     //posição no canva (Inicio = 410)
    tamTelax: 120 / proporcaoDaTela, //tamanho no canva
    tamTelay: 260 / proporcaoDaTela,
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
      x: posicaoX / proporcaoDaTela,   //posição onde começa a desenhar no canva
      y: posicaoY / proporcaoDaTela,   //posição onde começa a desenhar no canva
      tamTelax: 100 / proporcaoDaTela, //tamanho do plano de fundo no canva
      tamTelay: 100 / proporcaoDaTela, //tamanho do plano de fundo no canva
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
      x: posicaoX / proporcaoDaTela,   //posição onde começa a desenhar no canva
      y: posicaoY / proporcaoDaTela,   //posição onde começa a desenhar no canva
      tamTelax: 100 / proporcaoDaTela, //tamanho do plano de fundo no canva
      tamTelay: 100 / proporcaoDaTela, //tamanho do plano de fundo no canva
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
      x: posicaoX / proporcaoDaTela,   //posição onde começa a desenhar no canva
      y: posicaoY / proporcaoDaTela,   //posição onde começa a desenhar no canva
      tamTelax: 100 / proporcaoDaTela, //tamanho do plano de fundo no canva
      tamTelay: 100 / proporcaoDaTela, //tamanho do plano de fundo no canva
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
      x: posicaoX / proporcaoDaTela,   //posição onde começa a desenhar no canva
      y: posicaoY / proporcaoDaTela,   //posição onde começa a desenhar no canva
      tamTelax: 100 / proporcaoDaTela, //tamanho do plano de fundo no canva
      tamTelay: 100 / proporcaoDaTela, //tamanho do plano de fundo no canva
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
      x: posicaoX / proporcaoDaTela,   //posição onde começa a desenhar no canva
      y: posicaoY / proporcaoDaTela,   //posição onde começa a desenhar no canva
      tamTelax: 100 / proporcaoDaTela, //tamanho do plano de fundo no canva
      tamTelay: 100 / proporcaoDaTela, //tamanho do plano de fundo no canva
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
      x: posicaoX / proporcaoDaTela,   //posição onde começa a desenhar no canva
      y: posicaoY / proporcaoDaTela,   //posição onde começa a desenhar no canva
      tamTelax: 100 / proporcaoDaTela, //tamanho do plano de fundo no canva
      tamTelay: 100 / proporcaoDaTela, //tamanho do plano de fundo no canva
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
      globais.coodenadaAtual = -1

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

      globais.personagem.desenha();

    },
    click() {


      // planoDeFundo.desenha();

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

    //  escreveNaTela(globais.faceDoDado)
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

  <div class="labelInput"> <label for="numero1" class="label">1º Dado</label>
  <input type="number" id="valor1">
</div>
<div class="labelInput">
  <label for="operador" class="label" id="operador">Operador</label>

  <select name="operadores" id="operadores1">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="/">/</option>
    <option value="*">*</option>
  </select>
</div>

<div class="labelInput">
  <label for="numero2" class="label">2º Dado</label>
  <input type="number" id="valor2">
</div>

<div class="labelInput">
  <label for="operador" class="label" id="operador">Operador</label>
  <select name="operadores" id="operadores2">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="/">/</option>
    <option value="*">*</option>
  </select>
</div>

<div class="labelInput">
  <label for="numero3" class="label">3º Dado</label>
  <input type="number" id="valor3">
</div>

<div class="labelInput"><label for="total" class="label">Total </label> <input type="number" id="totalInput"
    disabled>
</div>
<div class="button" id="btCaclcular1">
 <p> <button onclick="calcular()" class="button" id="btCalcular">Calcular</button> </p>
</div>
`

  let elementosFixos = document.getElementById("elementosFixos")
  elementosFixos.style.top = '81%';

}



let primeiroCalculo = 0
let segundoCalculo = 0



function calcular() {
  let valor1 = document.getElementById("valor1")
  let valor2 = document.getElementById("valor2")
  let valor3 = document.getElementById("valor3")

  let select = document.getElementById('operadores1');
  let operador1 = select.options[select.selectedIndex].text;
  let select2 = document.getElementById('operadores2');
  let operador2 = select2.options[select2.selectedIndex].text;


  function verificaVazio() {

    if (valor1.value == "") {
      alert("favor informar 1º valor")
      valor1.focus()
      return false
    }
    if (valor2.value == "") {
      alert("favor informar 2º valor")
      valor2.focus()
      return false
    }
    if (valor3.value == "") {
      alert("favor informar 3º valor")
      valor3.focus()
      return false
    }
    return true
  }

  if (verificaVazio()) {
    valor1 = parseInt(valor1.value)
    valor2 = parseInt(valor2.value)
    valor3 = parseInt(valor3.value)

    //calcula aqui
    if (verificaNumeros(valor1, valor2, valor3)) {

      switch (operador1) {
        case '+':
          primeiroCalculo = valor1 + valor2
          break;
        case '-':
          primeiroCalculo = valor1 - valor2
          break;
        case '*':
          primeiroCalculo = valor1 * valor2
          break;
        case '/':
          primeiroCalculo = valor1 / valor2
          break;
        default:
          break;
      }

      switch (operador2) {
        case '+':
          segundoCalculo = primeiroCalculo + valor3
          break;
        case '-':
          segundoCalculo = primeiroCalculo - valor3
          break;
        case '*':
          segundoCalculo = primeiroCalculo * valor3
          break;
        case '/':
          segundoCalculo = primeiroCalculo / valor3
          break;
        default:
          break;

      }
      console.log('valor ', primeiroCalculo, 'valor2 ', segundoCalculo)
    }

    //verifica se acertou o numero 
    if (globais.coodenadaAtual + 2 == segundoCalculo) { //globais.coodenadaAtual + 2 == segundoCalculo
      console.log("vai avancar")


      document.getElementById("inputCalc").innerHTML = `PARABÉNS VOCÊ AVANÇOU NA TRILHA
     <button onclick="proximaJogada()" class="button" id="btProximo">Próximo Sorteio >></button>
     `
      avancaNaTrilha()



    } else if (true) { //aqui vai ter as chances de tentativa do jogador
      document.getElementById("inputCalc").innerHTML += `OPA, NÃO DEU TENTE DE NOVO OU SORTEI NOVAMENTE <button onclick="proximaJogada()" class="button" id="btProximo">Próximo Sorteio >></button> `


    }
  }

  document.getElementById("totalInput").value = segundoCalculo

}


function proximaJogada() {
  planoDeFundo.desenha();
  contexto.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("btSorteia").disabled = false
  faceDoDado1 = false;
  faceDoDado2 = false;
  faceDoDado3 = false;
  document.getElementById("inputCalc").innerHTML = ""

}


//verifica se os numeros digitados corresponde aos dados na tela
function verificaNumeros(vl1, vl2, vl3) {
  let validado = true

  if (vl1 != faceDoDado1 && vl1 != faceDoDado2 && vl1 != faceDoDado3) {
    alert("Valor do 1º dado não corresponde aos dados sorteados.")
    validado = false
  }
  if (vl2 != faceDoDado1 && vl2 != faceDoDado2 && vl2 != faceDoDado3) {
    alert("Valor do 2º dado não corresponde aos dados sorteados.")
    validado = false
  }
  if (vl3 != faceDoDado1 && vl3 != faceDoDado2 && vl3 != faceDoDado3) {
    alert("Valor do 3º dado não corresponde aos dados sorteados.")
    validado = false
  }
  return validado
}


//limpa a tela do canva
function resetarJogo() {
  planoDeFundo.desenha();
  contexto.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("btSorteia").disabled = false
  faceDoDado1 = false;
  faceDoDado2 = false;
  faceDoDado3 = false;
  document.getElementById("inputCalc").innerHTML = ""
  mudaParaTela(Telas.INICIO)

}

const trilhaMapa = [{
  ponto: 1,
  coordenadaX: 170,
  coordenadaY: 410
},
{
  ponto: 2,
  coordenadaX: 265,
  coordenadaY: 372
},
{
  ponto: 3,
  coordenadaX: 254,
  coordenadaY: 282
},
{
  ponto: 4,
  coordenadaX: 191,
  coordenadaY: 213
},
{
  ponto: 5,
  coordenadaX: 194,
  coordenadaY: 107
},
{
  ponto: 6,
  coordenadaX: 286,
  coordenadaY: 63
},
{
  ponto: 7,
  coordenadaX: 394,
  coordenadaY: 100
},
{
  ponto: 8,
  coordenadaX: 516,
  coordenadaY: 70
},
{
  ponto: 9,
  coordenadaX: 619,
  coordenadaY: 94
},
{
  ponto: 10,
  coordenadaX: 633,
  coordenadaY: 207
},
{
  ponto: "chegou",
  coordenadaX: 558,
  coordenadaY: 266
}


]

function avancaNaTrilha() {
  globais.coodenadaAtual += 1

  globais.personagem.x = trilhaMapa[globais.coodenadaAtual].coordenadaX / proporcaoDaTela
  globais.personagem.y = trilhaMapa[globais.coodenadaAtual].coordenadaY / proporcaoDaTela

  planoDeFundo.desenha();
  globais.personagem.desenha()
  if (globais.coodenadaAtual == 9) {
    planoDeFundo.desenha();
    console.log("[GANHOU]")
    globais.personagem.x = trilhaMapa[globais.coodenadaAtual + 1].coordenadaX / proporcaoDaTela
    globais.personagem.y = trilhaMapa[globais.coodenadaAtual + 1].coordenadaY / proporcaoDaTela
    globais.personagem.desenha()
  }
}