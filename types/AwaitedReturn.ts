// Get type of resolved value of async function
export type AsyncReturn<T> = T extends (...a: any) => infer R ? Awaited<R> : T;
