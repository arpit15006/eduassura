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

// Points confirmed by the EduAssura team.
export const whyEduAssura: WhyItem[] = [
  {
    icon: <GraduationCapIcon />,
    title: 'Built by Academics',
    description: 'Designed with academicians and IQAC practitioners who know accreditation from the inside.'
  },
  {
    icon: <AwardIcon />,
    title: 'NAAC & NIRF Expertise',
    description: 'Built around the data that NAAC accreditation and NIRF rankings ask for.'
  },
  {
    icon: <BadgeCheckIcon />,
    title: 'Proven at Parul University',
    description: 'Running live at Parul University across its institutes.'
  },
  {
    icon: <LightbulbIcon />,
    title: 'Process Consulting',
    description: 'We suggest better processes and best practices while setting you up.'
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Secure & Isolated',
    description: 'Your own deployment, OTP registration and role-based access - no other campus sees your data.'
  }
]

export const unlimitedServices: WhyItem[] = [
  {
    icon: <PencilLineIcon />,
    title: 'Unlimited Changes',
    description: 'Changes to existing modules, whenever you need them.'
  },
  { icon: <CodeXmlIcon />, title: 'Unlimited Development', description: 'New modules developed for your university.' },
  {
    icon: <PresentationIcon />,
    title: 'Unlimited Training',
    description: 'Training for your faculty, staff and support team.'
  },
  { icon: <HeadsetIcon />, title: 'Unlimited Support', description: 'Support hours with no cap.' },
  { icon: <MapPinIcon />, title: 'Unlimited Visits', description: 'On-site visits as and when required.' },
  {
    icon: <DatabaseZapIcon />,
    title: 'Unlimited Data Porting',
    description: 'Your existing data migrated into EduAssura.'
  }
]
