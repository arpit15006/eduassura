import { BellRingIcon, Building2Icon, FileSpreadsheetIcon, LayersIcon, ShieldCheckIcon } from 'lucide-react'

import { type Features } from '@/components/blocks/benefits/benefits'
import BeamIllustrations01 from '@/components/shadcn-studio/illustrations/beam-illustrations/beam-illustrations-01/beam-illustrations-01'

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
    image: '/images/benefits/image-03.webp',
    visual: <BeamIllustrations01 />
  },
  {
    icon: <FileSpreadsheetIcon />,
    title: 'Audit-Ready in One Click',
    description:
      'Download a quarter’s data sheet, the academic booklet or a bulk proof pack - for one faculty member, a department or the whole institute. The evidence NAAC peer teams and NIRF submissions ask for, in one place.',
    image: '/images/benefits/image-04.webp'
  },
  {
    icon: <Building2Icon />,
    title: 'Your University, Your Rules',
    description:
      'Your institutes, departments, roles, fields, proof rules, quarters and appraisal weightage are set up to match how your university works - with custom modules and approval steps when you need them. And your data stays in your own deployment: another university can never see it.',
    image: '/images/benefits/image-05.webp'
  }
]
