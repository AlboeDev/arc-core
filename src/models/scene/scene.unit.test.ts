import Scene from './scene';

describe('Scene#unit', () => {
  let scene: Scene;

  beforeEach(() => {
    scene = new Scene();
  });

  describe('#entities', () => {
    it('should have an \'entities\' property', () => {
      expect.assertions(1);

      expect(scene).toHaveProperty('entities');
    });

    it('should have an \'entities\' property of type \'object\'', () => {
      expect.assertions(1);

      expect(typeof scene.entities).toBe('object');
    });
  });
});
