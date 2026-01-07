// controllers/GameController.js
// Responsável pelo controle de fluxo do jogo e eventos.
// Gerencia telas, sorteio de dados, cálculos, etc.

class GameController {
  constructor(renderer, personagem, trilha, timer, proporcaoDaTela) {
    this.renderer = renderer;
    this.personagem = personagem;
    this.trilha = trilha;
    this.timer = timer;
    this.proporcaoDaTela = proporcaoDaTela;
    this.dados = [];
    this.dadosSorteados = [];
    this.faceDoDado1 = null;
    this.faceDoDado2 = null;
    this.faceDoDado3 = null;
    this.sort = false;
    this.contador = 0;
    this.velocidadeSorteioDado = 5;
    this.dadoAtual = 0;
  }

  inicializaDados(posicaoX, posicaoY) {
    this.dados = criaDados(posicaoX, posicaoY, this.proporcaoDaTela);
    // Centralizar e espaçar os 3 dados
    const dadoWidth = 100 / this.proporcaoDaTela;
    const spacing = 150 / this.proporcaoDaTela; // Espaço maior entre dados
    const totalWidth = 3 * dadoWidth + 2 * spacing;
    const startX = (800 / this.proporcaoDaTela - totalWidth) / 2; // Centralizar no canvas
    this.dados[0].x = startX;
    this.dados[1].x = startX + dadoWidth + spacing;
    this.dados[2].x = startX + 2 * (dadoWidth + spacing);
    this.dadosSorteados = [this.dados[0], this.dados[1], this.dados[2]];
  }

  clearDados() {
    this.faceDoDado1 = null;
    this.faceDoDado2 = null;
    this.faceDoDado3 = null;
    // Limpar visualmente os dados redesenhando o plano de fundo
    this.renderer.desenhaPlanoDeFundo(window.planoDeFundo);
  }

  sorteiaDados(frames) {
    if (this.sort && this.dadoAtual < 3) {
      this.dadosSorteados[this.dadoAtual].atualiza(frames, this.velocidadeSorteioDado);
      this.contador++;
      if (this.contador > 50) {
        // Definir face do dado atual
        if (this.dadoAtual === 0) this.faceDoDado1 = this.dadosSorteados[0].face;
        else if (this.dadoAtual === 1) this.faceDoDado2 = this.dadosSorteados[1].face;
        else if (this.dadoAtual === 2) this.faceDoDado3 = this.dadosSorteados[2].face;
        this.dadoAtual++;
        this.contador = 0;
        if (this.dadoAtual >= 3) {
          this.sort = false;
          this.dadoAtual = 0;
          // Desenhar os dados finais
          this.renderer.desenhaDados(this.dadosSorteados);
        }
      }
    }
  }

  avancaNaTrilha(planoDeFundo) {
    this.trilha.avanca(this.personagem, this.proporcaoDaTela);
    this.renderer.desenhaPlanoDeFundo(planoDeFundo);
    this.renderer.desenhaPersonagem(this.personagem);
    this.renderer.exibeTimer(this.timer);
  }

  verificaNumeros(vl1, vl2, vl3) {
    const faces = [this.faceDoDado1, this.faceDoDado2, this.faceDoDado3];
    if (!faces.includes(vl1)) {
      alert("Valor do 1º dado não corresponde aos dados sorteados.");
      return false;
    }
    if (!faces.includes(vl2)) {
      alert("Valor do 2º dado não corresponde aos dados sorteados.");
      return false;
    }
    if (!faces.includes(vl3)) {
      alert("Valor do 3º dado não corresponde aos dados sorteados.");
      return false;
    }
    return true;
  }
}