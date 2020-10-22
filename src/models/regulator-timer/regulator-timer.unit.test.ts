import RegulatorTimer from './regulator-timer';

describe('RegulatorTimer#unit', () => {
  let regulatorTimer: RegulatorTimer;

  beforeEach(() => {
    regulatorTimer = new RegulatorTimer();
  });

  describe('#delta', () => {
    it('should be "0" upon initialization', () => {
      expect.assertions(1);

      expect(regulatorTimer.delta).toBe(0);
    });

    it('should be the delta time once the RegulatorTimer has been started and stopped', () => {
      expect.assertions(1);

      const start = regulatorTimer.start();
      const end = regulatorTimer.stop();
      const delta = end - start;

      expect(regulatorTimer.delta).toBe(delta);
    });
  });

  describe('#deltaSeconds', () => {
    it('should be "0" upon initialization', () => {
      expect.assertions(1);

      expect(regulatorTimer.deltaSeconds).toBe(0);
    });

    it('should be the delta time, in seconds, once the RegulatorTimer has been started and stopped', () => {
      expect.assertions(1);

      const start = regulatorTimer.start();
      const end = regulatorTimer.stop();
      const deltaSeconds = (end - start) * 1000;

      expect(regulatorTimer.deltaSeconds).toBe(deltaSeconds);
    });
  });

  describe('#start()', () => {
    it('should return a timestamp', () => {
      expect.assertions(1);

      expect(regulatorTimer.start()).toBeGreaterThan(0);
    });
  });

  describe('#stop()', () => {
    it('should return a timestamp', () => {
      expect.assertions(1);

      expect(regulatorTimer.stop()).toBeGreaterThan(0);
    });

    it('should assign a value to the RegulatorTimer.delta instance property', () => {
      expect.assertions(2);

      expect(regulatorTimer.delta).toBe(0);

      regulatorTimer.stop();

      expect(regulatorTimer.delta).toBeGreaterThan(0);
    });

    it('should assign a value to the RegulatorTimer.deltaSeconds instance property', () => {
      expect.assertions(2);

      expect(regulatorTimer.deltaSeconds).toBe(0);

      regulatorTimer.stop();

      expect(regulatorTimer.deltaSeconds).toBeGreaterThan(0);
    });
  });
});
