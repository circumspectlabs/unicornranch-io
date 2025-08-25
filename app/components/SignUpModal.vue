<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

import * as CTA from '@/cta'

const props = defineProps({
  button: { type: String, required: true },
  size: { type: null, required: false },
  color: { type: null, required: false },
  variant: { type: null, required: false },
  label: { type: String, required: false },
  buttonClass: { type: null, required: false },
  extra: { type: null, required: false }
})

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

  $fetch(`${CTABackend}/api/v1/cta/signup`, {
    method: 'POST',
    body: Object.assign(
      {},
      CTA.getCampaignParams(),
      CTA.getNonCampaignParams(params, route),
      props.extra,
      {
        version: 'v1',
        button: props.button,
        email: email,
        path: route.path
      }
    )
  }).then(() => {
    toast.add({ title: 'Success!', description: 'Thank you for sign up! We will send you the invitation on ' + email + '!', color: 'success' })
  })

  modal.value = false
}
</script>

<template>
  <UModal
    v-model:open="modal"
    :ui="{
      content: 'max-w-md',
      body: 'justify-items-center'
    }"
  >
    <template #title>
      Sign Up for Free
    </template>

    <UButton
      :label="props.label ? props.label : t('__label_sign_up')"
      :class="'hidden lg:inline-flex justify-center'.concat(' ' + props.buttonClass)"
      :size="props.size"
      :color="props.color"
      :variant="props.variant"
    />

    <template #body>
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4 p-4 pt-2 w-full"
        @submit="handleForm"
      >
        <div class="text-center w-full pb-2">
          <p>
            Ready to <span class="text-primary">turn ideas into insights</span> fast? Launch a full validation sprint
            in hours, not weeks! Just describe your product, set a budget, and let <span class="text-primary">AI</span>
            craft your <span class="text-primary">landing page</span> and <span class="text-primary">traffic campaign</span>.
            Get clear data, stay in control, and spot winning concepts before the competition.
          </p>
          <p class="text-primary pt-2">
            We're launching very soon!
          </p>
        </div>
        <UFormField class="px-20">
          <NuxtImg
            class="w-full"
            src="/svg/sign-up.svg"
          />
        </UFormField>
        <div class="text-center w-full">
          <span class="text-primary">Register here <UIcon name="i-lucide-arrow-down" /></span>
        </div>
        <UFormField
          name="email"
          class="w-full"
          size="lg"
        >
          <UInput
            v-model="state.email"
            placeholder="Enter your email"
            class="w-full"
            size="xl"
          />
        </UFormField>
        <UFormField
          class="w-full justify-items-center"
          size="lg"
        >
          <UButton
            type="submit"
            class="w-32 justify-center text-base"
            size="lg"
          >
            Submit
          </UButton>
        </UFormField>
      </UForm>
    </template>
  </UModal>
</template>

<!--
  TODO:
    2. After pre-registration, show something awesome to encourage people to get back
-->

<i18n lang="yaml">
en:
  __label_sign_up: Sign Up
de:
  __label_sign_up: Anmelden
</i18n>
