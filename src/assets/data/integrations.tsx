import {
  BookOpenCheckIcon,
  DatabaseIcon,
  FileSpreadsheetIcon,
  GlobeIcon,
  KeyRoundIcon,
  UsersRoundIcon
} from 'lucide-react'

import type { Integration } from '@/components/blocks/integrations/integrations'

// Kinds of university systems EduAssura connects to over APIs. Add named products (with logos) once confirmed.
export const integrations: Integration[] = [
  {
    icon: <DatabaseIcon />,
    title: 'University ERP & student information system',
    description: 'Bring in institutes, programmes and student strength instead of entering them twice.'
  },
  {
    icon: <UsersRoundIcon />,
    title: 'HRMS & payroll',
    description: 'Keep staff profiles, departments, designations and appointments in step with HR records.'
  },
  {
    icon: <BookOpenCheckIcon />,
    title: 'Learning management system',
    description: 'Connect course and academic content data from the LMS your faculty already use.'
  },
  {
    icon: <KeyRoundIcon />,
    title: 'Single sign-on',
    description: 'Let faculty and staff sign in with the university accounts they already have.'
  },
  {
    icon: <GlobeIcon />,
    title: 'University website',
    description: 'Publish a public faculty directory on your existing website from verified profiles.'
  },
  {
    icon: <FileSpreadsheetIcon />,
    title: 'Reports & data exports',
    description: 'Send verified data to the reporting tools and formats your IQAC and leadership rely on.'
  }
]
