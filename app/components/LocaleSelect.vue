<script>

</script>

<script setup>
import USelectMenu from '@nuxt/ui/components/SelectMenu.vue'

defineProps({
  locales: { type: Array, required: false }
})

const modelValue = defineModel({ type: String })
</script>

<template>
  <USelectMenu
    v-model="modelValue"
    :search-input="false"
    value-key="code"
    label-key="name"
    class="pl-4"
    :items="locales"
  />
</template>
