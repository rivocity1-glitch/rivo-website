import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'en' | 'hi' | 'mr';

type Dictionary = Record<string, string>;
type TranslationTable = Record<Language, Dictionary>;

const translations: TranslationTable = {
  en: {
    'nav.home': 'Home', 'nav.apps': 'Apps', 'nav.customers': 'Customers', 'nav.riders': 'Riders', 'nav.vendors': 'Vendors', 'nav.cities': 'Cities', 'nav.pricing': 'Pricing', 'nav.about': 'About', 'nav.help': 'Help', 'nav.contact': 'Contact',
    'nav.getApp': 'Get RivoCity', 'nav.language': 'Language', 'nav.menuOpen': 'Open navigation menu', 'nav.menuClose': 'Close navigation menu', 'footer.navigation': 'Navigation', 'footer.legal': 'Legal', 'footer.contact': 'Contact',
    'footer.description': 'RivoCity connects customers, local businesses and delivery partners through one trusted city commerce platform built for local communities.',
    'footer.terms': 'Terms & Conditions', 'footer.privacy': 'Privacy Policy', 'footer.refund': 'Refund & Cancellation', 'footer.delete': 'Delete Account',
    'common.learnMore': 'Learn more', 'common.getStarted': 'Get started', 'common.comingSoon': 'Coming soon',
    'home.hero.eyebrow': 'Your city, closer than ever', 'home.hero.title': 'One City. Infinite Possibilities.', 'home.hero.body': 'Discover trusted local businesses, shop everyday essentials and get them delivered with RivoCity.', 'home.hero.primary': 'Explore RivoCity', 'home.hero.secondary': 'How it works',
    'home.categories.label': 'Explore local', 'home.categories.title': 'Everything your neighbourhood needs', 'home.categories.body': 'From everyday essentials to special finds, support the stores that make your city unique.',
    'home.steps.label': 'Simple by design', 'home.steps.title': 'Local shopping, made easy', 'home.steps.body': 'Discover a store, place an order and follow it all the way to your door.',
    'home.cta.title': 'Your city has more to offer.', 'home.cta.body': 'Explore local stores and discover a more connected way to shop.', 'home.cta.button': 'Explore the platform', 'home.hero.partner': 'Become a Partner', 'home.stats.city': 'First Launch City', 'home.stats.categories': 'Vendor Categories', 'home.stats.delivery': 'Fast & Reliable', 'home.stats.payments': 'COD & UPI', 'home.order.placed': 'Order Placed', 'home.order.placedDesc': 'Your order is received and secure.', 'home.order.packed': 'Marked Packed', 'home.order.packedDesc': 'The local store carefully packs your order.', 'home.order.collecting': 'Rider Collect', 'home.order.collectingDesc': 'A delivery partner picks up your package.', 'home.order.otp': 'Secret OTP Shared', 'home.order.otpDesc': 'A safe code is sent to your phone for security.', 'home.order.delivered': 'Order Delivered', 'home.order.deliveredDesc': 'Delivered safely. Happy customer and happy store.',
    'apps.title': 'Everything RivoCity,', 'apps.body': 'in one place.', 'apps.intro': 'Shop locally, manage your business, or deliver across your city. RivoCity connects every part of the local commerce journey.', 'apps.customer': 'Customer app', 'apps.rider': 'Rider app',
  },
  hi: {
    'nav.home': 'होम', 'nav.apps': 'ऐप्स', 'nav.customers': 'ग्राहक', 'nav.riders': 'डिलीवरी पार्टनर', 'nav.vendors': 'दुकानदार', 'nav.cities': 'शहर', 'nav.pricing': 'कीमतें', 'nav.about': 'हमारे बारे में', 'nav.help': 'मदद', 'nav.contact': 'संपर्क',
    'nav.getApp': 'RivoCity इस्तेमाल करें', 'nav.language': 'भाषा', 'nav.menuOpen': 'नेविगेशन मेन्यू खोलें', 'nav.menuClose': 'नेविगेशन मेन्यू बंद करें', 'footer.navigation': 'नेविगेशन', 'footer.legal': 'कानूनी जानकारी', 'footer.contact': 'संपर्क',
    'footer.description': 'RivoCity ग्राहकों, स्थानीय दुकानों और डिलीवरी पार्टनर्स को एक भरोसेमंद स्थानीय कॉमर्स प्लेटफ़ॉर्म से जोड़ता है।',
    'footer.terms': 'नियम और शर्तें', 'footer.privacy': 'गोपनीयता नीति', 'footer.refund': 'रिफंड और रद्दीकरण', 'footer.delete': 'खाता हटाएँ',
    'common.learnMore': 'और जानें', 'common.getStarted': 'शुरू करें', 'common.comingSoon': 'जल्द आ रहा है',
    'home.hero.eyebrow': 'आपका शहर, अब और करीब', 'home.hero.title': 'एक शहर। अनगिनत संभावनाएँ।', 'home.hero.body': 'भरोसेमंद स्थानीय दुकानों को खोजें, रोज़मर्रा की ज़रूरतें खरीदें और RivoCity से घर पर मँगाएँ।', 'home.hero.primary': 'RivoCity देखें', 'home.hero.secondary': 'यह कैसे काम करता है',
    'home.categories.label': 'स्थानीय दुकानों को देखें', 'home.categories.title': 'आपके इलाके की हर ज़रूरत', 'home.categories.body': 'रोज़मर्रा की ज़रूरतों से लेकर खास चीज़ों तक, अपने शहर की दुकानों का साथ दें।',
    'home.steps.label': 'आसान और सुविधाजनक', 'home.steps.title': 'स्थानीय खरीदारी अब आसान', 'home.steps.body': 'दुकान खोजें, ऑर्डर दें और डिलीवरी तक उसकी स्थिति देखें।',
    'home.cta.title': 'आपके शहर में बहुत कुछ है।', 'home.cta.body': 'स्थानीय दुकानों को खोजें और खरीदारी का बेहतर तरीका अपनाएँ।', 'home.cta.button': 'प्लेटफ़ॉर्म देखें', 'home.hero.partner': 'साझेदार बनें', 'home.stats.city': 'पहला लॉन्च शहर', 'home.stats.categories': 'दुकानों की श्रेणियाँ', 'home.stats.delivery': 'तेज़ और भरोसेमंद', 'home.stats.payments': 'COD और UPI', 'home.order.placed': 'ऑर्डर दिया गया', 'home.order.placedDesc': 'आपका ऑर्डर सुरक्षित रूप से प्राप्त हुआ है।', 'home.order.packed': 'ऑर्डर पैक हो गया', 'home.order.packedDesc': 'स्थानीय दुकान आपका ऑर्डर ध्यान से पैक करती है।', 'home.order.collecting': 'डिलीवरी पार्टनर आया', 'home.order.collectingDesc': 'डिलीवरी पार्टनर आपका पैकेज लेता है।', 'home.order.otp': 'OTP साझा किया गया', 'home.order.otpDesc': 'सुरक्षा के लिए आपके फ़ोन पर कोड भेजा जाता है।', 'home.order.delivered': 'ऑर्डर पहुँच गया', 'home.order.deliveredDesc': 'ऑर्डर सुरक्षित पहुँचा। ग्राहक और दुकान दोनों खुश।',
    'apps.title': 'RivoCity की सभी सुविधाएँ', 'apps.body': 'एक ही जगह पर।', 'apps.intro': 'स्थानीय खरीदारी करें, अपना व्यवसाय संभालें या डिलीवरी करें। RivoCity स्थानीय कॉमर्स के हर हिस्से को जोड़ता है।', 'apps.customer': 'ग्राहक ऐप', 'apps.rider': 'डिलीवरी पार्टनर ऐप',
  },
  mr: {
    'nav.home': 'मुख्यपृष्ठ', 'nav.apps': 'अ‍ॅप्स', 'nav.customers': 'ग्राहक', 'nav.riders': 'डिलिव्हरी पार्टनर्स', 'nav.vendors': 'दुकानदार', 'nav.cities': 'शहरे', 'nav.pricing': 'दर', 'nav.about': 'आमच्याबद्दल', 'nav.help': 'मदत', 'nav.contact': 'संपर्क',
    'nav.getApp': 'RivoCity वापरा', 'nav.language': 'भाषा', 'nav.menuOpen': 'नेव्हिगेशन मेन्यू उघडा', 'nav.menuClose': 'नेव्हिगेशन मेन्यू बंद करा', 'footer.navigation': 'नेव्हिगेशन', 'footer.legal': 'कायदेशीर माहिती', 'footer.contact': 'संपर्क',
    'footer.description': 'RivoCity ग्राहक, स्थानिक दुकाने आणि डिलिव्हरी पार्टनर्सना एका विश्वासार्ह स्थानिक कॉमर्स प्लॅटफॉर्मवर जोडते.',
    'footer.terms': 'अटी व शर्ती', 'footer.privacy': 'गोपनीयता धोरण', 'footer.refund': 'परतावा व रद्दीकरण', 'footer.delete': 'खाते हटवा',
    'common.learnMore': 'अधिक जाणून घ्या', 'common.getStarted': 'सुरू करा', 'common.comingSoon': 'लवकरच येत आहे',
    'home.hero.eyebrow': 'तुमचे शहर, आता आणखी जवळ', 'home.hero.title': 'एक शहर. अनंत शक्यता.', 'home.hero.body': 'विश्वासार्ह स्थानिक दुकाने शोधा, रोजच्या गरजेच्या वस्तू खरेदी करा आणि RivoCity द्वारे घरपोच मागवा.', 'home.hero.primary': 'RivoCity पाहा', 'home.hero.secondary': 'हे कसे कार्य करते',
    'home.categories.label': 'स्थानिक दुकाने शोधा', 'home.categories.title': 'तुमच्या परिसरातील प्रत्येक गरज', 'home.categories.body': 'रोजच्या गरजेच्या वस्तूंपासून खास वस्तूंपर्यंत, तुमच्या शहरातील स्थानिक दुकानांना साथ द्या.',
    'home.steps.label': 'सोपे आणि सोयीस्कर', 'home.steps.title': 'स्थानिक खरेदी आता सोपी', 'home.steps.body': 'दुकान शोधा, ऑर्डर द्या आणि डिलिव्हरी होईपर्यंत स्थिती पाहा.',
    'home.cta.title': 'तुमच्या शहरात खूप काही आहे.', 'home.cta.body': 'स्थानिक दुकाने शोधा आणि खरेदीचा अधिक चांगला अनुभव घ्या.', 'home.cta.button': 'प्लॅटफॉर्म पाहा', 'home.hero.partner': 'भागीदार व्हा', 'home.stats.city': 'पहिले लॉन्च शहर', 'home.stats.categories': 'दुकानांच्या श्रेणी', 'home.stats.delivery': 'जलद आणि विश्वासार्ह', 'home.stats.payments': 'COD आणि UPI', 'home.order.placed': 'ऑर्डर दिली', 'home.order.placedDesc': 'तुमची ऑर्डर सुरक्षितपणे मिळाली आहे.', 'home.order.packed': 'ऑर्डर पॅक झाली', 'home.order.packedDesc': 'स्थानिक दुकान तुमची ऑर्डर काळजीपूर्वक पॅक करते.', 'home.order.collecting': 'डिलिव्हरी पार्टनर आला', 'home.order.collectingDesc': 'डिलिव्हरी पार्टनर तुमचे पॅकेज घेतो.', 'home.order.otp': 'OTP शेअर केला', 'home.order.otpDesc': 'सुरक्षेसाठी तुमच्या फोनवर कोड पाठवला जातो.', 'home.order.delivered': 'ऑर्डर पोहोचली', 'home.order.deliveredDesc': 'ऑर्डर सुरक्षित पोहोचली. ग्राहक आणि दुकान दोघेही समाधानी.',
    'apps.title': 'RivoCity च्या सर्व सुविधा', 'apps.body': 'एकाच ठिकाणी.', 'apps.intro': 'स्थानिक खरेदी करा, तुमचा व्यवसाय सांभाळा किंवा डिलिव्हरी करा. RivoCity स्थानिक कॉमर्समधील प्रत्येक घटकाला जोडते.', 'apps.customer': 'ग्राहक अ‍ॅप', 'apps.rider': 'डिलिव्हरी पार्टनर अ‍ॅप',
  },
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, fallback?: string) => string;
}
const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('rivo-language') : null;
    return saved === 'hi' || saved === 'mr' || saved === 'en' ? saved : 'en';
  });

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    if (typeof window !== 'undefined') window.localStorage.setItem('rivo-language', next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'hi' ? 'hi-IN' : language === 'mr' ? 'mr-IN' : 'en-IN';
    document.documentElement.setAttribute('data-language', language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage,
    t: (key, fallback) => translations[language][key] ?? translations.en[key] ?? fallback ?? key,
  }), [language, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
