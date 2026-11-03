declare class Node<T> {
    next: Node<T> | null;
    prev: Node<T> | null;
    data: T | null;
    constructor();
}
/**
 * @class Stack<T>
 * @param {number} [size=256] - Stack size
 */
declare class Stack<T> {
    protected _current: Node<T>;
    protected _head: Node<T>;
    constructor(size?: number);
    current(): Node<T>;
    push(data: T): void;
    pop(): T | null;
    popPrev(): T | null;
}
export { Stack };
