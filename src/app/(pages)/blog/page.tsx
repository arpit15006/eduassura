import type { Metadata } from 'next'

import CTASection from '@/components/blocks/cta/cta'
import HeroSection from '@/components/blog/hero-section/hero-section'
import SectionSeparator from '@/components/section-separator'
import BlogSection from '@/components/blog/blog-section/blog-section'
import { getPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Practical guides for IQAC teams on verified quality data, quarterly workflows, proofs, SDG mapping and faculty appraisal.',
  keywords: ['IQAC', 'quality assurance', 'accreditation', 'faculty appraisal', 'SDG'],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blog`
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
        'EduAssura is one platform for faculty activity, proof, verification and institutional quality data - built for universities across India and their IQAC.',
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      inLanguage: 'en-IN'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}#webpage`,
      name: 'Blog',
      description:
        'Practical guides for IQAC teams on verified quality data, quarterly workflows, proofs, SDG mapping and faculty appraisal.',
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
      isPartOf: {
        '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`
      },
      potentialAction: {
        '@type': 'ReadAction',
        target: [`${process.env.NEXT_PUBLIC_APP_URL}/blog`]
      }
    }
  ]
}

const BlogPage = async () => {
  const blogPosts = await getPosts()

  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <>
      <HeroSection posts={featuredPosts} />

      <SectionSeparator />

      <BlogSection posts={blogPosts} />

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

export default BlogPage
