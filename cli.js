const Game = require('./lib/components/Game');

const AGRV = process.argv;


function consoleRender(component, location) {
  component.reRenderCallback = consoleRender;
  component.reRenderLocation = location;

  console.log(component.render());
}

function initialize(event) {
  var game = new Game({ renderOutput: 'console' });

  if (AGRV.length > 2 && AGRV[2] !== "") {
    game.seedCells(AGRV[2]);
  } else {
    game.randomizeCells();
  }

  consoleRender(game, null);
  game._handleRunOrPause();
  // game.setState({ running: true });
};

(function () {
  initialize();
})();

// == References:
// - [Process \| Node\.js v10\.2\.1 Documentation]
//   (https://nodejs.org/docs/latest/api/process.html#process_process_argv)
