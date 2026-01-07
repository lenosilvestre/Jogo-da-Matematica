// models/Trilha.js
// Responsável pelas regras de negócio da trilha (caminho do jogo).
// Define os pontos da trilha e métodos para avançar.

const trilhaMapa = [
  { ponto: 1, coordenadaX: 170, coordenadaY: 410 },
  { ponto: 2, coordenadaX: 265, coordenadaY: 372 },
  { ponto: 3, coordenadaX: 254, coordenadaY: 282 },
  { ponto: 4, coordenadaX: 191, coordenadaY: 213 },
  { ponto: 5, coordenadaX: 194, coordenadaY: 107 },
  { ponto: 6, coordenadaX: 286, coordenadaY: 63 },
  { ponto: 7, coordenadaX: 394, coordenadaY: 100 },
  { ponto: 8, coordenadaX: 516, coordenadaY: 70 },
  { ponto: 9, coordenadaX: 619, coordenadaY: 94 },
  { ponto: 10, coordenadaX: 633, coordenadaY: 207 },
  { ponto: "chegou", coordenadaX: 558, coordenadaY: 266 }
];

class Trilha {
  constructor() {
    this.coordenadaAtual = -1;
  }

  avanca(personagem, proporcaoDaTela) {
    this.coordenadaAtual += 1;
    personagem.x = trilhaMapa[this.coordenadaAtual].coordenadaX / proporcaoDaTela;
    personagem.y = trilhaMapa[this.coordenadaAtual].coordenadaY / proporcaoDaTela;
    if (this.coordenadaAtual === 9) {
      // Lógica para vitória
      personagem.x = trilhaMapa[this.coordenadaAtual + 1].coordenadaX / proporcaoDaTela;
      personagem.y = trilhaMapa[this.coordenadaAtual + 1].coordenadaY / proporcaoDaTela;
      console.log("[GANHOU]");
    }
  }

  getCoordenadaAtual() {
    return this.coordenadaAtual;
  }
}