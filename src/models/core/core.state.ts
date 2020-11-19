export interface CoreState {
  /**
   * Whether or not the Core instance is active.
   */
  active: boolean;

  /**
   * The timestamp of the previous frame.
   */
  previousTime: number;

  /**
   * The delta time in seconds between frames.
   */
  delta: number;

  /**
   * The delta time between frames.
   */
  deltaTime: number;

  /**
   * The stored current time, updates per process tick.
   */
  currentTime: number;

  /**
   * The frame timer that triggers the next frame.
   */
  frameTimer?: ReturnType<typeof setTimeout>;
}

const coreStateDefaults: CoreState = {
  active: false,
  currentTime: 0,
  delta: 0,
  deltaTime: 0,
  previousTime: 0,
};

export default coreStateDefaults;
