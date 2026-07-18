import React, { useState } from 'react';
import { motion, type Variants, type Transition } from 'framer-motion';
import { Button } from '../components/Button';

import { 
  ArrowRight, 
  Compass, 
  Layers, 
  ShieldCheck,
  Store,
  ChevronDown,
  Users,
  Bike,
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

const Cities: React.FC = () => {
  const [openFaqIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', city: '' });

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFaqIndex === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden selection:bg-brand-primary selection:text-brand-black">
      
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 lg:pb-32" aria-labelledby="cities-hero-heading">
        <div className="container-custom">
          <div className="max-w-3xl text-left flex flex-col space-y-8 items-start">
            
            {/* Corrected Badge with self-start */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center self-start gap-2 px-4 py-2 bg-[#2ECC71]/10 border border-[#2ECC71]/20 rounded-full text-xs font-semibold tracking-wider text-brand-primary uppercase"
            >
              Service Areas
            </motion.div>

            {/* Headline */}
            <div className="space-y-4 w-full">
              <motion.h1 
                id="cities-hero-heading" 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-brand-black leading-[1.08]"
              >
                Starting with Baramati. <br />
                <span className="text-brand-primary">Growing one city at a time.</span>
              </motion.h1>
            </div>

            {/* Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-xl text-brand-gray-muted leading-relaxed font-normal max-w-2xl text-left"
            >
              We're building Rivo one city at a time, creating trusted local shopping experiences before expanding to new communities.
            </motion.p>

            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto"
            >
              <Button variant="primary" className="px-8 py-4 text-base font-semibold shadow-md shadow-brand-primary/10">
                Explore Rivo <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button variant="outline" className="px-8 py-4 text-base font-semibold bg-white">
                Request Your City
              </Button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: LAUNCH CITY ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100" aria-labelledby="launch-city-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Active Hub</span>
            <h2 id="launch-city-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Our First Launch City
            </h2>
          </div>

          <motion.div
            variants={cardHoverVariants}
            initial="initial"
            whileHover="hover"
            transition={smoothTransition}
            className="bg-white border border-neutral-200 rounded-3xl p-8 md:p-12 cursor-pointer relative overflow-hidden shadow-xs"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-neutral-100 text-left">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-brand-primary bg-[#2ECC71]/10 px-3 py-1.5 rounded-full border border-brand-primary/20">
                  Now Launching
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-brand-black tracking-tight mt-4">Baramati</h3>
              </div>
              <div className="flex flex-col space-y-3 max-w-xl">
                <p className="text-base text-brand-gray-muted font-light leading-relaxed">
                  Baramati is where the Rivo journey begins. Customers, local businesses and riders come together to create a better local shopping experience.
                </p>
                <p className="text-sm text-brand-gray-muted font-normal italic leading-relaxed">
                  We're starting in Baramati because we believe every great journey begins by getting one community right before expanding to the next.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-left">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#FAF9FA] border border-neutral-200 rounded-xl text-brand-primary">
                  <Users className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black text-base">Customers</h4>
                  <p className="text-sm text-brand-gray-muted mt-1 font-light">Shop from trusted local stores.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#FAF9FA] border border-neutral-200 rounded-xl text-brand-primary">
                  <Store className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black text-base">Businesses</h4>
                  <p className="text-sm text-brand-gray-muted mt-1 font-light">Reach more customers across the city.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#FAF9FA] border border-neutral-200 rounded-xl text-brand-primary">
                  <Bike className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black text-base">Riders</h4>
                  <p className="text-sm text-brand-gray-muted mt-1 font-light">Earn by delivering locally.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= SECTION 3: WHY WE EXPAND CAREFULLY ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="expansion-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Our Philosophy</span>
            <h2 id="expansion-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Quality before expansion.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              { icon: Compass, title: "Strong Local Partnerships", desc: "We work closely with local businesses before launching." },
              { icon: Truck, title: "Reliable Deliveries", desc: "Every city deserves a dependable delivery experience." },
              { icon: ShieldCheck, title: "Better Customer Experience", desc: "We focus on getting every detail right before expanding." },
              { icon: Layers, title: "Sustainable Growth", desc: "Growing one city at a time helps us build a stronger platform." }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={smoothTransition}
                  className="bg-[#FAF9FA] border border-neutral-200 rounded-2xl p-8 flex flex-col space-y-4 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200/60 flex items-center justify-center text-brand-primary shadow-2xs">
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

      {/* ================= SECTION 4: COMING SOON ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100" aria-labelledby="roadmap-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Future Horizons</span>
            <h2 id="roadmap-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              More cities are on the roadmap.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 text-left">
            {["Pune", "Mumbai", "Satara", "Solapur", "Kolhapur"].map((city, idx) => (
              <div 
                key={idx}
                className="bg-white border border-neutral-200 rounded-2xl p-5 flex flex-col justify-between h-[140px] opacity-80 hover:opacity-100 transition-opacity duration-300 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest bg-neutral-50 border border-neutral-100 px-2.5 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-black tracking-tight">{city}</h4>
                  <p className="text-[10px] text-brand-gray-muted mt-0.5">Planned for future expansion</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 5: REQUEST YOUR CITY ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="request-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            <div className="lg:col-span-5 flex flex-col space-y-4 text-left">
              <span className="text-xs uppercase tracking-widest text-brand-primary font-bold block">Vote For Expansion</span>
              <h2 id="request-heading" className="text-3xl md:text-4xl font-extrabold text-brand-black tracking-tight leading-tight">
                Want Rivo in your city?
              </h2>
              <p className="text-base text-brand-gray-muted font-light leading-relaxed max-w-md">
                Tell us where you'd like to see Rivo next. Your interest helps us understand where we should expand in the future.
              </p>
            </div>

            <div className="lg:col-span-7 w-full max-w-xl text-left">
              <form onSubmit={handleSubmit} className="bg-[#FAF9FA] border border-neutral-200 rounded-3xl p-6 md:p-8 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-brand-black uppercase tracking-wider mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name" 
                    className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-sm text-brand-black placeholder-neutral-400 focus:outline-none focus:border-brand-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-brand-black uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com" 
                    className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-sm text-brand-black placeholder-neutral-400 focus:outline-none focus:border-brand-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-xs font-bold text-brand-black uppercase tracking-wider mb-2">City</label>
                  <input 
                    type="text" 
                    id="city" 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Pune" 
                    className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-sm text-brand-black placeholder-neutral-400 focus:outline-none focus:border-brand-primary transition-colors"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <Button variant="primary" type="submit" className="w-full py-4 text-base font-semibold justify-center shadow-xs">
                    Notify Me
                  </Button>
                  <p className="text-[11px] text-brand-gray-muted text-center leading-normal font-light px-2">
                    Submitting this form does not guarantee launch in your city. It simply helps us understand where people would like to see Rivo next.
                  </p>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 6: FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="faq-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left mx-auto md:text-center flex flex-col md:items-center">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Inquiries Desk</span>
            <h2 id="faq-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 text-left">
            {[
              { question: "When will Rivo launch in my city?", answer: "We grow carefully to ensure local operations work perfectly. Your input helps us decide where to open next." },
              { question: "How do you decide which city launches next?", answer: "We consider factors such as community interest, local business participation and our ability to provide a reliable experience before expanding into a new city." },
              { question: "Can I recommend my city?", answer: "Yes. Fill out the \"Request Your City\" form and let us know where you'd like to see Rivo next." },
              { question: "Can businesses register before launch?", answer: "Yes. Businesses can register their interest before launch. We'll contact eligible businesses when we're ready to expand into their city." },
              { question: "Can I become a rider before launch?", answer: "Yes. Riders can register their interest in advance. We'll notify you when registrations open in your city." }
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

      {/* ================= SECTION 7: FINAL CTA ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-b border-neutral-100" aria-labelledby="cities-cta-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-8">
            
            <h2 id="cities-cta-heading" className="text-4xl md:text-6xl font-black text-brand-black tracking-tight leading-[1.1]">
              Wherever you are, we'd love <br className="hidden md:block" />
              to bring Rivo to your city.
            </h2>
            
            <p className="text-base md:text-lg text-brand-gray-muted font-light leading-relaxed max-w-2xl">
              Tell us where you'd like us to launch next.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4 justify-center">
              <Button variant="primary" className="px-10 py-4 text-base font-semibold shadow-md shadow-brand-primary/10">
                Request Your City <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button variant="outline" className="px-10 py-4 text-base font-semibold bg-white">
                Explore Rivo
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Cities;