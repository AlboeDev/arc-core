import System from './system.fixture';

describe('System#unit', () => {
  let system: System;

  beforeEach(() => {
    system = new System();
  });

  describe('#type', () => {
    it('should have a type property', () => {
      expect.assertions(1);

      expect(system).toHaveProperty('type');
    });

    it('should have a type property of type string', () => {
      expect.assertions(1);

      expect(typeof system.type).toBe('string');
    });

    it('should generate teh type based on the constructor name', () => {
      expect.assertions(1);

      const constructorName = System.name;

      expect(system.type).toBe(constructorName);
    });
  });
});
