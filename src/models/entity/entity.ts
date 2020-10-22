import ArcObject from '../arc-object/arc-object';
import Component from '../component/component';

/**
 * Entity class.
 *
 * @remarks
 * The root abstract component class.
 */
export default class Entity extends ArcObject {
  /**
   * The Components that belong to this Entity.
   */
  public components: Record<string, Component>;

  /**
   * Construct a new Entity.
   */
  public constructor() {
    super();

    this.components = {};
  }

  /**
   * Load Components into this Entity.
   *
   * @param components - Components to attempt to load.
   * @returns - This Entity instance.
   */
  public loadComponents(...components: Array<Component>): this {
    components.forEach(
      (component: Component): void => {
        if (!this.components[component.type]) {
          this.components[component.type] = component;
        }
      },
    );

    return this;
  }

  /**
   * Unload Components from this Entity.
   *
   * @param components - Components to attempt to unload.
   * @returns - This Entity instance.
   */
  public unloadComponents(...components: Array<Component | string>): this {
    components.forEach(
      (component: Component): void => {
        if (this.components[component.type] === component) {
          delete this.components[component.type];
        }
      },
    );

    return this;
  }
}
