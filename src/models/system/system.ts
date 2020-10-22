import ArcObject from '../arc-object/arc-object';
import Entity from '../entity/entity';

/**
 * System class.
 *
 * @remarks
 * The root system object for mutating Entities and Components.
 */
export default abstract class System extends ArcObject {
  /**
   * The type of this System.
   */
  public readonly type: string;

  /**
   * Construct a new System.
   */
  public constructor() {
    super();

    this.type = this.constructor.name;
  }

  /**
   * Process a collection of Entities with this System.
   *
   * @param entities - Entities to process by this System.
   */
  public abstract process(delta: number, entities: Array<Entity>): void
}
