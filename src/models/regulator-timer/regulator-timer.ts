/**
 * Regulator class.
 *
 * @remarks
 * The timing regulation class.
 */
export default class RegulatorTimer {
  /**
   * The delta time of the RegulatorTimer instance once stopped.
   */
  protected timeDelta: number;

  /**
   * The delta time, in seconds, of the RegulatorTimer instance once stopped.
   */
  protected timeDeltaSeconds: number;

  /**
   * The ending time of the RegulatorTimer instance once stopped.
   */
  protected timeEnd: number;

  /**
   * The starting time of the RegulatorTimer instance once started.
   */
  protected timeStart: number;

  /**
   * Construct a new RegulatorTimer.
   */
  public constructor() {
    this.timeDelta = 0;
    this.timeDeltaSeconds = 0;
    this.timeEnd = 0;
    this.timeStart = 0;
  }

  /**
   * The current delta time between the starting time and the ending time.
   *
   * @returns - The delta time.
   */
  public get delta(): number {
    return this.timeDelta;
  }

  /**
   * The current delta time, in seconds, between the starting time and ending time.
   *
   * @returns - The delta time in seconds.
   */
  public get deltaSeconds(): number {
    return this.timeDeltaSeconds;
  }

  /**
   * Calculate the delta values for this RegulatorTimer instance.
   */
  protected calculateDeltas(): void {
    this.timeDelta = this.timeEnd - this.timeStart;
    this.timeDeltaSeconds = this.timeDelta * 1000;
  }

  /**
   * Set the start time and return the current performance time for this RegulatorTimer.
   *
   * @returns - The performance starting time.
   */
  public start(): number {
    this.timeStart = window.performance.now();

    return this.timeStart;
  }

  /**
   * Set the end time, calculate the deltas, and return the current performance time for this
   * RegulatorTimer.
   *
   * @returns - The performance stopping time.
   */
  public stop(): number {
    this.timeEnd = window.performance.now();

    this.calculateDeltas();

    return this.timeEnd;
  }
}
