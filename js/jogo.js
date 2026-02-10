console.log('[Jogo da matemática] ');

function checkDevice() {
  if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true; // está utilizando celular
  }
  else {
    return false; // não é celular
  }
}

let proporcaoDaTela;
if (checkDevice()) {
  proporcaoDaTela = 2;
} else {
  proporcaoDaTela = 1;
}

/* Posição inicial dos dados */
let posicaoX = 185;
let posicaoY = 203;

//contador de frames
let frames = 0;

//velocidade que os dados giram
const velocidadeSorteioDado = 5;

//definindo a imagem principal
const sprites = new Image();
sprites.src = './img/sprites.png';

//contador de tempo
let time = 0;

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

//dividindo a tela
canvas.width = canvas.width / proporcaoDaTela;
canvas.height = canvas.height / proporcaoDaTela;

var planoDeFundo = {
  spriteX: 0,
  spriteY: 0,
  largura: 1053,
  altura: 717,
  x: 0,
  y: 0,
  tamTelax: 800 / proporcaoDaTela,
  tamTelay: 544 / proporcaoDaTela,
  desenha() {
    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      planoDeFundo.x, planoDeFundo.y,
      planoDeFundo.tamTelax, planoDeFundo.tamTelay,
    );
  }
};

// Tornar planoDeFundo global
window.planoDeFundo = planoDeFundo;

// Instanciando os módulos
const personagem = criaPersonagem(proporcaoDaTela);
const trilha = new Trilha();
const timer = new Timer();
const renderer = new CanvasRenderer(canvas, contexto, sprites);
const gameController = new GameController(renderer, personagem, trilha, timer, proporcaoDaTela);

// Inicializar dados
gameController.inicializaDados(posicaoX, posicaoY);

//[telas]
const globais = {};
let telaAtiva = {};

function mudaParaTela(novaTela) {
  telaAtiva = novaTela;
  if (telaAtiva.inicializa) {
    telaAtiva.inicializa();
  }
}

const Telas = {
  INICIO: {
    inicializa() {
      globais.personagem = personagem;
      globais.coordenadaAtual = trilha.getCoordenadaAtual();
    },
    desenha() {
      renderer.desenhaPersonagem(personagem);
    },
    click() {
      mudaParaTela(Telas.JOGO);
    },
    atualiza() {
      personagem.atualiza();
    }
  },
  JOGO: {
    desenha() {
      renderer.desenhaPersonagem(personagem);
    },
    click() {
      // Lógica de clique
    },
    atualiza() {
      personagem.atualiza();
    }
  }
};

let sort = false;
let contador = 0;

function loop() {
  telaAtiva.desenha();
  telaAtiva.atualiza();
  frames++;
  gameController.sorteiaDados(frames);
  if (gameController.faceDoDado1 && gameController.faceDoDado2 && gameController.faceDoDado3 && !document.getElementById("inputCalc").innerHTML.trim()) {
    mostraCalculadora();
  }
  const timerEl = document.getElementById("timer");
  if (timerEl) {
    timerEl.textContent = timer.getFormattedTime();
  }
  requestAnimationFrame(loop);
}

mudaParaTela(Telas.INICIO);
loop();

// Funções globais para eventos
function sorteiaDados(x) {
  let limparInput = document.getElementById("inputCalc");
  limparInput.innerHTML = "";
  stopMensagem();
  posicaoNaTela = 800;
  if (!timer.running) {
    startTimer();
  }
  gameController.clearDados();
  gameController.sort = x;
  gameController.dadoAtual = 0;
  gameController.contador = 0;
  let btCaclcular1 = document.getElementById("btCalcular");
  btCaclcular1.disabled = false;

}

function escreveNaTela(msg) {
  renderer.escreveNaTela(msg, 400, 250);
}

document.addEventListener("mousedown", function () {
  let cliqueMouse = document.querySelector("canvas");
  cliqueMouse.addEventListener("mousedown", function (e) {
    // Captura posição
  });

  if (telaAtiva.click) {
    telaAtiva.click();
  }
});

//sorteia um número aleatorio
function sorteiaNumero() {
  return Math.floor(Math.random() * gameController.dados.length);
}

//localiza onde foi o clique do mouse
function getMousePosition(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  console.log("Coordenada x: " + x, "Coordenada y: " + y);
}

function mostraCalculadora() {
  // Código da calculadora, similar ao original
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
    <div class="labelInput"><label for="total" class="label">Total </label> <input type="number" id="totalInput" disabled>
    </div>
    <div class="button" id="btCaclcular1">
     <p> <button onclick="calcular()" class="button" id="btCalcular">Calcular</button> </p>
    </div>
  `;
  if (checkDevice()) {
    let elementosFixos = document.getElementById("elementosFixos");
    elementosFixos.style.top = '610px';
  } else {
    let elementosFixos = document.getElementById("elementosFixos");
    elementosFixos.style.top = '720px';
  }
}

let primeiroCalculo = 0;
let segundoCalculo = 0;

function calcular() {
  // Lógica de cálculo, adaptada
  let valor1 = document.getElementById("valor1");
  let valor2 = document.getElementById("valor2");
  let valor3 = document.getElementById("valor3");

  let select = document.getElementById('operadores1');
  let operador1 = select.options[select.selectedIndex].text;
  let select2 = document.getElementById('operadores2');
  let operador2 = select2.options[select2.selectedIndex].text;

  function verificaVazio() {
    if (valor1.value == "") {
      alert("Digite o valor do 1º dado");
      return false;
    }
    if (valor2.value == "") {
      alert("Digite o valor do 2º dado");
      return false;
    }
    if (valor3.value == "") {
      alert("Digite o valor do 3º dado");
      return false;
    }
    return true;
  }

  if (verificaVazio()) {
    valor1 = parseInt(valor1.value);
    valor2 = parseInt(valor2.value);
    valor3 = parseInt(valor3.value);

    if (gameController.verificaNumeros(valor1, valor2, valor3)) {
      // Cálculos
      primeiroCalculo = eval(`${valor1} ${operador1} ${valor2}`);
      segundoCalculo = eval(`${primeiroCalculo} ${operador2} ${valor3}`);
      document.getElementById("totalInput").value = segundoCalculo;

      if (trilha.getCoordenadaAtual() + 2 == segundoCalculo) {
        gameController.avancaNaTrilha(window.planoDeFundo);
        exibemenagem();
        startTimer();
        let btCaclcular1 = document.getElementById("btCalcular");
        btCaclcular1.disabled = true;
      } else {
        alert("Cálculo incorreto. Tente novamente.");
      }
    }
  }
}

function proximaJogada() {
  stopMensagem();
  exibeTimer();
  window.planoDeFundo.desenha();
  contexto.clearRect(0, 0, canvas.width, canvas.height);
  pauseTimer();

  document.getElementById("btSorteia").disabled = false;
  gameController.faceDoDado1 = false;
  gameController.faceDoDado2 = false;
  gameController.faceDoDado3 = false;
  let elementosFixos = document.getElementById("elementosFixos");
  if (checkDevice()) {
    elementosFixos.style.top = '330px';
  } else {
    elementosFixos.style.top = '620px';
  }

  document.getElementById("inputCalc").innerHTML = "";
}

function resetarJogo() {
  timer.stop();
  timer.pause();
  window.planoDeFundo.desenha();
  contexto.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("btSorteia").disabled = false;
  gameController.faceDoDado1 = false;
  gameController.faceDoDado2 = false;
  gameController.faceDoDado3 = false;

  document.getElementById("inputCalc").innerHTML = "";
  let elementosFixos = document.getElementById("elementosFixos");
  if (checkDevice()) {
    elementosFixos.style.top = "330px";
  } else {
    elementosFixos.style.top = "590px";
  }

  mudaParaTela(Telas.INICIO);
}

function avancaNaTrilha() {
  gameController.avancaNaTrilha(planoDeFundo);
}

/*=======função de timer====*/
function startTimer() {
  timer.start();
}

function pauseTimer() {
  timer.pause();
}

function stopTimer() {
  timer.stop();
}

function exibeTimer() {
  renderer.exibeTimer(timer);
}

//exibir na tela mensage de parabéns
let posicaoNaTela = 800;
var tempoDeMsg;
function exibemenagem() {
  tempoDeMsg = setInterval(() => { mensagem() }, 200);
}
function mensagem() {
  window.planoDeFundo.desenha();
  contexto.font = '700 60px Arial';
  contexto.fillText('PARABÉNS VOCÊ AVANÇOU NA TRILHA', posicaoNaTela, 255);
  if (posicaoNaTela > -750) {
    posicaoNaTela -= 50;
  } else {
    posicaoNaTela = 800;
  }
}
function stopMensagem() {
  clearInterval(tempoDeMsg);
  window.planoDeFundo.desenha();
  exibeTimer();
}
