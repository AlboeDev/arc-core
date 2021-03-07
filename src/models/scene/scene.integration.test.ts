import Entity from '../entity/entity';
import Scene from './scene';

describe('Scene#integration', () => {
  let entity1: Entity;
  let entity2: Entity;
  let scene: Scene;

  beforeEach(() => {
    entity1 = new Entity();
    entity2 = new Entity();
    scene = new Scene();
  });

  describe('#mount()', () => {
    it('should mount an Entity', () => {
      expect.assertions(1);

      scene.mount(entity1);

      expect(scene.entities[entity1.id]).toBe(entity1);
    });

    it('should mount multiple unique Entity instances', () => {
      expect.assertions(2);

      scene.mount(entity1, entity2);

      expect(scene.entities[entity1.id]).toBe(entity1);
      expect(scene.entities[entity2.id]).toBe(entity2);
    });
  });

  describe('#unmount()', () => {
    beforeEach(() => {
      scene.mount(entity1, entity2);
    });

    it('should unmount an Entity', () => {
      expect.assertions(1);

      scene.unmount(entity1);

      expect(scene.entities[entity1.id]).toBeUndefined();
    });

    it('should unmount multiple unique Entity instances', () => {
      expect.assertions(2);

      scene.unmount(entity1, entity2);

      expect(scene.entities[entity1.id]).toBeUndefined();
      expect(scene.entities[entity2.id]).toBeUndefined();
    });
  });
});
