import type { Council } from '@/components/blocks/councils/councils'

// Regulators whose programmes EduAssura records faculty and programme data for.
// `logo` is the council's official mark; councils whose mark uses the State Emblem of India show initials instead.
export const councils: Council[] = [
  {
    name: 'National Medical Commission',
    short: 'NMC',
    logo: '/images/councils/nmc.png',
    programmes: 'MBBS, MD, MS, DM, MCh, Ph.D. (Medical Sciences)'
  },
  {
    name: 'All India Council for Technical Education',
    short: 'AICTE',
    logo: '/images/councils/aicte.png',
    programmes: 'B.Tech, M.Tech, Diploma, MCA, MBA'
  },
  {
    name: 'National Commission for Indian System of Medicine',
    short: 'NCISM',
    logo: '/images/councils/ncism.png',
    programmes: 'BAMS, MD (Ayurveda), MS (Ayurveda), Ph.D. (Ayurveda / Unani / Siddha)'
  },
  {
    name: 'National Commission for Homoeopathy',
    short: 'NCH',
    programmes: 'BHMS, MD (Homoeopathy), Ph.D. (Homoeopathy)'
  },
  {
    name: 'National Dental Commission (formerly DCI)',
    short: 'NDC',
    programmes: 'BDS, MDS'
  },
  {
    name: 'Indian Nursing Council',
    short: 'INC',
    logo: '/images/councils/inc.png',
    programmes: 'B.Sc., M.Sc., GNM, ANM, Post Basic B.Sc. Nursing'
  },
  {
    name: 'Pharmacy Council of India',
    short: 'PCI',
    logo: '/images/councils/pci.png',
    programmes: 'D.Pharm, B.Pharm, M.Pharm, Pharm.D'
  },
  {
    name: 'Indian Council of Agricultural Research',
    short: 'ICAR',
    logo: '/images/councils/icar.png',
    programmes: 'B.Sc. (Agriculture / Horticulture), B.Tech (Agri Engg), M.Sc., Ph.D.'
  },
  {
    name: 'Council of Architecture',
    short: 'CoA',
    logo: '/images/councils/coa.png',
    programmes: 'B.Arch, M.Arch'
  }
]
