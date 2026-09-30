import type { TestimonialItem } from '@/components/blocks/testimonials/testimonial-card'

// Demo placeholders: fictional people and quotes. Replace with real, attributed testimonials before launch.
export const testimonials: TestimonialItem[] = [
  {
    name: 'Dr. Meera Joshi',
    username: 'IQAC Coordinator',
    avatar: '/images/avatar/avatar-7.webp',
    rating: 5,
    content: (
      <>
        Quarter-end used to mean chasing spreadsheets for weeks. Now{' '}
        <span className='bg-primary/5 text-primary'>every entry arrives with its proof attached</span> and we verify it
        once, in one place.
      </>
    )
  },
  {
    name: 'Prof. Rohan Mehta',
    username: 'Head of Department',
    avatar: '/images/avatar/avatar-8.webp',
    rating: 4.5,
    content: (
      <>
        I can see my whole department at a glance and{' '}
        <span className='bg-primary/5 text-primary'>sign off portfolios and event proposals in minutes</span>, not after
        a stack of emails.
      </>
    )
  },
  {
    name: 'Dr. Kavya Iyer',
    username: 'Associate Professor',
    avatar: '/images/avatar/avatar-9.webp',
    rating: 5,
    content: (
      <>
        I log a paper, upload the proof and I&apos;m done. When something is missing,{' '}
        <span className='bg-primary/5 text-primary'>the correction note tells me exactly what to fix</span>.
      </>
    )
  },
  {
    name: 'Mr. Farhan Qureshi',
    username: 'Institute Admin',
    avatar: '/images/avatar/avatar-10.webp',
    rating: 4.5,
    content: (
      <>
        Circulars, roles, MOUs and downloads all live in one portal. The{' '}
        <span className='bg-primary/5 text-primary'>quarterly Excel sheet is ready the day the quarter closes</span>.
      </>
    )
  },
  {
    name: 'Dr. Sneha Kulkarni',
    username: 'Director, Research Centre',
    avatar: '/images/avatar/avatar-2.webp',
    rating: 4,
    content: (
      <>
        Our centre has its own workspace with the modules we actually use.{' '}
        <span className='bg-primary/5 text-primary'>SDG tagging made our impact report far easier</span> to put
        together.
      </>
    )
  },
  {
    name: 'Prof. Vikram Shah',
    username: 'Dean, Academics',
    avatar: '/images/avatar/avatar-1.webp',
    rating: 5,
    content: (
      <>
        On audit day we downloaded the proof pack and the academic booklet in one go.{' '}
        <span className='bg-primary/5 text-primary'>No all-nighters, no missing documents</span>.
      </>
    )
  }
]
