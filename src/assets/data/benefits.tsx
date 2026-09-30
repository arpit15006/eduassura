import { BellRingIcon, FileSpreadsheetIcon, LayersIcon, ShieldCheckIcon } from 'lucide-react'

import { type Features } from '@/components/blocks/benefits/benefits'

export const benefits: Features = [
  {
    icon: <LayersIcon />,
    title: 'One Record, Every Report',
    description:
      'Faculty enter their work once. Verified data flows straight into dashboards, appraisal scores, quarterly Excel sheets, the academic booklet and proof downloads.',
    image: '/images/benefits/image-01.webp'
  },
  {
    icon: <BellRingIcon />,
    title: 'Reminders & Corrections',
    description:
      'Send reminders and correction requests from the portal. Faculty see exactly what to fix, and nobody chases anyone over email the week before an audit.',
    image: '/images/benefits/image-02.webp'
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Clear Verification Workflow',
    description:
      'Faculty submit, department heads check portfolios and proposals, and the quality cell verifies, corrects or rejects with a reason. Every step is recorded.',
    image: '/images/benefits/image-03.webp'
  },
  {
    icon: <FileSpreadsheetIcon />,
    title: 'Audit-Ready in One Click',
    description:
      'Download a quarter’s data sheet, the academic booklet or a bulk proof pack - for one faculty member, a department or the whole institute.',
    image: '/images/benefits/image-04.webp'
  }
]
