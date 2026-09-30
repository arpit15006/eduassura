import {
  AwardIcon,
  BookOpenTextIcon,
  Building2Icon,
  CalendarDaysIcon,
  LandmarkIcon,
  SchoolIcon,
  Settings2Icon,
  ShieldCheckIcon
} from 'lucide-react'

import { type Plans, type PricingFeature } from '@/components/pricing/pricing-detail'

// Demo placeholders: plan names, prices and limits are illustrative. Replace with real pricing before launch.
export const plans: Plans = [
  {
    icon: <SchoolIcon />,
    title: 'Single Institute',
    price: {
      yearly: 12499,
      monthly: 14999
    },
    period: '/month',
    buttonText: 'Book a demo',
    isPopular: false
  },
  {
    icon: <Building2Icon />,
    title: 'University',
    price: {
      yearly: 33999,
      monthly: 39999
    },
    period: '/month',
    buttonText: 'Book a demo',
    isPopular: true
  },
  {
    icon: <LandmarkIcon />,
    title: 'Enterprise',
    price: {
      yearly: 66999,
      monthly: 79999
    },
    period: '/month',
    buttonText: 'Talk to us',
    isPopular: false
  }
]

export const pricingFeatures: PricingFeature[] = [
  {
    category: 'Faculty & Research',
    icon: <BookOpenTextIcon />,
    features: [
      {
        name: 'Staff profile (teaching & non-teaching)',
        values: [true, true, true]
      },
      {
        name: 'Research profile',
        values: [true, true, true]
      },
      {
        name: 'Research publications',
        values: [true, true, true]
      },
      {
        name: 'Intellectual property',
        values: [true, true, true]
      },
      {
        name: 'Consultancy projects',
        values: [true, true, true]
      },
      {
        name: 'Seed money (internal research)',
        values: [true, true, true]
      },
      {
        name: 'External research projects',
        values: [true, true, true]
      }
    ]
  },
  {
    category: 'Events & Engagement',
    icon: <CalendarDaysIcon />,
    features: [
      {
        name: 'Activity & event management',
        values: [true, true, true]
      },
      {
        name: 'Event proposals',
        values: [true, true, true]
      },
      {
        name: 'External academic contribution',
        values: [true, true, true]
      },
      {
        name: 'MOUs',
        values: [true, true, true]
      },
      {
        name: 'Student clubs & chapters',
        values: [true, true, true]
      }
    ]
  },
  {
    category: 'Recognition & Guidance',
    icon: <AwardIcon />,
    features: [
      {
        name: 'Awards & achievements',
        values: [true, true, true]
      },
      {
        name: 'Student achievements',
        values: [true, true, true]
      },
      {
        name: 'Portfolio / coordinatorship',
        values: [true, true, true]
      },
      {
        name: 'Professional membership',
        values: [true, true, true]
      },
      {
        name: 'Committee secretary',
        values: [true, true, true]
      },
      {
        name: 'Ph.D. guide corner',
        values: [true, true, true]
      },
      {
        name: 'PG & multidisciplinary guidance',
        values: [true, true, true]
      },
      {
        name: 'Academic content development',
        values: [true, true, true]
      }
    ]
  },
  {
    category: 'Academics & Administration',
    icon: <SchoolIcon />,
    features: [
      {
        name: 'Student strength',
        values: [true, true, true]
      },
      {
        name: 'Programme information',
        values: [true, true, true]
      },
      {
        name: 'Faculty augmentation',
        values: [false, true, true]
      },
      {
        name: 'Circulars',
        values: [true, true, true]
      },
      {
        name: 'Search (faculty & support staff)',
        values: [true, true, true]
      },
      {
        name: 'Support tickets',
        values: [true, true, true]
      },
      {
        name: 'Role-based login & OTP registration',
        values: [true, true, true]
      }
    ]
  },
  {
    category: 'Quality & Reporting',
    icon: <ShieldCheckIcon />,
    features: [
      {
        name: 'Verification workflow',
        values: [true, true, true]
      },
      {
        name: 'Quarter freeze & correction window',
        values: [true, true, true]
      },
      {
        name: 'Faculty contribution view',
        values: [true, true, true]
      },
      {
        name: 'Role-based dashboards',
        values: [true, true, true]
      },
      {
        name: 'Quarterly data sheet (Excel)',
        values: [true, true, true]
      },
      {
        name: 'Bulk proof download',
        values: [true, true, true]
      },
      {
        name: 'Appraisal score',
        values: [false, true, true]
      },
      {
        name: 'Academic booklet',
        values: [false, 'Standard', 'Your format']
      },
      {
        name: 'SDG tagging & SDG-wise review',
        values: [false, true, true]
      }
    ]
  },
  {
    category: 'Setup & Support',
    icon: <Settings2Icon />,
    features: [
      {
        name: 'Institutes',
        values: ['1', 'Up to 10', 'Unlimited']
      },
      {
        name: 'Cell & centre portals',
        values: [false, 'Up to 10', 'Unlimited']
      },
      {
        name: 'Branding, roles, fields & quarters',
        values: [true, true, true]
      },
      {
        name: 'Custom modules & approval steps',
        values: [false, false, true]
      },
      {
        name: 'Public faculty directory on your website',
        values: [false, false, true]
      },
      {
        name: 'Support level',
        values: ['Email', 'Priority', 'Dedicated']
      }
    ]
  }
]
