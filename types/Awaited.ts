export type Awaited<P extends Promise<any>> = P extends Promise<infer T>
  ? T extends Promise<any>
    ? Awaited<T>
    : T
  : P;
