import { accessSync, constants, existsSync, lstatSync } from "fs";

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

export const assertPathIsDir = (dir: string): void => {
    if (!lstatSync(dir).isDirectory()) {
        throw new AssertionError(`Path '${dir}' is not a directory`);
    }
}

export const assertPathWriteable = (path: string): void => {
    try {
        accessSync(path, constants.W_OK);
    } catch (e: unknown) {
        throw new Error(`Can't write to path '${path}'`);
    }
}

