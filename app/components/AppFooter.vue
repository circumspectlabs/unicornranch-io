<script setup lang="ts">
const route = useRoute()

const { t } = useI18n({
  useScope: 'local'
})

const items = computed(() => [
  {
    label: t('__label_framework'),
    to: '/framework',
    active: route.path.startsWith('/framework')
  },
  {
    label: t('__label_product'),
    to: '/',
    active: /^\/(#|$)/.test(route.path) && (route.hash != '#howitworks')
  },
  {
    label: t('__label_how_it_works'),
    to: '/#howitworks',
    active: /^\/(#|$)/.test(route.path) && (route.hash == '#howitworks')
  },
  {
    label: t('__label_pricing'),
    to: '/pricing',
    active: route.path.startsWith('/pricing')
  },
  {
    label: t('__label_faq'),
    to: '/faq',
    active: route.path.startsWith('/faq')
  }
])
</script>

<template>
  <USeparator
    class="h-px"
  />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooter>
          <template #left>
            <UNavigationMenu
              :items="items"
              variant="link"
            />
          </template>
          <template #right>
            <SubscribeForm />
          </template>
        </UFooter>
      </UContainer>
    </template>

    <template #left>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </template>

    <template #right>
      <UColorModeButton />
    </template>
  </UFooter>
</template>

<i18n lang="yaml">
en:
  __label_framework: Framework
  __label_product: Product
  __label_how_it_works: How It Works
  __label_pricing: Pricing
  __label_faq: FAQ
de:
  __label_framework: Framework
  __label_product: Produkt
  __label_how_it_works: Wie Functioniert Es
  __label_pricing: Preise
  __label_faq: FAQ
</i18n>
