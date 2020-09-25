import { uuid } from '../../utils/index';

/**
 * ArcObject class.
 *
 * @remarks
 * The root object for all models within ArcCore.
 *
 * @internal
 */
export default class ArcObject {
  protected uuid: string;

  /**
   * Construct a new ArcObject.
   */
  public constructor() {
    this.uuid = uuid();
  }

  /**
   * The unique identifier for this instance.
   *
   * @returns - The unique identifier.
   */
  get id(): string {
    return this.uuid;
  }
}
