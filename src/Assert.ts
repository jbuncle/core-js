import { accessSync, constants, existsSync } from "fs";

/**
 * Assertion error.
 */
export class AssertionError extends Error {
}

export const assertPathExists = (path: string): void => {
    if (!existsSync(path)) {
        throw new AssertionError(`Path '${path}' doesn't exist.`);
    }
}

export const assertPathWriteable = (path: string): void => {
    try {
        accessSync(path, constants.W_OK);
    } catch (e: unknown) {
        throw new Error(`Can't write to path '${path}'`);
    }
}

