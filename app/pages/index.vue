<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
import { useAnchorScroll } from '#imports'
import type { ButtonProps } from '@nuxt/ui'
import * as productConfig from '@/product.config'

const { t } = useI18n({
  useScope: 'local'
})

const title = `${productConfig.name} - ${t('__title')}`
const description = t('__description')

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
defineOgImageComponent('Index', {
  title: t('__title_og')
})

const { scrollToAnchor } = useAnchorScroll()

const heroButtons = computed<ButtonProps[]>(() => [
  {
    label: t('__hero_link'),
    icon: 'i-lucide-arrow-right',
    trailing: true,
    size: 'xl',
    onClick: () => { scrollToAnchor('howitworks') },
    class: 'cursor-pointer text-lg'
  }
])
const howItWorksButtons = computed<ButtonProps[]>(() => [
  {
    label: t('__how_it_works_link_framework'),
    trailing: true,
    size: 'xl',
    href: '/framework',
    class: 'cursor-pointer text-lg px-4'
  }
])
interface Section {
  title: string
  description: string
  id: string
  orientation?: 'vertical' | 'horizontal'
  reverse?: boolean
  features?: {
    title?: string
    description?: string
    icon?: string
  }[]
  image?: {
    src: string
  }
}
const sections = computed<Section[]>(() => [
  {
    title: 'End-to-end Market Experiments',
    description: 'Streamline your product validation process with a single tool, covering everything from concept to customer feedback, and get detailed, data-driven insights to inform your business decisions.',
    id: 'market-experiments',
    orientation: 'horizontal',
    features: [
      {
        description: 'Automate repetitive tasks and reduce the time spent on related routines, allowing you to focus on high-priority tasks.',
        icon: 'i-lucide-bot'
      },
      {
        description: 'Get a comprehensive view of the interest to your product with a single tool, eliminating the need to juggle multiple platforms and tools.',
        icon: 'i-lucide-chart-line'
      },
      {
        description: 'Make data-driven decisions with clear and actionable insights, reducing the risk of launching a product that may not resonate.',
        icon: 'i-lucide-lightbulb'
      }
    ],
    image: {
      src: '/svg/market-experiments.svg'
    }
  },
  {
    title: 'Easy and Powerfull',
    description: 'Describe your product or service idea, answer a several short questions, confirm that AI understood you, and let us handle the rest.',
    id: 'easy-and-powerfull',
    orientation: 'horizontal',
    reverse: true,
    features: [
      {
        description: 'No extensive marketing experience needed, making it perfect for newcomers to test their ideas quickly and easily.',
        icon: 'i-lucide-contact-round'
      },
      {
        description: 'Enjoy the automation, speed, and flexible controls, empowering your early-stage startup ideas with tangible market analysis.',
        icon: 'i-lucide-square-chart-gantt'
      },
      {
        description: 'Automate the management of your marketing strategy by the real market response, ensuring you find your ideal customer profile.',
        icon: 'i-lucide-brain-circuit'
      }
    ],
    image: {
      src: '/svg/easy-and-powerfull.svg'
    }
  },
  {
    title: 'Faster, Smarter, Stronger',
    description: 'Run multiple experiments in parallel with different parameters and strategies, saving time and increasing the chances of finding winning combos!',
    id: 'faster-smarter-stronger',
    orientation: 'horizontal',
    features: [
      {
        description: 'Validate product ideas quickly, allowing you to iterate, refine, and launch successful products faster than ever before.',
        icon: 'i-lucide-rocket'
      },
      {
        description: 'Experiment with new features on existing products, gather real market feedback, and make data-driven decisions on how to evolve your product.',
        icon: 'i-lucide-award'
      },
      {
        description: 'Rule the entire experiments, not particular actions! Flexible strategies will do all busywork and bring you clear results.',
        icon: 'i-lucide-route'
      }
    ],
    image: {
      src: '/svg/faster-smarter-stronger.svg'
    }
  }
])

interface Features {
  title: string
  description: string
  items: {
    title: string
    description: string
    icon?: string
  }[]
}
const features = computed<Features>(() => ({
  title: 'How It Works?',
  description: 'For decades, it was a clear marketing experimentation pipeline described in our framework. It usually was affordable only for big players because of wage costs. In the AI epoch, you can automate most part of this work! We just make it simple!',
  items: [
    {
      title: '1. Idea Definition',
      description: 'Describe your product idea, value, how it works, and expected target audience. Answer a several questions to ensure AI understood.',
      icon: 'i-lucide-lightbulb'
    },
    {
      title: '2. Brand Generation',
      description: 'Choose the unique name, style, logo, colors, and domain for your brand, with suggestions or just your own best options.',
      icon: 'i-lucide-square-dashed-top-solid'
    },
    {
      title: '3. Landing Page',
      description: 'Generate the landing page that suites best for your product. You can even improve it to your special needs, with prompts.',
      icon: 'i-lucide-layout-panel-top'
    },
    {
      title: '4. Social Accounts',
      description: 'Choose public accounts to claim on platforms like LinkedIn, X, Reddit, etc. to establish your brand\'s online presence and measure the natural traffic.',
      icon: 'i-lucide-vote'
    },
    {
      title: '5. Budget and Strategy',
      description: 'Define the experiment\'s budget and pick one of the experiment strategies. It can automatically adjust campaign settings to find the best configuration.',
      icon: 'i-lucide-sigma'
    },
    {
      title: '6. Campaign Launch',
      description: 'Launch your campaign and watch how experiment runs small paid ad campaigns and gains visits of real customers.',
      icon: 'i-lucide-rocket'
    },
    {
      title: '7. Collect Insights!',
      description: 'Just let it some time and you will obtain the most valuable knowledge about your product: the people who love it and would like to try.',
      icon: 'i-lucide-brain-cog'
    },
    {
      title: '8. Analyze Market Response',
      description: 'Using the experiment data, make a mindful decisions about your next steps, how to improve your product, and where to seek for your best customer.',
      icon: 'i-lucide-chart-bar'
    },
    {
      title: '9. Start New Experiment!',
      description: 'You can reuse the campaign, adjust with new settings, and find even more fruitful and winning market!',
      icon: 'i-lucide-calendar-sync'
    }
  ]
}))

interface CTA {
  title: string
  description: string
  links: ButtonProps[]
}
const cta = computed<CTA>(() => ({
  title: 'Sign Up for Private Launch!',
  description: 'We are starting very soon! Sign up to not miss the private launch of the best marketing insights tool!',
  links: [
    {
      label: 'Sign Up',
      onClick: () => {} // TODO: handler for this button
    }
  ]
}))
</script>

<template>
  <div>
    <UPageHero
      :links="heroButtons"
      :ui="{
        container: 'py-32 sm:py-48 lg:py-56 gap-20 sm:gap-y-30',
        title: 'max-w-[80%] mx-auto',
        description: 'max-w-[80%] mx-auto',
        root: '__hero_bg'
      }"
    >
      <template #title>
        <div
          class="text-7xl"
          v-html="t('__hero_title')"
        />
      </template>

      <template #description>
        <div
          class="text-2xl"
          v-html="t('__hero_description')"
        />
      </template>
    </UPageHero>

    <UPageSection
      v-for="(section, index) in sections"
      :id="section.id"
      :key="index"
      :title="section.title"
      :description="section.description"
      :orientation="section.orientation"
      :reverse="section.reverse"
      :features="section.features"
    >
      <ImagePlaceholder v-if="!section.image" />
      <NuxtImg
        v-else
        class="w-full"
        :src="section.image.src"
      />
    </UPageSection>

    <USeparator />

    <UPageSection
      id="howitworks"
      :title="features.title"
      :description="features.description"
      :links="howItWorksButtons"
    >
      <UPageGrid>
        <UPageCard
          v-for="(item, index) in features.items"
          :key="index"
          v-bind="item"
          spotlight
        />
      </UPageGrid>
    </UPageSection>

    <USeparator />

    <UPageCTA
      v-bind="cta"
      variant="naked"
      class="overflow-hidden"
      :ui="{
        title: 'max-w-[80%] mx-auto',
        description: 'max-w-[80%] mx-auto'
      }"
    >
      <div class="absolute rounded-full dark:bg-primary blur-[250px] size-40 sm:size-50 transform -translate-x-1/2 left-1/2 -translate-y-80" />
    </UPageCTA>
  </div>
</template>

<!--
  TODO:
    1. Deutsch translation
    2. Add Sign Up handler, better to import from Header component
-->

<style lang="css">
.__hero_bg {
  --hero-bg-inner-color: color-mix(in srgb, var(--ui-primary) 10%, transparent);
  --hero-bg-outer-color: color-mix(in srgb, var(--ui-primary) 0%, transparent);
  background: radial-gradient(circle,var(--hero-bg-inner-color) 0%, var(--hero-bg-inner-color) 35%, var(--hero-bg-outer-color) 100%);
}
</style>

<i18n lang="yaml">
en:
  __title: The Fastest Way to Test Your Product Ideas
  __title_og: The Fastest Way to Test Your Product Ideas
  __description: The tool that helps founders, entrepreneurs, and market researchers quickly test product and service ideas in real market conditions — without spending weeks on setup and guesswork — and obtain the exhaustive details about your ideal customer profile.
  __hero_title: The Easiest Way to <span class="text-nowrap text-primary-400">Test Product Ideas</span>
  __hero_description: The tool that helps founders, entrepreneurs, and market researchers quickly test <span class="text-nowrap text-primary-400 font-[500]">product and service ideas</span> in real market conditions — <span class="text-nowrap text-primary-400 font-[500]">without spending weeks</span> on setup and guesswork — and obtain the exhaustive details about your <span class="text-nowrap text-primary-400 font-[500]">ideal customer profile</span>.
  __hero_link: 'How it works?'
  __how_it_works_link_framework: "Framework"
  __how_it_works_link_more_details: "More Details"
de: {}
</i18n>
