import React from 'react';
import SEO from "../components/SEO";
import { motion, type Variants, type Transition } from 'framer-motion';
import { Button } from '../components/Button';
import { 
  ArrowRight, 
  Users,
  Store,
  Bike,
  HeartHandshake,
  ShieldCheck,
  Smartphone,
  Sparkle,
  LineChart,
  CheckCircle,
  AlertCircle,
  Truck,
  Navigation,
  CreditCard,
  ShoppingBag,
  Home as HomeIcon
} from 'lucide-react';

// Premium high-end transition matching Stripe/Apple aesthetics used on the Home page
const smoothTransition: Transition = {
  type: "tween",
  ease: [0.16, 1, 0.3, 1],
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

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden selection:bg-brand-primary selection:text-brand-black">
      <SEO title="About Rivo" description="Learn more about Rivo and our mission to make local shopping easier." />
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 lg:pb-32" aria-labelledby="about-hero-heading">
        <div className="container-custom">
          <div className="max-w-3xl text-left flex flex-col space-y-8">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center self-start gap-2 px-4 py-2 bg-[#2ECC71]/10 border border-[#2ECC71]/20 rounded-full text-xs font-semibold tracking-wider text-brand-primary uppercase"
            >
              About Rivo
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="about-hero-heading"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-brand-black leading-[1.08]"
            >
              Built for the cities <br />
              <span className="text-brand-primary">we call home.</span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-xl text-brand-gray-muted leading-relaxed font-normal max-w-2xl"
            >
              Rivo was created with a simple idea — make local shopping easier for customers while helping local businesses grow. By bringing trusted stores, delivery partners and customers together on one platform, we're building a better way to shop locally.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: THE PROBLEM ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100" aria-labelledby="problem-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">The Challenge</span>
              <h2 id="problem-heading" className="text-3xl md:text-4xl font-extrabold text-brand-black tracking-tight leading-tight">
                Local shopping should be easier.
              </h2>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Hidden Inventory", desc: "People often don't know what stores around them have in stock before stepping out." },
                { title: "The Online Struggle", desc: "Great local businesses frequently struggle to reach digital customers and compete with giants." },
                { title: "Unnecessary Waiting", desc: "Customers wait days for deliveries of products that already exist right around the corner." },
                { title: "Trust and Clarity", desc: "Finding verified, trusted local stores online shouldn't be a difficult or complicated task." }
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-red-500 shadow-3xs">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-brand-black pt-1">{item.title}</h3>
                  <p className="text-sm text-brand-gray-muted font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: OUR SOLUTION ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="solution-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Unified Commerce</span>
            <h2 id="solution-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              One platform for your entire city.
            </h2>
            <p className="mt-4 text-base md:text-lg text-brand-gray-muted font-light leading-relaxed">
              We tie the community closer together by closing the gap between neighborhood supply and immediate home demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Customers", desc: "Browse real neighborhood shelves and secure what you need cleanly without the shipping delays.", icon: Users },
              { title: "Local Businesses", desc: "Open a gorgeous online storefront that welcomes your neighbors 24 hours a day.", icon: Store },
              { title: "Delivery Partners", desc: "Earn clear commissions and move confidently along familiar city paths.", icon: Bike }
            ].map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={smoothTransition}
                  className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col space-y-4 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2ECC71]/10 flex items-center justify-center text-[#2ECC71] shadow-3xs">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-black tracking-tight">{sol.title}</h3>
                    <p className="text-sm text-brand-gray-muted mt-2 leading-relaxed font-light">{sol.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 4 & 5: MISSION & VISION ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Mission */}
            <motion.div 
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              transition={smoothTransition}
              className="bg-white border border-neutral-200 rounded-3xl p-8 md:p-12 cursor-pointer flex flex-col space-y-6"
            >
              <span className="text-xs uppercase tracking-widest text-brand-primary font-bold">Our Mission</span>
              <h2 className="text-2xl md:text-3xl font-black text-brand-black tracking-tight leading-tight">
                To help every city thrive by making local shopping faster, easier and more connected.
              </h2>
            </motion.div>

            {/* Vision */}
            <motion.div 
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              transition={smoothTransition}
              className="bg-white border border-neutral-200 rounded-3xl p-8 md:p-12 cursor-pointer flex flex-col space-y-6"
            >
              <span className="text-xs uppercase tracking-widest text-brand-primary font-bold">Our Vision</span>
              <h2 className="text-2xl md:text-3xl font-black text-brand-black tracking-tight leading-tight">
                A future where every city has its own digital marketplace powered by trusted local businesses and reliable delivery partners.
              </h2>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 6: OUR VALUES ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="values-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">What Drives Us</span>
            <h2 id="values-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Community First", desc: "Supporting local businesses and neighborhood communities.", icon: HeartHandshake },
              { title: "Trust & Transparency", desc: "Building relationships through honesty and reliability.", icon: ShieldCheck },
              { icon: Smartphone, title: "Customer Experience", desc: "Making every order simple, smooth and dependable." },
              { icon: Sparkle, title: "Innovation", desc: "Using technology to improve everyday local shopping." },
              { icon: LineChart, title: "Growth Together", desc: "Helping customers, businesses and delivery partners succeed together." },
              { icon: CheckCircle, title: "Reliability", desc: "Providing a platform people can depend on every day." }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={smoothTransition}
                  className="bg-[#FAF9FA] border border-neutral-200/80 rounded-2xl p-6 flex flex-col justify-between h-[190px] cursor-pointer"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/60 flex items-center justify-center text-brand-primary mb-4 shadow-3xs">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <h3 className="text-base font-bold text-brand-black tracking-tight">{value.title}</h3>
                    <p className="text-xs text-brand-gray-muted mt-2 leading-relaxed font-normal">{value.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 7: WHY LOCAL MATTERS ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100" aria-labelledby="local-matters-heading">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">The Real Impact</span>
              <h2 id="local-matters-heading" className="text-3xl md:text-4xl font-extrabold text-brand-black tracking-tight leading-tight">
                When local businesses grow, everyone benefits.
              </h2>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Stronger Economy", desc: "Money stays inside the local economy, creating cycles of prosperity." },
                { title: "Empowered Retail", desc: "Main street businesses become stronger and adaptable to digital ages." },
                { title: "Rapid Turnaround", desc: "Customers receive products faster because inventory is closer." },
                { title: "Tighter Connections", desc: "Neighborhood communities become more connected and reliant on one another." },
                { title: "Local Employment", desc: "Job and flexible income opportunities increase safely right inside town bounds." }
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

      {/* ================= SECTION 8: WHY CHOOSE RIVO ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-neutral-100" aria-labelledby="why-choose-heading">
        <div className="container-custom">
          
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">Simple Standards</span>
            <h2 id="why-choose-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Why Choose Rivo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Store, title: "Verified Local Businesses", desc: "Every shop is manually vetted before catalog onboarding." },
              { icon: Truck, title: "Fast Local Delivery", desc: "Handoffs occur quickly from neighborhood stores near you." },
              { icon: CreditCard, title: "Secure Payments", desc: "Safe checkout flows via protected digital choices or cash." },
              { icon: Navigation, title: "Real-Time Tracking", desc: "Follow your order step by step right until your handle turns." },
              { icon: ShoppingBag, title: "Simple Shopping Experience", desc: "A clean interface that removes regular shopping friction." },
              { icon: HomeIcon, title: "Built For Your City", desc: "Tailored to address the specific needs of your community grid." }
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

      {/* ================= SECTION 9: LOOKING AHEAD ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-neutral-100" aria-labelledby="forward-heading">
        <div className="container-custom">
          <div className="max-w-3xl text-left flex flex-col space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-primary font-bold block">The Road Forward</span>
            <h2 id="forward-heading" className="text-3xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Starting with one city.<br />
              Growing one community at a time.
            </h2>
            <p className="text-base md:text-lg text-brand-gray-muted font-light leading-relaxed max-w-2xl">
              We're beginning our journey in Baramati and look forward to expanding into more cities as we continue building a trusted local commerce platform.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 10: FINAL CTA ================= */}
      <section className="py-20 md:py-32 bg-white border-t border-b border-neutral-100" aria-labelledby="cta-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-8">
            
            <h2 id="cta-heading" className="text-4xl md:text-6xl font-black text-brand-black tracking-tight leading-[1.1]">
              Let's build better <br />
              local commerce together.
            </h2>
            
            <p className="text-base md:text-lg text-brand-gray-muted font-light leading-relaxed max-w-2xl">
              Whether you're shopping, growing your business or looking for flexible earning opportunities, Rivo is built to bring local communities together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <Button variant="primary" className="px-10 py-4 text-base font-semibold shadow-md shadow-brand-primary/10">
                Explore Rivo <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button variant="outline" className="px-10 py-4 text-base font-semibold bg-white">
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;