# Vue Pubsub

A Pubsub Plugin (or better Event Bus) for Vue, inspired in [mitt](https://github.com/developit/mitt)

### Use

`npm i vue-pubsub`

```typescript
import { createApp } from "vue";
import { PubsubPlugin } from "vue-pubsub";
import App from "./App.vue";

const app = createApp(App);

app.use(PubsubPlugin());
app.mount("#app");

// ...

import { usePubsub } from "vue-pubsub";

const pubsub = usePubsub();

pubsub.on("test", (data) => {
  console.log(data);
});

// in other .vue file / setup hook
pubsub.to("test", "Hello World!");
```

### Using with Typescript

You can declare custom channel types by:

```typescript
declare module "vue-pubsub" {
  interface Channels {
    test: string;
  }
}
```

> Vue inject() and provide() do not support generic types in same context. Better suggestions for this are welcome.
