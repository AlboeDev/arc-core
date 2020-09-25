import ArcObject from './arc-object';

describe('ArcObject#unit', () => {
  let arcObject: ArcObject;

  beforeEach(() => {
    arcObject = new ArcObject();
  });

  describe('#id', () => {
    it('should have an id property', () => {
      expect.assertions(1);

      expect(arcObject).toHaveProperty('id');
    });

    it('should have a id property of type string', () => {
      expect.assertions(1);

      expect(typeof arcObject.id).toBe('string');
    });

    it('should generate a unique id property', () => {
      expect.assertions(1);

      const otherArcObject = new ArcObject();

      expect(arcObject.id).not.toStrictEqual(otherArcObject.id);
    });
  });
});
