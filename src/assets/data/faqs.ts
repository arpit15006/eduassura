import type { FAQs } from '@/components/blocks/faq/faq'

export const faqItems: FAQs = [
  {
    question: 'What is EduAssura?',
    answer:
      'EduAssura is one platform for faculty activity, proof, verification and institutional quality data. Faculty enter their work, heads of department and the quality cell verify it, and leadership downloads reports, proofs and quarterly sheets from the same records. It is built for multi-institute universities: each campus keeps its own institutes, departments, programmes, roles and centres.'
  },
  {
    question: 'Who uses it?',
    answer:
      'Seven role-based portals. Faculty: profile, research, events, awards, guidance and proofs. Head of Department: department view, proposal check, portfolio check and reports. Institute Admin: institute-wide data, roles, circulars, MOUs and downloads. Quality / Data Cell: verify entries, send corrections and lock a quarter. Cell / Centre: events, MOUs, research, feedback and centre-specific work. Support staff: staff directory and dashboard. Super Admin: institutes, departments, programmes, cells, quarters and tickets.'
  },
  {
    question: 'Which modules are included?',
    answer:
      'Staff profiles (teaching and non-teaching, with incomplete profiles flagged and search by name or MIS code), research profile, research publications (indexing, DOI, ISSN, ISBN, co-authors, funding, SDG and proof), intellectual property, consultancy projects, seed money, external research projects, activity and event management, event proposals, external academic contribution, awards and achievements, student achievements, portfolio and coordinatorship, professional membership, Ph.D. guide corner, PG and multidisciplinary guidance, academic content development, committee secretary, MOUs, student clubs and chapters, student strength, programme information, faculty augmentation (visiting, adjunct and professor-of-practice appointments, plus a centre workflow for new faculty requirements), circulars, search and support tickets - plus university setup, where the super admin maintains institutes, departments, programmes, cells and the academic quarter calendar.'
  },
  {
    question: 'How does a record move through the system?',
    answer:
      'Faculty submit the form and upload proof. The record appears on the department and institute lists. The quality cell verifies it or returns it for correction. Verified data then flows into dashboards, appraisal, the quarterly Excel sheet, the academic booklet and proof downloads.'
  },
  {
    question: 'What happens when an entry is wrong or incomplete?',
    answer:
      'The quality cell can verify an entry, ask for a correction, or reject it with a reason, and reminders can be sent. Department heads can verify selected items such as portfolios and event proposals.'
  },
  {
    question: 'Can we lock a quarter?',
    answer:
      'Yes. Quarters can be frozen so new entries stop, while corrections remain open until a set date. The academic year, quarters and freeze dates are part of your configuration.'
  },
  {
    question: 'What reports and downloads do we get?',
    answer:
      'Role-based dashboards for faculty, department, institute, centre and super admin; a faculty contribution view across modules; a category-wise appraisal score calculated from submitted and verified work; a quarterly data sheet in Excel for a faculty member, department or institute; an academic booklet; and bulk proof downloads, including staff profile documents, packed for audit use.'
  },
  {
    question: 'Do cells and centres get their own workspace?',
    answer:
      'Yes. Each university centre gets its own dashboard, events and the modules that match its work. In the current deployment these include academic monitoring and faculty feedback, international relations and semester exchange, learning and academic event planning, faculty development and global certifications, research review, industry and corporate training participation, sports, cultural and innovation centres.'
  },
  {
    question: 'Can work be mapped to the Sustainable Development Goals?',
    answer:
      'Yes. Selected academic, research, event and award forms can be tagged to a Sustainable Development Goal, and submissions can be reviewed SDG-wise.'
  },
  {
    question: 'How do people log in?',
    answer:
      'Role-based login, with faculty registration verified by OTP. Menus change by role, and each user sees only the institutes and modules assigned to them. Users can raise support tickets from their portal, and the super admin tracks tickets and portal feedback.'
  },
  {
    question: 'Can it match our university’s structure and language?',
    answer:
      'Yes. Set during onboarding: your name, logo, colours and login page; institutes, campuses, departments and programmes; which modules each role can open; cells and centres with their own names and menus; dropdown values, mandatory fields and proof rules; academic year, quarters and freeze dates; who verifies which module; Excel columns and download packs; appraisal score headings and weightage; circulars, roles and ticket categories. Available as a custom build: a new module or field, an extra approval step, a report or booklet in your format, a new centre workflow, a public faculty directory on your existing website, and labels renamed to match your IQAC’s language.'
  },
  {
    question: 'Is our data kept separate from other universities?',
    answer:
      'Yes. EduAssura is deployed per university, and each university’s data stays in its own deployment. Another campus cannot see it.'
  }
]
