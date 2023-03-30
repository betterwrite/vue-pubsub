import { getCurrentInstance, inject } from "vue";
import { PluginSymbol } from "./symbols";
import { Channels, Pubsub } from "./types";

export function usePubsub(): Pubsub<Channels> {
  const instance = getCurrentInstance();

  if (!instance) {
    console.warn(
      "[VUE-PUBSUB] - Vue instance not exists. Hook is in setup() context?"
    );
  }

  const pubsub = inject(PluginSymbol);

  if (!pubsub) {
    throw new Error(
      "[VUE-PUBSUB] - The symbol was not provided. Is the plugin registered?"
    );
  }

  return pubsub as Pubsub<Channels>;
}
