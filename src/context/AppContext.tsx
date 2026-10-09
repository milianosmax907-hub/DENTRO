import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, PageId, BookingSubmission } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { COURSES } from '../data/coursesData';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  selectedCourseId: string;
  setSelectedCourseId: (id: string) => void;
  viewCourseDetails: (courseId: string) => void;
  bookCourse: (courseId?: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isDesktopSidebarCollapsed: boolean;
  toggleDesktopSidebar: () => void;
  bookings: BookingSubmission[];
  submitBooking: (
    data: Omit<BookingSubmission, 'id' | 'referenceCode' | 'createdAt' | 'status' | 'courseTitle'>
  ) => Promise<BookingSubmission>;
  t: typeof TRANSLATIONS['ar'];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const BOOKINGS_STORAGE_KEY = 'dentro_demo_bookings_v1';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Arabic is default as per prompt
  const [language, setLanguageState] = useState<Language>('ar');
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('tooth-preparation');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isDesktopSidebarCollapsed, setIsDesktopSidebarCollapsed] = useState<boolean>(false);
  const [bookings, setBookings] = useState<BookingSubmission[]>([]);

  // Load existing demo bookings from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(BOOKINGS_STORAGE_KEY);
      if (stored) {
        setBookings(JSON.parse(stored));
      }
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  // Update HTML dir and lang
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const toggleDesktopSidebar = () => {
    setIsDesktopSidebarCollapsed((prev) => !prev);
  };

  const viewCourseDetails = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentPage('course-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const bookCourse = (courseId?: string) => {
    if (courseId) {
      setSelectedCourseId(courseId);
    }
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submitBooking = async (
    data: Omit<BookingSubmission, 'id' | 'referenceCode' | 'createdAt' | 'status' | 'courseTitle'>
  ): Promise<BookingSubmission> => {
    // Artificial latency for authentic experience (within guidelines)
    await new Promise((resolve) => setTimeout(resolve, 800));

    const course = COURSES.find((c) => c.id === data.courseId) || COURSES[0];
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceCode = `DEN-2026-${randomSuffix}`;

    const newBooking: BookingSubmission = {
      ...data,
      id: `booking-${Date.now()}`,
      referenceCode,
      courseTitle: course.title,
      status: 'submitted_for_review',
      createdAt: new Date().toISOString()
    };

    const updated = [newBooking, ...bookings];
    setBookings(updated);

    try {
      localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Storage quota fallback
    }

    return newBooking;
  };

  const t = TRANSLATIONS[language];

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        currentPage,
        setCurrentPage: (page: PageId) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        selectedCourseId,
        setSelectedCourseId,
        viewCourseDetails,
        bookCourse,
        sidebarOpen,
        setSidebarOpen,
        isDesktopSidebarCollapsed,
        toggleDesktopSidebar,
        bookings,
        submitBooking,
        t
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
