import System from './system';

describe('System#unit', () => {
  let system;

  beforeEach(() => {
    system = new System();

    // Abstract method mocking.
    system.onTick = () => undefined;
  });

  describe('timing', () => {
    it('should have a \'timing\' property', () => {
      expect.assertions(1);

      expect(system).toHaveProperty('timing');
    });

    it('should have a \'timing\' property with property \'delta\'', () => {
      expect.assertions(1);

      expect(system.timing).toHaveProperty('delta');
    });

    it('should have a \'timing\' property with property \'last\'', () => {
      expect.assertions(1);

      expect(system.timing).toHaveProperty('last');
    });
  });

  describe('type', () => {
    it('should have a \'type\' property', () => {
      expect.assertions(1);

      expect(system).toHaveProperty('type');
    });

    it('should have a \'type\' property of type \'string\'', () => {
      expect.assertions(1);

      expect(typeof system.type).toBe('string');
    });

    it('should generate the type based on the constructor name', () => {
      expect.assertions(1);

      const constructorName = System.name;

      expect(system.type).toBe(constructorName);
    });
  });

  describe('calculateDelta()', () => {
    it('should return a \'number\'', () => {
      expect.assertions(1);

      expect(typeof system.calculateDelta()).toBe('number');
    });

    it('should update the \'timing.delta\' property', () => {
      expect.assertions(1);

      const before = system.timing.delta;

      system.calculateDelta();

      expect(system.timing.delta).not.toBe(before);
    });

    it('should update the \'timing.last\' property', () => {
      expect.assertions(1);

      const before = system.timing.last;

      system.calculateDelta();

      expect(system.timing.last).not.toBe(before);
    });
  });

  describe('process()', () => {
    it('should call \'calculateDelta()\' 1 time', () => {
      expect.assertions(1);

      const spy = jest.spyOn(system, 'calculateDelta');

      system.process();

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call \'onTick()\' 1 time', () => {
      expect.assertions(1);

      const spy = jest.spyOn(system, 'onTick');

      system.process();

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should return itself', () => {
      expect.assertions(1);

      expect(system.process()).toBe(system);
    });
  });
});
