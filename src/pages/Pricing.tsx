import React, { useState, useRef } from 'react';
import { motion, type Variants, type Transition } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { 
  ArrowRight, 
  ShieldCheck,
  CheckCircle,
  ChevronDown,
  Store,
  Zap,
  Layers
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

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  pros: string[];
  cons: string[];
  footerNote: string;
}

export interface ComparisonRow {
  featureName: string;
  freeValue: string;
  basicValue: string;
}

const placeholderPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: "₹0",
    period: "mo",
    description: "Start selling locally with no monthly subscription costs.",
    pros: [
      "Unlimited products",
      "Unlimited orders",
      "Weekly settlements",
      "Maximum 3 settlement requests per settlement cycle",
      "Standard support"
    ],
    cons: [
      "5% commission on each completed order"
    ],
    footerNote: "Ideal for businesses getting started."
  },
  {
    id: "basic",
    name: "Basic",
    price: "₹499",
    period: "mo",
    description: "Remove order commissions in exchange for a simple monthly flat rate.",
    pros: [
      "0% commission on completed orders",
      "Unlimited products",
      "Unlimited orders",
      "Weekly settlements",
      "Maximum 5 settlement requests per settlement cycle",
      "Priority support"
    ],
    cons: [],
    footerNote: "Best for businesses that want zero commission."
  }
];

const placeholderComparison: ComparisonRow[] = [
  { featureName: "Monthly Fee", freeValue: "₹0", basicValue: "₹499" },
  { featureName: "Commission", freeValue: "5%", basicValue: "0%" },
  { featureName: "Products", freeValue: "Unlimited", basicValue: "Unlimited" },
  { featureName: "Orders", freeValue: "Unlimited", basicValue: "Unlimited" },
  { featureName: "Weekly Settlements", freeValue: "Yes", basicValue: "Yes" },
  { featureName: "Settlement Requests", freeValue: "Maximum 3 settlement requests per settlement cycle", basicValue: "Maximum 5 settlement requests per settlement cycle" },
  { featureName: "Support", freeValue: "Standard", basicValue: "Priority" }
];

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

export const Pricing: React.FC = () => {
  const [openFaqIndex, setOpenFAQIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const comparisonRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFaqIndex === index ? null : index);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const scrollToComparison = () => {
    comparisonRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden selection:bg-brand-primary selection:text-brand-black">
      
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 lg:pb-32" aria-labelledby="pricing-hero-heading">
        <div className="container-custom">
          <div className="max-w-3xl text-left flex flex-col space-y-8 items-start">
            
            {/* Corrected Badge with self-start */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center self-start gap-2 px-4 py-2 bg-[#2ECC71]/10 border border-[#2ECC71]/20 rounded-full text-xs font-semibold tracking-wider text-brand-primary uppercase"
            >
              Pricing
            </motion.div>

            {/* Headline */}
            <div className="space-y-4 w-full">
              <motion.h1 
                id="pricing-hero-heading"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-black leading-[1.08]"
              >
                Simple and transparent pricing <br />
                <span className="text-brand-primary">for local businesses.</span>
              </motion.h1>
            </div>

            {/* Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-xl text-brand-gray-muted leading-relaxed font-normal max-w-2xl text-left"
            >
              Choose the plan that best fits your business. Whether you're just getting started or looking to grow, Rivo offers flexible options designed for local businesses.
            </motion.p>

            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto"
            >
              <Button onClick={scrollToComparison} variant="primary" className="px-8 py-4 text-base font-semibold shadow-md shadow-brand-primary/10">
                Compare Plans <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button onClick={handleContactClick} variant="outline" className="px-8 py-4 text-base font-semibold bg-white">
                Contact Us
              </Button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: PRICING CARDS ================= */}
      <section className="py-16 md:py-24 bg-[#FAF9FA] border-t border-neutral-100" aria-label="Subscription Options">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto text-left">
            {placeholderPlans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
                transition={smoothTransition}
                className="bg-white border rounded-3xl p-8 flex flex-col justify-between relative cursor-pointer border-neutral-200 shadow-2xs"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-brand-black tracking-tight">{plan.name}</h3>
                    <p className="text-sm text-brand-gray-muted mt-2 font-light leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="flex items-baseline gap-1 pt-2">
                    <span className="text-4xl md:text-5xl font-black text-brand-black tracking-tight">{plan.price}</span>
                    <span className="text-sm text-brand-gray-muted font-light">/{plan.period}</span>
                  </div>

                  {/* PROS LIST */}
                  <div className="border-t border-neutral-100 pt-6">
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-4">Pros</p>
                    <ul className="space-y-3">
                      {plan.pros.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-brand-gray-muted font-light">
                          <CheckCircle className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CONS LIST */}
                  {plan.cons.length > 0 && (
                    <div className="pt-2">
                      <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-4">Cons</p>
                      <ul className="space-y-3">
                        {plan.cons.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-brand-gray-muted font-light">
                            <span className="w-4 h-4 text-red-500 shrink-0 mt-0.5 font-bold flex items-center justify-center text-xs">✕</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-8 text-center border-t border-neutral-50 mt-6">
                  <p className="text-xs font-medium text-brand-gray-muted italic">
                    {plan.footerNote}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-brand-gray-muted text-center mt-12 font-light max-w-md mx-auto">
            Pricing and subscription features may evolve as Rivo grows and introduces new platform capabilities.
          </p>
        </div>
      </section>

      {/* ================= SECTION 3: FEATURE COMPARISON ================= */}
      <section ref={comparisonRef} className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="comparison-heading">
        <div className="container-custom max-w-4xl">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Granular Breakdown</span>
            <h2 id="comparison-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Compare Features
            </h2>
          </div>

          <div className="w-full overflow-x-auto border border-neutral-200 rounded-3xl bg-white shadow-2xs">
            <table className="w-full min-w-[600px] text-left border-collapse">
              <thead>
                <tr className="bg-[#FAF9FA] border-b border-neutral-200">
                  <th className="p-6 text-sm font-bold text-brand-black uppercase tracking-wider w-2/5">Plan Tier Features</th>
                  <th className="p-6 text-sm font-bold text-brand-black uppercase tracking-wider w-1/5">Free</th>
                  <th className="p-6 text-sm font-bold text-brand-black uppercase tracking-wider w-2/5">Basic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {placeholderComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-6 text-sm font-semibold text-brand-black">{row.featureName}</td>
                    <td className="p-6 text-sm text-brand-gray-muted font-light">{row.freeValue}</td>
                    <td className="p-6 text-sm text-brand-gray-muted font-light bg-brand-primary/5">{row.basicValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: WHY CHOOSE RIVO ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100" aria-labelledby="why-pricing-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Fair Standards</span>
            <h2 id="why-pricing-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Honest pricing models.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { icon: ShieldCheck, title: "Transparent Pricing", desc: "Know exactly what you pay with no hidden charges." },
              { icon: Store, title: "Unlimited Products", desc: "List as many products as your business needs." },
              { icon: Zap, title: "Unlimited Orders", desc: "Serve as many customers as your business can handle." },
              { icon: Layers, title: "Weekly Settlements", desc: "Receive regular payouts with a simple settlement process." }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col space-y-4 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF9FA] border border-neutral-200/60 flex items-center justify-center text-brand-primary">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-brand-black tracking-tight">{card.title}</h3>
                    <p className="text-xs text-brand-gray-muted mt-1.5 leading-relaxed font-light">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 5: FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="faq-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 mx-auto text-center">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Pricing Help</span>
            <h2 id="faq-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 text-left">
            {[
              { 
                question: "Why does the Free plan have commission?", 
                answer: "The Free plan allows businesses to join Rivo without a monthly subscription. A 5% commission is charged only on completed orders." 
              },
              { 
                question: "Why does the Basic plan have 0% commission?", 
                answer: "The Basic plan removes order commission in exchange for a monthly subscription of ₹499." 
              },
              { 
                question: "How often are settlements processed?", 
                answer: "Settlements are processed weekly." 
              },
              { 
                question: "How many settlement requests can I make?", 
                answer: "Free Plan\nMaximum 3 settlement requests per weekly settlement cycle.\n\nBasic Plan\nMaximum 5 settlement requests per weekly settlement cycle." 
              },
              { 
                question: "Can I change my plan later?", 
                answer: "Yes. You can upgrade or downgrade your subscription whenever available." 
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

      {/* ================= SECTION 6: FINAL CTA ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-b border-neutral-100" aria-labelledby="final-pricing-cta">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-8">
            
            <h2 id="final-pricing-cta" className="text-4xl md:text-6xl font-black text-brand-black tracking-tight leading-[1.1]">
              Choose the plan that works for your business.
            </h2>
            
            <p className="text-base md:text-lg text-brand-gray-muted font-light leading-relaxed max-w-2xl">
              Whether you're just getting started or looking to eliminate commission fees, Rivo offers simple pricing designed for local businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4 justify-center">
              <Button onClick={handleContactClick} variant="outline" className="px-10 py-4 text-base font-semibold bg-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;