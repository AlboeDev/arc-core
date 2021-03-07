import Entity from '../entity/entity';

/**
 * The ECS Scene class.
 */
export default class Scene {
  /**
   * The id-indexed record of Entity instances belonging to this Scene.
   */
  public entities: Record<string, Entity>;

  /**
   * Construct a new Scene.
   */
  public constructor() {
    this.entities = {};
  }

  /**
   * Mount an Array of Entity instances to this Scene.
   * @param entities - Array of Entity instances to mount to this Scene.
   * @returns - This Scene.
   */
  public mount(...entities: Array<Entity>): this {
    entities.forEach(
      (entity: Entity): void => {
        if (this.entities[entity.id]) {
          // TODO - Perform logging.

          return;
        }

        this.entities[entity.id] = entity;
      },
    );

    return this;
  }

  /**
   * Mount an Array of Entity instances to this Scene.
   * @param entities - Array of Entity instances to mount to this Scene.
   * @returns - This Scene.
   */
  public unmount(...entities: Array<Entity>): this {
    entities.forEach(
      (entity: Entity): void => {
        if (this.entities[entity.id] !== entity) {
          // TODO - Perform logging.

          return;
        }

        delete this.entities[entity.id];
      },
    );

    return this;
  }
}
