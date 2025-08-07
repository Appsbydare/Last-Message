# Digital Legacy Service

A secure web platform for storing and scheduling delivery of final messages, legal documents, and important information to designated recipients after confirmed death or prolonged unresponsiveness.

## 🎯 Project Overview

This service provides peace of mind through secure, reliable digital legacy management that ensures important final communications and legal notifications reach the right people at the right time.

## ✨ Features

### Core Services
- **Final Messages**: Store and schedule delivery of emails, video/audio messages, and social media posts
- **Legal Documents**: Secure storage and delivery of wills, property deeds, insurance policies
- **Estate Coordination**: Financial account transfer instructions, digital asset inventory
- **Check-in System**: Automated monitoring to ensure timely delivery

### Service Tiers
- **Basic ($19/year)**: Up to 5 messages, email delivery, monthly check-ins, 1GB storage
- **Premium ($49/year)**: Unlimited messages, video/audio support, bi-weekly check-ins, 10GB storage
- **Estate ($149/year)**: All Premium features plus property notifications, legal network access, 50GB storage

## 🛠 Tech Stack

- **Frontend**: Next.js 15 with React, TypeScript, Tailwind CSS
- **Deployment**: Vercel hosting platform
- **Security**: End-to-end encryption for sensitive data
- **Future Backend**: Node.js/Python API (planned)
- **Future Database**: PostgreSQL (planned)
- **Future Storage**: AWS S3 for file storage (planned)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Appsbydare/Last-Message.git
cd digital-legacy-service
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/           # Authentication pages
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   ├── (dashboard)/      # User dashboard pages
│   │   ├── dashboard/
│   │   ├── messages/
│   │   ├── documents/
│   │   ├── recipients/
│   │   └── settings/
│   ├── (marketing)/      # Public marketing pages
│   │   ├── pricing/
│   │   ├── about/
│   │   └── contact/
│   ├── (legal)/          # Legal pages
│   │   ├── terms/
│   │   ├── privacy/
│   │   └── legal-disclaimer/
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # Reusable UI components
│   ├── forms/            # Form components
│   └── layout/           # Layout components
├── lib/                  # Library functions
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Deployment

```bash
npm run build
npm start
```

## 🔒 Security & Compliance

- **GDPR/CCPA Compliance**: International data protection standards
- **End-to-End Encryption**: All sensitive data encrypted
- **Multi-Factor Authentication**: Enhanced account security
- **Legal Framework**: Professional partnerships with estate planning attorneys

## 📋 Legal Framework

### Service Limitations
- **No Legal Execution**: Service provides notifications only, not legal transfers
- **Verification Required**: Property and legal documents require professional validation
- **Jurisdictional Compliance**: Services vary based on local laws
- **Professional Referrals**: Complex matters referred to licensed professionals

## 🎯 Roadmap

### Phase 1: Foundation (Months 1-3)
- [x] Landing page development
- [x] Basic user registration system
- [ ] Legal consultation and compliance framework
- [ ] Business entity registration and insurance

### Phase 2: MVP Development (Months 4-6)
- [ ] Complete user dashboard
- [ ] Document upload and storage system
- [ ] Basic check-in and delivery system
- [ ] Payment integration
- [ ] Admin monitoring tools

### Phase 3: Enhancement (Months 7-9)
- [ ] Legal document verification system
- [ ] Professional partnership network
- [ ] Advanced security features
- [ ] Mobile-responsive optimization
- [ ] Customer support system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@digitallegacyservice.com or create an issue in this repository.

## ⚠️ Disclaimer

This service provides digital legacy management tools but does not constitute legal advice. Users should consult with qualified legal professionals for estate planning and legal document preparation.

---

**Digital Legacy Service** - Ensuring your final wishes are carried out with peace of mind.
