import type { BinaryLike, Hash } from "crypto";
import { createHash } from "crypto";
import { existsSync, readFileSync } from "fs";


enum Algo {
    md5 = `md5`,
    sha1 = `sha1`,
}

const digest: (algo: Algo, value: BinaryLike) => string = (algo: Algo, value: BinaryLike): string => {
    const hash: Hash = createHash(algo);
    if (typeof value === `string`) {
        hash.update(value, `utf8`);
    } else {
        hash.update(value);
    }

    return hash.digest(`hex`);
}

const digestFile: (algo: Algo, filepath: string) => string | undefined = (algo: Algo, filepath: string): string | undefined => {
    if (!existsSync(filepath)) {
        return undefined;
    }
    const current: Buffer = readFileSync(filepath);
    return digest(algo, current);
}

export const sha1: (value: BinaryLike | string) => string = (value: BinaryLike | string): string => {
    return digest(Algo.sha1, value);
}

export const md5: (value: BinaryLike | string) => string = (value: BinaryLike | string): string => {
    return digest(Algo.md5, value);
}
export const md5sum: (filepath: string) => string | undefined = (filepath: string): string | undefined => {
    return digestFile(Algo.md5, filepath);
}


