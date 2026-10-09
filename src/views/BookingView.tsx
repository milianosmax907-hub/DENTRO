import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { COURSES, JORDAN_UNIVERSITIES, ACADEMIC_LEVELS } from '../data/coursesData';
import { BookingSubmission } from '../types';
import {
  BookmarkCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  ShieldCheck,
  Building,
  User,
  Phone,
  Mail,
  GraduationCap,
  Layers,
  ArrowRight,
  ArrowLeft,
  FileCheck
} from 'lucide-react';

export const BookingView: React.FC = () => {
  const {
    language,
    selectedCourseId,
    setSelectedCourseId,
    submitBooking,
    setCurrentPage,
    t
  } = useApp();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [notes, setNotes] = useState('');
  const [consentPrivacy, setConsentPrivacy] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingSubmission | null>(null);

  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().split(' ').length < 2) {
      errs.fullName = t.booking.validation.nameRequired;
    }

    if (!phone.trim()) {
      errs.phone = t.booking.validation.phoneRequired;
    } else {
      // Clean phone number (spaces, hyphens, plus)
      const cleanPhone = phone.replace(/[\s-]/g, '');
      const phoneRegex = /^(\+?962|0)?7[789]\d{7}$/;
      // Allow flexible international/Jordanian numbers (min 8 digits, digits and optional +)
      const generalPhoneRegex = /^\+?[0-9]{8,15}$/;
      if (!phoneRegex.test(cleanPhone) && !generalPhoneRegex.test(cleanPhone)) {
        errs.phone = t.booking.validation.phoneInvalid;
      }
    }

    if (email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        errs.email = t.booking.validation.emailInvalid;
      }
    }

    if (!university) {
      errs.university = t.booking.validation.universityRequired;
    }

    if (!academicYear) {
      errs.academicYear = t.booking.validation.academicYearRequired;
    }

    if (!selectedCourseId) {
      errs.course = t.booking.validation.courseRequired;
    }

    if (!consentPrivacy) {
      errs.consentPrivacy = t.booking.validation.privacyRequired;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitBooking({
        courseId: selectedCourseId,
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email.trim() || undefined,
        university,
        academicYear,
        notes: notes.trim() || undefined,
        consentPrivacy
      });
      setConfirmedBooking(result);
    } catch {
      setErrors({
        submit:
          language === 'ar'
            ? 'حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.'
            : 'An error occurred while submitting your request. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setConfirmedBooking(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setUniversity('');
    setAcademicYear('');
    setNotes('');
    setConsentPrivacy(false);
    setErrors({});
  };

  const selectedCourse =
    COURSES.find((c) => c.id === selectedCourseId) || COURSES[0];

  return (
    <div className="space-y-12 py-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5E8DF] text-xs font-bold text-[#123B36]">
          <BookmarkCheck className="w-3.5 h-3.5" />
          <span>{t.booking.kicker}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#123B36] tracking-tight">
          {t.booking.title}
        </h1>
        <p className="text-sm sm:text-base text-[#405852] leading-relaxed">
          {t.booking.subtitle}
        </p>
      </div>

      {/* Demo Mode Notice & Review Notice */}
      <div className="space-y-3">
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
          <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold block">
              {language === 'ar' ? 'نموذج تجريبي (Demo Mode)' : 'Prototype Demo Mode'}
            </span>
            <p className="text-xs text-amber-800 leading-relaxed">
              {t.booking.demoNotice}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#D5E8DF]/60 border border-[#123B36]/20 text-[#123B36] text-xs sm:text-sm flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#123B36] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {t.booking.reviewNotice}
          </p>
        </div>
      </div>

      {/* Confirmation Screen */}
      {confirmedBooking ? (
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2E8E4] shadow-md space-y-8 animate-in fade-in duration-300">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#D5E8DF] text-[#123B36] flex items-center justify-center mx-auto">
              <FileCheck className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-[#123B36]">
              {t.booking.success.title}
            </h2>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F8F7F2] border border-[#E2E8E4] text-xs font-mono font-bold text-[#123B36]">
              <span>{t.booking.success.referenceLabel}</span>
              <span className="text-sm">{confirmedBooking.referenceCode}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#405852] max-w-lg mx-auto leading-relaxed">
              {t.booking.success.pendingExplanation}
            </p>
          </div>

          {/* Submission Details Summary */}
          <div className="p-6 rounded-2xl bg-[#F8F7F2] border border-[#E2E8E4] space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#123B36]">
              {t.booking.success.summaryHeading}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <span className="text-[#405852] block text-xs">{t.booking.success.applicantLabel}</span>
                <span className="font-bold text-[#1C2D2A]">{confirmedBooking.fullName}</span>
              </div>

              <div>
                <span className="text-[#405852] block text-xs">{t.booking.success.phoneLabel}</span>
                <span className="font-bold text-[#1C2D2A]" dir="ltr">{confirmedBooking.phone}</span>
              </div>

              <div>
                <span className="text-[#405852] block text-xs">{t.booking.success.universityLabel}</span>
                <span className="font-bold text-[#1C2D2A]">
                  {JORDAN_UNIVERSITIES.find((u) => u.id === confirmedBooking.university)?.[language] || confirmedBooking.university}
                </span>
              </div>

              <div>
                <span className="text-[#405852] block text-xs">{t.booking.success.levelLabel}</span>
                <span className="font-bold text-[#1C2D2A]">
                  {ACADEMIC_LEVELS.find((l) => l.id === confirmedBooking.academicYear)?.[language] || confirmedBooking.academicYear}
                </span>
              </div>

              <div className="sm:col-span-2 pt-2 border-t border-[#E2E8E4]">
                <span className="text-[#405852] block text-xs">{t.booking.success.courseLabel}</span>
                <span className="font-bold text-[#123B36] text-base">{confirmedBooking.courseTitle[language]}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-[#405852] border-t border-[#E2E8E4]">
              <span>{t.booking.success.demoBadge}</span>
              <span className="font-mono tabular-nums">{new Date(confirmedBooking.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Next Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleResetForm}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#F8F7F2] hover:bg-[#D5E8DF] text-[#123B36] text-xs sm:text-sm font-bold border border-[#E2E8E4] transition-colors text-center"
            >
              {t.booking.success.newBookingBtn}
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage('courses')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#123B36] hover:bg-[#1C554E] text-white text-xs sm:text-sm font-bold transition-colors text-center shadow-sm"
            >
              {t.booking.success.viewCoursesBtn}
            </button>
          </div>
        </div>
      ) : (
        /* Form */
        <form
          onSubmit={handleSubmit}
          noValidate
          className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2E8E4] shadow-md space-y-6"
        >
          {errors.submit && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errors.submit}</span>
            </div>
          )}

          {/* Selected Course Field */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#123B36] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#123B36]" />
              <span>{t.booking.form.course}</span>
            </label>
            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#E2E8E4] bg-[#F8F7F2] text-xs sm:text-sm font-semibold text-[#1C2D2A] focus:border-[#123B36] focus:bg-white outline-none transition-colors"
            >
              {COURSES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title[language]} ({c.status === 'coming_soon' ? (language === 'ar' ? 'قريباً' : 'Coming Soon') : 'Open'})
                </option>
              ))}
            </select>
            {errors.course && (
              <p className="text-xs text-red-600 font-medium">{errors.course}</p>
            )}
          </div>

          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#123B36] flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#123B36]" />
              <span>{t.booking.form.fullName}</span>
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder={t.booking.form.fullNamePlaceholder}
              className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm outline-none transition-colors ${
                errors.fullName
                  ? 'border-red-400 bg-red-50/30'
                  : 'border-[#E2E8E4] focus:border-[#123B36]'
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-600 font-medium">{errors.fullName}</p>
            )}
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#123B36] flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#123B36]" />
                <span>{t.booking.form.phone}</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.booking.form.phonePlaceholder}
                className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm outline-none transition-colors ${
                  errors.phone
                    ? 'border-red-400 bg-red-50/30'
                    : 'border-[#E2E8E4] focus:border-[#123B36]'
                }`}
              />
              <span className="text-[11px] text-[#405852] block">
                {t.booking.form.phoneHelp}
              </span>
              {errors.phone && (
                <p className="text-xs text-red-600 font-medium">{errors.phone}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#123B36] flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#123B36]" />
                <span>{t.booking.form.email}</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.booking.form.emailPlaceholder}
                className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm outline-none transition-colors ${
                  errors.email
                    ? 'border-red-400 bg-red-50/30'
                    : 'border-[#E2E8E4] focus:border-[#123B36]'
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-600 font-medium">{errors.email}</p>
              )}
            </div>
          </div>

          {/* University & Academic Year */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#123B36] flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#123B36]" />
                <span>{t.booking.form.university}</span>
              </label>
              <select
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm outline-none transition-colors ${
                  errors.university
                    ? 'border-red-400 bg-red-50/30'
                    : 'border-[#E2E8E4] focus:border-[#123B36]'
                }`}
              >
                <option value="">{t.booking.form.universitySelect}</option>
                {JORDAN_UNIVERSITIES.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u[language]}
                  </option>
                ))}
              </select>
              {errors.university && (
                <p className="text-xs text-red-600 font-medium">{errors.university}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#123B36] flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#123B36]" />
                <span>{t.booking.form.academicYear}</span>
              </label>
              <select
                value={academicYear}
                onChange={(e) => setAcademicYear(e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm outline-none transition-colors ${
                  errors.academicYear
                    ? 'border-red-400 bg-red-50/30'
                    : 'border-[#E2E8E4] focus:border-[#123B36]'
                }`}
              >
                <option value="">{t.booking.form.academicYearSelect}</option>
                {ACADEMIC_LEVELS.map((lvl) => (
                  <option key={lvl.id} value={lvl.id}>
                    {lvl[language]}
                  </option>
                ))}
              </select>
              {errors.academicYear && (
                <p className="text-xs text-red-600 font-medium">{errors.academicYear}</p>
              )}
            </div>
          </div>

          {/* Optional Notes */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#123B36]">
              {t.booking.form.notes}
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t.booking.form.notesPlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-[#E2E8E4] text-xs sm:text-sm outline-none focus:border-[#123B36] transition-colors"
            />
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="pt-2 space-y-1">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={consentPrivacy}
                onChange={(e) => setConsentPrivacy(e.target.checked)}
                className="mt-1 w-4 h-4 rounded text-[#123B36] border-[#E2E8E4] focus:ring-[#123B36]"
              />
              <span className="text-xs text-[#405852] leading-relaxed">
                {t.booking.form.privacyConsent}
              </span>
            </label>
            {errors.consentPrivacy && (
              <p className="text-xs text-red-600 font-medium">{errors.consentPrivacy}</p>
            )}
          </div>

          {/* Submit Button with Loading State */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 px-6 rounded-xl bg-[#123B36] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99] ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#1C554E]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>{t.booking.form.submittingBtn}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#D5E8DF]" />
                  <span>{t.booking.form.submitBtn}</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
