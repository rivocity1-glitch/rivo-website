import React, { useState } from 'react';
import { motion, type Variants, type Transition } from 'framer-motion';
import { Button } from '../components/Button';
import { 
  ArrowRight, 
  Compass, 
  ShoppingBag,
  Activity, 
  Tv,
  Shirt,
  Heart,
  Sparkle,
  BookOpen,
  Home as HomeIcon,
  Search,
  CheckCircle,
  Truck,
  CreditCard,
  HeartHandshake,
  Headphones,
  ChevronDown,
  Navigation,
  History
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
      {isOpen && (
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm text-brand-gray-muted leading-relaxed font-light border-t border-neutral-50 pt-3">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const Customers: React.FC = () => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden selection:bg-brand-primary selection:text-brand-black">
      
      {/* ================= SECTION 1: HERO (LEFT-ALIGNED TYPOGRAPHY) ================= */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 lg:pb-32" aria-labelledby="customers-hero-heading">
        <div className="container-custom">
          <div className="max-w-3xl text-left flex flex-col space-y-8">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center self-start gap-2 px-4 py-2 bg-[#2ECC71]/10 border border-[#2ECC71]/20 rounded-full text-xs font-semibold tracking-wider text-brand-primary uppercase"
            >
              For Customers
            </motion.div>

            {/* Headline */}
            <motion.h1 
              id="customers-hero-heading" 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-brand-black leading-[1.08]"
            >
              Everything your city <br />
              <span className="text-brand-primary">has to offer.</span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-xl text-brand-gray-muted leading-relaxed font-normal max-w-2xl"
            >
              Discover trusted local stores, shop from multiple categories and get everything you need delivered quickly from businesses near you.
            </motion.p>

            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto"
            >
              <Button variant="primary" className="px-8 py-4 text-base font-semibold shadow-md shadow-brand-primary/10">
                Explore Stores <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button variant="outline" className="px-8 py-4 text-base font-semibold bg-white">
                Download App
              </Button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: WHY SHOP WITH RIVO ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100" aria-labelledby="why-shop-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">User Benefits</span>
            <h2 id="why-shop-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Shopping made simple.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Compass, title: "Trusted Local Stores", desc: "Shop from verified businesses near you." },
              { icon: Truck, title: "Fast Local Delivery", desc: "Get your orders delivered quickly." },
              { icon: Navigation, title: "Live Order Tracking", desc: "Know where your order is every step of the way." },
              { icon: CreditCard, title: "Secure Payments", desc: "Pay online or choose Cash on Delivery." },
              { icon: ShoppingBag, title: "Everything In One Place", desc: "Groceries, medicines, electronics, fashion and more." },
              { icon: HeartHandshake, title: "Support Local Businesses", desc: "Every purchase helps businesses in your own city." }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div 
                  key={idx}
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={smoothTransition}
                  className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col space-y-4 shadow-2xs cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FAF9FA] border border-neutral-200/60 flex items-center justify-center text-brand-primary">
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

      {/* ================= SECTION 3: EXPLORE CATEGORIES ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="all-categories-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">City Shelves</span>
            <h2 id="all-categories-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Explore Every Category
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: ShoppingBag, name: "Grocery", desc: "Fresh fruits, vegetables, daily essentials and household items." },
              { icon: Activity, name: "Pharmacy", desc: "Medicines and everyday healthcare products." },
              { icon: Tv, name: "Electronics", desc: "Mobile accessories, gadgets and home electronics." },
              { icon: Shirt, name: "Fashion", desc: "Clothing, footwear and everyday fashion." },
              { icon: Sparkle, name: "Beauty", desc: "Skincare, cosmetics and personal care." },
              { icon: Heart, name: "Pet Care", desc: "Food, toys and essentials for your pets." },
              { icon: BookOpen, name: "Stationery", desc: "Books, notebooks, office supplies and school essentials." },
              { icon: HomeIcon, name: "Home Essentials", desc: "Kitchen, cleaning and everyday home products." }
            ].map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div 
                  key={idx}
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={smoothTransition}
                  className="bg-[#FAF9FA] border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between h-[190px] shadow-2xs cursor-pointer"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/60 flex items-center justify-center text-brand-primary mb-4">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <h3 className="text-base font-bold text-brand-black tracking-tight">{cat.name}</h3>
                    <p className="text-xs text-brand-gray-muted mt-2 leading-relaxed font-normal">{cat.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: HOW SHOPPING WORKS ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100" aria-labelledby="shopping-flow-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-20 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Simple Workflow</span>
            <h2 id="shopping-flow-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              From your phone to your doorstep.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { step: "01", title: "Discover nearby stores", desc: "Browse trusted local businesses in your city." },
              { step: "02", title: "Choose your products", desc: "Pick items across diverse retail segments." },
              { step: "03", title: "Place your order", desc: "Choose what you need and checkout in minutes." },
              { step: "04", title: "Track in real time", desc: "Know exactly where your order is until it arrives." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col space-y-4">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-brand-primary flex items-center justify-center font-extrabold text-sm text-brand-black shadow-xs">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-black tracking-tight">{item.title}</h3>
                  <p className="text-sm text-brand-gray-muted mt-2 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: NEEDS ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="needs-heading">
        <div className="container-custom">
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Daily Convenience</span>
            <h2 id="needs-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Designed around your everyday needs.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Easy Search", desc: "Find nearby stores instantly." },
              { icon: CheckCircle, title: "Simple Checkout", desc: "Fast and secure ordering." },
              { icon: Navigation, title: "Real-Time Tracking", desc: "Track every order live." },
              { icon: History, title: "Order History", desc: "View previous purchases anytime." },
              { icon: CreditCard, title: "Payment Options", desc: "Pay online or choose Cash on Delivery." },
              { icon: Headphones, title: "Reliable Support", desc: "Help whenever you need it." }
            ].map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div 
                  key={idx}
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={smoothTransition}
                  className="bg-[#FAF9FA] border border-neutral-200 rounded-2xl p-6 flex flex-col space-y-4 shadow-2xs cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/60 flex items-center justify-center text-brand-primary">
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

      {/* ================= SECTION 6: WHY LOCAL MATTERS ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black tracking-tight leading-tight">
                Support your city with every order.
              </h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Faster Deliveries", desc: "Products come directly from trusted stores in your city, helping you receive your order faster." },
                { title: "Fresh Products", desc: "Get fresh stock hand-picked straight from local shops." },
                { title: "Support Local Businesses", desc: "Every order helps businesses in your own city." },
                { title: "Stronger Community", desc: "Build reliable local connections." },
                { title: "Better Service", desc: "Access friendly support whenever you need help." }
              ].map((benefit, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="w-2 h-2 rounded-full bg-brand-primary mb-2" />
                  <h3 className="text-base font-bold text-brand-black">{benefit.title}</h3>
                  <p className="text-sm text-brand-gray-muted font-light leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: FAQ ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="faq-heading">
        <div className="container-custom">
          <div className="max-w-3xl mb-16 mx-auto text-center">
            <h2 id="faq-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <FAQItem question="How do I place an order?" answer="Open the app, browse your favorite local stores, select your items, and checkout in seconds." />
            <FAQItem question="Which payment methods are available?" answer="You can pay online via UPI, credit/debit cards, or choose Cash on Delivery." />
            <FAQItem question="Can I track my order?" answer="Yes, you can track your order from the store to your doorstep." />
            <FAQItem question="How long does delivery take?" answer="Since your order comes from a store nearby, delivery is fast and efficient." />
            <FAQItem question="Can I order from multiple stores?" answer="Yes, you can place orders from different stores to get everything you need." />
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: FINAL CTA ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-b border-neutral-100">
        <div className="container-custom text-center max-w-4xl mx-auto flex flex-col items-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black text-brand-black tracking-tight leading-[1.1]">
            Start shopping locally.
          </h2>
          <p className="text-base md:text-lg text-brand-gray-muted font-light leading-relaxed max-w-2xl">
            Everything you need is closer than you think. Discover trusted stores in your city and enjoy a better way to shop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4 justify-center">
            <Button variant="primary" className="px-10 py-4 text-base font-semibold shadow-md shadow-brand-primary/10">
              Explore Stores <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="outline" className="px-10 py-4 text-base font-semibold bg-white">
              Download App
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customers;