import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Globe,
  Sparkles
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    language,
    toggleLanguage,
    currentPage,
    setCurrentPage,
    bookCourse,
    setSidebarOpen,
    isDesktopSidebarCollapsed,
    toggleDesktopSidebar,
    t
  } = useApp();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8F7F2]/95 backdrop-blur-md border-b border-[#E2E8E4] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
        {/* Zone 1: Brand & Sidebar toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={toggleDesktopSidebar}
            aria-label={isDesktopSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="hidden lg:inline-flex p-2 rounded-lg text-[#123B36] hover:bg-[#D5E8DF]/60 transition-colors"
            title={isDesktopSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isDesktopSidebarCollapsed ? (
              <PanelLeftOpen className="w-5 h-5" />
            ) : (
              <PanelLeftClose className="w-5 h-5" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open mobile menu"
            className="lg:hidden p-2 rounded-lg text-[#123B36] hover:bg-[#D5E8DF]/60 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage('home')}
            className="group text-left rtl:text-right flex items-baseline gap-2 cursor-pointer focus:outline-none"
          >
            <span className="text-2xl font-extrabold tracking-tight text-[#123B36] group-hover:opacity-90 transition-opacity">
              DENTRO
            </span>
            <span className="hidden sm:inline-block text-[11px] font-semibold tracking-wider text-[#405852] uppercase">
              {language === 'ar' ? 'التدريب العملي' : 'PRACTICAL DENTAL'}
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links (Clean single-line text links) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#405852]">
          <button
            type="button"
            onClick={() => setCurrentPage('home')}
            className={`whitespace-nowrap transition-colors hover:text-[#123B36] pb-0.5 border-b-2 ${
              currentPage === 'home'
                ? 'border-[#123B36] text-[#123B36] font-semibold'
                : 'border-transparent'
            }`}
          >
            {t.nav.home}
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage('courses')}
            className={`whitespace-nowrap transition-colors hover:text-[#123B36] pb-0.5 border-b-2 ${
              currentPage === 'courses' || currentPage === 'course-details'
                ? 'border-[#123B36] text-[#123B36] font-semibold'
                : 'border-transparent'
            }`}
          >
            {t.nav.courses}
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage('schedule')}
            className={`whitespace-nowrap transition-colors hover:text-[#123B36] pb-0.5 border-b-2 ${
              currentPage === 'schedule'
                ? 'border-[#123B36] text-[#123B36] font-semibold'
                : 'border-transparent'
            }`}
          >
            {t.nav.schedule}
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage('trainers')}
            className={`whitespace-nowrap transition-colors hover:text-[#123B36] pb-0.5 border-b-2 ${
              currentPage === 'trainers'
                ? 'border-[#123B36] text-[#123B36] font-semibold'
                : 'border-transparent'
            }`}
          >
            {t.nav.trainers}
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage('about')}
            className={`whitespace-nowrap transition-colors hover:text-[#123B36] pb-0.5 border-b-2 ${
              currentPage === 'about'
                ? 'border-[#123B36] text-[#123B36] font-semibold'
                : 'border-transparent'
            }`}
          >
            {t.nav.about}
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage('contact')}
            className={`whitespace-nowrap transition-colors hover:text-[#123B36] pb-0.5 border-b-2 ${
              currentPage === 'contact'
                ? 'border-[#123B36] text-[#123B36] font-semibold'
                : 'border-transparent'
            }`}
          >
            {t.nav.contact}
          </button>
        </nav>

        {/* Zone 3: Language Toggle & Prominent Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#123B36] hover:bg-[#D5E8DF] border border-[#123B36]/15 transition-all whitespace-nowrap"
            title={language === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
          >
            <Globe className="w-3.5 h-3.5 text-[#123B36]" />
            <span>{t.nav.switchLang}</span>
          </button>

          <button
            type="button"
            onClick={() => bookCourse()}
            className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#123B36] hover:bg-[#1C554E] shadow-sm hover:shadow active:scale-[0.99] transition-all whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-4 h-4 text-[#D5E8DF]" />
            <span>{t.nav.bookNow}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
