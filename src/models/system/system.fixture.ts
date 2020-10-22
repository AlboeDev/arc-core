import Entity from '../entity/entity';
import System from './system';

/**
 * SystemFixture class.
 *
 * @remarks
 * The testing fixture class for System.
 *
 * @internal
 */
export default class SystemFixture extends System {
  // eslint-disable-next-line
  public process(delta: number, entities: Array<Entity>): void {}
}
