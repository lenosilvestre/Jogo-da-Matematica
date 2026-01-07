// models/Personagem.js
// Responsável pelas regras de negócio do personagem (sapo).
// Define propriedades e métodos para o personagem.

class Personagem {
  constructor(spriteX, spriteY, largura, altura, x, y, tamTelax, tamTelay) {
    this.spriteX = spriteX;
    this.spriteY = spriteY;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.y = y;
    this.tamTelax = tamTelax;
    this.tamTelay = tamTelay;
  }

  atualiza() {
    // Lógica de atualização do personagem, se necessário
  }

  desenha(contexto, sprites) {
    contexto.drawImage(
      sprites,
      this.spriteX, this.spriteY,
      this.largura, this.altura,
      this.x, this.y,
      this.tamTelax, this.tamTelay
    );
  }
}

// Função para criar o personagem inicial
function criaPersonagem(proporcaoDaTela) {
  return new Personagem(
    273, // spriteX
    810, // spriteY
    529, // largura
    1078, // altura
    45 / proporcaoDaTela, // x
    40 / proporcaoDaTela, // y
    120 / proporcaoDaTela, // tamTelax
    260 / proporcaoDaTela  // tamTelay
  );
}