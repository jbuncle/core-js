import { accessSync, constants, existsSync } from "fs";

/**
 * Assertion error.
 */
export class AssertionError extends Error {
}

export const assertFileExists = (filepath: string): void => {
    if (!existsSync(filepath)) {
        throw new AssertionError(`Path '${filepath}' doesn't exist.`);
    }
}

export const assertFileWriteable = (filepath: string): void => {
    try {
        accessSync(filepath, constants.W_OK);
    } catch (e: unknown) {
        throw new Error(`Can't write to path '${filepath}'`);
    }
}

