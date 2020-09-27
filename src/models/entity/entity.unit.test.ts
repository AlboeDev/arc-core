import Entity from './entity';

describe('Entity#unit', () => {
  let entity: Entity;

  beforeEach(() => {
    entity = new Entity();
  });

  describe('#components', () => {
    it('should have a component property', () => {
      expect.assertions(1);

      expect(entity).toHaveProperty('components');
    });

    it('shoudl have a components property of type object', () => {
      expect.assertions(1);

      expect(typeof entity.components).toBe('object');
    });
  });
});
