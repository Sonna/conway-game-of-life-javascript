function domRender(component, location) {
  // component.update = domRender;
  // component.parentContainer = container;
  component.reRenderCallback = domRender;
  component.reRenderLocation = location;

  location.innerHTML = null;
  location.appendChild(component.render());
}

function initialize(event) {
  var search = new GameCanvas();

  domRender(search, document.getElementById('main'));
};

(function () {
  initialize();
})();
