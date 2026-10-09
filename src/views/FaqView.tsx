import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export const FaqView: React.FC = () => {
  const { language, bookCourse, t } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-12 py-6">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5E8DF] text-xs font-bold text-[#123B36]">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{t.faqPage.kicker}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#123B36] tracking-tight">
          {t.faqPage.title}
        </h1>
        <p className="text-sm sm:text-base text-[#405852] leading-relaxed">
          {language === 'ar'
            ? 'جمعنا لكم أكثر الأسئلة شيوعاً حول التدريب، أجهزة المحاكاة، شروط القبول، وآلية الحجز الأولي في منصة DENTRO.'
            : 'Answers to the most frequent inquiries concerning our simulation curriculum, eligibility across universities, and preliminary reservation procedures.'}
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 max-w-3xl">
        {t.faqPage.generalFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-[#E2E8E4] overflow-hidden shadow-xs transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left rtl:text-right flex items-center justify-between gap-4 font-bold text-base text-[#123B36] hover:bg-[#F8F7F2]/50 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#405852] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#405852] leading-relaxed border-t border-[#E2E8E4]/60">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Booking Prompt */}
      <div className="p-8 rounded-2xl bg-[#123B36] text-[#F8F7F2] max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-1 text-center sm:text-left rtl:sm:text-right">
          <h3 className="text-lg font-bold text-white">
            {language === 'ar' ? 'هل لديك سؤال آخر؟' : 'Have another clinical question?'}
          </h3>
          <p className="text-xs text-[#D5E8DF]">
            {language === 'ar'
              ? 'تواصل معنا مباشرة أو املأ نموذج الحجز للمراجعة.'
              : 'Feel free to contact our team or submit an early review reservation.'}
          </p>
        </div>
        <button
          type="button"
          onClick={() => bookCourse()}
          className="px-6 py-3 rounded-xl bg-[#D5E8DF] text-[#123B36] text-xs font-bold hover:bg-white transition-all whitespace-nowrap shadow-xs"
        >
          {t.nav.bookNow}
        </button>
      </div>
    </div>
  );
};
