// models/Timer.js
// Responsável pelas regras de negócio do timer (cronômetro).
// Gerencia o tempo do jogo.

class Timer {
  constructor() {
    this.hh = 0;
    this.mm = 0;
    this.ss = 0;
    this.tempo = 1000; // milissegundos por segundo
    this.cronometro = null;
    this.running = false;
  }

  start() {
    if (this.running) {
      return;
    }
    this.cronometro = setInterval(() => this.timer(), this.tempo);
    this.running = true;
  }

  pause() {
    clearInterval(this.cronometro);
    this.cronometro = null;
    this.running = false;
  }

  stop() {
    clearInterval(this.cronometro);
    this.cronometro = null;
    this.running = false;
    this.reset();
  }

  reset() {
    this.hh = 0;
    this.mm = 0;
    this.ss = 0;
  }

  timer() {
    this.ss++;
    if (this.ss === 60) {
      this.ss = 0;
      this.mm++;
      if (this.mm === 60) {
        this.mm = 0;
        this.hh++;
      }
    }
  }

  getFormattedTime() {
    return (this.hh < 10 ? '0' + this.hh : this.hh) + ':' +
           (this.mm < 10 ? '0' + this.mm : this.mm) + ':' +
           (this.ss < 10 ? '0' + this.ss : this.ss);
  }
}
