function domRender(component, location) {
  // component.update = domRender;
  // component.parentContainer = container;
  component.reRenderCallback = domRender;
  component.reRenderLocation = location;

  location.innerHTML = null;
  location.appendChild(component.render());
}

function initialize(event) {
  var game = new Game();

  domRender(game, document.getElementById('main'));
};

(function () {
  initialize();
})();
