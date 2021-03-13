import Scene from '../scene/scene';

import { Timing } from './system.types';

/**
 * The ECS System class.
 */
export default abstract class System {
  /**
   * The timing of ticks belonging to this System.
   */
  private timing: Timing;

  /**
   * The type of this system.
   */
  public readonly type: string;

  /**
   * Construct a new System.
   */
  public constructor() {
    this.timing = {
      delta: undefined,
      last: undefined,
    };

    this.type = this.constructor.name;
  }

  /**
   * Calculate the delta time between the last tick and now.
   * @returns - The delta time in milliseconds.
   */
  private calculateDelta(): number {
    this.timing.delta = (performance.now() - (this.timing.last || performance.now())) / 1000;
    this.timing.last = performance.now();

    return this.timing.delta;
  }

  /**
   * Process a Scene on this System.
   * @param scene - The Scene to process on this System.
   * @returns - This System.
   */
  public process(scene: Scene): this {
    this.onTick(scene, this.calculateDelta());

    return this;
  }

  /**
   * Process a Scene with the delta time between this tick and the previous tick.
   * @param scene - The Scene to process on this System.
   * @param delta - The delta time between the last tick and the current tick.
   */
  protected abstract onTick(scene: Scene, delta: number): void
}
