export type Transformation<T> = { [K in keyof T]: (a: T[K]) => T[K] };
