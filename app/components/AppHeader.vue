<script setup lang="ts">
import * as uiLocales from '@nuxt/ui-pro/locale'
import type { Locale } from 'vue-i18n'
import * as productConfig from '@/product.config'

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

const { locales, setLocale, getLocaleCookie } = useI18n({
  useScope: 'global'
})
// @ts-expect-error ts-plugin(2345)
const locale = ref<Locale>(getLocaleCookie() ? getLocaleCookie() : 'en')
watch(locale, async (v, _) => {
  setLocale(v)
})
</script>

<template>
  <UHeader>
    <template #left>
      <BrandLogo
        class="h-12"
      />
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <UColorModeButton />

      <SignUpModal
        button="header_sign_up"
      />

      <LocaleSelect
        v-if="productConfig.features.languages"
        v-model="locale"
        class="w-32"
        :locales="locales.map(v => uiLocales[v.code])"
      />
    </template>
  </UHeader>
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
