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

interface Plan {
  title: string
  description: string
  price: string
  highlight?: boolean
  scale?: boolean
  button: {
    button: string
    label: string
    color?: 'neutral' | 'primary' | 'secondary'
    variant?: 'subtle' | 'link' | 'solid' | 'outline' | 'soft' | 'ghost'
  }
  features: {
    title: string // raw html
    tooltip?: string
  }[]
}
const plans = computed<Plan[]>(() => [
  {
    title: 'Basic',
    description: 'Powerfull set of tools to bootstrap your first research and <span class="text-primary">obtain the early market insignts</span>.',
    price: '$60',
    button: {
      button: 'pricing_basic',
      label: 'Request Trial',
      color: 'neutral',
      variant: 'subtle'
    },
    features: [
      {
        title: 'Upkeep costs: <span class="text-primary">$40/month</span>'
      },
      {
        title: 'Up to <span class="text-primary">$100/month</span> ads budget'
      },
      {
        title: 'AI-generated <span class="text-primary">landing page & branding</span>'
      },
      {
        title: 'Customer <span class="text-primary">activity analysis</span>'
      },
      {
        title: 'Smart <span class="text-primary">ads management</span>'
      },
      {
        title: 'Market <span class="text-primary">validation report</span>'
      }
    ]
  },
  {
    title: 'Advanced',
    description: 'For <span class="text-primary">startup teams</span> and small marketing research teams who want to <span class="text-primary">identify successful marketing channels</span>',
    price: '$120',
    highlight: true,
    scale: true,
    button: {
      button: 'pricing_advanced',
      label: 'Get Started'
    },
    features: [
      {
        title: 'Upkeep costs: <span class="text-primary">$40/month</span>'
      },
      {
        title: 'Up to <span class="text-primary">$200/month</span> ads budget'
      },
      {
        title: 'Deeper landing page customization'
      },
      {
        title: 'Raw data available in <span class="text-primary">CSV export</span>'
      },
      {
        title: 'Up to <span class="text-primary">5 team members</span>'
      },
      {
        title: 'All features from <span class="text-primary">Basic</span> plan'
      }
    ]
  },
  {
    title: 'Ultimate',
    description: 'For mature companies, accelerators, and data-proven product management. <span class="text-primary">Precise analytics, on larger numbers</span>.',
    price: '$180',
    button: {
      button: 'pricing_ultimate',
      label: 'Get Started',
      color: 'neutral',
      variant: 'subtle'
    },
    features: [
      {
        title: 'Upkeep costs: <span class="text-primary">$40/month</span>'
      },
      {
        title: 'Unlimited but controllable ads budget'
      },
      {
        title: 'Up to <span class="text-primary">25 team members</span>'
      },
      {
        title: '<span class="text-primary">White-label reports</span> & integrations'
      },
      {
        title: 'All features from <span class="text-primary">Advanced</span> plan'
      },
      {
        title: 'API access upon request'
      }
    ]
  }
])

interface FAQuestion {
  label: string
  content: string
}
const faquestions = computed<FAQuestion[]>(() => [
  {
    label: 'What\'s the price of one experiment?',
    content: 'It consists of three parts: single time <span class="text-primary">research activation</span> (actually the initial landing page and brand generation), the <span class="text-primary">ads budget</span> (just a small amount of paid traffic), and small <span class="text-primary">monthly upkeep fee</span>. The nature of the experiment assumes that you buy insignifiant amount of traffic on different platforms, such as Google Ad Words, Facebook Ads, Instagram, etc, to identify the real interest to your product and the behavior of the chosen customer profile (traffic settings).'
  },
  {
    label: 'What\'s the value of these experiments?',
    content: 'The main value of these marketing experiments is identifying the level of interest to your product idea in the close to real environment. That\'s how you acquire the essential information about your <a href="https://www.qualtrics.com/experience-management/brand/ideal-customer-profile/" target="_blank">Ideal Customer Profile (ICP)</a> and <a href="https://corporatefinanceinstitute.com/resources/management/serviceable-obtainable-market-som/" target="_blank">Servicable Obtainable Market (SOM)</a>.'
  },
  {
    label: 'What\'s the value of this product?',
    content: 'By the automation of these experiments, you can effortlessly run <span class="text-primary">representative experiments</span> even without experience in marketing and building brands and sites. Everything is already automated and ready to go. You only need to explain your idea, confirm/adjust AI-generated marketing artifacts (name, logo, landing page, domain, etc), and set some budget for customer acquisition.'
  },
  {
    label: 'Do you have trial period or level of usage?',
    content: 'We provide the <span class="text-primary">trial by request</span>. You can <span class="text-primary">subscribe for our newsletter</span> to be notified when the product will be available for early adopters.'
  },
  {
    label: 'Is the data about my product ideas and experiments private?',
    content: 'Of course! <span class="text-primary">We don\'t sell the data about your ideas or experiments</span>, whether they are successful or not. For enterprice customers, we provide the self-hosted installations (located in the customer\'s perimeter). Contact our sales if you are interested in the self-hosted service.'
  }
])
const faqActive = ref([...Array(faquestions.value.length).keys().map((e: number) => ('' + e))])
</script>

<template>
  <div>
    <UPageHero>
      <template #title>
        The simple pricing. Per experiment.
      </template>
      <template #description>
        One research includes one <span class="text-primary">AI-generated brand</span>, <span class="text-primary">landing page</span>,
        and <span class="text-primary">research automation</span>. You pay <span class="text-primary">single time per research</span>
        bootstrap, and monthly for <span class="text-primary">ads budget</span> and <span class="text-primary">campaign upkeep</span>
        That suites best for any market researcher: for founders, startup teams, product managers, or even accelerators.
      </template>
    </UPageHero>

    <UContainer>
      <UPricingPlans scale>
        <UPricingPlan
          v-for="(plan, pindex) in plans"
          :key="pindex"
          v-bind="plan"
          :price="plan.price"
          billing-cycle="/research single time"
        >
          <template #description>
            <p v-html="plan.description" />
          </template>
          <template #features>
            <li
              v-for="(feature, findex) in plan.features"
              :key="findex"
              class="flex items-center gap-2 min-w-0"
            >
              <UIcon
                name="i-lucide-circle-check"
                class="iconify i-lucide:circle-check size-5 shrink-0 text-primary"
              />
              <UTooltip
                :text="feature.tooltip"
                arrow
                :content="{ side: 'right' }"
                :delay-duration="100"
                :disabled="!feature.tooltip"
              >
                <span
                  class="text-muted text-sm truncate"
                  v-html="feature.title"
                />
              </UTooltip>
            </li>
          </template>

          <template #button>
            <SignUpModal
              v-bind="plan.button"
              button-class="w-full"
            />
          </template>
        </UPricingPlan>
      </UPricingPlans>
    </UContainer>

    <UPageHero
      :title="t('__section_more_title')"
      class="mt-10 mb-0"
    >
      <template #description>
        <p v-html="t('__section_more_description')" />
      </template>

      <template #links>
        <ContactModal
          button-class="cursor-pointer text-lg"
          size="lg"
        />
      </template>
    </UPageHero>

    <UPageSection
      :title="t('__section_faq_title')"
      :ui="{
        container: 'pt-6 sm:pt-6 lg:pt-8'
      }"
    >
      <UPageAccordion
        v-model="faqActive"
        :items="faquestions"
        class="max-w-4xl mx-auto"
      >
        <template #content="{ item }">
          <p
            class="pb-3.5 text-muted accordeon-content"
            v-html="item.content"
          />
        </template>
      </UPageAccordion>
    </UPageSection>
  </div>
</template>

<style lang="css">
.accordeon-content a {
  color: var(--ui-primary);
  text-decoration-line: underline;
  text-decoration-style: dashed;
}
.accordeon-content a:hover {
  text-decoration-style: solid;
}
</style>

<i18n lang="yaml">
en:
  __title: Pricing
  __description: Subscription plans for any market researcher! Get the right plan that suits you.
  __section_more_title: Want to know more?
  __section_more_description: Contact our sales team if you want to discuss <span class="text-primary">extra enterprise options</span>, such as <span class="text-primary">private installation</span>, extra <span class="text-primary">integrations</span>, API access, or <span class="text-primary">custom features</span>.
  __section_more_button: Contact Sales
  __section_faq_title: Frequently Asked Questions
de: {}
</i18n>
