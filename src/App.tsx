import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { CoursesView } from './views/CoursesView';
import { CourseDetailsView } from './views/CourseDetailsView';
import { ScheduleView } from './views/ScheduleView';
import { TrainersView } from './views/TrainersView';
import { AboutView } from './views/AboutView';
import { FaqView } from './views/FaqView';
import { ContactView } from './views/ContactView';
import { BookingView } from './views/BookingView';

const MainContent: React.FC = () => {
  const { currentPage } = useApp();

  const renderCurrentView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView />;
      case 'courses':
        return <CoursesView />;
      case 'course-details':
        return <CourseDetailsView />;
      case 'schedule':
        return <ScheduleView />;
      case 'trainers':
        return <TrainersView />;
      case 'about':
        return <AboutView />;
      case 'faq':
        return <FaqView />;
      case 'contact':
        return <ContactView />;
      case 'booking':
        return <BookingView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F2] text-[#1C2D2A]">
      <Navbar />
      <div className="flex-1 flex w-full">
        <Sidebar />
        <main className="flex-1 min-w-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          {renderCurrentView()}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
