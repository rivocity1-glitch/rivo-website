import React, { useState, useRef } from 'react';
import { motion, type Variants, type Transition } from 'framer-motion';
import { Button } from '../components/Button';
import { 
  ArrowRight, 
  Compass, 
  Layers, 
  ShieldCheck,
  CreditCard,
  Headphones,
  Smartphone,
  ChevronDown,
  Navigation,
  Clock,
  Bike,
  FileText,
  Smile,
  Calendar,
  Wallet,
  Truck
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
        <p className="px-6 pb-6 text-sm text-brand-gray-muted leading-relaxed font-light border-t border-neutral-50 pt-3">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

const Riders: React.FC = () => {
  const [openFaqIndex, setOpenFAQIndex] = useState<number | null>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  const scrollToBenefits = () => {
    benefitsRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden selection:bg-brand-primary selection:text-brand-black">
      
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 lg:pb-32" aria-labelledby="riders-hero-heading">
        <div className="container-custom">
          <div className="max-w-3xl text-left flex flex-col space-y-8 items-start">
            
            {/* Corrected Badge with self-start */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center self-start gap-2 px-4 py-2 bg-[#2ECC71]/10 border border-[#2ECC71]/20 rounded-full text-xs font-semibold tracking-wider text-brand-primary uppercase"
            >
              For Riders
            </motion.div>

            {/* Headline */}
            <div className="space-y-4 w-full">
              <motion.h1 
                id="riders-hero-heading" 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-brand-black leading-[1.08]"
              >
                Earn on your schedule. <br />
                <span className="text-brand-primary">Deliver with confidence.</span>
              </motion.h1>
            </div>

            {/* Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-xl text-brand-gray-muted leading-relaxed font-normal max-w-2xl text-left"
            >
              Become a Rivo Rider and earn by delivering orders across your city. Choose your availability, receive delivery requests and enjoy a simple, reliable delivery experience.
            </motion.p>

            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto"
            >
              <Button variant="primary" className="px-8 py-4 text-base font-semibold shadow-md shadow-brand-primary/10">
                Become a Rider <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button onClick={scrollToBenefits} variant="outline" className="px-8 py-4 text-base font-semibold bg-white">
                Learn More
              </Button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: WHY DELIVER WITH RIVO ================= */}
      <section ref={benefitsRef} className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100" aria-labelledby="why-deliver-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Rider Benefits</span>
            <h2 id="why-deliver-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Designed for riders.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Flexible Working Hours", desc: "Choose when you want to work." },
              { icon: Wallet, title: "Weekly Settlements", desc: "Receive transparent weekly payouts." },
              { icon: Layers, title: "Easy Delivery Flow", desc: "Simple pickup and delivery process." },
              { icon: Navigation, title: "Coming Soon", desc: "Turn-by-turn navigation will be introduced in a future update to make deliveries even easier." },
              { icon: Headphones, title: "Reliable Support", desc: "Get help whenever you need it." },
              { icon: Compass, title: "Grow With Us", desc: "Become part of a growing local platform." }
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

      {/* ================= SECTION 3: HOW DELIVERY WORKS ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="how-it-works-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-20 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Onboarding Process</span>
            <h2 id="how-it-works-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Start delivering in four simple steps.
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-0.5 bg-neutral-200/80 -z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10 text-left">
              {[
                { step: "01", title: "Register as a Rider", desc: "Create your account and submit the required details to get started." },
                { step: "02", title: "Complete KYC", desc: "Upload your required documents for verification. Once approved, you'll be ready to start delivering." },
                { step: "03", title: "Start Your Shift", desc: "Choose your preferred shift and go online when you're ready to accept deliveries." },
                { step: "04", title: "Accept Orders & Deliver", desc: "Receive nearby delivery requests, pick up the order from the store and deliver it to the customer." }
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

      {/* ================= SECTION 4: EVERYTHING YOU NEED ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100" aria-labelledby="features-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">App Utilities</span>
            <h2 id="features-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Everything you need.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Calendar, title: "Availability", desc: "Go online or offline anytime." },
              { icon: Layers, title: "Order Management", desc: "Receive nearby delivery requests." },
              { icon: Navigation, title: "Navigation", desc: "Simple pickup and drop locations." },
              { icon: CreditCard, title: "Earnings", desc: "Track completed deliveries and payouts." },
              { icon: ShieldCheck, title: "Safety", desc: "Verified stores and customer information." },
              { icon: Headphones, title: "Support", desc: "Dedicated support whenever needed." }
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

      {/* ================= SECTION 5: WHO CAN JOIN ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="eligibility-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Requirements</span>
            <h2 id="eligibility-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Who can join.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "18+ years old", desc: "Must meet the minimum legal age criteria to register." },
              { icon: FileText, title: "Valid driving licence", desc: "A valid driving licence is required to complete deliveries." },
              { icon: Bike, title: "Two-wheeler", desc: "You'll need your own scooter or motorcycle for deliveries." },
              { icon: Smartphone, title: "Smartphone", desc: "A smartphone is required to receive orders and manage deliveries." },
              { icon: Layers, title: "Required documents", desc: "Keep your required KYC documents ready for verification." },
              { icon: Smile, title: "Positive attitude", desc: "A positive attitude and friendly behaviour help create a great customer experience." }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={smoothTransition}
                  className="bg-[#FAF9FA] border border-neutral-200 rounded-2xl p-6 flex flex-col space-y-3 cursor-pointer text-left"
                >
                  <motion.div variants={iconAnimationVariants} className="text-brand-primary text-2xl">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </motion.div>
                  <div>
                    <h3 className="text-base font-bold text-brand-black tracking-tight">{card.title}</h3>
                    <p className="text-xs text-brand-gray-muted mt-1 leading-relaxed font-light">{card.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 6: WHY RIDERS CHOOSE RIVO ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100" aria-labelledby="why-riders-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Core Strengths</span>
            <h2 id="why-riders-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Built to make every delivery simple.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { icon: Clock, title: "Flexible Schedule", desc: "Work whenever fits your routine best." },
              { icon: Wallet, title: "Transparent Earnings", desc: "Track your completed deliveries and earnings with complete transparency." },
              { icon: Smartphone, title: "Easy-to-Use App", desc: "Manage deliveries easily with a simple and easy-to-use app." },
              { icon: Truck, title: "Fast Local Deliveries", desc: "Receive nearby delivery requests and spend more time delivering." },
              { icon: Headphones, title: "Rider Support", desc: "Get help whenever you need it from the Rivo support team." },
              { icon: Compass, title: "Growing Opportunities", desc: "Grow with Rivo as we expand to more customers and businesses." }
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-white border border-neutral-200/80 rounded-2xl p-6 flex flex-col space-y-3 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF9FA] border border-neutral-200/60 flex items-center justify-center text-brand-primary">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-brand-black tracking-tight">{benefit.title}</h3>
                    <p className="text-xs text-brand-gray-muted mt-1 leading-relaxed font-light">{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 7: FAQ ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="faq-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left mx-auto md:text-center flex flex-col md:items-center">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">FAQ Desk</span>
            <h2 id="faq-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { question: "How do I become a rider?", answer: "Simply fill out our registration form online, and your account will be activated once verification is completed." },
              { question: "How are payments made?", answer: "Weekly settlements are transferred directly to your registered bank account." },
              { question: "What documents are required?", answer: "You will need a valid driving license, registration details for your two-wheeler vehicle, and standard identification proofs." },
              { question: "Can I choose my working hours?", answer: "Yes. You have total freedom to choose a shift and start delivering when you're ready." },
              { question: "Do I need my own vehicle?", answer: "Yes, you must possess a functional and properly registered scooter or motorcycle to complete deliveries." }
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

      {/* ================= SECTION 8: FINAL CTA ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-b border-neutral-100" aria-labelledby="riders-cta-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-8">
            
            <h2 id="riders-cta-heading" className="text-4xl md:text-6xl font-black text-brand-black tracking-tight leading-[1.1]">
              Ready to start delivering?
            </h2>
            
            <p className="text-base md:text-lg text-brand-gray-muted font-light leading-relaxed max-w-2xl">
              Join as a Rider and become part of a growing community helping local businesses serve customers across the city.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4 justify-center">
              <Button variant="primary" className="px-10 py-4 text-base font-semibold shadow-md shadow-brand-primary/10">
                Become a Rider <ArrowRight className="w-5 h-5 ml-1" />
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

export default Riders;