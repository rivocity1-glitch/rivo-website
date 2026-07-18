import React, { useState } from 'react';
import { motion, type Variants, type Transition } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  TrendingUp, 
  ShieldCheck,
  ShoppingBag,
  Store,
  CreditCard,
  Headphones,
  Users,
  Smartphone,
  ChevronDown,
  Package,
  Clock,
  Settings
} from 'lucide-react';

const smoothTransition: Transition = {
  type: "tween",
  ease: [0.16, 1, 0.3, 1],
  duration: 0.6
};

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

const iconAnimationVariants: Variants = {
  initial: { scale: 1, y: 0 },
  hover: { 
    scale: 1.06, 
    y: -2,
    transition: { type: "spring", stiffness: 400, damping: 25 } 
  }
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-neutral-200 rounded-2xl bg-white overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex items-center justify-between font-bold text-brand-black hover:text-brand-primary transition-colors cursor-pointer"
      >
        <span>{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-primary' : 'text-neutral-400'}`} />
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-sm text-brand-gray-muted leading-relaxed font-light border-t border-neutral-50 pt-3">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

const Vendors: React.FC = () => {
  const navigate = useNavigate();

  const handleRegisterRedirect = () => {
    window.open('http://localhost:5174/login?view=register', '_blank', 'noopener,noreferrer');
  };

  const handleViewPricing = () => {
    navigate('/pricing');
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden selection:bg-brand-primary selection:text-brand-black">
      
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 lg:pb-32 animate-fade-in" aria-labelledby="vendors-hero-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* HERO LEFT: TEXT & ACTIONS */}
            <div className="lg:col-span-7 flex flex-col space-y-8 text-left max-w-2xl lg:max-w-none">
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center self-start gap-2 px-4 py-2 bg-[#2ECC71]/10 border border-[#2ECC71]/20 rounded-full text-xs font-semibold tracking-wider text-brand-primary uppercase"
              >
                For Local Businesses
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  id="vendors-hero-heading"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-brand-black leading-[1.08]"
                >
                  Grow your business <br />
                  <span className="text-brand-primary">with Rivo.</span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-base sm:text-lg lg:text-xl text-brand-gray-muted leading-relaxed font-normal"
              >
                Reach more local customers, manage your store with ease and grow your business through one simple platform built for your city.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <Button onClick={handleRegisterRedirect} variant="primary" className="px-8 py-4 text-base font-semibold shadow-md shadow-brand-primary/10">
                  Register Your Store <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
                <Button onClick={handleViewPricing} variant="outline" className="px-8 py-4 text-base font-semibold">
                  View Pricing
                </Button>
              </motion.div>

            </div>

            {/* HERO RIGHT: PREMIUM BUSINESS DASHBOARD ILLUSTRATION */}
            <div className="lg:col-span-5 flex justify-center items-center relative min-h-[480px] lg:min-h-[580px] w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative w-full max-w-[400px] aspect-[4/5] bg-[#FAF9FA] rounded-[40px] border border-neutral-200 p-6 shadow-2xl flex flex-col overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />

                {/* Dashboard Frame */}
                <div className="relative w-full h-full bg-white rounded-[32px] border border-neutral-200 shadow-xs overflow-hidden flex flex-col p-5 space-y-4">
                  
                  {/* Top Merchant Status Header */}
                  <div className="bg-neutral-50 border border-neutral-200/60 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1 bg-[#2ECC71]/10 rounded-md text-brand-primary">
                        <Store className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-brand-black">Merchant Hub</span>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
                  </div>

                  {/* Growth Metric Widget */}
                  <div className="border border-neutral-100 rounded-xl p-4 flex flex-col space-y-2 bg-white shadow-3xs">
                    <span className="text-[10px] uppercase tracking-wider text-brand-gray-muted font-bold">Total Sales Growth</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-brand-black">↑ 42.8%</span>
                      <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">This Month</span>
                    </div>
                    {/* Clean Vector Growth Chart Curve Line */}
                    <svg className="w-full h-10 mt-1" viewBox="0 0 100 40" fill="none">
                      <path d="M0 35 Q25 30, 50 15 T100 5" stroke="#2ECC71" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M0 35 Q25 30, 50 15 T100 5 L100 40 L0 40 Z" fill="url(#gradient)" opacity="0.06" />
                      <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#2ECC71"/><stop offset="100%" stopColor="#2ECC71" stopOpacity="0"/></linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Order Feed List Layer */}
                  <div className="flex-1 flex flex-col space-y-2.5 overflow-hidden justify-end">
                    {[
                      { item: "Grocery Delivery", price: "New Order", icon: ShoppingBag, color: "bg-orange-50 text-orange-500" },
                      { item: "Electronics Dispatch", price: "Ready to Pack", icon: Layers, color: "bg-indigo-50 text-indigo-500" }
                    ].map((row, idx) => (
                      <div key={idx} className="bg-white border border-neutral-100 p-3 rounded-xl flex items-center justify-between shadow-3xs">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${row.color}`}>
                            <row.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-brand-black">{row.item}</p>
                            <p className="text-[10px] text-brand-gray-muted mt-0.5">{row.price}</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-brand-black bg-neutral-50 px-2 py-1 rounded border border-neutral-100">Manage</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20 text-brand-primary">
                  <Sparkles className="w-4 h-4" />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: WHY JOIN RIVO ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="why-join-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Store Advantages</span>
            <h2 id="why-join-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Everything your business needs to grow.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Reach More Customers", desc: "Connect with people searching for trusted local stores." },
              { icon: Smartphone, title: "Easy Store Management", desc: "Manage products, prices and inventory from one place." },
              { icon: Clock, title: "Real-Time Orders", desc: "Receive and manage new orders instantly." },
              { icon: CreditCard, title: "Secure Settlements", desc: "Track earnings and receive transparent settlements." },
              { icon: TrendingUp, title: "Business Insights", desc: "Understand your store's performance with useful analytics." },
              { icon: Headphones, title: "Dedicated Support", desc: "Our team is here whenever you need help." }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={smoothTransition}
                  className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col space-y-4 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FAF9FA] border border-neutral-200/60 flex items-center justify-center text-brand-primary shadow-2xs">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-black tracking-tight">{card.title}</h3>
                    <p className="text-sm text-brand-gray-muted mt-2 leading-relaxed font-light">{card.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: MANAGE YOUR STORE WITH CONFIDENCE ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100" aria-labelledby="confidence-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-20 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Complete Control</span>
            <h2 id="confidence-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Manage your store with confidence.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Package, title: "Products", desc: "Easily add, update and organise your products." },
              { icon: Layers, title: "Inventory", desc: "Keep stock updated and avoid selling unavailable items." },
              { icon: ShoppingBag, title: "Orders", desc: "Manage every order from confirmation to delivery." },
              { icon: TrendingUp, title: "Analytics", desc: "Understand sales, customer trends and business growth." },
              { icon: CreditCard, title: "Finance", desc: "Track settlements, earnings and transaction history." },
              { icon: Settings, title: "Store Profile", desc: "Manage your business information, timings and availability." }
            ].map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={smoothTransition}
                  className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col space-y-4 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FAF9FA] border border-neutral-200/60 flex items-center justify-center text-brand-primary shadow-3xs">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-brand-black tracking-tight">{feat.title}</h3>
                    <p className="text-xs text-brand-gray-muted mt-1.5 leading-relaxed font-light">{feat.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: HOW IT WORKS ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="how-it-works-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-20 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Onboarding Steps</span>
            <h2 id="how-it-works-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Start selling in four simple steps.
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-0.5 bg-neutral-200/80 -z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {[
                { step: "01", title: "Register your business", desc: "Submit your basic store information and contact information online." },
                { step: "02", title: "Complete verification", desc: "Our local support representative verifies your physical store structure." },
                { step: "03", title: "Upload your products", desc: "List your inventory item prices and adjust available catalog details." },
                { step: "04", title: "Start receiving orders", desc: "Open your digital doors to receive orders immediately from town users." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between lg:justify-start lg:gap-4">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-brand-primary flex items-center justify-center font-extrabold text-sm text-brand-black shadow-xs relative">
                      {item.step}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary bg-[#2ECC71]/10 px-2.5 py-1 rounded-full">
                      Step {item.step}
                    </span>
                  </div>
                  
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

      {/* ================= SECTION 5: BUILT FOR LOCAL BUSINESSES ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100" aria-labelledby="built-for-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Tailored Architecture</span>
            <h2 id="built-for-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Built for local businesses.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Store, title: "Designed for Local Stores", desc: "Built specifically for neighbourhood businesses." },
              { icon: CreditCard, title: "Fair Pricing", desc: "Simple plans with transparent pricing." },
              { icon: Smartphone, title: "Easy to Use", desc: "No complicated setup." },
              { icon: ShieldCheck, title: "Grow With Confidence", desc: "Focus on serving customers while we handle the technology." }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={smoothTransition}
                  className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col space-y-3 cursor-pointer"
                >
                  <motion.div variants={iconAnimationVariants} className="text-brand-primary text-3xl">
                    <Icon className="w-8 h-8 stroke-[1.5]" />
                  </motion.div>
                  <div>
                    <h3 className="text-base font-bold text-brand-black tracking-tight">{card.title}</h3>
                    <p className="text-xs text-brand-gray-muted mt-1.5 leading-relaxed font-light">{card.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 6: VENDOR SUCCESS STARTS HERE ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100">
        <div className="container-custom">
          <div className="bg-[#FAF9FA] border border-neutral-200 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold">Unlocking Potential</span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-black tracking-tight leading-tight">
              More visibility.<br />More customers. More growth.
            </h2>
            <p className="text-base md:text-lg text-brand-gray-muted font-light leading-relaxed max-w-2xl">
              Whether you're a grocery store, pharmacy, electronics shop, fashion retailer or any local business, Rivo helps you reach more people in your city.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="faq-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left mx-auto md:text-center flex flex-col md:items-center">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Merchant Inquiries</span>
            <h2 id="faq-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <FAQItem 
              question="How do I register?" 
              answer="Click any 'Register Your Store' button across this dashboard link and fill out your name, contact specifics, and general venue style." 
            />
            <FAQItem 
              question="How long does approval take?" 
              answer="Our on-the-ground support operations agent usually schedules a verification visit within 24 to 48 hours." 
            />
            <FAQItem 
              question="Can I manage my own products?" 
              answer="Yes. Through your dedicated mobile hub dashboard app interface, you can instantly modify retail list pricing and stock metrics." 
            />
            <FAQItem 
              question="How do settlements work?" 
              answer="Earnings clear transparently and flow into your specified bank choices on a reliable, routine settlement cycle." 
            />
            <FAQItem 
              question="Which businesses can join?" 
              answer="Any neighbourhood enterprise with a physical store presence can apply—ranging from local grocery markets to pharmacies and stationers." 
            />
          </div>

        </div>
      </section>

      {/* ================= SECTION 8: FINAL CTA ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-b border-neutral-100" aria-labelledby="vendors-cta-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-8">
            
            <h2 id="vendors-cta-heading" className="text-4xl md:text-6xl font-black text-brand-black tracking-tight leading-[1.1]">
              Ready to grow <br />your business?
            </h2>
            
            <p className="text-base md:text-lg text-brand-gray-muted font-light leading-relaxed max-w-2xl">
              Join a growing network of trusted local businesses and start reaching more customers with Rivo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <Button onClick={handleRegisterRedirect} variant="primary" className="px-10 py-4 text-base font-semibold shadow-md shadow-brand-primary/10">
                Register Your Store <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button onClick={handleViewPricing} variant="outline" className="px-10 py-4 text-base font-semibold bg-white">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Vendors;