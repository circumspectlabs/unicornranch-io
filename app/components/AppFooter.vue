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

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit() {
  loading.value = true

  toast.add({
    title: t('__toast_subscription_title'),
    description: t('__toast_subscription_description')
  })
}
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
            <form
              :style="{ position: 'relative', top: '-0.3rem' }"
              @submit.prevent="onSubmit"
            >
              <UFormField
                name="email"
                :label="'&nbsp;&nbsp;&nbsp;'.concat(t('__text_subscribe_for_updates'))"
                size="lg"
                class="min-w-sm"
              >
                <UInput
                  v-model="email"
                  type="email"
                  class="w-full"
                  :placeholder="t('__text_enter_your_email')"
                >
                  <template #trailing>
                    <UButton
                      type="submit"
                      size="xs"
                      color="neutral"
                      :label="t('__text_subscribe')"
                    />
                  </template>
                </UInput>
              </UFormField>
            </form>
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

<!--
  TODO:
    1. Handler for Subscribe for newsletters
    2. After subscription, show something awesome to encourage people to get back
-->

<i18n lang="yaml">
en:
  __label_framework: Framework
  __label_product: Product
  __label_how_it_works: How It Works
  __label_pricing: Pricing
  __label_faq: FAQ
  __text_subscribe_for_updates: Subscribe for Updates
  __text_enter_your_email: Enter your email
  __text_subscribe: Subscribe
  __toast_subscription_title: 'Subscribed!'
  __toast_subscription_description: "You've been subscribed to our newsletter. Thank you!"
de:
  __label_framework: Framework
  __label_product: Produkt
  __label_how_it_works: Wie Functioniert Es
  __label_pricing: Preise
  __label_faq: FAQ
  __text_subscribe_for_updates: Subscribe für Updates
  __text_enter_your_email: Ihre E-Mail
  __text_subscribe: Subscribe
  __toast_subscription_title: 'Subscribed!'
  __toast_subscription_description: "Sie haben unseren Newsletter abonniert. Vielen Dank!"
</i18n>
