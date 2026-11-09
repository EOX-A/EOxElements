/**
 * @typedef {import("@openglobus/og").Globe} Globe
 * @typedef {{ connect: () => (() => void), disconnect?: () => void }} GlobeSynchronization
 */

/** @type {WeakMap<Globe, GlobeSynchronization>} */
const synchronizations = new WeakMap();

/**
 * Registers reconnectable synchronization owned by a globe instance.
 *
 * @param {Globe} globe - The globe instance.
 * @param {() => (() => void)} connect - Starts synchronization and returns its disposer.
 */
export function registerGlobeSynchronization(globe, connect) {
  disposeGlobeSynchronization(globe);
  synchronizations.set(globe, { connect });
}

/**
 * Restores synchronization when an existing globe is reconnected.
 *
 * @param {Globe | null} globe - The globe instance, if initialized.
 */
export function connectGlobeSynchronization(globe) {
  const synchronization = globe && synchronizations.get(globe);
  if (synchronization && !synchronization.disconnect) {
    synchronization.disconnect = synchronization.connect();
  }
}

/**
 * Releases subscriptions and pending work while retaining reconnection state.
 *
 * @param {Globe | null} globe - The globe instance, if initialized.
 */
export function disconnectGlobeSynchronization(globe) {
  const synchronization = globe && synchronizations.get(globe);
  if (synchronization?.disconnect) {
    const disconnect = synchronization.disconnect;
    synchronization.disconnect = undefined;
    disconnect();
  }
}

/**
 * Permanently releases synchronization when leaving globe mode.
 *
 * @param {Globe | null} globe - The globe instance, if initialized.
 */
export function disposeGlobeSynchronization(globe) {
  disconnectGlobeSynchronization(globe);
  if (globe) synchronizations.delete(globe);
}
