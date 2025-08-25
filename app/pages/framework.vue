<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
import * as productConfig from '@/product.config'

const { t } = useI18n({
  useScope: 'local'
})

const title = `${productConfig.name} - ${t('__title')}`
const description = t('__description')

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImageComponent('Og', {
  title: t('__title'),
  description: description
})
</script>

<template>
  <div>
    <UPageHero
      :title="t('__body_title')"
      :ui="{ container: 'py-20 sm:py-20 lg:py-20' }"
    />
    <UContainer class="max-w-4xl text-lg text-justify pb-30">
      <p class="mb-4">
        For the last decades, big companies, such as Google and Facebook, perform the special <span class="text-primary">research before implementing idea</span>. This is the way to run lean strategy and safe resources, especially when the project requires significant investment. By this research, they can know well in advance if the planned project, service, or feature have the necessary level of interest from the market. In other words, they <span class="text-primary">ensure the idea is worth</span> to spend resources.
      </p>
      <p class="mb-4">
        The nature of such research follows GTM practices: they show the idea to customers before the project implementation, just by exposing the corresponding marketing materials and running small advertisement campaign. You should think about it as a "fake product" with the real marketing campaign. The main goal of this campaign is collecting <span class="text-primary">objective marketing metrics</span> about the interest to the product, market capacity, ideal customer profile, and the most effective customer acquisition strategy.
      </p>
      <p class="mb-4">
        After they collect all necessary metrics, they make the mindful decision if they should fulfill it or not. Usually they burry this fake brand and, if the metrics are good, run another campaign with the real brand.
      </p>
      <p class="mb-4">
        This way to <span class="text-primary">experiment with the real traffic</span> allows product managers to run their products by the tangible data, thus more effective and market-aware. It suits best for startups, because they can <span class="text-primary">measure and prove the product follows expectations</span> about market and customers. It also suits fine for mature companies: they can create a fake competitor with the specific feature and identify if this feature is really interesting for their focus group, whether it's a new customer profile or existing customers.
      </p>
      <p class="mb-4">
        Before the AI epoch, the whole experimentation process required a lot of efforts for creating marketing materials and leading this campaign. Thus, it <span class="text-primary">was available only for large players</span>. The new technologies lower this gate to make it <span class="text-primary">now affordable even for solo founders</span>: with vibe coding, image generation, rewrite tools, etc.
      </p>
      <p class="mb-4">
        So now, to perform the experiment, it's enough to follow this guide:
      </p>
      <ul class="list-decimal">
        <li class="ml-8">
          <div class="my-2">
            Clearly <span class="text-primary">define the product</span>, service, or idea, formulate it in document.
          </div>
          <ul class="list-disc ml-6">
            <li>What is the product? What it does?</li>
            <li>What is the value of this product?</li>
            <li>Why people will use it? To resolve what problem?</li>
            <li>Who might buy it? How they will use it?</li>
          </ul>
        </li>
        <li class="ml-8">
          <div class="my-2">
            <span class="text-primary">Prepare marketing materials</span>, including but not limiting to:
          </div>
          <ul class="list-disc ml-6">
            <li>Brand name, logo, basic styleguide</li>
            <li>Landing page and domain</li>
            <li>Ad banners - depending on used advertisement platforms</li>
          </ul>
        </li>
        <li class="ml-8">
          <div class="my-2">
            Configure <span class="text-primary">landing page and traffic analytics</span> to identify per-user parameters/behavior:
          </div>
          <ul class="list-disc ml-6">
            <li>Traffic origin and advertise platform</li>
            <li>Time spent on which page</li>
            <li>Activity tracking like CTA clicks, form inputs, etc</li>
          </ul>
        </li>
        <li class="ml-8">
          <div class="my-2">
            Configure the <span class="text-primary">advertisement traffic</span> corresponding to your expected ideal customer profile. Buy small amount of traffic, for short period. Launch this campaign.
          </div>
        </li>
        <li class="ml-8">
          <div class="my-2">
            After the end of this campaign, <span class="text-primary">analyze</span> its effectivity and <span class="text-primary">run another campaign</span> with different settings (customer profile, landing page elements, etc).
          </div>
        </li>
        <li class="ml-8">
          <div class="my-2">
            By iterating these small campaigns, identify the best combination of customer profile settings and marketing materials.
          </div>
        </li>
      </ul>
      <p class="mb-4">
        Always remember that you hardly can identify the ideal customer profile with the first attempt. Even if you see the satisfying feedback, there is a chance that you miss even more successive configuration.
      </p>
      <p class="mb-4">
        The only objective of these experiments is collecting real data about market-product fit. This framework helps you move beyond assumptions about your idea and instead, build a plan by the real-world market data.
      </p>
    </UContainer>
  </div>
</template>

<i18n lang="yaml">
en:
  __title: The Framework
  __description: The total specification of the modern approach for marketing research and product/service idea validation.
  __body_title: Marketing Research Framework
de: {}
</i18n>
