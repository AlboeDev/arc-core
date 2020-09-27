import ArcObject from '../arc-object/arc-object';
import Component from '../component/component';
import ComponentFixture from '../component/component.fixture';
import Entity from './entity';

describe('Entity#integration', () => {
  let entity: Entity;

  beforeEach(() => {
    entity = new Entity();
  });

  describe('#constructor()', () => {
    it('should extend ArcObject', () => {
      expect.assertions(1);

      expect(entity).toBeInstanceOf(ArcObject);
    });
  });

  describe('#loadComponents()', () => {
    it('should load a single component', () => {
      expect.assertions(1);

      const component = new ComponentFixture();

      entity.loadComponents(component);

      expect(entity.components[component.type]).toBe(component);
    });

    it('should load multiple components', () => {
      expect.assertions(2);

      /**
       * Instance component fixture class for additional testing.
       *
       * @internal
       */
      class ComponentFixture2 extends Component {}

      const components = [
        new ComponentFixture(),
        new ComponentFixture2(),
      ];

      entity.loadComponents(...components);

      expect(entity.components[components[0].type]).toBe(components[0]);
      expect(entity.components[components[1].type]).toBe(components[1]);
    });

    it('should not load two of the same component', () => {
      expect.assertions(2);

      const components = [
        new ComponentFixture(),
        new ComponentFixture(),
      ];

      entity.loadComponents(...components);

      expect(entity.components[components[0].type]).toBe(components[0]);
      expect(Object.keys(entity.components)).toHaveLength(1);
    });
  });

  describe('#unloadComponents()', () => {
    let components: Array<Component>;

    /**
     * Instance component fixture class for additional testing.
     *
     * @internal
     */
    class ComponentFixture2 extends Component {}

    beforeEach(() => {
      components = [
        new ComponentFixture(),
        new ComponentFixture2(),
      ];

      entity.loadComponents(...components);
    });

    it('should unload a single component', () => {
      expect.assertions(2);

      entity.unloadComponents(components[0]);

      expect(entity.components).not.toHaveProperty(components[0].type);
      expect(entity.components).toHaveProperty(components[1].type);
    });

    it('should unload multiple components', () => {
      expect.assertions(2);

      entity.unloadComponents(...components);

      expect(entity.components).not.toHaveProperty(components[0].type);
      expect(entity.components).not.toHaveProperty(components[1].type);
    });

    it('should not unload a component that hasn\'t been mounted', () => {
      expect.assertions(2);

      /**
       * Instance component fixture class for additional testing.
       *
       * @internal
       */
      class ComponentFixture3 extends Component {}

      expect(Object.keys(entity.components)).toHaveLength(2);

      entity.unloadComponents(new ComponentFixture3());

      expect(Object.keys(entity.components)).toHaveLength(2);
    });
  });
});
