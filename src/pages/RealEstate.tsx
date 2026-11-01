import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, CheckCircle2, Home, KeyRound, MapPin, Ruler, Store, Trees, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const propertyTypes = [
  { icon: Home, title: 'Homes & apartments', detail: 'Flats, independent houses and residential spaces.' },
  { icon: Building2, title: 'Commercial spaces', detail: 'Shops, offices, showrooms and workspaces.' },
  { icon: Trees, title: 'Plots & land', detail: 'Residential plots, agricultural land and open sites.' },
  { icon: KeyRound, title: 'Rentals', detail: 'Find a place to rent or list a property for tenants.' },
];

const steps = [
  { number: '01', title: 'Explore by property type', detail: 'Start with homes, commercial spaces, plots or rentals.' },
  { number: '02', title: 'Compare the details', detail: 'Review location, area, price, amenities and property photos.' },
  { number: '03', title: 'Connect directly', detail: 'Contact the owner, agent or developer to take the conversation forward.' },
];

const RealEstate: React.FC = () => (
  <div className="overflow-hidden bg-white text-brand-black">
    <SEO title="Real Estate in Your City | RivoCity" description="Discover homes, commercial spaces, plots and rental properties from local owners, agents and developers on RivoCity." keywords="Baramati real estate, property for sale, property for rent, flats, houses, commercial property" canonical="/real-estate" />
    <section className="relative border-b border-neutral-100 bg-[#F8FAF8] py-16 sm:py-20 lg:py-28">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2ECC71]/25 bg-[#2ECC71]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-[#16864A]"><Building2 className="h-4 w-4" /> RivoCity Real Estate</span>
            <h1 className="mt-7 max-w-3xl text-5xl font-extrabold leading-[1.04] tracking-[-.045em] sm:text-6xl lg:text-7xl">Find a place to <span className="text-[#20A85B]">belong.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">Explore property opportunities in your city — from a first home to a business location or a plot for the future. Discover local listings and connect with the people behind them.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#property-types" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2ECC71] px-7 py-4 text-sm font-bold text-black transition hover:bg-[#27AE60]">Explore property types <ArrowRight className="h-4 w-4" /></a>
              <a href="https://vendor.rivocity.com/login?view=register" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-4 text-sm font-bold text-neutral-800 transition hover:border-[#2ECC71]">List your property</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-neutral-500"><span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#20A85B]" /> Local discovery</span><span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#20A85B]" /> Clear property details</span><span className="inline-flex items-center gap-2"><Wallet className="h-4 w-4 text-[#20A85B]" /> Price transparency</span></div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-[2rem] border border-neutral-200 bg-white p-3 shadow-[0_30px_80px_-42px_rgba(0,0,0,.3)]">
              <div className="flex aspect-[4/4.2] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-[#E8F0E9] p-6 sm:p-8">
                <div className="flex items-center justify-between"><span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-neutral-700">A city of possibilities</span><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2ECC71]"><Home className="h-5 w-5" /></span></div>
                <div className="space-y-3">
                  <div className="ml-auto h-24 w-4/5 rounded-t-2xl border-4 border-white/80 bg-[#B6CDBA] shadow-sm" />
                  <div className="grid grid-cols-3 gap-2"><div className="h-24 rounded-xl bg-[#C8D9CA]" /><div className="h-24 rounded-xl bg-[#D5E1D5]" /><div className="h-24 rounded-xl bg-[#AFC7B3]" /></div>
                  <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm"><div className="flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Your next chapter</p><p className="mt-1 text-lg font-extrabold">Starts locally.</p></div><MapPin className="h-5 w-5 text-[#20A85B]" /></div></div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-neutral-200 bg-white p-4 shadow-lg"><p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Property discovery</p><p className="mt-1 text-sm font-extrabold">Made more local.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="property-types" className="container-custom py-20 md:py-28">
      <div className="mb-12 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#20A85B]">Explore real estate</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">What are you looking for?</h2><p className="mt-4 leading-7 text-neutral-600">A simple starting point for every kind of property search.</p></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {propertyTypes.map(({ icon: Icon, title, detail }, index) => <motion.article key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="group rounded-3xl border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#2ECC71]/50 hover:shadow-xl hover:shadow-[#2ECC71]/[.06]"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2ECC71]/10 text-[#16864A]"><Icon className="h-6 w-6" /></span><h3 className="mt-6 text-lg font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-500">{detail}</p><span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#16864A]">Explore category <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></motion.article>)}
      </div>
    </section>

    <section className="border-y border-neutral-100 bg-[#FAF9FA] py-20 md:py-24">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#20A85B]">For property owners & professionals</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Put your property in the local spotlight.</h2><p className="mt-5 max-w-xl leading-7 text-neutral-600">Owners, real estate agents, builders and developers can use RivoCity to make their properties easier for people in the city to discover.</p><a href="https://vendor.rivocity.com/login?view=register" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0D0D0D] px-7 py-4 text-sm font-bold text-white transition hover:bg-neutral-700">Enquire about listing <ArrowRight className="h-4 w-4" /></a></div>
          <div className="grid gap-3 sm:grid-cols-2">{[{icon:Store,title:'Agents & brokers',text:'Showcase your available properties.'},{icon:Home,title:'Property owners',text:'Reach people searching locally.'},{icon:Building2,title:'Builders & developers',text:'Present projects and developments.'},{icon:Ruler,title:'Useful details',text:'Share area, pricing, photos and location.'}].map(({icon:Icon,title,text})=><div key={title} className="rounded-2xl border border-neutral-200 bg-white p-6"><Icon className="h-5 w-5 text-[#20A85B]" /><h3 className="mt-4 font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-500">{text}</p></div>)}</div>
        </div>
      </div>
    </section>

    <section className="container-custom py-20 md:py-24">
      <div className="mb-12 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#20A85B]">A clearer way to start</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Your property search, in three steps.</h2></div>
      <div className="grid gap-8 md:grid-cols-3">{steps.map((step)=><div key={step.number} className="border-t-2 border-[#2ECC71] pt-5"><span className="text-xs font-extrabold tracking-widest text-[#20A85B]">{step.number}</span><h3 className="mt-4 text-xl font-extrabold">{step.title}</h3><p className="mt-2 text-sm leading-7 text-neutral-500">{step.detail}</p></div>)}</div>
    </section>
    <section className="container-custom pb-20"><div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-[#0D0D0D] p-8 text-white sm:p-12 lg:flex-row lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#A8E63A]">One city. Infinite possibilities.</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Discover what’s next, close to home.</h2><p className="mt-3 max-w-xl text-sm leading-7 text-neutral-400">Explore the wider RivoCity local discovery experience.</p></div><Link to="/" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2ECC71] px-7 py-4 text-sm font-bold text-black transition hover:bg-[#A8E63A]">Back to RivoCity <ArrowRight className="h-4 w-4" /></Link></div></section>
  </div>
);

export default RealEstate;
