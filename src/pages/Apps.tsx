import React from 'react';
import { motion, type Variants, type Transition } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Download,
  ExternalLink,
  MapPin,
  Package,
  QrCode,
  ShoppingBag,
  Store,
  Truck,
  Users,
  Check,
} from 'lucide-react';
import SEO from '../components/SEO';

const CUSTOMER_APK =
  'https://github.com/rivocity1-glitch/rivo-website/releases/latest/download/RivoCity.apk';

const RIDER_APK =
  'https://github.com/rivocity1-glitch/rivo-website/releases/latest/download/RivoCity-Rider.apk';
const getQrUrl = (value: string) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=400x400&margin=10&data=${encodeURIComponent(
    value
  )}`;

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <span className="text-xs uppercase tracking-widest text-brand-primary font-bold">
    {children}
  </span>
);

const Apps: React.FC = () => {
  return (
    <>
      <SEO
        title="RivoCity Apps | One City. Infinite Possibilities."
        description="Explore the RivoCity Customer App, Rider App and Vendor Portal — the connected platform powering local city commerce."
        canonical="/apps"
      />

      <main className="bg-white min-h-screen overflow-x-hidden selection:bg-brand-primary selection:text-brand-black">

        {/* =========================================================
            HERO
        ========================================================= */}

        <section
          className="relative pt-8 pb-20 md:pt-16 md:pb-28 lg:pb-32"
          aria-labelledby="apps-hero-heading"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#2ECC71]/5 blur-3xl" />
          </div>

          <div className="container-custom relative">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center flex flex-col items-center"
            >
              <motion.div variants={revealVariants}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2ECC71]/10 border border-[#2ECC71]/20 rounded-full text-xs font-semibold tracking-wider text-brand-primary uppercase">
                  <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                  The RivoCity ecosystem
                </div>
              </motion.div>

              <motion.h1
                id="apps-hero-heading"
                variants={revealVariants}
                className="mt-8 text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-brand-black leading-[1.05]"
              >
                Everything RivoCity,
                <br />
                <span className="text-brand-primary">in one place.</span>
              </motion.h1>

              <motion.p
                variants={revealVariants}
                className="mt-7 text-base sm:text-lg lg:text-xl text-brand-gray-muted leading-relaxed max-w-2xl"
              >
                Shop locally, manage your business, or deliver across your
                city. RivoCity connects every part of the local commerce
                journey.
              </motion.p>

              <motion.div
                variants={revealVariants}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <a
                  href="#customer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-brand-black text-white text-sm font-semibold hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore the apps
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#qr"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-neutral-200 text-brand-black text-sm font-semibold hover:bg-neutral-50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get the app QR
                  <QrCode className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            ECOSYSTEM
        ========================================================= */}

        <section
          className="py-20 md:py-32 bg-white border-t border-neutral-100"
          aria-labelledby="ecosystem-heading"
        >
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
            >
              <motion.div
                variants={revealVariants}
                className="max-w-3xl mb-16"
              >
                <SectionLabel>One connected platform</SectionLabel>

                <h2
                  id="ecosystem-heading"
                  className="mt-3 text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight"
                >
                  Built for every side of local commerce.
                </h2>

                <p className="mt-5 text-base text-brand-gray-muted leading-relaxed max-w-2xl">
                  Customers, businesses and delivery partners each have their
                  own tools — while working together through the same RivoCity
                  ecosystem.
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: ShoppingBag,
                    label: 'Customer',
                    title: 'Discover & shop',
                    description:
                      'Find local stores, browse products, place orders and follow your delivery.',
                  },
                  {
                    icon: Store,
                    label: 'Vendor',
                    title: 'Manage & grow',
                    description:
                      'Manage products, inventory, orders, store timings, offers and business operations.',
                  },
                  {
                    icon: Truck,
                    label: 'Rider',
                    title: 'Pick up & deliver',
                    description:
                      'Manage assigned deliveries, pickup orders, complete deliveries and track earnings.',
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      variants={cardHoverVariants}
                      initial="initial"
                      whileHover="hover"
                      transition={smoothTransition}
                      className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col space-y-5 cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#FAF9FA] border border-neutral-200/60 flex items-center justify-center text-brand-primary shadow-2xs">
                        <Icon className="w-6 h-6 stroke-[1.8]" />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-widest text-brand-primary font-bold">
                          {item.label}
                        </p>

                        <h3 className="text-xl font-bold text-brand-black tracking-tight mt-2">
                          {item.title}
                        </h3>

                        <p className="text-sm text-brand-gray-muted mt-2 leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            CUSTOMER APP
        ========================================================= */}

        <section
          id="customer"
          className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100"
          aria-labelledby="customer-app-heading"
        >
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              <motion.div variants={revealVariants}>
                <div className="w-14 h-14 rounded-2xl bg-brand-black flex items-center justify-center mb-8">
                  <ShoppingBag className="w-7 h-7 text-white" />
                </div>

                <SectionLabel>Customer App</SectionLabel>

                <h2
                  id="customer-app-heading"
                  className="text-4xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight mt-3"
                >
                  Your city.
                  <br />
                  Your shopping.
                </h2>

                <p className="text-base md:text-lg text-brand-gray-muted mt-6 leading-relaxed max-w-lg">
                  Discover nearby businesses, browse products, place orders
                  and follow your order — all from one RivoCity app.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                  {[
                    'Discover local stores',
                    'Browse products',
                    'Place orders',
                    'Follow deliveries',
                    'Manage addresses',
                    'View order history',
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-brand-gray-muted"
                    >
                      <Check className="w-4 h-4 text-brand-primary shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <a
                    href={CUSTOMER_APK}
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-brand-primary text-brand-black text-sm font-semibold hover:bg-[#27ae60] hover:text-white transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-brand-primary/10"
                  >
                    <Download className="w-4 h-4" />
                    Download Customer App
                  </a>

                  <div className="inline-flex items-center justify-center px-5 py-4 rounded-full border border-neutral-200 bg-white text-xs text-brand-gray-muted">
                    Android • APK
                  </div>
                </div>
              </motion.div>

              {/* CUSTOMER APP ICON */}
              <motion.div
                variants={revealVariants}
                className="flex justify-center"
              >
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{ y: -8 }}
                  transition={smoothTransition}
                  className="relative w-full max-w-[400px] aspect-square rounded-[40px] bg-white border border-neutral-200 shadow-xl flex items-center justify-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />

                  <div className="relative w-52 h-[420px] rounded-[2.5rem] border-[8px] border-neutral-800 bg-white shadow-2xl flex flex-col items-center justify-center overflow-hidden">
                    <div className="absolute top-3 z-10 w-16 h-1 rounded-full bg-neutral-300" />

                    <img
                      src={CUSTOMER_ICON}
                      alt="RivoCity Customer App"
                      className="w-28 h-28 rounded-[28px] object-cover shadow-lg"
                    />

                    <p className="font-bold text-brand-black mt-6">
                      RivoCity
                    </p>

                    <p className="text-xs text-neutral-400 mt-1">
                      Customer App
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            RIDER APP
        ========================================================= */}

        <section
          id="rider"
          className="py-20 md:py-32 bg-white border-t border-neutral-100"
          aria-labelledby="rider-app-heading"
        >
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* RIDER APP ICON */}
              <motion.div
                variants={revealVariants}
                className="order-2 lg:order-1 flex justify-center"
              >
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{ y: -8 }}
                  transition={smoothTransition}
                  className="relative w-full max-w-[400px] aspect-square rounded-[40px] bg-[#FAF9FA] border border-neutral-200 shadow-xl flex items-center justify-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />

                  <div className="relative w-52 h-[420px] rounded-[2.5rem] border-[8px] border-neutral-800 bg-white shadow-2xl flex flex-col items-center justify-center overflow-hidden">
                    <div className="absolute top-3 z-10 w-16 h-1 rounded-full bg-neutral-300" />

                    <img
                      src={RIDER_ICON}
                      alt="RivoCity Rider App"
                      className="w-28 h-28 rounded-[28px] object-cover shadow-lg"
                    />

                    <p className="font-bold text-brand-black mt-6">
                      RivoCity Rider
                    </p>

                    <p className="text-xs text-neutral-400 mt-1">
                      Rider App
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={revealVariants}
                className="order-1 lg:order-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-black flex items-center justify-center mb-8">
                  <Truck className="w-7 h-7 text-white" />
                </div>

                <SectionLabel>Rider App</SectionLabel>

                <h2
                  id="rider-app-heading"
                  className="text-4xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight mt-3"
                >
                  Deliver locally.
                  <br />
                  Earn on the move.
                </h2>

                <p className="text-base md:text-lg text-brand-gray-muted mt-6 leading-relaxed max-w-lg">
                  RivoCity gives delivery partners the tools they need to
                  manage assigned orders, pickups, deliveries and earnings.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                  {[
                    'Assigned deliveries',
                    'Pickup workflow',
                    'Delivery workflow',
                    'Earnings & wallet',
                    'Settlement information',
                    'Customer location',
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-brand-gray-muted"
                    >
                      <Check className="w-4 h-4 text-brand-primary shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <a
                    href={RIDER_APK}
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-brand-black text-white text-sm font-semibold hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Download className="w-4 h-4" />
                    Download Rider App
                  </a>

                  <div className="inline-flex items-center justify-center px-5 py-4 rounded-full border border-neutral-200 text-xs text-brand-gray-muted">
                    Android • APK
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            QR CODES
            ONLY CUSTOMER + RIDER
        ========================================================= */}

        <section
          id="qr"
          className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100"
          aria-labelledby="qr-heading"
        >
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
            >
              <motion.div
                variants={revealVariants}
                className="text-center max-w-2xl mx-auto"
              >
                <SectionLabel>Scan & download</SectionLabel>

                <h2
                  id="qr-heading"
                  className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight mt-3"
                >
                  Get RivoCity on your phone.
                </h2>

              <p className="mt-5 text-neutral-500 leading-relaxed">
                Scan a QR code with your phone camera to open the RivoCity
                apps or download an app directly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
              {/* Main Apps QR */}
              <div className="rounded-3xl border-2 border-[#2ECC71]/20 bg-neutral-50 p-7 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2ECC71]/10 text-[#239b58] text-xs font-semibold mb-6">
                  <QrCode className="w-3.5 h-3.5" />
                  Recommended
                </div>

                <h3 className="text-xl font-bold">
                  RivoCity Apps
                </h3>

                <p className="text-sm text-neutral-500 mt-2 min-h-[40px]">
                  Best for pamphlets, posters and general promotion.
                </p>

                <div className="mt-6 bg-white rounded-2xl p-4 inline-flex shadow-sm">
                  <img
                    src={getQrUrl(APPS_PAGE_URL)}
                    alt="QR code for RivoCity Apps"
                    width={220}
                    height={220}
                    className="w-52 h-52 md:w-56 md:h-56"
                    loading="lazy"
                  />
                </div>

               <p className="text-xs text-neutral-400 mt-5 break-all">
  rivo-website.pages.dev/apps
</p>
                <p className="text-xs text-neutral-500 mt-3">
                  Scan once and choose the app you need.
                </p>
              </div>

              {/* Customer QR */}
              <div className="rounded-3xl border border-neutral-100 bg-white p-7 text-center shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#2ECC71]/10 flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="w-6 h-6 text-[#2ECC71]" />
                </div>

                <h3 className="text-xl font-bold">
                  RivoCity
                </h3>

                <p className="text-sm text-neutral-500 mt-2 min-h-[40px]">
                  Direct QR for the Customer App APK.
                </p>

                    <div className="mt-7 bg-white rounded-2xl p-4 inline-flex border border-neutral-100 shadow-sm">
                      <img
                        src={getQrUrl(CUSTOMER_APK)}
                        alt="QR code for RivoCity Customer App"
                        width={240}
                        height={240}
                        className="w-56 h-56 md:w-60 md:h-60"
                        loading="lazy"
                      />
                    </div>

                    <p className="text-xs text-neutral-400 mt-5">
                      Scan to download Customer App
                    </p>

                    <a
                      href={CUSTOMER_APK}
                      className="inline-flex items-center justify-center gap-2 mt-5 px-6 py-3 rounded-full bg-brand-primary text-brand-black text-sm font-semibold hover:bg-[#27ae60] hover:text-white transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download Customer App
                    </a>
                  </div>
                </motion.div>

                {/* RIDER QR */}
                <motion.div
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={smoothTransition}
                  className="bg-white border border-neutral-200 rounded-3xl p-8 md:p-10 text-center"
                >
                  <div className="flex flex-col items-center">

                    <img
                      src={RIDER_ICON}
                      alt="RivoCity Rider App icon"
                      className="w-20 h-20 rounded-[22px] object-cover shadow-md mb-6"
                    />

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 text-brand-black text-xs font-semibold mb-4">
                      <Truck className="w-3.5 h-3.5" />
                      Rider
                    </div>

                <h3 className="text-xl font-bold">
                  RivoCity Rider
                </h3>

                <p className="text-sm text-neutral-500 mt-2 min-h-[40px]">
                  Direct QR for the Rider App APK.
                </p>

                    <div className="mt-7 bg-white rounded-2xl p-4 inline-flex border border-neutral-100 shadow-sm">
                      <img
                        src={getQrUrl(RIDER_APK)}
                        alt="QR code for RivoCity Rider App"
                        width={240}
                        height={240}
                        className="w-56 h-56 md:w-60 md:h-60"
                        loading="lazy"
                      />
                    </div>

                    <p className="text-xs text-neutral-400 mt-5">
                      Scan to download Rider App
                    </p>

                <a
                  href={RIDER_APK}
                  className="inline-flex items-center justify-center gap-2 mt-5 px-5 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Rider App
                </a>
              </div>
            </div>

            {/* Pamphlet recommendation */}
            <div className="mt-10 rounded-3xl bg-neutral-950 text-white p-7 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2ECC71]">
                    For RivoCity pamphlets
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold mt-2">
                    Use the RivoCity Apps QR.
                  </h3>

                  <p className="text-sm text-neutral-400 mt-3 max-w-2xl leading-relaxed">
                    This QR points to rivo-website.pages.dev/apps instead of directly to
                    an APK. That means we can later add Play Store, iOS and
                    future app versions without changing the QR printed on
                    your pamphlets.
                  </p>
                </div>

                <a
                  href={APPS_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2ECC71] text-white text-sm font-semibold hover:bg-[#27ae60] transition-colors"
                >
                  Open Apps Page
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            VENDOR PORTAL
        ========================================================= */}

        <section
          id="vendor"
          className="py-20 md:py-32 bg-white border-t border-neutral-100"
          aria-labelledby="vendor-portal-heading"
        >
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              <motion.div variants={revealVariants}>
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8">
                  <Store className="w-7 h-7 text-brand-primary" />
                </div>

                <SectionLabel>Vendor Portal</SectionLabel>

                <h2
                  id="vendor-portal-heading"
                  className="text-4xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight mt-3"
                >
                  Run your business
                  <br />
                  with RivoCity.
                </h2>

                <p className="text-base md:text-lg text-brand-gray-muted mt-6 leading-relaxed max-w-lg">
                  The RivoCity Vendor Portal gives local businesses one place
                  to manage products, inventory, orders, offers, banners,
                  analytics, store operations and settlements.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    'Products',
                    'Inventory',
                    'Orders',
                    'Offers',
                    'Analytics',
                    'Settlements',
                  ].map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-2 rounded-full bg-neutral-50 border border-neutral-100 text-xs font-medium text-brand-gray-muted"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href={VENDOR_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-10 px-7 py-4 rounded-full bg-brand-black text-white text-sm font-semibold hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Open Vendor Portal
                  <ExternalLink className="w-4 h-4" />
                </a>

                <p className="text-xs text-neutral-400 mt-4">
                  Web portal • For registered RivoCity businesses
                </p>
              </motion.div>

              <motion.div
                variants={revealVariants}
                className="rounded-3xl bg-[#FAF9FA] border border-neutral-200 p-7"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <Store className="w-5 h-5 text-brand-primary" />
                  </div>

                  <div>
                    <p className="font-semibold text-sm text-brand-black">
                      RivoCity Vendor Portal
                    </p>

                    <p className="text-xs text-neutral-400">
                      Business operations
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    ['Orders', 'Manage incoming orders'],
                    ['Inventory', 'Keep stock updated'],
                    ['Store', 'Manage your storefront'],
                    ['Analytics', 'Understand your business'],
                  ].map(([title, description]) => (
                    <motion.div
                      key={title}
                      whileHover={{ x: 4 }}
                      transition={smoothTransition}
                      className="bg-white rounded-2xl p-4 border border-neutral-100"
                    >
                      <p className="text-sm font-semibold text-brand-black">
                        {title}
                      </p>

                      <p className="text-xs text-neutral-400 mt-1">
                        {description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            JOURNEY
        ========================================================= */}

        <section
          id="journey"
          className="py-20 md:py-32 bg-brand-black text-white"
          aria-labelledby="journey-heading"
        >
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
            >
              <motion.div
                variants={revealVariants}
                className="max-w-3xl"
              >
                <SectionLabel>The RivoCity journey</SectionLabel>

                <h2
                  id="journey-heading"
                  className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mt-3"
                >
                  One order.
                  <br />
                  Three connected experiences.
                </h2>

                <p className="mt-5 text-neutral-400 leading-relaxed max-w-2xl">
                  RivoCity connects the customer who orders, the vendor who
                  prepares, and the rider who delivers.
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-14"
              >
                {[
                  {
                    number: '01',
                    title: 'Discover',
                    text: 'Customer finds a local store.',
                    icon: MapPin,
                  },
                  {
                    number: '02',
                    title: 'Order',
                    text: 'Customer chooses products and places an order.',
                    icon: ShoppingBag,
                  },
                  {
                    number: '03',
                    title: 'Prepare',
                    text: 'Vendor receives and prepares the order.',
                    icon: Package,
                  },
                  {
                    number: '04',
                    title: 'Deliver',
                    text: 'Rider picks up and delivers the order.',
                    icon: Truck,
                  },
                  {
                    number: '05',
                    title: 'Connect',
                    text: 'Everyone completes the local commerce journey.',
                    icon: Users,
                  },
                ].map((step) => {
                  const Icon = step.icon;

                  return (
                    <motion.div
                      key={step.number}
                      variants={cardHoverVariants}
                      initial="initial"
                      whileHover="hover"
                      transition={smoothTransition}
                      className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-neutral-500">
                          {step.number}
                        </span>

                        <Icon className="w-5 h-5 text-brand-primary" />
                      </div>

                      <h3 className="text-lg font-bold mt-10">
                        {step.title}
                      </h3>

                      <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                        {step.text}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center flex flex-col items-center"
            >
              <motion.h2
                variants={revealVariants}
                className="text-4xl md:text-6xl font-black text-brand-black tracking-tight leading-[1.1]"
              >
                One City.
                <br />
                Infinite Possibilities.
              </motion.h2>

              <motion.p
                variants={revealVariants}
                className="mt-6 text-base md:text-lg text-brand-gray-muted leading-relaxed max-w-2xl"
              >
                RivoCity brings customers, local businesses and delivery
                partners together through one connected city commerce
                platform.
              </motion.p>

              <motion.div
                variants={revealVariants}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  to="/customers"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-brand-black text-white text-sm font-semibold hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore Customer Experience
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/vendors"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-neutral-200 bg-white text-brand-black text-sm font-semibold hover:bg-neutral-50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Become a Vendor
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Apps;