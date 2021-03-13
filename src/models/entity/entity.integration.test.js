import Component from '../component/component';
import Entity from './entity';

describe('Entity#integration', () => {
  let component;
  let entity;

  beforeEach(() => {
    component = new Component();
    entity = new Entity();
  });

  describe('mount()', () => {
    it('should mount a Component', () => {
      expect.assertions(1);

      entity.mount(component);

      expect(entity.components[component.type]).toBe(component);
    });

    it('should not mount a Component type that already exists on the Entity', () => {
      expect.assertions(1);

      const otherComponent = new Component();

      entity.mount(component);
      entity.mount(otherComponent);

      expect(entity.components[otherComponent.type]).not.toBe(otherComponent);
    });
  });

  describe('unmount()', () => {
    beforeEach(() => {
      entity.mount(component);
    });

    it('should unmount a Component', () => {
      expect.assertions(1);

      entity.unmount(component);

      expect(entity.components[component.type]).toBeUndefined();
    });

    it('should not unmount a Component that does not exist on the Entity', () => {
      expect.assertions(2);

      const otherComponent = new Component();

      entity.unmount(otherComponent);

      expect(entity.components[component.type]).toBe(component);
      expect(entity.components[otherComponent.type]).not.toBe(otherComponent);
    });
  });
});
