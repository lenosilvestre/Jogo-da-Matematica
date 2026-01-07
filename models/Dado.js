// models/Dado.js
// Responsável pelas regras de negócio dos dados (dice).
// Carrega as faces do JSON e cria objetos de dados com propriedades e métodos.

class Dado {
  constructor(faceData, posicaoX, posicaoY, proporcaoDaTela) {
    this.face = faceData.face;
    this.spriteX = faceData.spriteX;
    this.spriteY = faceData.spriteY;
    this.largura = faceData.largura;
    this.altura = faceData.altura;
    this.x = posicaoX / proporcaoDaTela;
    this.y = posicaoY / proporcaoDaTela;
    this.tamTelax = 100 / proporcaoDaTela;
    this.tamTelay = 100 / proporcaoDaTela;
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

  atualiza(frames, velocidadeSorteioDado) {
    const passouFrames = frames % velocidadeSorteioDado === 0;
    if (passouFrames) {
      // Sorteia uma nova face para simular rolagem
      this.face = Math.floor(Math.random() * 6) + 1;
      // Atualiza sprite baseado na face
      const faceIndex = this.face - 1;
      const faces = [
        { spriteX: 1066, spriteY: 0, largura: 195, altura: 195 },
        { spriteX: 1265, spriteY: 0, largura: 194, altura: 191 },
        { spriteX: 1467, spriteY: 0, largura: 194, altura: 191 },
        { spriteX: 1670, spriteY: 0, largura: 194, altura: 191 },
        { spriteX: 1066, spriteY: 200, largura: 200, altura: 191 },
        { spriteX: 1271, spriteY: 195, largura: 200, altura: 191 }
      ];
      const faceData = faces[faceIndex];
      this.spriteX = faceData.spriteX;
      this.spriteY = faceData.spriteY;
      this.largura = faceData.largura;
      this.altura = faceData.altura;
      this.desenha(contexto, sprites);
    }
  }
}

// Função para carregar dados do JSON e criar array de dados
function criaDados(posicaoX, posicaoY, proporcaoDaTela) {
  return diceFaces.map(faceData => new Dado(faceData, posicaoX, posicaoY, proporcaoDaTela));
}