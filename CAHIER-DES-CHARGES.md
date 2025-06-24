# Billpad - Project Specifications

## 1. Project Overview

### 1.1 Vision
Create a smart budget management application that automatically raises awareness of spending habits without the hassle of manual expense entry.

### 1.2 Problem Statement
- Lack of awareness about "small" expenses (2-3€ that accumulate)
- Manual entry too tedious in existing apps
- No clear visibility of spending patterns
- Poor financial consciousness among young adults

### 1.3 Value Proposition
"The app that makes you realize where your money goes, automatically"

## 2. Target Users

### 2.1 Primary User
- **Age**: 18-35 years old
- **Profile**: Young professionals, students, first salaries
- **Behavior**: Daily smartphone users, digital banking
- **Problem**: "I don't know where my money goes"

### 2.2 User Needs
- Clear expense visibility without effort
- Awareness of spending habits
- Motivating and non-guilt-inducing reports
- Financial data security

## 3. Core Functionalities

### 3.1 Automatic Expense Import
- Smart CSV bank import
- Automatic parsing of French bank formats
- Auto-detection of columns (date, amount, description)

### 3.2 Intelligent Categorization
- AI categorization by keywords
- User habit learning
- Quick user validation ("Expense ID card")

### 3.3 "Screen Time" Style Reports
- **Daily**: "Today: 23€ spent"
- **Weekly**: "This week: 156€ (+12% vs last week)"
- **Monthly**: "This month: 680€, breakdown by categories"

### 3.4 Awareness Alerts
- "3rd coffee today = 9€"
- "You spend 40% more on Friday nights"
- "Small expenses this month: 127€"

### 3.5 Security & Privacy
- 1 user = 1 secure account
- Data encryption
- No data sharing
- Secure authentication

## 4. Technical Requirements

### 4.1 Web Application
- React + TypeScript + Vite
- Tailwind CSS for styling
- LocalStorage for data persistence
- Responsive design (mobile-friendly)

### 4.2 Mobile Application (Phase 2)
- React Native + Expo
- Native mobile features
- Offline capability
- Push notifications

### 4.3 Backend (Phase 3)
- Node.js + Express + TypeScript
- PostgreSQL database
- JWT authentication
- Cloud synchronization

## 5. Success Metrics

### 5.1 Functional
- App installable and functional on mobile
- CSV import works for major French banks
- Categorization accuracy > 80%
- Reports display correctly
- Data persists between sessions

### 5.2 Portfolio
- Impressive project for CV
- Demonstrates React/TypeScript skills
- Clean code on GitHub
- Professional documentation
- Deployed and accessible online

## 6. Development Phases

### Phase 1: Web MVP (Weeks 1-4)
- Basic web application
- CSV import and parsing
- Manual categorization
- Simple reports

### Phase 2: Intelligence (Weeks 5-8)
- AI categorization
- Advanced analytics
- Awareness alerts
- Professional UI/UX

### Phase 3: Mobile (Weeks 9-12)
- React Native version
- Mobile-specific features
- App store preparation

### Phase 4: Backend & Cloud (Weeks 13-16)
- User accounts
- Cloud synchronization
- Multi-device support

### Phase 5: Publication (Weeks 17-20)
- App store submission
- Production deployment
- Marketing and launch

## 7. Risks and Constraints

### 7.1 Technical Risks
- CSV format variations between banks
- AI categorization accuracy
- Mobile development learning curve
- App store approval process

### 7.2 Mitigation Strategies
- Start with major bank formats
- Fallback to manual categorization
- Use Expo for simplified mobile development
- Follow store guidelines strictly

## 8. Timeline

### Conservative Estimate: 5 months
- 1 month: Web MVP
- 1 month: Advanced features
- 1 month: Mobile development
- 1 month: Backend integration
- 1 month: Publication and launch

### Timeline flexibility based on:
- Learning pace
- Feature complexity
- Available development time
- Quality requirements
