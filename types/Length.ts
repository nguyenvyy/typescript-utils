export type Length<T extends any> = T extends { length: infer Length }
  ? Length
  : 0;
