import Hero from '@/components/blocks/hero-section/hero-section'
import TrustedBrands from '@/components/blocks/trusted-brands/trusted-brands'
import Features from '@/components/blocks/features/features'
import Modules from '@/components/blocks/modules/modules'
import Councils from '@/components/blocks/councils/councils'
import Integrations from '@/components/blocks/integrations/integrations'
import Why from '@/components/blocks/why/why'
import Benefits from '@/components/blocks/benefits/benefits'

import FAQ from '@/components/blocks/faq/faq'
import CTA from '@/components/blocks/cta/cta'

import { logos } from '@/assets/data/trusted-brands'

import { faqItems } from '@/assets/data/faqs'
import { benefits } from '@/assets/data/benefits'
import { majorModules, moduleGroups } from '@/assets/data/modules'
import { councils } from '@/assets/data/councils'
import { integrations } from '@/assets/data/integrations'
import { unlimitedServices, whyEduAssura } from '@/assets/data/why'

import SectionSeparator from '@/components/section-separator'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`,
      name: 'EduAssura',
      description:
        'EduAssura is a comprehensive cloud-based platform designed to automate institutional data collection, validation, monitoring, reporting, and quality assurance processes for higher education institutions.',
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      inLanguage: 'en'
    }
  ]
}

const Home = () => {
  return (
    <>
      <Hero />

      <SectionSeparator />

      <TrustedBrands brandLogos={logos} />

      <SectionSeparator />

      <Features />

      <SectionSeparator />

      <Modules majorModules={majorModules} moduleGroups={moduleGroups} />

      <SectionSeparator />

      <Councils councils={councils} />

      <SectionSeparator />

      <Benefits featuresList={benefits} />

      <SectionSeparator />

      <Integrations integrations={integrations} />

      <SectionSeparator />

      <Why whyItems={whyEduAssura} services={unlimitedServices} />


      <SectionSeparator />

      <FAQ faqItems={faqItems} />

      <CTA />

      {/* Add JSON-LD to your page */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </>
  )
}

export default Home
