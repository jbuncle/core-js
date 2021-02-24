

export const hasProperty = <S>(object: Record<string, S>, key: string): boolean => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return Object.prototype.hasOwnProperty.call(object, key);
}

export const applyDefault = <S>(object: Record<string, S>, key: string, value: S): void => {
    if (!hasProperty(object, key) || object[key] === undefined) {
        object[key] = value;
    }
}

export const applyDefaults = <S>(object: Record<string, S | undefined>, defaults: Record<string, S>): void => {
    for (const key in defaults) {
        const value: S = defaults[key];
        applyDefault(object, key, value);
    }
}

