export type PartialReadonly<T, K extends keyof T> = {
  [U in Exclude<keyof T, K>]: T[U];
} & {
  readonly [U in K]: T[U];
};
