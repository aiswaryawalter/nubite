# NuBite - Functional Snack Bar Website

A modern, responsive marketing website for NuBite functional snack bars built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎯 **Hero Section**: Eye-catching landing with animated call-to-action
- 📱 **QR Survey Section**: QR code linking to customer feedback survey
- ✉️ **Email Subscription**: Collect early taste tester emails with validation
- 📝 **Contact Form**: Contact form with validation and success states
- 🎨 **Modern Design**: Beautiful, responsive design with healthy food theme
- 📱 **Mobile Responsive**: Optimized for all device sizes

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: React functional components with hooks
- **Forms**: Client-side validation and state management
- **API**: Mock API routes for form submissions

## Getting Started

### Prerequisites

- Node.js 18.18.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nubite
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── subscribe/     # Email subscription endpoint
│   │   └── sendMail/      # Contact form endpoint
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Logo.tsx           # Logo component
│   ├── Hero.tsx           # Hero section
│   ├── QRSection.tsx      # QR code section
│   ├── SubscribeSection.tsx # Email subscription
│   └── ContactForm.tsx    # Contact form
public/                     # Static assets
├── logo-placeholder.png   # Logo image (replace with actual)
└── qr-placeholder.png     # QR code image (replace with actual)
```

## Customization

### Colors and Theme

The color scheme is defined in `tailwind.config.js`:
- **Primary**: Green tones for health/nutrition theme
- **Accent**: Orange/yellow tones for energy/vitality
- **Neutral**: Beige and gray tones for clean, modern look

### Survey Integration

Update the survey URL in `src/components/QRSection.tsx`:
```typescript
const surveyUrl = "https://forms.google.com/your-actual-survey-url"
```

### Images

Replace placeholder images in the `public/` folder:
- `logo-placeholder.png` → Your actual logo
- `qr-placeholder.png` → QR code linking to your survey

## API Endpoints

### POST /api/subscribe
Handles email subscriptions for early taste testers.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

### POST /api/sendMail
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your products!"
}
```

## Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository or contact the development team.
