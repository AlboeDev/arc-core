import Component from './component';

describe('Component#unit', () => {
  let component;

  beforeEach(() => {
    component = new Component();
  });

  describe('#id', () => {
    it('should have a \'id\' property', () => {
      expect.assertions(1);

      expect(component).toHaveProperty('id');
    });

    it('should have an \'id\' property of type \'string\'', () => {
      expect.assertions(1);

      expect(typeof component.id).toBe('string');
    });
  });

  describe('#type', () => {
    it('should have a \'type\' property', () => {
      expect.assertions(1);

      expect(component).toHaveProperty('type');
    });

    it('should have a \'type\' property of type \'string\'', () => {
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
