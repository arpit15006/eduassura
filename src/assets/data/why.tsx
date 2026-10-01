import {
  AwardIcon,
  BadgeCheckIcon,
  CodeXmlIcon,
  DatabaseZapIcon,
  GraduationCapIcon,
  HeadsetIcon,
  LightbulbIcon,
  MapPinIcon,
  PencilLineIcon,
  PresentationIcon,
  ShieldCheckIcon
} from 'lucide-react'

import type { WhyItem } from '@/components/blocks/why/why'

// Points aligned with the EduAssura concept note.
export const whyEduAssura: WhyItem[] = [
  {
    icon: <GraduationCapIcon />,
    title: 'Built by Academics',
    description: 'Designed with academicians and IQAC practitioners who understand accreditation from the inside.'
  },
  {
    icon: <AwardIcon />,
    title: 'NAAC, NBA & NIRF Expertise',
    description: 'Built around the data that NAAC accreditation, NBA evaluation, and NIRF rankings require.'
  },
  {
    icon: <BadgeCheckIcon />,
    title: 'Proven in Production',
    description: 'Running live at institutions, managing faculty profiles, research data, and accreditation workflows.'
  },
  {
    icon: <LightbulbIcon />,
    title: 'Quality Assurance Consulting',
    description: 'We suggest better processes, best practices, and workflow optimizations during setup and onboarding.'
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Secure & Isolated',
    description: 'Your own deployment, role-based access control, and complete data isolation - no other institution sees your data.'
  }
]

export const unlimitedServices: WhyItem[] = [
  {
    icon: <PencilLineIcon />,
    title: 'Unlimited Customization',
    description: 'Changes to existing modules, workflows, and configurations whenever you need them.'
  },
  { icon: <CodeXmlIcon />, title: 'Unlimited Development', description: 'New modules and integrations developed for your institution.' },
  {
    icon: <PresentationIcon />,
    title: 'Unlimited Training',
    description: 'Training for your faculty, administrators, IQAC staff, and support team.'
  },
  { icon: <HeadsetIcon />, title: 'Unlimited Support', description: 'Support hours with no cap.' },
  { icon: <MapPinIcon />, title: 'Unlimited Visits', description: 'On-site implementation visits as and when required.' },
  {
    icon: <DatabaseZapIcon />,
    title: 'Unlimited Data Porting',
    description: 'Your existing institutional data migrated into EduAssura.'
  }
]
