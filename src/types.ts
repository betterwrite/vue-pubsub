export interface Channels {
  [index: string]: unknown;
}

export interface PluginOptions {}

export type Handler<T = unknown> = (data: T) => void;
export type HandlerCallback<R> = Handler<Channels[keyof Channels]>;

export interface Pubsub<T extends Record<string, unknown> = {}> {
  data: Map<keyof T, HandlerCallback<T>[]>;
  on<_T extends keyof T>(key: _T, callback: HandlerCallback<T>): void;
  to<_T extends keyof T>(key: _T, callback: T[_T]): void;
}
