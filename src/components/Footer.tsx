import React from 'react';
import { useApp } from '../context/AppContext';
import { PageId } from '../types';
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setCurrentPage, viewCourseDetails, bookCourse, t } = useApp();

  const handleNav = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#123B36] text-[#F8F7F2] border-t border-[#1C554E] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black tracking-tight text-[#F8F7F2]">
                DENTRO
              </span>
              <span className="text-xs font-semibold tracking-wider text-[#D5E8DF] uppercase">
                {t.brand.subtitle}
              </span>
            </div>
            <p className="text-sm font-medium text-[#D5E8DF] italic">
              "{language === 'ar' ? t.brand.tagline : t.brand.taglineEn}"
            </p>
            <p className="text-sm text-[#F8F7F2]/80 leading-relaxed max-w-md">
              {t.footer.description}
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-[#D5E8DF]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'عمّان، الأردن' : 'Amman, Jordan'}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>{language === 'ar' ? 'طلاب وخريجي طب الأسنان' : 'Dental Students & Graduates'}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#D5E8DF]">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2 text-sm text-[#F8F7F2]/80">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('courses')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.courses}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('schedule')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.schedule}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('trainers')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.trainers}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('faq')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.faq}
                </button>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#D5E8DF]">
              {t.footer.coursesHeading}
            </h3>
            <ul className="space-y-2 text-sm text-[#F8F7F2]/80">
              <li>
                <button
                  type="button"
                  onClick={() => viewCourseDetails('tooth-preparation')}
                  className="text-left rtl:text-right hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>
                    {language === 'ar' ? 'تحضير الأسنان (قريباً)' : 'Tooth Preparation'}
                  </span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => viewCourseDetails('direct-composite-layering')}
                  className="text-left rtl:text-right hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>
                    {language === 'ar' ? 'حشوات الكومبوزيت التجميلية' : 'Direct Composite'}
                  </span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => viewCourseDetails('endodontic-glide-path-rotary')}
                  className="text-left rtl:text-right hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>
                    {language === 'ar' ? 'علاج العصب والتحضير الآلي' : 'Rotary Endodontics'}
                  </span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => bookCourse()}
                  className="inline-flex items-center text-xs font-semibold text-[#D5E8DF] underline hover:text-white"
                >
                  {language === 'ar' ? 'طلب حجز مبكر' : 'Early Registration Portal'}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#D5E8DF]">
              {t.footer.contactHeading}
            </h3>
            <div className="space-y-2.5 text-sm text-[#F8F7F2]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D5E8DF] shrink-0 mt-0.5" />
                <span>{language === 'ar' ? 'عمّان، المملكة الأردنية الهاشمية' : 'Amman, Hashemite Kingdom of Jordan'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D5E8DF] shrink-0" />
                <span dir="ltr" className="tabular-nums">+962 7 9000 0000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D5E8DF] shrink-0" />
                <span>info@dentro-training.jo</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => handleNav('contact')}
                className="w-full py-2 px-3 rounded-lg border border-[#D5E8DF]/30 hover:border-[#D5E8DF] text-xs font-medium text-[#D5E8DF] hover:text-white transition-colors text-center"
              >
                {t.nav.contact}
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1C554E] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#D5E8DF]/80">
          <p className="text-center md:text-left rtl:md:text-right">
            {t.footer.disclaimer}
          </p>
          <p className="shrink-0">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
