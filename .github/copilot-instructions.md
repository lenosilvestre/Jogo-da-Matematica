# Jogo da Matemática - AI Coding Guidelines

## Project Overview
This is a canvas-based math game (ASMD - Addition, Subtraction, Multiplication, Division) where players roll 3 dice, perform calculations to reach target numbers, and advance a frog character along a predefined path. The game uses HTML5 Canvas for rendering, with screen-based architecture and event-driven interactions.

## Architecture Patterns
- **Screen Management**: Use `Telas` object with `inicializa()`, `desenha()`, `click()`, `atualiza()` methods for each screen (e.g., `Telas.INICIO`, `Telas.JOGO`).
- **Game Objects**: Objects like dice and characters follow sprite pattern with properties: `spriteX`, `spriteY`, `largura`, `altura`, `x`, `y`, `tamTelax`, `tamTelay`, and methods `desenha()` and `atualiza()`.
- **Scaling**: Divide positions/sizes by `proporcaoDaTela` (2 for mobile, 1 for desktop) for responsive design.
- **Dice Creation**: `criaDados()` returns array of 6 dice objects, each with face 1-6 and sprite coordinates from `./img/sprites.png`.
- **Path Movement**: `trilhaMapa` array defines coordinates; advance with `avancaNaTrilha()` updating `globais.coordenadaAtual`.

## Key Workflows
- **Run Game**: Open `index.html` in browser (no build required).
- **Dice Rolling**: Call `sorteiaDados(true)` to animate rolling; faces stored in `faceDoDado1`, `faceDoDado2`, `faceDoDado3`.
- **Calculations**: Use `mostraCalculadora()` to display input form; validate with `verificaNumeros()` ensuring inputs match rolled dice.
- **Timer**: `startTimer()`, `pauseTimer()`, `stopTimer()` for gameplay timing; display with `exibeTimer()` on canvas.

## Coding Conventions
- **Language**: Portuguese comments and variable names (e.g., `proporcaoDaTela`, `sapo`, `trilhaMapa`).
- **Canvas Drawing**: Use `contexto.drawImage()` with sprite parameters; clear with `contexto.clearRect()`.
- **DOM Integration**: jQuery for dynamic elements like calculator inputs; position with `elementosFixos` div.
- **Animation**: Frame-based updates in `loop()` function using `requestAnimationFrame`.
- **Event Handling**: Mouse clicks via `document.addEventListener("mousedown")`; screen-specific `click()` methods.

## Dependencies
- jQuery 3.1.1 for DOM manipulation.
- `./img/sprites.png` for all game graphics.
- Canvas element with id `game-canvas` (800x544 base resolution).

## Common Patterns
- **Object Creation Functions**: `criaPersonagem()`, `criaDados()` return configured objects.
- **Global State**: Use `globais` object for shared state (e.g., `globais.personagem`, `globais.dados`).
- **Validation**: Check inputs with alerts for invalid math operations or mismatched dice values.
- **Mobile Detection**: `checkDevice()` adjusts UI positioning and scaling.

## Post-Refactoring Structure
After refactoring, the code is organized into layers:
- **models/**: Business logic (Dado, Personagem, Trilha, Timer classes).
- **views/**: Rendering (CanvasRenderer class).
- **controllers/**: Flow control (GameController class).
- **config/**: Configurations (dice-faces.json).
- Dice faces are loaded from JSON, not hardcoded.</content>
<parameter name="filePath">c:\Users\3398597\Documents\Jogo-da-Matematica\.github\copilot-instructions.md