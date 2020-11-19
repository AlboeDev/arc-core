import ArcObject from '../arc-object/arc-object';
import System from '../system/system';
import Entity from '../entity/entity';
import defaultConfig, { CoreConfig } from './core.config';
import state, { CoreState } from './core.state';

/**
 * Core class.
 *
 * @remarks
 * The encapsulating core object that handles Entities, Components, and Systems.
 */
export default class Core extends ArcObject {
  protected config: CoreConfig;

  public entities: Array<Entity>;

  public systems: Record<string, System>;

  public state: CoreState;

  /**
   * Construct a new Core.
   *
   * @param config - The configuration for this Core instance.
   */
  public constructor(config: CoreConfig) {
    super();

    this.config = {
      ...defaultConfig,
      ...config,
    };

    this.state = { ...state };

    this.systems = {};
    this.entities = [];
  }

  /**
   * Load Entities into this Core.
   *
   * @param entities - Entities to attempt to load.
   * @returns - This Core Instance.
   */
  public loadEntities(...entities: Array<Entity>): this {
    entities.forEach(
      (entity: Entity): void => {
        if (!this.entities.includes(entity)) {
          this.entities.push(entity);
        }
      },
    );

    return this;
  }

  /**
   * Load Systems into this Core.
   *
   * @param systems - Systems to attempt to load.
   * @returns - This Core instance.
   */
  public loadSystems(...systems: Array<System>): this {
    systems.forEach(
      (system: System): void => {
        if (!this.systems[system.type]) {
          this.systems[system.type] = system;
        }
      },
    );

    return this;
  }

  /**
   * Unload Entities from this Core.
   *
   * @param entities - Entities to attempt to unload.
   * @returns - This Core instance.
   */
  public unloadEntities(...entities: Array<Entity>): this {
    entities.forEach(
      (entity: Entity): void => {
        if (this.entities.includes(entity)) {
          this.entities.splice(this.entities.indexOf(entity), 1);
        }
      },
    );

    return this;
  }

  /**
   * Unload Systems from this Core.
   *
   * @param systems - Systems to attempt to unload.
   * @returns - This Core instance.
   */
  public unloadSystems(...systems: Array<System>): this {
    systems.forEach(
      (system: System): void => {
        if (this.systems[system.type] === system) {
          delete this.systems[system.type];
        }
      },
    );

    return this;
  }

  /**
   * Start the process cycle for this Core instance.
   *
   * @returns - This Core instance.
   */
  public start(): this {
    if (!this.state.active) {
      this.state.active = true;

      this.state.previousTime = performance.now();

      this.process();
    }

    return this;
  }

  /**
   * Stop the process cycle for this Core instance.
   *
   * @returns - This Core instance.
   */
  public stop(): this {
    if (this.state.active) {
      this.state.active = false;
    }

    return this;
  }

  /**
   * Calculate the delta between frames and update timers.
   */
  protected calculateDelta(): void {
    this.state.currentTime = performance.now();
    this.state.deltaTime = this.state.currentTime - this.state.previousTime;
    this.state.previousTime = this.state.currentTime;
    this.state.delta = this.state.deltaTime / 1000;
  }

  /**
   * Trigger System process methods on the Systems of this Core instance.
   */
  protected processSystems(): void {
    Object.keys(this.systems).forEach(
      (type: string): void => {
        this.systems[type].process(this.state.delta, this.entities);
      },
    );
  }

  /**
   * Prepare the next frame/tick for processing on this Core instance.
   */
  protected prepareNextProcess(): void {
    clearTimeout(this.state.frameTimer);

    if (this.state.active) {
      this.state.frameTimer = setTimeout(() => {
        this.process();
      }, 0);
    }
  }

  /**
   * Process a frame/tick on this Core instance.
   */
  protected process(): void {
    this.calculateDelta();
    this.processSystems();
    this.prepareNextProcess();
  }
}
