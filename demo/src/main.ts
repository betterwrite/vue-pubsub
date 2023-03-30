import { createApp } from 'vue'
import { PubsubPlugin } from 'vue-pubsub'
import App from './App.vue'

const app = createApp(App)

app.use(PubsubPlugin())
app.mount('#app')

declare module 'vue-pubsub' {
  interface Channels {
    hello: string
  }
}