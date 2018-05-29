// For server-side testing primarily
if (typeof exports !== 'undefined') {
  if (typeof Cell === 'undefined') {
    var Cell = require('./Cell');
  }
  if (typeof Board === 'undefined') {
    var Board = require('./Board');
  }
}

var HALF_A_SECOND_IN_MILLISECONDS = 500;

Game.prototype.state = {
  board: {},
  cells: [[]],
  renderOutput: "html",
  running: false,

  columns: 80,
  rows: 20,

  form: {
    seed:
      '................................................................................\n' +
      '................................................................................\n' +
      '................................................................................\n' +
      '................................................................................\n' +
      '................................................................................\n' +
      '................................................................................\n' +
      '................................................................................\n' +
      '................................................................................\n' +
      '................................................................................\n' +
      '................................................................................\n' +
      '................................................................................\n' +
      '................................................................................\n' +
      '................................................................................\n' +
      '................................................................................\n' +
      '................................................................................\n' +
      '................................................................................\n' +
      '................................................................................\n' +
      '................................................................................\n' +
      '................................................................................\n' +
      '................................................................................'
  }
};

function Game(properties) {
  this.initialize(properties);

  this.reRenderCallback = function() {};
  this.reRenderLocation = {};
  this.setState(properties);
};

Game.prototype.initialize = function (properties) {
  // var self = this;
  this.state = Object.assign({}, this.state, properties);
  this.state.board = new Board({
    columns: this.state.columns,
    rows: this.state.rows,
    renderOutput: this.state.renderOutput,
    handleClick: this._handleClick.bind(this)
  });

  this.state.board.initializeCells();
  this.state.cells = this.state.board.props.cells;
};

Game.prototype.setState = function (properties, callback) {
  this.state = Object.assign({}, this.state, properties);

  var self = this;
  var parentEl = this.reRenderLocation;
  this.reRenderCallback(self, parentEl);

  (typeof callback === 'function') && callback(null, self);
};

Game.prototype.render = function () {
  var self = this;
  switch(self.state.renderOutput) {
  case "console":
    return self.renderString();
    break;
  case "html":
  default:
    return self.renderHTML();
  }
}

Game.prototype.renderString = function () {
  return this.state.board.renderString() + "\n";
}

Game.prototype.renderHTML = function () {
  var self = this;
  var containerEl = document.createElement('div');
  containerEl.setAttribute('class', 'game');

  // Add Canvas
  var el = document.createElement('svg');
  el.setAttribute('class', 'game-canvas');
  // el.setAttribute('viewBox', '0 0 200 800');
  el.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  // Add Board
  el.appendChild(self.state.board.render());
  containerEl.appendChild(el);

  // Add Controls
  var el = document.createElement('div');
  el.setAttribute('class', 'controls');

  // Add Play/Pause button
  var buttonEl = document.createElement('button');
  buttonEl.setAttribute('class', 'control');
  // buttonEl.innerHTML = self.state.running ? "&#10074;&#10074; Pause" : "&#9658; Run";
  buttonEl.innerHTML = self.state.running ? "&#9632; Stop" : "&#9658; Run";
  buttonEl.addEventListener('click', self._handleRunOrPause.bind(self));
  el.appendChild(buttonEl);

  // Add Randomize button
  var buttonEl = document.createElement('button');
  buttonEl.setAttribute('class', 'control');
  buttonEl.innerHTML = 'Randomize';
  buttonEl.addEventListener('click', self._handleRandomize.bind(self));
  el.appendChild(buttonEl);

  // Add Clear button
  var buttonEl = document.createElement('button');
  buttonEl.setAttribute('class', 'control');
  buttonEl.innerHTML = 'Clear';
  buttonEl.addEventListener('click', self._handleClear.bind(self));
  el.appendChild(buttonEl);

  containerEl.appendChild(el);

  // Add Seed Form
  var formEl = document.createElement('form');
  formEl.setAttribute('class', 'seed-form');
  formEl.addEventListener('submit', self._handleSubmit.bind(self));

  // Add Textarea Input
  var inputEl = document.createElement('textarea');
  inputEl.setAttribute('name', 'seed');
  inputEl.setAttribute('cols', '80');
  inputEl.setAttribute('rows', '20');
  inputEl.innerHTML = this.state.form.seed;
  formEl.appendChild(inputEl);

  // Add Submit button
  var buttonEl = document.createElement('input');
  buttonEl.setAttribute('class', 'control');
  buttonEl.setAttribute('type', 'submit');
  buttonEl.setAttribute('name', 'submit');
  buttonEl.setAttribute('value', 'Seed');
  buttonEl.innerHTML = 'Seed';
  formEl.appendChild(buttonEl);

  containerEl.appendChild(formEl);

  // return el;
  return containerEl;
};

Game.prototype.clearCells = function () {
  var self = this;
  var nextCells = self.state.board.clearCells();
  var nextBoard = new Board(Object.assign({}, self.state.board.props, {
    cells: nextCells
  }));

  this.setState({ board: nextBoard, cells: nextCells });
};

Game.prototype.randomizeCells = function () {
  var self = this;
  var nextCells = self.state.board.randomizeCells();
  var nextBoard = new Board(Object.assign({}, self.state.board.props, {
    cells: nextCells
  }));

  this.setState({ board: nextBoard, cells: nextCells });
};

Game.prototype.seedCells = function (inputString) {
  var self = this;
  var nextCells = self.state.board.seedCells(inputString);
  var nextBoard = new Board(Object.assign({}, self.state.board.props, {
    cells: nextCells
  }));

  this.setState({
    board: nextBoard, cells: nextCells, form: { seed: inputString }
  });
};

Game.prototype.updateCells = function () {
  var self = this;
  var nextCells = self.state.board.props.cells.map(function(row, row_index) {
    return row.map(function(cell, column_index) {
      var numAlive = self.state.board.neighboursAlive(column_index, row_index);
      var alive = false;

      if (numAlive == 3 && !cell.props.alive) {
        alive = true;
      } else if (cell.props.alive) {
        if (numAlive < 2) {
          alive = false;
        } else if (numAlive == 2 || numAlive == 3) {
          alive = true;
        } else if (numAlive > 4) {
          alive = false;
        }
      }

      var properties = Object.assign({}, cell.props, { alive: alive });
      return new Cell(properties);
    });
  });

  var nextBoard = new Board(Object.assign({}, self.state.board.props, {
    cells: nextCells
  }));

  this.setState({ board: nextBoard, cells: nextCells });
  // self.setState({ board: nextBoard });
};

Game.prototype.update = function () {
  var self = this;
  setTimeout(function () {
    if(self.state.running) {
      self.updateCells();
      self.update();
    };
  }, HALF_A_SECOND_IN_MILLISECONDS);
};

Game.prototype.toggleRunning = function (callback) {
  this.setState({ running: !this.state.running }, callback);
};

Game.prototype.runOrPause = function (callback) {
  this.toggleRunning(callback);
  this.update();
};

Game.prototype._handleClick = function (callback) {
  this.setState({}, callback);
};

Game.prototype._handleRandomize = function (callback) {
  this.randomizeCells();
};

Game.prototype._handleClear = function (callback) {
  this.clearCells();
};

Game.prototype._handleRunOrPause = function (callback) {
  this.runOrPause(callback);
};

Game.prototype._handleSubmit = function (event) {
  event.preventDefault();
  var formData = event.target;

  var seed = formData.elements.seed.value;

  this.seedCells(seed);
};

// module.exports = Game;
if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = Game;
  }
  exports.Game = Game;
}
else if (typeof root !== 'undefined') {
  root.Game = Game;
}
else {
  window.Game = Game;
}
