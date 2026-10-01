<div align="center">
  <img src="public/images/parul-logo-new.png" alt="EduAssura Logo" width="300" />

  # EduAssura 🎓

  **The Integrated Academic Quality Assurance & Institutional Data Management Platform.**

  [![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

  <p align="center">
    Automate institutional data collection, validation, monitoring, reporting, and quality assurance processes. Built for modern Higher Education Institutions.
  </p>
</div>

---

## 🌟 Key Features

- **🎓 Faculty Profile Management**: Centralized repository for qualifications, experience, and academic records.
- **📄 Research & Patent Tracking**: Seamlessly log publications, book chapters, and intellectual property.
- **🏆 Student Achievement Tracking**: Document awards, placements, and extracurricular success.
- **📊 Accreditation Readiness (NAAC/NBA/NIRF)**: Automated data aggregation mapping directly to major accreditation criteria.
- **⚙️ Workflow Automation**: Role-based access control, smart validations, and multi-level verification hierarchies.
- **📈 Real-Time Analytics**: Departmental and institutional dashboards for KPI monitoring.

## 💻 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Email Delivery**: [Nodemailer](https://nodemailer.com/)

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.17.0
- `pnpm` package manager (recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arpit15006/eduassura.git
   cd eduassura
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables:**
   Copy the example environment file and fill in your SMTP credentials for the contact form:
   ```bash
   cp .env.example .env.local
   ```
   *Edit `.env.local` to include your email credentials for the demo request form.*

4. **Run the development server:**
   ```bash
   pnpm run dev
   ```

5. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```text
eduassura/
├── public/                 # Static assets (images, fonts)
├── src/
│   ├── app/                # Next.js App Router pages & API routes
│   │   ├── api/contact/    # Nodemailer email endpoint
│   │   └── (pages)/        # Main landing pages
│   ├── assets/             # Data structures and raw SVG assets
│   ├── components/         # Reusable React components (UI & Blocks)
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utility functions and configurations
├── .env.example            # Environment variable templates
├── tailwind.config.ts      # Tailwind CSS configuration
└── next.config.mjs         # Next.js configuration
```

## 🚢 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Add your `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, and `CONTACT_EMAIL` environment variables in the Vercel dashboard.
4. Deploy!

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
