/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndustryWins } from './components/IndustryWins';
import { SuccessStories } from './components/SuccessStories';
import { SmartAi } from './components/SmartAi';
import { WhyUs } from './components/WhyUs';
import { PortfolioGrid } from './components/PortfolioGrid';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { Comparison } from './components/Comparison';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ServicesPage } from './ServicesPage';
import { ProjectsPage } from './ProjectsPage';
import { ContactPage } from './ContactPage';
import { AboutPage } from './AboutPage';
import { TeamPage } from './TeamPage';
import { BlogPage } from './BlogPage';
import { BlogDetailsPage } from './BlogDetailsPage';
import { CareerPage } from './CareerPage';
import { Reveal } from './components/GSAPWrapper';
import { FloatingNav } from './components/FloatingNav';
import { DashboardLayout } from './components/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { Projects } from './pages/Projects';
import { Tasks } from './pages/Tasks';
import { TaskStages } from './pages/TaskStages';
import { Bugs } from './pages/Bugs';
import { BugStatuses } from './pages/BugStatuses';
import { Timesheets } from './pages/Timesheets';
import { DailyView } from './pages/timesheets/DailyView';
import { WeeklyView } from './pages/timesheets/WeeklyView';
import { MonthlyView } from './pages/timesheets/MonthlyView';
import { CalendarView } from './pages/timesheets/CalendarView';
import { Approvals } from './pages/timesheets/Approvals';
import { Reports } from './pages/timesheets/Reports';
import { Meetings } from './pages/Meetings';
import { Messenger } from './pages/Messenger';
import { BudgetDashboard } from './pages/budget/BudgetDashboard';
import { Budgets } from './pages/budget/Budgets';
import { Expenses } from './pages/budget/Expenses';
import { ExpenseApprovals } from './pages/budget/ExpenseApprovals';
import { ToDos } from './pages/ToDos';
import { ProjectReports } from './pages/ProjectReports';
import { MediaLibrary } from './pages/MediaLibrary';
import { Notes } from './pages/Notes';
import { Invoices } from './pages/Invoices';
import { Clients } from './pages/Clients';
import { ProjectBoard } from './pages/ProjectBoard';
import { Invoice } from './pages/Invoice';
import { Checkout } from './pages/Checkout';
import { PaymentFailed } from './pages/PaymentFailed';
import { PaymentVerification } from './pages/PaymentVerification';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsCondition } from './pages/TermsCondition';
import { Quote } from './pages/Quote';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LandingPage() {
  return (
    <main>
      <Hero />
      <Reveal><IndustryWins /></Reveal>
      <Reveal><SuccessStories /></Reveal>
      <Reveal><SmartAi /></Reveal>
      <Reveal><WhyUs /></Reveal>
      <Reveal><PortfolioGrid /></Reveal>
      <Reveal><Benefits /></Reveal>
      <Reveal><Pricing /></Reveal>
      <Reveal><Comparison /></Reveal>
      <Reveal><Testimonials /></Reveal>
    </main>
  );
}

// Wrapper for public marketing pages
function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-primary selection:text-white">
      <Navbar />
      {children}
      <Footer />
      <FloatingNav />
    </div>
  );
}

// Wrapper for standalone transactional pages (Checkout, Invoice, Quote)
function TransactionalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-primary selection:text-white">
      <Navbar />
      {children}
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* PUBLIC PAGES */}
        <Route path="/" element={<PublicLayout><LandingPage /></PublicLayout>} />
        <Route path="/services" element={<PublicLayout><ServicesPage /></PublicLayout>} />
        <Route path="/projects" element={<PublicLayout><ProjectsPage /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
        <Route path="/team" element={<PublicLayout><TeamPage /></PublicLayout>} />
        <Route path="/blog" element={<PublicLayout><BlogPage /></PublicLayout>} />
        <Route path="/blog-details" element={<PublicLayout><BlogDetailsPage /></PublicLayout>} />
        <Route path="/career" element={<PublicLayout><CareerPage /></PublicLayout>} />
        <Route path="/privacy-policy" element={<PublicLayout><PrivacyPolicy /></PublicLayout>} />
        <Route path="/terms-condition" element={<PublicLayout><TermsCondition /></PublicLayout>} />
        <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
        <Route path="/signup" element={<PublicLayout><Signup /></PublicLayout>} />

        {/* TRANSACTIONAL / STANDALONE PAGES */}
        <Route path="/checkout" element={<TransactionalLayout><Checkout /></TransactionalLayout>} />
        <Route path="/payment-failed" element={<TransactionalLayout><PaymentFailed /></TransactionalLayout>} />
        <Route path="/payment-verification" element={<TransactionalLayout><PaymentVerification /></TransactionalLayout>} />
        <Route path="/invoice" element={<TransactionalLayout><Invoice /></TransactionalLayout>} />
        <Route path="/quote" element={<TransactionalLayout><Quote /></TransactionalLayout>} />

        {/* DASHBOARD PORTAL PAGES */}
        <Route path="/app/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/app/projects" element={<DashboardLayout><Projects /></DashboardLayout>} />
        <Route path="/app/tasks" element={<DashboardLayout><Tasks /></DashboardLayout>} />
        <Route path="/app/task-stages" element={<DashboardLayout><TaskStages /></DashboardLayout>} />
        <Route path="/app/bugs" element={<DashboardLayout><Bugs /></DashboardLayout>} />
        <Route path="/app/bug-statuses" element={<DashboardLayout><BugStatuses /></DashboardLayout>} />
        
        {/* TIMESHEETS */}
        <Route path="/app/timesheets" element={<DashboardLayout><Timesheets /></DashboardLayout>} />
        <Route path="/app/timesheets/daily" element={<DashboardLayout><DailyView /></DashboardLayout>} />
        <Route path="/app/timesheets/weekly" element={<DashboardLayout><WeeklyView /></DashboardLayout>} />
        <Route path="/app/timesheets/monthly" element={<DashboardLayout><MonthlyView /></DashboardLayout>} />
        <Route path="/app/timesheets/approvals" element={<DashboardLayout><Approvals /></DashboardLayout>} />
        <Route path="/app/timesheets/reports" element={<DashboardLayout><Reports /></DashboardLayout>} />
        
        <Route path="/app/meetings" element={<DashboardLayout><Meetings /></DashboardLayout>} />
        <Route path="/app/zoom-meetings" element={<DashboardLayout><Meetings /></DashboardLayout>} />
        <Route path="/app/google-meetings" element={<DashboardLayout><Meetings /></DashboardLayout>} />
        <Route path="/app/messenger" element={<DashboardLayout><Messenger /></DashboardLayout>} />
        
        <Route path="/app/budget/dashboard" element={<DashboardLayout><BudgetDashboard /></DashboardLayout>} />
        <Route path="/app/budget/budgets" element={<DashboardLayout><Budgets /></DashboardLayout>} />
        <Route path="/app/budget/expenses" element={<DashboardLayout><Expenses /></DashboardLayout>} />
        <Route path="/app/budget/approvals" element={<DashboardLayout><ExpenseApprovals /></DashboardLayout>} />

        <Route path="/app/todos" element={<DashboardLayout><ToDos /></DashboardLayout>} />
        <Route path="/app/project-reports" element={<DashboardLayout><ProjectReports /></DashboardLayout>} />
        <Route path="/app/media" element={<DashboardLayout><MediaLibrary /></DashboardLayout>} />
        <Route path="/app/notes" element={<DashboardLayout><Notes /></DashboardLayout>} />
        <Route path="/app/invoice" element={<DashboardLayout><Invoices /></DashboardLayout>} />
        <Route path="/app/calendar" element={<DashboardLayout><CalendarView /></DashboardLayout>} />

        <Route path="/app/clients" element={<DashboardLayout><Clients /></DashboardLayout>} />
        <Route path="/app/project-board" element={<DashboardLayout><ProjectBoard /></DashboardLayout>} />

        <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
      </Routes>
    </>
  );
}

