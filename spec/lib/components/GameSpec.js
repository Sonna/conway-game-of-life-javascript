const describedClass = require('../../../lib/components/Game');

describe('Game component', function () {
  describe('properties', function () {
    const subject = new describedClass();

    it('state', function(done) {
      expect(subject.state).toEqual(jasmine.any(Object));
      done();
    });
  });

  describe('functions', function () {
    const subject = new describedClass();

    it('render', function (done) {
      expect(subject.render()).toEqual(jasmine.any(Object));
      done();
    });

    it('render default outerHTML when uninitialized', function (done) {
      expect(subject.render().outerHTML).toEqual(
        '<div class="game">' +
          '<svg class="game-canvas" xmlns="http://www.w3.org/2000/svg">' +
            '<g class="board" stroke="black" stroke-width="1" fill="black">' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="0" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="10" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="20" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="20" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="30" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="30" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="40" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="40" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="50" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="50" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="60" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="60" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="70" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="70" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="80" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="80" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="90" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="90" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="100" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="100" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="110" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="110" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="120" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="120" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="130" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="130" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="140" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="140" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="150" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="150" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="160" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="160" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="170" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="170" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="180" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="180" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="20" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="30" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="40" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="50" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="60" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="70" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="80" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="90" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="100" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="110" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="120" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="130" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="140" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="150" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="160" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="170" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="180" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="190" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="200" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="210" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="220" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="230" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="240" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="250" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="260" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="270" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="280" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="290" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="300" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="310" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="320" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="330" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="340" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="350" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="360" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="370" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="380" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="390" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="400" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="410" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="420" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="430" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="440" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="450" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="460" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="470" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="480" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="490" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="500" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="510" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="520" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="530" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="540" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="550" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="560" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="570" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="580" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="590" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="600" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="610" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="620" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="630" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="640" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="650" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="660" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="670" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="680" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="690" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="700" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="710" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="720" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="730" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="740" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="750" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="760" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="770" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="780" y="190" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="790" y="190" width="10" height="10"></rect>' +
              '</g>' +
            '</g>' +
          '</svg>' +
          '<div class="controls">' +
            '<button class="control">► Run</button>' +
            '<button class="control">Randomize</button>' +
            '<button class="control">Clear</button>' +
          '</div>' +
          '<form class="seed-form">' +
            '<textarea name="seed" cols="80" rows="20">' +
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
              '................................................................................' +
            '</textarea>' +
            '<input class="control" type="submit" name="submit" value="Seed">' +
          '</form>' +
        '</div>'
      );
      done();
    });
  });

  describe('render when initialized and small', function () {
    let subject = new describedClass({
      columns: 2,
      rows: 2
    });

    it('render default outerHTML', function (done) {
      expect(subject.render().outerHTML).toEqual(
        '<div class="game">' +
          '<svg class="game-canvas" xmlns="http://www.w3.org/2000/svg">' +
            '<g class="board" stroke="black" stroke-width="1" fill="black">' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="0" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="0" width="10" height="10"></rect>' +
              '</g>' +
              '<g class="row">' +
                '<rect class="cell dead" rx="0" ry="0" x="0" y="10" width="10" height="10"></rect>' +
                '<rect class="cell dead" rx="0" ry="0" x="10" y="10" width="10" height="10"></rect>' +
              '</g>' +
            '</g>' +
          '</svg>' +
          '<div class="controls">' +
            '<button class="control">► Run</button>' +
            '<button class="control">Randomize</button>' +
            '<button class="control">Clear</button>' +
          '</div>' +
          '<form class="seed-form">' +
            '<textarea name="seed" cols="80" rows="20">' +
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
              '................................................................................' +
            '</textarea>' +
            '<input class="control" type="submit" name="submit" value="Seed">' +
          '</form>' +
        '</div>'
      );
      done();
    });
  });

  describe('render as String when initialized and small', function () {
    let subject = new describedClass({
      renderOutput: 'console',
      columns: 2,
      rows: 2
    });

    it('render String', function (done) {
      expect(subject.render()).toEqual(
        '..\n' +
        '..\n'
      );
      done();
    });
  });

  describe('still life patterns', function () {
    it('block', function (done) {
      let subject = new describedClass({
        renderOutput: 'console',
        columns: 4,
        rows: 4
      });
      subject.seedCells(
        '....\n' +
        '.**.\n' +
        '.**.\n' +
        '....\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '....\n' +
        '.**.\n' +
        '.**.\n' +
        '....\n'
      );
      done();
    });

    it('beehive', function (done) {
      let subject = new describedClass({
        renderOutput: 'console',
        columns: 4,
        rows: 4
      });
      subject.seedCells(
        '.**.\n' +
        '*..*\n' +
        '*..*\n' +
        '.**.\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '.**.\n' +
        '*..*\n' +
        '*..*\n' +
        '.**.\n'
      );
      done();
    });

    it('loaf', function (done) {
      let subject = new describedClass({
        renderOutput: 'console',
        columns: 4,
        rows: 4
      });
      subject.seedCells(
        '.**.\n' +
        '*..*\n' +
        '.*.*\n' +
        '..*.\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '.**.\n' +
        '*..*\n' +
        '.*.*\n' +
        '..*.\n'
      );
      done();
    });

    it('boat', function (done) {
      let subject = new describedClass({
        renderOutput: 'console',
        columns: 3,
        rows: 3
      });
      subject.seedCells(
        '**.\n' +
        '*.*\n' +
        '.*.\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '**.\n' +
        '*.*\n' +
        '.*.\n'
      );
      done();
    });

    it('tub', function (done) {
      let subject = new describedClass({
        renderOutput: 'console',
        columns: 3,
        rows: 3
      });
      subject.seedCells(
        '.*.\n' +
        '*.*\n' +
        '.*.\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '.*.\n' +
        '*.*\n' +
        '.*.\n'
      );
      done();
    });
  });


  describe('oscillators patterns', function () {
    it('blinker', function (done) {
      let subject = new describedClass({
        renderOutput: 'console',
        columns: 3,
        rows: 3
      });
      subject.seedCells(
        '.*.\n' +
        '.*.\n' +
        '.*.\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '...\n' +
        '***\n' +
        '...\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '.*.\n' +
        '.*.\n' +
        '.*.\n'
      );
      done();
    });

    it('toad', function (done) {
      let subject = new describedClass({
        renderOutput: 'console',
        columns: 4,
        rows: 4
      });
      subject.seedCells(
        '....\n' +
        '.***\n' +
        '***.\n' +
        '....\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '..*.\n' +
        '*..*\n' +
        '*..*\n' +
        '.*..\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '....\n' +
        '.***\n' +
        '***.\n' +
        '....\n'
      );
      done();
    });

    it('beacon', function (done) {
      let subject = new describedClass({
        renderOutput: 'console',
        columns: 4,
        rows: 4
      });
      subject.seedCells(
        '**..\n' +
        '**..\n' +
        '..**\n' +
        '..**\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '**..\n' +
        '*...\n' +
        '...*\n' +
        '..**\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '**..\n' +
        '**..\n' +
        '..**\n' +
        '..**\n'
      );
      done();
    });

    it('pulsar', function (done) {
      let subject = new describedClass({
        renderOutput: 'console',
        columns: 15,
        rows: 15
      });
      subject.seedCells(
        '...............\n' +
        '...***...***...\n' +
        '...............\n' +
        '.*....*.*....*.\n' +
        '.*....*.*....*.\n' +
        '.*....*.*....*.\n' +
        '...***...***...\n' +
        '...............\n' +
        '...***...***...\n' +
        '.*....*.*....*.\n' +
        '.*....*.*....*.\n' +
        '.*....*.*....*.\n' +
        '...............\n' +
        '...***...***...\n' +
        '...............\n'
      );

      subject.updateCells();
      expect(subject.render()).toEqual(
        '....*.....*....\n' +
        '....*.....*....\n' +
        '....**...**....\n' +
        '...............\n' +
        '***..**.**..***\n' +
        '..*.*.*.*.*.*..\n' +
        '....**...**....\n' +
        '...............\n' +
        '....**...**....\n' +
        '..*.*.*.*.*.*..\n' +
        '***..**.**..***\n' +
        '...............\n' +
        '....**...**....\n' +
        '....*.....*....\n' +
        '....*.....*....\n'
      );

      subject.updateCells();
      expect(subject.render()).toEqual(
        '...............\n' +
        '...**.....**...\n' +
        '....**...**....\n' +
        '.*..*.*.*.*..*.\n' +
        '.***.**.**.***.\n' +
        '..*.*.*.*.*.*..\n' +
        '...***...***...\n' +
        '...............\n' +
        '...***...***...\n' +
        '..*.*.*.*.*.*..\n' +
        '.***.**.**.***.\n' +
        '.*..*.*.*.*..*.\n' +
        '....**...**....\n' +
        '...**.....**...\n' +
        '...............\n'
      );

      subject.updateCells();
      expect(subject.render()).toEqual(
        '...............\n' +
        '...***...***...\n' +
        '...............\n' +
        '.*....*.*....*.\n' +
        '.*....*.*....*.\n' +
        '.*....*.*....*.\n' +
        '...***...***...\n' +
        '...............\n' +
        '...***...***...\n' +
        '.*....*.*....*.\n' +
        '.*....*.*....*.\n' +
        '.*....*.*....*.\n' +
        '...............\n' +
        '...***...***...\n' +
        '...............\n'
      );
      done();
    });

    it('pentadecathlon', function (done) {
      let subject = new describedClass({
        renderOutput: 'console',
        columns: 9,
        rows: 16
      });
      subject.seedCells(
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '...***...\n' +
        '...*.*...\n' +
        '...***...\n' +
        '...***...\n' +
        '...***...\n' +
        '...***...\n' +
        '...*.*...\n' +
        '...***...\n' +
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '.........\n'
      );

      subject.updateCells();
      expect(subject.render()).toEqual(
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '....*....\n' +
        '...*.*...\n' +
        '..*...*..\n' +
        '..*...*..\n' +
        '..*...*..\n' +
        '..*...*..\n' +
        '..*...*..\n' +
        '..*...*..\n' +
        '...*.*...\n' +
        '....*....\n' +
        '.........\n' +
        '.........\n' +
        '.........\n'
      );

      subject.updateCells();
      expect(subject.render()).toEqual(
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '....*....\n' +
        '...***...\n' +
        '..**.**..\n' +
        '.***.***.\n' +
        '.***.***.\n' +
        '.***.***.\n' +
        '.***.***.\n' +
        '..**.**..\n' +
        '...***...\n' +
        '....*....\n' +
        '.........\n' +
        '.........\n' +
        '.........\n'
      );

      subject.updateCells();
      expect(subject.render()).toEqual(
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '...***...\n' +
        '..*...*..\n' +
        '.*.....*.\n' +
        '.........\n' +
        '*.......*\n' +
        '*.......*\n' +
        '.........\n' +
        '.*.....*.\n' +
        '..*...*..\n' +
        '...***...\n' +
        '.........\n' +
        '.........\n' +
        '.........\n'
      );

      subject.updateCells();
      expect(subject.render()).toEqual(
        '.........\n' +
        '.........\n' +
        '....*....\n' +
        '...***...\n' +
        '..*****..\n' +
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '..*****..\n' +
        '...***...\n' +
        '....*....\n' +
        '.........\n' +
        '.........\n'
      );

      subject.updateCells();
      expect(subject.render()).toEqual(
        '.........\n' +
        '.........\n' +
        '...***...\n' +
        '..*...*..\n' +
        '..*...*..\n' +
        '...***...\n' +
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '...***...\n' +
        '..*...*..\n' +
        '..*...*..\n' +
        '...***...\n' +
        '.........\n' +
        '.........\n'
      );

      subject.updateCells();
      expect(subject.render()).toEqual(
        '.........\n' +
        '....*....\n' +
        '...***...\n' +
        '..*.*.*..\n' +
        '..*.*.*..\n' +
        '...***...\n' +
        '....*....\n' +
        '.........\n' +
        '.........\n' +
        '....*....\n' +
        '...***...\n' +
        '..*.*.*..\n' +
        '..*.*.*..\n' +
        '...***...\n' +
        '....*....\n' +
        '.........\n'
      );

      subject.updateCells();
      expect(subject.render()).toEqual(
        '.........\n' +
        '...***...\n' +
        '.........\n' +
        '..*...*..\n' +
        '..*...*..\n' +
        '.........\n' +
        '...***...\n' +
        '.........\n' +
        '.........\n' +
        '...***...\n' +
        '.........\n' +
        '..*...*..\n' +
        '..*...*..\n' +
        '.........\n' +
        '...***...\n' +
        '.........\n'
      );

      subject.updateCells();
      expect(subject.render()).toEqual(
        '....*....\n' +
        '....*....\n' +
        '...***...\n' +
        '.........\n' +
        '.........\n' +
        '...***...\n' +
        '....*....\n' +
        '....*....\n' +
        '....*....\n' +
        '....*....\n' +
        '...***...\n' +
        '.........\n' +
        '.........\n' +
        '...***...\n' +
        '....*....\n' +
        '....*....\n'
      );

      subject.updateCells();
      expect(subject.render()).toEqual(
        '.........\n' +
        '.........\n' +
        '...***...\n' +
        '....*....\n' +
        '....*....\n' +
        '...***...\n' +
        '.........\n' +
        '...***...\n' +
        '...***...\n' +
        '.........\n' +
        '...***...\n' +
        '....*....\n' +
        '....*....\n' +
        '...***...\n' +
        '.........\n' +
        '.........\n'
      );

      subject.updateCells();
      expect(subject.render()).toEqual(
        '.........\n' +
        '....*....\n' +
        '...***...\n' +
        '.........\n' +
        '.........\n' +
        '...***...\n' +
        '.........\n' +
        '...*.*...\n' +
        '...*.*...\n' +
        '.........\n' +
        '...***...\n' +
        '.........\n' +
        '.........\n' +
        '...***...\n' +
        '....*....\n' +
        '.........\n'
      );

      subject.updateCells();
      expect(subject.render()).toEqual(
        '.........\n' +
        '...***...\n' +
        '...***...\n' +
        '....*....\n' +
        '....*....\n' +
        '....*....\n' +
        '...*.*...\n' +
        '.........\n' +
        '.........\n' +
        '...*.*...\n' +
        '....*....\n' +
        '....*....\n' +
        '....*....\n' +
        '...***...\n' +
        '...***...\n' +
        '.........\n'
      );

      subject.updateCells();
      expect(subject.render()).toEqual(
        '....*....\n' +
        '...*.*...\n' +
        '.........\n' +
        '.........\n' +
        '...***...\n' +
        '...***...\n' +
        '....*....\n' +
        '.........\n' +
        '.........\n' +
        '....*....\n' +
        '...***...\n' +
        '...***...\n' +
        '.........\n' +
        '.........\n' +
        '...*.*...\n' +
        '....*....\n'
      );

      subject.updateCells();
      expect(subject.render()).toEqual(
        '....*....\n' +
        '....*....\n' +
        '.........\n' +
        '....*....\n' +
        '...*.*...\n' +
        '.........\n' +
        '...***...\n' +
        '.........\n' +
        '.........\n' +
        '...***...\n' +
        '.........\n' +
        '...*.*...\n' +
        '....*....\n' +
        '.........\n' +
        '....*....\n' +
        '....*....\n'
      );

      subject.updateCells();
      expect(subject.render()).toEqual(
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '....*....\n' +
        '....*....\n' +
        '...*.*...\n' +
        '....*....\n' +
        '....*....\n' +
        '....*....\n' +
        '....*....\n' +
        '...*.*...\n' +
        '....*....\n' +
        '....*....\n' +
        '.........\n' +
        '.........\n' +
        '.........\n'
      );

      subject.updateCells();
      expect(subject.render()).toEqual(
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '...***...\n' +
        '...*.*...\n' +
        '...***...\n' +
        '...***...\n' +
        '...***...\n' +
        '...***...\n' +
        '...*.*...\n' +
        '...***...\n' +
        '.........\n' +
        '.........\n' +
        '.........\n' +
        '.........\n'
      );
      done();
    });
  });

  describe('spaceship patterns', function () {
    it('glider', function (done) {
      let subject = new describedClass({
        renderOutput: 'console',
        columns: 4,
        rows: 4
      });
      subject.seedCells(
        '.*..\n' +
        '..*.\n' +
        '***.\n' +
        '....\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '....\n' +
        '*.*.\n' +
        '.**.\n' +
        '.*..\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '....\n' +
        '..*.\n' +
        '*.*.\n' +
        '.**.\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '....\n' +
        '.*..\n' +
        '..**\n' +
        '.**.\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '....\n' +
        '..*.\n' +
        '...*\n' +
        '.***\n'
      );
      done();
    });

    it('lightweight spaceship', function (done) {
      let subject = new describedClass({
        renderOutput: 'console',
        columns: 7,
        rows: 5
      });
      subject.seedCells(
        '.**....\n' +
        '****...\n' +
        '**.**..\n' +
        '..**...\n' +
        '.......\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '*..*...\n' +
        '....*..\n' +
        '*...*..\n' +
        '.****..\n' +
        '.......\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '.......\n' +
        '...**..\n' +
        '.**.**.\n' +
        '.****..\n' +
        '..**...\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '.......\n' +
        '..****.\n' +
        '.*...*.\n' +
        '.....*.\n' +
        '.*..*..\n'
      );
      subject.updateCells();
      expect(subject.render()).toEqual(
        '...**..\n' +
        '..****.\n' +
        '..**.**\n' +
        '....**.\n' +
        '.......\n'
      );
      done();
    });
  });
});
