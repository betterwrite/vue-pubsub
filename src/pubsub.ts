import { HandlerCallback, Channels, Pubsub } from "./types";

export function createPubsub<T extends Channels = {}>(): Pubsub<T> {
  const data = new Map<keyof T, HandlerCallback<T>[]>();

  return {
    data,
    on<_T extends keyof T>(key: _T, callback: HandlerCallback<T>) {
      const target: HandlerCallback<T>[] | undefined = data.get(key);

      target ? target.push(callback) : data.set(key, [callback]);
    },
    to<_T extends keyof T>(key: _T, event: Channels[keyof Channels]) {
      const target = data.get(key);

      const calls = [...(target ?? [])];
      calls?.map((handler) => {
        handler(event);
      });
    },
  };
}
