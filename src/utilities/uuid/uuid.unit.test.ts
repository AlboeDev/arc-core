import uuid from './uuid';

describe('uuid()#unit', () => {
  it('should generate a string', () => {
    expect.assertions(1);

    expect(typeof uuid()).toStrictEqual('string');
  });

  it('should generate a string of 36 characters', () => {
    expect.assertions(1);

    expect(uuid()).toHaveLength(36);
  });

  it('should generate a unique string', () => {
    expect.assertions(1);

    expect(uuid()).not.toStrictEqual(uuid());
  });
});
