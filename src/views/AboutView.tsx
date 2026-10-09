import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Info,
  Target,
  Eye,
  CheckCircle2,
  MapPin,
  Sparkles,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const { language, bookCourse, t } = useApp();
  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-16 py-6">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5E8DF] text-xs font-bold text-[#123B36]">
          <Info className="w-3.5 h-3.5" />
          <span>{t.aboutPage.kicker}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#123B36] tracking-tight">
          {t.aboutPage.title}
        </h1>
        <p className="text-base sm:text-lg text-[#123B36] font-medium italic">
          "{language === 'ar' ? t.brand.tagline : t.brand.taglineEn}"
        </p>
      </div>

      {/* Story & Image Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#123B36]">
              {language === 'ar' ? 'فكرة التأسيس والغاية' : 'The Genesis of DENTRO'}
            </h2>
            <p className="text-sm sm:text-base text-[#405852] leading-relaxed">
              {language === 'ar'
                ? 'انطلقت منصة DENTRO من ملاحظة متكررة لدى طلبة وخريجي طب الأسنان في الجامعات الأردنية: الرغبة العارمة في الممارسة السريرية المتقنة، في مقابل محدودية الساعات التدريبية على رؤوس المحاكاة الفردية في المناهج الجامعية المزدحمة.'
                : 'DENTRO originated from a consistent observation among dental students and graduates across Jordanian universities: an intense eagerness for clinical competence juxtaposed against limited individual simulator hours in crowded academic curriculums.'}
            </p>
            <p className="text-sm sm:text-base text-[#405852] leading-relaxed">
              {language === 'ar'
                ? 'نحن نوفر البيئة التدريبية الآمنة، الأدوات المعيارية، والإشراف الفردي الذي يحول التردد إلى ثقة، والارتباك إلى دقة حرفية.'
                : 'We deliver the safe simulation environment, standard clinical instrumentation, and one-on-one mentorship that turns hesitation into poise and clinical precision.'}
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-[#E2E8E4] shadow-md bg-white">
            <img
              src="/src/assets/images/dental_instruments_tray_1791576156853.jpg"
              alt="DENTRO Clinical Precision Dental Instruments in Jordan"
              className="w-full h-72 sm:h-80 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 text-xs text-[#405852] text-center">
              {language === 'ar'
                ? 'أدوات تدريبية وسريرية قياسية لضمان انتقال سلس إلى العيادة الحقيقية'
                : 'Standard clinical instrumentation ensuring a seamless transition to private practice'}
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-[#123B36] text-[#F8F7F2] space-y-4 shadow-md">
          <div className="w-10 h-10 rounded-xl bg-[#D5E8DF] text-[#123B36] flex items-center justify-center font-bold">
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">{t.aboutPage.missionTitle}</h2>
          <p className="text-sm text-[#F8F7F2]/85 leading-relaxed">
            {t.aboutPage.missionDesc}
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white border border-[#E2E8E4] space-y-4 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-[#D5E8DF] text-[#123B36] flex items-center justify-center font-bold">
            <Eye className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-[#123B36]">{t.aboutPage.visionTitle}</h2>
          <p className="text-sm text-[#405852] leading-relaxed">
            {t.aboutPage.visionDesc}
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[#123B36]">
          {language === 'ar' ? 'قيمنا التأسيسية' : 'Foundational Values'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.aboutPage.values.map((v, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs space-y-2">
              <h3 className="text-base font-bold text-[#123B36]">{v.title}</h3>
              <p className="text-xs sm:text-sm text-[#405852] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Venue & Location in Jordan */}
      <div className="p-8 rounded-2xl bg-[#D5E8DF]/50 border border-[#D5E8DF] space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#123B36]">
          <MapPin className="w-4 h-4" />
          <span>{t.aboutPage.locationTitle}</span>
        </div>
        <p className="text-sm sm:text-base text-[#123B36] leading-relaxed max-w-2xl">
          {t.aboutPage.locationDesc}
        </p>
        <button
          type="button"
          onClick={() => bookCourse()}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#123B36] underline hover:text-[#1C554E]"
        >
          <span>{language === 'ar' ? 'سجّل اهتمامك بالدورات القادمة' : 'Submit early booking request'}</span>
          <ArrowIcon className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
