const GameCanvas = require('./lib/components/GameCanvas');

const AGRV = process.argv;


function consoleRender(component, location) {
  component.reRenderCallback = consoleRender;
  component.reRenderLocation = location;

  console.log(component.render());
}

function initialize(event) {
  var gameCanvas = new GameCanvas({ renderOutput: 'console' });

  if (AGRV.length > 2 && AGRV[2] !== "") {
    gameCanvas.seedCells(AGRV[2]);
  } else {
    gameCanvas.randomizeCells();
  }

  consoleRender(gameCanvas, null);
  gameCanvas._handleRunOrPause();
  // gameCanvas.setState({ running: true });
};

(function () {
  initialize();
})();

// == References:
// - [Process \| Node\.js v10\.2\.1 Documentation]
//   (https://nodejs.org/docs/latest/api/process.html#process_process_argv)