<script setup lang="ts">
import * as productConfig from '@/product.config'

defineOptions({
  inheritAttrs: true
})
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center text-center bg-slate-900 p-8">
    <div class="w-full relative">
      <div class="h-80 flex-row">
        <NuxtImg
          class="w-80 h-full mx-auto"
          src="/logo.svg"
        />
        <h1
          class="text-100px mx-4 my-auto"
          :style="`color: ${productConfig.color.primary}`"
        >
          {{ productConfig.name }}
        </h1>
      </div>
    </div>
  </div>
</template>
