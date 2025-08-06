# Etiman Grup Portfolio Website

## Overview

This is a Turkish construction company portfolio website built as a full-stack application. The project showcases construction projects with a professional design inspired by Turkish construction industry standards. It features a React frontend with TypeScript, an Express.js backend, and PostgreSQL database integration using Drizzle ORM. The application displays project portfolios with detailed project information, image galleries, and responsive design optimized for desktop and mobile devices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development and building
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom color scheme (navy #002f53, gold #cfa93e)
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Responsive Design**: Mobile-first approach with hamburger menu on mobile devices

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for project CRUD operations
- **Error Handling**: Centralized error middleware with structured error responses
- **Development Setup**: Hot reloading with Vite integration in development mode

### Data Storage Solutions
- **Database**: PostgreSQL with Neon Database serverless driver
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Type-safe schema definitions with Zod validation
- **Migrations**: Drizzle Kit for database schema management
- **Fallback Storage**: In-memory storage implementation for development/testing

### Database Schema
- **Projects Table**: Core entity with fields for title, slug, status, location, client, date, description, image, gallery (JSON array), and scope (JSON array)
- **Users Table**: Basic user structure with username and password fields
- **Validation**: Drizzle-Zod integration for runtime type validation

### Authentication and Authorization
- **Implementation**: Basic user schema defined but authentication middleware not yet implemented
- **Session Management**: Connect-pg-simple for PostgreSQL session storage (dependency present)
- **Security**: Prepared for future implementation with proper session handling

### Content Management
- **Project Status**: Supports "Devam Eden" (Ongoing) and "Biten" (Completed) project statuses
- **Image Handling**: External image URLs with lazy loading optimization
- **Localization**: Turkish language content with English technical naming conventions
- **SEO-Friendly**: Slug-based URL structure for project detail pages

### Performance Optimizations
- **Image Loading**: Lazy loading implementation for project cards
- **Bundle Optimization**: Vite with ESBuild for production builds
- **Caching Strategy**: TanStack Query with infinite stale time for static content
- **Mobile Performance**: Optimized responsive design with mobile-first approach

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Connection**: Environment variable-based DATABASE_URL configuration

### UI and Styling
- **Shadcn/ui**: Pre-built accessible component library
- **Radix UI**: Headless UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Icon library for consistent iconography

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety and enhanced developer experience
- **ESLint/Prettier**: Code quality and formatting (implied by structure)
- **Replit Integration**: Development environment optimizations

### Third-Party Integrations
- **Unsplash**: External image hosting for project gallery images
- **React Query**: Server state synchronization and caching
- **Date-fns**: Date manipulation and formatting utilities
- **Class Variance Authority**: Type-safe component variant handling

### Build and Deployment
- **Production Build**: Vite for frontend, ESBuild for backend bundling
- **Asset Management**: Static file serving with Express.js
- **Environment Configuration**: Development and production environment separation