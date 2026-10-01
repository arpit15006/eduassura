import {
  BookOpenCheckIcon,
  DatabaseIcon,
  FileSpreadsheetIcon,
  GlobeIcon,
  KeyRoundIcon,
  UsersRoundIcon
} from 'lucide-react'

import type { Integration } from '@/components/blocks/integrations/integrations'

// API integration capabilities of EduAssura as described in the concept note.
export const integrations: Integration[] = [
  {
    icon: <DatabaseIcon />,
    title: 'Existing ERP & Student Information System',
    description: 'Seamlessly connect with your university ERP to import institutes, programmes, and student data without duplicate entry.'
  },
  {
    icon: <UsersRoundIcon />,
    title: 'HRMS & Payroll Systems',
    description: 'Keep faculty profiles, departments, designations, and appointment records synchronized with HR data.'
  },
  {
    icon: <BookOpenCheckIcon />,
    title: 'Learning Management Systems',
    description: 'Connect course and academic content data from the LMS your faculty and administrators already use.'
  },
  {
    icon: <KeyRoundIcon />,
    title: 'Single Sign-On & Authentication',
    description: 'Let faculty, administrators, and IQAC teams sign in with their existing institutional credentials.'
  },
  {
    icon: <GlobeIcon />,
    title: 'National Academic Databases',
    description: 'Future integration with national academic databases and regulatory portals for seamless data exchange.'
  },
  {
    icon: <FileSpreadsheetIcon />,
    title: 'Automated Reports & Data Exports',
    description: 'Send validated data to the reporting tools and accreditation formats your IQAC and leadership rely on.'
  }
]
