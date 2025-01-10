type TargetContext = "_self" | "_blank";
type EmitType = (event: string, ...args: any[]) => void;
type AnyFunction<T> = (...args: any[]) => T;

type Writable<T> = {
  -readonly [P in keyof T]: T[P];
};
type Nullable<T> = T | null;

interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}
interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>;
}

type Recordable<T = any> = Record<string, T>;

interface ViteEnv {
  VITE_USER_NODE_ENV: "development" | "production";
  VITE_PUBLIC_PATH: string;
  VITE_PORT: number;
}
