import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  PhoneCall,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const { language, t } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      setErrorMsg(
        language === 'ar'
          ? 'يرجى كتابة الاسم والرسالة بشكل صحيح.'
          : 'Please enter your name and message.'
      );
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 py-6">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5E8DF] text-xs font-bold text-[#123B36]">
          <PhoneCall className="w-3.5 h-3.5" />
          <span>{t.contactPage.kicker}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#123B36] tracking-tight">
          {t.contactPage.title}
        </h1>
        <p className="text-sm sm:text-base text-[#405852] leading-relaxed">
          {t.contactPage.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs space-y-6">
            <h2 className="text-lg font-bold text-[#123B36]">
              {language === 'ar' ? 'بيانات الاتصال المباشر' : 'Direct Contact Information'}
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#405852]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#123B36] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#123B36] block">{t.contactPage.cityLabel}</span>
                  <span>{t.contactPage.cityValue}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#123B36] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#123B36] block">{t.contactPage.phoneLabel}</span>
                  <span dir="ltr" className="tabular-nums font-mono">{t.contactPage.phoneValue}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#123B36] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#123B36] block">{t.contactPage.emailLabel}</span>
                  <span>{t.contactPage.emailValue}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#123B36] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#123B36] block">{t.contactPage.hoursLabel}</span>
                  <span>{t.contactPage.hoursValue}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#D5E8DF]/50 border border-[#D5E8DF] text-xs text-[#123B36] space-y-2">
            <p className="font-bold">
              {language === 'ar' ? 'التنسيق لطلبة المحافظات:' : 'Students from Outside Amman:'}
            </p>
            <p className="leading-relaxed">
              {language === 'ar'
                ? 'نراعي مواعيد المواصلات وجداول الطلاب القادمين من إربد والكرك والزرقاء عند جدولة الدورات لتكون في أوقات ملائمة.'
                : 'Session hours are configured to accommodate inter-city transit from Irbid, Karak, and Zarqa.'}
            </p>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-8 rounded-2xl bg-white border border-[#E2E8E4] shadow-xs space-y-6">
            <h2 className="text-xl font-bold text-[#123B36]">
              {t.contactPage.formTitle}
            </h2>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#D5E8DF]/60 border border-[#123B36]/20 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-[#123B36] mx-auto" />
                <h3 className="text-base font-bold text-[#123B36]">
                  {language === 'ar' ? 'تم استلام استفسارك' : 'Message Sent Successfully'}
                </h3>
                <p className="text-xs sm:text-sm text-[#123B36]/80 max-w-md mx-auto">
                  {t.contactPage.formSuccess}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  className="mt-3 px-4 py-2 rounded-lg bg-[#123B36] text-white text-xs font-semibold"
                >
                  {language === 'ar' ? 'إرسال رسالة أخرى' : 'Send another inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#123B36]">
                      {language === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8E4] text-xs sm:text-sm focus:border-[#123B36] outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#123B36]">
                      {language === 'ar' ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="079XXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8E4] text-xs sm:text-sm focus:border-[#123B36] outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#123B36]">
                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8E4] text-xs sm:text-sm focus:border-[#123B36] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#123B36]">
                    {language === 'ar' ? 'موضوع الاستفسار' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={language === 'ar' ? 'استفسار عن دورة تحضير الأسنان...' : 'Inquiry about Tooth Preparation...'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8E4] text-xs sm:text-sm focus:border-[#123B36] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#123B36]">
                    {language === 'ar' ? 'نص الرسالة *' : 'Message *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8E4] text-xs sm:text-sm focus:border-[#123B36] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-[#123B36] hover:bg-[#1C554E] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
