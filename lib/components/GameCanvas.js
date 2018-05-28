// For server-side testing primarily
if (typeof exports !== 'undefined') {
  if (typeof Cell === 'undefined') {
    var Cell = require('./Cell');
  }
  if (typeof Board === 'undefined') {
    var Board = require('./Board');
  }
  // if (typeof XMLHttpRequest === 'undefined') {
  //   var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
  // }
}

var HALF_A_SECOND_IN_MILLISECONDS = 500;

GameCanvas.prototype.state = {
  board: {},
  cells: [[]],
  running: false,

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

function GameCanvas(properties) {
  this.initialize(properties);
  // this.update = function() {};
  this.reRenderCallback = function() {};
  this.reRenderLocation = {};
  this.setState(properties);
};

GameCanvas.prototype.initialize = function (properties) {
  // var self = this;
  this.state = Object.assign({}, this.state, properties);
  this.state.board = new Board({ handleClick: this._handleClick.bind(this) });
  // this.state.board = new Board({ updateCell: this._updateCell.bind(this) });
  this.state.board.initializeCells();
  this.state.cells = this.state.board.props.cells;
};

GameCanvas.prototype.setState = function (properties, callback) {
  this.state = Object.assign({}, this.state, properties);

  var self = this;
  var parentEl = this.reRenderLocation;
  // this.update(self, parentEl);
  this.reRenderCallback(self, parentEl);

  (typeof callback === 'function') && callback(null, self);
};

GameCanvas.prototype.render = function () {
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
  // formEl.setAttribute('action', '#');
  // formEl.setAttribute('method', 'post');
  formEl.addEventListener('submit', self._handleSubmit.bind(self));

  // Add Textarea Input
  var inputEl = document.createElement('textarea');
  inputEl.setAttribute('name', 'seed');
  inputEl.setAttribute('cols', '80');
  inputEl.setAttribute('rows', '20');
  inputEl.innerHTML = this.state.form.seed;
  formEl.appendChild(inputEl);

  // Add Submit button
  // var buttonEl = document.createElement('button');
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

GameCanvas.prototype.clearCells = function () {
  var self = this;
  var nextCells = self.state.board.clearCells();
  var nextBoard = new Board(Object.assign({}, self.state.board.props, {
    cells: nextCells
  }));

  this.setState({ board: nextBoard, cells: nextCells });
};

GameCanvas.prototype.randomizeCells = function () {
  var self = this;
  var nextCells = self.state.board.randomizeCells();
  var nextBoard = new Board(Object.assign({}, self.state.board.props, {
    cells: nextCells
  }));

  this.setState({ board: nextBoard, cells: nextCells });
};

GameCanvas.prototype.seedCells = function (inputString) {
  var self = this;
  var nextCells = self.state.board.seedCells(inputString);
  var nextBoard = new Board(Object.assign({}, self.state.board.props, {
    cells: nextCells
  }));

  this.setState({
    board: nextBoard, cells: nextCells, form: { seed: inputString }
  });
};

GameCanvas.prototype.updateCells = function () {
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

GameCanvas.prototype.update = function () {
  var self = this;
  setTimeout(function () {
    if(self.state.running) {
      self.updateCells();
      self.update();
    };
  }, HALF_A_SECOND_IN_MILLISECONDS);
};

GameCanvas.prototype.toggleRunning = function (callback) {
  this.setState({ running: !this.state.running }, callback);
};

// // GameCanvas.prototype._updateCell = function (cell, callback) {
// GameCanvas.prototype._updateCell = function (callback) {
//   // var cells = this.state.cells;
//   // cells[cell.y][cell.x].props = cell.props;
//   this.setState({}, callback);
// };

GameCanvas.prototype._handleClick = function (callback) {
  // var self = this;
  this.setState({}, callback);
};

GameCanvas.prototype._handleRandomize = function (callback) {
  this.randomizeCells();
};

GameCanvas.prototype._handleClear = function (callback) {
  this.clearCells();
};

GameCanvas.prototype._handleRunOrPause = function (callback) {
  this.toggleRunning(callback);
  this.update();
};

GameCanvas.prototype._handleSubmit = function (event) {
  event.preventDefault();
  var formData = event.target;

  var seed = formData.elements.seed.value;

  this.seedCells(seed);
};

// module.exports = GameCanvas;
if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = GameCanvas;
  }
  exports.GameCanvas = GameCanvas;
}
else if (typeof root !== 'undefined') {
  root.GameCanvas = GameCanvas;
}
else {
  window.GameCanvas = GameCanvas;
}
