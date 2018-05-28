const describedClass = require('../../../lib/components/Cell');

describe('Cell component', function () {
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

    it('render default outerHTML', function (done) {
      expect(subject.render().outerHTML).toEqual(
        '<rect class="cell dead" rx="0" ry="0" x="0" y="0" width="10" height="10"></rect>'
      );
      done();
    });
  });

  describe('render when alive', function () {
    let subject = new describedClass({
      alive: true
    });

    it('render default outerHTML', function (done) {
      expect(subject.render().outerHTML).toEqual(
        '<rect class="cell alive" rx="0" ry="0" x="0" y="0" width="10" height="10"></rect>'
      );
      done();
    });
  });
});
