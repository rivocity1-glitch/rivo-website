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
    "legal.terms.heading1": "1. Introduction",
    "legal.terms.heading2": "2. Acceptance of Terms",
    "legal.terms.heading3": "3. Eligibility",
    "legal.terms.heading4": "4. Account Registration",
    "legal.terms.heading5": "5. Platform Services",
    "legal.terms.heading6": "6. Orders",
    "legal.terms.heading7": "7. Payments",
    "legal.terms.heading8": "8. Vendor Responsibilities",
    "legal.terms.heading9": "9. Rider Responsibilities",
    "legal.terms.heading10": "10. User Responsibilities",
    "legal.terms.heading11": "11. Prohibited Activities",
    "legal.terms.heading12": "12. Intellectual Property",
    "legal.terms.heading13": "13. Privacy",
    "legal.terms.heading14": "14. Limitation of Liability",
    "legal.terms.heading15": "15. Force Majeure",
    "legal.terms.heading16": "16. Termination",
    "legal.terms.heading17": "17. Changes to Terms",
    "legal.terms.heading18": "18. Governing Law",
    "legal.terms.heading19": "19. Contact",
    "policy.privacy.1": "At Rivo, we value your privacy and are committed to protecting personal information. This Privacy Policy explains how we collect, use, store, share, and safeguard data when you use our website, mobile applications, and hyperlocal marketplace services.",
    "policy.privacy.2": "Depending on the service you use, we may collect:",
    "policy.privacy.3": "Name, email address, mobile number, and account information.",
    "policy.privacy.4": "Delivery addresses and drop-off instructions.",
    "policy.privacy.5": "Profile information and order history.",
    "policy.privacy.6": "Payment and transaction information needed to process orders; sensitive payment credentials are handled by payment providers.",
    "policy.privacy.7": "Device information, diagnostics, browser/app information, and technical logs.",
    "policy.privacy.8": "Location information where required for local discovery, addresses, routing, or delivery operations.",
    "policy.privacy.9": "Support communications, messages, and related records.",
    "policy.privacy.10": "We use information to create and manage accounts, process orders and transactions, coordinate vendors and riders, provide support, send service notifications, improve the platform, prevent fraud and unauthorized access, and comply with applicable law.",
    "policy.privacy.11": "Rivo may use location information to show nearby businesses, associate addresses with orders, calculate delivery distances, support delivery operations, and improve local services. Permissions can be managed through your device settings.",
    "policy.privacy.12": "Our website may use cookies or similar technologies for preferences, security, analytics, and website functionality. Browser settings may allow you to control cookies, although some features may be affected.",
    "policy.privacy.13": "We do not sell personal information. Information may be shared when necessary with vendors for order fulfilment, riders for delivery, payment providers for transactions, service providers supporting infrastructure, and authorities where required by law.",
    "policy.privacy.14": "We use reasonable technical and organizational safeguards designed to protect personal information against unauthorized access, loss, alteration, or misuse. No online system can be guaranteed completely secure.",
    "policy.privacy.15": "We retain information for as long as reasonably necessary to provide services, complete transactions, resolve disputes, meet business obligations, and comply with legal or tax requirements. Information that is no longer required may be deleted or anonymized, subject to applicable retention obligations.",
    "policy.privacy.16": "Subject to applicable law, you may request access to or correction of personal information and request account or data deletion. Some information may need to be retained for legal, security, fraud-prevention, transaction, or dispute-resolution purposes.",
    "policy.privacy.17": "Rivo is not intended for children below the applicable legal age. We do not knowingly collect personal information from children where prohibited by law.",
    "policy.privacy.18": "Rivo may use or link to third-party services such as payment, hosting, analytics, mapping, authentication, and communication providers. Those providers may have their own terms and privacy policies.",
    "policy.privacy.19": "We may update this Privacy Policy as the platform, services, or applicable requirements change. The Last Updated date will be revised when material updates are published.",
    "policy.privacy.20": "For privacy questions, complaints, or requests, contact Rivo Support:",
    "policy.refund.1": "This Refund & Cancellation Policy explains the rules for cancelling orders and requesting refunds on Rivo. Eligibility depends on the order stage, reason for cancellation, transaction status, and applicable law.",
    "policy.refund.2": "Customers may cancel an order through the app while the cancellation option is available. Once the vendor has accepted and started preparing an order, cancellation may no longer be available.",
    "policy.refund.3": "A vendor may cancel when an item is unavailable, the store cannot fulfil the order, or an operational issue prevents completion. Eligible amounts paid digitally for a vendor-cancelled order may be refunded.",
    "policy.refund.4": "Rivo may cancel an order where necessary for fraud prevention, payment failure, technical issues, rider safety, operational constraints, or other legitimate platform or legal reasons.",
    "policy.refund.5": "A refund may be available for eligible cancellations, failed transactions where funds were debited but an order was not placed, vendor cancellations, duplicate payments, or delivery failures attributable to the platform. Requests may be reviewed against order and transaction records.",
    "policy.refund.6": "Refunds may not be available where an order was successfully fulfilled, a customer supplied an incorrect address or contact information, products were opened/consumed/used or damaged after delivery, or the requested cancellation is outside the applicable cancellation window, subject to applicable consumer rights and law.",
    "policy.refund.7": "Approved digital refunds are generally returned through the relevant payment method or payment provider flow. COD refunds, where approved, may require additional verification before settlement. Refunds remain subject to the capabilities and processing rules of the applicable payment provider.",
    "policy.refund.8": "After approval, the time for a refund to reach the customer depends on the payment provider, banking network, and applicable verification procedures. Rivo initiates eligible refunds as promptly as reasonably possible after approval.",
    "policy.refund.9": "If you believe a refund or cancellation decision is incorrect, contact Rivo Support. We may request order details, screenshots, receipts, or other information necessary to investigate the matter.",
    "policy.refund.10": "For cancellation and refund support, contact:",
    "legal.terms.1": "Welcome to Rivo. These Terms & Conditions govern your access to and use of Rivo’s website, mobile applications, and connected services. By using our platform, you agree to follow these rules. If you do not agree with any part of these terms, please do not use our services.",
    "legal.terms.2": "By accessing or browsing our platform, downloading the app, placing an order, or registering a store or rider account, you acknowledge that you have read, understood, and agreed to be bound by this document. These terms form a binding legal agreement between you and Rivo.",
    "legal.terms.3": "To use Rivo, you must be at least 18 years old and fully capable of entering into legally binding contracts under applicable Indian law. If you are registering an account on behalf of a business entity, you represent that you have the authority to bind that entity to these terms.",
    "legal.terms.4": "You agree to provide accurate, current, and complete information during registration and to keep it updated. You are responsible for maintaining the security of your account credentials and for activities and orders occurring under your account.",
    "legal.terms.5a": "Rivo operates as a technology platform providing an online hyperlocal marketplace that connects local customers with local retail businesses (vendors) and delivery partners (riders).",
    "legal.terms.5b": "Rivo does not own, manufacture, sell, or store the products listed by vendors and does not directly employ riders. Vendor product sales and delivery fulfilment are performed by the relevant participating parties through the platform.",
    "legal.terms.6a": "An order placed on the platform represents a customer request to purchase a product from a vendor. Acceptance occurs when the vendor confirms the order. Orders remain subject to product availability.",
    "legal.terms.6b": "Customer cancellation availability depends on the order stage and the applicable Refund & Cancellation Policy. Delivery estimates are approximations and are not guaranteed arrival deadlines.",
    "legal.terms.7a": "Rivo may support digital payment methods and Cash on Delivery where enabled for the relevant order or city. Available payment methods are shown during checkout.",
    "legal.terms.7b": "Product prices are determined by vendors. Applicable taxes and delivery charges, where applicable, are displayed before order confirmation.",
    "legal.terms.8": "Vendors are responsible for the accuracy of their listings, pricing, inventory, product quality, packaging, licences, and compliance with applicable laws and regulations.",
    "legal.terms.9": "Riders agree to conduct deliveries safely and professionally, comply with traffic and transport requirements, protect customer information, and follow Rivo operational instructions.",
    "legal.terms.10": "Customers, vendors, and riders must provide truthful information, use Rivo only for lawful purposes, behave respectfully, and avoid conduct that could harm other users or the platform.",
    "legal.terms.11": "Fraud, fake or malicious orders, abuse, spam, unauthorized access, security bypasses, reverse engineering, and unlawful use of the platform are prohibited.",
    "legal.terms.12": "The Rivo name, logos, website, applications, text, graphics, software, and other proprietary materials are protected intellectual property. They may not be copied or redistributed without authorization.",
    "legal.terms.13": "Your use of Rivo is also governed by our Privacy Policy, which explains how personal information is collected, used, shared, retained, and protected.",
    "legal.terms.14": "To the maximum extent permitted by applicable law, Rivo is not liable for indirect, incidental, special, or consequential losses arising from use of the platform, including vendor product issues, delivery delays, or disputes between participating parties.",
    "legal.terms.15": "Rivo is not responsible for interruptions or delays caused by circumstances beyond reasonable control, including severe weather, natural disasters, infrastructure outages, civil disruptions, or government restrictions.",
    "legal.terms.16": "Rivo may suspend or terminate access where necessary for security, fraud prevention, legal compliance, serious policy violations, or protection of the platform and its users.",
    "legal.terms.17": "We may update these Terms & Conditions as the platform or applicable requirements change. The Last Updated date will be revised when material updates are published.",
    "legal.terms.18": "These Terms & Conditions are governed by the laws of India. Disputes are subject to the jurisdiction of competent courts in Maharashtra, India, subject to applicable law.",
    "legal.terms.19": "For questions or clarification regarding these Terms & Conditions, contact Rivo Support:",
    "customers.hero.headline": "Everything your city has to offer.",
    "riders.hero.accent": "Deliver with confidence.",
    "about.hero.accent": "we call home.",
    "cities.hero.accent": "Growing one city at a time.",
    "pricing.hero.accent": "for local businesses.",
    "vendors.hero.accent": "with Rivo.",
    "vendors.register": "Register Your Store",
    "vendors.viewPricing": "View Pricing",
    "footer.customers": "Customers",
    "footer.riders": "Riders",
    "apps.ecosystem.subtitle": "Built for every side of local commerce.",
    "contact.cta.email": "Email Support",
    "contact.cta.title": "How can we help?",
    "contact.cta.subtitle": "Our team is here to help with vendor onboarding, support and general questions.",
    "help.search": "Search support topics, frequently asked questions and helpful guides.",
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
    "legal.mr.1. Introduction": "१. परिचय",
    "legal.mr.Welcome to Rivo. These Terms & Conditions govern your access to and use of Rivo’s website, mobile applications, and connected services. By using our platform, you agree to follow these rules. If you do not agree with any part of these terms, please do not use our services.": "Rivo मध्ये आपले स्वागत आहे. या अटी व शर्ती Rivo च्या वेबसाइट, मोबाईल अ‍ॅप्स आणि संबंधित सेवांच्या वापरावर लागू होतात. प्लॅटफॉर्म वापरून आपण या नियमांना सहमती देता. या अटी मान्य नसल्यास कृपया सेवा वापरू नका.",
    "legal.mr.2. Acceptance of Terms": "२. अटींची स्वीकृती",
    "legal.mr.3. Eligibility": "३. पात्रता",
    "legal.mr.4. Account Registration": "४. खाते नोंदणी",
    "legal.mr.5. Platform Services": "५. प्लॅटफॉर्म सेवा",
    "legal.mr.6. Orders": "६. ऑर्डर",
    "legal.mr.7. Payments": "७. पेमेंट",
    "legal.mr.8. Vendor Responsibilities": "८. विक्रेत्यांच्या जबाबदाऱ्या",
    "legal.mr.9. Rider Responsibilities": "९. रायडरच्या जबाबदाऱ्या",
    "legal.mr.10. User Responsibilities": "१०. वापरकर्त्यांच्या जबाबदाऱ्या",
    "legal.mr.11. Prohibited Activities": "११. प्रतिबंधित कृती",
    "legal.mr.12. Intellectual Property": "१२. बौद्धिक संपदा",
    "legal.mr.13. Privacy": "१३. गोपनीयता",
    "legal.mr.14. Limitation of Liability": "१४. दायित्वाची मर्यादा",
    "legal.mr.15. Force Majeure": "१५. अपरिहार्य परिस्थिती",
    "legal.mr.16. Termination": "१६. समाप्ती",
    "legal.mr.17. Changes to Terms": "१७. अटींमधील बदल",
    "legal.mr.18. Governing Law": "१८. लागू कायदा",
    "legal.mr.19. Contact": "१९. संपर्क",
    "legal.terms.heading1": "1. परिचय",
    "legal.terms.heading2": "2. अटींची स्वीकृती",
    "legal.terms.heading3": "3. पात्रता",
    "legal.terms.heading4": "4. खाते नोंदणी",
    "legal.terms.heading5": "5. प्लॅटफॉर्म सेवा",
    "legal.terms.heading6": "6. ऑर्डर",
    "legal.terms.heading7": "7. पेमेंट",
    "legal.terms.heading8": "8. विक्रेत्यांच्या जबाबदाऱ्या",
    "legal.terms.heading9": "9. रायडरच्या जबाबदाऱ्या",
    "legal.terms.heading10": "10. वापरकर्त्यांच्या जबाबदाऱ्या",
    "legal.terms.heading11": "11. प्रतिबंधित कृती",
    "legal.terms.heading12": "12. बौद्धिक संपदा",
    "legal.terms.heading13": "13. गोपनीयता",
    "legal.terms.heading14": "14. दायित्वाची मर्यादा",
    "legal.terms.heading15": "15. अपरिहार्य परिस्थिती",
    "legal.terms.heading16": "16. समाप्ती",
    "legal.terms.heading17": "17. अटींमधील बदल",
    "legal.terms.heading18": "18. लागू कायदा",
    "legal.terms.heading19": "19. संपर्क",
    "policy.privacy.1": "Rivo मध्ये आम्ही तुमच्या गोपनीयतेला महत्त्व देतो आणि वैयक्तिक माहितीचे संरक्षण करण्यासाठी कटिबद्ध आहोत. ही गोपनीयता नीती आमची वेबसाइट, मोबाईल अ‍ॅप्स आणि हायपरलोकल मार्केटप्लेस वापरताना माहिती कशी गोळा, वापर, साठवली, शेअर आणि सुरक्षित केली जाते हे स्पष्ट करते.",
    "policy.privacy.2": "तुम्ही वापरत असलेल्या सेवेवर अवलंबून आम्ही खालील माहिती गोळा करू शकतो:",
    "policy.privacy.3": "नाव, ईमेल पत्ता, मोबाईल नंबर आणि खाते माहिती.",
    "policy.privacy.4": "डिलिव्हरीचे पत्ते आणि वस्तू देण्याच्या सूचना.",
    "policy.privacy.5": "प्रोफाइल माहिती आणि ऑर्डर इतिहास.",
    "policy.privacy.6": "ऑर्डर प्रक्रिया करण्यासाठी आवश्यक पेमेंट व व्यवहार माहिती; संवेदनशील पेमेंट तपशील पेमेंट प्रदाते हाताळतात.",
    "policy.privacy.7": "डिव्हाइस माहिती, निदान माहिती, ब्राउझर/अ‍ॅप माहिती आणि तांत्रिक लॉग्स.",
    "policy.privacy.8": "स्थानिक व्यवसाय शोधणे, पत्ते, मार्गनियोजन किंवा डिलिव्हरीसाठी आवश्यक असल्यास स्थान माहिती.",
    "policy.privacy.9": "सपोर्ट संभाषणे, संदेश आणि संबंधित नोंदी.",
    "policy.privacy.10": "खाती तयार व व्यवस्थापित करणे, ऑर्डर व व्यवहार प्रक्रिया करणे, विक्रेते आणि रायडर्समध्ये समन्वय साधणे, मदत देणे, सेवा सूचना पाठवणे, प्लॅटफॉर्म सुधारणे, फसवणूक व अनधिकृत प्रवेश रोखणे आणि लागू कायद्यांचे पालन करण्यासाठी आम्ही माहिती वापरतो.",
    "policy.privacy.11": "जवळचे व्यवसाय दाखवणे, ऑर्डरशी पत्ते जोडणे, डिलिव्हरीचे अंतर मोजणे, डिलिव्हरी प्रक्रिया आणि स्थानिक सेवा सुधारण्यासाठी Rivo स्थान माहिती वापरू शकते. परवानग्या डिव्हाइस सेटिंग्जमधून व्यवस्थापित करता येतात.",
    "policy.privacy.12": "आमची वेबसाइट पसंती, सुरक्षा, विश्लेषण आणि वेबसाइटच्या कार्यक्षमतेसाठी कुकीज किंवा तत्सम तंत्रज्ञान वापरू शकते. ब्राउझर सेटिंग्जमधून कुकीज नियंत्रित करता येतात; मात्र काही वैशिष्ट्यांवर परिणाम होऊ शकतो.",
    "policy.privacy.13": "आम्ही वैयक्तिक माहिती विकत नाही. ऑर्डर पूर्ण करण्यासाठी विक्रेत्यांशी, डिलिव्हरीसाठी रायडर्सशी, व्यवहारांसाठी पेमेंट प्रदात्यांशी, पायाभूत सुविधा पुरवणाऱ्या सेवांशी आणि कायद्याने आवश्यक असल्यास संबंधित अधिकाऱ्यांशी माहिती शेअर केली जाऊ शकते.",
    "policy.privacy.14": "वैयक्तिक माहितीचे अनधिकृत प्रवेश, नुकसान, बदल किंवा गैरवापरापासून संरक्षण करण्यासाठी आम्ही योग्य तांत्रिक आणि संघटनात्मक उपाय करतो. कोणतीही ऑनलाइन प्रणाली पूर्णपणे सुरक्षित असल्याची हमी देता येत नाही.",
    "policy.privacy.15": "सेवा देणे, व्यवहार पूर्ण करणे, वाद सोडवणे, व्यावसायिक जबाबदाऱ्या पूर्ण करणे आणि कायदेशीर किंवा कर-संबंधित अटींचे पालन करण्यासाठी आवश्यक तेवढ्या काळासाठी आम्ही माहिती ठेवतो. आवश्यक नसलेली माहिती लागू नियमांच्या अधीन राहून हटवली किंवा अनामिक केली जाऊ शकते.",
    "policy.privacy.16": "लागू कायद्याच्या अधीन राहून तुम्ही वैयक्तिक माहिती पाहण्याची किंवा दुरुस्त करण्याची विनंती करू शकता तसेच खाते किंवा डेटा हटवण्याची विनंती करू शकता. कायदेशीर, सुरक्षा, फसवणूक प्रतिबंध, व्यवहार किंवा वाद निवारणासाठी काही माहिती ठेवावी लागू शकते.",
    "policy.privacy.17": "Rivo हे लागू कायद्यानुसार निर्धारित वयापेक्षा कमी वयाच्या मुलांसाठी नाही. कायद्याने मनाई असल्यास आम्ही जाणूनबुजून मुलांची वैयक्तिक माहिती गोळा करत नाही.",
    "policy.privacy.18": "Rivo पेमेंट, होस्टिंग, विश्लेषण, नकाशे, प्रमाणीकरण आणि संवाद सेवा यांसारख्या तृतीय-पक्ष सेवांचा वापर करू शकते किंवा त्यांच्याकडे दुवे देऊ शकते. त्या प्रदात्यांची स्वतःची अटी व गोपनीयता धोरणे असू शकतात.",
    "policy.privacy.19": "प्लॅटफॉर्म, सेवा किंवा लागू आवश्यकतांमध्ये बदल झाल्यास आम्ही हे गोपनीयता धोरण अद्ययावत करू शकतो. महत्त्वाचे बदल प्रकाशित केल्यावर शेवटची अद्ययावत तारीख बदलली जाईल.",
    "policy.privacy.20": "गोपनीयतेसंबंधी प्रश्न, तक्रारी किंवा विनंत्यांसाठी Rivo सपोर्टशी संपर्क साधा:",
    "policy.refund.1": "हे परतावा व रद्द करण्याचे धोरण Rivo वरील ऑर्डर रद्द करणे आणि परतावा मागण्याचे नियम स्पष्ट करते. पात्रता ऑर्डरची अवस्था, रद्द करण्याचे कारण, व्यवहाराची स्थिती आणि लागू कायद्यावर अवलंबून असते.",
    "policy.refund.2": "रद्द करण्याचा पर्याय उपलब्ध असेपर्यंत ग्राहक अ‍ॅपमधून ऑर्डर रद्द करू शकतात. विक्रेत्याने ऑर्डर स्वीकारून तयारी सुरू केल्यावर रद्द करण्याचा पर्याय उपलब्ध नसेल.",
    "policy.refund.3": "वस्तू उपलब्ध नसल्यास, दुकान ऑर्डर पूर्ण करू शकत नसल्यास किंवा कार्यवाहीतील अडचणीमुळे ऑर्डर पूर्ण करणे शक्य नसल्यास विक्रेता ऑर्डर रद्द करू शकतो. पात्र डिजिटल पेमेंटचा परतावा मिळू शकतो.",
    "policy.refund.4": "फसवणूक रोखणे, पेमेंट अयशस्वी होणे, तांत्रिक समस्या, रायडरची सुरक्षा, कार्यवाहीतील मर्यादा किंवा अन्य योग्य प्लॅटफॉर्म अथवा कायदेशीर कारणांसाठी Rivo ऑर्डर रद्द करू शकते.",
    "policy.refund.5": "पात्र रद्दीकरण, पैसे वजा झाले परंतु ऑर्डर नोंदली गेली नाही असे अयशस्वी व्यवहार, विक्रेत्याने केलेले रद्दीकरण, दुहेरी पेमेंट किंवा प्लॅटफॉर्ममुळे झालेल्या डिलिव्हरी अपयशासाठी परतावा मिळू शकतो. विनंत्या ऑर्डर व व्यवहार नोंदींनुसार तपासल्या जाऊ शकतात.",
    "policy.refund.6": "ऑर्डर यशस्वीरीत्या पूर्ण झाल्यास, ग्राहकाने चुकीचा पत्ता किंवा संपर्क तपशील दिल्यास, डिलिव्हरीनंतर उत्पादन उघडलेले/वापरलेले/खर्च केलेले किंवा खराब झालेले असल्यास, किंवा विनंती लागू रद्दीकरण कालावधीबाहेर असल्यास परतावा मिळणार नाही; लागू ग्राहक हक्क आणि कायदे यांना अधीन राहून.",
    "policy.refund.7": "मंजूर डिजिटल परतावे साधारणपणे संबंधित पेमेंट पद्धतीने किंवा पेमेंट प्रदात्याच्या प्रक्रियेद्वारे परत केले जातात. COD परताव्यास अतिरिक्त पडताळणी लागू शकते. परतावे संबंधित पेमेंट प्रदात्याच्या क्षमता आणि प्रक्रियेनियमांवर अवलंबून असतात.",
    "policy.refund.8": "मंजुरीनंतर परतावा ग्राहकापर्यंत पोहोचण्याचा कालावधी पेमेंट प्रदाता, बँकिंग नेटवर्क आणि पडताळणी प्रक्रियेवर अवलंबून असतो. मंजुरीनंतर Rivo पात्र परतावे शक्य तितक्या लवकर सुरू करते.",
    "policy.refund.9": "परतावा किंवा रद्दीकरणाचा निर्णय चुकीचा वाटल्यास Rivo सपोर्टशी संपर्क साधा. तपासासाठी आम्ही ऑर्डर तपशील, स्क्रीनशॉट, पावत्या किंवा इतर आवश्यक माहिती मागू शकतो.",
    "policy.refund.10": "रद्दीकरण आणि परताव्यासाठी येथे संपर्क साधा:",
    "legal.terms.1": "Rivo मध्ये आपले स्वागत आहे. या अटी व शर्ती Rivo च्या वेबसाइट, मोबाईल अ‍ॅप्स आणि संबंधित सेवांच्या वापरावर लागू होतात. प्लॅटफॉर्म वापरून आपण या नियमांना सहमती देता. या अटी मान्य नसल्यास कृपया सेवा वापरू नका.",
    "legal.terms.2": "आमचा प्लॅटफॉर्म पाहून, अ‍ॅप डाउनलोड करून, ऑर्डर देऊन किंवा दुकान अथवा रायडर खाते नोंदवून, आपण हा दस्तऐवज वाचला, समजला आणि त्याचे पालन करण्यास सहमती दिली आहे हे मान्य करता. या अटी तुमच्या आणि Rivo मधील बंधनकारक कायदेशीर करार आहेत.",
    "legal.terms.3": "Rivo वापरण्यासाठी तुमचे वय किमान १८ वर्षे असावे आणि लागू भारतीय कायद्यानुसार कायदेशीर करार करण्याची क्षमता असावी. व्यवसायाच्या वतीने खाते नोंदवत असल्यास, त्या व्यवसायाला या अटींनी बांधण्याचा अधिकार तुमच्याकडे असल्याचे तुम्ही दर्शवता.",
    "legal.terms.4": "नोंदणीवेळी अचूक, अद्ययावत आणि पूर्ण माहिती देण्यास व ती अद्ययावत ठेवण्यास तुम्ही सहमत आहात. खाते तपशील सुरक्षित ठेवण्याची आणि तुमच्या खात्यातून होणाऱ्या कृती व ऑर्डरची जबाबदारी तुमची आहे.",
    "legal.terms.5a": "Rivo हे तंत्रज्ञान प्लॅटफॉर्म म्हणून ऑनलाइन हायपरलोकल मार्केटप्लेस उपलब्ध करून देते, जे स्थानिक ग्राहकांना स्थानिक विक्रेते आणि डिलिव्हरी भागीदारांशी जोडते.",
    "legal.terms.5b": "विक्रेत्यांनी सूचीबद्ध केलेली उत्पादने Rivo च्या मालकीची नसतात, Rivo ती तयार, विक्री किंवा साठवण करत नाही आणि रायडर्सना थेट नोकरीवर ठेवत नाही. उत्पादन विक्री व डिलिव्हरी संबंधित सहभागी पक्ष प्लॅटफॉर्मद्वारे पूर्ण करतात.",
    "legal.terms.6a": "प्लॅटफॉर्मवर दिलेली ऑर्डर म्हणजे विक्रेत्याकडून उत्पादन खरेदी करण्याची ग्राहकाची विनंती. विक्रेत्याने ऑर्डर निश्चित केल्यावर ती स्वीकारली जाते. ऑर्डर उत्पादनाच्या उपलब्धतेवर अवलंबून असते.",
    "legal.terms.6b": "ग्राहकाला ऑर्डर रद्द करता येईल की नाही हे ऑर्डरची अवस्था आणि लागू परतावा व रद्दीकरण धोरणावर अवलंबून असते. डिलिव्हरीचा अंदाज हा हमी दिलेला वेळ नसतो.",
    "legal.terms.7a": "संबंधित ऑर्डर किंवा शहरासाठी उपलब्ध असल्यास Rivo डिजिटल पेमेंट आणि कॅश ऑन डिलिव्हरीला समर्थन देऊ शकते. उपलब्ध पेमेंट पद्धती चेकआउटवेळी दाखवल्या जातात.",
    "legal.terms.7b": "उत्पादनांच्या किंमती विक्रेते ठरवतात. लागू कर आणि डिलिव्हरी शुल्क, असल्यास, ऑर्डर निश्चित करण्यापूर्वी दाखवले जातात.",
    "legal.terms.8": "उत्पादन सूची, किंमती, साठा, गुणवत्ता, पॅकेजिंग, परवाने आणि लागू कायदे व नियमांचे पालन यांची अचूकता विक्रेत्यांची जबाबदारी आहे.",
    "legal.terms.9": "रायडर्सनी सुरक्षित आणि व्यावसायिक पद्धतीने डिलिव्हरी करणे, वाहतूक नियमांचे पालन करणे, ग्राहकांची माहिती सुरक्षित ठेवणे आणि Rivo च्या कार्यवाहीविषयक सूचनांचे पालन करणे अपेक्षित आहे.",
    "legal.terms.10": "ग्राहक, विक्रेते आणि रायडर्सनी सत्य माहिती द्यावी, Rivo चा कायदेशीर कारणांसाठी वापर करावा, आदराने वागावे आणि इतर वापरकर्त्यांना किंवा प्लॅटफॉर्मला हानी पोहोचवणारे वर्तन टाळावे.",
    "legal.terms.11": "फसवणूक, बनावट किंवा दुर्भावनापूर्ण ऑर्डर, गैरवर्तन, स्पॅम, अनधिकृत प्रवेश, सुरक्षा यंत्रणा चुकवणे, रिव्हर्स इंजिनिअरिंग आणि प्लॅटफॉर्मचा बेकायदेशीर वापर प्रतिबंधित आहे.",
    "legal.terms.12": "Rivo नाव, लोगो, वेबसाइट, अ‍ॅप्स, मजकूर, ग्राफिक्स, सॉफ्टवेअर आणि इतर मालकीच्या सामग्रीला बौद्धिक संपदा संरक्षण आहे. परवानगीशिवाय त्यांची प्रत किंवा पुनर्वितरण करता येणार नाही.",
    "legal.terms.13": "Rivo चा वापर आमच्या गोपनीयता धोरणानुसारही नियंत्रित होतो, ज्यात वैयक्तिक माहिती कशी गोळा, वापर, शेअर, जतन आणि संरक्षित केली जाते हे स्पष्ट केले आहे.",
    "legal.terms.14": "लागू कायद्याने अनुमती दिलेल्या कमाल मर्यादेपर्यंत, प्लॅटफॉर्म वापरातून होणाऱ्या अप्रत्यक्ष, आकस्मिक, विशेष किंवा परिणामी नुकसानीसाठी Rivo जबाबदार नाही; यात विक्रेत्यांच्या उत्पादनांतील समस्या, डिलिव्हरी विलंब किंवा सहभागी पक्षांतील वादांचा समावेश आहे.",
    "legal.terms.15": "तीव्र हवामान, नैसर्गिक आपत्ती, पायाभूत सुविधांतील बिघाड, नागरी अडथळे किंवा सरकारी निर्बंध यांसारख्या वाजवी नियंत्रणाबाहेरील परिस्थितीमुळे होणाऱ्या व्यत्यय किंवा विलंबासाठी Rivo जबाबदार नाही.",
    "legal.terms.16": "सुरक्षा, फसवणूक प्रतिबंध, कायदेशीर पालन, गंभीर धोरण उल्लंघन किंवा प्लॅटफॉर्म व वापरकर्त्यांच्या संरक्षणासाठी आवश्यक असल्यास Rivo प्रवेश निलंबित किंवा समाप्त करू शकते.",
    "legal.terms.17": "प्लॅटफॉर्म किंवा लागू आवश्यकतांमध्ये बदल झाल्यास आम्ही या अटी व शर्ती अद्ययावत करू शकतो. महत्त्वाचे बदल प्रसिद्ध झाल्यावर शेवटची अद्ययावत तारीख बदलली जाईल.",
    "legal.terms.18": "या अटी व शर्ती भारताच्या कायद्यांनुसार नियंत्रित आहेत. लागू कायद्याच्या अधीन राहून वादांचे अधिकारक्षेत्र महाराष्ट्र, भारतातील सक्षम न्यायालयांकडे असेल.",
    "legal.terms.19": "या अटींबद्दल प्रश्न किंवा स्पष्टीकरणासाठी Rivo सपोर्टशी संपर्क साधा:",
    "customers.hero.headline": "तुमच्या शहरातील सर्व पर्याय.",
    "riders.hero.accent": "आत्मविश्वासाने डिलिव्हरी करा.",
    "about.hero.accent": "ज्यांना आपण आपले घर म्हणतो.",
    "cities.hero.accent": "एकावेळी एक शहर वाढवत.",
    "pricing.hero.accent": "स्थानिक व्यवसायांसाठी.",
    "vendors.hero.accent": "Rivo सोबत.",
    "vendors.register": "तुमचे दुकान नोंदवा",
    "vendors.viewPricing": "किंमत योजना पाहा",
    "footer.customers": "ग्राहक",
    "footer.riders": "रायडर्स",
    "apps.ecosystem.subtitle": "स्थानिक कॉमर्सच्या प्रत्येक घटकासाठी तयार.",
    "contact.cta.email": "ईमेल सहाय्य",
    "contact.cta.title": "आम्ही कशी मदत करू?",
    "contact.cta.subtitle": "विक्रेता नोंदणी, सहाय्य आणि सामान्य प्रश्नांसाठी आमची टीम मदतीसाठी आहे.",
    "help.search": "सहाय्य विषय, वारंवार विचारले जाणारे प्रश्न आणि मार्गदर्शक शोधा.",
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
    "legal.hi.1. Introduction": "1. परिचय",
    "legal.hi.Welcome to Rivo. These Terms & Conditions govern your access to and use of Rivo’s website, mobile applications, and connected services. By using our platform, you agree to follow these rules. If you do not agree with any part of these terms, please do not use our services.": "Rivo में आपका स्वागत है। ये नियम और शर्तें Rivo की वेबसाइट, मोबाइल ऐप और संबंधित सेवाओं के उपयोग पर लागू होती हैं। प्लेटफ़ॉर्म का उपयोग करके आप इन नियमों से सहमत होते हैं। यदि आप सहमत नहीं हैं, तो कृपया सेवाओं का उपयोग न करें।",
    "legal.hi.2. Acceptance of Terms": "2. शर्तों की स्वीकृति",
    "legal.hi.3. Eligibility": "3. पात्रता",
    "legal.hi.4. Account Registration": "4. खाता पंजीकरण",
    "legal.hi.5. Platform Services": "5. प्लेटफ़ॉर्म सेवाएँ",
    "legal.hi.6. Orders": "6. ऑर्डर",
    "legal.hi.7. Payments": "7. भुगतान",
    "legal.hi.8. Vendor Responsibilities": "8. विक्रेता की ज़िम्मेदारियाँ",
    "legal.hi.9. Rider Responsibilities": "9. राइडर की ज़िम्मेदारियाँ",
    "legal.hi.10. User Responsibilities": "10. उपयोगकर्ता की ज़िम्मेदारियाँ",
    "legal.hi.11. Prohibited Activities": "11. प्रतिबंधित गतिविधियाँ",
    "legal.hi.12. Intellectual Property": "12. बौद्धिक संपदा",
    "legal.hi.13. Privacy": "13. गोपनीयता",
    "legal.hi.14. Limitation of Liability": "14. दायित्व की सीमा",
    "legal.hi.15. Force Majeure": "15. अप्रत्याशित परिस्थितियाँ",
    "legal.hi.16. Termination": "16. समाप्ति",
    "legal.hi.17. Changes to Terms": "17. शर्तों में बदलाव",
    "legal.hi.18. Governing Law": "18. लागू कानून",
    "legal.hi.19. Contact": "19. संपर्क",
    "legal.terms.heading1": "1. परिचय",
    "legal.terms.heading2": "2. शर्तों की स्वीकृति",
    "legal.terms.heading3": "3. पात्रता",
    "legal.terms.heading4": "4. खाता पंजीकरण",
    "legal.terms.heading5": "5. प्लेटफ़ॉर्म सेवाएँ",
    "legal.terms.heading6": "6. ऑर्डर",
    "legal.terms.heading7": "7. भुगतान",
    "legal.terms.heading8": "8. विक्रेता की ज़िम्मेदारियाँ",
    "legal.terms.heading9": "9. राइडर की ज़िम्मेदारियाँ",
    "legal.terms.heading10": "10. उपयोगकर्ता की ज़िम्मेदारियाँ",
    "legal.terms.heading11": "11. प्रतिबंधित गतिविधियाँ",
    "legal.terms.heading12": "12. बौद्धिक संपदा",
    "legal.terms.heading13": "13. गोपनीयता",
    "legal.terms.heading14": "14. दायित्व की सीमा",
    "legal.terms.heading15": "15. अप्रत्याशित परिस्थितियाँ",
    "legal.terms.heading16": "16. समाप्ति",
    "legal.terms.heading17": "17. शर्तों में बदलाव",
    "legal.terms.heading18": "18. लागू कानून",
    "legal.terms.heading19": "19. संपर्क",
    "policy.privacy.1": "Rivo में हम आपकी गोपनीयता को महत्व देते हैं और व्यक्तिगत जानकारी की सुरक्षा के लिए प्रतिबद्ध हैं। यह नीति बताती है कि वेबसाइट, मोबाइल ऐप और हाइपरलोकल मार्केटप्लेस सेवाओं का उपयोग करते समय डेटा कैसे एकत्र, उपयोग, संग्रहित, साझा और सुरक्षित किया जाता है।",
    "policy.privacy.2": "आपके द्वारा उपयोग की जाने वाली सेवा के अनुसार हम यह जानकारी एकत्र कर सकते हैं:",
    "policy.privacy.3": "नाम, ईमेल पता, मोबाइल नंबर और खाते की जानकारी।",
    "policy.privacy.4": "डिलीवरी पते और सामान छोड़ने के निर्देश।",
    "policy.privacy.5": "प्रोफ़ाइल जानकारी और ऑर्डर इतिहास।",
    "policy.privacy.6": "ऑर्डर प्रोसेस करने के लिए आवश्यक भुगतान और लेन-देन की जानकारी; संवेदनशील भुगतान विवरण भुगतान प्रदाता संभालते हैं।",
    "policy.privacy.7": "डिवाइस जानकारी, डायग्नोस्टिक्स, ब्राउज़र/ऐप जानकारी और तकनीकी लॉग।",
    "policy.privacy.8": "स्थानीय व्यवसाय खोजने, पते, रूटिंग या डिलीवरी के लिए ज़रूरत पड़ने पर स्थान की जानकारी।",
    "policy.privacy.9": "सहायता वार्तालाप, संदेश और संबंधित रिकॉर्ड।",
    "policy.privacy.10": "हम जानकारी का उपयोग खाते बनाने और प्रबंधित करने, ऑर्डर व लेन-देन प्रोसेस करने, विक्रेताओं और राइडर्स के बीच समन्वय, सहायता, सेवा सूचनाएँ, प्लेटफ़ॉर्म सुधारने, धोखाधड़ी और अनधिकृत पहुँच रोकने तथा लागू कानूनों का पालन करने के लिए करते हैं।",
    "policy.privacy.11": "Rivo आसपास के व्यवसाय दिखाने, ऑर्डर से पते जोड़ने, डिलीवरी दूरी की गणना, डिलीवरी संचालन और स्थानीय सेवाओं में सुधार के लिए स्थान की जानकारी का उपयोग कर सकता है। अनुमतियाँ डिवाइस सेटिंग्स से बदली जा सकती हैं।",
    "policy.privacy.12": "हमारी वेबसाइट प्राथमिकताओं, सुरक्षा, एनालिटिक्स और वेबसाइट की कार्यक्षमता के लिए कुकीज़ या समान तकनीक का उपयोग कर सकती है। ब्राउज़र सेटिंग्स से कुकीज़ नियंत्रित की जा सकती हैं, हालांकि कुछ सुविधाएँ प्रभावित हो सकती हैं।",
    "policy.privacy.13": "हम व्यक्तिगत जानकारी नहीं बेचते। ज़रूरत पड़ने पर ऑर्डर पूरी करने के लिए विक्रेताओं, डिलीवरी के लिए राइडर्स, लेन-देन के लिए भुगतान प्रदाताओं, तकनीकी सेवा प्रदाताओं और कानून की आवश्यकता होने पर अधिकारियों के साथ जानकारी साझा की जा सकती है।",
    "policy.privacy.14": "हम व्यक्तिगत जानकारी को अनधिकृत पहुँच, हानि, बदलाव या दुरुपयोग से बचाने के लिए उचित तकनीकी और संगठनात्मक सुरक्षा उपाय करते हैं। किसी भी ऑनलाइन प्रणाली की पूर्ण सुरक्षा की गारंटी नहीं दी जा सकती।",
    "policy.privacy.15": "हम सेवाएँ देने, लेन-देन पूरा करने, विवाद सुलझाने, व्यावसायिक दायित्व निभाने और कानूनी या कर संबंधी आवश्यकताओं का पालन करने के लिए आवश्यक अवधि तक जानकारी रखते हैं। जो डेटा आवश्यक नहीं रहता उसे लागू नियमों के अधीन हटाया या अनामिक किया जा सकता है।",
    "policy.privacy.16": "लागू कानून के अधीन आप व्यक्तिगत जानकारी तक पहुँच या सुधार का अनुरोध कर सकते हैं और खाता या डेटा हटाने का अनुरोध कर सकते हैं। कानूनी, सुरक्षा, धोखाधड़ी रोकने, लेन-देन या विवाद सुलझाने के लिए कुछ जानकारी रखनी पड़ सकती है।",
    "policy.privacy.17": "Rivo लागू कानूनी आयु से कम उम्र के बच्चों के लिए नहीं है। जहाँ कानून मना करता है वहाँ हम जानबूझकर बच्चों की व्यक्तिगत जानकारी एकत्र नहीं करते।",
    "policy.privacy.18": "Rivo भुगतान, होस्टिंग, एनालिटिक्स, मैपिंग, प्रमाणीकरण और संचार जैसी तृतीय-पक्ष सेवाओं का उपयोग या लिंक कर सकता है। उन प्रदाताओं की अपनी शर्तें और गोपनीयता नीतियाँ हो सकती हैं।",
    "policy.privacy.19": "प्लेटफ़ॉर्म, सेवाओं या लागू आवश्यकताओं में बदलाव होने पर हम इस गोपनीयता नीति को अपडेट कर सकते हैं। महत्वपूर्ण बदलाव प्रकाशित होने पर अंतिम अपडेट की तारीख बदली जाएगी।",
    "policy.privacy.20": "गोपनीयता संबंधी सवाल, शिकायत या अनुरोध के लिए Rivo Support से संपर्क करें:",
    "policy.refund.1": "यह रिफंड और कैंसलेशन नीति Rivo पर ऑर्डर रद्द करने और रिफंड माँगने के नियम बताती है। पात्रता ऑर्डर के चरण, रद्द करने के कारण, लेन-देन की स्थिति और लागू कानून पर निर्भर करती है।",
    "policy.refund.2": "कैंसलेशन का विकल्प उपलब्ध रहने तक ग्राहक ऐप से ऑर्डर रद्द कर सकते हैं। विक्रेता द्वारा ऑर्डर स्वीकारकर तैयारी शुरू करने के बाद कैंसलेशन उपलब्ध नहीं हो सकता।",
    "policy.refund.3": "यदि कोई वस्तु उपलब्ध न हो, दुकान ऑर्डर पूरा न कर सके या संचालन संबंधी समस्या हो, तो विक्रेता ऑर्डर रद्द कर सकता है। पात्र डिजिटल भुगतान का रिफंड किया जा सकता है।",
    "policy.refund.4": "धोखाधड़ी रोकने, भुगतान विफल होने, तकनीकी समस्याओं, राइडर की सुरक्षा, संचालन संबंधी सीमाओं या अन्य वैध प्लेटफ़ॉर्म या कानूनी कारणों से Rivo ऑर्डर रद्द कर सकता है।",
    "policy.refund.5": "पात्र कैंसलेशन, पैसे कटने के बावजूद ऑर्डर न लगने, विक्रेता द्वारा रद्द करने, दोहरे भुगतान या प्लेटफ़ॉर्म के कारण डिलीवरी विफल होने पर रिफंड मिल सकता है। अनुरोधों की जाँच ऑर्डर और लेन-देन रिकॉर्ड के आधार पर की जा सकती है।",
    "policy.refund.6": "यदि ऑर्डर सफलतापूर्वक पूरी हो गई हो, ग्राहक ने गलत पता या संपर्क जानकारी दी हो, डिलीवरी के बाद उत्पाद खोला/इस्तेमाल/खर्च किया गया हो या क्षतिग्रस्त हो, या कैंसलेशन निर्धारित समय-सीमा के बाद माँगा गया हो, तो लागू उपभोक्ता अधिकारों और कानून के अधीन रिफंड उपलब्ध नहीं हो सकता।",
    "policy.refund.7": "स्वीकृत डिजिटल रिफंड आमतौर पर संबंधित भुगतान विधि या भुगतान प्रदाता प्रक्रिया के माध्यम से लौटाए जाते हैं। स्वीकृत COD रिफंड के लिए अतिरिक्त सत्यापन आवश्यक हो सकता है। रिफंड संबंधित भुगतान प्रदाता की क्षमताओं और नियमों पर निर्भर करते हैं।",
    "policy.refund.8": "मंजूरी के बाद रिफंड ग्राहक तक पहुँचने में लगने वाला समय भुगतान प्रदाता, बैंकिंग नेटवर्क और सत्यापन प्रक्रिया पर निर्भर करता है। मंजूरी के बाद Rivo पात्र रिफंड जल्द से जल्द शुरू करता है।",
    "policy.refund.9": "यदि आपको लगता है कि रिफंड या कैंसलेशन का निर्णय गलत है, तो Rivo Support से संपर्क करें। जाँच के लिए हम ऑर्डर विवरण, स्क्रीनशॉट, रसीद या अन्य आवश्यक जानकारी माँग सकते हैं।",
    "policy.refund.10": "कैंसलेशन और रिफंड सहायता के लिए संपर्क करें:",
    "legal.terms.1": "Rivo में आपका स्वागत है। ये नियम और शर्तें Rivo की वेबसाइट, मोबाइल ऐप और संबंधित सेवाओं के उपयोग पर लागू होती हैं। प्लेटफ़ॉर्म का उपयोग करके आप इन नियमों से सहमत होते हैं। यदि आप सहमत नहीं हैं, तो कृपया सेवाओं का उपयोग न करें।",
    "legal.terms.2": "हमारे प्लेटफ़ॉर्म को देखने, ऐप डाउनलोड करने, ऑर्डर देने या स्टोर अथवा राइडर खाता पंजीकृत करने से आप स्वीकार करते हैं कि आपने यह दस्तावेज़ पढ़ा, समझा और इससे बंधे रहने के लिए सहमत हैं। ये शर्तें आपके और Rivo के बीच बाध्यकारी कानूनी समझौता हैं।",
    "legal.terms.3": "Rivo का उपयोग करने के लिए आपकी आयु कम से कम 18 वर्ष होनी चाहिए और लागू भारतीय कानून के अनुसार कानूनी अनुबंध करने की क्षमता होनी चाहिए। यदि आप किसी व्यवसाय की ओर से खाता पंजीकृत करते हैं, तो आप दर्शाते हैं कि आपको उस व्यवसाय को इन शर्तों से बाँधने का अधिकार है।",
    "legal.terms.4": "आप पंजीकरण के दौरान सही, वर्तमान और पूर्ण जानकारी देने तथा उसे अपडेट रखने के लिए सहमत हैं। खाते की जानकारी सुरक्षित रखने और खाते के अंतर्गत होने वाली गतिविधियों व ऑर्डर की ज़िम्मेदारी आपकी है।",
    "legal.terms.5a": "Rivo एक तकनीकी प्लेटफ़ॉर्म है जो ऑनलाइन हाइपरलोकल मार्केटप्लेस प्रदान करता है और स्थानीय ग्राहकों को स्थानीय विक्रेताओं तथा डिलीवरी पार्टनर्स से जोड़ता है।",
    "legal.terms.5b": "विक्रेताओं द्वारा सूचीबद्ध उत्पाद Rivo के स्वामित्व में नहीं होते; Rivo उन्हें बनाता, बेचता या स्टोर नहीं करता और राइडर्स को सीधे नियुक्त नहीं करता। उत्पाद बिक्री और डिलीवरी संबंधित भागीदारों द्वारा प्लेटफ़ॉर्म के माध्यम से की जाती है।",
    "legal.terms.6a": "प्लेटफ़ॉर्म पर दिया गया ऑर्डर किसी विक्रेता से उत्पाद खरीदने का ग्राहक अनुरोध है। विक्रेता द्वारा ऑर्डर की पुष्टि करने पर वह स्वीकार होता है। ऑर्डर उत्पाद की उपलब्धता पर निर्भर हैं।",
    "legal.terms.6b": "ग्राहक ऑर्डर रद्द कर सकता है या नहीं, यह ऑर्डर के चरण और लागू रिफंड व कैंसलेशन नीति पर निर्भर करता है। डिलीवरी समय अनुमानित है और इसकी गारंटी नहीं है।",
    "legal.terms.7a": "संबंधित ऑर्डर या शहर में सक्षम होने पर Rivo डिजिटल भुगतान और कैश ऑन डिलीवरी का समर्थन कर सकता है। उपलब्ध भुगतान तरीके चेकआउट के समय दिखाए जाते हैं।",
    "legal.terms.7b": "उत्पादों की कीमत विक्रेता तय करते हैं। लागू कर और डिलीवरी शुल्क, जहाँ लागू हों, ऑर्डर की पुष्टि से पहले दिखाए जाते हैं।",
    "legal.terms.8": "विक्रेता अपनी सूची, कीमतों, स्टॉक, उत्पाद गुणवत्ता, पैकेजिंग, लाइसेंस और लागू कानूनों तथा नियमों के पालन की सटीकता के लिए ज़िम्मेदार हैं।",
    "legal.terms.9": "राइडर्स सुरक्षित और पेशेवर तरीके से डिलीवरी करने, यातायात और परिवहन नियमों का पालन करने, ग्राहक जानकारी सुरक्षित रखने और Rivo के संचालन निर्देशों का पालन करने के लिए सहमत हैं।",
    "legal.terms.10": "ग्राहकों, विक्रेताओं और राइडर्स को सही जानकारी देनी चाहिए, Rivo का केवल वैध उद्देश्यों के लिए उपयोग करना चाहिए, सम्मानजनक व्यवहार करना चाहिए और अन्य उपयोगकर्ताओं या प्लेटफ़ॉर्म को नुकसान पहुँचाने वाले व्यवहार से बचना चाहिए।",
    "legal.terms.11": "धोखाधड़ी, नकली या दुर्भावनापूर्ण ऑर्डर, दुर्व्यवहार, स्पैम, अनधिकृत पहुँच, सुरक्षा को दरकिनार करना, रिवर्स इंजीनियरिंग और प्लेटफ़ॉर्म का गैरकानूनी उपयोग प्रतिबंधित है।",
    "legal.terms.12": "Rivo नाम, लोगो, वेबसाइट, ऐप, टेक्स्ट, ग्राफिक्स, सॉफ़्टवेयर और अन्य स्वामित्व सामग्री बौद्धिक संपदा के रूप में संरक्षित हैं। अनुमति के बिना इन्हें कॉपी या पुनर्वितरित नहीं किया जा सकता।",
    "legal.terms.13": "Rivo का उपयोग हमारी गोपनीयता नीति के अधीन भी है, जिसमें बताया गया है कि व्यक्तिगत जानकारी कैसे एकत्र, उपयोग, साझा, सुरक्षित और रखी जाती है।",
    "legal.terms.14": "लागू कानून की अधिकतम अनुमति तक, प्लेटफ़ॉर्म के उपयोग से होने वाले अप्रत्यक्ष, आकस्मिक, विशेष या परिणामी नुकसान के लिए Rivo उत्तरदायी नहीं है, जिनमें विक्रेता उत्पाद संबंधी समस्या, डिलीवरी में देरी या भागीदारों के बीच विवाद शामिल हैं।",
    "legal.terms.15": "गंभीर मौसम, प्राकृतिक आपदा, बुनियादी ढाँचे की विफलता, नागरिक व्यवधान या सरकारी प्रतिबंध जैसी उचित नियंत्रण से बाहर परिस्थितियों के कारण हुई रुकावट या देरी के लिए Rivo ज़िम्मेदार नहीं है।",
    "legal.terms.16": "सुरक्षा, धोखाधड़ी रोकने, कानूनी अनुपालन, गंभीर नीति उल्लंघन या प्लेटफ़ॉर्म और उसके उपयोगकर्ताओं की सुरक्षा के लिए आवश्यक होने पर Rivo पहुँच निलंबित या समाप्त कर सकता है।",
    "legal.terms.17": "प्लेटफ़ॉर्म या लागू आवश्यकताओं में बदलाव होने पर हम इन नियमों और शर्तों को अपडेट कर सकते हैं। महत्वपूर्ण बदलाव प्रकाशित होने पर अंतिम अपडेट की तारीख संशोधित की जाएगी।",
    "legal.terms.18": "ये नियम और शर्तें भारत के कानूनों के अधीन हैं। लागू कानून के अनुसार विवादों पर महाराष्ट्र, भारत के सक्षम न्यायालयों का अधिकार क्षेत्र होगा।",
    "legal.terms.19": "इन नियमों के बारे में सवाल या स्पष्टीकरण के लिए Rivo Support से संपर्क करें:",
    "customers.hero.headline": "आपके शहर की हर ज़रूरत।",
    "riders.hero.accent": "आत्मविश्वास से डिलीवर करें।",
    "about.hero.accent": "जिसे हम अपना घर कहते हैं।",
    "cities.hero.accent": "एक-एक शहर आगे बढ़ते हुए।",
    "pricing.hero.accent": "स्थानीय व्यवसायों के लिए।",
    "vendors.hero.accent": "Rivo के साथ।",
    "vendors.register": "अपनी दुकान पंजीकृत करें",
    "vendors.viewPricing": "मूल्य योजनाएँ देखें",
    "footer.customers": "ग्राहक",
    "footer.riders": "राइडर",
    "apps.ecosystem.subtitle": "स्थानीय कॉमर्स के हर हिस्से के लिए बनाया गया।",
    "contact.cta.email": "ईमेल सहायता",
    "contact.cta.title": "हम कैसे मदद कर सकते हैं?",
    "contact.cta.subtitle": "विक्रेता पंजीकरण, सहायता और सामान्य सवालों के लिए हमारी टीम मदद के लिए उपलब्ध है।",
    "help.search": "सहायता विषय, अक्सर पूछे जाने वाले प्रश्न और गाइड खोजें।",
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


const moreGlobalTranslations: Record<string, [string, string]> = {
  "about rivo": ["Rivo बद्दल", "Rivo के बारे में"],
  "for customers": ["ग्राहकांसाठी", "ग्राहकों के लिए"],
  "user benefits": ["वापरकर्त्यांचे फायदे", "उपयोगकर्ताओं के लाभ"],
  "shopping made simple.": ["खरेदी आता सोपी.", "खरीदारी अब आसान।"],
  "city shelves": ["शहरातील पर्याय", "शहर की दुकानें"],
  "explore every category": ["प्रत्येक श्रेणी पाहा", "हर श्रेणी देखें"],
  "simple workflow": ["सोपे टप्पे", "आसान प्रक्रिया"],
  "from your phone to your doorstep.": ["तुमच्या फोनपासून थेट दारापर्यंत.", "आपके फोन से सीधे आपके दरवाज़े तक।"],
  "daily convenience": ["दररोजची सोय", "रोज़मर्रा की सुविधा"],
  "designed around your everyday needs.": ["तुमच्या दैनंदिन गरजांसाठी तयार.", "आपकी रोज़मर्रा की ज़रूरतों के लिए बनाया गया।"],
  "support your city with every order.": ["प्रत्येक ऑर्डरने तुमच्या शहराला साथ द्या.", "हर ऑर्डर से अपने शहर का साथ दें।"],
  "start shopping locally.": ["स्थानिक खरेदी सुरू करा.", "स्थानीय खरीदारी शुरू करें।"],
  "everything you need is closer than you think. discover trusted stores in your city and enjoy a better way to shop.": ["तुम्हाला लागणाऱ्या गोष्टी तुमच्या जवळच आहेत. शहरातील विश्वासार्ह दुकाने शोधा आणि खरेदीचा उत्तम अनुभव घ्या.", "आपकी ज़रूरत की चीज़ें आपकी सोच से भी करीब हैं। अपने शहर की भरोसेमंद दुकानें खोजें और बेहतर खरीदारी का अनुभव पाएँ।"],
  "download app": ["अ‍ॅप डाउनलोड करा", "ऐप डाउनलोड करें"],
  "for riders": ["रायडर्ससाठी", "राइडर्स के लिए"],
  "become a rivo rider and earn by delivering orders across your city. choose your availability, receive delivery requests and enjoy a simple, reliable delivery experience.": ["तुमच्या शहरात ऑर्डर पोहोचवून कमाई करा. तुमची उपलब्धता निवडा, डिलिव्हरी विनंत्या मिळवा आणि सोपा, विश्वासार्ह अनुभव घ्या.", "अपने शहर में ऑर्डर डिलीवर करके कमाएँ। अपनी उपलब्धता चुनें, डिलीवरी अनुरोध पाएँ और आसान, भरोसेमंद अनुभव का लाभ लें।"],
  "rider benefits": ["रायडर्सचे फायदे", "राइडर के लाभ"],
  "designed for riders.": ["रायडर्ससाठी तयार.", "राइडर्स के लिए बनाया गया।"],
  "onboarding process": ["नोंदणी प्रक्रिया", "जुड़ने की प्रक्रिया"],
  "start delivering in four simple steps.": ["चार सोप्या टप्प्यांत डिलिव्हरी सुरू करा.", "चार आसान चरणों में डिलीवरी शुरू करें।"],
  "app utilities": ["अ‍ॅपची वैशिष्ट्ये", "ऐप की सुविधाएँ"],
  "everything you need.": ["तुम्हाला आवश्यक सर्व काही.", "आपकी हर ज़रूरत की सुविधा।"],
  "requirements": ["आवश्यक अटी", "ज़रूरी योग्यताएँ"],
  "who can join.": ["कोण सहभागी होऊ शकते.", "कौन जुड़ सकता है।"],
  "core strengths": ["मुख्य वैशिष्ट्ये", "मुख्य खूबियाँ"],
  "built to make every delivery simple.": ["प्रत्येक डिलिव्हरी सोपी करण्यासाठी तयार.", "हर डिलीवरी आसान बनाने के लिए।"],
  "faq desk": ["प्रश्नोत्तर विभाग", "प्रश्नोत्तर"],
  "ready to start delivering?": ["डिलिव्हरी सुरू करण्यास तयार आहात?", "डिलीवरी शुरू करने के लिए तैयार हैं?"],
  "join as a rider and become part of a growing community helping local businesses serve customers across the city.": ["रायडर म्हणून सहभागी व्हा आणि शहरातील स्थानिक व्यवसायांना ग्राहकांपर्यंत पोहोचवणाऱ्या समुदायाचा भाग बना.", "राइडर के रूप में जुड़ें और स्थानीय व्यवसायों को पूरे शहर के ग्राहकों तक पहुँचाने वाले समुदाय का हिस्सा बनें।"],
  "the challenge": ["आव्हान", "चुनौती"],
  "unified commerce": ["एकत्रित कॉमर्स", "एकीकृत कॉमर्स"],
  "our mission": ["आमचे ध्येय", "हमारा मिशन"],
  "our vision": ["आमची दृष्टी", "हमारा विज़न"],
  "what drives us": ["आम्हाला प्रेरणा देणारे", "हमारी प्रेरणा"],
  "our values": ["आमची मूल्ये", "हमारे मूल्य"],
  "the real impact": ["खरा परिणाम", "वास्तविक प्रभाव"],
  "when local businesses grow, everyone benefits.": ["स्थानिक व्यवसाय वाढले की सर्वांना फायदा होतो.", "स्थानीय व्यवसाय बढ़ते हैं तो सभी को लाभ होता है।"],
  "simple standards": ["सोपे निकष", "सरल मानक"],
  "why choose rivo": ["Rivo का निवडावे", "Rivo क्यों चुनें"],
  "the road forward": ["पुढचा प्रवास", "आगे का रास्ता"],
  "starting with one city.": ["एका शहरापासून सुरुवात.", "एक शहर से शुरुआत।"],
  "growing one community at a time.": ["एकावेळी एक समुदाय जोडत.", "एक-एक समुदाय को साथ लेकर।"],
  "we're beginning our journey in baramati and look forward to expanding into more cities as we continue building a trusted local commerce platform.": ["आमचा प्रवास बारामतीपासून सुरू होत आहे. विश्वासार्ह स्थानिक कॉमर्स प्लॅटफॉर्म उभारताना पुढील शहरांमध्ये विस्तार करण्याची आमची योजना आहे.", "हमारी शुरुआत बारामती से हो रही है। भरोसेमंद स्थानीय कॉमर्स प्लेटफ़ॉर्म बनाते हुए हम आगे और शहरों में विस्तार करना चाहते हैं।"],
  "let's build better": ["चला, अधिक चांगले घडवूया", "आइए, बेहतर बनाएँ"],
  "local commerce together.": ["स्थानिक कॉमर्स एकत्र घडवूया.", "मिलकर स्थानीय कॉमर्स बनाएँ।"],
  "whether you're shopping, growing your business or looking for flexible earning opportunities, rivo is built to bring local communities together.": ["तुम्ही खरेदी करत असाल, व्यवसाय वाढवत असाल किंवा लवचिक कमाईच्या संधी शोधत असाल—Rivo स्थानिक समुदायांना जोडण्यासाठी तयार आहे.", "आप खरीदारी करें, व्यवसाय बढ़ाएँ या कमाई के लचीले अवसर खोजें—Rivo स्थानीय समुदायों को जोड़ने के लिए बनाया गया है।"],
  "service areas": ["सेवा क्षेत्रे", "सेवा क्षेत्र"],
  "request your city": ["तुमचे शहर सुचवा", "अपने शहर का अनुरोध करें"],
  "active hub": ["सक्रिय केंद्र", "सक्रिय केंद्र"],
  "our first launch city": ["आमचे पहिले लॉन्च शहर", "हमारा पहला लॉन्च शहर"],
  "shop from trusted local stores.": ["विश्वासार्ह स्थानिक दुकानांतून खरेदी करा.", "भरोसेमंद स्थानीय दुकानों से खरीदें।"],
  "reach more customers across the city.": ["शहरभरातील अधिक ग्राहकांपर्यंत पोहोचा.", "पूरे शहर में अधिक ग्राहकों तक पहुँचें।"],
  "earn by delivering locally.": ["स्थानिक डिलिव्हरी करून कमवा.", "स्थानीय डिलीवरी करके कमाएँ।"],
  "our philosophy": ["आमचे तत्त्व", "हमारा सिद्धांत"],
  "quality before expansion.": ["विस्तारापूर्वी गुणवत्ता.", "विस्तार से पहले गुणवत्ता।"],
  "future horizons": ["भविष्यातील दिशा", "भविष्य की योजनाएँ"],
  "more cities are on the roadmap.": ["अधिक शहरे भविष्यातील योजनेत आहेत.", "और शहर भविष्य की योजना में हैं।"],
  "coming soon": ["लवकरच येत आहे", "जल्द आ रहा है"],
  "planned for future expansion": ["भविष्यातील विस्तारासाठी नियोजित", "भविष्य के विस्तार की योजना"],
  "vote for expansion": ["पुढील शहरासाठी मत द्या", "अगले शहर के लिए सुझाव दें"],
  "want rivo in your city?": ["तुमच्या शहरात Rivo हवे आहे?", "क्या आप अपने शहर में Rivo चाहते हैं?"],
  "tell us where you'd like to see rivo next. your interest helps us understand where we should expand in the future.": ["पुढे Rivo कोणत्या शहरात हवे आहे ते सांगा. तुमचा प्रतिसाद आम्हाला भविष्यातील विस्तार ठरवण्यास मदत करेल.", "बताएँ कि आप आगे Rivo को किस शहर में देखना चाहते हैं। आपकी रुचि हमें भविष्य का विस्तार तय करने में मदद करेगी।"],
  "notify me": ["मला कळवा", "मुझे सूचित करें"],
  "submitting this form does not guarantee launch in your city. it simply helps us understand where people would like to see rivo next.": ["हा फॉर्म भरल्याने तुमच्या शहरात लॉन्च होईल याची हमी मिळत नाही. लोकांना पुढे Rivo कुठे हवे आहे हे समजण्यास मदत होते.", "यह फ़ॉर्म भरने से आपके शहर में लॉन्च की गारंटी नहीं है। इससे हमें पता चलता है कि लोग आगे Rivo को कहाँ देखना चाहते हैं।"],
  "inquiries desk": ["चौकशी विभाग", "पूछताछ"],
  "wherever you are, we'd love": ["तुम्ही कुठेही असलात तरी आम्हाला आवडेल", "आप जहाँ भी हों, हम चाहेंगे"],
  "to bring rivo to your city.": ["Rivo तुमच्या शहरात आणायला.", "कि Rivo आपके शहर में आए।"],
  "tell us where you'd like us to launch next.": ["पुढील लॉन्चसाठी तुमचे शहर सांगा.", "बताएँ कि अगला लॉन्च किस शहर में हो।"],
  "choose the plan that best fits your business. whether you're just getting started or looking to grow, rivo offers flexible options designed for local businesses.": ["तुमच्या व्यवसायाला योग्य अशी योजना निवडा. सुरुवात करत असाल किंवा वाढ करू इच्छित असाल, Rivo स्थानिक व्यवसायांसाठी लवचिक पर्याय देते.", "अपने व्यवसाय के अनुसार योजना चुनें। शुरुआत कर रहे हों या बढ़ना चाहते हों, Rivo स्थानीय व्यवसायों के लिए लचीले विकल्प देता है।"],
  "pricing and subscription features may evolve as rivo grows and introduces new platform capabilities.": ["Rivo वाढत असताना आणि नवीन वैशिष्ट्ये आणताना किंमत व सदस्यता सुविधा बदलू शकतात.", "Rivo के बढ़ने और नई सुविधाएँ जोड़ने के साथ मूल्य और सदस्यता सुविधाएँ बदल सकती हैं।"],
  "granular breakdown": ["तपशीलवार माहिती", "विस्तृत विवरण"],
  "compare features": ["वैशिष्ट्यांची तुलना", "सुविधाओं की तुलना"],
  "plan tier features": ["योजना वैशिष्ट्ये", "योजना की सुविधाएँ"],
  "fair standards": ["न्याय्य निकष", "उचित मानक"],
  "honest pricing models.": ["पारदर्शक किंमत योजना.", "पारदर्शी मूल्य मॉडल।"],
  "pricing help": ["किंमतविषयक मदत", "मूल्य संबंधी सहायता"],
  "choose the plan that works for your business.": ["तुमच्या व्यवसायासाठी योग्य योजना निवडा.", "अपने व्यवसाय के लिए सही योजना चुनें।"],
  "whether you're just getting started or looking to eliminate commission fees, rivo offers simple pricing designed for local businesses.": ["तुम्ही नुकतीच सुरुवात करत असाल किंवा कमिशन शुल्क टाळू इच्छित असाल, Rivo स्थानिक व्यवसायांसाठी सोप्या किंमत योजना देते.", "आप अभी शुरुआत कर रहे हों या कमीशन शुल्क हटाना चाहते हों, Rivo स्थानीय व्यवसायों के लिए सरल मूल्य योजनाएँ देता है।"],
  "contact": ["संपर्क", "संपर्क"],
  "email support": ["ईमेल सहाय्य", "ईमेल सहायता"],
  "for general questions and support.": ["सामान्य प्रश्न आणि सहाय्यासाठी.", "सामान्य सवाल और सहायता के लिए।"],
  "business enquiries": ["व्यवसायविषयक चौकशी", "व्यावसायिक पूछताछ"],
  "for partnerships and business enquiries.": ["भागीदारी व व्यवसायविषयक चौकशीसाठी.", "साझेदारी और व्यावसायिक पूछताछ के लिए।"],
  "business hours": ["कामकाजाची वेळ", "काम के घंटे"],
  "support is available during business hours.": ["कामकाजाच्या वेळेत सहाय्य उपलब्ध आहे.", "काम के समय सहायता उपलब्ध है।"],
  "monday – saturday": ["सोमवार – शनिवार", "सोमवार – शनिवार"],
  "send us a message": ["आम्हाला संदेश पाठवा", "हमें संदेश भेजें"],
  "full name": ["पूर्ण नाव", "पूरा नाम"],
  "subject": ["विषय", "विषय"],
  "message": ["संदेश", "संदेश"],
  "send message": ["संदेश पाठवा", "संदेश भेजें"],
  "rivo channels": ["Rivo संपर्क माध्यमे", "Rivo संपर्क माध्यम"],
  "who can contact us?": ["आमच्याशी कोण संपर्क करू शकते?", "हमसे कौन संपर्क कर सकता है?"],
  "quick help": ["जलद मदत", "त्वरित सहायता"],
  "need more help?": ["अधिक मदत हवी आहे?", "और मदद चाहिए?"],
  "support information": ["सहाय्य माहिती", "सहायता जानकारी"],
  "we're here to help.": ["आम्ही मदतीसाठी आहोत.", "हम मदद के लिए यहाँ हैं।"],
  "our support team is available during business hours to help customers, vendors and riders.": ["ग्राहक, विक्रेते आणि रायडर्सना मदत करण्यासाठी आमची सहाय्य टीम कामकाजाच्या वेळेत उपलब्ध असते.", "ग्राहकों, विक्रेताओं और राइडर्स की मदद के लिए हमारी सहायता टीम काम के समय उपलब्ध है।"],
  "still need help?": ["अजून मदत हवी आहे?", "अभी भी मदद चाहिए?"],
  "if you couldn't find the answer you were looking for, our support team is ready to help.": ["तुम्हाला अपेक्षित उत्तर मिळाले नसेल तर आमची सहाय्य टीम मदतीसाठी तयार आहे.", "अगर आपको जवाब नहीं मिला, तो हमारी सहायता टीम मदद के लिए तैयार है।"],
  "one connected platform": ["एकमेकांशी जोडलेला प्लॅटफॉर्म", "एक जुड़ा हुआ प्लेटफ़ॉर्म"],
  "built for every side of local commerce.": ["स्थानिक कॉमर्सच्या प्रत्येक घटकासाठी तयार.", "स्थानीय कॉमर्स के हर हिस्से के लिए बनाया गया।"],
  "customer app": ["ग्राहक अ‍ॅप", "ग्राहक ऐप"],
  "your city.": ["तुमचं शहर.", "आपका शहर।"],
  "your shopping.": ["तुमची खरेदी.", "आपकी खरीदारी।"],
  "discover nearby businesses, browse products, place orders and follow your order — all from one rivocity app.": ["जवळचे व्यवसाय शोधा, उत्पादने पाहा, ऑर्डर द्या आणि ऑर्डरची स्थिती पाहा—हे सर्व एका RivoCity अ‍ॅपमधून.", "आसपास के व्यवसाय खोजें, उत्पाद देखें, ऑर्डर दें और ऑर्डर की स्थिति देखें—सब एक RivoCity ऐप से।"],
  "download customer app": ["ग्राहक अ‍ॅप डाउनलोड करा", "ग्राहक ऐप डाउनलोड करें"],
  "rider app": ["रायडर अ‍ॅप", "राइडर ऐप"],
  "deliver locally.": ["स्थानिक डिलिव्हरी करा.", "स्थानीय डिलीवरी करें।"],
  "earn on the move.": ["फिरता-फिरता कमवा.", "चलते-फिरते कमाएँ।"],
  "download rider app": ["रायडर अ‍ॅप डाउनलोड करा", "राइडर ऐप डाउनलोड करें"],
  "scan & download": ["स्कॅन करा आणि डाउनलोड करा", "स्कैन करें और डाउनलोड करें"],
  "get rivocity on your phone.": ["तुमच्या फोनवर RivoCity मिळवा.", "अपने फोन पर RivoCity पाएँ।"],
  "scan a qr code with your phone camera to download the rivocity app you need.": ["आवश्यक RivoCity अ‍ॅप डाउनलोड करण्यासाठी फोनच्या कॅमेऱ्याने QR कोड स्कॅन करा.", "ज़रूरी RivoCity ऐप डाउनलोड करने के लिए फोन कैमरे से QR कोड स्कैन करें।"],
  "scan to download the rivocity customer app.": ["RivoCity ग्राहक अ‍ॅप डाउनलोड करण्यासाठी स्कॅन करा.", "RivoCity ग्राहक ऐप डाउनलोड करने के लिए स्कैन करें।"],
  "scan to download the rivocity rider app.": ["RivoCity Rider अ‍ॅप डाउनलोड करण्यासाठी स्कॅन करा.", "RivoCity Rider ऐप डाउनलोड करने के लिए स्कैन करें।"],
  "vendor portal": ["विक्रेता पोर्टल", "विक्रेता पोर्टल"],
  "run your business": ["तुमचा व्यवसाय सांभाळा", "अपना व्यवसाय संभालें"],
  "with rivocity.": ["RivoCity सह.", "RivoCity के साथ।"],
  "business operations": ["व्यवसाय संचालन", "व्यवसाय संचालन"],
  "the rivocity journey": ["RivoCity चा प्रवास", "RivoCity की यात्रा"],
  "one order.": ["एक ऑर्डर.", "एक ऑर्डर।"],
  "three connected experiences.": ["तीन जोडलेले अनुभव.", "तीन जुड़े हुए अनुभव।"],
  "explore customer experience": ["ग्राहक अनुभव जाणून घ्या", "ग्राहक अनुभव देखें"],
  "for local businesses": ["स्थानिक व्यवसायांसाठी", "स्थानीय व्यवसायों के लिए"],
  "reach more local customers, manage your store with ease and grow your business through one simple platform built for your city.": ["तुमच्या शहरासाठी तयार केलेल्या एका सोप्या प्लॅटफॉर्मद्वारे अधिक स्थानिक ग्राहकांपर्यंत पोहोचा, दुकान सहज सांभाळा आणि व्यवसाय वाढवा.", "अपने शहर के लिए बने एक आसान प्लेटफ़ॉर्म से अधिक स्थानीय ग्राहकों तक पहुँचें, दुकान संभालें और व्यवसाय बढ़ाएँ।"],
  "built for local businesses": ["स्थानिक व्यवसायांसाठी तयार", "स्थानीय व्यवसायों के लिए बनाया गया"],
  "simple store management": ["सोपे दुकान व्यवस्थापन", "आसान स्टोर प्रबंधन"],
  "rivo vendor portal": ["Rivo विक्रेता पोर्टल", "Rivo विक्रेता पोर्टल"],
  "store management": ["दुकान व्यवस्थापन", "स्टोर प्रबंधन"],
  "sales growth": ["विक्री वाढ", "बिक्री में वृद्धि"],
  "this month": ["या महिन्यात", "इस महीने"],
  "initial launch": ["प्रारंभिक लॉन्च", "शुरुआती लॉन्च"],
  "looking for local businesses to start our initial launch.": ["प्रारंभिक लॉन्चसाठी आम्ही स्थानिक व्यवसाय शोधत आहोत.", "शुरुआती लॉन्च के लिए हम स्थानीय व्यवसायों से जुड़ रहे हैं।"],
  "rivo is onboarding local businesses for its initial city launch. join early, get your store online and be part of building local commerce in your city.": ["शहरातील पहिल्या लॉन्चसाठी Rivo स्थानिक व्यवसायांना सहभागी करत आहे. लवकर सहभागी व्हा, दुकान ऑनलाइन आणा आणि तुमच्या शहरातील स्थानिक कॉमर्स घडवण्याचा भाग बना.", "शहर के शुरुआती लॉन्च के लिए Rivo स्थानीय व्यवसायों को जोड़ रहा है। जल्दी जुड़ें, दुकान ऑनलाइन लाएँ और अपने शहर के स्थानीय कॉमर्स का हिस्सा बनें।"],
  "launch incentives and eligibility may vary by city, launch period and vendor activity.": ["लॉन्च प्रोत्साहने आणि पात्रता शहर, लॉन्च कालावधी व विक्रेत्याच्या सहभागानुसार बदलू शकतात.", "लॉन्च प्रोत्साहन और पात्रता शहर, लॉन्च अवधि और विक्रेता गतिविधि के अनुसार बदल सकते हैं।"],
  "store advantages": ["दुकानाचे फायदे", "स्टोर के लाभ"],
  "everything your business needs to grow.": ["व्यवसाय वाढवण्यासाठी आवश्यक सर्व काही.", "व्यवसाय बढ़ाने के लिए ज़रूरी सब कुछ।"],
  "complete control": ["पूर्ण नियंत्रण", "पूरा नियंत्रण"],
  "manage your store with confidence.": ["आत्मविश्वासाने तुमचे दुकान व्यवस्थापित करा.", "आत्मविश्वास से अपना स्टोर संभालें।"],
  "onboarding steps": ["नोंदणीचे टप्पे", "जुड़ने के चरण"],
  "start selling in four simple steps.": ["चार सोप्या टप्प्यांत विक्री सुरू करा.", "चार आसान चरणों में बिक्री शुरू करें।"],
  "built around your business": ["तुमच्या व्यवसायाभोवती तयार", "आपके व्यवसाय के अनुसार बनाया गया"],
  "your business.": ["तुमचा व्यवसाय.", "आपका व्यवसाय।"],
  "your store. your control.": ["तुमचे दुकान. तुमचे नियंत्रण.", "आपकी दुकान। आपका नियंत्रण।"],
  "merchant inquiries": ["विक्रेता चौकशी", "व्यापारी पूछताछ"],
  "join rivo": ["Rivo मध्ये सहभागी व्हा", "Rivo से जुड़ें"],
  "ready to grow": ["वाढीसाठी तयार", "बढ़ने के लिए तैयार"],
  "your business?": ["तुमचा व्यवसाय?", "आपका व्यवसाय?"],
  "join a growing network of trusted local businesses and start reaching more customers with rivo.": ["विश्वासार्ह स्थानिक व्यवसायांच्या वाढत्या नेटवर्कमध्ये सहभागी व्हा आणि Rivo द्वारे अधिक ग्राहकांपर्यंत पोहोचा.", "भरोसेमंद स्थानीय व्यवसायों के बढ़ते नेटवर्क से जुड़ें और Rivo से अधिक ग्राहकों तक पहुँचें।"],
  "register your store": ["तुमचे दुकान नोंदवा", "अपनी दुकान पंजीकृत करें"],
  "view pricing": ["किंमत योजना पाहा", "मूल्य योजनाएँ देखें"],
  "get rivo": ["Rivo मिळवा", "Rivo प्राप्त करें"],
  "page not found.": ["पृष्ठ सापडले नाही.", "पेज नहीं मिला।"],
  "the page you are looking for doesn't exist or may have been moved.": ["तुम्ही शोधत असलेले पृष्ठ उपलब्ध नाही किंवा हलवले गेले असू शकते.", "आप जिस पेज को खोज रहे हैं वह मौजूद नहीं है या स्थानांतरित हो गया है।"],
  "go home": ["मुख्यपृष्ठावर जा", "होम पर जाएँ"],
  "contact support": ["सपोर्टशी संपर्क साधा", "सहायता से संपर्क करें"],
  "refund & cancellation policy": ["परतावा व रद्द करण्याचे धोरण", "रिफंड और कैंसलेशन नीति"],
  "terms & conditions": ["अटी व शर्ती", "नियम व शर्तें"],
  "privacy policy": ["गोपनीयता धोरण", "गोपनीयता नीति"]
};
Object.assign(globalTranslations, moreGlobalTranslations);

const normalizeCopy = (value: string) => value.replace(/\\s+/g, ' ').trim().toLocaleLowerCase();

const copyByValue = (() => {
  const index = new Map<string, { en: string; mr: string; hi: string }>();
  for (const [english, [mr, hi]] of Object.entries(globalTranslations)) {
    const record = { en: english, mr, hi };
    [english, mr, hi].forEach((value) => index.set(normalizeCopy(value), record));
  }
  return index;
})();

const attributeOriginals = new WeakMap<Element, Map<string, string>>();

function translateAttributes(element: Element, language: RivoLanguage) {
  const attributes = ['placeholder', 'title', 'aria-label', 'alt'];
  let originals = attributeOriginals.get(element);
  if (!originals) {
    originals = new Map<string, string>();
    attributeOriginals.set(element, originals);
  }
  for (const attribute of attributes) {
    const current = element.getAttribute(attribute);
    if (current === null) continue;
    const original = originals.get(attribute);
    if (original !== undefined) {
      const lookup = copyByValue.get(normalizeCopy(original));
      if (lookup) {
        const desired = language === 'en' ? original : lookup[language];
        if (current !== desired) element.setAttribute(attribute, desired);
      }
      continue;
    }
    const lookup = copyByValue.get(normalizeCopy(current));
    if (!lookup) {
      originals.set(attribute, current);
      continue;
    }
    if (language === 'en' || current === lookup.mr || current === lookup.hi) {
      originals.set(attribute, current);
      continue;
    }
    originals.set(attribute, current);
    element.setAttribute(attribute, lookup[language]);
  }
}

function translateAttributesTree(start: Node, language: RivoLanguage) {
  if (start instanceof Element) translateAttributes(start, language);
  if (start instanceof Element || start instanceof Document) {
    start.querySelectorAll('*').forEach((element) => translateAttributes(element, language));
  }
}

const nodeOriginals = new WeakMap<Text, string>();

function translateStaticText(node: Text, language: RivoLanguage) {
  const current = node.data;
  const original = nodeOriginals.get(node);

  if (original !== undefined) {
    const lookup = copyByValue.get(normalizeCopy(original));
    if (!lookup) return;
    const desired = language === 'en' ? original : lookup[language];
    if (current !== desired) node.data = desired;
    return;
  }

  const lookup = copyByValue.get(normalizeCopy(current));
  if (!lookup) {
    nodeOriginals.set(node, current);
    return;
  }

  // Text already emitted in the selected language by React's t() keys should be left alone.
  if (language === 'en' || current === lookup.mr || current === lookup.hi) {
    nodeOriginals.set(node, current);
    return;
  }

  // Hard-coded English copy is translated in place, while preserving the exact original
  // capitalization for a later switch back to English.
  nodeOriginals.set(node, current);
  const desired = lookup[language];
  if (current !== desired) node.data = desired;
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
    translateAttributesTree(root, language);
    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === 'characterData' && record.target instanceof Text) {
          translateStaticText(record.target, language);
        }
        record.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) translateStaticText(node as Text, language);
          else if (node.nodeType === Node.ELEMENT_NODE) {
            translateTree(node);
            translateAttributesTree(node, language);
          }
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
