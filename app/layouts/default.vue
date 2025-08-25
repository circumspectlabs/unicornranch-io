<script setup lang="ts">
import * as CTA from '@/cta'

const runtimeConfig = useRuntimeConfig()
const CTABackend = runtimeConfig.public.CTABackend.trim()

const route = useRoute()
const params = useUrlSearchParams('history')

const handleVisit = () => {
  if (import.meta.client) {
    $fetch(`${CTABackend}/api/v1/cta/visit`, {
      method: 'POST',
      body: Object.assign(
        {},
        CTA.getCampaignParams(),
        CTA.getNonCampaignParams(params, route),
        {
          version: 'v1'
        }
      )
    })
  }
}

CTA.persistCampaignParams(params)
new Promise(() => {
  handleVisit()
})

watch(() => route.path, async () => {
  handleVisit()
})
</script>

<template>
  <div>
    <AppHeader />

    <UMain>
      <slot />
    </UMain>

    <AppFooter />
  </div>
</template>
