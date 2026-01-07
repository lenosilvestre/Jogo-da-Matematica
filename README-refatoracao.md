# Refatoração do Jogo da Matemática

## Visão Geral da Refatoração
O código foi refatorado para melhorar a organização, manutenibilidade e separação de responsabilidades, seguindo princípios de arquitetura limpa e SRP (Single Responsibility Principle). A lógica de negócio foi separada da camada de visualização, e o projeto foi dividido em módulos especializados.

## Estrutura de Arquivos
- **models/**: Contém as regras de negócio.
  - `Dado.js`: Classe `Dado` para representar dados individuais, com carregamento de faces do JSON.
  - `Personagem.js`: Classe `Personagem` para o sapo, com métodos de atualização e desenho.
  - `Trilha.js`: Classe `Trilha` para gerenciar o caminho do jogo.
  - `Timer.js`: Classe `Timer` para o cronômetro do jogo.
- **views/**: Responsável pela renderização.
  - `CanvasRenderer.js`: Classe `CanvasRenderer` centraliza todas as operações de desenho no Canvas.
- **controllers/**: Controle de fluxo e eventos.
  - `GameController.js`: Classe `GameController` orquestra o jogo, gerencia sorteio, validações, etc.
- **config/**: Configurações.
  - `dice-faces.json`: Arquivo JSON com dados das faces dos dados (valor, spriteX, spriteY, largura, altura).
- **js/jogo.js**: Arquivo principal refatorado, instancia os módulos e gerencia o loop do jogo.

## Principais Melhorias
- **Separação de Responsabilidades**: Cada classe/módulo tem uma responsabilidade clara (ex.: Timer só gerencia tempo, CanvasRenderer só desenha).
- **Reutilização de Código**: Métodos como `desenha()` e `atualiza()` são padronizados e reutilizáveis.
- **Externalização de Configurações**: Dados dos dados agora vêm de um JSON, facilitando manutenção.
- **Redução de Globais**: Estado encapsulado em classes, reduzindo variáveis globais.
- **Manutenibilidade**: Código mais modular, fácil de testar e estender.

## Como Funciona
1. O `jogo.js` instancia os módulos (Personagem, Trilha, Timer, Renderer, Controller).
2. Carrega os dados do JSON via `fetch` em `GameController.inicializaDados()`.
3. O loop principal chama `telaAtiva.desenha()` e `atualiza()`, que delegam para os módulos.
4. Eventos como cliques e cálculos são tratados pelo `GameController`.

## Compatibilidade
- Preserva o funcionamento original do jogo.
- Mantém compatibilidade com HTML5 Canvas e jQuery.
- Código em português, como solicitado.