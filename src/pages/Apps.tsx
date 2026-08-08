import React from 'react';
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
} from 'lucide-react';
import SEO from '../components/SEO';

const APPS_PAGE_URL = 'https://rivo-website.pages.dev/apps';

const CUSTOMER_APK =
  'https://github.com/rivocity1-glitch/rivo-website/releases/latest/download/RivoCity.apk';

const RIDER_APK =
  'https://github.com/rivocity1-glitch/rivo-website/releases/latest/download/RivoCity-Rider.apk';
const getQrUrl = (value: string) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=400x400&margin=10&data=${encodeURIComponent(
    value
  )}`;

const Apps: React.FC = () => {
  return (
    <>
      <SEO
        title="RivoCity Apps | One City. Infinite Possibilities."
        description="Explore the RivoCity Customer App, Rider App and Vendor Portal — the connected platform powering local city commerce."
        canonical="/apps"
      />

      <main className="bg-white text-black">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#2ECC71]/5 blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-50 border border-neutral-100 text-xs font-semibold text-neutral-600 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#2ECC71]" />
              The RivoCity ecosystem
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-5xl mx-auto">
              Everything RivoCity,
              <br />
              <span className="text-[#2ECC71]">in one place.</span>
            </h1>

            <p className="mt-7 text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              Shop locally, manage your business, or deliver across your city.
              RivoCity connects every part of the local commerce journey.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#customer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-neutral-800 transition-colors"
              >
                Explore the apps
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#qr"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-neutral-200 text-sm font-semibold hover:bg-neutral-50 transition-colors"
              >
                Get the app QR
                <QrCode className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Ecosystem */}
        <section className="py-20 md:py-28 border-t border-neutral-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2ECC71] mb-4">
                One connected platform
              </p>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Built for every side of local commerce.
              </h2>

              <p className="mt-5 text-neutral-500 leading-relaxed">
                Customers, businesses and delivery partners each have their
                own tools — while working together through the same RivoCity
                ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-3xl border border-neutral-100 bg-neutral-50 p-7">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  <ShoppingBag className="w-6 h-6" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Customer
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  Discover & shop
                </h3>

                <p className="text-sm text-neutral-500 mt-3 leading-relaxed">
                  Find local stores, browse products, place orders and follow
                  your delivery.
                </p>
              </div>

              <div className="rounded-3xl border border-neutral-100 bg-neutral-50 p-7">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  <Store className="w-6 h-6" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Vendor
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  Manage & grow
                </h3>

                <p className="text-sm text-neutral-500 mt-3 leading-relaxed">
                  Manage products, inventory, orders, store timings, offers
                  and business operations.
                </p>
              </div>

              <div className="rounded-3xl border border-neutral-100 bg-neutral-50 p-7">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  <Truck className="w-6 h-6" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Rider
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  Pick up & deliver
                </h3>

                <p className="text-sm text-neutral-500 mt-3 leading-relaxed">
                  Manage assigned deliveries, pickup orders, complete
                  deliveries and track earnings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer App */}
        <section id="customer" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-[2rem] bg-neutral-950 text-white overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 lg:p-16">
                  <div className="w-14 h-14 rounded-2xl bg-[#2ECC71] flex items-center justify-center mb-8">
                    <ShoppingBag className="w-7 h-7 text-white" />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2ECC71]">
                    Customer App
                  </p>

                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3">
                    Your city.
                    <br />
                    Your shopping.
                  </h2>

                  <p className="text-neutral-400 mt-6 leading-relaxed max-w-lg">
                    Discover nearby businesses, browse products, place orders
                    and follow your delivery — all from one RivoCity app.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                    {[
                      'Discover local stores',
                      'Browse products',
                      'Place orders',
                      'Track deliveries',
                      'Manage addresses',
                      'View order history',
                    ].map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-neutral-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row gap-3">
                    <a
                      href={CUSTOMER_APK}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2ECC71] text-white text-sm font-semibold hover:bg-[#27ae60] transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download Customer App
                    </a>

                    <div className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-neutral-800 text-xs text-neutral-500">
                      Android • APK
                    </div>
                  </div>
                </div>

                <div className="min-h-[420px] lg:min-h-full bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center p-10">
                  <div className="w-56 h-[440px] rounded-[2.5rem] border-[8px] border-neutral-700 bg-white shadow-2xl flex flex-col items-center justify-center text-black">
                    <div className="w-16 h-1 rounded-full bg-neutral-300 mb-10" />

                    <ShoppingBag className="w-14 h-14 text-[#2ECC71]" />

                    <p className="font-bold mt-5">
                      RivoCity
                    </p>

                    <p className="text-xs text-neutral-400 mt-1">
                      Customer App
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rider App */}
        <section id="rider" className="py-20 md:py-28 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <div className="w-56 h-[440px] rounded-[2.5rem] border-[8px] border-neutral-800 bg-white shadow-2xl flex flex-col items-center justify-center">
                  <div className="w-16 h-1 rounded-full bg-neutral-300 mb-10" />

                  <Truck className="w-14 h-14 text-[#2ECC71]" />

                  <p className="font-bold mt-5">
                    RivoCity
                  </p>

                  <p className="text-xs text-neutral-400 mt-1">
                    Rider App
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-8">
                  <Truck className="w-7 h-7 text-white" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2ECC71]">
                  Rider App
                </p>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3">
                  Deliver locally.
                  <br />
                  Earn on the move.
                </h2>

                <p className="text-neutral-500 mt-6 leading-relaxed max-w-lg">
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
                      className="flex items-center gap-2 text-sm text-neutral-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71]" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <a
                    href={RIDER_APK}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-neutral-800 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Rider App
                  </a>

                  <div className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-neutral-200 text-xs text-neutral-500">
                    Android • APK
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QR Codes */}
        <section id="qr" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2ECC71] mb-4">
                Scan & download
              </p>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
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

                <div className="mt-6 bg-white rounded-2xl p-4 inline-flex border border-neutral-100">
                  <img
                    src={getQrUrl(CUSTOMER_APK)}
                    alt="QR code for RivoCity Customer App"
                    width={220}
                    height={220}
                    className="w-52 h-52 md:w-56 md:h-56"
                    loading="lazy"
                  />
                </div>

                <a
                  href={CUSTOMER_APK}
                  className="inline-flex items-center justify-center gap-2 mt-5 px-5 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Customer App
                </a>
              </div>

              {/* Rider QR */}
              <div className="rounded-3xl border border-neutral-100 bg-white p-7 text-center shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold">
                  RivoCity Rider
                </h3>

                <p className="text-sm text-neutral-500 mt-2 min-h-[40px]">
                  Direct QR for the Rider App APK.
                </p>

                <div className="mt-6 bg-white rounded-2xl p-4 inline-flex border border-neutral-100">
                  <img
                    src={getQrUrl(RIDER_APK)}
                    alt="QR code for RivoCity Rider App"
                    width={220}
                    height={220}
                    className="w-52 h-52 md:w-56 md:h-56"
                    loading="lazy"
                  />
                </div>

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

        {/* Vendor Portal */}
        <section id="vendor" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-[2rem] border border-neutral-100 bg-white shadow-sm p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#2ECC71]/10 flex items-center justify-center mb-8">
                    <Store className="w-7 h-7 text-[#2ECC71]" />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2ECC71]">
                    Vendor Portal
                  </p>

                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3">
                    Run your business
                    <br />
                    with RivoCity.
                  </h2>

                  <p className="text-neutral-500 mt-6 leading-relaxed max-w-lg">
                    Manage your store, products, inventory, orders, offers,
                    banners, analytics and settlements from the RivoCity Vendor
                    Portal.
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
                        className="px-3 py-2 rounded-full bg-neutral-50 border border-neutral-100 text-xs font-medium text-neutral-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://vendorportal-7kq.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-neutral-800 transition-colors"
                  >
                    Open Vendor Portal
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="rounded-3xl bg-neutral-50 border border-neutral-100 p-7">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <Store className="w-5 h-5" />
                    </div>

                    <div>
                      <p className="font-semibold text-sm">
                        RivoCity Vendor
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
                      <div
                        key={title}
                        className="bg-white rounded-2xl p-4 border border-neutral-100"
                      >
                        <p className="text-sm font-semibold">
                          {title}
                        </p>

                        <p className="text-xs text-neutral-400 mt-1">
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey */}
        <section
          id="journey"
          className="py-20 md:py-28 bg-neutral-950 text-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2ECC71] mb-4">
                The RivoCity journey
              </p>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                One order.
                <br />
                Three connected experiences.
              </h2>

              <p className="mt-5 text-neutral-400 leading-relaxed">
                RivoCity connects the customer who orders, the vendor who
                prepares, and the rider who delivers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-14">
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
                  <div
                    key={step.number}
                    className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-neutral-500">
                        {step.number}
                      </span>

                      <Icon className="w-5 h-5 text-[#2ECC71]" />
                    </div>

                    <h3 className="text-lg font-bold mt-10">
                      {step.title}
                    </h3>

                    <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              One City.
              <br />
              Infinite Possibilities.
            </h2>

            <p className="mt-5 text-neutral-500 max-w-xl mx-auto leading-relaxed">
              RivoCity brings customers, local businesses and delivery
              partners together through one connected city commerce platform.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/customers"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-neutral-800 transition-colors"
              >
                Explore Customer Experience
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/vendors"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-neutral-200 text-sm font-semibold hover:bg-neutral-50 transition-colors"
              >
                Become a Vendor
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Apps;
