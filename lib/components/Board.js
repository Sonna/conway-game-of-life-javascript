// For server-side testing primarily
if (typeof exports !== 'undefined') {
  if (typeof Cell === 'undefined') {
    var Cell = require('./Cell');
  }
}

var PADDING = 10;

Board.prototype.props = {
  renderOutput: 'html',
  cells: [[]],

  columns: 80,
  rows: 20,

  handleClick: function () {},
};

function Board(properties) {
  this.props = Object.assign({}, this.props, properties);
  // this.initializeCells();
};

Board.prototype.initializeCells = function () {
  var self = this;
  self.props.cells = Array(self.props.rows).fill(
    Array(self.props.columns).fill(null)
  ).map(function(row, row_index) {
    return row.map(function(_element, column_index) {
      return new Cell({
        renderOutput: self.props.renderOutput,

        handleClick: self.props.handleClick,

        alive: false,
        x: row_index * PADDING,
        y: column_index * PADDING
      });
    });
  });
}

Board.prototype.clearCells = function () {
  var self = this;
  return this.props.cells.map(function(row, row_index) {
    return row.map(function(cell, column_index) {
      return new Cell(Object.assign({}, cell.props, { alive: false }));
    });
  });
}

Board.prototype.randomizeCells = function () {
  var self = this;
  return this.props.cells.map(function(row, row_index) {
    return row.map(function(cell, column_index) {
      if (Math.floor(Math.random() * 2) == 0) {
        return new Cell(Object.assign({}, cell.props, { alive: true }));
      } else {
        return new Cell(Object.assign({}, cell.props, { alive: false }));
      }
    });
  });
}

Board.prototype.seedCells = function (inputString) {
  var self = this;
  var lines = inputString.split("\n");
  return this.props.cells.map(function(row, row_index) {
    return row.map(function(cell, column_index) {
      return new Cell(Object.assign({}, cell.props, {
        alive: (lines[row_index].charAt(column_index) === "*")
      }));
    });
  });
}

Board.prototype.neighboursAlive = function (col_i, row_i) {
  return this.neighbouringCells(col_i, row_i).filter(function (cell) {
    return cell.props.alive;
  }).length;
}

Board.prototype.neighbouringCells = function (col_i, row_i) {
  var self = this;
  var neighbours = new Array;

  // top row
  if (typeof self.props.cells[row_i - 1] !== 'undefined') {
    neighbours.push(
      self.props.cells[row_i - 1][col_i - 1], // top_left
      self.props.cells[row_i - 1][col_i],     // top_middle
      self.props.cells[row_i - 1][col_i + 1]  // top_right
    );
  }

  // middle row
  if (typeof self.props.cells[row_i] !== 'undefined') {
    neighbours.push(
      self.props.cells[row_i][col_i - 1],     // middle_left
      self.props.cells[row_i][col_i + 1],     // middle_right
    );
  }

  // bottom row
  if (typeof self.props.cells[row_i + 1] !== 'undefined') {
    neighbours.push(
      self.props.cells[row_i + 1][col_i - 1], // bottom_left
      self.props.cells[row_i + 1][col_i],     // bottom_middle
      self.props.cells[row_i + 1][col_i + 1]  // bottom_right
    );
  }

  return neighbours.filter(function (cell) {
    return (typeof cell !== 'undefined');
  });
}


Board.prototype.render = function () {
  var self = this;
  switch(self.props.renderOutput) {
  case "console":
    return self.renderString();
    break;
  case "html":
  default:
    return self.renderHTML();
  }
}

Board.prototype.renderString = function () {
  return this.props.cells.map(function (row, row_index) {
    return row.map(function (cell, column_index) {
      return cell.renderString();
    }).join("");
  }).join("\n");
}

Board.prototype.renderHTML = function () {
  var self = this;
  var el = document.createElement('g');
  el.setAttribute('class', 'board');

  el.setAttribute('stroke', 'black');
  el.setAttribute('stroke-width', '1');
  el.setAttribute('fill', 'black');

  // Add Cells
  self.props.cells.forEach(function (row, row_index) {
    var elRow = document.createElement('g');
    elRow.setAttribute('class', 'row');

    row.forEach(function (cell, column_index) {
      elRow.appendChild(cell.render());
    });

    el.appendChild(elRow);
  });

  return el;
};

// module.exports = Board;
if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = Board;
  }
  exports.Board = Board;
}
else if (typeof root !== 'undefined') {
  root.Board = Board;
}
else {
  window.Board = Board;
}
