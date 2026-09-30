import Hero from '@/components/blocks/hero-section/hero-section'
import TrustedBrands from '@/components/blocks/trusted-brands/trusted-brands'
import Features from '@/components/blocks/features/features'
import Modules from '@/components/blocks/modules/modules'
import Benefits from '@/components/blocks/benefits/benefits'
import Testimonials from '@/components/blocks/testimonials/testimonials'
import FAQ from '@/components/blocks/faq/faq'
import CTA from '@/components/blocks/cta/cta'

import { logos } from '@/assets/data/trusted-brands'
import { testimonials } from '@/assets/data/testimonials'
import { faqItems } from '@/assets/data/faqs'
import { benefits } from '@/assets/data/benefits'
import { majorModules, moduleGroups } from '@/assets/data/modules'

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
        'EduAssura is one platform for faculty activity, proof, verification and institutional quality data - built for universities worldwide and their quality assurance teams.',
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

      <Benefits featuresList={benefits} />

      <SectionSeparator />

      <Testimonials testimonials={testimonials} />

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
