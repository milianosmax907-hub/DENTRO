import React from 'react';
import { useApp } from '../context/AppContext';
import { PageId } from '../types';
import {
  Home,
  BookOpen,
  FileText,
  Calendar,
  Users,
  Info,
  HelpCircle,
  PhoneCall,
  BookmarkCheck,
  X,
  Sparkles,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface NavItem {
  id: PageId;
  label: { ar: string; en: string };
  icon: React.ComponentType<{ className?: string }>;
  badge?: { ar: string; en: string };
}

export const Sidebar: React.FC = () => {
  const {
    language,
    currentPage,
    setCurrentPage,
    sidebarOpen,
    setSidebarOpen,
    isDesktopSidebarCollapsed,
    toggleDesktopSidebar,
    bookCourse,
    t
  } = useApp();

  const navItems: NavItem[] = [
    {
      id: 'home',
      label: { ar: 'الرئيسية', en: 'Home' },
      icon: Home
    },
    {
      id: 'courses',
      label: { ar: 'الدورات التدريبية', en: 'Courses' },
      icon: BookOpen
    },
    {
      id: 'course-details',
      label: { ar: 'تفاصيل الدورة', en: 'Course Details' },
      icon: FileText
    },
    {
      id: 'schedule',
      label: { ar: 'مواعيد الدورات', en: 'Schedule' },
      icon: Calendar
    },
    {
      id: 'trainers',
      label: { ar: 'المدربون', en: 'Trainers' },
      icon: Users
    },
    {
      id: 'about',
      label: { ar: 'من نحن', en: 'About Us' },
      icon: Info
    },
    {
      id: 'faq',
      label: { ar: 'الأسئلة الشائعة', en: 'FAQ' },
      icon: HelpCircle
    },
    {
      id: 'contact',
      label: { ar: 'تواصل معنا', en: 'Contact Us' },
      icon: PhoneCall
    },
    {
      id: 'booking',
      label: { ar: 'حجز الدورة', en: 'Booking' },
      icon: BookmarkCheck,
      badge: { ar: 'جديد', en: 'Open' }
    }
  ];

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setSidebarOpen(false);
  };

  const isRtl = language === 'ar';

  return (
    <>
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          role="button"
          tabIndex={0}
          aria-label="Close menu backdrop"
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter') setSidebarOpen(false);
          }}
          className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-opacity"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`lg:hidden fixed top-0 bottom-0 ${
          isRtl ? 'right-0' : 'left-0'
        } z-50 w-72 max-w-[85vw] bg-[#F8F7F2] border-[#E2E8E4] ${
          isRtl ? 'border-l' : 'border-r'
        } shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          sidebarOpen
            ? 'translate-x-0'
            : isRtl
            ? 'translate-x-full'
            : '-translate-x-full'
        }`}
      >
        <div className="p-5 border-b border-[#E2E8E4] flex items-center justify-between">
          <div>
            <div className="text-xl font-black tracking-tight text-[#123B36]">
              DENTRO
            </div>
            <div className="text-[11px] font-semibold text-[#405852] uppercase">
              {t.brand.subtitle}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-lg text-[#123B36] hover:bg-[#D5E8DF]/60 transition-colors"
            aria-label="Close navigation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-4 py-3">
          <p className="text-xs font-medium text-[#405852] italic">
            "{language === 'ar' ? t.brand.tagline : t.brand.taglineEn}"
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#123B36] text-white shadow-xs'
                    : 'text-[#1C2D2A] hover:bg-[#D5E8DF]/50 hover:text-[#123B36]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4.5 h-4.5 shrink-0 ${
                      isActive ? 'text-[#D5E8DF]' : 'text-[#405852]'
                    }`}
                  />
                  <span>{item.label[language]}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-[#D5E8DF] text-[#123B36]'
                    }`}
                  >
                    {item.badge[language]}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[#E2E8E4] space-y-2">
          <button
            type="button"
            onClick={() => {
              bookCourse();
              setSidebarOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#123B36] text-white text-sm font-semibold hover:bg-[#1C554E] transition-all shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#D5E8DF]" />
            <span>{t.nav.bookNow}</span>
          </button>
          <div className="text-center text-[11px] text-[#405852]">
            Amman, Jordan · المملكة الأردنية الهاشمية
          </div>
        </div>
      </aside>

      {/* Desktop Persistent Collapsible Sidebar */}
      <aside
        className={`hidden lg:flex flex-col sticky top-18 h-[calc(100vh-4.5rem)] bg-[#F8F7F2] border-[#E2E8E4] ${
          isRtl ? 'border-l' : 'border-r'
        } transition-all duration-300 z-30 shrink-0 ${
          isDesktopSidebarCollapsed ? 'w-18' : 'w-64'
        }`}
      >
        {/* Header / Collapse trigger */}
        <div className="p-4 border-b border-[#E2E8E4] flex items-center justify-between">
          {!isDesktopSidebarCollapsed ? (
            <div className="overflow-hidden">
              <span className="text-xs font-bold uppercase tracking-wider text-[#405852]">
                {language === 'ar' ? 'فهرس المنصة' : 'Directory'}
              </span>
            </div>
          ) : (
            <div className="mx-auto">
              <div className="w-2 h-2 rounded-full bg-[#123B36]" />
            </div>
          )}

          <button
            type="button"
            onClick={toggleDesktopSidebar}
            className="p-1.5 rounded-md text-[#405852] hover:text-[#123B36] hover:bg-[#D5E8DF]/60 transition-colors"
            title={
              isDesktopSidebarCollapsed
                ? isRtl
                  ? 'توسيع القائمة'
                  : 'Expand menu'
                : isRtl
                ? 'طي القائمة'
                : 'Collapse menu'
            }
          >
            {isRtl ? (
              isDesktopSidebarCollapsed ? (
                <ChevronLeft className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )
            ) : isDesktopSidebarCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 overflow-y-auto px-2.5 py-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                title={isDesktopSidebarCollapsed ? item.label[language] : undefined}
                className={`w-full flex items-center ${
                  isDesktopSidebarCollapsed ? 'justify-center' : 'justify-between'
                } px-3 py-2.5 rounded-lg text-sm font-medium transition-all group ${
                  isActive
                    ? 'bg-[#123B36] text-white shadow-xs'
                    : 'text-[#1C2D2A] hover:bg-[#D5E8DF]/50 hover:text-[#123B36]'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Icon
                    className={`w-4.5 h-4.5 shrink-0 ${
                      isActive ? 'text-[#D5E8DF]' : 'text-[#405852] group-hover:text-[#123B36]'
                    }`}
                  />
                  {!isDesktopSidebarCollapsed && (
                    <span className="truncate">{item.label[language]}</span>
                  )}
                </div>

                {!isDesktopSidebarCollapsed && item.badge && (
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md shrink-0 ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-[#D5E8DF] text-[#123B36]'
                    }`}
                  >
                    {item.badge[language]}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Quick CTA on Sidebar */}
        <div className="p-3 border-t border-[#E2E8E4]">
          {!isDesktopSidebarCollapsed ? (
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => bookCourse()}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#123B36] text-white text-xs font-semibold hover:bg-[#1C554E] transition-all shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D5E8DF]" />
                <span>{t.nav.bookNow}</span>
              </button>
              <div className="text-[11px] text-center text-[#405852] truncate">
                Amman · Dental Training
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => bookCourse()}
              title={t.nav.bookNow}
              className="w-full flex items-center justify-center p-2.5 rounded-lg bg-[#123B36] text-white hover:bg-[#1C554E] transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#D5E8DF]" />
            </button>
          )}
        </div>
      </aside>
    </>
  );
};
