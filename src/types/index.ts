export type Language = 'ar' | 'en';

export type PageId =
  | 'home'
  | 'courses'
  | 'course-details'
  | 'schedule'
  | 'trainers'
  | 'about'
  | 'faq'
  | 'contact'
  | 'booking';

export type CourseStatus = 'coming_soon' | 'registration_open' | 'fully_booked';

export type CourseCategory =
  | 'all'
  | 'prosthodontics'
  | 'restorative'
  | 'endodontics'
  | 'surgery';

export interface LocalizedString {
  ar: string;
  en: string;
}

export interface Course {
  id: string;
  slug: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  category: CourseCategory;
  status: CourseStatus;
  image: string;
  shortDescription: LocalizedString;
  overview: LocalizedString;
  learningObjectives: {
    ar: string[];
    en: string[];
  };
  practicalSkills: {
    ar: string[];
    en: string[];
  };
  targetAudience: {
    ar: string[];
    en: string[];
  };
  prerequisites: LocalizedString;
  trainer: {
    confirmed: boolean;
    name?: LocalizedString;
    title?: LocalizedString;
    bio?: LocalizedString;
    placeholderNotice: LocalizedString;
  };
  schedule: {
    confirmed: boolean;
    dates?: LocalizedString;
    duration?: LocalizedString;
    venue?: LocalizedString;
    seats?: number;
    placeholderNotice: LocalizedString;
  };
  pricing: {
    confirmed: boolean;
    amount?: number;
    currency?: string;
    details?: LocalizedString;
    placeholderNotice: LocalizedString;
  };
  faqs: Array<{
    question: LocalizedString;
    answer: LocalizedString;
  }>;
}

export interface BookingSubmission {
  id: string;
  referenceCode: string;
  courseId: string;
  courseTitle: LocalizedString;
  fullName: string;
  phone: string;
  email?: string;
  university: string;
  academicYear: string;
  notes?: string;
  consentPrivacy: boolean;
  status: 'submitted_for_review';
  createdAt: string;
}
