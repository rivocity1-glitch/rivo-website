import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, type Variants, type Transition } from 'framer-motion';
import SEO from "../components/SEO";
import { Button } from '../components/Button';
import { 
  ArrowRight, 
  Smartphone, 
  Store, 
  Navigation, 
  Sparkles, 
  Compass, 
  Layers, 
  Zap, 
  ShieldCheck,
  ShoppingBag,
  Activity, 
  Tv,
  BookOpen,
  Heart,
  Sparkle,
  Home as HomeIcon,
  Search,
  CheckCircle,
  Truck,
  CreditCard,
  HeartHandshake,
  Headphones,
  Users,
  Briefcase,
  Bike,
  Globe,
  Lock,
  Shirt
} from 'lucide-react';

// Premium high-end transition: ultra-smooth, lightweight ease-out
const smoothTransition: Transition = {
  type: "tween",
  ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier (Stripe/Apple style)
  duration: 0.6
};

// Unified premium hover interaction for cards
const cardHoverVariants: Variants = {
  initial: { 
    y: 0, 
    scale: 1, 
    borderColor: "rgba(229, 231, 235, 1)", 
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.02)" 
  },
  hover: { 
    y: -6, 
    scale: 1.015, 
    borderColor: "rgba(46, 204, 113, 0.4)", 
    boxShadow: "0 16px 32px -12px rgba(46, 204, 113, 0.12)" 
  }
};


type LoopStep = 'placed' | 'packed' | 'collecting' | 'otp' | 'delivered';

const Home: React.FC = () => {
  const [activeStep, setActiveStep] = useState<LoopStep>('placed');
  const navigate = useNavigate();
  const categoriesRef = useRef<HTMLDivElement>(null);

  const scrollToCategories = () => {
    categoriesRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const navigateToPartner = () => {
    navigate('/vendors');
  };

  // Infinite, non-overlapping clean loop simulation without glitchy trail jumps
  useEffect(() => {
    const sequence: LoopStep[] = ['placed', 'packed', 'collecting', 'otp', 'delivered'];
    let current = 0;
    const interval = setInterval(() => {
      current = (current + 1) % sequence.length;
      setActiveStep(sequence[current]);
    }, 3000); // Calm 3-second cycle interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden selection:bg-brand-primary selection:text-brand-black">
      <SEO
        title="Rivo | One City. Infinite Possibilities."
        description="Discover trusted local businesses, fast local delivery and everything your city has to offer with Rivo."
        canonical="/"
      />
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 lg:pb-32 animate-fade-in" aria-labelledby="hero-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* HERO LEFT: TEXT & ACTIONS */}
            <div className="lg:col-span-7 flex flex-col space-y-8 text-left max-w-2xl lg:max-w-none">
              
              {/* LAUNCH BADGE */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center self-start gap-2 px-4 py-2 bg-[#2ECC71]/10 border border-[#2ECC71]/20 rounded-full text-xs font-semibold tracking-wider text-brand-primary uppercase"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                </span>
                Launching in Baramati
              </motion.div>

              {/* MAIN HEADING */}
              <div className="space-y-4">
                <motion.h1
                  id="hero-heading"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-brand-black leading-[1.08]"
                >
                  One City.<br />
                  <span className="text-brand-primary">Infinite Possibilities.</span>
                </motion.h1>
              </div>

              {/* SUPPORTING PARAGRAPH */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-base sm:text-lg lg:text-xl text-brand-gray-muted leading-relaxed font-normal"
              >
                Shop from trusted local stores across your city. From groceries and medicines to electronics, stationery and everyday essentials, everything you need is just a few taps away.
              </motion.p>

              {/* HERO BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <Button onClick={scrollToCategories} variant="primary" className="px-8 py-4 text-base font-semibold shadow-md shadow-brand-primary/10">
                  Explore Rivo <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
                <Button onClick={navigateToPartner} variant="outline" className="px-8 py-4 text-base font-semibold">
                  Become a Partner
                </Button>
              </motion.div>

            </div>

            {/* HERO RIGHT: PREMIUM SMARTPHONE CONTAINER */}
            <div className="lg:col-span-5 flex justify-center items-center relative min-h-[480px] lg:min-h-[580px] w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative w-full max-w-[400px] aspect-[4/5] bg-[#FAF9FA] rounded-[40px] border border-neutral-200 p-6 shadow-2xl flex flex-col overflow-hidden group"
              >
                {/* Minimal Grid Backdrop */}
                <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />

                {/* Smartphone Device Mock */}
                <div className="relative w-full h-full bg-white rounded-[32px] border border-neutral-200 shadow-xs overflow-hidden flex flex-col">
                  
                  {/* Phone Speaker Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-brand-black rounded-b-2xl z-20 flex justify-center items-center">
                    <div className="w-12 h-1 bg-neutral-800 rounded-full" />
                  </div>

                  {/* App Screen Framework */}
                  <div className="flex-1 flex flex-col p-6 pt-10 relative overflow-hidden bg-white justify-center">
                    
                    {/* Abstract Content Metric Geometry Lines */}
                    <div className="absolute inset-0 bg-neutral-50/20 flex flex-col justify-between p-4 pointer-events-none">
                      <div className="absolute bottom-0 left-0 right-0 h-28 flex items-end justify-between px-6 opacity-10 select-none">
                        <div className="w-10 h-16 bg-neutral-400 rounded-t-md" />
                        <div className="w-14 h-24 bg-neutral-400 rounded-t-md" />
                        <div className="w-8 h-12 bg-neutral-400 rounded-t-md" />
                        <div className="w-12 h-20 bg-neutral-400 rounded-t-md" />
                      </div>
                    </div>

                    {/* INTERACTIVE COMPONENT SWITCHBOARD */}
                    <div className="relative z-10 w-full flex justify-center px-2">
                      
                      {activeStep === 'placed' && (
                        <div className="w-full max-w-[240px] bg-white border border-neutral-200 rounded-2xl p-6 shadow-lg text-center flex flex-col items-center space-y-3">
                          <div className="w-10 h-10 rounded-full bg-[#2ECC71]/10 flex items-center justify-center text-brand-primary">
                            <ShoppingBag className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-brand-black">Order Placed</h4>
                            <p className="text-[11px] text-brand-gray-muted mt-1 leading-relaxed">Your order is received and secure.</p>
                          </div>
                        </div>
                      )}

                      {activeStep === 'packed' && (
                        <div className="w-full max-w-[240px] bg-white border border-neutral-200 rounded-2xl p-6 shadow-lg text-center flex flex-col items-center space-y-3">
                          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
                            <Store className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-brand-black">Marked Packed</h4>
                            <p className="text-[11px] text-brand-gray-muted mt-1 leading-relaxed">The local store carefully packs your order.</p>
                          </div>
                        </div>
                      )}

                      {activeStep === 'collecting' && (
                        <div className="w-full max-w-[240px] bg-white border border-neutral-200 rounded-2xl p-6 shadow-lg text-center flex flex-col items-center space-y-3">
                          <div className="w-10 h-10 rounded-full bg-[#2ECC71]/10 flex items-center justify-center text-brand-primary">
                            <Bike className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-brand-black">Rider Collect</h4>
                            <p className="text-[11px] text-brand-gray-muted mt-1 leading-relaxed">A delivery partner picks up your package.</p>
                          </div>
                        </div>
                      )}

                      {activeStep === 'otp' && (
                        <div className="w-full max-w-[240px] bg-white border border-neutral-200 rounded-2xl p-6 shadow-lg text-center flex flex-col items-center space-y-3">
                          <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                            <Lock className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-brand-black">Secret OTP Shared</h4>
                            <p className="text-[11px] text-brand-gray-muted mt-1 leading-relaxed">A safe code is sent to your phone for security.</p>
                          </div>
                        </div>
                      )}

                      {activeStep === 'delivered' && (
                        <div className="w-full max-w-[240px] bg-white border border-neutral-200 rounded-2xl p-6 shadow-lg text-center flex flex-col items-center space-y-3">
                          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                            <CheckCircle className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-brand-black">Order Delivered</h4>
                            <p className="text-[11px] text-brand-gray-muted mt-1 leading-relaxed">Delivered safely. Happy customer and happy store.</p>
                          </div>
                        </div>
                      )}

                    </div>

                    {/* MINIMAL PROGRESS STEP SLIDER DOTS */}
                    <div className="flex justify-center gap-1.5 mt-8 z-10">
                      {['placed', 'packed', 'collecting', 'otp', 'delivered'].map((s) => (
                        <div 
                          key={s} 
                          className={`h-1 rounded-full transition-all duration-300 ${activeStep === s ? 'w-6 bg-brand-primary' : 'w-2 bg-neutral-200'}`} 
                        />
                      ))}
                    </div>

                  </div>

                </div>

                {/* Aesthetic Decorative Accent */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20 text-brand-primary">
                  <Sparkles className="w-4 h-4" />
                </div>
              </motion.div>
            </div>

          </div>

          {/* BOTTOM STATS COMPONENT */}
          <div className="mt-20 lg:mt-28 border-t border-neutral-200/80 pt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* CARD 1: First Launch City */}
              <motion.div
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
                transition={smoothTransition}
                className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col space-y-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2ECC71]/10 flex items-center justify-center text-[#2ECC71]">
                  <Compass className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-gray-muted font-bold">First Launch City</p>
                  <p className="text-xl font-extrabold text-brand-black mt-1">Baramati</p>
                </div>
              </motion.div>

              {/* CARD 2: Vendor Categories */}
              <motion.div
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
                transition={smoothTransition}
                className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col space-y-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2ECC71]/10 flex items-center justify-center text-[#2ECC71]">
                  <Layers className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-gray-muted font-bold">Vendor Categories</p>
                  <p className="text-xl font-extrabold text-brand-black mt-1">Growing Every Day</p>
                </div>
              </motion.div>

              {/* CARD 3: Local Delivery */}
              <motion.div
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
                transition={smoothTransition}
                className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col space-y-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2ECC71]/10 flex items-center justify-center text-[#2ECC71]">
                  <Zap className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-gray-muted font-bold">Local Delivery</p>
                  <p className="text-xl font-extrabold text-brand-black mt-1">Fast & Reliable</p>
                </div>
              </motion.div>

              {/* CARD 4: Payments */}
              <motion.div
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
                transition={smoothTransition}
                className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col space-y-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2ECC71]/10 flex items-center justify-center text-[#2ECC71]">
                  <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-gray-muted font-bold">Payments</p>
                  <p className="text-xl font-extrabold text-brand-black mt-1">COD & UPI</p>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= 1. CATEGORIES SECTION ================= */}
      <section ref={categoriesRef} className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="categories-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Everything on Demand</span>
            <h2 id="categories-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Everything your city has to offer.
            </h2>
            <p className="mt-4 text-base md:text-lg text-brand-gray-muted font-light leading-relaxed">
              Shop from trusted local businesses across multiple categories, all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: ShoppingBag, name: "Grocery", desc: "Fresh fruits, vegetables, daily essentials and household items." },
              { icon: Activity, name: "Pharmacy", desc: "Medicines, healthcare products and wellness essentials." },
              { icon: Tv, name: "Electronics", desc: "Mobile accessories, gadgets and home electronics." },
              { icon: Shirt, name: "Fashion", desc: "Clothing, footwear and everyday fashion." },
              { icon: Heart, name: "Pet Care", desc: "Food, toys and essentials for your pets." },
              { icon: Sparkle, name: "Beauty", desc: "Skincare, cosmetics and personal care." },
              { icon: BookOpen, name: "Stationery", desc: "Books, notebooks, office supplies and school essentials." },
              { icon: HomeIcon, name: "Home Essentials", desc: "Kitchen, cleaning and everyday home products." }
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
                transition={smoothTransition}
                className="bg-[#FAF9FA] border border-neutral-200/80 rounded-2xl p-6 flex flex-col justify-between h-[210px] cursor-pointer"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/60 flex items-center justify-center text-brand-primary mb-5 shadow-xs">
                    <cat.icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-black tracking-tight">{cat.name}</h3>
                  <p className="text-xs text-brand-gray-muted mt-2 leading-relaxed font-normal">{cat.desc}</p>
                </div>
                <div className="flex justify-end pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-[10px] text-brand-primary font-bold uppercase tracking-widest flex items-center gap-1">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 2. HOW IT WORKS SECTION ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100" aria-labelledby="how-it-works-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-20 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Simple Steps</span>
            <h2 id="how-it-works-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Shopping locally has never been easier.
            </h2>
            <p className="mt-4 text-base md:text-lg text-brand-gray-muted font-light leading-relaxed">
              We bring your neighborhood stores straight to you with quick and reliable handoffs.
            </p>
          </div>

          <div className="relative">
            {/* Background connecting line (Desktop only) */}
            <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-0.5 bg-neutral-200/80 -z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {[
                { step: "01", title: "Discover nearby stores", desc: "Browse trusted local businesses in your city.", icon: Search },
                { step: "02", title: "Place your order", desc: "Choose what you need and checkout in minutes.", icon: Smartphone },
                { step: "03", title: "Store prepares your order", desc: "Your local store carefully packs everything.", icon: CheckCircle },
                { step: "04", title: "Delivered to your door", desc: "Track your order in real time until it arrives.", icon: Truck }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col space-y-4">
                  {/* Step bubble */}
                  <div className="flex items-center justify-between lg:justify-start lg:gap-4">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-brand-primary flex items-center justify-center font-extrabold text-sm text-brand-black shadow-xs relative">
                      {item.step}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary bg-[#2ECC71]/10 px-2.5 py-1 rounded-full">
                      Step {item.step}
                    </span>
                  </div>
                  
                  {/* Step Content */}
                  <div className="pt-2">
                    <h3 className="text-lg font-bold text-brand-black tracking-tight">{item.title}</h3>
                    <p className="text-sm text-brand-gray-muted mt-2 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. WHY CHOOSE RIVO SECTION ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="why-choose-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Our Commitment</span>
            <h2 id="why-choose-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Built for modern local commerce.
            </h2>
            <p className="mt-4 text-base md:text-lg text-brand-gray-muted font-light leading-relaxed">
              Enjoy a fast, safe, and dependable shopping experience that keeps your local community thriving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Store, title: "Trusted Local Stores", desc: "Every store is verified before joining Rivo." },
              { icon: Truck, title: "Fast Delivery", desc: "Quick deliveries from nearby businesses." },
              { icon: Navigation, title: "Live Tracking", desc: "Know exactly where your order is." },
              { icon: CreditCard, title: "Secure Payments", desc: "Pay online or choose Cash on Delivery." },
              { icon: HeartHandshake, title: "Support Local Businesses", desc: "Every order helps businesses in your own city." },
              { icon: Headphones, title: "Friendly Support", desc: "We're here whenever you need help." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
                transition={smoothTransition}
                className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col space-y-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF9FA] border border-neutral-200/60 flex items-center justify-center text-brand-primary shadow-2xs">
                  <feature.icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-black tracking-tight">{feature.title}</h3>
                  <p className="text-sm text-brand-gray-muted mt-2 leading-relaxed font-light">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 4. BUILT FOR EVERYONE SECTION ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100" aria-labelledby="everyone-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Our Community</span>
            <h2 id="everyone-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Built for everyone.
            </h2>
            <p className="mt-4 text-base md:text-lg text-brand-gray-muted font-light leading-relaxed">
              Whether you are a neighbor buying groceries, a store owner, or a driver on the road, we make things easy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Customers Column */}
            <motion.div
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              transition={smoothTransition}
              className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between h-[420px] cursor-pointer"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[#2ECC71]/10 flex items-center justify-center text-[#2ECC71]">
                  <Users className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-black tracking-tight">Customers</h3>
                  <p className="text-sm text-brand-gray-muted mt-3 leading-relaxed font-light">
                    Discover local stores, shop with confidence and get everything delivered quickly.
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full py-3.5 mt-6 font-semibold">
                Explore App <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>

            {/* Vendors Column */}
            <motion.div
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              transition={smoothTransition}
              className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between h-[420px] cursor-pointer"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[#2ECC71]/10 flex items-center justify-center text-[#2ECC71]">
                  <Briefcase className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-black tracking-tight">Vendors</h3>
                  <p className="text-sm text-brand-gray-muted mt-3 leading-relaxed font-light">
                    Grow your business, reach more customers and manage everything from one place.
                  </p>
                </div>
              </div>
              <Button onClick={navigateToPartner} variant="outline" className="w-full py-3.5 mt-6 font-semibold">
                Register Store <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>

            {/* Riders Column */}
            <motion.div
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              transition={smoothTransition}
              className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between h-[420px] cursor-pointer"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[#2ECC71]/10 flex items-center justify-center text-[#2ECC71]">
                  <Bike className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-black tracking-tight">Riders</h3>
                  <p className="text-sm text-brand-gray-muted mt-3 leading-relaxed font-light">
                    Earn on your schedule while delivering orders across your city.
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full py-3.5 mt-6 font-semibold">
                Join Network <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= 5. LAUNCH CITIES SECTION ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="cities-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Where We Are</span>
            <h2 id="cities-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Starting locally. Growing city by city.
            </h2>
            <p className="mt-4 text-base md:text-lg text-brand-gray-muted font-light leading-relaxed">
              We focus on building strong local connections before expanding to new towns nearby.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Active City Feature (Baramati) */}
            <div className="md:col-span-5">
              <motion.div
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
                transition={smoothTransition}
                className="bg-[#FAF9FA] border-2 border-brand-primary rounded-3xl p-8 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-[#2ECC71]/10 text-brand-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-brand-primary/20">
                  Launching Soon
                </div>
                <div className="w-12 h-12 rounded-2xl bg-brand-primary text-brand-black flex items-center justify-center font-extrabold text-xl mb-6 shadow-md">
                  BM
                </div>
                <h3 className="text-2xl font-black text-brand-black tracking-tight">Baramati</h3>
                <p className="text-sm text-brand-gray-muted mt-3 font-light leading-relaxed">
                  Our first launch city. We are building a stronger local shopping experience for customers, businesses and delivery partners.
                </p>
                <div className="flex gap-2.5 mt-6 pt-6 border-t border-neutral-200">
                  <div className="text-xs font-bold text-brand-black bg-white py-1.5 px-3 rounded-lg border border-neutral-200">
                    🟢 First Launch
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Coming Soon Cities Grid */}
            <div className="md:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Indapur", code: "IN" },
                { name: "Bhigwan", code: "BH" },
                { name: "Nira", code: "NR" }
              ].map((city, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-neutral-200/80 rounded-2xl p-5 flex flex-col justify-between h-[150px] opacity-75 hover:opacity-100 transition-opacity duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-400 font-extrabold tracking-wider">{city.code}</span>
                    <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest bg-neutral-50 border border-neutral-100 px-2.5 py-1 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-black tracking-tight">{city.name}</h4>
                    <p className="text-[10px] text-brand-gray-muted mt-1">Preparing to launch...</p>
                  </div>
                </div>
              ))}
              
              {/* Dynamic And Many More Card */}
              <div className="bg-[#FAF9FA] border border-dashed border-neutral-300 rounded-2xl p-5 flex flex-col justify-between h-[150px]">
                <div className="flex items-center justify-between">
                  <Globe className="w-5 h-5 text-brand-primary" />
                  <span className="text-[9px] text-brand-primary font-bold uppercase tracking-widest bg-[#2ECC71]/10 px-2.5 py-1 rounded-full">
                    Future Cities
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-black tracking-tight">And many more</h4>
                  <p className="text-[10px] text-brand-gray-muted mt-1">Expanding across nearby regions.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 6. FINAL CALL TO ACTION SECTION ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-b border-neutral-100" aria-labelledby="cta-heading">
        <div className="container-custom">
          
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-8">
            
            <h2 id="cta-heading" className="text-4xl md:text-6xl font-black text-brand-black tracking-tight leading-[1.1]">
              Join the future <br className="hidden md:block" />
              of local commerce.
            </h2>
            
            <p className="text-base md:text-lg text-brand-gray-muted font-light leading-relaxed max-w-2xl">
              Whether you're shopping, growing your business or looking for flexible earning opportunities, Rivo is built to bring your city together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <Button onClick={scrollToCategories} variant="primary" className="px-10 py-4 text-base font-semibold shadow-md shadow-brand-primary/10">
                Explore Rivo <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button onClick={navigateToPartner} variant="outline" className="px-10 py-4 text-base font-semibold bg-white">
                Become a Partner
              </Button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;