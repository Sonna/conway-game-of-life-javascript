const describedClass = require('../../../lib/components/Board');

describe('Board component', function () {
  describe('properties', function () {
    const subject = new describedClass();

    it('props', function(done) {
      expect(subject.props).toEqual(jasmine.any(Object));
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
        '<g class="board" stroke="black" stroke-width="1" fill="black"><g class="row"></g></g>'
      );
      done();
    });
  });

  describe('render when initialized and small', function () {
    let subject = new describedClass({
      columns: 2,
      rows: 2
    });

    beforeAll(function () {
      subject.initializeCells();
    });

    it('render default outerHTML', function (done) {
      expect(subject.render().outerHTML).toEqual(
        '<g class="board" stroke="black" stroke-width="1" fill="black">' +
          '<g class="row">' +
            '<rect class="cell dead" rx="0" ry="0" x="0" y="0" width="10" height="10"></rect>' +
            '<rect class="cell dead" rx="0" ry="0" x="10" y="0" width="10" height="10"></rect>' +
          '</g>' +
          '<g class="row">' +
            '<rect class="cell dead" rx="0" ry="0" x="0" y="10" width="10" height="10"></rect>' +
            '<rect class="cell dead" rx="0" ry="0" x="10" y="10" width="10" height="10"></rect>' +
          '</g>' +
        '</g>'
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

    beforeAll(function () {
      subject.initializeCells();
    });

    it('render String', function (done) {
      expect(subject.render()).toEqual(
        '..\n' +
        '..'
      );
      done();
    });
  });
});
