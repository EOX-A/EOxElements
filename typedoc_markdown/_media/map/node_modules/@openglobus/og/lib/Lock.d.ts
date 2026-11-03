declare class Lock {
    protected _lock: number;
    constructor();
    lock(key: Key): void;
    free(key: Key): void;
    isFree(): boolean;
    isLocked(): boolean;
}
declare class Key {
    static __counter__: number;
    protected __id: number;
    constructor();
    get id(): number;
}
export { Lock, Key };
