import React, { useState } from 'react';
import { motion, type Variants, type Transition } from 'framer-motion';
import { Button } from '../components/Button';
import { 
  ArrowRight, 
  Search,
  ChevronDown,
  ShoppingBag,
  CreditCard,
  Truck,
  User,
  RefreshCcw,
  Store,
  Layers,
  FileText,
  Clock,
  Headphones,
  Mail
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

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border border-neutral-200 rounded-2xl bg-white overflow-hidden transition-all duration-300">
      <button 
        onClick={onToggle}
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
        <p className="px-6 pb-6 text-sm text-brand-gray-muted leading-relaxed font-light border-t border-neutral-50 pt-3 whitespace-pre-line">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

export const HelpCenter: React.FC = () => {
  const [openFaqIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFaqIndex === index ? null : index);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden selection:bg-brand-primary selection:text-brand-black">
      
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 lg:pb-32" aria-labelledby="help-hero-heading">
        <div className="container-custom">
          <div className="max-w-3xl text-left flex flex-col space-y-8 items-start">
            
            {/* Corrected Badge with self-start */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center self-start gap-2 px-4 py-2 bg-[#2ECC71]/10 border border-[#2ECC71]/20 rounded-full text-xs font-semibold tracking-wider text-brand-primary uppercase"
            >
              Help Center
            </motion.div>

            {/* Headline */}
            <div className="space-y-4 w-full">
              <motion.h1 
                id="help-hero-heading"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-black leading-[1.08]"
              >
                How can we help?
              </motion.h1>
            </div>

            {/* Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-xl text-brand-gray-muted leading-relaxed font-normal max-w-2xl text-left"
            >
              Find answers to common questions about shopping, deliveries, vendor accounts, rider accounts and using Rivo.
            </motion.p>

            {/* Large Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="w-full max-w-xl pt-2"
            >
              <form onSubmit={handleSearchSubmit} className="relative group">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for help..."
                  className="w-full bg-[#FAF9FA] border border-neutral-200 rounded-2xl pl-12 pr-4 py-4 text-base text-brand-black placeholder-neutral-400 focus:outline-none focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/5 transition-all duration-300"
                />
                <Search className="w-5 h-5 text-neutral-400 absolute top-4 left-4 group-focus-within:text-brand-primary transition-colors duration-300" />
              </form>
              <p className="text-xs text-brand-gray-muted text-left mt-3 font-light">
                Search support topics, frequently asked questions and helpful guides.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: BROWSE BY CATEGORY ================= */}
      <section className="py-16 md:py-24 bg-[#FAF9FA] border-t border-neutral-100" aria-label="Help Categories">
        <div className="container-custom">
          
          {/* Shopping Subsection */}
          <div className="mb-16 text-left">
            <h2 className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-8">Shopping</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: ShoppingBag, title: "Orders", desc: "Track your orders and view your order history." },
                { icon: CreditCard, title: "Payments", desc: "Learn about payment methods and billing." },
                { icon: Truck, title: "Delivery", desc: "Find answers about delivery times and tracking." },
                { icon: User, title: "Account", desc: "Manage your profile and account settings." },
                { icon: RefreshCcw, title: "Refunds", desc: "Understand our refund and cancellation policy." }
              ].map((card, idx) => {
                const Icon = card.icon;
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
                      <h3 className="text-base font-bold text-brand-black tracking-tight">{card.title}</h3>
                      <p className="text-xs text-brand-gray-muted mt-1.5 leading-relaxed font-light">{card.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Selling Subsection */}
          <div className="mb-16 text-left">
            <h2 className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-8">Selling</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Store, title: "Store Management", desc: "Manage your store details and business hours." },
                { icon: Layers, title: "Products", desc: "Add, update and manage your products." },
                { icon: ShoppingBag, title: "Orders", desc: "Manage incoming orders from your customers." },
                { icon: CreditCard, title: "Settlements", desc: "View settlement information and payment details." },
                { icon: FileText, title: "Subscriptions", desc: "Learn about available subscription plans." }
              ].map((card, idx) => {
                const Icon = card.icon;
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
                      <h3 className="text-base font-bold text-brand-black tracking-tight">{card.title}</h3>
                      <p className="text-xs text-brand-gray-muted mt-1.5 leading-relaxed font-light">{card.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Delivering Subsection */}
          <div className="text-left">
            <h2 className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-8">Delivering</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: "Getting Started", desc: "Learn how to become a Rivo Rider." },
                { icon: FileText, title: "KYC", desc: "Complete your verification process." },
                { icon: Truck, title: "Deliveries", desc: "Understand the delivery process." },
                { icon: CreditCard, title: "Payments", desc: "Learn how rider earnings and settlements work." },
                { icon: Layers, title: "Shifts", desc: "Learn how to start and manage your shifts." },
                { icon: Headphones, title: "Support", desc: "Get help whenever you need it." }
              ].map((card, idx) => {
                const Icon = card.icon;
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
                      <h3 className="text-base font-bold text-brand-black tracking-tight">{card.title}</h3>
                      <p className="text-xs text-brand-gray-muted mt-1.5 leading-relaxed font-light">{card.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: POPULAR QUESTIONS ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="popular-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 mx-auto text-center">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Self Help</span>
            <h2 id="popular-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Popular Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 text-left">
            {[
              { 
                question: "How do I place an order?", 
                answer: "Browse nearby stores, add products to your cart and complete your order using your preferred payment method." 
              },
              { 
                question: "Which payment methods are supported?", 
                answer: "We support major secure online choices including instant UPI channels, popular credit or debit cards, as well as Cash on Delivery (COD)." 
              },
              { 
                question: "How do refunds work?", 
                answer: "If an order or specific line item gets cancelled, the corresponding refund value is immediately released and settles back to your source account format." 
              },
              { 
                question: "How do vendors receive settlements?", 
                answer: "Vendor settlements are processed weekly according to the settlement schedule." 
              },
              { 
                question: "How do I become a rider?", 
                answer: "Register as a rider, complete your KYC verification and start delivering once your account is approved." 
              },
              { 
                question: "How do I contact support?", 
                answer: "You can contact us through our support email. We'll do our best to respond as quickly as possible." 
              }
            ].map((faq, idx) => (
              <FAQItem 
                key={idx}
                question={faq.question} 
                answer={faq.answer}
                isOpen={openFaqIndex === idx}
                onToggle={() => toggleFAQ(idx)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: NEED MORE HELP? ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100" aria-labelledby="more-help-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Direct Assistance</span>
            <h2 id="more-help-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Need More Help?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Customer Support", desc: "Questions about orders or your account." },
              { title: "Vendor Support", desc: "Help with your business account." },
              { title: "Rider Support", desc: "Help with deliveries or your rider account." }
            ].map((box, idx) => (
              <motion.div
                key={idx}
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
                transition={smoothTransition}
                className="bg-white border border-neutral-200 rounded-3xl p-8 flex flex-col justify-between h-[220px] cursor-pointer shadow-2xs"
              >
                <div>
                  <h3 className="text-lg font-bold text-brand-black tracking-tight">{box.title}</h3>
                  <p className="text-sm text-brand-gray-muted mt-2 font-light leading-relaxed">{box.desc}</p>
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="w-full justify-center py-2.5 text-xs font-semibold bg-white">
                    Email Support
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 5: SUPPORT HOURS ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="hours-heading">
        <div className="container-custom">
          <div className="bg-[#FAF9FA] border border-neutral-200 rounded-3xl p-8 md:p-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center shadow-2xs">
            
            <div className="space-y-4 text-left">
              <span className="text-xs uppercase tracking-widest text-brand-primary font-bold block">Support Information</span>
              <h2 id="hours-heading" className="text-3xl md:text-4xl font-extrabold text-brand-black tracking-tight leading-tight">
                We're here to help.
              </h2>
              <p className="text-sm text-brand-gray-muted font-light leading-relaxed">
                Our support team is available during business hours to help customers, vendors and riders.
              </p>
            </div>

            <div className="space-y-6 text-left border-t md:border-t-0 md:border-l border-neutral-200/80 pt-6 md:pt-0 md:pl-12">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white border border-neutral-200 rounded-xl text-brand-primary mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-brand-black">Email Support</h3>
                  <p className="text-sm text-brand-gray-muted font-normal mt-1 selection:bg-brand-primary/30">rivo.cityhelp1@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white border border-neutral-200 rounded-xl text-brand-primary mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-brand-black">Business Hours</h3>
                  <p className="text-sm text-brand-gray-muted font-normal mt-1">Monday – Saturday</p>
                  <p className="text-xs text-brand-gray-muted font-light mt-0.5">9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 6: FINAL CTA ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-b border-neutral-100" aria-labelledby="final-help-cta">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-8">
            
            <h2 id="final-help-cta" className="text-4xl md:text-6xl font-black text-brand-black tracking-tight leading-[1.1]">
              Still need help?
            </h2>
            
            <p className="text-base md:text-lg text-brand-gray-muted font-light leading-relaxed max-w-2xl">
              If you couldn't find the answer you were looking for, our support team is ready to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4 justify-center">
              <Button variant="primary" className="px-10 py-4 text-base font-semibold shadow-md shadow-brand-primary/10">
                Email Support <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button variant="outline" className="px-10 py-4 text-base font-semibold bg-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HelpCenter;