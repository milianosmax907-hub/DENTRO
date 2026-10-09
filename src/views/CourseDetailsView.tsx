import React from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  MapPin,
  User,
  DollarSign,
  AlertCircle,
  HelpCircle,
  Clock,
  Layers,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

export const CourseDetailsView: React.FC = () => {
  const {
    language,
    selectedCourseId,
    setCurrentPage,
    bookCourse,
    t
  } = useApp();

  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const course =
    COURSES.find((c) => c.id === selectedCourseId) || COURSES[0];

  return (
    <div className="space-y-12 py-6">
      {/* Back button */}
      <div>
        <button
          type="button"
          onClick={() => setCurrentPage('courses')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#123B36] hover:text-[#1C554E] hover:underline transition-colors"
        >
          {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{t.courseDetails.backToCourses}</span>
        </button>
      </div>

      {/* Hero Banner for Course */}
      <section className="rounded-3xl bg-[#123B36] text-[#F8F7F2] p-8 sm:p-12 relative overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#D5E8DF] text-[#123B36]">
                {course.status === 'coming_soon'
                  ? language === 'ar' ? 'قريباً' : 'Coming Soon'
                  : language === 'ar' ? 'التسجيل متاح' : 'Open'}
              </span>
              <span className="text-xs text-[#D5E8DF] font-semibold">
                {course.category === 'prosthodontics'
                  ? language === 'ar' ? 'الاستعاضة السنية الثابتة' : 'Fixed Prosthodontics'
                  : course.category === 'restorative'
                  ? language === 'ar' ? 'طب الأسنان التحفظي' : 'Operative Dentistry'
                  : language === 'ar' ? 'المعالجة اللبية' : 'Endodontics'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {course.title[language]}
            </h1>

            <p className="text-sm sm:text-base text-[#D5E8DF] font-medium leading-relaxed">
              {course.subtitle[language]}
            </p>

            <p className="text-xs sm:text-sm text-[#F8F7F2]/80 leading-relaxed max-w-2xl">
              {course.shortDescription[language]}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => bookCourse(course.id)}
                className="px-6 py-3 rounded-xl bg-[#D5E8DF] text-[#123B36] text-xs sm:text-sm font-bold hover:bg-white transition-all shadow-md"
              >
                {t.courseDetails.bookThisCourse}
              </button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#D5E8DF]/20 shadow-lg">
              <img
                src={course.image}
                alt={course.title[language]}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Details + Sticky Info Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left / Main Column */}
        <div className="lg:col-span-8 space-y-10">
          {/* Overview */}
          <section className="p-8 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#123B36]">
              {language === 'ar' ? 'نظرة عامة على الدورة' : 'Course Overview'}
            </h2>
            <p className="text-sm sm:text-base text-[#405852] leading-relaxed">
              {course.overview[language]}
            </p>
          </section>

          {/* Learning Objectives */}
          <section className="p-8 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#123B36]">
              {t.courseDetails.objectivesSection}
            </h2>
            <ul className="space-y-3">
              {course.learningObjectives[language].map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#405852]">
                  <CheckCircle2 className="w-5 h-5 text-[#123B36] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Practical Skills Practiced */}
          <section className="p-8 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#123B36]">
              {t.courseDetails.skillsSection}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.practicalSkills[language].map((skill, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#F8F7F2] border border-[#E2E8E4] space-y-1"
                >
                  <span className="text-xs font-mono font-bold text-[#123B36]">0{i + 1}</span>
                  <p className="text-xs sm:text-sm font-semibold text-[#1C2D2A] leading-relaxed">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Target Audience & Prerequisites */}
          <section className="p-8 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs space-y-6">
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#123B36]">
                {language === 'ar' ? 'الفئات المستهدفة' : 'Target Audience'}
              </h2>
              <ul className="space-y-2">
                {course.targetAudience[language].map((aud, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#405852]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#123B36]" />
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E2E8E4] space-y-2">
              <h3 className="text-sm font-bold text-[#123B36]">
                {language === 'ar' ? 'المتطلبات السابقة' : 'Prerequisites'}
              </h3>
              <p className="text-xs sm:text-sm text-[#405852] leading-relaxed">
                {course.prerequisites[language]}
              </p>
            </div>
          </section>

          {/* Course Specific FAQs */}
          <section className="p-8 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#123B36]">
              {t.courseDetails.faqSection}
            </h2>
            <div className="space-y-4">
              {course.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#F8F7F2] border border-[#E2E8E4] space-y-2">
                  <h3 className="text-sm font-bold text-[#123B36] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#123B36]" />
                    <span>{faq.question[language]}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#405852] leading-relaxed">
                    {faq.answer[language]}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Status & Logistics Card */}
        <div className="lg:col-span-4 sticky top-24 space-y-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E2E8E4] shadow-md space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#123B36] uppercase tracking-wider">
                {t.courseDetails.quickFacts}
              </span>
              <div className="text-lg font-bold text-[#1C2D2A]">
                {course.status === 'coming_soon'
                  ? language === 'ar' ? 'قريباً — في انتظار الاعتماد' : 'Coming Soon'
                  : language === 'ar' ? 'التسجيل متاح' : 'Registration Open'}
              </div>
            </div>

            {/* Trainer Information Block */}
            <div className="pt-4 border-t border-[#E2E8E4] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#123B36]">
                <User className="w-4 h-4" />
                <span>{t.courseDetails.trainerSection}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F8F7F2] border border-[#E2E8E4] text-xs text-[#405852] leading-relaxed">
                <span className="font-semibold text-[#123B36] block mb-1">
                  {t.courseDetails.tbaNotice}
                </span>
                {course.trainer.placeholderNotice[language]}
              </div>
            </div>

            {/* Schedule & Location Block */}
            <div className="pt-4 border-t border-[#E2E8E4] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#123B36]">
                <Calendar className="w-4 h-4" />
                <span>{t.courseDetails.scheduleSection}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F8F7F2] border border-[#E2E8E4] text-xs text-[#405852] leading-relaxed">
                <span className="font-semibold text-[#123B36] block mb-1">
                  {t.courseDetails.tbaNotice}
                </span>
                {course.schedule.placeholderNotice[language]}
              </div>
            </div>

            {/* Pricing Block */}
            <div className="pt-4 border-t border-[#E2E8E4] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#123B36]">
                <DollarSign className="w-4 h-4" />
                <span>{t.courseDetails.pricingSection}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F8F7F2] border border-[#E2E8E4] text-xs text-[#405852] leading-relaxed">
                <span className="font-semibold text-[#123B36] block mb-1">
                  {t.courseDetails.tbaNotice}
                </span>
                {course.pricing.placeholderNotice[language]}
              </div>
            </div>

            {/* Transparency Note */}
            <div className="p-3 rounded-xl bg-[#D5E8DF]/40 border border-[#D5E8DF] flex items-start gap-2 text-xs text-[#123B36]">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {t.courseDetails.tbaExplanation}
              </p>
            </div>

            {/* Action */}
            <button
              type="button"
              onClick={() => bookCourse(course.id)}
              className="w-full py-3.5 px-4 rounded-xl bg-[#123B36] hover:bg-[#1C554E] text-white text-xs sm:text-sm font-bold transition-all shadow-md text-center"
            >
              {t.courseDetails.bookThisCourse}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
