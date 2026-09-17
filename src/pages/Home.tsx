import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, type Transition, type Variants } from 'framer-motion';
import SEO from '../components/SEO';
import { Button } from '../components/Button';
import {
  Activity,
  ArrowRight,
  Bike,
  BookOpen,
  CheckCircle,
  Compass,
  CreditCard,
  Heart,
  HeartHandshake,
  Headphones,
  Home as HomeIcon,
  Layers,
  Lock,
  Navigation,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkle,
  Sparkles,
  Store,
  Truck,
  Tv,
  Users,
  Zap,
  Briefcase,
  Shirt,
} from 'lucide-react';

const smoothTransition: Transition = {
  type: 'tween',
  ease: [0.16, 1, 0.3, 1],
  duration: 0.42,
};

const cardHoverVariants: Variants = {
  initial: { y: 0, scale: 1, borderColor: 'rgba(229,231,235,1)', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' },
  hover: { y: -4, scale: 1.01, borderColor: 'rgba(46,204,113,0.36)', boxShadow: '0 18px 34px -18px rgba(46,204,113,0.16)' },
};

type LoopStep = 'placed' | 'packed' | 'collecting' | 'otp' | 'delivered';

const categories = [
  { icon: ShoppingBag, name: 'Grocery', desc: 'Fresh fruits, vegetables, daily essentials and household items.' },
  { icon: Activity, name: 'Pharmacy', desc: 'Medicines, healthcare products and wellness essentials.' },
  { icon: Tv, name: 'Electronics', desc: 'Mobile accessories, gadgets and home electronics.' },
  { icon: Shirt, name: 'Fashion', desc: 'Clothing, footwear and everyday fashion.' },
  { icon: Heart, name: 'Pet Care', desc: 'Food, toys and essentials for your pets.' },
  { icon: Sparkle, name: 'Beauty', desc: 'Skincare, cosmetics and personal care.' },
  { icon: BookOpen, name: 'Stationery', desc: 'Books, notebooks, office supplies and school essentials.' },
  { icon: HomeIcon, name: 'Home Essentials', desc: 'Kitchen, cleaning and everyday home products.' },
];

const Home: React.FC = () => {
  const [activeStep, setActiveStep] = useState<LoopStep>('placed');
  const navigate = useNavigate();
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sequence: LoopStep[] = ['placed', 'packed', 'collecting', 'otp', 'delivered'];
    let index = 0;
    const interval = window.setInterval(() => {
      index = (index + 1) % sequence.length;
      setActiveStep(sequence[index]);
    }, 3200);
    return () => window.clearInterval(interval);
  }, []);

  const scrollToCategories = () => {
    categoriesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const activeCard = {
    placed: { title: 'Order Placed', description: 'Your order is received and secure.', icon: ShoppingBag, color: 'bg-[#2ECC71]/10 text-brand-primary' },
    packed: { title: 'Marked Packed', description: 'The local store carefully packs your order.', icon: Store, color: 'bg-indigo-50 text-indigo-500' },
    collecting: { title: 'Rider Collect', description: 'A delivery partner picks up your package.', icon: Bike, color: 'bg-[#2ECC71]/10 text-brand-primary' },
    otp: { title: 'Secret OTP Shared', description: 'A safe code is sent to your phone for security.', icon: Lock, color: 'bg-amber-50 text-amber-500' },
    delivered: { title: 'Order Delivered', description: 'Delivered safely. Happy customer and happy store.', icon: CheckCircle, color: 'bg-emerald-500 text-white' },
  }[activeStep];

  const ActiveIcon = activeCard.icon;

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-brand-black selection:bg-brand-primary selection:text-brand-black">
      <SEO
        title="Rivo | One City. Infinite Possibilities."
        description="Discover trusted local businesses, fast local delivery and everything your city has to offer with Rivo."
        canonical="/"
      />

      <section className="relative py-10 sm:py-14 lg:py-20" aria-labelledby="hero-heading">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={smoothTransition} className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#2ECC71]/20 bg-[#2ECC71]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-primary">
                <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-50" /><span className="relative inline-flex h-2 w-2 rounded-full bg-brand-primary" /></span>
                Launching in Baramati
              </motion.div>

              <motion.h1 id="hero-heading" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ ...smoothTransition, delay: 0.05 }} className="max-w-4xl text-balance text-5xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-6xl xl:text-7xl">
                One City.<br /><span className="text-brand-primary">Infinite Possibilities.</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ ...smoothTransition, delay: 0.1 }} className="mt-6 max-w-2xl text-base leading-7 text-brand-gray-muted sm:text-lg">
                Shop from trusted local stores across your city. From groceries and medicines to electronics, stationery and everyday essentials, everything you need is a few taps away.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ ...smoothTransition, delay: 0.16 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button onClick={scrollToCategories} className="px-8 py-4 text-base font-semibold">
                  Explore Rivo <ArrowRight className="h-5 w-5" />
                </Button>
                <Button onClick={() => navigate('/vendors')} variant="outline" className="px-8 py-4 text-base font-semibold">
                  Become a Partner
                </Button>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, scale: 0.985 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...smoothTransition, duration: 0.55, delay: 0.08 }} className="relative mx-auto aspect-[4/5] w-full max-w-[410px] overflow-hidden rounded-[38px] border border-neutral-200 bg-[#FAF9FA] p-5 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.22)]">
                <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[30px] border border-neutral-200 bg-white shadow-sm">
                  <div className="absolute left-1/2 top-0 z-20 h-5 w-32 -translate-x-1/2 rounded-b-2xl bg-brand-black" />
                  <div className="relative flex flex-1 flex-col justify-center overflow-hidden bg-white p-6 pt-10">
                    <motion.div key={activeStep} initial={{ opacity: 0, y: 10, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={smoothTransition} className="relative z-10 mx-auto w-full max-w-[240px] rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-lg">
                      <div className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full ${activeCard.color}`}><ActiveIcon className="h-5 w-5" /></div>
                      <h3 className="mt-3 text-sm font-black">{activeCard.title}</h3>
                      <p className="mt-1 text-[11px] leading-relaxed text-brand-gray-muted">{activeCard.description}</p>
                    </motion.div>
                    <div className="mt-8 flex justify-center gap-1.5">
                      {(Object.keys(activeCard ? { placed: 1, packed: 1, collecting: 1, otp: 1, delivered: 1 } : {}) as LoopStep[]).map((step) => (
                        <div key={step} className={`h-1 rounded-full transition-[width,background-color] duration-300 ${activeStep === step ? 'w-6 bg-brand-primary' : 'w-2 bg-neutral-200'}`} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/20 bg-brand-primary/10 text-brand-primary"><Sparkles className="h-4 w-4" /></div>
              </motion.div>
            </div>
          </div>

          <div className="mt-16 border-t border-neutral-200/80 pt-10 lg:mt-24">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Compass, label: 'First Launch City', value: 'Baramati' },
                { icon: Layers, label: 'Vendor Categories', value: 'Growing Every Day' },
                { icon: Zap, label: 'Local Delivery', value: 'Fast & Reliable' },
                { icon: ShieldCheck, label: 'Payments', value: 'COD & UPI' },
              ].map((item) => (
                <motion.div key={item.label} variants={cardHoverVariants} initial="initial" whileHover="hover" transition={smoothTransition} className="interactive-lift rounded-2xl border border-neutral-200 bg-white p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2ECC71]/10 text-brand-primary"><item.icon className="h-6 w-6 stroke-[1.8]" /></div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-brand-gray-muted">{item.label}</p>
                  <p className="mt-1 text-xl font-extrabold">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={categoriesRef} className="border-t border-neutral-100 bg-white py-20 md:py-28" aria-labelledby="categories-heading">
        <div className="container-custom">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Everything on Demand</span>
            <h2 id="categories-heading" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Everything your city has to offer.</h2>
            <p className="mt-4 text-base leading-7 text-brand-gray-muted sm:text-lg">Shop from trusted local businesses across multiple categories, all in one place.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <motion.div key={category.name} variants={cardHoverVariants} initial="initial" whileHover="hover" transition={smoothTransition} className="interactive-lift flex min-h-[208px] flex-col justify-between rounded-2xl border border-neutral-200/80 bg-[#FAF9FA] p-6">
                <div>
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200/60 bg-white text-brand-primary shadow-sm"><category.icon className="h-5 w-5 stroke-[1.8]" /></div>
                  <h3 className="text-lg font-bold tracking-tight">{category.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-brand-gray-muted">{category.desc}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-brand-primary">Explore <ArrowRight className="h-3.5 w-3.5" /></span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-100 bg-[#FAF9FA] py-20 md:py-28" aria-labelledby="how-it-works-heading">
        <div className="container-custom">
          <div className="mb-16 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Simple Steps</span>
            <h2 id="how-it-works-heading" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Shopping locally has never been easier.</h2>
            <p className="mt-4 text-base leading-7 text-brand-gray-muted sm:text-lg">We bring neighborhood stores straight to you with quick and reliable handoffs.</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 right-8 top-6 hidden h-px bg-neutral-200 lg:block" />
            <div className="relative z-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {[
                { step: '01', title: 'Discover nearby stores', desc: 'Browse trusted local businesses in your city.', icon: Search },
                { step: '02', title: 'Place your order', desc: 'Choose what you need and checkout in minutes.', icon: Smartphone },
                { step: '03', title: 'Store prepares your order', desc: 'Your local store carefully packs everything.', icon: CheckCircle },
                { step: '04', title: 'Delivered to your door', desc: 'Track your order in real time until it arrives.', icon: Truck },
              ].map((item) => (
                <div key={item.step} className="flex flex-col gap-4">
                  <div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-primary bg-white text-sm font-extrabold shadow-sm">{item.step}</div><span className="rounded-full bg-[#2ECC71]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-primary">Step {item.step}</span></div>
                  <div><h3 className="text-lg font-bold tracking-tight">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-brand-gray-muted">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-100 bg-white py-20 md:py-28" aria-labelledby="why-choose-heading">
        <div className="container-custom">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Our Commitment</span>
            <h2 id="why-choose-heading" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Built for modern local commerce.</h2>
            <p className="mt-4 text-base leading-7 text-brand-gray-muted sm:text-lg">A fast, dependable experience that keeps local commerce moving.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Store, title: 'Trusted Local Stores', desc: 'Every store is verified before joining Rivo.' },
              { icon: Truck, title: 'Fast Delivery', desc: 'Quick deliveries from nearby businesses.' },
              { icon: Navigation, title: 'Live Tracking', desc: 'Know where your order is during delivery.' },
              { icon: CreditCard, title: 'Secure Payments', desc: 'Pay online or choose Cash on Delivery.' },
              { icon: HeartHandshake, title: 'Support Local Businesses', desc: 'Every order helps businesses in your own city.' },
              { icon: Headphones, title: 'Friendly Support', desc: 'Get help when you need it.' },
            ].map((feature) => (
              <motion.div key={feature.title} variants={cardHoverVariants} initial="initial" whileHover="hover" transition={smoothTransition} className="interactive-lift rounded-2xl border border-neutral-200 bg-white p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-[#FAF9FA] text-brand-primary"><feature.icon className="h-6 w-6 stroke-[1.8]" /></div>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray-muted">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-100 bg-[#FAF9FA] py-20 md:py-28" aria-labelledby="everyone-heading">
        <div className="container-custom">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Our Community</span>
            <h2 id="everyone-heading" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Built for everyone.</h2>
            <p className="mt-4 text-base leading-7 text-brand-gray-muted sm:text-lg">One city platform for customers, local businesses and delivery partners.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              { icon: Users, title: 'Customers', desc: 'Discover local stores, shop with confidence and get your essentials delivered.', cta: 'Explore App', path: '/apps' },
              { icon: Briefcase, title: 'Vendors', desc: 'Grow your business, reach more customers and manage everything from one place.', cta: 'Become a Partner', path: '/vendors' },
              { icon: Bike, title: 'Riders', desc: 'Deliver locally, stay flexible and build reliable income opportunities.', cta: 'Join RivoCity Rider', path: '/apps' },
            ].map((item) => (
              <motion.div key={item.title} variants={cardHoverVariants} initial="initial" whileHover="hover" transition={smoothTransition} className="interactive-lift flex min-h-[360px] flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-8">
                <div><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2ECC71]/10 text-brand-primary"><item.icon className="h-6 w-6 stroke-[1.8]" /></div><h3 className="mt-6 text-xl font-bold tracking-tight">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-brand-gray-muted">{item.desc}</p></div>
                <Button variant="outline" onClick={() => navigate(item.path)} className="mt-8 w-full py-3.5 font-semibold">{item.cta}<ArrowRight className="h-4 w-4" /></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
