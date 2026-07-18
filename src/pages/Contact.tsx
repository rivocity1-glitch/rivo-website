import React, { useState } from 'react';
import { motion, type Variants, type Transition } from 'framer-motion';
import { Button } from '../components/Button';
import SEO from "../components/SEO";
import { 
  ArrowRight, 
  ChevronDown,
  Mail,
  Clock,
  Briefcase,
  Users,
  Store,
  Bike
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

export const Contact: React.FC = () => {
  const [openFaqIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFaqIndex === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden selection:bg-brand-primary selection:text-brand-black">
      <SEO title="Contact Rivo" description="Get in touch with the Rivo team for support, general questions, or business partnerships." />
      
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 lg:pb-32" aria-labelledby="contact-hero-heading">
        <div className="container-custom">
          <div className="max-w-3xl text-left flex flex-col space-y-8 items-start">
            
            {/* Corrected Badge with self-start */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center self-start gap-2 px-4 py-2 bg-[#2ECC71]/10 border border-[#2ECC71]/20 rounded-full text-xs font-semibold tracking-wider text-brand-primary uppercase"
            >
              Contact
            </motion.div>

            {/* Headline */}
            <div className="space-y-4 w-full">
              <motion.h1 
                id="contact-hero-heading"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-black leading-[1.08]"
              >
                We're here to help.
              </motion.h1>
            </div>

            {/* Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-xl text-brand-gray-muted leading-relaxed font-normal max-w-2xl text-left"
            >
              Whether you have a question, business enquiry or need support, we'd love to hear from you.
            </motion.p>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: CONTACT INFORMATION ================= */}
      <section className="py-16 md:py-24 bg-[#FAF9FA] border-t border-neutral-100" aria-label="Contact Channels">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto text-left">
            
            {/* Email Support */}
            <motion.div
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              transition={smoothTransition}
              className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between cursor-pointer shadow-2xs"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9FA] border border-neutral-200/60 flex items-center justify-center text-brand-primary shadow-3xs">
                  <Mail className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-black tracking-tight">Email Support</h3>
                  <p className="text-xs text-brand-gray-muted mt-1 leading-relaxed font-light">For general questions and support.</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-brand-black mt-6 break-all">rivo.cityhelp1@gmail.com</p>
            </motion.div>

            {/* Business Enquiries */}
            <motion.div
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              transition={smoothTransition}
              className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between cursor-pointer shadow-2xs"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9FA] border border-neutral-200/60 flex items-center justify-center text-brand-primary shadow-3xs">
                  <Briefcase className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-black tracking-tight">Business Enquiries</h3>
                  <p className="text-xs text-brand-gray-muted mt-1 leading-relaxed font-light">For partnerships and business enquiries.</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-brand-black mt-6 break-all">rivo.city1@gmail.com</p>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              transition={smoothTransition}
              className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between cursor-pointer shadow-2xs"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF9FA] border border-neutral-200/60 flex items-center justify-center text-brand-primary shadow-3xs">
                  <Clock className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-brand-black tracking-tight">Business Hours</h3>
                  <p className="text-xs text-brand-gray-muted mt-1 leading-relaxed font-light">Support is available during business hours.</p>
                </div>
              </div>
              <div className="mt-6 leading-tight">
                <p className="text-sm font-semibold text-brand-black">Monday – Saturday</p>
                <p className="text-xs text-brand-gray-muted mt-1 font-light">9:00 AM – 6:00 PM</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: SEND US A MESSAGE ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="message-heading">
        <div className="container-custom max-w-xl mx-auto">
          
          <div className="mb-10 text-center">
            <h2 id="message-heading" className="text-3xl font-extrabold text-brand-black tracking-tight">
              Send Us a Message
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#FAF9FA] border border-neutral-200 rounded-3xl p-6 md:p-8 space-y-5 shadow-2xs text-left">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-brand-black uppercase tracking-wider mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name" 
                className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-sm text-brand-black placeholder-neutral-400 focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all duration-300"
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
                className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-sm text-brand-black placeholder-neutral-400 focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs font-bold text-brand-black uppercase tracking-wider mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="How can we help you?" 
                className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-sm text-brand-black placeholder-neutral-400 focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-brand-black uppercase tracking-wider mb-2">Message</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message here..." 
                rows={5}
                className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3.5 text-sm text-brand-black placeholder-neutral-400 focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all duration-300 resize-none"
                required
              />
            </div>
            <Button variant="primary" type="submit" className="w-full py-4 text-base font-semibold justify-center shadow-xs">
              Send Message
            </Button>
          </form>

        </div>
      </section>

      {/* ================= SECTION 4: WHO CAN CONTACT US? ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100" aria-labelledby="audience-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Rivo Channels</span>
            <h2 id="audience-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Who can contact us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { icon: Users, title: "Customers", desc: "Questions about orders, payments or your account." },
              { icon: Store, title: "Businesses", desc: "Questions about selling on Rivo." },
              { icon: Bike, title: "Riders", desc: "Questions about deliveries or rider accounts." }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={smoothTransition}
                  className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col space-y-4 cursor-pointer shadow-2xs"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FAF9FA] border border-neutral-200/60 flex items-center justify-center text-brand-primary shadow-3xs">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
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

      {/* ================= SECTION 5: FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="faq-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 mx-auto text-center">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Quick Help</span>
            <h2 id="faq-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 text-left">
            {[
              { question: "How long does it take to receive a reply?", answer: "We aim to respond to all enquiries within 24 hours during our working business hours." },
              { question: "Where can I get order support?", answer: "For immediate help with a live order, please consult our Help Center topics or contact us using our dedicated support email." },
              { question: "Can businesses contact Rivo before joining?", answer: "Yes, you can drop us an email with your business details, and we will help walk you through the catalog steps before your store launches." },
              { question: "How do I report a problem?", answer: "Please email our support channel with a brief summary of the issue, and our team will check it right away." },
              { question: "Can riders contact support?", answer: "Yes. Active riders can drop us a mail regarding account updates, verification statuses, or settlement questions." }
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
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-b border-neutral-100" aria-labelledby="final-contact-cta">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-8">
            
            <h2 id="final-contact-cta" className="text-4xl md:text-6xl font-black text-brand-black tracking-tight leading-[1.1]">
              Let's stay connected.
            </h2>
            
            <p className="text-base md:text-lg text-brand-gray-muted font-light leading-relaxed max-w-2xl">
              If you have a question or need assistance, we're always happy to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4 justify-center">
              <Button variant="primary" className="px-10 py-4 text-base font-semibold shadow-md shadow-brand-primary/10">
                Email Support <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button variant="outline" className="px-10 py-4 text-base font-semibold bg-white">
                Help Center
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;