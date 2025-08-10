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

interface FAQuestion {
  label: string
  content: string
}
const faquestions = computed<FAQuestion[]>(() => [
  {
    label: 'What exactly does this platform do, and how is it different from just using no-code tools or freelancers?',
    content: 'No-code and vibe code solutions are not effortless. And with freelancers, traditional methods are also time-consuming. The product just consolidates everything in one place, streamlines the research process, simplifies the management of your research process, and maximizes the effects of your efforts. You can just do more and obtain deeper results.'
  },
  {
    label: 'How much input do I need to give before the campaign can launch?',
    content: 'Depending on the complexity of the product, you need 1-3 hours for launching the first campaign. The next campaigns will be easier to prepare, should be 20-30 minutes.'
  },
  {
    label: 'Can I use this even if I have zero marketing experience?',
    content: 'For sure! That’s exactly what this product was made for! This product not only manages the campaigns, it also ensures that you don’t miss anything and spend marketing budget effective.'
  },
  {
    label: 'What kinds of product ideas does this tool work best with?',
    content: 'It works best for the most tested cases, such as location-specific and global product/services, B2B and B2C, and entertainment/business/commercial services. Later, we are going to introduce the research/product specializations.'
  },
  {
    label: 'How flexible is it if I want to run multiple experiments with slightly different audiences or messages?',
    content: 'It performs multi-step campaigns and analyses the traction. Then, it can choose the next step and perform another micro-research, collect more data, and pass through the whole marketing campaign. You can watch the process online and adjust the campaign.'
  },
  {
    label: 'How long does it take to go from idea to launched campaign?',
    content: 'To configure your first campaign, you usually need to enter the product description, then confirm/adjust essential marketing artifacts (product description, name, logo, and landing page), then configure budget. For the first time, it usually takes a few hours before you can launch the campaign. After the campaign has finished, you can reuse/adjust its artifacts for the new campaign, which will be a way faster.'
  },
  {
    label: 'Can I run campaigns in different languages or for different geographies?',
    content: 'Yes, you can build multi-language landing pages. It will be automatically translated to these languages (with AI). Then you can limit ads campaigns to some geo zone.'
  },
  {
    label: 'What kind of output will I get at the end of a campaign?',
    content: 'Every experiment collects raw marketing data and provides the analysis with the conversion rates, sources of traffic with scoring by conversion, ROI by the channel, expected SOM/TAM rate, and other essential information about the experiment and campaign traction.'
  },
  {
    label: 'What does “automated” actually mean here — what’s done for me, and what still needs manual work?',
    content: 'The product basically provides the necessary level of automation for the essential marketing artifacts generation (product description, name, logo, and landing page) and manages the advertisement campaigns in different platforms. All of it allows launching such experiments swiftly while not losing the control of such experiments.'
  },
  {
    label: 'How will this help me validate if there’s real market interest in my product?',
    content: 'Every experiment provides the essential data about the marketing landscape for the product/service/idea you want to run. Knowing the market, you can implement more precise revenue strategy.'
  },
  {
    label: 'What kind of metrics or KPIs will I get to determine whether an idea is worth pursuing?',
    content: 'At least the following:<ul><li>Conversion on every stage</li><li>The sources of traffic, with scoring by conversion</li><li>ROI by the advertisement channel</li><li>Expected percentage for SOM/TAM</li></ul>'
  },
  {
    label: 'Does this tool help me compare multiple product ideas objectively?',
    content: 'Yes. You compare finished experiments by the metrics, such as conversion rates and serviceable obtainable market.'
  },
  {
    label: 'Will I actually get leads, or just vanity metrics like clicks and impressions?',
    content: 'Yes, you can acquire leads if they subscribed for waitlist or signed up. It’s usually useful having a talk with such people, to collect extra details and adjust the further research campaigns.'
  },
  {
    label: 'Can I share campaign results with my team or investors?',
    content: 'Yes. You can share access to your tenant (where you perform research) and/or generate a report for the particular campaign.'
  },
  {
    label: 'Will it help me iterate based on results or just give me a single campaign?',
    content: 'Single campaign is useful, but it’s normal iterating similar campaigns one by one, to identify ads traffic configuration with the best conversion.'
  },
  {
    label: 'Does it generate the landing page from scratch, or do I have to provide copy and design?',
    content: 'It works from scratch and provides the initial version, with the brand name, logo, and text. You can update the text, upload your own pictures, and/or partially reconfigure landing page elements.'
  },
  {
    label: 'Can I customize the branding and style?',
    content: 'To simplify the experiments, we provide an AI-generated branding for every new experiment. You can override it with your own branding and/or adjust it in place with your own name, logo, colors, and typography.'
  },
  // {
  //   label: 'What platforms can it auto-create accounts and pages on (e.g., LinkedIn, X, Reddit)?',
  //   content: 'TODO'
  // },
  {
    label: 'How does it handle budget allocation and spend optimization?',
    content: 'You can specify the budget for the experiment, and the product will split it to chunks, using every chunk with some ads vendor and traffic configuration. Depending on the success factor of such micro-campaigns, it continues research until identifies the best possible configuration. The experiment ends when the budget runs out or the best configuration has been found, depending on what’s first.'
  },
  {
    label: 'Will it alert me if the campaign is underperforming or wasting money?',
    content: 'For sure. In case no success or too low conversion, it can stop or notify the experiment. The alert/action thresholds are configurable.'
  },
  {
    label: 'Can I A/B test different value propositions or landing page versions?',
    content: 'Yes, with two parallel experiments.'
  },
  {
    label: 'How is my product idea kept confidential?',
    content: 'The data, as well as ideas and experiment results, are entirely your. We don’t share it to third parties.'
  },
  {
    label: 'What happens to my data after the campaign ends?',
    content: 'It remains inactive in the experiments’ history. You can also start a new experiment by forking the existing experiment, even if it’s finished.'
  },
  {
    label: 'Can I export the results and reuse the assets outside the platform?',
    content: 'Yes, you can export brand artifacts (name, logo, style, etc), and landing page (limited). However, before running this landing page outside the application, you will have to partially rework it (CTA handlers, subscription, analytics, etc).'
  },
  {
    label: 'Can my team collaborate inside the tool?',
    content: 'Yes. Depending on the subscription, you have a limited number of members in a single tenant.'
  },
  {
    label: 'How does this scale if I run 10, 50, or 100 product experiments a month?',
    content: 'The number of parallel experiments is limited depending on the subscription plan.'
  },
  {
    label: 'Is there a white-label option for agencies or firms?',
    content: 'Yes. Contact our sales team for details.'
  },
  {
    label: 'Can I manage multiple clients or startups from one account?',
    content: 'Yes. The experiments/campaigns configurations might be related to completely different ideas.'
  },
  {
    label: 'Does it integrate with my existing analytics tools or CRM?',
    content: 'No. It runs the separated experiments. You may need to provide credentials to your existing ads platforms. You can also download the list of subscribers and registered users and upload it into your CRM.'
  },
  {
    label: 'What’s included in the subscription plan? Do I need to pay for ads campaigns separately?',
    content: '<p>Every experiment requires some budget for paid traffic. It is a separate part of expenses you should keep in mind. The product automates all busywork around establishing and controlling the experiment flow. In other words, the product performs research using the experiment\'s budget.</p><p>So, yes, the subscription plan doesn’t include the paid traffic.</p>'
  },
  {
    label: 'Do I need to bring my own ad accounts or can I use one provided by the platform?',
    content: 'It can work in both ways. You can bring your own accounts or just use the product as an aggregator of ads platforms.'
  },
  {
    label: 'What do I need to have ready before I can run my first campaign?',
    content: 'Only the understanding of what is the nature of your product. However, if you’re unsure if you completely understand it, the configuration process can help you to achieve it just in time.'
  },
  {
    label: 'Is onboarding guided or self-serve?',
    content: 'Guided. You can disable it, but it’s strongly recommended to follow this guide for the first experiments. The configuration process is quite flexible and suites for both beginners and professionals in the marketing space.'
  },
  {
    label: 'How much time should I expect to spend on setup and review?',
    content: 'From 1 to 2 hours, in average. Our AI subsystem always helps you formulate your ideas and the essential details of them. As soon as you have explained the product/service, you need to review (and sometimes adjust) the brand and landing page. Then, you configure the ads campaign and budget and launch the experiment.'
  },
  {
    label: 'Will this eventually help me go beyond validation into full go-to-market?',
    content: '<p>This product is designed to perform GTM research in the most effective and effortless way. However, it’s not only for the new products. You can configure a fake competitor with the feature you are planning to implement, and then analyze the interest to this brand. By this approach, you analyze the real interest to the particular feature, which is brilliant for product management in mature companies.</p><p>Another use case: decision about providing the service in another location (city). Just enable the corresponding experiment with the similar customer profile but different location, and then see if it has necessary interest in there by the GTM metrics.</p>'
  }
])
const faqActive = ref([...Array(faquestions.value.length).keys().map((e: number) => ('' + e))])
</script>

<template>
  <div>
    <UPageSection
      :title="t('__body_title')"
    >
      <UPageAccordion
        v-model="faqActive"
        :items="faquestions"
        class="max-w-4xl mx-auto"
        :ui="{
          label: 'text-xl',
          content: 'text-lg'
        }"
      >
        <template #content="{ item }">
          <div
            class="pb-3.5 text-muted faq-content"
            v-html="item.content"
          />
        </template>
      </UPageAccordion>
    </UPageSection>
  </div>
</template>

<style lang="css">
.faq-content a {
  color: var(--ui-primary);
  text-decoration-line: underline;
}
.faq-content a:hover {
  text-decoration-style: solid;
}
.faq-content p {
  margin-bottom: calc(var(--spacing) * 2);
}
.faq-content ul {
    list-style-type: disc;
}
.faq-content li {
    margin-left: calc(var(--spacing) * 6);
}
</style>

<i18n lang="yaml">
en:
  __title: FAQ
  __description: Frequently Asked Questions about the product.
  __body_title: Frequently Asked Questions
</i18n>
