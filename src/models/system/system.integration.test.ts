import ArcObject from '../arc-object/arc-object';
import System from './system.fixture';

describe('System#integration', () => {
  let system: System;

  beforeEach(() => {
    system = new System();
  });

  describe('#constructor()', () => {
    it('should extend ArcObject', () => {
      expect.assertions(1);

      expect(system).toBeInstanceOf(ArcObject);
    });
  });
});
