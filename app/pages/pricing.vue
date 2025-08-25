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

const isYearly = ref<'monthly' | 'anually'>('monthly')

const switchMonthlyAnnually = [
  {
    label: 'Monthly',
    value: 'monthly'
  },
  {
    label: 'Yearly',
    value: 'anually'
  }
]

interface Plan {
  title: string
  description: string
  price: {
    month: string
    year: string
    perUser?: boolean
  }
  highlight?: boolean
  scale?: boolean
  button: {
    button: string
    label: string
    color?: 'neutral' | 'primary' | 'secondary'
    variant?: 'subtle' | 'link' | 'solid' | 'outline' | 'soft' | 'ghost' | undefined
  }
  features: {
    title: string // raw html
    tooltip?: string
  }[]
}
const plans = computed<Plan[]>(() => [
  {
    title: 'Starter',
    description: 'The best for solo founders, small experiments, and occasional research.',
    price: {
      month: '$99',
      year: '$80'
    },
    button: {
      button: 'pricing_starter_sign_up',
      label: 'Request Trial',
      color: 'neutral',
      variant: 'subtle'
    },
    features: [
      {
        title: '<span class="text-primary">1 full campaign/month</span>'
      },
      {
        title: 'Up to <span class="text-primary">$70 ads budget</span> each'
      },
      {
        title: 'AI-generated <span class="text-primary">landing page & branding</span>'
      },
      {
        title: 'Smart <span class="text-primary">ads management</span>'
      },
      {
        title: '1 market <span class="text-primary">validation report</span>'
      },
      {
        title: 'Additional campaigns: $50'
      }
    ]
  },
  {
    title: 'Pro',
    description: 'For startup teams and small marketing research teams.',
    price: {
      month: '$179',
      year: '$150'
    },
    highlight: true,
    scale: true,
    button: {
      button: 'pricing_pro_sign_up',
      label: 'Get Started'
    },
    features: [
      {
        title: '<span class="text-primary">3 full campaign/month</span>'
      },
      {
        title: 'Up to <span class="text-primary">$120 ads budget</span> each'
      },
      {
        title: 'More <span class="text-primary">reports</span> and <span class="text-primary">CSV export</span>'
      },
      {
        title: 'Up to <span class="text-primary">3 team members</span>'
      },
      {
        title: 'All features from <span class="text-primary">Starter</span> plan'
      },
      {
        title: 'Additional campaigns: $40'
      }
    ]
  },
  {
    title: 'Enterprise',
    description: 'For mature companies, accelerators, and data-proven product management.',
    price: {
      month: '$249',
      year: '$200'
    },
    button: {
      button: 'pricing_enterprise_sign_up',
      label: 'Get Started',
      color: 'neutral',
      variant: 'subtle'
    },
    features: [
      {
        title: '<span class="text-primary">10 full campaign/month</span>'
      },
      {
        title: 'Up to <span class="text-primary">$200 ads budget</span> each'
      },
      {
        title: 'Up to <span class="text-primary">10 team members</span>'
      },
      {
        title: '<span class="text-primary">White-label reports</span> & integrations'
      },
      {
        title: 'All features from <span class="text-primary">Pro</span> plan'
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
    label: 'What\'s the value of these experiments?',
    content: 'The main value of these marketing experiments is identifying the level of interest to your product idea in the close to real environment. That\'s how you acquire the essential information about your <a href="https://www.qualtrics.com/experience-management/brand/ideal-customer-profile/" target="_blank">Ideal Customer Profile (ICP)</a> and <a href="https://corporatefinanceinstitute.com/resources/management/serviceable-obtainable-market-som/" target="_blank">Servicable Obtainable Market (SOM)</a>.'
  },
  {
    label: 'What\'s the value of this product?',
    content: 'By the automation of these experiments, you can run <span class="text-primary">multiple representative experiments</span> without experience in marketing, building brands and sites, etc. Everything is already automated and ready to run. You only need to explain your idea, confirm/adjust AI-generated marketing artifacts (name, logo, landing page, domain, etc), and set some budget for customer acquisition.'
  },
  {
    label: 'Do you have triage period or level of usage?',
    content: 'Unfortunatelly, not for now. We are going to introduce free trial later. You can subscribe for our newsletter to be notified when we enable trial program.'
  },
  {
    label: 'Is the data about my product ideas and experiments private?',
    content: 'Of course! We don\'t use or sell the data about your ideas or experiments, whether they are successful or not. For enterprice customers, we provide the self-hosted installations (located in the customer\'s perimeter). Contact our sales if you are interested in the self-hosted service.'
  },
  {
    label: 'What\'s the price of one experiment?',
    content: 'Usually it consists of two parts: the subscription for this product and the budget for paid traffic. The nature of the experiment assumes that you buy insignifiant amount of traffic on paid platforms, such as Google Ad Words, Facebook Ads, Instagram, etc, to identify the real interest to your product and the behavior of the chosen customer profile (traffic settings).'
  }
])
const faqActive = ref([...Array(faquestions.value.length).keys().map((e: number) => ('' + e))])
</script>

<template>
  <div>
    <UPageHero
      title="A plan for every need!"
      description="Our plans are designed to meet the requirements of any market researcher, whether you are a founder, startup team, product manager, or accelerator. Get the right plan that suits you."
    >
      <template #links>
        <UTabs
          v-model="isYearly"
          :items="switchMonthlyAnnually"
          color="neutral"
          size="xs"
          class="w-48"
          :ui="{
            list: 'ring ring-accented rounded-full',
            indicator: 'rounded-full',
            trigger: 'w-1/2'
          }"
        />
      </template>
    </UPageHero>

    <UContainer>
      <UPricingPlans scale>
        <UPricingPlan
          v-for="(plan, pindex) in plans"
          :key="pindex"
          v-bind="plan"
          :price="plan.price ? isYearly === 'anually' ? plan.price.year : plan.price.month : 'Contact'"
          :billing-cycle="!plan.price.perUser ? '/month' : '/user per month'"
        >
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
              :extra="{
                is_yearly: isYearly
              }"
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
  __section_more_description: Contact our sales team if you want to discuss <span class=\'text-primary\'>extra enterprise options</span>, such as <span class=\'text-primary\'>private installation</span>, and <span class=\'text-primary\'>higher quotas</span>, and <span class=\'text-primary\'>extra integrations</span>.
  __section_more_button: Contact Sales
  __section_faq_title: Frequently Asked Questions
de: {}
</i18n>
