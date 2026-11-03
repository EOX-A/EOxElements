declare class QueueArray<T> {
    protected _size: number;
    protected _array: T[];
    protected _popIndex: number;
    protected _shiftIndex: number;
    length: number;
    constructor(size?: number);
    reset(): void;
    clear(): void;
    push(data: T): void;
    pop(): T | undefined;
    unshift(data: T): void;
    shift(): T | undefined;
    forEach(callback: (el: T) => void): void;
}
export { QueueArray };
