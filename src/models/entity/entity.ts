import { uuid } from '../../utilities';

import Component from '../component/component';

/**
 * The ECS Entity class.
 */
export default class Entity {
  /**
   * The type-indexed record of Components belonging to this Entity.
   */
  public components: Record<string, Component>;

  /**
   * The ID of this Entity.
   */
  public readonly id: string;

  /**
   * Construct a new Entity.
   */
  public constructor() {
    this.components = {};
    this.id = uuid();
  }

  /**
   * Mount an Array of Components to this Entity.
   * @param components - Array of Components to mount to this Entity.
   * @returns - This Entity.
   */
  public mount(...components: Array<Component>): this {
    components.forEach(
      (component: Component): void => {
        if (this.components[component.type]) {
          // TODO - Perform logging.

          return;
        }

        this.components[component.type] = component;
      },
    );

    return this;
  }

  /**
   * Unmount an Array of Components from this Entity.
   * @param components - Array of Components to unmount from this Entity.
   * @returns - This Entity.
   */
  public unmount(...components: Array<Component>): this {
    components.forEach(
      (component: Component): void => {
        if (this.components[component.type] !== component) {
          // TODO - Perform Logging

          return;
        }

        delete this.components[component.type];
      },
    );

    return this;
  }
}
