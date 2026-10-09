import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Users,
  Award,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export const TrainersView: React.FC = () => {
  const { language, bookCourse, t } = useApp();
  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-12 py-6">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5E8DF] text-xs font-bold text-[#123B36]">
          <Users className="w-3.5 h-3.5" />
          <span>{t.trainersPage.kicker}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#123B36] tracking-tight">
          {t.trainersPage.title}
        </h1>
        <p className="text-sm sm:text-base text-[#405852] leading-relaxed">
          {t.trainersPage.subtitle}
        </p>
      </div>

      {/* Official Announcement Policy */}
      <div className="p-8 rounded-3xl bg-[#123B36] text-[#F8F7F2] relative overflow-hidden shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D5E8DF]">
          <Sparkles className="w-4 h-4" />
          <span>{t.trainersPage.announcementPolicyTitle}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white max-w-2xl">
          {language === 'ar'
            ? 'سيتم الإعلان عن المدرب المشرف لدورة تحضير الأسنان قريباً'
            : 'Lead specialist trainer for the Tooth Preparation course will be announced soon'}
        </h2>
        <p className="text-xs sm:text-sm text-[#F8F7F2]/80 leading-relaxed max-w-2xl">
          {t.trainersPage.announcementPolicyDesc}
        </p>
      </div>

      {/* Selection Benchmarks */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[#123B36]">
          {language === 'ar' ? 'ركائز الكادر التعليمي في DENTRO' : 'Core Benchmarks of Our Faculty'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.trainersPage.criteria.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#D5E8DF] text-[#123B36] flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
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
      </div>

      {/* Transparent Mentorship Quote */}
      <div className="p-8 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs space-y-4">
        <div className="text-xs font-bold uppercase tracking-wider text-[#123B36]">
          {language === 'ar' ? 'فلسفة الإشراف' : 'Mentorship Philosophy'}
        </div>
        <blockquote className="text-base sm:text-lg text-[#1C2D2A] font-medium italic leading-relaxed">
          {language === 'ar'
            ? '"التعليم العملي ليس استعراضاً لمهارة المحاضر، بل هو القدرة على تمكين يد الطالب من تكرار الحركة الصحيحة بدقة وأمان."'
            : '"Practical coaching is never about showcasing the mentor\'s virtuosity; it is about empowering the trainee\'s hands to reproduce precision consistently and safely."'}
        </blockquote>
        <div className="pt-2 flex items-center justify-between text-xs text-[#405852]">
          <span>DENTRO Academic Committee · عمان، الأردن</span>
          <button
            type="button"
            onClick={() => bookCourse()}
            className="text-xs font-bold text-[#123B36] underline hover:text-[#1C554E]"
          >
            {language === 'ar' ? 'احجز واستعد للتدريب' : 'Register for upcoming cohort'}
          </button>
        </div>
      </div>
    </div>
  );
};
