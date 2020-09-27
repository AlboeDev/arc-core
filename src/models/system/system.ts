import ArcObject from '../arc-object/arc-object';

/**
 * System class.
 *
 * @remarks
 * The root system object for mutating Entities and Components.
 */
export default abstract class System extends ArcObject {
  public readonly type: string;

  /**
   * Construct a new System.
   */
  public constructor() {
    super();

    this.type = this.constructor.name;
  }
}
