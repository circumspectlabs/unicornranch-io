<script setup lang="ts">
import * as productConfig from '@/product.config'

defineOptions({
  inheritAttrs: false
})

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center text-center bg-slate-900 p-8">
    <div class="w-full relative">
      <div class="h-80 flex-row mx-auto">
        <NuxtImg
          class="w-80 h-full"
          src="/logo.svg"
        />
        <div class="h-80 flex-col">
          <h1
            class="text-100px mx-4 my-auto"
            :style="`color: ${productConfig.color.primary}`"
          >
            {{ productConfig.name }}
          </h1>
          <h1 class="text-8xl mx-4 text-white">
            {{ title }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
