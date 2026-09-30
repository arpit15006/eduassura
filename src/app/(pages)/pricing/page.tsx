import type { Metadata } from 'next'

import CTASection from '@/components/blocks/cta/cta'
import PricingDetail from '@/components/pricing/pricing-detail'

import { plans, pricingFeatures } from '@/assets/data/pricing-details'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'EduAssura plans for single institutes, multi-institute universities and custom deployments.',
  keywords: ['pricing', 'plans', 'subscription', 'cost', 'features'],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`
  }
}

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
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}#webpage`,
      name: 'Pricing',
      description: 'EduAssura plans for single institutes, multi-institute universities and custom deployments.',
      url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      isPartOf: {
        '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`
      },
      potentialAction: {
        '@type': 'ReadAction',
        target: [`${process.env.NEXT_PUBLIC_APP_URL}/pricing`]
      }
    }
  ]
}

const PricingPage = () => {
  return (
    <>
      <PricingDetail plans={plans} features={pricingFeatures} />

      <CTASection />

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

export default PricingPage
