export type DeepReadonly<T> = keyof T extends never
  ? T
  : {
      readonly [U in keyof T]: DeepReadonly<T[U]>;
    };
