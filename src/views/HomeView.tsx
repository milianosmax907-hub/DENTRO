import React from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/coursesData';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  Award,
  ShieldCheck,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const { language, setCurrentPage, viewCourseDetails, bookCourse, t } = useApp();
  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <div className="space-y-24">
      {/* 1. Hero Section */}
      <section className="relative pt-6 sm:pt-10">
        <div className="rounded-3xl bg-[#123B36] text-[#F8F7F2] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          {/* Subtle architectural background grid / tint */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(#D5E8DF 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D5E8DF]/15 border border-[#D5E8DF]/30 text-xs font-semibold text-[#D5E8DF]">
                <Sparkles className="w-3.5 h-3.5 text-[#D5E8DF]" />
                <span>{t.hero.badge}</span>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-bold tracking-widest text-[#D5E8DF] uppercase">
                  {t.brand.subtitle}
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-balance">
                  <span className="block text-white">{t.hero.titlePrimary}</span>
                  <span className="block text-[#D5E8DF]">{t.hero.titleSecondary}</span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[#F8F7F2]/85 leading-relaxed max-w-2xl">
                {t.hero.subtext}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentPage('courses')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#D5E8DF] text-[#123B36] text-sm font-bold hover:bg-white transition-all shadow-md active:scale-[0.99]"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => bookCourse('tooth-preparation')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[#D5E8DF]/40 text-[#F8F7F2] text-sm font-semibold hover:bg-white/10 transition-all"
                >
                  <span>{t.hero.secondaryCta}</span>
                </button>
              </div>

              {/* Trust Indicators: Zero-pill discipline text with separators */}
              <div className="pt-6 border-t border-[#1C554E] flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-[#D5E8DF]">
                <span className="font-semibold text-white">
                  {language === 'ar' ? 'الجامعات الشريكة والمستهدفة:' : 'Target Universities:'}
                </span>
                <span>{language === 'ar' ? 'الجامعة الأردنية' : 'University of Jordan'}</span>
                <span aria-hidden="true">·</span>
                <span>{language === 'ar' ? 'جامعة العلوم والتكنولوجيا JUST' : 'JUST'}</span>
                <span aria-hidden="true">·</span>
                <span>{language === 'ar' ? 'جامعة مؤتة' : 'Mutah'}</span>
                <span aria-hidden="true">·</span>
                <span>{language === 'ar' ? 'جامعة اليرموك' : 'Yarmouk'}</span>
                <span aria-hidden="true">·</span>
                <span>{language === 'ar' ? 'خريجو الخارج' : 'Graduates Abroad'}</span>
              </div>
            </div>

            {/* Visual Hero Feature */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#D5E8DF]/20 shadow-2xl group bg-[#0A2421]">
                <img
                  src="/src/assets/images/hero_dental_simulation_1791576136483.jpg"
                  alt="DENTRO Phantom Head Dental Simulation Training in Amman Jordan"
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B36]/90 via-[#123B36]/20 to-transparent" />
                
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-[#123B36]/90 backdrop-blur-md border border-[#D5E8DF]/20 text-[#F8F7F2]">
                  <div className="flex items-center justify-between gap-3 text-xs text-[#D5E8DF] font-semibold mb-1">
                    <span>{language === 'ar' ? 'تدريب عملي على رؤوس المانيكان' : 'Phantom Head Clinical Drills'}</span>
                    <span className="tabular-nums">Amman, JO</span>
                  </div>
                  <p className="text-xs text-[#F8F7F2]/80 leading-snug">
                    {language === 'ar'
                      ? 'محاكاة سريرية مطابقة لواقع العمل في العيادات الخاصة والمراكز المتقدمة.'
                      : 'High-fidelity simulation mirroring private chairside workflow.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-KPI Row below Hero */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs">
            <div className="text-xl font-bold text-[#123B36]">{t.hero.metrics.simulationLab}</div>
            <div className="text-xs text-[#405852] mt-1">{t.hero.metrics.simulationDesc}</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs">
            <div className="text-xl font-bold text-[#123B36]">{t.hero.metrics.focusedCohorts}</div>
            <div className="text-xs text-[#405852] mt-1">{t.hero.metrics.focusedDesc}</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs">
            <div className="text-xl font-bold text-[#123B36]">{t.hero.metrics.handsOnRatio}</div>
            <div className="text-xs text-[#405852] mt-1">{t.hero.metrics.handsOnDesc}</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs">
            <div className="text-xl font-bold text-[#123B36]">{t.hero.metrics.nationalReach}</div>
            <div className="text-xs text-[#405852] mt-1">{t.hero.metrics.nationalDesc}</div>
          </div>
        </div>
      </section>

      {/* 2. Why Practical Training Matters Section */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold tracking-widest text-[#123B36] uppercase">
            {t.whyPractical.kicker}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123B36] tracking-tight">
            {t.whyPractical.title}
          </h2>
          <p className="text-sm sm:text-base text-[#405852] leading-relaxed">
            {t.whyPractical.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyPractical.points.map((point, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs hover:border-[#123B36]/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#D5E8DF] text-[#123B36] flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#123B36]">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#405852] leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured / Upcoming Courses Section */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-bold tracking-widest text-[#123B36] uppercase">
              {t.coursesList.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123B36] tracking-tight">
              {t.coursesList.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#405852]">
              {t.coursesList.firstCourseBanner}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setCurrentPage('courses')}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#123B36] hover:text-[#1C554E] hover:underline whitespace-nowrap self-start sm:self-auto"
          >
            <span>{language === 'ar' ? 'عرض كافة الدورات' : 'View All Courses'}</span>
            <ChevronIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl bg-white border border-[#E2E8E4] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Course Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={course.image}
                    alt={course.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Status Overlay */}
                  <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 px-3 py-1 rounded-full text-xs font-bold bg-[#123B36]/90 text-white backdrop-blur-md shadow-xs">
                    {course.status === 'coming_soon'
                      ? language === 'ar'
                        ? 'قريباً'
                        : 'Coming Soon'
                      : language === 'ar'
                      ? 'التسجيل متاح'
                      : 'Open'}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-[#405852]">
                    <span className="font-semibold text-[#123B36]">
                      {course.category === 'prosthodontics'
                        ? language === 'ar' ? 'الاستعاضة السنية' : 'Prosthodontics'
                        : course.category === 'restorative'
                        ? language === 'ar' ? 'العلاج التحفظي' : 'Restorative'
                        : language === 'ar' ? 'علاج الجذور' : 'Endodontics'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{language === 'ar' ? 'محاكاة عملية' : 'Phantom Sim'}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#123B36] group-hover:text-[#1C554E] transition-colors line-clamp-2">
                    {course.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#405852] line-clamp-3 leading-relaxed">
                    {course.shortDescription[language]}
                  </p>

                  {/* Placeholders: Strictly unconfirmed as instructed */}
                  <div className="pt-2 border-t border-[#E2E8E4] text-xs space-y-1.5 text-[#405852]">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{language === 'ar' ? 'المدرب:' : 'Trainer:'}</span>
                      <span className="text-[#123B36] font-semibold">{course.trainer.placeholderNotice[language]}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{language === 'ar' ? 'الموعد:' : 'Dates:'}</span>
                      <span className="text-[#123B36] font-semibold">{course.schedule.placeholderNotice[language]}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
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
            </div>
          ))}
        </div>
      </section>

      {/* 4. Training Approach Section (20% Theory, 20% Demo, 60% Hands-on) */}
      <section className="rounded-3xl bg-[#123B36] text-[#F8F7F2] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs font-bold tracking-widest text-[#D5E8DF] uppercase">
            {t.approach.kicker}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t.approach.title}
          </h2>
          <p className="text-sm sm:text-base text-[#D5E8DF]">
            {t.approach.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.approach.steps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-[#0A2421]/60 border border-[#D5E8DF]/20 flex flex-col justify-between space-y-6"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-mono font-bold text-[#D5E8DF]">
                  PHASE {step.number}
                </span>
                <span className="text-2xl font-black text-[#D5E8DF] tabular-nums">
                  {step.percent}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F8F7F2]/80 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Learning Benefits Section */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold tracking-widest text-[#123B36] uppercase">
            {t.benefits.kicker}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123B36] tracking-tight">
            {t.benefits.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.benefits.items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <CheckCircle2 className="w-6 h-6 text-[#123B36]" />
                <h3 className="text-base font-bold text-[#123B36]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#405852] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Final Registration Call to Action */}
      <section className="rounded-3xl bg-[#D5E8DF] text-[#123B36] p-8 sm:p-12 lg:p-16 text-center space-y-6 shadow-sm border border-[#123B36]/10">
        <div className="max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-bold tracking-widest uppercase text-[#123B36]/80">
            DENTRO — JORDAN
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-[#123B36] tracking-tight">
            {language === 'ar'
              ? 'جاهز لصقل مهاراتك السريرية؟'
              : 'Ready to elevate your clinical craftsmanship?'}
          </h2>
          <p className="text-sm sm:text-base text-[#123B36]/80 leading-relaxed">
            {language === 'ar'
              ? 'سجّل اهتمامك بالدورة التدريبية الأولى "تحضير الأسنان" لتكون في قائمة الأولوية فور فتح باب التسجيل الرسمي.'
              : 'Register early interest for our premier Tooth Preparation course to reserve your priority review slot.'}
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => bookCourse('tooth-preparation')}
            className="px-8 py-3.5 rounded-xl bg-[#123B36] text-white text-sm font-bold hover:bg-[#1C554E] transition-all shadow-md active:scale-[0.99]"
          >
            {t.nav.bookNow}
          </button>
          <button
            type="button"
            onClick={() => viewCourseDetails('tooth-preparation')}
            className="px-6 py-3.5 rounded-xl bg-white text-[#123B36] text-sm font-semibold hover:bg-[#F8F7F2] border border-[#123B36]/20 transition-all"
          >
            {t.coursesList.detailsBtn}
          </button>
        </div>
      </section>
    </div>
  );
};
