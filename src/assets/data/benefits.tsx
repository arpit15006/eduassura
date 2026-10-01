import { BellRingIcon, Building2Icon, FileSpreadsheetIcon, LayersIcon, ShieldCheckIcon } from 'lucide-react'

import { type Features } from '@/components/blocks/benefits/benefits'
import BeamIllustrations01 from '@/components/shadcn-studio/illustrations/beam-illustrations/beam-illustrations-01/beam-illustrations-01'

export const benefits: Features = [
  {
    icon: <LayersIcon />,
    title: 'Reduce Manual Reporting by 70%',
    description:
      'Faculty enter their data once. Validated data flows automatically into dashboards, accreditation reports, quarterly sheets, the academic booklet and bulk proof downloads - eliminating duplicate entry across systems.',
    image: '/images/benefits/image-01.webp'
  },
  {
    icon: <BellRingIcon />,
    title: 'Improve Data Accuracy & Transparency',
    description:
      'Smart validations, workflow automation, and centralized evidence management ensure every record is complete, verified, and traceable. No more inconsistencies across spreadsheets.',
    image: '/images/benefits/image-02.webp'
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Enhance Accreditation Preparedness',
    description:
      'Accreditation data collection for NAAC, NBA, and NIRF is built into every module. Faculty submit, department heads review, and the quality cell verifies - with every step recorded for audit.',
    image: '/images/benefits/image-03.webp',
    visual: <BeamIllustrations01 />
  },
  {
    icon: <FileSpreadsheetIcon />,
    title: 'Enable Evidence-Based Decision Making',
    description:
      'Real-time institutional performance insights, departmental dashboards, and KPI monitoring give leadership the data they need. Download quarterly reports, academic booklets, or bulk proof packs in one click.',
    image: '/images/benefits/image-04.webp'
  },
  {
    icon: <Building2Icon />,
    title: 'Your Institution, Your Configuration',
    description:
      'Institutes, departments, roles, fields, proof rules, accreditation criteria, and approval workflows are configured to match how your institution works. Your data stays in your own deployment - fully isolated and secure.',
    image: '/images/benefits/image-05.webp'
  }
]
