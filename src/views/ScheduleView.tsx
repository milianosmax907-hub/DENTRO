import React from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  AlertCircle,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export const ScheduleView: React.FC = () => {
  const { language, bookCourse, viewCourseDetails, t } = useApp();
  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-12 py-6">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5E8DF] text-xs font-bold text-[#123B36]">
          <Calendar className="w-3.5 h-3.5" />
          <span>{t.schedulePage.kicker}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#123B36] tracking-tight">
          {t.schedulePage.title}
        </h1>
        <p className="text-sm sm:text-base text-[#405852] leading-relaxed">
          {t.schedulePage.subtitle}
        </p>
      </div>

      {/* Transparency Banner */}
      <div className="p-4 rounded-2xl bg-[#D5E8DF]/60 border border-[#D5E8DF] flex items-start gap-3 text-xs sm:text-sm text-[#123B36]">
        <AlertCircle className="w-5 h-5 shrink-0 text-[#123B36] mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold">
            {t.schedulePage.transparencyNote}
          </p>
          <p className="text-xs text-[#123B36]/80">
            {language === 'ar'
              ? 'تلتزم DENTRO بعدم نشر تواريخ تقديرية غير نهائية لتفادي تعارض مواعيد الامتحانات أو الجداول السريرية للطلاب.'
              : 'DENTRO adheres strictly to verified dates to ensure zero scheduling conflicts with university examinations.'}
          </p>
        </div>
      </div>

      {/* Schedule Table / Cards */}
      <div className="space-y-6">
        {COURSES.map((course, idx) => (
          <div
            key={course.id}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#123B36]/30 transition-all"
          >
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2 text-xs text-[#405852]">
                <span className="font-mono font-bold text-[#123B36]">
                  {language === 'ar' ? `المسار 0${idx + 1}` : `TRACK 0${idx + 1}`}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold">
                  {course.category === 'prosthodontics'
                    ? language === 'ar' ? 'الاستعاضة السنية' : 'Prosthodontics'
                    : course.category === 'restorative'
                    ? language === 'ar' ? 'العلاج التحفظي' : 'Restorative'
                    : language === 'ar' ? 'علاج الجذور' : 'Endodontics'}
                </span>
              </div>

              <h2 className="text-xl font-bold text-[#123B36]">
                {course.title[language]}
              </h2>

              <p className="text-xs sm:text-sm text-[#405852]">
                {course.subtitle[language]}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#123B36] pt-1">
                <div className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-4 h-4 text-[#405852]" />
                  <span>{course.schedule.placeholderNotice[language]}</span>
                </div>
                <span aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-[#405852]" />
                  <span>{language === 'ar' ? 'عمّان، الأردن (قاعة المحاكاة)' : 'Amman, Jordan (Simulation Lab)'}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
              <button
                type="button"
                onClick={() => bookCourse(course.id)}
                className="py-2.5 px-5 rounded-xl bg-[#123B36] text-white text-xs font-bold hover:bg-[#1C554E] transition-colors text-center whitespace-nowrap shadow-xs"
              >
                {language === 'ar' ? 'تسجيل الاهتمام المسبق' : 'Early Interest Registration'}
              </button>
              <button
                type="button"
                onClick={() => viewCourseDetails(course.id)}
                className="py-2.5 px-5 rounded-xl bg-[#F8F7F2] text-[#123B36] text-xs font-bold border border-[#E2E8E4] hover:bg-[#D5E8DF] transition-colors text-center whitespace-nowrap"
              >
                {t.coursesList.detailsBtn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
