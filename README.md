# Magazine Platform

A modern, full-featured magazine platform built with cutting-edge web technologies. Built 100% on free-tier services with professional CI/CD deployment.

## 🚀 Features

- **Content-Focused Framework**: Built with Astro for optimal performance and SEO
- **TypeScript**: Strict TypeScript configuration for type safety
- **Tailwind CSS**: Custom theme with brand colors and typography
- **Authentication**: Secure user management with Clerk (10K MAU free)
- **Database**: PostgreSQL with Row Level Security via Supabase (500MB free)
- **Object Storage**: Image and asset storage with Cloudflare R2 (10GB free)
- **Hosting**: Global CDN with Cloudflare Pages (unlimited projects, unmetered bandwidth)
- **Analytics**: Google Analytics 4 integration with Data API
- **CI/CD**: Automated deployment with GitHub Actions

## 📋 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Astro 4.x |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3.x |
| Authentication | Clerk |
| Database | Supabase (PostgreSQL) |
| Storage | Cloudflare R2 |
| Hosting | Cloudflare Pages |
| Analytics | Google Analytics 4 |
| CI/CD | GitHub Actions |

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bri123an/magazine-platform.git
cd magazine-platform
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment file:
```bash
cp .env.example .env.local
```

4. Add your environment variables to `.env.local`

5. Start the development server:
```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the platform.

## 📁 Project Structure

```
magazine-platform/
├── src/
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Layout components
│   ├── lib/              # Library modules (types, clients)
│   ├── pages/            # Route-based pages
│   │   ├── articles/     # Article listing and detail pages
│   │   ├── authors/      # Author listing and detail pages
│   │   ├── categories/   # Category listing and detail pages
│   │   └── admin/        # Admin panel pages
│   └── styles/           # Global styles
├── scripts/              # Utility scripts (database seeding)
├── supabase/             # Database migrations
└── .github/              # CI/CD configuration
```

## 🔐 Environment Variables

See `.env.example` for all required environment variables. Key integrations:

- **Supabase**: Database URL and anon key
- **Clerk**: Secret and publishable keys for authentication
- **Cloudflare R2**: Account ID, access keys, and bucket name
- **Google Analytics**: Measurement ID for tracking
- **Cloudflare Pages**: API token and zone ID for deployment

## 🚢 Deployment

This project uses GitHub Actions for automated deployment to Cloudflare Pages.

### Setup GitHub Secrets

Add the following secrets in your GitHub repository settings:

1. `SUPABASE_URL` - Your Supabase project URL
2. `SUPABASE_ANON_KEY` - Supabase anon key
3. `CLERK_SECRET_KEY` - Clerk secret key
4. `CLERK_PUBLISHABLE_KEY` - Clerk publishable key
5. `R2_ACCOUNT_ID` - Cloudflare R2 account ID
6. `R2_ACCESS_KEY_ID` - R2 access key ID
7. `R2_SECRET_ACCESS_KEY` - R2 secret access key
8. `R2_BUCKET_NAME` - R2 bucket name
9. `GA_MEASUREMENT_ID` - Google Analytics measurement ID
10. `CLOUDFLARE_API_TOKEN` - Cloudflare API token
11. `CLOUDFLARE_ACCOUNT_ID` - Cloudflare account ID
12. `CLOUDFLARE_ZONE_ID` - Cloudflare zone ID

## 📊 Free Tier Limits

| Service | Feature | Free Limit |
|---------|---------|------------|
| Supabase | Database | 500MB |
| Clerk | Authentication | 10K MAU |
| Cloudflare R2 | Object Storage | 10GB |
| Cloudflare Pages | Hosting | Unlimited projects, unmetered bandwidth |
| GitHub Actions | CI/CD | 2,000 minutes/month |

**Total Monthly Cost: $0** 🎉

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npx ts-node scripts/seed-supabase.ts` - Seed database with sample data

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
