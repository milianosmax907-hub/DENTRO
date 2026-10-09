import { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'tooth-preparation',
    slug: 'tooth-preparation',
    title: {
      ar: 'تحضير الأسنان للتركيبات الثابتة',
      en: 'Tooth Preparation for Fixed Prosthodontics'
    },
    subtitle: {
      ar: 'إتقان خط الإنهاء وتقليل التكسير الميكانيكي على رؤوس المانيكان',
      en: 'Mastering finish lines and biological preservation on phantom simulators'
    },
    category: 'prosthodontics',
    status: 'coming_soon',
    image: '/src/assets/images/course_tooth_prep_1791576147310.jpg',
    shortDescription: {
      ar: 'تدريب عملي مكثف على نماذج المحاكاة الفكية (Phantom Head) لتطوير الثقة والتحكم اليدوي في تحضير الأسنان للتيجان والجسور بدقة عالية.',
      en: 'Intensive hands-on training on phantom heads to build tactile confidence, precise margin definition, and controlled reduction for crowns and bridges.'
    },
    overview: {
      ar: 'صُممت هذه الدورة خصيصاً لسد الفجوة بين التحضير النظري في الجامعات والممارسة السريرية الواقعية. يتدرب كل مشارك على وحدات المحاكاة (Phantom Head) الفردية باستخدام سنابل وأجهزة توربين عالية السرعة، مع التركيز على الزوايا الصحيحة، حفظ البنية السنية، وخطوط الإنهاء المتناسقة وفق أحدث المعايير العلمية.',
      en: 'Tailored to bridge the critical gap between university pre-clinical drills and real chairside prosthodontics. Each participant practices on dedicated phantom simulation units with high-speed turbine handpieces, focusing on precise geometric tapering, biological width preservation, and smooth finish lines.'
    },
    learningObjectives: {
      ar: [
        'فهم المبادئ البيولوجية والميكانيكية لتحضير التيجان والجسور الكاملة (Full Veneer Crowns).',
        'التمييز العملي واختيار خط الإنهاء المناسب (Chamfer vs. Deep Chamfer vs. Shoulder).',
        'تسلسل استخدام السنابل (Bur Sequence) للتحضير السريع والآمن دون المساس بالأسنان المجاورة.',
        'تقنيات فحص المسافة الإطباقية (Occlusal Clearance) وتوزيع التخفيض التشريحي المتجانس.',
        'أساسيات أخذ الطبعات الدقيقة وصنع التيجان المؤقتة المباشرة (Provisional Restorations).'
      ],
      en: [
        'Understand biological and mechanical principles of full-coverage crown preparation.',
        'Master the execution and indication of finish lines (Chamfer vs. Deep Chamfer vs. Shoulder).',
        'Systematic bur sequence for efficient, predictable reduction while protecting adjacent teeth.',
        'Precision verification of occlusal clearance and anatomical planes.',
        'Fundamentals of clean margin capture for impressions/scanning and direct chairside temporization.'
      ]
    },
    practicalSkills: {
      ar: [
        'التحكم بمسار الإدخال (Path of Insertion) وتفادي التقعر السلبي (Undercuts).',
        'نحت خط إنهاء متصل وناعم بوضوح (Chamfer Margin) على الأسنان الخلفية والأمامية.',
        'تطبيق أدوات قياس السماكة السريرية (Reduction Guides / Silicone Index).',
        'تعديل زاوية الجلوس والرؤية غير المباشرة باستخدام المرآة السنية (Ergonomic Posture).'
      ],
      en: [
        'Controlling total occlusal convergence (TOC) and eliminating undercuts.',
        'Carving continuous, smooth finish lines (Chamfer margins) on posterior and anterior teeth.',
        'Fabricating and using silicone index reduction guides for predictable depth control.',
        'Mastering ergonomic posture and indirect vision using dental mirror angles.'
      ]
    },
    targetAudience: {
      ar: [
        'طلاب طب الأسنان في السنوات السريرية (السنة الرابعة والخامسة) في الجامعات الأردنية.',
        'أطباء الامتياز وحديثو التخرج الراغبون في تعزيز مهاراتهم اليدوية قبل بدء العمل السريري المستقل.',
        'أطباء الأسنان العامون الباحثون عن صقل تقنيات التحضير الحديثة وفق الإرشادات المعاصرة.'
      ],
      en: [
        'Dental students in clinical years (4th and 5th year) across Jordanian universities.',
        'Dental interns and recent graduates seeking to solidify tactile confidence before private practice.',
        'General dental practitioners looking to refine their crown preparation protocols and ergonomics.'
      ]
    },
    prerequisites: {
      ar: 'المعرفة الأساسية بمصطلحات تشريح الأسنان ومبادئ الاستعاضة السنية الثابتة.',
      en: 'Foundational understanding of dental morphology and basic principles of fixed prosthodontics.'
    },
    trainer: {
      confirmed: false,
      placeholderNotice: {
        ar: 'سيتم الإعلان قريبًا عن اسم ومؤهلات المدرب المعتمد للدورة فور استكمال الاعتمادات الفنية.',
        en: 'The certified trainer profile and credentials will be announced soon upon technical confirmation.'
      }
    },
    schedule: {
      confirmed: false,
      placeholderNotice: {
        ar: 'سيتم الإعلان قريبًا عن التواريخ الدقيقة، القاعة التدريبية، وعدد المقاعد المتاحة في عمّان.',
        en: 'Exact session dates, venue location, and seat count in Amman will be announced soon.'
      }
    },
    pricing: {
      confirmed: false,
      placeholderNotice: {
        ar: 'سيتم الإعلان قريبًا عن رسوم التسجيل وخطط الدفع فور تثبيت موعد الدفعة الأولى.',
        en: 'Registration fees and enrollment terms will be announced soon once dates are confirmed.'
      }
    },
    faqs: [
      {
        question: {
          ar: 'هل التدريب نظري أم عملي؟',
          en: 'Is the course theoretical or hands-on practical?'
        },
        answer: {
          ar: 'منهجية DENTRO تركز على التدريب العملي المباشر بنسبة تفوق 60% من وقت الدورة على رؤوس المانيكان، مع مراجعة مكثفة للمفاهيم الأساسية وعرض تطبيقي حي قبل بدء المتدربين.',
          en: 'DENTRO methodology prioritizes hands-on drills: over 60% of course time is spent on individual phantom simulators, supported by concise theory and live step-by-step demonstrations.'
        }
      },
      {
        question: {
          ar: 'هل تُوفّر منصة DENTRO المواد والأجهزة أم أحتاج لإحضارها؟',
          en: 'Does DENTRO provide instruments and simulation models?'
        },
        answer: {
          ar: 'سيتم توضيح كافة المستلزمات المشمولة في الدورة (مثل المانيكان، أسنان التايفودونت، السنابل، وقبضات التوربين) عند نشر الإعلان النهائي للتسجيل.',
          en: 'Full details regarding provided equipment (phantom heads, typhodont teeth, bur sets, turbine handpieces) will be confirmed with the final registration announcement.'
        }
      },
      {
        question: {
          ar: 'كيف أضمن مقعدي عندما يُفتح باب التسجيل؟',
          en: 'How can I register my interest or secure a seat early?'
        },
        answer: {
          ar: 'يمكنك تقديم طلب حجز مبدئي الآن عبر نموذج الحجز؛ وسيتواصل معك فريق DENTRO بأسبقية التسجيل فور اعتماد المواعيد الرسمية.',
          en: 'You can submit an early booking interest form now; the DENTRO coordination team will contact registered candidates by priority as soon as official dates open.'
        }
      }
    ]
  },
  {
    id: 'direct-composite-layering',
    slug: 'direct-composite-layering',
    title: {
      ar: 'حشوات الكومبوزيت التجميلية وتدرج الطبقات',
      en: 'Direct Composite Layering & Anterior Aesthetics'
    },
    subtitle: {
      ar: 'إتقان المحاكاة الحيوية، الشكل التشريحي، وبروتوكول الصقل والتلميع',
      en: 'Biomimetic shade matching, secondary anatomy, and mirror-finish polishing'
    },
    category: 'restorative',
    status: 'coming_soon',
    image: '/src/assets/images/dental_instruments_tray_1791576156853.jpg',
    shortDescription: {
      ar: 'تدريب سريري دقيق على بناء الأسنان الأمامية المكسورة (Class IV) وإعادة تشكيل الابتسامة باستخدام الكومبوزيت المعاصر.',
      en: 'Precision clinical workshop on Class IV restorations, composite stratification, and natural tooth line angles.'
    },
    overview: {
      ar: 'دورة تطبيقية متخصصة لتمكين طبيب الأسنان من التحكم بالألوان، الشفافية، والملمس السطحي للحشوات التجميلية، مع تدريب خطوة بخطوة على العزل بالحاجز المطاطي (Rubber Dam isolation).',
      en: 'A specialized workshop enabling dentists to master polychromatic layering, light reflection zones, and systematic rubber dam isolation for anterior composite restorations.'
    },
    learningObjectives: {
      ar: [
        'فهم نظرية الألوان السنية (Chroma, Hue, Value) وتحديد درجة البياض بدقة.',
        'العزل المحكم باستخدام أحدث تقنيات الحاجز المطاطي (Rubber Dam Isolation).',
        'طبقات العاج والمينا (Dentin & Enamel layering) والمحاكاة الطبيعية.',
        'بروتوكول التلميع النهائي متعدد الخطوات للوصول للمعان الدائم.'
      ],
      en: [
        'Mastering optical properties of natural teeth (Value, Chroma, Hue).',
        'Predictable rubber dam isolation protocols for anterior operative fields.',
        'Anatomic layering using composite enamel and dentin mamelons.',
        'Systematic finishing and polishing protocol for durable luster.'
      ]
    },
    practicalSkills: {
      ar: [
        'بناء الجدار اللساني باستخدام مفتاح السيليكون (Palatal Silicone Index).',
        'رسم خطوط الانتقال الزاوية (Transitional Line Angles) وانعكاس الضوء.',
        'استخدام أقراص الصقل ورؤوس الكاربيد لتحقيق الملمس الطبيعي (Macro/Micro Texture).'
      ],
      en: [
        'Palatal shelf construction using pre-formed silicone index keys.',
        'Defining primary line angles and natural reflection borders.',
        'Texturing with multi-fluted carbide burs and diamond polishers.'
      ]
    },
    targetAudience: {
      ar: [
        'طلاب كليات طب الأسنان في الأردن الراغبون في تحسين نتائج حالات العلاج التحفظي.',
        'أطباء الأسنان الممارسون الباحثون عن نتائج تجميلية متوقعة ومقاومة للتصبغ.'
      ],
      en: [
        'Jordanian dental students wishing to excel in clinical restorative cases.',
        'Practicing dentists seeking predictable aesthetic results without grey margins.'
      ]
    },
    prerequisites: {
      ar: 'المبادئ الأساسية للمواد السنية والتصليب الضوئي.',
      en: 'Basic principles of dental biomaterials and light-curing protocols.'
    },
    trainer: {
      confirmed: false,
      placeholderNotice: {
        ar: 'سيتم الإعلان قريبًا عن المدرب ومحتوى الورشة التفصيلي.',
        en: 'Trainer profile and detailed session breakdown will be announced soon.'
      }
    },
    schedule: {
      confirmed: false,
      placeholderNotice: {
        ar: 'سيتم الإعلان قريبًا عن التواريخ والقاعة التدريبية في عمّان.',
        en: 'Dates and training venue in Amman will be announced soon.'
      }
    },
    pricing: {
      confirmed: false,
      placeholderNotice: {
        ar: 'سيتم الإعلان قريبًا عن الرسوم وشروط التسجيل.',
        en: 'Pricing and enrollment terms will be announced soon.'
      }
    },
    faqs: [
      {
        question: {
          ar: 'هل تشمل الدورة تدريباً على الحاجز المطاطي؟',
          en: 'Does this course include Rubber Dam isolation drills?'
        },
        answer: {
          ar: 'نعم، يشمل البرنامج تدريباً عملياً مخصصاً على تقنيات العزل بالحاجز المطاطي كجزء أساسي من النجاح السريري.',
          en: 'Yes, hands-on rubber dam placement is an integral hands-on module of this workshop.'
        }
      }
    ]
  },
  {
    id: 'endodontic-glide-path-rotary',
    slug: 'endodontic-glide-path-rotary',
    title: {
      ar: 'علاج العصب والتحضير الآلي',
      en: 'Endodontic Access Cavity & Rotary Shaping'
    },
    subtitle: {
      ar: 'من فتح الحجرة اللبية السليم إلى التشكيل الآلي ثلاثي الأبعاد',
      en: 'Conservative access cavity, safe glide path, and continuous 3D irrigation'
    },
    category: 'endodontics',
    status: 'coming_soon',
    image: '/src/assets/images/hero_dental_simulation_1791576136483.jpg',
    shortDescription: {
      ar: 'تدريب عملي على فتح حجرات لبية محافظة، تحديد المداخل، واستخدام المبارد الدوارة الحديثة دون كسر المبارد أو إحداث درجات في القناة.',
      en: 'Hands-on practice on 3D transparent and extracted teeth for conservative access, reproducible glide path, and modern rotary kinematics.'
    },
    overview: {
      ar: 'يركز هذا التدريب العملي على إزالة الخوف من علاج العصب السريري. يتعلم المتدرب كيفية العثور على القنوات الإضافية (مثل MB2)، استخدام محدد الذروة (Apex Locator) بدقة، وتطبيق بروتوكولات التحضير الآلي الآمن.',
      en: 'Focusing on building clinical mastery and eliminating the fear of endodontic complications. Participants learn systematic canal location (including MB2), electronic apex locator calibration, and safe rotary file instrumentation.'
    },
    learningObjectives: {
      ar: [
        'تصميم الفتحة اللبية المحافظة (Conservative Access Cavity) وحفظ العاج الحول عنقي.',
        'إنشاء مسار الانزلاق الآمن (Reproducible Glide Path) باستخدام المبارد اليدوية والآلية.',
        'إتقان حركات التحضير الدوار (Rotary) والتبادلي (Reciprocation).',
        'بروتوكولات الإرواء الفعال (Passive Ultrasonic Irrigation) والحشو ثلاثي الأبعاد.'
      ],
      en: [
        'Design conservative access cavities preserving pericervical dentin.',
        'Establish reproducible glide paths using manual and rotary scout files.',
        'Master modern rotary and reciprocating kinematics.',
        'Implement deep apical irrigation protocols and warm vertical compaction.'
      ]
    },
    practicalSkills: {
      ar: [
        'تحديد مداخل القنوات المنحنية وتجنب النقل الذروي (Canal Transportation).',
        'معايرة أجهزة المحركات اللبية (Endo Motors) وضبط عزم الدوران (Torque Control).',
        'إتقان الحشو الحراري (Warm Vertical Condensation) والحشو أحادي المخروط.'
      ],
      en: [
        'Managing curved root canals without ledge formation or apical zipping.',
        'Calibrating cordless endo motors and dynamic torque auto-reverse.',
        'Obturation techniques using bioceramic sealers and continuous wave compaction.'
      ]
    },
    targetAudience: {
      ar: [
        'طلبة كليات طب الأسنان في الأردن وأطباء الامتياز.',
        'الأطباء الممارسون الراغبون بالانتقال من التحضير اليدوي إلى الأجهزة الدوارة الحديثة.'
      ],
      en: [
        'Jordanian dental students, interns, and general dentists.',
        'Practitioners transitioning from manual K-files to modern engine-driven systems.'
      ]
    },
    prerequisites: {
      ar: 'المعرفة النظرية بتشريح القنوات الجذرية وأساسيات الأشعة السنية.',
      en: 'Basic knowledge of pulp anatomy and dental radiograph interpretation.'
    },
    trainer: {
      confirmed: false,
      placeholderNotice: {
        ar: 'سيتم الإعلان قريبًا عن أسماء المدربين الاستشاريين المشرفين على الدورة.',
        en: 'Supervising specialist trainers will be announced soon.'
      }
    },
    schedule: {
      confirmed: false,
      placeholderNotice: {
        ar: 'سيتم الإعلان قريبًا عن المواعيد الرسمية وموقع التدريب في عمّان.',
        en: 'Official dates and training lab location in Amman will be announced soon.'
      }
    },
    pricing: {
      confirmed: false,
      placeholderNotice: {
        ar: 'سيتم الإعلان قريبًا عن التكلفة وشروط التسجيل المسبق.',
        en: 'Course fee and early reservation details will be announced soon.'
      }
    },
    faqs: [
      {
        question: {
          ar: 'على ماذا يتم التدريب العملي؟',
          en: 'What training models are used for endodontic practice?'
        },
        answer: {
          ar: 'يتم التدريب على نماذج تدريبية شفافة ثلاثية الأبعاد ونماذج فكية متخصصة توفر مقاومة حقيقية تحاكي القنوات السنية الطبيعية.',
          en: 'Training takes place on anatomical 3D clear models and phantom units replicating realistic canal curvatures.'
        }
      }
    ]
  }
];

export const JORDAN_UNIVERSITIES = [
  { id: 'uj', ar: 'الجامعة الأردنية (UJ - عمان)', en: 'University of Jordan (Amman)' },
  { id: 'just', ar: 'جامعة العلوم والتكنولوجيا الأردنية (JUST - إربد)', en: 'Jordan University of Science & Technology (Irbid)' },
  { id: 'mutah', ar: 'جامعة مؤتة (الكرك)', en: 'Mutah University (Karak)' },
  { id: 'yarmouk', ar: 'جامعة اليرموك (إربد)', en: 'Yarmouk University (Irbid)' },
  { id: 'hashemite', ar: 'الجامعة الهاشمية (الزرقاء)', en: 'Hashemite University (Zarqa)' },
  { id: 'international', ar: 'جامعة خارج الأردن / خريج دولي', en: 'International University / Graduate Abroad' },
  { id: 'other', ar: 'جامعة أخرى', en: 'Other University' }
];

export const ACADEMIC_LEVELS = [
  { id: '3rd-year', ar: 'السنة الثالثة (Pre-clinical)', en: '3rd Year (Pre-clinical)' },
  { id: '4th-year', ar: 'السنة الرابعة (Clinical I)', en: '4th Year (Clinical I)' },
  { id: '5th-year', ar: 'السنة الخامسة (Clinical II / تخرج)', en: '5th Year (Senior Dental Student)' },
  { id: 'intern', ar: 'طبيب أسنان متدرب (سنة الامتياز)', en: 'Dental Intern' },
  { id: 'fresh-graduate', ar: 'طبيب أسنان حديث التخرج (1-2 سنة)', en: 'Fresh Dental Graduate (1-2 yrs)' },
  { id: 'general-practitioner', ar: 'طبيب أسنان ممارس عام (GP)', en: 'General Dental Practitioner' }
];
