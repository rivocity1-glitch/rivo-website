import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type RivoLanguage = 'en' | 'mr' | 'hi';

type LanguageContextValue = {
  language: RivoLanguage;
  setLanguage: (language: RivoLanguage) => void;
  t: (key: string) => string;
};

const translations: Record<RivoLanguage, Record<string, string>> = {
  en: {
    'language.label': 'Language',
    'nav.home': 'Home', 'nav.apps': 'Apps', 'nav.vendors': 'Vendors', 'nav.cities': 'Cities',
    'nav.pricing': 'Pricing', 'nav.about': 'About', 'nav.help': 'Help', 'nav.contact': 'Contact',
    'nav.getRivoCity': 'Get RivoCity',
    'footer.tagline': 'RivoCity connects customers, local businesses and delivery partners through one trusted city commerce platform built for local communities.',
    'footer.navigation': 'Navigation', 'footer.legal': 'Legal', 'footer.contact': 'Contact',
    'footer.terms': 'Terms & Conditions', 'footer.privacy': 'Privacy Policy',
    'footer.refund': 'Refund & Cancellation', 'footer.delete': 'Delete Account',
    'footer.rights': 'All rights reserved.',
    'home.hero.title': 'One city. Infinite possibilities.',
    'home.hero.subtitle': 'Discover local businesses, explore what your city offers, and keep commerce close to home.',
    'home.hero.cta': 'Explore RivoCity', 'home.hero.vendor': 'For local businesses',
    'home.city': 'Starting in Baramati', 'home.local.title': 'Everything local. One platform.',
    'home.local.subtitle': 'A city commerce platform built to connect people with the businesses around them.',
    'home.local.shop': 'Shop local', 'home.local.discover': 'Discover local businesses',
    'home.local.connect': 'Connect with your city', 'home.prelaunch': 'RivoCity is preparing for launch in Baramati.',
    'vendors.hero.title': 'Grow your business with your city.',
    'vendors.hero.subtitle': 'Bring your store online, manage products and inventory, and connect with local customers through RivoCity.',
    'vendors.cta': 'Become a vendor', 'vendors.features.title': 'Tools to manage your store',
    'vendors.features.subtitle': 'A vendor workspace designed to help you manage day-to-day store operations.',
    'customers.hero.title': 'Your city, closer than ever.',
    'customers.hero.subtitle': 'Discover local stores and explore the products and services available around you.',
    'riders.hero.title': 'Move your city forward.',
    'riders.hero.subtitle': 'Learn about opportunities to support local businesses and customers as a delivery partner.',
    'cities.hero.subtitle': 'We are starting in Baramati and building a platform shaped around local communities.',
    'pricing.compare': 'Compare Plans',
    'about.mission': 'To help every city thrive by making local shopping faster, easier and more connected.',
    'about.vision': 'A future where every city has its own digital marketplace powered by trusted local businesses and reliable delivery partners.',
    'customers.hero.title': 'Everything your city needs.',
    'customers.hero.subtitle': 'Discover trusted local stores and explore products from businesses near you.',
    'riders.hero.title': 'Earn on your schedule.',
    'riders.hero.subtitle': 'Learn about opportunities to support local businesses and customers as a delivery partner.',
    'home.category.title': 'Explore what is local', 'home.category.subtitle': 'Discover everyday needs from businesses around your city.',
    'home.community.title': 'Built for everyone.', 'home.community.subtitle': 'One city platform for customers, local businesses and delivery partners.',
    'home.customer.title': 'Customers', 'home.customer.desc': 'Discover local stores, shop with confidence and get your essentials delivered.', 'home.customer.cta': 'Explore App',
    'home.vendor.title': 'Vendors', 'home.vendor.desc': 'Grow your business, reach more customers and manage everything from one place.', 'home.vendor.cta': 'Become a Partner',
    'home.rider.title': 'Riders', 'home.rider.desc': 'Deliver locally, stay flexible and explore delivery partner opportunities.', 'home.rider.cta': 'Join RivoCity Rider',

    'about.hero.title': 'Built around local communities.',
    'about.hero.subtitle': 'RivoCity is being built to bring a city’s businesses, customers and delivery partners together.',
    'cities.hero.title': 'One city at a time.',
    'cities.hero.subtitle': 'We are starting with Baramati and building a platform shaped around local communities.',
    'pricing.hero.title': 'Clear plans for local businesses.',
    'pricing.hero.subtitle': 'Explore the vendor plans and fees published for RivoCity.',
    'contact.hero.title': 'Talk to the RivoCity team.',
    'contact.hero.subtitle': 'Questions about the platform, vendor onboarding or launch? Get in touch.',
    'help.hero.title': 'How can we help?',
    'help.hero.subtitle': 'Find answers about using RivoCity and preparing to join the platform.',
    'apps.hero.title': 'RivoCity apps',
    'apps.hero.subtitle': 'Explore the apps created for customers and delivery partners.',
    'home.category.title': 'Explore what is local', 'home.category.subtitle': 'Discover everyday needs from businesses around your city.',
    'home.community.title': 'Built for everyone.', 'home.community.subtitle': 'One city platform for customers, local businesses and delivery partners.',
    'home.customer.title': 'Customers', 'home.customer.desc': 'Discover local stores, shop with confidence and get your essentials delivered.', 'home.customer.cta': 'Explore App',
    'home.vendor.title': 'Vendors', 'home.vendor.desc': 'Grow your business, reach more customers and manage everything from one place.', 'home.vendor.cta': 'Become a Partner',
    'home.rider.title': 'Riders', 'home.rider.desc': 'Deliver locally, stay flexible and explore delivery partner opportunities.', 'home.rider.cta': 'Join RivoCity Rider',
  },
  mr: {
    'language.label': 'भाषा',
    'nav.home': 'मुख्यपृष्ठ', 'nav.apps': 'अ‍ॅप्स', 'nav.vendors': 'विक्रेते', 'nav.cities': 'शहरे',
    'nav.pricing': 'किंमत योजना', 'nav.about': 'आमच्याबद्दल', 'nav.help': 'मदत', 'nav.contact': 'संपर्क',
    'nav.getRivoCity': 'RivoCity मिळवा',
    'footer.tagline': 'RivoCity हे स्थानिक ग्राहक, दुकाने आणि डिलिव्हरी भागीदारांना एका शहर-केंद्रित कॉमर्स प्लॅटफॉर्मवर जोडते.',
    'footer.navigation': 'नेव्हिगेशन', 'footer.legal': 'कायदेशीर माहिती', 'footer.contact': 'संपर्क',
    'footer.terms': 'अटी व शर्ती', 'footer.privacy': 'गोपनीयता धोरण',
    'footer.refund': 'परतावा व रद्द करण्याचे धोरण', 'footer.delete': 'खाते हटवा',
    'footer.rights': 'सर्व हक्क राखीव.',
    'home.hero.title': 'एक शहर. अमर्याद शक्यता.',
    'home.hero.subtitle': 'स्थानिक व्यवसाय शोधा, तुमच्या शहरातील पर्याय जाणून घ्या आणि स्थानिक खरेदीला जवळ ठेवा.',
    'home.hero.cta': 'RivoCity जाणून घ्या', 'home.hero.vendor': 'स्थानिक व्यवसायांसाठी',
    'home.city': 'बारामतीपासून सुरुवात', 'home.local.title': 'सगळं स्थानिक. एकच प्लॅटफॉर्म.',
    'home.local.subtitle': 'लोकांना त्यांच्या आसपासच्या व्यवसायांशी जोडण्यासाठी तयार केलेला शहर-केंद्रित प्लॅटफॉर्म.',
    'home.local.shop': 'स्थानिक खरेदी करा', 'home.local.discover': 'स्थानिक व्यवसाय शोधा',
    'home.local.connect': 'तुमच्या शहराशी जोडा', 'home.prelaunch': 'RivoCity बारामतीमध्ये लॉन्च होण्याच्या तयारीत आहे.',
    'vendors.hero.title': 'तुमच्या शहरासोबत व्यवसाय वाढवा.',
    'vendors.hero.subtitle': 'तुमचे दुकान ऑनलाइन आणा, उत्पादने व साठा व्यवस्थापित करा आणि RivoCity द्वारे स्थानिक ग्राहकांशी जोडा.',
    'vendors.cta': 'विक्रेता म्हणून नोंदणी करा', 'vendors.features.title': 'दुकान व्यवस्थापनासाठी साधने',
    'vendors.features.subtitle': 'दैनंदिन दुकानाचे कामकाज व्यवस्थापित करण्यासाठी विक्रेता पोर्टल.',
    'customers.hero.title': 'तुमचं शहर, आता आणखी जवळ.',
    'customers.hero.subtitle': 'स्थानिक दुकाने शोधा आणि तुमच्या आसपास उपलब्ध उत्पादने व सेवा जाणून घ्या.',
    'riders.hero.title': 'तुमच्या शहराच्या प्रगतीचा भाग व्हा.',
    'riders.hero.subtitle': 'स्थानिक दुकाने आणि ग्राहकांना डिलिव्हरी भागीदार म्हणून मदत करण्याच्या संधी जाणून घ्या.',
    'about.hero.title': 'स्थानिक समुदायांसाठी तयार.',
    'about.hero.subtitle': 'शहरातील व्यवसाय, ग्राहक आणि डिलिव्हरी भागीदारांना जोडण्यासाठी RivoCity तयार होत आहे.',
    'cities.hero.title': 'एका वेळी एक शहर.',
    'cities.hero.subtitle': 'आम्ही बारामतीपासून सुरुवात करत आहोत आणि स्थानिक गरजांनुसार प्लॅटफॉर्म उभारत आहोत.',
    'pricing.compare': 'योजनांची तुलना करा',
    'about.mission': 'स्थानिक खरेदी अधिक जलद, सोपी आणि जोडलेली करून प्रत्येक शहराच्या प्रगतीस मदत करणे.',
    'about.vision': 'विश्वासार्ह स्थानिक व्यवसाय आणि डिलिव्हरी भागीदारांच्या मदतीने प्रत्येक शहराचा स्वतःचा डिजिटल बाजार असलेले भविष्य.',
    'customers.hero.title': 'तुमच्या शहरातील प्रत्येक गरज.',
    'customers.hero.subtitle': 'विश्वासार्ह स्थानिक दुकाने शोधा आणि आसपासच्या व्यवसायांतील उत्पादने पाहा.',
    'riders.hero.title': 'तुमच्या वेळेनुसार कमवा.',
    'riders.hero.subtitle': 'डिलिव्हरी भागीदार म्हणून स्थानिक व्यवसाय आणि ग्राहकांना मदत करण्याच्या संधी जाणून घ्या.',

    'pricing.hero.title': 'स्थानिक व्यवसायांसाठी स्पष्ट योजना.',
    'pricing.hero.subtitle': 'RivoCity वरील विक्रेता योजना आणि प्रकाशित शुल्क पाहा.',
    'contact.hero.title': 'RivoCity टीमशी बोला.',
    'contact.hero.subtitle': 'प्लॅटफॉर्म, विक्रेता नोंदणी किंवा लॉन्चबद्दल प्रश्न आहेत? आमच्याशी संपर्क साधा.',
    'help.hero.title': 'आम्ही कशी मदत करू?',
    'help.hero.subtitle': 'RivoCity वापरण्याबद्दल आणि प्लॅटफॉर्ममध्ये सहभागी होण्याबद्दल माहिती मिळवा.',
    'apps.hero.title': 'RivoCity अ‍ॅप्स',
    'apps.hero.subtitle': 'ग्राहक आणि डिलिव्हरी भागीदारांसाठी तयार केलेले अ‍ॅप्स पाहा.',
    'home.category.title': 'स्थानिक पर्याय पाहा', 'home.category.subtitle': 'तुमच्या शहरातील व्यवसायांकडून रोजच्या गरजेच्या वस्तू शोधा.',
    'home.community.title': 'प्रत्येकासाठी तयार.', 'home.community.subtitle': 'ग्राहक, स्थानिक व्यवसाय आणि डिलिव्हरी भागीदारांसाठी एक शहर-केंद्रित प्लॅटफॉर्म.',
    'home.customer.title': 'ग्राहक', 'home.customer.desc': 'स्थानिक दुकाने शोधा, विश्वासाने खरेदी करा आणि आवश्यक वस्तू मिळवा.', 'home.customer.cta': 'अ‍ॅप पाहा',
    'home.vendor.title': 'विक्रेते', 'home.vendor.desc': 'व्यवसाय वाढवा, अधिक ग्राहकांपर्यंत पोहोचा आणि सर्व काही एकाच ठिकाणी व्यवस्थापित करा.', 'home.vendor.cta': 'भागीदार बना',
    'home.rider.title': 'रायडर्स', 'home.rider.desc': 'स्थानिक डिलिव्हरी करा आणि डिलिव्हरी भागीदार म्हणून संधी जाणून घ्या.', 'home.rider.cta': 'RivoCity Rider मध्ये सहभागी व्हा',
  },
  hi: {
    'language.label': 'भाषा',
    'nav.home': 'होम', 'nav.apps': 'ऐप्स', 'nav.vendors': 'विक्रेता', 'nav.cities': 'शहर',
    'nav.pricing': 'मूल्य योजनाएँ', 'nav.about': 'हमारे बारे में', 'nav.help': 'सहायता', 'nav.contact': 'संपर्क',
    'nav.getRivoCity': 'RivoCity प्राप्त करें',
    'footer.tagline': 'RivoCity ग्राहकों, स्थानीय व्यवसायों और डिलीवरी पार्टनर्स को एक भरोसेमंद शहर-केंद्रित कॉमर्स प्लेटफ़ॉर्म पर जोड़ता है।',
    'footer.navigation': 'नेविगेशन', 'footer.legal': 'कानूनी जानकारी', 'footer.contact': 'संपर्क',
    'footer.terms': 'नियम व शर्तें', 'footer.privacy': 'गोपनीयता नीति',
    'footer.refund': 'रिफंड और कैंसलेशन', 'footer.delete': 'खाता हटाएँ',
    'footer.rights': 'सर्वाधिकार सुरक्षित।',
    'home.hero.title': 'एक शहर। अनंत संभावनाएँ।',
    'home.hero.subtitle': 'स्थानीय व्यवसाय खोजें, अपने शहर के विकल्प जानें और खरीदारी को अपने करीब रखें।',
    'home.hero.cta': 'RivoCity देखें', 'home.hero.vendor': 'स्थानीय व्यवसायों के लिए',
    'home.city': 'शुरुआत बारामती से', 'home.local.title': 'सब कुछ स्थानीय। एक ही प्लेटफ़ॉर्म।',
    'home.local.subtitle': 'लोगों को अपने आसपास के व्यवसायों से जोड़ने के लिए बनाया गया शहर-केंद्रित प्लेटफ़ॉर्म।',
    'home.local.shop': 'स्थानीय खरीदारी करें', 'home.local.discover': 'स्थानीय व्यवसाय खोजें',
    'home.local.connect': 'अपने शहर से जुड़ें', 'home.prelaunch': 'RivoCity बारामती में लॉन्च की तैयारी कर रहा है।',
    'vendors.hero.title': 'अपने शहर के साथ व्यवसाय बढ़ाएँ।',
    'vendors.hero.subtitle': 'अपनी दुकान ऑनलाइन लाएँ, उत्पाद और स्टॉक संभालें और RivoCity से स्थानीय ग्राहकों तक पहुँचें।',
    'vendors.cta': 'विक्रेता बनें', 'vendors.features.title': 'दुकान संभालने के लिए टूल',
    'vendors.features.subtitle': 'रोज़मर्रा के स्टोर संचालन के लिए बनाया गया विक्रेता पोर्टल।',
    'customers.hero.title': 'आपका शहर, पहले से और करीब।',
    'customers.hero.subtitle': 'स्थानीय दुकानें खोजें और अपने आसपास उपलब्ध उत्पादों व सेवाओं को देखें।',
    'riders.hero.title': 'अपने शहर को आगे बढ़ाएँ।',
    'riders.hero.subtitle': 'डिलीवरी पार्टनर बनकर स्थानीय दुकानों और ग्राहकों की मदद करने के अवसर जानें।',
    'about.hero.title': 'स्थानीय समुदायों के लिए बनाया गया।',
    'about.hero.subtitle': 'RivoCity शहर के व्यवसायों, ग्राहकों और डिलीवरी पार्टनर्स को जोड़ने के लिए बनाया जा रहा है।',
    'cities.hero.title': 'एक बार में एक शहर।',
    'cities.hero.subtitle': 'हम बारामती से शुरुआत कर रहे हैं और स्थानीय समुदायों के अनुसार प्लेटफ़ॉर्म बना रहे हैं।',
    'pricing.hero.title': 'स्थानीय व्यवसायों के लिए स्पष्ट योजनाएँ।',
    'pricing.hero.subtitle': 'RivoCity की विक्रेता योजनाओं और प्रकाशित शुल्क देखें।',
    'contact.hero.title': 'RivoCity टीम से बात करें।',
    'contact.hero.subtitle': 'प्लेटफ़ॉर्म, विक्रेता पंजीकरण या लॉन्च के बारे में सवाल हैं? हमसे संपर्क करें।',
    'help.hero.title': 'हम कैसे मदद कर सकते हैं?',
    'help.hero.subtitle': 'RivoCity और प्लेटफ़ॉर्म से जुड़ने की प्रक्रिया के बारे में जानें।',
    'apps.hero.title': 'RivoCity ऐप्स',
    'apps.hero.subtitle': 'ग्राहकों और डिलीवरी पार्टनर्स के लिए बनाए गए ऐप्स देखें।',
  },
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<RivoLanguage>(() => {
    try {
      const saved = localStorage.getItem('rivo-language');
      return saved === 'mr' || saved === 'hi' ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = useCallback((next: RivoLanguage) => updateLanguage(next), []);
  const t = useCallback((key: string) => translations[language][key] ?? translations.en[key] ?? key, [language]);

  useEffect(() => {
    try { localStorage.setItem('rivo-language', language); } catch { /* storage may be disabled */ }
    document.documentElement.lang = language === 'mr' ? 'mr-IN' : language === 'hi' ? 'hi-IN' : 'en';
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider');
  return value;
}
