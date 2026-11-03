export declare class BaseWorker<T> {
    protected _sourceId: number;
    protected _source: Map<number, T>;
    protected _pendingQueue: T[];
    protected _numWorkers: number;
    protected _workerQueue: Worker[];
    constructor(numWorkers?: number, program?: any);
    check(): void;
    setProgram(program: any): void;
    make(data: T): void;
    protected _onMessage(e: MessageEvent): void;
    destroy(): void;
    get pendingQueue(): T[];
}
