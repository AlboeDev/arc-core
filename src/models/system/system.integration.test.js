import Scene from '../scene/scene';

import System from './system';

describe('System#integration', () => {
  let scene;
  let system;

  beforeEach(() => {
    scene = new Scene();
    system = new System();

    // Abstract method mocking.
    system.onTick = () => undefined;
  });

  describe('process()', () => {
    it('should call \'onTick()\' with the provided \'scene\' and a generated \'delta\'', () => {
      expect.assertions(1);

      const spy = jest.spyOn(system, 'onTick');

      system.process(scene);

      const { delta } = system.timing;

      expect(spy).toHaveBeenCalledWith(scene, delta);
    });
  });
});
