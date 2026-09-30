import { Building2Icon, LandmarkIcon, SchoolIcon } from 'lucide-react'

import { type Plans } from '@/components/blocks/pricing/pricing'

// Demo placeholders: plan names, prices and limits are illustrative. Replace with real pricing before launch.
export const plans: Plans = [
  {
    icon: <SchoolIcon />,
    title: 'Single Institute',
    description: 'For one college or institute getting started.',
    price: {
      yearly: 12499,
      monthly: 14999
    },
    period: '/month',
    buttonText: 'Book a demo',
    features: [
      '1 institute',
      'Faculty, HoD & admin portals',
      'Research, events & awards modules',
      'Verification workflow',
      'Quarterly Excel & proof downloads'
    ]
  },
  {
    icon: <Building2Icon />,
    title: 'University',
    description: 'For multi-institute universities.',
    price: {
      yearly: 33999,
      monthly: 39999
    },
    period: '/month',
    buttonText: 'Book a demo',
    features: [
      'Up to 10 institutes',
      'Cell & centre portals',
      'Appraisal score & academic booklet',
      'SDG tagging & SDG-wise review'
    ],
    extraFeatures: ['Your branding, roles & quarters', 'Dedicated onboarding', 'Priority support'],
    isPopular: true
  },
  {
    icon: <LandmarkIcon />,
    title: 'Enterprise',
    description: 'For large universities that need custom builds.',
    price: {
      yearly: 66999,
      monthly: 79999
    },
    period: '/month',
    buttonText: 'Talk to us',
    features: [
      'Unlimited institutes',
      'New modules & custom fields',
      'Extra approval steps',
      'Reports in your university’s format',
      'Dedicated success manager'
    ]
  }
]
