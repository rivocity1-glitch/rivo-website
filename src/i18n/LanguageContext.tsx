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

    'home.stats.categoriesLabel': 'Vendor Categories', 'home.stats.deliveryLabel': 'Local Delivery', 'home.stats.paymentsLabel': 'Payments', 'common.explore': 'Explore',
    'category.grocery': 'Grocery', 'category.groceryDesc': 'Fresh fruits, vegetables, daily essentials and household items.', 'category.pharmacy': 'Pharmacy', 'category.pharmacyDesc': 'Medicines, healthcare products and wellness essentials.', 'category.electronics': 'Electronics', 'category.electronicsDesc': 'Mobile accessories, gadgets and home electronics.', 'category.fashion': 'Fashion', 'category.fashionDesc': 'Clothing, footwear and everyday fashion.', 'category.petCare': 'Pet Care', 'category.petCareDesc': 'Food, toys and essentials for your pets.', 'category.beauty': 'Beauty', 'category.beautyDesc': 'Skincare, cosmetics and personal care.', 'category.stationery': 'Stationery', 'category.stationeryDesc': 'Books, notebooks, office supplies and school essentials.', 'category.home': 'Home Essentials', 'category.homeDesc': 'Kitchen, cleaning and everyday home products.', 'home.step.discover': 'Discover nearby stores', 'home.step.discoverDesc': 'Browse trusted local businesses in your city.', 'home.step.order': 'Place your order', 'home.step.orderDesc': 'Choose what you need and checkout in minutes.', 'home.step.prepare': 'Store prepares your order', 'home.step.prepareDesc': 'Your local store carefully packs everything.', 'home.step.deliver': 'Delivered to your door', 'home.step.deliverDesc': 'Track your order in real time until it arrives.',

    'apps.eyebrow': 'The RivoCity ecosystem', 'apps.explore': 'Explore the apps', 'apps.qr': 'Get the app QR', 'apps.connected': 'One connected platform', 'apps.heading': 'Built for every side of local commerce.', 'apps.ecosystemBody': 'Customers, businesses and delivery partners each have their own tools — while working together through the same RivoCity ecosystem.', 'apps.customerLabel': 'Customer', 'apps.customerTitle': 'Discover & shop', 'apps.customerDescription': 'Find local stores, browse products, place orders and follow your delivery.', 'apps.vendorLabel': 'Vendor', 'apps.vendorTitle': 'Manage & grow', 'apps.vendorDescription': 'Manage products, inventory, orders, store timings, offers and business operations.', 'apps.riderLabel': 'Rider', 'apps.riderTitle': 'Pick up & deliver', 'apps.riderDescription': 'Manage assigned deliveries, pickup orders, complete deliveries and track earnings.',

    'about.eyebrow': 'About Rivo', 'about.heroTitle': 'Built for the cities we call home.', 'about.heroBody': "Rivo was created with a simple idea — make local shopping easier for customers while helping local businesses grow. By bringing trusted stores, delivery partners and customers together on one platform, we're building a better way to shop locally.", 'about.challenge': 'The Challenge', 'about.challengeTitle': 'Local shopping should be easier.', 'about.unified': 'Unified Commerce', 'about.solutionTitle': 'One platform for your entire city.', 'about.solutionBody': 'We tie the community closer together by closing the gap between neighborhood supply and immediate home demands.', 'about.mission': 'Our Mission', 'about.missionBody': 'To help every city thrive by making local shopping faster, easier and more connected.', 'about.vision': 'Our Vision',
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

    'home.stats.categoriesLabel': 'दुकानों की श्रेणियाँ', 'home.stats.deliveryLabel': 'स्थानीय डिलीवरी', 'home.stats.paymentsLabel': 'भुगतान', 'common.explore': 'देखें', 'category.grocery': 'किराना', 'category.groceryDesc': 'ताज़े फल, सब्ज़ियाँ, रोज़मर्रा की ज़रूरतें और घरेलू सामान।', 'category.pharmacy': 'फार्मेसी', 'category.pharmacyDesc': 'दवाइयाँ, स्वास्थ्य और वेलनेस से जुड़ी ज़रूरी चीज़ें।', 'category.electronics': 'इलेक्ट्रॉनिक्स', 'category.electronicsDesc': 'मोबाइल एक्सेसरीज़, गैजेट्स और घरेलू इलेक्ट्रॉनिक्स।', 'category.fashion': 'फैशन', 'category.fashionDesc': 'कपड़े, जूते और रोज़मर्रा का फैशन।', 'category.petCare': 'पालतू जानवरों की देखभाल', 'category.petCareDesc': 'पालतू जानवरों के लिए खाना, खिलौने और ज़रूरी सामान।', 'category.beauty': 'ब्यूटी', 'category.beautyDesc': 'त्वचा की देखभाल, कॉस्मेटिक्स और पर्सनल केयर।', 'category.stationery': 'स्टेशनरी', 'category.stationeryDesc': 'किताबें, कॉपियाँ, ऑफिस और स्कूल का सामान।', 'category.home': 'घरेलू ज़रूरतें', 'category.homeDesc': 'रसोई, सफ़ाई और घर में रोज़ काम आने वाली चीज़ें।', 'home.step.discover': 'पास की दुकानें खोजें', 'home.step.discoverDesc': 'अपने शहर के भरोसेमंद स्थानीय कारोबार देखें।', 'home.step.order': 'ऑर्डर दें', 'home.step.orderDesc': 'ज़रूरी सामान चुनें और कुछ ही मिनटों में चेकआउट करें।', 'home.step.prepare': 'दुकान आपका ऑर्डर तैयार करती है', 'home.step.prepareDesc': 'आपकी स्थानीय दुकान सामान सावधानी से पैक करती है।', 'home.step.deliver': 'आपके दरवाज़े तक डिलीवरी', 'home.step.deliverDesc': 'ऑर्डर पहुँचने तक उसकी स्थिति रियल टाइम में देखें.',

    'apps.eyebrow': 'RivoCity का पूरा प्लेटफ़ॉर्म', 'apps.explore': 'ऐप्स देखें', 'apps.qr': 'ऐप का QR कोड पाएँ', 'apps.connected': 'एक जुड़ा हुआ प्लेटफ़ॉर्म', 'apps.heading': 'स्थानीय कारोबार के हर हिस्से के लिए बना।', 'apps.ecosystemBody': 'ग्राहकों, कारोबारियों और डिलीवरी पार्टनर्स के पास अपने टूल हैं — और सभी RivoCity के एक ही प्लेटफ़ॉर्म पर साथ काम करते हैं।', 'apps.customerLabel': 'ग्राहक', 'apps.customerTitle': 'खोजें और खरीदें', 'apps.customerDescription': 'स्थानीय दुकानें खोजें, उत्पाद देखें, ऑर्डर दें और डिलीवरी ट्रैक करें।', 'apps.vendorLabel': 'दुकानदार', 'apps.vendorTitle': 'प्रबंधन और विकास', 'apps.vendorDescription': 'उत्पाद, स्टॉक, ऑर्डर, दुकान का समय, ऑफ़र और कारोबार प्रबंधित करें।', 'apps.riderLabel': 'डिलीवरी पार्टनर', 'apps.riderTitle': 'पिकअप और डिलीवरी', 'apps.riderDescription': 'सौंपी गई डिलीवरी संभालें, ऑर्डर पिकअप करें, डिलीवरी पूरी करें और कमाई देखें.',

    'about.eyebrow': 'Rivo के बारे में', 'about.heroTitle': 'उन शहरों के लिए, जिन्हें हम अपना घर कहते हैं।', 'about.heroBody': 'Rivo की शुरुआत एक सरल विचार से हुई — ग्राहकों के लिए स्थानीय खरीदारी आसान बनाना और स्थानीय कारोबार को बढ़ने में मदद करना। भरोसेमंद दुकानों, डिलीवरी पार्टनर्स और ग्राहकों को एक प्लेटफ़ॉर्म पर जोड़कर हम स्थानीय खरीदारी का बेहतर तरीका बना रहे हैं।', 'about.challenge': 'चुनौती', 'about.challengeTitle': 'स्थानीय खरीदारी और आसान होनी चाहिए।', 'about.unified': 'एकीकृत कॉमर्स', 'about.solutionTitle': 'आपके पूरे शहर के लिए एक प्लेटफ़ॉर्म।', 'about.solutionBody': 'हम स्थानीय दुकानों की उपलब्धता और घर पर तुरंत सामान पाने की ज़रूरत के बीच की दूरी कम करके समुदाय को जोड़ते हैं।', 'about.mission': 'हमारा मिशन', 'about.missionBody': 'स्थानीय खरीदारी को तेज़, आसान और अधिक जुड़ा हुआ बनाकर हर शहर को आगे बढ़ने में मदद करना।', 'about.vision': 'हमारा विज़न',
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

    'home.stats.categoriesLabel': 'दुकानांच्या श्रेणी', 'home.stats.deliveryLabel': 'स्थानिक डिलिव्हरी', 'home.stats.paymentsLabel': 'पेमेंट', 'common.explore': 'पहा', 'category.grocery': 'किराणा', 'category.groceryDesc': 'ताजी फळे, भाज्या, रोजच्या गरजेच्या वस्तू आणि घरगुती सामान.', 'category.pharmacy': 'फार्मसी', 'category.pharmacyDesc': 'औषधे, आरोग्यविषयक उत्पादने आणि वेलनेसच्या गरजेच्या वस्तू.', 'category.electronics': 'इलेक्ट्रॉनिक्स', 'category.electronicsDesc': 'मोबाइल अ‍ॅक्सेसरीज, गॅजेट्स आणि घरगुती इलेक्ट्रॉनिक्स.', 'category.fashion': 'फॅशन', 'category.fashionDesc': 'कपडे, पादत्राणे आणि रोजच्या वापरातील फॅशन.', 'category.petCare': 'पाळीव प्राण्यांची काळजी', 'category.petCareDesc': 'पाळीव प्राण्यांसाठी खाद्य, खेळणी आणि आवश्यक वस्तू.', 'category.beauty': 'ब्युटी', 'category.beautyDesc': 'त्वचेची काळजी, सौंदर्यप्रसाधने आणि वैयक्तिक निगा.', 'category.stationery': 'स्टेशनरी', 'category.stationeryDesc': 'पुस्तके, वह्या, ऑफिस आणि शाळेचे साहित्य.', 'category.home': 'घरगुती गरजेच्या वस्तू', 'category.homeDesc': 'स्वयंपाकघर, स्वच्छता आणि घरातील रोजच्या वापराच्या वस्तू.', 'home.step.discover': 'जवळची दुकाने शोधा', 'home.step.discoverDesc': 'तुमच्या शहरातील विश्वासार्ह स्थानिक व्यवसाय पाहा.', 'home.step.order': 'ऑर्डर द्या', 'home.step.orderDesc': 'आवश्यक वस्तू निवडा आणि काही मिनिटांत चेकआउट करा.', 'home.step.prepare': 'दुकान तुमची ऑर्डर तयार करते', 'home.step.prepareDesc': 'स्थानिक दुकान तुमचे सामान काळजीपूर्वक पॅक करते.', 'home.step.deliver': 'तुमच्या दारापर्यंत डिलिव्हरी', 'home.step.deliverDesc': 'ऑर्डर येईपर्यंत तिची स्थिती रिअल टाइममध्ये पाहा.',

    'apps.eyebrow': 'RivoCity चे संपूर्ण व्यासपीठ', 'apps.explore': 'अ‍ॅप्स पाहा', 'apps.qr': 'अ‍ॅपचा QR कोड मिळवा', 'apps.connected': 'एकमेकांशी जोडलेले व्यासपीठ', 'apps.heading': 'स्थानिक व्यवसायाच्या प्रत्येक भागासाठी तयार.', 'apps.ecosystemBody': 'ग्राहक, व्यावसायिक आणि डिलिव्हरी पार्टनर्ससाठी स्वतंत्र साधने आहेत — आणि ती सर्व RivoCity च्या एकाच व्यासपीठावर एकत्र काम करतात.', 'apps.customerLabel': 'ग्राहक', 'apps.customerTitle': 'शोधा आणि खरेदी करा', 'apps.customerDescription': 'स्थानिक दुकाने शोधा, उत्पादने पाहा, ऑर्डर द्या आणि डिलिव्हरी ट्रॅक करा.', 'apps.vendorLabel': 'दुकानदार', 'apps.vendorTitle': 'व्यवस्थापन आणि वाढ', 'apps.vendorDescription': 'उत्पादने, साठा, ऑर्डर, दुकानाची वेळ, ऑफर्स आणि व्यवसायाचे व्यवस्थापन करा.', 'apps.riderLabel': 'डिलिव्हरी पार्टनर', 'apps.riderTitle': 'पिकअप आणि डिलिव्हरी', 'apps.riderDescription': 'नेमून दिलेल्या डिलिव्हरी सांभाळा, ऑर्डर पिकअप करा, डिलिव्हरी पूर्ण करा आणि कमाई पाहा.',

    'about.eyebrow': 'Rivo बद्दल', 'about.heroTitle': 'आपण आपले घर मानतो त्या शहरांसाठी तयार.', 'about.heroBody': 'Rivo ची सुरुवात एका साध्या कल्पनेतून झाली — ग्राहकांसाठी स्थानिक खरेदी सोपी करणे आणि स्थानिक व्यवसायांना वाढण्यास मदत करणे. विश्वासार्ह दुकाने, डिलिव्हरी पार्टनर्स आणि ग्राहकांना एका व्यासपीठावर जोडून आम्ही स्थानिक खरेदीचा अधिक चांगला मार्ग तयार करत आहोत.', 'about.challenge': 'आव्हान', 'about.challengeTitle': 'स्थानिक खरेदी आणखी सोपी असायला हवी.', 'about.unified': 'एकात्मिक कॉमर्स', 'about.solutionTitle': 'तुमच्या संपूर्ण शहरासाठी एक व्यासपीठ.', 'about.solutionBody': 'स्थानिक दुकानांमधील उपलब्धता आणि घरपोच त्वरित वस्तू मिळण्याची गरज यांमधील अंतर कमी करून आम्ही समुदायाला जोडतो.', 'about.mission': 'आमचे ध्येय', 'about.missionBody': 'स्थानिक खरेदी जलद, सोपी आणि अधिक जोडलेली करून प्रत्येक शहराच्या प्रगतीस मदत करणे.', 'about.vision': 'आमची दृष्टी',
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
