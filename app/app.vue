<script setup lang="ts">
import * as iconset from '#shared/iconset'
import type { ResolvableArray, ResolvableLink } from '@unhead/vue'

const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

const iconLinks: ResolvableArray<ResolvableLink> = iconset.linkedIcons.map(item => Object.assign({
  key: item.name,
  href: `/icons/${item.name}`
}, item.icon))

const fontLinks: ResolvableArray<ResolvableLink> = [
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossorigin: ''
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap'
  }
]

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: fontLinks.concat(iconLinks),
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  titleTemplate: '',
  ogSiteName: process.env.NUXT_SITE_NAME
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
