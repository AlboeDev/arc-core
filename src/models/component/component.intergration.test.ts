import ArcObject from '../arc-object/arc-object';
import Component from './component.fixture';

describe('Component#integration', () => {
  let component: Component;

  beforeEach(() => {
    component = new Component();
  });

  describe('#constructor()', () => {
    it('should extend ArcObject', () => {
      expect.assertions(1);

      expect(component).toBeInstanceOf(ArcObject);
    });
  });
});
