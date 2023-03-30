import { App, isVue2, Plugin } from "vue-demi";
import { createPubsub } from "./pubsub";
import { Pubsub, Channels, PluginOptions } from "./types";
import { PluginSymbol } from "./symbols";

export function PubsubPlugin(): Plugin {
  return {
    install: (app: App, options?: PluginOptions) => {
      const instance = createPubsub<Channels>();

      app.provide(PluginSymbol, instance);

      if (isVue2) app.config.globalProperties.$pubsub = instance;
    },
  };
}

export * from "./use";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $pubsub: Pubsub;
    pubsub: Pubsub;
  }
}
