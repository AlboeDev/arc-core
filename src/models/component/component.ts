import ArcObject from '../arc-object/arc-object';

/**
 * Component class.
 *
 * @remarks
 * The root entity class.
 */
export default abstract class Component extends ArcObject {
  /**
   * The type of this Component.
   */
  public readonly type: string;

  /**
   * Construct a new Component.
   */
  public constructor() {
    super();

    this.type = this.constructor.name;
  }
}
