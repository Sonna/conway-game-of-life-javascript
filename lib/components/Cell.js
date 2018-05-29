Cell.prototype.props = {
  renderOutput: 'html',
  // canvas: document.getElementById("game-canvas"),

  handleClick: function () {},
  // updateCell: function (_cell, _callback) {},
  // updateCell: function (_callback) {},
  // updateCell: function () {},

  alive: false,

  x: 0,
  y: 0,
  height: 10,
  width: 10
};

function Cell(properties) {
  this.props = Object.assign({}, this.props, properties);
};

Cell.prototype.render = function () {
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

Cell.prototype.renderString = function () {
  return this.props.alive ? "*" : ".";
}

Cell.prototype.renderHTML = function () {
  var self = this;
  // var context = self.canvas.getContext("2d");
  // context.rect(self.x, self.y, self.width, self.height);
  // context.stroke();
  // return;

  var el = document.createElement('rect');
  el.setAttribute('class', 'cell');
  el.setAttribute('rx', '0'); // Non-round corners
  el.setAttribute('ry', '0'); // Non-round corners
  el.setAttribute('x', this.props.x);
  el.setAttribute('y', this.props.y);
  el.setAttribute('width', this.props.width);
  el.setAttribute('height', this.props.height);
  // el.setAttribute('style', "stroke: #000000;stroke-width: 1;");

  this.props.alive ?
    el.classList.add("alive") :
    el.classList.add("dead");

  el.addEventListener('click', this._handleClick.bind(this));

  return el;
};

Cell.prototype.live = function () {
  this.props = Object.assign({}, this.props, { alive: true });
}

Cell.prototype.die = function () {
  this.props = Object.assign({}, this.props, { alive: false });
}

Cell.prototype.toggleAlive = function () {
  this.props.alive ? this.die() : this.live();
}

Cell.prototype._handleClick = function (event) {
  event.preventDefault();
  this.props.handleClick(this.toggleAlive());
  // this.props.updateCell(this.toggleAlive());
};

// module.exports = Cell;
if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = Cell;
  }
  exports.Cell = Cell;
}
else if (typeof root !== 'undefined') {
  root.Cell = Cell;
}
else {
  window.Cell = Cell;
}
