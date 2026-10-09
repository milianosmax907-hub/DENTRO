import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import { CourseCategory, CourseStatus } from '../types';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Tag,
  Search,
  Filter
} from 'lucide-react';

export const CoursesView: React.FC = () => {
  const { language, viewCourseDetails, bookCourse, t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | CourseStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory =
      selectedCategory === 'all' || course.category === selectedCategory;
    const matchesStatus =
      selectedStatus === 'all' || course.status === selectedStatus;
    const matchesSearch =
      searchQuery.trim() === '' ||
      course.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDescription[language].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-12 py-6">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5E8DF] text-xs font-bold text-[#123B36]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.coursesList.kicker}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#123B36] tracking-tight">
          {t.coursesList.title}
        </h1>
        <p className="text-sm sm:text-base text-[#405852] leading-relaxed">
          {language === 'ar'
            ? 'برامج تدريبية مصممة بعناية لتزويدك بالمهارة الإكلينيكية واليدوية الدقيقة. الدورة الأولى المخططة هي "تحضير الأسنان"، وتفاصيل المواعيد والمدرب ستعلن قريباً.'
            : 'Meticulously structured simulation programs engineered for clinical motor mastery. Our flagship initial course is "Tooth Preparation", with official dates and trainers to be announced soon.'}
        </p>
      </div>

      {/* Filter and Search Bar (Segmented Controls) */}
      <div className="p-4 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search box */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 text-[#405852] absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'ar'
                  ? 'ابحث باسم الدورة أو المهارة...'
                  : 'Search by course title or skill...'
              }
              className="w-full pl-9 pr-4 rtl:pr-9 rtl:pl-4 py-2.5 rounded-xl border border-[#E2E8E4] text-xs sm:text-sm bg-[#F8F7F2] focus:outline-none focus:border-[#123B36] transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="md:col-span-7 flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-[#123B36] text-white shadow-xs'
                  : 'bg-[#F8F7F2] text-[#405852] hover:bg-[#D5E8DF] hover:text-[#123B36]'
              }`}
            >
              {t.coursesList.filterAll}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('prosthodontics')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                selectedCategory === 'prosthodontics'
                  ? 'bg-[#123B36] text-white shadow-xs'
                  : 'bg-[#F8F7F2] text-[#405852] hover:bg-[#D5E8DF] hover:text-[#123B36]'
              }`}
            >
              {t.coursesList.filterProstho}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('restorative')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                selectedCategory === 'restorative'
                  ? 'bg-[#123B36] text-white shadow-xs'
                  : 'bg-[#F8F7F2] text-[#405852] hover:bg-[#D5E8DF] hover:text-[#123B36]'
              }`}
            >
              {t.coursesList.filterRestorative}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('endodontics')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                selectedCategory === 'endodontics'
                  ? 'bg-[#123B36] text-white shadow-xs'
                  : 'bg-[#F8F7F2] text-[#405852] hover:bg-[#D5E8DF] hover:text-[#123B36]'
              }`}
            >
              {t.coursesList.filterEndo}
            </button>
          </div>
        </div>

        {/* Status Filter Row */}
        <div className="pt-3 border-t border-[#E2E8E4] flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-[#405852]">
            <Filter className="w-3.5 h-3.5" />
            <span className="font-semibold">{language === 'ar' ? 'حالة التسجيل:' : 'Status:'}</span>
            <button
              type="button"
              onClick={() => setSelectedStatus('all')}
              className={`px-2 py-0.5 rounded ${
                selectedStatus === 'all'
                  ? 'bg-[#123B36] text-white font-bold'
                  : 'hover:text-[#123B36]'
              }`}
            >
              {t.coursesList.filterStatusAll}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setSelectedStatus('coming_soon')}
              className={`px-2 py-0.5 rounded ${
                selectedStatus === 'coming_soon'
                  ? 'bg-[#123B36] text-white font-bold'
                  : 'hover:text-[#123B36]'
              }`}
            >
              {t.coursesList.filterStatusComingSoon}
            </button>
          </div>

          <div className="text-[#405852] tabular-nums font-medium">
            {language === 'ar'
              ? `${filteredCourses.length} دورات معروضة`
              : `${filteredCourses.length} courses listed`}
          </div>
        </div>
      </div>

      {/* Courses Cards Grid */}
      {filteredCourses.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-[#E2E8E4] space-y-3">
          <p className="text-base font-semibold text-[#123B36]">
            {language === 'ar' ? 'لا توجد دورات مطابقة للبحث' : 'No courses match your filter'}
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSelectedStatus('all');
              setSearchQuery('');
            }}
            className="text-xs text-[#123B36] font-bold underline"
          >
            {language === 'ar' ? 'إعادة ضبط الفلاتر' : 'Reset filters'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <article
              key={course.id}
              className="rounded-2xl bg-white border border-[#E2E8E4] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Media */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 px-3 py-1 rounded-full text-xs font-bold bg-[#123B36]/90 text-white backdrop-blur-md">
                    {course.status === 'coming_soon'
                      ? language === 'ar' ? 'قريباً' : 'Coming Soon'
                      : language === 'ar' ? 'التسجيل متاح' : 'Open'}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  {/* Category unboxed text */}
                  <div className="flex items-center gap-2 text-xs text-[#405852]">
                    <span className="font-semibold text-[#123B36]">
                      {course.category === 'prosthodontics'
                        ? language === 'ar' ? 'الاستعاضة السنية' : 'Prosthodontics'
                        : course.category === 'restorative'
                        ? language === 'ar' ? 'العلاج التحفظي' : 'Restorative'
                        : language === 'ar' ? 'علاج الجذور' : 'Endodontics'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{language === 'ar' ? 'رؤوس محاكاة فكية' : 'Phantom Sim'}</span>
                  </div>

                  <h2 className="text-xl font-bold text-[#123B36] group-hover:text-[#1C554E] transition-colors leading-snug">
                    {course.title[language]}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#405852] line-clamp-3 leading-relaxed">
                    {course.shortDescription[language]}
                  </p>

                  {/* Target Audience Highlight */}
                  <div className="p-3 rounded-xl bg-[#F8F7F2] border border-[#E2E8E4] text-xs text-[#405852] space-y-1">
                    <span className="font-bold text-[#123B36] block">
                      {language === 'ar' ? 'الفئة المستهدفة:' : 'Target Audience:'}
                    </span>
                    <p className="line-clamp-2">
                      {course.targetAudience[language][0]}
                    </p>
                  </div>

                  {/* Placeholders strictly unconfirmed */}
                  <div className="pt-2 border-t border-[#E2E8E4] space-y-1.5 text-xs text-[#405852]">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{language === 'ar' ? 'المدرب:' : 'Trainer:'}</span>
                      <span className="text-[#123B36] font-semibold">{course.trainer.placeholderNotice[language]}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{language === 'ar' ? 'الموعد:' : 'Schedule:'}</span>
                      <span className="text-[#123B36] font-semibold">{course.schedule.placeholderNotice[language]}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{language === 'ar' ? 'الرسوم:' : 'Fees:'}</span>
                      <span className="text-[#123B36] font-semibold">{course.pricing.placeholderNotice[language]}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  type="button"
                  onClick={() => viewCourseDetails(course.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F8F7F2] hover:bg-[#D5E8DF] text-[#123B36] text-xs font-bold border border-[#E2E8E4] transition-colors text-center"
                >
                  {t.coursesList.detailsBtn}
                </button>
                <button
                  type="button"
                  onClick={() => bookCourse(course.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#123B36] hover:bg-[#1C554E] text-white text-xs font-bold transition-colors text-center"
                >
                  {t.coursesList.bookInterestBtn}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
