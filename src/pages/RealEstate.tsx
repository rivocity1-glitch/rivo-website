import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Building2, CheckCircle2, ChevronDown, Home, KeyRound,
  MapPin, Phone, Search, ShieldCheck, Trees, Wallet, X
} from 'lucide-react';
import SEO from '../components/SEO';

type Property = {
  id: number;
  title: string;
  type: 'Apartment' | 'Independent house' | 'Plot' | 'Commercial';
  purpose: 'For sale' | 'For rent';
  locality: string;
  city: string;
  price: string;
  area: string;
  beds?: number;
  image: string;
  highlights: string[];
  advertiser: string;
  advertiserType: 'Builder' | 'Owner' | 'Agent';
  phone: string;
  description: string;
};

const properties: Property[] = [
  {
    id: 1, title: 'Modern 2 BHK apartment', type: 'Apartment', purpose: 'For sale',
    locality: 'Bhigwan Road', city: 'Baramati', price: '₹48 lakh onwards',
    area: '1,050 sq. ft.', beds: 2,
    image: 'https://images.unsplash.com/photo-1600604670456-55f2e9b4a2a7?auto=format&fit=crop&w=1200&q=85',
    highlights: ['2 bedrooms', 'Covered parking', 'Lift facility'],
    advertiser: 'Sample Developer', advertiserType: 'Builder', phone: '+919999999999',
    description: 'A sample preview of how a residential project can be presented. Confirm availability, approvals, specifications and final pricing directly with the advertiser.'
  },
  {
    id: 2, title: 'Residential plot opportunity', type: 'Plot', purpose: 'For sale',
    locality: 'Morgaon Road', city: 'Baramati', price: 'Contact for price',
    area: '2,000 sq. ft.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Residential plot', 'Road access', 'Site visit by appointment'],
    advertiser: 'Sample Property Owner', advertiserType: 'Owner', phone: '+919999999999',
    description: 'Illustrative listing only. The location, title, land use, boundaries and ownership documents must be independently checked before any transaction.'
  },
  {
    id: 3, title: 'Ground-floor commercial space', type: 'Commercial', purpose: 'For rent',
    locality: 'Market Yard Area', city: 'Baramati', price: '₹22,000 / month',
    area: '650 sq. ft.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Street-facing', 'Commercial use', 'Viewing by appointment'],
    advertiser: 'Sample Local Agent', advertiserType: 'Agent', phone: '+919999999999',
    description: 'Illustrative commercial rental preview. Verify permitted use, deposit, rent, maintenance and agreement terms with the advertiser.'
  }
];

const propertyTypes = [
  { icon: Home, title: 'Homes & apartments', detail: 'Flats, independent houses and residential spaces.' },
  { icon: Building2, title: 'Commercial spaces', detail: 'Shops, offices, showrooms and workspaces.' },
  { icon: Trees, title: 'Plots & land', detail: 'Residential plots, agricultural land and open sites.' },
  { icon: KeyRound, title: 'Rentals', detail: 'Find a place to rent or list a property for tenants.' }
];

const steps = [
  { number: '01', title: 'Explore local listings', detail: 'Browse property previews, photos, pricing and location details.' },
  { number: '02', title: 'Contact the advertiser', detail: 'Send an enquiry to the owner, agent or builder using the contact details on the listing.' },
  { number: '03', title: 'Arrange a visit', detail: 'Discuss availability and book a site visit or meeting directly with the advertiser.' }
];

const RealEstate: React.FC = () => {
  const [query, setQuery] = useState('');
  const [purpose, setPurpose] = useState('All');
  const [type, setType] = useState('All');
  const [selected, setSelected] = useState<Property | null>(null);
  const [enquirySent, setEnquirySent] = useState(false);

  const filteredProperties = useMemo(() => properties.filter((property) => {
    const search = query.trim().toLowerCase();
    const matchesSearch = !search || [property.title, property.locality, property.city, property.type].some((value) => value.toLowerCase().includes(search));
    return matchesSearch && (purpose === 'All' || property.purpose === purpose) && (type === 'All' || property.type === type);
  }), [query, purpose, type]);

  const openDetails = (property: Property) => {
    setSelected(property);
    setEnquirySent(false);
  };

  const submitEnquiry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selected) return;
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '');
    const phone = String(form.get('phone') || '');
    const message = String(form.get('message') || '');
    const subject = encodeURIComponent('Property enquiry: ' + selected.title);
    const body = encodeURIComponent(
      'Property: ' + selected.title + '\nName: ' + name + '\nPhone: ' + phone + '\nMessage: ' + message +
      '\n\nPlease contact me to discuss availability and arrange a visit.'
    );
    window.location.href = 'mailto:support@rivocity.com?subject=' + subject + '&body=' + body;
    setEnquirySent(true);
  };

  return (
    <div className="overflow-hidden bg-white text-brand-black">
      <SEO title="Local Property Listings | RivoCity Real Estate" description="Preview local homes, plots and commercial properties. Explore listing details, contact the owner, agent or builder, and arrange a site visit directly." keywords="Baramati property listings, homes for sale, plots, commercial property, property rent, builders Baramati" canonical="/real-estate" />
      <section className="relative border-b border-neutral-100 bg-[#F8FAF8] py-16 sm:py-20 lg:py-24">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#2ECC71]/25 bg-[#2ECC71]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-[#16864A]"><Building2 className="h-4 w-4" /> RivoCity Property Discovery</span>
              <h1 className="mt-7 max-w-3xl text-5xl font-extrabold leading-[1.04] tracking-[-.045em] sm:text-6xl lg:text-7xl">Find a place to <span className="text-[#20A85B]">belong.</span></h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">Browse property previews from local owners, agents and builders. Review the details, contact the advertiser and arrange a visit directly.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#listings" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2ECC71] px-7 py-4 text-sm font-bold text-black transition hover:bg-[#27AE60]">Browse properties <ArrowRight className="h-4 w-4" /></a>
                <a href="mailto:support@rivocity.com?subject=List%20a%20property%20on%20RivoCity" className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-4 text-sm font-bold text-neutral-800 transition hover:border-[#2ECC71]">List your property</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-neutral-500"><span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#20A85B]" /> Local property discovery</span><span className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-[#20A85B]" /> Direct advertiser contact</span><span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#20A85B]" /> Verify before you commit</span></div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-3 shadow-[0_30px_80px_-42px_rgba(0,0,0,.3)]">
                <img className="aspect-[4/4.2] w-full rounded-[1.5rem] object-cover" src="https://images.unsplash.com/photo-1600604670456-55f2e9b4a2a7?auto=format&fit=crop&w=1200&q=85" alt="Modern residential home exterior" />
                <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-lg"><p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Your next chapter</p><p className="mt-1 text-lg font-extrabold">Starts locally.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="listings" className="container-custom py-20 md:py-28">
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#20A85B]">Property previews</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Explore local listings.</h2><p className="mt-4 leading-7 text-neutral-600">Preview a property and contact its advertiser to ask questions or arrange a visit.</p></div>
          <span className="text-xs font-semibold text-neutral-400">Demo listings · Replace with verified live listings</span>
        </div>
        <div className="mb-8 grid gap-3 rounded-3xl border border-neutral-200 bg-[#FAFBFA] p-4 md:grid-cols-[1fr_190px_190px]">
          <label className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4"><Search className="h-4 w-4 text-neutral-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search locality, property or city" className="h-12 w-full bg-transparent text-sm outline-none" /></label>
          <label className="relative"><span className="sr-only">Listing purpose</span><select value={purpose} onChange={(event) => setPurpose(event.target.value)} className="h-12 w-full appearance-none rounded-2xl border border-neutral-200 bg-white px-4 pr-10 text-sm font-semibold"><option>All</option><option>For sale</option><option>For rent</option></select><ChevronDown className="pointer-events-none absolute right-4 top-4 h-4 w-4 text-neutral-400" /></label>
          <label className="relative"><span className="sr-only">Property type</span><select value={type} onChange={(event) => setType(event.target.value)} className="h-12 w-full appearance-none rounded-2xl border border-neutral-200 bg-white px-4 pr-10 text-sm font-semibold"><option>All</option><option>Apartment</option><option>Independent house</option><option>Plot</option><option>Commercial</option></select><ChevronDown className="pointer-events-none absolute right-4 top-4 h-4 w-4 text-neutral-400" /></label>
        </div>
        {filteredProperties.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filteredProperties.map((property, index) => <motion.article key={property.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }} className="overflow-hidden rounded-3xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[.06]">
          <div className="relative"><img src={property.image} alt={property.title} loading="lazy" className="h-56 w-full object-cover" /><span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider">{property.purpose}</span><span className="absolute right-4 top-4 rounded-full bg-[#0D0D0D]/80 px-3 py-1.5 text-[10px] font-bold text-white">{property.type}</span></div>
          <div className="p-6"><div className="flex items-start justify-between gap-3"><h3 className="text-lg font-extrabold">{property.title}</h3><span className="shrink-0 text-sm font-extrabold text-[#16864A]">{property.price}</span></div><p className="mt-2 flex items-center gap-1.5 text-xs text-neutral-500"><MapPin className="h-3.5 w-3.5" />{property.locality}, {property.city}</p><div className="mt-4 flex gap-4 border-y border-neutral-100 py-3 text-xs font-semibold text-neutral-600"><span className="inline-flex items-center gap-1.5"><Trees className="h-4 w-4 text-[#20A85B]" />{property.area}</span>{property.beds && <span className="inline-flex items-center gap-1.5"><Home className="h-4 w-4 text-[#20A85B]" />{property.beds} BHK</span>}</div><button onClick={() => openDetails(property)} className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#0D0D0D] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#218C50]">View property & contact <ArrowRight className="h-4 w-4" /></button></div>
        </motion.article>)}</div> : <div className="rounded-3xl border border-dashed border-neutral-300 py-16 text-center"><Search className="mx-auto h-8 w-8 text-neutral-300" /><p className="mt-4 font-bold">No matching properties</p><p className="mt-1 text-sm text-neutral-500">Try a different search or clear your filters.</p></div>}
      </section>

      <section className="border-y border-neutral-100 bg-[#FAF9FA] py-20 md:py-24"><div className="container-custom"><div className="grid gap-12 lg:grid-cols-2 lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#20A85B]">How it works</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Discover here. Connect directly.</h2><p className="mt-5 max-w-xl leading-7 text-neutral-600">RivoCity is the discovery layer. Property discussions, negotiations, document checks, payments and agreements take place directly between you and the advertiser, outside the RivoCity app.</p></div><div className="grid gap-3 sm:grid-cols-2">{[{icon:Phone,title:'Direct contact',text:'Reach the advertiser using the details shared on the property listing.'},{icon:MapPin,title:'Arrange a visit',text:'Discuss a site visit or meeting directly with the owner, agent or builder.'},{icon:Wallet,title:'Discuss terms',text:'Confirm the price, deposit, availability and conditions with the advertiser.'},{icon:ShieldCheck,title:'Do your checks',text:'Independently verify ownership, approvals, title, RERA details where applicable and agreements.'}].map(({icon:Icon,title,text})=><div key={title} className="rounded-2xl border border-neutral-200 bg-white p-6"><Icon className="h-5 w-5 text-[#20A85B]" /><h3 className="mt-4 font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-500">{text}</p></div>)}</div></div></div></section>

      <section className="container-custom py-20 md:py-24"><div className="mb-12 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#20A85B]">A simple starting point</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Your property search, in three steps.</h2></div><div className="grid gap-8 md:grid-cols-3">{steps.map((step)=><div key={step.number} className="border-t-2 border-[#2ECC71] pt-5"><span className="text-xs font-extrabold tracking-widest text-[#20A85B]">{step.number}</span><h3 className="mt-4 text-xl font-extrabold">{step.title}</h3><p className="mt-2 text-sm leading-7 text-neutral-500">{step.detail}</p></div>)}</div></section>
      <section className="container-custom pb-20"><div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-[#0D0D0D] p-8 text-white sm:p-12 lg:flex-row lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#A8E63A]">For owners, builders & agents</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Showcase your property to your city.</h2><p className="mt-3 max-w-xl text-sm leading-7 text-neutral-400">Contact RivoCity to enquire about featuring your property listing.</p></div><a href="mailto:support@rivocity.com?subject=List%20a%20property%20on%20RivoCity" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2ECC71] px-7 py-4 text-sm font-bold text-black transition hover:bg-[#A8E63A]">Enquire to list <ArrowRight className="h-4 w-4" /></a></div></section>

      {selected && <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/55 p-0 backdrop-blur-sm sm:items-center sm:p-5" role="dialog" aria-modal="true" aria-labelledby="property-dialog-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
        <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
          <div className="relative"><img src={selected.image} alt={selected.title} className="h-56 w-full object-cover sm:h-64" /><button onClick={() => setSelected(null)} aria-label="Close property details" className="absolute right-4 top-4 rounded-full bg-white p-2.5 text-neutral-800 shadow"><X className="h-4 w-4" /></button><span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold">{selected.purpose}</span></div>
          <div className="p-6 sm:p-8"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-wider text-[#16864A]">{selected.type}</p><h2 id="property-dialog-title" className="mt-2 text-2xl font-extrabold">{selected.title}</h2><p className="mt-2 flex items-center gap-1.5 text-sm text-neutral-500"><MapPin className="h-4 w-4" />{selected.locality}, {selected.city}</p></div><p className="text-lg font-extrabold text-[#16864A]">{selected.price}</p></div>
            <p className="mt-5 text-sm leading-7 text-neutral-600">{selected.description}</p><div className="mt-5 flex flex-wrap gap-2">{selected.highlights.map((item)=><span key={item} className="rounded-full bg-[#F1F7F2] px-3 py-2 text-xs font-semibold text-[#276B42]">{item}</span>)}</div>
            <div className="mt-6 rounded-2xl border border-neutral-200 p-5"><p className="text-xs font-bold uppercase tracking-wider text-neutral-400">Advertiser details</p><p className="mt-2 font-extrabold">{selected.advertiser}</p><p className="mt-1 text-sm text-neutral-500">{selected.advertiserType}</p><div className="mt-4 flex flex-wrap gap-3"><a href={'tel:' + selected.phone} className="inline-flex items-center gap-2 rounded-full bg-[#2ECC71] px-5 py-3 text-sm font-bold text-black"><Phone className="h-4 w-4" /> Call advertiser</a><a href={'https://wa.me/' + selected.phone.replace(/\D/g, '') + '?text=' + encodeURIComponent('Hello, I am enquiring about ' + selected.title)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3 text-sm font-bold">WhatsApp</a></div></div>
            <form onSubmit={submitEnquiry} className="mt-6 space-y-3"><h3 className="font-extrabold">Request a callback / site visit</h3><p className="text-xs leading-5 text-neutral-500">This opens your email app with the enquiry addressed to RivoCity support. It is not an in-platform booking or confirmed appointment.</p><div className="grid gap-3 sm:grid-cols-2"><input name="name" required placeholder="Your name" className="h-12 rounded-xl border border-neutral-200 px-4 text-sm" /><input name="phone" required type="tel" placeholder="Your phone number" className="h-12 rounded-xl border border-neutral-200 px-4 text-sm" /></div><textarea name="message" rows={3} placeholder="I would like to know more / arrange a site visit..." className="w-full rounded-xl border border-neutral-200 p-4 text-sm" /><button type="submit" className="w-full rounded-full bg-[#0D0D0D] px-6 py-4 text-sm font-bold text-white hover:bg-neutral-700">Prepare enquiry email <ArrowRight className="ml-2 inline h-4 w-4" /></button>{enquirySent && <p className="text-xs font-semibold text-[#16864A]">Your email app should open with the enquiry prepared. Send it to submit the request.</p>}</form>
            <p className="mt-6 rounded-xl bg-[#FFF8E8] p-4 text-xs leading-6 text-[#805B17]">RivoCity displays property information supplied by advertisers. Listings shown here are demonstration content, not verified offers. Verify advertiser identity, title, approvals, RERA registration where applicable, property status and all terms independently. RivoCity does not sell, rent, broker, reserve or accept payment for property through this page.</p>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default RealEstate;
