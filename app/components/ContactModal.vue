<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

import * as CTA from '@/cta'

const props = defineProps({
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
  email: z.string().email('Invalid email'),
  title: z.string(),
  message: z.string()
})
type Schema = z.output<typeof schema>
const state = reactive<Partial<Schema>>({
  email: undefined,
  title: 'The product looks interesting, I would like to have a talk',
  message: ''
})

const toast = useToast()
const handleForm = async (event: FormSubmitEvent<Schema>) => {
  const email: string = event.data.email
  const title: string = event.data.title
  const message: string = event.data.message

  $fetch(`${CTABackend}/api/v1/cta/contact`, {
    method: 'POST',
    body: Object.assign(
      {},
      CTA.getCampaignParams(),
      CTA.getNonCampaignParams(params, route),
      props.extra,
      {
        version: 'v1',
        email: email,
        title: title,
        message: message,
        path: route.path
      }
    )
  }).then(() => {
    toast.add({ title: 'Success!', description: 'Thank you for your message! We will respond you on ' + email + ' very soon!', color: 'success' })
  })

  modal.value = false
}
</script>

<template>
  <UModal
    v-model:open="modal"
    :ui="{
      content: 'max-w-xl',
      body: 'justify-items-center'
    }"
  >
    <template #title>
      Contact Form
    </template>

    <UButton
      :label="props.label ? props.label : t('__label_contact_sales')"
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
        <div class="text-center w-full px-10">
          Please provide an email to contact you back and optionally your questions.
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
          name="title"
          class="w-full"
          size="lg"
        >
          <UInput
            v-model="state.title"
            placeholder="Message title"
            class="w-full"
            size="xl"
          />
        </UFormField>
        <UFormField
          name="message"
          class="w-full"
          size="lg"
        >
          <UTextarea
            v-model="state.message"
            placeholder="Optional message"
            class="w-full"
            size="xl"
            :rows="7"
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

<i18n lang="yaml">
en:
  __label_contact_sales: Contact Sales
de: {}
</i18n>
