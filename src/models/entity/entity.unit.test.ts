import Entity from './entity';

describe('Entity#unit', () => {
  let entity: Entity;

  beforeEach(() => {
    entity = new Entity();
  });

  describe('#id', () => {
    it('should have a \'id\' property', () => {
      expect.assertions(1);

      expect(entity).toHaveProperty('id');
    });

    it('should have an \'id\' property of type \'string\'', () => {
      expect.assertions(1);

      expect(typeof entity.id).toBe('string');
    });
  });

  describe('#components', () => {
    it('should have a \'components\' property', () => {
      expect.assertions(1);

      expect(entity).toHaveProperty('components');
    });

    it('should have a \'components\' property of type \'object\'', () => {
      expect.assertions(1);

      expect(typeof entity.components).toBe('object');
    });
  });
});
