import Component from './component.fixture';

describe('Component#unit', () => {
  let component: Component;

  beforeEach(() => {
    component = new Component();
  });

  describe('#type', () => {
    it('should have a type property', () => {
      expect.assertions(1);

      expect(component).toHaveProperty('type');
    });

    it('should have a type property of type string', () => {
      expect.assertions(1);

      expect(typeof component.type).toBe('string');
    });

    it('should generate the type based on the constructor name', () => {
      expect.assertions(1);

      const constructorName = Component.name;

      expect(component.type).toBe(constructorName);
    });
  });
});
