import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Gem, Glasses, Heart, Shirt, ShoppingBag, Sparkles, Store, Watch } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const categories = [
  { icon: Shirt, title: 'Clothing', detail: 'Everyday wear, occasion outfits and wardrobe essentials.' },
  { icon: ShoppingBag, title: 'Footwear & bags', detail: 'Shoes, sandals, handbags, backpacks and more.' },
  { icon: Gem, title: 'Jewellery & accessories', detail: 'Finishing touches, gifts and personal accessories.' },
  { icon: Glasses, title: 'Watches & eyewear', detail: 'Watches, sunglasses and everyday essentials.' },
];

const audiences = [
  { title: 'Women', detail: 'Ethnic wear, western styles, workwear and everyday fashion.' },
  { title: 'Men', detail: 'Casuals, formals, traditional wear and accessories.' },
  { title: 'Kids', detail: 'Comfortable clothing, festive outfits and footwear.' },
  { title: 'Local boutiques', detail: 'Discover independent stores, designers and tailoring.' },
];

const Fashion: React.FC = () => (
  <div className="overflow-hidden bg-white text-brand-black">
    <SEO title="Fashion & Clothing Stores Near You | RivoCity" description="Discover local clothing stores, boutiques, footwear, bags and fashion accessories on RivoCity." keywords="Baramati clothing stores, fashion boutiques, men's clothing, women's clothing, kids fashion, footwear" canonical="/fashion" />
    <section className="relative border-b border-neutral-100 bg-[#F8F8F6] py-16 sm:py-20 lg:py-28">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2ECC71]/25 bg-[#2ECC71]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-[#16864A]"><Sparkles className="h-4 w-4" /> RivoCity Fashion</span>
            <h1 className="mt-7 max-w-3xl text-5xl font-extrabold leading-[1.04] tracking-[-.045em] sm:text-6xl lg:text-7xl">Good style. <span className="text-[#20A85B]">Close by.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">Discover the fashion businesses that make your city unique. Browse local clothing stores, boutiques, footwear and accessories — and find something that feels like you.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#fashion-categories" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2ECC71] px-7 py-4 text-sm font-bold text-black transition hover:bg-[#27AE60]">Explore fashion <ArrowRight className="h-4 w-4" /></a><a href="https://vendor.rivocity.com/login?view=register" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-4 text-sm font-bold text-neutral-800 transition hover:border-[#2ECC71]">Bring your store to Rivo</a></div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-neutral-500"><span className="inline-flex items-center gap-2"><Store className="h-4 w-4 text-[#20A85B]" /> Independent stores</span><span className="inline-flex items-center gap-2"><Heart className="h-4 w-4 text-[#20A85B]" /> Local style</span><span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#20A85B]" /> Easy discovery</span></div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-[2rem] border border-neutral-200 bg-white p-3 shadow-[0_30px_80px_-42px_rgba(0,0,0,.3)]">
              <div className="flex aspect-[4/4.2] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-[#EDEBE4] p-6 sm:p-8">
                <div className="flex items-center justify-between"><span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-neutral-700">Find your local style</span><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2ECC71]"><ShoppingBag className="h-5 w-5" /></span></div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex aspect-[3/4] flex-col justify-between rounded-2xl bg-[#D5BBAA] p-3"><div className="mx-auto mt-3 h-20 w-14 rounded-t-[45%] rounded-b-lg bg-[#9B6C57]" /><span className="rounded-lg bg-white/80 px-2 py-2 text-center text-[10px] font-extrabold">Everyday</span></div>
                  <div className="mt-8 flex aspect-[3/4] flex-col justify-between rounded-2xl bg-[#B9C5B0] p-3"><div className="mx-auto mt-3 h-20 w-14 rounded-t-[45%] rounded-b-lg bg-[#50634D]" /><span className="rounded-lg bg-white/80 px-2 py-2 text-center text-[10px] font-extrabold">Your style</span></div>
                </div>
                <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm"><p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Local fashion</p><p className="mt-1 text-lg font-extrabold">Made for your city.</p></div>
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-neutral-200 bg-white p-4 shadow-lg"><p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Discover nearby</p><p className="mt-1 text-sm font-extrabold">Style starts here.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="fashion-categories" className="container-custom py-20 md:py-28">
      <div className="mb-12 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#20A85B]">Browse categories</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">A little something for every style.</h2><p className="mt-4 leading-7 text-neutral-600">From wardrobe staples to the details that complete a look, discover fashion across your city.</p></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{categories.map(({icon:Icon,title,detail},index)=><motion.article key={title} initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.06}} className="group rounded-3xl border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#2ECC71]/50 hover:shadow-xl hover:shadow-[#2ECC71]/[.06]"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2ECC71]/10 text-[#16864A]"><Icon className="h-6 w-6"/></span><h3 className="mt-6 text-lg font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-500">{detail}</p><span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#16864A]">Discover locally <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1"/></span></motion.article>)}</div>
    </section>

    <section className="border-y border-neutral-100 bg-[#FAF9FA] py-20 md:py-24"><div className="container-custom"><div className="mb-12 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#20A85B]">Shop your way</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Made for every wardrobe.</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{audiences.map((item,index)=><div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6"><span className="text-xs font-extrabold tracking-widest text-[#20A85B]">0{index+1}</span><h3 className="mt-4 text-xl font-extrabold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-neutral-500">{item.detail}</p></div>)}</div></div></section>

    <section className="container-custom py-20 md:py-24"><div className="grid gap-12 lg:grid-cols-2 lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#20A85B]">For fashion businesses</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Your store deserves to be discovered.</h2><p className="mt-5 max-w-xl leading-7 text-neutral-600">Bring your boutique, clothing store, footwear shop or accessories business into the RivoCity local discovery network. Help nearby customers find your store and explore what you offer.</p><a href="https://vendor.rivocity.com/login?view=register" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0D0D0D] px-7 py-4 text-sm font-bold text-white transition hover:bg-neutral-700">Register your store <ArrowRight className="h-4 w-4"/></a></div><div className="grid gap-3 sm:grid-cols-2">{[{icon:Store,title:'Boutiques & retailers',text:'Give your local store a digital storefront.'},{icon:BriefcaseBusiness,title:'Fashion brands',text:'Showcase collections and labels.'},{icon:Watch,title:'Accessories shops',text:'Highlight watches, jewellery and more.'},{icon:Shirt,title:'Tailors & designers',text:'Help customers discover your services.'}].map(({icon:Icon,title,text})=><div key={title} className="rounded-2xl border border-neutral-200 bg-white p-6"><Icon className="h-5 w-5 text-[#20A85B]"/><h3 className="mt-4 font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-500">{text}</p></div>)}</div></div></section>
    <section className="container-custom pb-20"><div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-[#0D0D0D] p-8 text-white sm:p-12 lg:flex-row lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#A8E63A]">One city. Infinite possibilities.</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Find more of what your city has to offer.</h2><p className="mt-3 max-w-xl text-sm leading-7 text-neutral-400">Discover local businesses and experiences with RivoCity.</p></div><Link to="/" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2ECC71] px-7 py-4 text-sm font-bold text-black transition hover:bg-[#A8E63A]">Back to RivoCity <ArrowRight className="h-4 w-4"/></Link></div></section>
  </div>
);

export default Fashion;
