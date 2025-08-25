<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

import * as CTA from '@/cta'

const runtimeConfig = useRuntimeConfig()
const CTABackend = runtimeConfig.public.CTABackend.trim()

const route = useRoute()
const params = useUrlSearchParams('history')

const { t } = useI18n({
  useScope: 'local'
})

const modal = ref(false)
const schema = z.object({
  email: z.string().email('Invalid email')
})
type Schema = z.output<typeof schema>
const state = reactive<Partial<Schema>>({
  email: undefined
})

const toast = useToast()
const handleForm = async (event: FormSubmitEvent<Schema>) => {
  const email: string = event.data.email

  $fetch(`${CTABackend}/api/v1/cta/subscribe`, {
    method: 'POST',
    body: Object.assign(
      {},
      CTA.getCampaignParams(),
      CTA.getNonCampaignParams(params, route),
      {
        version: 'v1',
        email: email,
        path: route.path
      }
    )
  }).then(() => {
    toast.add({ title: 'Success!', description: 'Thank you for subscription! We will send you our news on ' + email + ' and promise not being noisy!', color: 'success' })
  })

  modal.value = false
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    :style="{ position: 'relative', top: '-0.3rem' }"
    @submit.prevent="handleForm"
  >
    <UFormField
      name="email"
      :label="'&nbsp;&nbsp;&nbsp;'.concat(t('__text_subscribe_for_updates'))"
      size="lg"
      class="min-w-sm"
    >
      <UInput
        v-model="state.email"
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
  </UForm>
</template>

<i18n lang="yaml">
en:
  __text_subscribe_for_updates: Subscribe for Updates
  __text_enter_your_email: Enter your email
  __text_subscribe: Subscribe
de:
  __text_subscribe_for_updates: Subscribe für Updates
  __text_enter_your_email: Ihre E-Mail
  __text_subscribe: Subscribe
</i18n>
