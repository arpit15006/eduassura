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

// Module names and details follow the EduAssura concept note.

export const majorModules: MajorModule[] = [
  {
    icon: <IdCardIcon />,
    title: 'Faculty Profile Management',
    description:
      'Comprehensive faculty profiles with qualifications, experience, departments, designations, photo, and document uploads. Incomplete profiles are flagged, and staff can be searched by name or ID.'
  },
  {
    icon: <BookOpenTextIcon />,
    title: 'Research Publication & Patent Tracking',
    description:
      'Journal papers, conference papers, books, book chapters, and patents - with indexing, DOI, ISSN, ISBN, co-authors, funding, and proof upload for complete research tracking.'
  },
  {
    icon: <CalendarDaysIcon />,
    title: 'Event Organization & Participation',
    description:
      'Events organized and participated - type, audience, funding, venue, dates, reports, glimpses, and attendance - plus event proposals reviewed by departments before approval.'
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Accreditation Data Collection',
    description:
      'Structured data collection for NAAC, NBA, NIRF, and other regulatory frameworks. The quality cell verifies entries, requests corrections, or rejects with documented reasons.'
  },
  {
    icon: <ChartColumnIcon />,
    title: 'Real-Time Analytics & KPI Monitoring',
    description:
      'Departmental and institutional dashboards with real-time performance metrics, KPIs, and analytics to support evidence-based decision making.'
  },
  {
    icon: <FileSpreadsheetIcon />,
    title: 'Automated Report Generation',
    description:
      'Quarterly Excel data sheets, academic booklets, accreditation-ready reports, and bulk proof downloads for faculty, departments, or the entire institution.'
  }
]

export const moduleGroups: ModuleGroup[] = [
  {
    icon: <IdCardIcon />,
    title: 'People & Profiles',
    modules: [
      {
        name: 'Faculty profile management',
        detail:
          'Teaching and non-teaching profiles: qualification, experience, department, designation, photo, appointment and joining letters. Incomplete profiles are flagged.'
      },
      {
        name: 'Research profile',
        detail: 'A summary research profile maintained alongside detailed publication and project entries.'
      },
      {
        name: 'Faculty augmentation',
        detail:
          'Visiting, adjunct and professor-of-practice appointments, plus workflows for new faculty requirements.'
      },
      { name: 'Professional membership', detail: 'Professional body memberships, with active status and proof.' },
      { name: 'Search', detail: 'Search faculty and staff across the directory, by name or ID code.' }
    ]
  },
  {
    icon: <BookOpenTextIcon />,
    title: 'Research & Innovation',
    modules: [
      {
        name: 'Research publications',
        detail:
          'Journal papers, conference papers, books and chapters, with indexing, DOI, ISSN, ISBN, co-authors, funding, and proof.'
      },
      {
        name: 'Patent & intellectual property',
        detail:
          'Patents and other IPR - national or international scope, application status, revenue, collaboration and proof.'
      },
      {
        name: 'Consultancy projects',
        detail: 'Sponsored consultancy with agency, status, revenue, discipline and completion details.'
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
        name: 'Event organization & participation',
        detail:
          'Events organized and participated: type, audience, funding, venue, dates, report, glimpses, flyer and attendance. Faculty can also plan upcoming events.'
      },
      {
        name: 'Event proposals',
        detail:
          'Proposal submission with guidelines, reviewed by the department or concerned authority before the event is held.'
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
    title: 'Recognition & Achievements',
    modules: [
      {
        name: 'Student achievement management',
        detail:
          'Student awards and activities recorded by mentors, with level, domain, rank and proof; downloadable as a compiled view.'
      },
      {
        name: 'Faculty awards & achievements',
        detail: 'Faculty awards with category, level, awarding body, date, amount, and proof.'
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
    title: 'Quality Assurance & Reporting',
    modules: [
      {
        name: 'Document verification workflow',
        detail:
          'Verify, request correction, or reject with a reason; send reminders; freeze quarters while corrections stay open. Multi-level approval workflows.'
      },
      {
        name: 'Document repository',
        detail: 'Centralized evidence management with version tracking and audit trails for all uploaded documents.'
      },
      {
        name: 'Accreditation data collection',
        detail: 'Structured data collection aligned with NAAC, NBA, NIRF, and other regulatory frameworks.'
      },
      {
        name: 'Automated report generation',
        detail: 'Quarterly Excel data sheets, academic booklets, and accreditation-ready reports with one-click generation.'
      },
      { name: 'Bulk proof downloads', detail: 'Download uploaded proofs in bulk, packed for audit use.' },
      {
        name: 'Institutional dashboards',
        detail: 'Role-based summary dashboards and charts for faculty, department, institute, centre and super admin.'
      },
      {
        name: 'Real-time analytics & KPI monitoring',
        detail:
          'Performance metrics, institutional KPIs, and analytics dashboards for evidence-based decision making.'
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
        name: 'Role-based access control',
        detail:
          'Configurable roles and permissions - each user sees only the institutes, modules, and data assigned to their role.'
      },
      {
        name: 'API integrations',
        detail:
          'Connect with existing ERP systems, HRMS, LMS, single sign-on, and national academic databases for seamless data flow.'
      },
      { name: 'Circulars', detail: 'Institute circulars published by admin and read by faculty and staff.' },
      {
        name: 'Support tickets',
        detail: 'Users raise a ticket from their portal; super admin tracks tickets and portal feedback.'
      },
      {
        name: 'Student strength',
        detail: 'Student counts by programme, year and semester, including lateral entry where applicable.'
      },
      { name: 'Programme information', detail: 'Programme master for the institutes on the portal.' }
    ]
  }
]
