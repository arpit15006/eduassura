import {
  AwardIcon,
  BookOpenTextIcon,
  CalendarDaysIcon,
  ChartColumnIcon,
  FileSpreadsheetIcon,
  IdCardIcon,
  LandmarkIcon,
  ShieldCheckIcon
} from 'lucide-react'

import type { ModuleGroup, MajorModule } from '@/components/blocks/modules/modules'

// Module names and details follow the EduAssura brochure.

export const majorModules: MajorModule[] = [
  {
    icon: <IdCardIcon />,
    title: 'Staff Profile',
    description:
      'Teaching and non-teaching profiles with qualification, experience, department, designation, photo, appointment and joining letters. Incomplete profiles are flagged, and staff can be searched by name or MIS code.'
  },
  {
    icon: <BookOpenTextIcon />,
    title: 'Research Publications',
    description:
      'Journal papers, conference papers, books and book chapters - with indexing, DOI, ISSN, ISBN, co-authors, funding, SDG and proof upload.'
  },
  {
    icon: <CalendarDaysIcon />,
    title: 'Events & Proposals',
    description:
      'Events organized and attended - type, audience, funding, venue, dates, SDG, report, glimpses, flyer and attendance - plus event proposals reviewed by the department or centre before the event.'
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Verification Workflow',
    description:
      'The quality cell verifies an entry, asks for a correction or rejects it with a reason. Reminders can be sent, and quarters can be frozen while corrections stay open until a set date.'
  },
  {
    icon: <ChartColumnIcon />,
    title: 'Appraisal Score',
    description:
      'A category-wise score calculated from each faculty member’s submitted and verified work, with headings and weightage set by your university.'
  },
  {
    icon: <FileSpreadsheetIcon />,
    title: 'Reports & Proof Downloads',
    description:
      'Quarterly Excel data sheets for a faculty member, department or institute, the academic booklet, and bulk proof downloads packed for audit use.'
  }
]

export const moduleGroups: ModuleGroup[] = [
  {
    icon: <IdCardIcon />,
    title: 'People & Profiles',
    modules: [
      {
        name: 'Staff profile',
        detail:
          'Teaching and non-teaching profiles: qualification, experience, department, designation, photo, appointment and joining letters. Incomplete profiles are flagged.'
      },
      {
        name: 'Research profile',
        detail: 'A summary research profile kept beside detailed publication and project entries.'
      },
      {
        name: 'Faculty augmentation',
        detail:
          'Visiting, adjunct and professor-of-practice appointments, plus a centre workflow for new faculty requirements.'
      },
      { name: 'Professional membership', detail: 'Professional body memberships, with active status and proof.' },
      { name: 'Search', detail: 'Search faculty and support staff across the directory, by name or MIS code.' }
    ]
  },
  {
    icon: <BookOpenTextIcon />,
    title: 'Research & Innovation',
    modules: [
      {
        name: 'Research publications',
        detail:
          'Journal papers, conference papers, books and chapters, with indexing, DOI, ISSN, ISBN, co-authors, funding, SDG and proof.'
      },
      {
        name: 'Intellectual property',
        detail:
          'Patents and other IPR - national or international scope, application status, revenue, collaboration and proof.'
      },
      {
        name: 'Consultancy projects',
        detail: 'Sponsored consultancy with agency, status, revenue, discipline, SDG and completion details.'
      },
      { name: 'Seed money', detail: 'In-house seed grants: title, team, dates, amount, year and proof.' },
      {
        name: 'External research projects',
        detail:
          'Submitted or granted projects - government or non-government, agency, funds, PI and Co-PI, duration and proof.'
      }
    ]
  },
  {
    icon: <CalendarDaysIcon />,
    title: 'Events & Engagement',
    modules: [
      {
        name: 'Activity & event management',
        detail:
          'Events organized and attended: type, audience, funding, venue, dates, SDG, report, glimpses, flyer and attendance. Faculty can also plan upcoming events.'
      },
      {
        name: 'Event proposals',
        detail:
          'Proposal submission with guidelines, reviewed by the department or concerned centre before the event is held.'
      },
      {
        name: 'External academic contribution',
        detail: 'Guest lectures, expert sessions and similar engagements, with level, mode, dates and invitation proof.'
      },
      { name: 'MOUs', detail: 'Memoranda of understanding, categories, and the activities linked to each MoU.' },
      { name: 'Student clubs & chapters', detail: 'Club and chapter records used with student activities.' }
    ]
  },
  {
    icon: <AwardIcon />,
    title: 'Recognition & Guidance',
    modules: [
      {
        name: 'Awards & achievements',
        detail: 'Faculty awards with category, level, awarding body, date, amount, SDG and proof.'
      },
      {
        name: 'Student achievements',
        detail:
          'Student awards and activities recorded by the mentor, with level, domain, rank and proof; downloadable as a compiled view.'
      },
      {
        name: 'Portfolio / coordinatorship',
        detail: 'Coordinator and co-coordinator roles, with dates, responsibility and proof.'
      },
      { name: 'Committee secretary', detail: 'Committee secretary assignments and related records.' },
      { name: 'Ph.D. guide corner', detail: 'Ph.D. guidance records for supervisors.' },
      {
        name: 'PG & multidisciplinary guidance',
        detail: 'Postgraduate and multidisciplinary student guidance and projects.'
      },
      {
        name: 'Academic content development',
        detail: 'Curriculum and academic content developed by faculty, with proof.'
      }
    ]
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Quality & Reporting',
    modules: [
      {
        name: 'Verification workflow',
        detail:
          'Verify, ask for a correction or reject with a reason; send reminders; freeze quarters while corrections stay open until a set date. HoDs verify portfolios and event proposals.'
      },
      {
        name: 'Faculty contribution view',
        detail: 'One place for institute and department users to see contribution across modules.'
      },
      {
        name: 'Appraisal score',
        detail: 'Category-wise score calculated from the faculty member’s submitted and verified work.'
      },
      {
        name: 'Quarterly data sheet',
        detail: 'Excel download of a quarter’s data for a faculty member, department or institute.'
      },
      { name: 'Academic booklet', detail: 'Booklet-style compilation of academic records.' },
      {
        name: 'Proof download',
        detail: 'Bulk download of uploaded proofs, including staff profile documents, packed for audit use.'
      },
      {
        name: 'Dashboards',
        detail: 'Role-based summary dashboards and charts for faculty, department, institute, centre and super admin.'
      },
      {
        name: 'SDG tagging',
        detail:
          'Tag academic, research, event and award forms to a Sustainable Development Goal and review submissions SDG-wise.'
      }
    ]
  },
  {
    icon: <LandmarkIcon />,
    title: 'Administration & Platform',
    modules: [
      {
        name: 'University setup',
        detail: 'Super admin maintains institutes, departments, programmes, cells and the academic quarter calendar.'
      },
      {
        name: 'Centre portals',
        detail:
          'Separate workspaces for university centres - such as international relations, faculty development, research review, sports, cultural and innovation - each with its own dashboard, events and modules.'
      },
      {
        name: 'Login & access',
        detail:
          'Role-based login, faculty registration with OTP, and menus that change by role. Users see only the institutes and modules assigned to them.'
      },
      { name: 'Circulars', detail: 'Institute circulars published by admin and read by faculty.' },
      {
        name: 'Support tickets',
        detail: 'Users raise a ticket from their portal; super admin tracks tickets and portal feedback.'
      },
      {
        name: 'Student strength',
        detail: 'Student counts by programme, year and semester, including lateral entry where used.'
      },
      { name: 'Programme information', detail: 'Programme master for the institutes on the portal.' }
    ]
  }
]
