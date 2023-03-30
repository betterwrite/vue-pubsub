<template>
  <p>{{ hello }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePubsub } from 'vue-pubsub'

const hello = ref('Hello')

const pubsub = usePubsub()

pubsub.on('hello', (_hello) => {
  hello.value = _hello
})

setTimeout(() => {
  pubsub.to('hello', 'Hello from PubSub!')
}, 3000)
</script>