// views/CanvasRenderer.js
// Responsável pela renderização no Canvas.
// Centraliza todas as operações de desenho.

class CanvasRenderer {
  constructor(canvas, contexto, sprites) {
    this.canvas = canvas;
    this.contexto = contexto;
    this.sprites = sprites;
  }

  desenhaPlanoDeFundo(planoDeFundo) {
    this.contexto.drawImage(
      this.sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      planoDeFundo.x, planoDeFundo.y,
      planoDeFundo.tamTelax, planoDeFundo.tamTelay
    );
  }

  desenhaPersonagem(personagem) {
    personagem.desenha(this.contexto, this.sprites);
  }

  desenhaDados(dados) {
    dados.forEach(dado => dado.desenha(this.contexto, this.sprites));
  }

  exibeTimer(timer) {
    const format = timer.getFormattedTime();
    this.contexto.font = '40px serif';
    this.contexto.clearRect(0, 0, 200, 50);
    this.contexto.fillText(format, 20, 35);
  }

  clearRect(x, y, width, height) {
    this.contexto.clearRect(x, y, width, height);
  }

  escreveNaTela(msg, x, y, font = '60px arial') {
    this.contexto.font = font;
    this.contexto.fillText(msg, x, y);
  }
}