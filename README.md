# CorpComment

A React-based feedback collection and commentary application with hashtag filtering capabilities.

## 🚀 Project Overview

CorpComment is a modern web application built with React, TypeScript, and Vite. It enables users to submit feedback and filter comments by hashtags through an intuitive, modular component architecture.

## 📋 Features

- **Feedback Form**: Structured feedback submission interface
- **Feedback List**: Display and manage submitted feedback items
- **Hashtag Filtering**: Filter feedback by relevant hashtags
- **Responsive Header**: Includes logo, page heading, and decorative pattern
- **Clean Footer**: Simple copyright and attribution footer
- **Type-Safe**: Full TypeScript coverage with strict type checking

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Container.tsx          # Main content wrapper
│   ├── FeedbackForm.tsx        # Feedback submission form
│   ├── FeedbackList.tsx        # Feedback display component
│   ├── Footer.tsx              # Application footer
│   ├── HastagList.tsx          # Hashtag filtering component
│   ├── Header.tsx              # Header section with nested components
│   ├── Logo.tsx                # Logo display
│   ├── PageHeading.tsx         # Page title/heading
│   └── Pattern.tsx             # Decorative pattern
├── App.tsx                     # Main app component
├── App.css                     # Application styles
├── main.tsx                    # React DOM entry point
└── index.css                   # Base CSS styles
```

## 🛠️ Tech Stack

- **Framework**: React 19.2.6
- **Language**: TypeScript 6.0.2
- **Build Tool**: Vite 8.0.12
- **Styling**: CSS
- **Dev Tools**: ESLint, TypeScript Compiler

## 📦 Dependencies

### Runtime
- `react@^19.2.6`
- `react-dom@^19.2.6`

### Dev Dependencies
- `@vitejs/plugin-react@^6.0.1`
- `typescript@~6.0.2`
- `eslint@^10.3.0`
- `typescript-eslint@^8.59.2`
- `vite@^8.0.12`

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/debojit59/corpcomment.git
cd corpcomment

# Install dependencies
npm install
```

### Development

```bash
# Start development server with HMR
npm run dev

# Server runs at http://localhost:5173
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Quality

```bash
# Run ESLint checks
npm run lint
```

## 📝 Architecture

- **App.tsx**: Root component orchestrating Footer, Container, and HastagList
- **Header.tsx**: Contains Logo, PageHeading, Pattern, and FeedbackForm as nested components
- **Container.tsx**: Wraps Header and FeedbackList in semantic HTML main element
- **FeedbackList.tsx**: Renders feedback items from state
- **HastagList.tsx**: Provides hashtag-based filtering interface

## ⚙️ Configuration

### TypeScript
- **Target**: ES2023
- **Module Resolution**: Bundler (optimized for build tools)
- **JSX**: React JSX automatic runtime
- **Strict Mode**: Enabled with comprehensive linting
- **No Unused Variables/Parameters**: Enforced

### Vite
- React plugin with Oxc-powered compilation
- Fast Refresh for development
- Optimized production builds with code splitting

## 📄 Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | TypeScript check + Vite production build |
| `npm run lint` | Run ESLint checks |
| `npm run preview` | Preview production build locally |

## 📅 Project Status

✅ Initial scaffolding complete  
✅ Component architecture established  
✅ Build pipeline working  
✅ TypeScript strict mode enabled  
🚀 Ready for feature development

## 👤 Author

**Debojit Banerjee**  
GitHub: [@debojit59](https://github.com/debojit59)

## 📝 License

Private project - All rights reserved

---

**Last Updated**: June 6, 2026
