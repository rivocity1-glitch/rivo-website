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
    'home.category.title': 'Everything your city has to offer.',
    'home.category.subtitle': 'Shop from trusted local businesses across multiple categories, all in one place.',
    'home.cat.grocery': 'Grocery', 'home.cat.groceryDesc': 'Fresh fruits, vegetables, daily essentials and household items.',
    'home.cat.pharmacy': 'Pharmacy', 'home.cat.pharmacyDesc': 'Medicines, healthcare products and wellness essentials.',
    'home.cat.electronics': 'Electronics', 'home.cat.electronicsDesc': 'Mobile accessories, gadgets and home electronics.',
    'home.cat.fashion': 'Fashion', 'home.cat.fashionDesc': 'Clothing, footwear and everyday fashion.',
    'home.cat.pet': 'Pet Care', 'home.cat.petDesc': 'Food, toys and essentials for your pets.',
    'home.cat.beauty': 'Beauty', 'home.cat.beautyDesc': 'Skincare, cosmetics and personal care.',
    'home.cat.stationery': 'Stationery', 'home.cat.stationeryDesc': 'Books, notebooks, office supplies and school essentials.',
    'home.cat.home': 'Home Essentials', 'home.cat.homeDesc': 'Kitchen, cleaning and everyday home products.',
    'delete.badge': 'Account & Privacy',
    'delete.title': 'Delete your RivoCity account',
    'delete.subtitle': 'Request account deletion',

    'notfound.title': 'Page not found.',
    'notfound.subtitle': "The page you are looking for doesn't exist or may have been moved.",
    'notfound.home': 'Go Home', 'notfound.contact': 'Contact Support',

'legal.badge': 'Legal',
    'legal.title': 'Legal Center',
    'legal.subtitle': 'Everything you need to know about using Rivo, your privacy and our policies.',
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
    'home.category.title': 'तुमच्या शहरातील सर्व पर्याय.',
    'home.category.subtitle': 'विविध प्रकारच्या स्थानिक व्यवसायांकडून खरेदी करा—सगळं एकाच ठिकाणी.',
    'home.cat.grocery': 'किराणा', 'home.cat.groceryDesc': 'ताजी फळे, भाज्या, दैनंदिन गरजेच्या आणि घरगुती वस्तू.',
    'home.cat.pharmacy': 'फार्मसी', 'home.cat.pharmacyDesc': 'औषधे, आरोग्यविषयक उत्पादने आणि वेलनेस वस्तू.',
    'home.cat.electronics': 'इलेक्ट्रॉनिक्स', 'home.cat.electronicsDesc': 'मोबाइल अ‍ॅक्सेसरीज, गॅजेट्स आणि घरगुती इलेक्ट्रॉनिक्स.',
    'home.cat.fashion': 'फॅशन', 'home.cat.fashionDesc': 'कपडे, पादत्राणे आणि रोजच्या वापरातील फॅशन.',
    'home.cat.pet': 'पाळीव प्राण्यांची काळजी', 'home.cat.petDesc': 'पाळीव प्राण्यांचे खाद्य, खेळणी आणि आवश्यक वस्तू.',
    'home.cat.beauty': 'सौंदर्य', 'home.cat.beautyDesc': 'त्वचेची काळजी, सौंदर्यप्रसाधने आणि वैयक्तिक निगा.',
    'home.cat.stationery': 'स्टेशनरी', 'home.cat.stationeryDesc': 'पुस्तके, वह्या, कार्यालयीन साहित्य आणि शालेय वस्तू.',
    'home.cat.home': 'घरगुती आवश्यक वस्तू', 'home.cat.homeDesc': 'स्वयंपाकघर, स्वच्छता आणि घरातील दैनंदिन वस्तू.',
    'delete.badge': 'खाते आणि गोपनीयता',
    'delete.title': 'तुमचे RivoCity खाते हटवा',
    'delete.subtitle': 'खाते हटवण्याची विनंती करा',

    'notfound.title': 'पृष्ठ सापडले नाही.',
    'notfound.subtitle': 'तुम्ही शोधत असलेले पृष्ठ उपलब्ध नाही किंवा हलवले गेले असू शकते.',
    'notfound.home': 'मुख्यपृष्ठावर जा', 'notfound.contact': 'सपोर्टशी संपर्क साधा',

'legal.badge': 'कायदेशीर माहिती',
    'legal.title': 'कायदेशीर केंद्र',
    'legal.subtitle': 'RivoCity चा वापर, तुमची गोपनीयता आणि आमच्या धोरणांबद्दल आवश्यक माहिती.',
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
    'home.category.title': 'आपके शहर के सभी विकल्प।',
    'home.category.subtitle': 'विभिन्न श्रेणियों में भरोसेमंद स्थानीय दुकानों से खरीदारी करें—सब एक जगह।',
    'home.cat.grocery': 'किराना', 'home.cat.groceryDesc': 'ताज़े फल, सब्ज़ियाँ, रोज़मर्रा और घरेलू ज़रूरतों की चीज़ें।',
    'home.cat.pharmacy': 'फार्मेसी', 'home.cat.pharmacyDesc': 'दवाइयाँ, स्वास्थ्य उत्पाद और वेलनेस की ज़रूरी चीज़ें।',
    'home.cat.electronics': 'इलेक्ट्रॉनिक्स', 'home.cat.electronicsDesc': 'मोबाइल एक्सेसरीज़, गैजेट्स और घरेलू इलेक्ट्रॉनिक्स।',
    'home.cat.fashion': 'फैशन', 'home.cat.fashionDesc': 'कपड़े, जूते और रोज़मर्रा का फैशन।',
    'home.cat.pet': 'पालतू जानवरों की देखभाल', 'home.cat.petDesc': 'पालतू जानवरों का भोजन, खिलौने और ज़रूरी सामान।',
    'home.cat.beauty': 'ब्यूटी', 'home.cat.beautyDesc': 'त्वचा की देखभाल, कॉस्मेटिक्स और व्यक्तिगत देखभाल।',
    'home.cat.stationery': 'स्टेशनरी', 'home.cat.stationeryDesc': 'किताबें, कॉपियाँ, दफ़्तर का सामान और स्कूल की ज़रूरतें।',
    'home.cat.home': 'घर की ज़रूरी चीज़ें', 'home.cat.homeDesc': 'रसोई, सफ़ाई और रोज़मर्रा के घरेलू उत्पाद।',
    'delete.badge': 'खाता और गोपनीयता',
    'delete.title': 'अपना RivoCity खाता हटाएँ',
    'delete.subtitle': 'खाता हटाने का अनुरोध करें',

    'notfound.title': 'पेज नहीं मिला।',
    'notfound.subtitle': 'आप जिस पेज को खोज रहे हैं वह मौजूद नहीं है या स्थानांतरित हो गया है।',
    'notfound.home': 'होम पर जाएँ', 'notfound.contact': 'सहायता से संपर्क करें',

'legal.badge': 'कानूनी जानकारी',
    'legal.title': 'कानूनी केंद्र',
    'legal.subtitle': 'RivoCity के उपयोग, आपकी गोपनीयता और हमारी नीतियों से जुड़ी आवश्यक जानकारी।',
'pricing.compare': 'योजनाओं की तुलना करें',
    'about.mission': 'स्थानीय खरीदारी को तेज़, आसान और अधिक जुड़ा हुआ बनाकर हर शहर को आगे बढ़ने में मदद करना।',
    'about.vision': 'ऐसा भविष्य जहाँ हर शहर के पास भरोसेमंद स्थानीय व्यवसायों और डिलीवरी पार्टनर्स से चलने वाला अपना डिजिटल बाज़ार हो।',
    'home.community.title': 'हर किसी के लिए बनाया गया।',
    'home.community.subtitle': 'ग्राहकों, स्थानीय व्यवसायों और डिलीवरी पार्टनर्स के लिए एक शहर का प्लेटफ़ॉर्म।',
    'home.customer.title': 'ग्राहक', 'home.customer.desc': 'स्थानीय दुकानें खोजें, भरोसे से खरीदारी करें और ज़रूरी सामान पाएँ।', 'home.customer.cta': 'ऐप देखें',
    'home.vendor.title': 'विक्रेता', 'home.vendor.desc': 'अपना व्यवसाय बढ़ाएँ, अधिक ग्राहकों तक पहुँचें और सब कुछ एक जगह संभालें।', 'home.vendor.cta': 'पार्टनर बनें',
    'home.rider.title': 'राइडर', 'home.rider.desc': 'स्थानीय डिलीवरी करें और डिलीवरी पार्टनर के अवसर जानें।', 'home.rider.cta': 'RivoCity Rider से जुड़ें',
  },
};


const globalTranslations: Record<string, [string, string]> = {
  "for customers": [
    "ग्राहकांसाठी",
    "ग्राहकों के लिए"
  ],
  "user benefits": [
    "वापरकर्त्यांचे फायदे",
    "उपयोगकर्ताओं के लाभ"
  ],
  "shopping made simple.": [
    "खरेदी आता सोपी.",
    "खरीदारी अब आसान।"
  ],
  "city shelves": [
    "शहरातील पर्याय",
    "शहर की दुकानें"
  ],
  "explore every category": [
    "प्रत्येक श्रेणी पाहा",
    "हर श्रेणी देखें"
  ],
  "simple workflow": [
    "सोपे टप्पे",
    "आसान प्रक्रिया"
  ],
  "from your phone to your doorstep.": [
    "तुमच्या फोनपासून थेट दारापर्यंत.",
    "आपके फोन से सीधे आपके दरवाज़े तक।"
  ],
  "daily convenience": [
    "दररोजची सोय",
    "रोज़मर्रा की सुविधा"
  ],
  "designed around your everyday needs.": [
    "तुमच्या दैनंदिन गरजांसाठी तयार.",
    "आपकी रोज़मर्रा की ज़रूरतों के लिए बनाया गया।"
  ],
  "support your city with every order.": [
    "प्रत्येक ऑर्डरने तुमच्या शहराला साथ द्या.",
    "हर ऑर्डर से अपने शहर का साथ दें।"
  ],
  "frequently asked questions": [
    "वारंवार विचारले जाणारे प्रश्न",
    "अक्सर पूछे जाने वाले प्रश्न"
  ],
  "start shopping locally.": [
    "स्थानिक खरेदी सुरू करा.",
    "स्थानीय खरीदारी शुरू करें।"
  ],
  "everything you need is closer than you think. discover trusted stores in your city and enjoy a better way to shop.": [
    "तुम्हाला लागणाऱ्या गोष्टी तुमच्या जवळच आहेत. शहरातील विश्वासार्ह दुकाने शोधा आणि खरेदीचा उत्तम अनुभव घ्या.",
    "आपकी ज़रूरत की चीज़ें आपकी सोच से भी करीब हैं। अपने शहर की भरोसेमंद दुकानें खोजें और बेहतर खरीदारी का अनुभव पाएँ।"
  ],
  "explore stores": [
    "दुकाने पाहा",
    "दुकानें देखें"
  ],
  "download app": [
    "अ‍ॅप डाउनलोड करा",
    "ऐप डाउनलोड करें"
  ],
  "for riders": [
    "रायडर्ससाठी",
    "राइडर्स के लिए"
  ],
  "become a rivo rider and earn by delivering orders across your city. choose your availability, receive delivery requests and enjoy a simple, reliable delivery experience.": [
    "तुमच्या शहरात ऑर्डर पोहोचवून कमाई करा. तुमची उपलब्धता निवडा, डिलिव्हरी विनंत्या मिळवा आणि सोपा, विश्वासार्ह अनुभव घ्या.",
    "अपने शहर में ऑर्डर डिलीवर करके कमाएँ। अपनी उपलब्धता चुनें, डिलीवरी अनुरोध पाएँ और आसान, भरोसेमंद अनुभव का लाभ लें।"
  ],
  "rider benefits": [
    "रायडर्सचे फायदे",
    "राइडर के लाभ"
  ],
  "designed for riders.": [
    "रायडर्ससाठी तयार.",
    "राइडर्स के लिए बनाया गया।"
  ],
  "onboarding process": [
    "नोंदणी प्रक्रिया",
    "जुड़ने की प्रक्रिया"
  ],
  "start delivering in four simple steps.": [
    "चार सोप्या टप्प्यांत डिलिव्हरी सुरू करा.",
    "चार आसान चरणों में डिलीवरी शुरू करें।"
  ],
  "app utilities": [
    "अ‍ॅपची वैशिष्ट्ये",
    "ऐप की सुविधाएँ"
  ],
  "everything you need.": [
    "तुम्हाला आवश्यक सर्व काही.",
    "आपकी हर ज़रूरत की सुविधा।"
  ],
  "requirements": [
    "आवश्यक अटी",
    "ज़रूरी योग्यताएँ"
  ],
  "who can join.": [
    "कोण सहभागी होऊ शकते.",
    "कौन जुड़ सकता है।"
  ],
  "core strengths": [
    "मुख्य वैशिष्ट्ये",
    "मुख्य खूबियाँ"
  ],
  "built to make every delivery simple.": [
    "प्रत्येक डिलिव्हरी सोपी करण्यासाठी तयार.",
    "हर डिलीवरी आसान बनाने के लिए।"
  ],
  "faq desk": [
    "प्रश्नोत्तर विभाग",
    "प्रश्नोत्तर"
  ],
  "ready to start delivering?": [
    "डिलिव्हरी सुरू करण्यास तयार आहात?",
    "डिलीवरी शुरू करने के लिए तैयार हैं?"
  ],
  "join as a rider and become part of a growing community helping local businesses serve customers across the city.": [
    "रायडर म्हणून सहभागी व्हा आणि शहरातील स्थानिक व्यवसायांना ग्राहकांपर्यंत पोहोचवणाऱ्या समुदायाचा भाग बना.",
    "राइडर के रूप में जुड़ें और स्थानीय व्यवसायों को पूरे शहर के ग्राहकों तक पहुँचाने वाले समुदाय का हिस्सा बनें।"
  ],
  "contact us": [
    "आमच्याशी संपर्क साधा",
    "हमसे संपर्क करें"
  ],
  "the challenge": [
    "आव्हान",
    "चुनौती"
  ],
  "unified commerce": [
    "एकत्रित कॉमर्स",
    "एकीकृत कॉमर्स"
  ],
  "our mission": [
    "आमचे ध्येय",
    "हमारा मिशन"
  ],
  "our vision": [
    "आमची दृष्टी",
    "हमारा विज़न"
  ],
  "what drives us": [
    "आम्हाला प्रेरणा देणारे",
    "हमारी प्रेरणा"
  ],
  "our values": [
    "आमची मूल्ये",
    "हमारे मूल्य"
  ],
  "the real impact": [
    "खरा परिणाम",
    "वास्तविक प्रभाव"
  ],
  "when local businesses grow, everyone benefits.": [
    "स्थानिक व्यवसाय वाढले की सर्वांना फायदा होतो.",
    "स्थानीय व्यवसाय बढ़ते हैं तो सभी को लाभ होता है।"
  ],
  "simple standards": [
    "सोपे निकष",
    "सरल मानक"
  ],
  "why choose rivo": [
    "Rivo का निवडावे",
    "Rivo क्यों चुनें"
  ],
  "the road forward": [
    "पुढचा प्रवास",
    "आगे का रास्ता"
  ],
  "starting with one city.": [
    "एका शहरापासून सुरुवात.",
    "एक शहर से शुरुआत।"
  ],
  "growing one community at a time.": [
    "एकावेळी एक समुदाय जोडत.",
    "एक-एक समुदाय को साथ लेकर।"
  ],
  "we're beginning our journey in baramati and look forward to expanding into more cities as we continue building a trusted local commerce platform.": [
    "आमचा प्रवास बारामतीपासून सुरू होत आहे. विश्वासार्ह स्थानिक कॉमर्स प्लॅटफॉर्म उभारताना पुढील शहरांमध्ये विस्तार करण्याची आमची योजना आहे.",
    "हमारी शुरुआत बारामती से हो रही है। भरोसेमंद स्थानीय कॉमर्स प्लेटफ़ॉर्म बनाते हुए हम आगे और शहरों में विस्तार करना चाहते हैं।"
  ],
  "let's build better": [
    "चला, अधिक चांगले घडवूया",
    "आइए, बेहतर बनाएँ"
  ],
  "local commerce together.": [
    "स्थानिक कॉमर्स एकत्र घडवूया.",
    "मिलकर स्थानीय कॉमर्स बनाएँ।"
  ],
  "whether you're shopping, growing your business or looking for flexible earning opportunities, rivo is built to bring local communities together.": [
    "तुम्ही खरेदी करत असाल, व्यवसाय वाढवत असाल किंवा लवचिक कमाईच्या संधी शोधत असाल—Rivo स्थानिक समुदायांना जोडण्यासाठी तयार आहे.",
    "आप खरीदारी करें, व्यवसाय बढ़ाएँ या कमाई के लचीले अवसर खोजें—Rivo स्थानीय समुदायों को जोड़ने के लिए बनाया गया है।"
  ],
  "explore rivo": [
    "Rivo जाणून घ्या",
    "Rivo देखें"
  ],
  "become a partner": [
    "भागीदार बना",
    "पार्टनर बनें"
  ],
  "service areas": [
    "सेवा क्षेत्रे",
    "सेवा क्षेत्र"
  ],
  "request your city": [
    "तुमचे शहर सुचवा",
    "अपने शहर का अनुरोध करें"
  ],
  "active hub": [
    "सक्रिय केंद्र",
    "सक्रिय केंद्र"
  ],
  "our first launch city": [
    "आमचे पहिले लॉन्च शहर",
    "हमारा पहला लॉन्च शहर"
  ],
  "baramati": [
    "बारामती",
    "बारामती"
  ],
  "businesses": [
    "व्यवसाय",
    "व्यवसाय"
  ],
  "shop from trusted local stores.": [
    "विश्वासार्ह स्थानिक दुकानांतून खरेदी करा.",
    "भरोसेमंद स्थानीय दुकानों से खरीदें।"
  ],
  "reach more customers across the city.": [
    "शहरभरातील अधिक ग्राहकांपर्यंत पोहोचा.",
    "पूरे शहर में अधिक ग्राहकों तक पहुँचें।"
  ],
  "earn by delivering locally.": [
    "स्थानिक डिलिव्हरी करून कमवा.",
    "स्थानीय डिलीवरी करके कमाएँ।"
  ],
  "our philosophy": [
    "आमचे तत्त्व",
    "हमारा सिद्धांत"
  ],
  "quality before expansion.": [
    "विस्तारापूर्वी गुणवत्ता.",
    "विस्तार से पहले गुणवत्ता।"
  ],
  "future horizons": [
    "भविष्यातील दिशा",
    "भविष्य की योजनाएँ"
  ],
  "more cities are on the roadmap.": [
    "अधिक शहरे भविष्यातील योजनेत आहेत.",
    "और शहर भविष्य की योजना में हैं।"
  ],
  "coming soon": [
    "लवकरच येत आहे",
    "जल्द आ रहा है"
  ],
  "planned for future expansion": [
    "भविष्यातील विस्तारासाठी नियोजित",
    "भविष्य के विस्तार की योजना"
  ],
  "vote for expansion": [
    "पुढील शहरासाठी मत द्या",
    "अगले शहर के लिए सुझाव दें"
  ],
  "want rivo in your city?": [
    "तुमच्या शहरात Rivo हवे आहे?",
    "क्या आप अपने शहर में Rivo चाहते हैं?"
  ],
  "tell us where you'd like to see rivo next. your interest helps us understand where we should expand in the future.": [
    "पुढे Rivo कोणत्या शहरात हवे आहे ते सांगा. तुमचा प्रतिसाद आम्हाला भविष्यातील विस्तार ठरवण्यास मदत करेल.",
    "बताएँ कि आप आगे Rivo को किस शहर में देखना चाहते हैं। आपकी रुचि हमें भविष्य का विस्तार तय करने में मदद करेगी।"
  ],
  "name": [
    "नाव",
    "नाम"
  ],
  "email address": [
    "ईमेल पत्ता",
    "ईमेल पता"
  ],
  "city": [
    "शहर",
    "शहर"
  ],
  "notify me": [
    "मला कळवा",
    "मुझे सूचित करें"
  ],
  "submitting this form does not guarantee launch in your city. it simply helps us understand where people would like to see rivo next.": [
    "हा फॉर्म भरल्याने तुमच्या शहरात लॉन्च होईल याची हमी मिळत नाही. लोकांना पुढे Rivo कुठे हवे आहे हे समजण्यास मदत होते.",
    "यह फ़ॉर्म भरने से आपके शहर में लॉन्च की गारंटी नहीं है। इससे हमें पता चलता है कि लोग आगे Rivo को कहाँ देखना चाहते हैं।"
  ],
  "inquiries desk": [
    "चौकशी विभाग",
    "पूछताछ"
  ],
  "wherever you are, we'd love": [
    "तुम्ही कुठेही असलात तरी आम्हाला आवडेल",
    "आप जहाँ भी हों, हम चाहेंगे"
  ],
  "to bring rivo to your city.": [
    "Rivo तुमच्या शहरात आणायला.",
    "कि Rivo आपके शहर में आए।"
  ],
  "tell us where you'd like us to launch next.": [
    "पुढील लॉन्चसाठी तुमचे शहर सांगा.",
    "बताएँ कि अगला लॉन्च किस शहर में हो।"
  ],
  "pricing": [
    "किंमत",
    "मूल्य"
  ],
  "choose the plan that best fits your business. whether you're just getting started or looking to grow, rivo offers flexible options designed for local businesses.": [
    "तुमच्या व्यवसायाला योग्य अशी योजना निवडा. सुरुवात करत असाल किंवा वाढ करू इच्छित असाल, Rivo स्थानिक व्यवसायांसाठी लवचिक पर्याय देते.",
    "अपने व्यवसाय के अनुसार योजना चुनें। शुरुआत कर रहे हों या बढ़ना चाहते हों, Rivo स्थानीय व्यवसायों के लिए लचीले विकल्प देता है।"
  ],
  "pros": [
    "फायदे",
    "फ़ायदे"
  ],
  "cons": [
    "तोटे",
    "कमियाँ"
  ],
  "pricing and subscription features may evolve as rivo grows and introduces new platform capabilities.": [
    "Rivo वाढत असताना आणि नवीन वैशिष्ट्ये आणताना किंमत व सदस्यता सुविधा बदलू शकतात.",
    "Rivo के बढ़ने और नई सुविधाएँ जोड़ने के साथ मूल्य और सदस्यता सुविधाएँ बदल सकती हैं।"
  ],
  "granular breakdown": [
    "तपशीलवार माहिती",
    "विस्तृत विवरण"
  ],
  "compare features": [
    "वैशिष्ट्यांची तुलना",
    "सुविधाओं की तुलना"
  ],
  "plan tier features": [
    "योजना वैशिष्ट्ये",
    "योजना की सुविधाएँ"
  ],
  "free": [
    "मोफत",
    "मुफ़्त"
  ],
  "basic": [
    "बेसिक",
    "बेसिक"
  ],
  "fair standards": [
    "न्याय्य निकष",
    "उचित मानक"
  ],
  "honest pricing models.": [
    "पारदर्शक किंमत योजना.",
    "पारदर्शी मूल्य मॉडल।"
  ],
  "pricing help": [
    "किंमतविषयक मदत",
    "मूल्य संबंधी सहायता"
  ],
  "choose the plan that works for your business.": [
    "तुमच्या व्यवसायासाठी योग्य योजना निवडा.",
    "अपने व्यवसाय के लिए सही योजना चुनें।"
  ],
  "whether you're just getting started or looking to eliminate commission fees, rivo offers simple pricing designed for local businesses.": [
    "तुम्ही नुकतीच सुरुवात करत असाल किंवा कमिशन शुल्क टाळू इच्छित असाल, Rivo स्थानिक व्यवसायांसाठी सोप्या किंमत योजना देते.",
    "आप अभी शुरुआत कर रहे हों या कमीशन शुल्क हटाना चाहते हों, Rivo स्थानीय व्यवसायों के लिए सरल मूल्य योजनाएँ देता है।"
  ],
  "email support": [
    "ईमेल सहाय्य",
    "ईमेल सहायता"
  ],
  "for general questions and support.": [
    "सामान्य प्रश्न आणि सहाय्यासाठी.",
    "सामान्य सवाल और सहायता के लिए।"
  ],
  "business enquiries": [
    "व्यवसायविषयक चौकशी",
    "व्यावसायिक पूछताछ"
  ],
  "for partnerships and business enquiries.": [
    "भागीदारी व व्यवसायविषयक चौकशीसाठी.",
    "साझेदारी और व्यावसायिक पूछताछ के लिए।"
  ],
  "business hours": [
    "कामकाजाची वेळ",
    "काम के घंटे"
  ],
  "support is available during business hours.": [
    "कामकाजाच्या वेळेत सहाय्य उपलब्ध आहे.",
    "काम के समय सहायता उपलब्ध है।"
  ],
  "monday – saturday": [
    "सोमवार – शनिवार",
    "सोमवार – शनिवार"
  ],
  "send us a message": [
    "आम्हाला संदेश पाठवा",
    "हमें संदेश भेजें"
  ],
  "full name": [
    "पूर्ण नाव",
    "पूरा नाम"
  ],
  "subject": [
    "विषय",
    "विषय"
  ],
  "message": [
    "संदेश",
    "संदेश"
  ],
  "send message": [
    "संदेश पाठवा",
    "संदेश भेजें"
  ],
  "rivo channels": [
    "Rivo संपर्क माध्यमे",
    "Rivo संपर्क माध्यम"
  ],
  "who can contact us?": [
    "आमच्याशी कोण संपर्क करू शकते?",
    "हमसे कौन संपर्क कर सकता है?"
  ],
  "quick help": [
    "जलद मदत",
    "त्वरित सहायता"
  ],
  "need more help?": [
    "अधिक मदत हवी आहे?",
    "और मदद चाहिए?"
  ],
  "support information": [
    "सहाय्य माहिती",
    "सहायता जानकारी"
  ],
  "we're here to help.": [
    "आम्ही मदतीसाठी आहोत.",
    "हम मदद के लिए यहाँ हैं।"
  ],
  "our support team is available during business hours to help customers, vendors and riders.": [
    "ग्राहक, विक्रेते आणि रायडर्सना मदत करण्यासाठी आमची सहाय्य टीम कामकाजाच्या वेळेत उपलब्ध असते.",
    "ग्राहकों, विक्रेताओं और राइडर्स की मदद के लिए हमारी सहायता टीम काम के समय उपलब्ध है।"
  ],
  "still need help?": [
    "अजून मदत हवी आहे?",
    "अभी भी मदद चाहिए?"
  ],
  "if you couldn't find the answer you were looking for, our support team is ready to help.": [
    "तुम्हाला अपेक्षित उत्तर मिळाले नसेल तर आमची सहाय्य टीम मदतीसाठी तयार आहे.",
    "अगर आपको जवाब नहीं मिला, तो हमारी सहायता टीम मदद के लिए तैयार है।"
  ],
  "one connected platform": [
    "एकमेकांशी जोडलेला प्लॅटफॉर्म",
    "एक जुड़ा हुआ प्लेटफ़ॉर्म"
  ],
  "built for every side of local commerce.": [
    "स्थानिक कॉमर्सच्या प्रत्येक घटकासाठी तयार.",
    "स्थानीय कॉमर्स के हर हिस्से के लिए बनाया गया।"
  ],
  "customer app": [
    "ग्राहक अ‍ॅप",
    "ग्राहक ऐप"
  ],
  "your city.": [
    "तुमचं शहर.",
    "आपका शहर।"
  ],
  "your shopping.": [
    "तुमची खरेदी.",
    "आपकी खरीदारी।"
  ],
  "discover nearby businesses, browse products, place orders and follow your order — all from one rivocity app.": [
    "जवळचे व्यवसाय शोधा, उत्पादने पाहा, ऑर्डर द्या आणि ऑर्डरची स्थिती पाहा—हे सर्व एका RivoCity अ‍ॅपमधून.",
    "आसपास के व्यवसाय खोजें, उत्पाद देखें, ऑर्डर दें और ऑर्डर की स्थिति देखें—सब एक RivoCity ऐप से।"
  ],
  "download customer app": [
    "ग्राहक अ‍ॅप डाउनलोड करा",
    "ग्राहक ऐप डाउनलोड करें"
  ],
  "rider app": [
    "रायडर अ‍ॅप",
    "राइडर ऐप"
  ],
  "deliver locally.": [
    "स्थानिक डिलिव्हरी करा.",
    "स्थानीय डिलीवरी करें।"
  ],
  "earn on the move.": [
    "फिरता-फिरता कमवा.",
    "चलते-फिरते कमाएँ।"
  ],
  "rivocity gives delivery partners the tools they need to manage assigned orders, pickups, deliveries and earnings.": [
    "RivoCity डिलिव्हरी भागीदारांना नियुक्त ऑर्डर, पिकअप, डिलिव्हरी आणि कमाई व्यवस्थापित करण्यासाठी आवश्यक साधने देते.",
    "RivoCity डिलीवरी पार्टनर्स को असाइन किए गए ऑर्डर, पिकअप, डिलीवरी और कमाई संभालने के लिए ज़रूरी टूल देता है।"
  ],
  "download rider app": [
    "रायडर अ‍ॅप डाउनलोड करा",
    "राइडर ऐप डाउनलोड करें"
  ],
  "scan & download": [
    "स्कॅन करा आणि डाउनलोड करा",
    "स्कैन करें और डाउनलोड करें"
  ],
  "get rivocity on your phone.": [
    "तुमच्या फोनवर RivoCity मिळवा.",
    "अपने फोन पर RivoCity पाएँ।"
  ],
  "scan a qr code with your phone camera to download the rivocity app you need.": [
    "आवश्यक RivoCity अ‍ॅप डाउनलोड करण्यासाठी फोनच्या कॅमेऱ्याने QR कोड स्कॅन करा.",
    "ज़रूरी RivoCity ऐप डाउनलोड करने के लिए फोन कैमरे से QR कोड स्कैन करें।"
  ],
  "customer": [
    "ग्राहक",
    "ग्राहक"
  ],
  "scan to download the rivocity customer app.": [
    "RivoCity ग्राहक अ‍ॅप डाउनलोड करण्यासाठी स्कॅन करा.",
    "RivoCity ग्राहक ऐप डाउनलोड करने के लिए स्कैन करें।"
  ],
  "rider": [
    "रायडर",
    "राइडर"
  ],
  "scan to download the rivocity rider app.": [
    "RivoCity Rider अ‍ॅप डाउनलोड करण्यासाठी स्कॅन करा.",
    "RivoCity Rider ऐप डाउनलोड करने के लिए स्कैन करें।"
  ],
  "vendor portal": [
    "विक्रेता पोर्टल",
    "विक्रेता पोर्टल"
  ],
  "run your business": [
    "तुमचा व्यवसाय सांभाळा",
    "अपना व्यवसाय संभालें"
  ],
  "with rivocity.": [
    "RivoCity सह.",
    "RivoCity के साथ।"
  ],
  "the rivocity vendor portal gives local businesses one place to manage products, inventory, orders, offers, banners, analytics, store operations and settlements.": [
    "RivoCity विक्रेता पोर्टलमध्ये स्थानिक व्यवसाय उत्पादने, साठा, ऑर्डर, ऑफर्स, बॅनर, विश्लेषण, दुकानाचे कामकाज आणि सेटलमेंट्स एकाच ठिकाणी व्यवस्थापित करू शकतात.",
    "RivoCity विक्रेता पोर्टल में स्थानीय व्यवसाय उत्पाद, स्टॉक, ऑर्डर, ऑफ़र, बैनर, एनालिटिक्स, स्टोर संचालन और सेटलमेंट एक जगह संभाल सकते हैं।"
  ],
  "open vendor portal": [
    "विक्रेता पोर्टल उघडा",
    "विक्रेता पोर्टल खोलें"
  ],
  "business operations": [
    "व्यवसाय संचालन",
    "व्यवसाय संचालन"
  ],
  "the rivocity journey": [
    "RivoCity चा प्रवास",
    "RivoCity की यात्रा"
  ],
  "one order.": [
    "एक ऑर्डर.",
    "एक ऑर्डर।"
  ],
  "three connected experiences.": [
    "तीन जोडलेले अनुभव.",
    "तीन जुड़े हुए अनुभव।"
  ],
  "rivocity connects the customer who orders, the vendor who prepares, and the rider who delivers.": [
    "ऑर्डर देणारा ग्राहक, ऑर्डर तयार करणारा विक्रेता आणि डिलिव्हरी करणारा रायडर—या सर्वांना RivoCity जोडते.",
    "RivoCity ऑर्डर देने वाले ग्राहक, उसे तैयार करने वाले विक्रेता और डिलीवर करने वाले राइडर को जोड़ता है।"
  ],
  "one city.": [
    "एक शहर.",
    "एक शहर।"
  ],
  "infinite possibilities.": [
    "अमर्याद शक्यता.",
    "अनंत संभावनाएँ।"
  ],
  "rivocity brings customers, local businesses and delivery partners together through one connected city commerce platform.": [
    "RivoCity ग्राहक, स्थानिक व्यवसाय आणि डिलिव्हरी भागीदारांना एका शहर-केंद्रित कॉमर्स प्लॅटफॉर्मवर जोडते.",
    "RivoCity ग्राहकों, स्थानीय व्यवसायों और डिलीवरी पार्टनर्स को एक शहर-केंद्रित कॉमर्स प्लेटफ़ॉर्म पर जोड़ता है।"
  ],
  "explore customer experience": [
    "ग्राहक अनुभव जाणून घ्या",
    "ग्राहक अनुभव देखें"
  ],
  "for local businesses": [
    "स्थानिक व्यवसायांसाठी",
    "स्थानीय व्यवसायों के लिए"
  ],
  "reach more local customers, manage your store with ease and grow your business through one simple platform built for your city.": [
    "तुमच्या शहरासाठी तयार केलेल्या एका सोप्या प्लॅटफॉर्मद्वारे अधिक स्थानिक ग्राहकांपर्यंत पोहोचा, दुकान सहज सांभाळा आणि व्यवसाय वाढवा.",
    "अपने शहर के लिए बने एक आसान प्लेटफ़ॉर्म से अधिक स्थानीय ग्राहकों तक पहुँचें, दुकान संभालें और व्यवसाय बढ़ाएँ।"
  ],
  "built for local businesses": [
    "स्थानिक व्यवसायांसाठी तयार",
    "स्थानीय व्यवसायों के लिए बनाया गया"
  ],
  "simple store management": [
    "सोपे दुकान व्यवस्थापन",
    "आसान स्टोर प्रबंधन"
  ],
  "rivo vendor portal": [
    "Rivo विक्रेता पोर्टल",
    "Rivo विक्रेता पोर्टल"
  ],
  "store management": [
    "दुकान व्यवस्थापन",
    "स्टोर प्रबंधन"
  ],
  "sales growth": [
    "विक्री वाढ",
    "बिक्री में वृद्धि"
  ],
  "this month": [
    "या महिन्यात",
    "इस महीने"
  ],
  "view": [
    "पहा",
    "देखें"
  ],
  "initial launch": [
    "प्रारंभिक लॉन्च",
    "शुरुआती लॉन्च"
  ],
  "looking for local businesses to start our initial launch.": [
    "प्रारंभिक लॉन्चसाठी आम्ही स्थानिक व्यवसाय शोधत आहोत.",
    "शुरुआती लॉन्च के लिए हम स्थानीय व्यवसायों से जुड़ रहे हैं।"
  ],
  "rivo is onboarding local businesses for its initial city launch. join early, get your store online and be part of building local commerce in your city.": [
    "शहरातील पहिल्या लॉन्चसाठी Rivo स्थानिक व्यवसायांना सहभागी करत आहे. लवकर सहभागी व्हा, दुकान ऑनलाइन आणा आणि तुमच्या शहरातील स्थानिक कॉमर्स घडवण्याचा भाग बना.",
    "शहर के शुरुआती लॉन्च के लिए Rivo स्थानीय व्यवसायों को जोड़ रहा है। जल्दी जुड़ें, दुकान ऑनलाइन लाएँ और अपने शहर के स्थानीय कॉमर्स का हिस्सा बनें।"
  ],
  "launch incentives and eligibility may vary by city, launch period and vendor activity.": [
    "लॉन्च प्रोत्साहने आणि पात्रता शहर, लॉन्च कालावधी व विक्रेत्याच्या सहभागानुसार बदलू शकतात.",
    "लॉन्च प्रोत्साहन और पात्रता शहर, लॉन्च अवधि और विक्रेता गतिविधि के अनुसार बदल सकते हैं।"
  ],
  "store advantages": [
    "दुकानाचे फायदे",
    "स्टोर के लाभ"
  ],
  "everything your business needs to grow.": [
    "व्यवसाय वाढवण्यासाठी आवश्यक सर्व काही.",
    "व्यवसाय बढ़ाने के लिए ज़रूरी सब कुछ।"
  ],
  "complete control": [
    "पूर्ण नियंत्रण",
    "पूरा नियंत्रण"
  ],
  "manage your store with confidence.": [
    "आत्मविश्वासाने तुमचे दुकान व्यवस्थापित करा.",
    "आत्मविश्वास से अपना स्टोर संभालें।"
  ],
  "onboarding steps": [
    "नोंदणीचे टप्पे",
    "जुड़ने के चरण"
  ],
  "start selling in four simple steps.": [
    "चार सोप्या टप्प्यांत विक्री सुरू करा.",
    "चार आसान चरणों में बिक्री शुरू करें।"
  ],
  "built around your business": [
    "तुमच्या व्यवसायाभोवती तयार",
    "आपके व्यवसाय के अनुसार बनाया गया"
  ],
  "your business.": [
    "तुमचा व्यवसाय.",
    "आपका व्यवसाय।"
  ],
  "your store. your control.": [
    "तुमचे दुकान. तुमचे नियंत्रण.",
    "आपकी दुकान। आपका नियंत्रण।"
  ],
  "manage your products, orders, inventory, store information, analytics and settlements from the rivo vendor portal.": [
    "Rivo विक्रेता पोर्टलमधून उत्पादने, ऑर्डर, साठा, दुकानाची माहिती, विश्लेषण आणि सेटलमेंट व्यवस्थापित करा.",
    "Rivo विक्रेता पोर्टल से उत्पाद, ऑर्डर, स्टॉक, स्टोर जानकारी, एनालिटिक्स और सेटलमेंट संभालें।"
  ],
  "merchant inquiries": [
    "विक्रेता चौकशी",
    "व्यापारी पूछताछ"
  ],
  "join rivo": [
    "Rivo मध्ये सहभागी व्हा",
    "Rivo से जुड़ें"
  ],
  "ready to grow": [
    "वाढीसाठी तयार",
    "बढ़ने के लिए तैयार"
  ],
  "your business?": [
    "तुमचा व्यवसाय?",
    "आपका व्यवसाय?"
  ],
  "join a growing network of trusted local businesses and start reaching more customers with rivo.": [
    "विश्वासार्ह स्थानिक व्यवसायांच्या वाढत्या नेटवर्कमध्ये सहभागी व्हा आणि Rivo द्वारे अधिक ग्राहकांपर्यंत पोहोचा.",
    "भरोसेमंद स्थानीय व्यवसायों के बढ़ते नेटवर्क से जुड़ें और Rivo से अधिक ग्राहकों तक पहुँचें।"
  ],
  "register your store": [
    "तुमचे दुकान नोंदवा",
    "अपनी दुकान पंजीकृत करें"
  ],
  "view pricing": [
    "किंमत योजना पाहा",
    "मूल्य योजनाएँ देखें"
  ],
  "support": [
    "सहाय्य",
    "सहायता"
  ],
  "legal": [
    "कायदेशीर माहिती",
    "कानूनी जानकारी"
  ],
  "terms & conditions": [
    "अटी व शर्ती",
    "नियम व शर्तें"
  ],
  "privacy policy": [
    "गोपनीयता धोरण",
    "गोपनीयता नीति"
  ],
  "refund & cancellation": [
    "परतावा व रद्द करण्याचे धोरण",
    "रिफंड और कैंसलेशन"
  ],
  "delete account": [
    "खाते हटवा",
    "खाता हटाएँ"
  ],
  "navigation": [
    "नेव्हिगेशन",
    "नेविगेशन"
  ],
  "all rights reserved.": [
    "सर्व हक्क राखीव.",
    "सर्वाधिकार सुरक्षित।"
  ],
  "page not found.": [
    "पृष्ठ सापडले नाही.",
    "पेज नहीं मिला।"
  ],
  "the page you are looking for doesn't exist or may have been moved.": [
    "तुम्ही शोधत असलेले पृष्ठ उपलब्ध नाही किंवा हलवले गेले असू शकते.",
    "आप जिस पेज को खोज रहे हैं वह मौजूद नहीं है या स्थानांतरित हो गया है।"
  ],
  "go home": [
    "मुख्यपृष्ठावर जा",
    "होम पर जाएँ"
  ],
  "contact support": [
    "सपोर्टशी संपर्क साधा",
    "सहायता से संपर्क करें"
  ]
};

const normalizeCopy = (value: string) => value.replace(/\\s+/g, ' ').trim().toLocaleLowerCase();

const copyByValue = (() => {
  const index = new Map<string, { en: string; mr: string; hi: string }>();
  for (const [english, [mr, hi]] of Object.entries(globalTranslations)) {
    const record = { en: english, mr, hi };
    [english, mr, hi].forEach((value) => index.set(normalizeCopy(value), record));
  }
  return index;
})();

const nodeOriginals = new WeakMap<Text, string>();

function translateStaticText(node: Text, language: RivoLanguage) {
  const current = node.data;
  const original = nodeOriginals.get(node);
  const lookup = copyByValue.get(normalizeCopy(original ?? current));
  if (lookup) {
    if (!original) nodeOriginals.set(node, lookup.en);
    const desired = lookup[language];
    if (current !== desired) node.data = desired;
    return;
  }
  const reverse = copyByValue.get(normalizeCopy(current));
  if (reverse) {
    nodeOriginals.set(node, reverse.en);
    const desired = reverse[language];
    if (current !== desired) node.data = desired;
    return;
  }
  if (!original) nodeOriginals.set(node, current);
}

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
    document.documentElement.dataset.rivoLanguage = language;

    const root = document.getElementById('root');
    if (!root) return;
    const translateTree = (start: Node) => {
      const walker = document.createTreeWalker(start, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => {
          const parent = node.parentElement;
          if (!parent || parent.closest('script, style, textarea, input, select, option, [data-no-translate], .notranslate')) return NodeFilter.FILTER_REJECT;
          return node.textContent?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      });
      let node: Node | null;
      while ((node = walker.nextNode())) translateStaticText(node as Text, language);
    };

    translateTree(root);
    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === 'characterData' && record.target instanceof Text) {
          translateStaticText(record.target, language);
        }
        record.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) translateStaticText(node as Text, language);
          else if (node.nodeType === Node.ELEMENT_NODE) translateTree(node);
        });
      }
    });
    observer.observe(root, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider');
  return value;
}
