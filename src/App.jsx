import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera, Satellite, Wifi, Network, Sun, Laptop, Phone, Mail, MapPin,
  ArrowRight, CheckCircle2, Lock, Sparkles, Menu, X, Home,
  BriefcaseBusiness, MessageCircle, Building2, Router, Zap, ShoppingBag,
  Cpu, Radar, ChevronRight, FileText, Send, UserRound, ClipboardCheck,
  Globe, Users
} from "lucide-react";

const WHATSAPP_NUMBER = "263775131446";
const COMPANY_EMAIL = "info@onetechitservices.co.zw";
const COMPANY_PHONE = "+263 775 131 446";
const COMPANY_LOCATION = "Mutare Trade Centre, Shop 69 & 80";

const socialLinks = {
  facebook: "#",   
  instagram: "#",  
  linkedin: "#",   
  website: "#",    
};

const services = [
  {
    slug: "cctv",
    icon: Camera,
    title: "CCTV Installation",
    intro: "Smart surveillance for homes, shops, offices and commercial premises.",
    text: "We install HD cameras, DVR/NVR systems, remote viewing, clean cabling and secure camera positioning.",
    points: ["Indoor & outdoor cameras", "Remote phone viewing", "DVR/NVR setup", "Solar-powered options"],
    images: ["/images/cctv/cctv-1.jpg", "/images/cctv/cctv-2.jpg", "/images/cctv/cctv-3.jpg", "/images/cctv/cctv-4.jpg", "/images/cctv/cctv-5.jpg", "/images/cctv/cctv-6.jpg"],
    gradient: "from-red-500 to-red-950",
  },
  {
    slug: "starlink",
    icon: Satellite,
    title: "Starlink Installation",
    intro: "High-speed satellite internet setup with professional mounting and alignment.",
    text: "We install and configure Starlink for homes, businesses, farms and remote sites that need fast internet.",
    points: ["Dish mounting", "Cable routing", "Router setup", "Speed testing"],
    images: ["/images/network/network-1.jpg", "/images/network/network-2.jpg", "/images/network/network-3.jpg"],
    gradient: "from-red-400 to-zinc-950",
  },
  {
    slug: "consulting",
    icon: Laptop,
    title: "IT Consulting",
    intro: "Practical IT advice for better systems, fewer issues and smarter growth.",
    text: "We help you choose the right devices, networks, security systems and support approach for your environment.",
    points: ["IT planning", "Device recommendations", "Business support", "Digital upgrades"],
    images: ["/images/network/network-2.jpg", "/images/network/network-3.jpg", "/images/cctv/cctv-1.jpg"],
    gradient: "from-zinc-700 to-red-950",
  },
  {
    slug: "wifi",
    icon: Wifi,
    title: "WiFi Extension & Hotspot Setup",
    intro: "Stronger WiFi coverage and managed hotspot solutions.",
    text: "We extend coverage, reduce dead zones, configure access points and set up guest hotspot access.",
    points: ["Access points", "Guest hotspots", "Coverage extension", "Router optimisation"],
    images: ["/images/network/network-4.jpg", "/images/network/network-5.jpg", "/images/network/network-1.jpg"],
    gradient: "from-red-600 to-black",
  },
  {
    slug: "network",
    icon: Network,
    title: "Network Infrastructure",
    intro: "Structured cabling, switching, routing and business network upgrades.",
    text: "We design and install clean, scalable network infrastructure that supports daily business operations.",
    points: ["Structured cabling", "Switches & routers", "Cabinet setup", "LAN upgrades"],
    images: ["/images/network/network-1.jpg", "/images/network/network-4.jpg", "/images/network/network-5.jpg"],
    gradient: "from-red-500 to-zinc-900",
  },
  {
    slug: "solar",
    icon: Sun,
    title: "Solar Installation",
    intro: "Solar backup solutions for homes, businesses, cameras and internet systems.",
    text: "We install solar panels, inverters and batteries to keep critical systems running even during power cuts.",
    points: ["Solar panels", "Inverters", "Battery backup", "Maintenance support"],
    images: ["/images/solar/solar-1.jpg", "/images/solar/solar-2.jpg", "/images/solar/solar-3.jpg", "/images/solar/solar-4.jpg", "/images/solar/solar-5.jpg"],
    gradient: "from-orange-500 to-red-950",
  },
  {
    slug: "gadgets",
    icon: ShoppingBag,
    title: "IT Gadgets",
    intro: "Useful tech devices and accessories for work, connectivity and security.",
    text: "We supply and advise on tech gadgets that improve productivity, internet access, safety and convenience.",
    points: ["Routers", "Cameras", "Smart accessories", "Tech recommendations"],
    images: ["/images/network/network-2.jpg", "/images/network/network-3.jpg", "/images/cctv/cctv-1.jpg"],
    gradient: "from-zinc-800 to-red-700",
  },
];

const pages = [
  { id: "home", label: "Home", icon: Home },
  { id: "services", label: "Services", icon: BriefcaseBusiness },
  { id: "projects", label: "Solutions", icon: Building2 },
  { id: "team", label: "Team", icon: Users },
  { id: "contact", label: "Contact", icon: MessageCircle },
  { id: "quote", label: "Quote", icon: FileText },
];

function TechBackground() {
  return <>
    <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(239,68,68,0.38),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.13),transparent_25%),radial-gradient(circle_at_50%_90%,rgba(185,28,28,0.22),transparent_30%),linear-gradient(135deg,#050505_0%,#170101_46%,#020202_100%)]" />
    <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.65) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.65) 1px, transparent 1px)", backgroundSize: "42px 42px" }} />
    <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.18]" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(239,68,68,.9) 0 1px, transparent 2px), radial-gradient(circle at 80% 60%, rgba(255,255,255,.8) 0 1px, transparent 2px)", backgroundSize: "90px 90px" }} />
  </>;
}

function Logo({ small = false }) {
  return <img src="/images/brand/logo.jpg" alt="OneTech IT Services" className={`${small ? "h-12 w-12" : "h-24 w-24"} rounded-full object-cover bg-white shadow-xl`} />;
}

function AppShell({ page, setPage, children }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen overflow-hidden bg-[#050505] text-white">
    <TechBackground />
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button onClick={() => setPage("home")} className="flex items-center gap-3 text-left"><Logo small /><div><p className="text-xl font-black"><span className="text-red-500">One</span>Tech</p><p className="-mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/55">IT Services</p></div></button>
        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm font-semibold text-white/70 backdrop-blur-xl lg:flex">
          {pages.map((p) => { const Icon = p.icon; return <button key={p.id} onClick={() => setPage(p.id)} className={`flex items-center gap-2 rounded-full px-4 py-2.5 transition ${page === p.id ? "bg-white text-red-800" : "hover:bg-white/10 hover:text-white"}`}><Icon size={16} /> {p.label}</button>; })}
        </nav>
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="hidden rounded-full bg-green-500 px-5 py-2.5 text-sm font-black text-white shadow-xl transition hover:bg-green-600 lg:inline-flex">WhatsApp</a>
        <button onClick={() => setOpen(true)} className="rounded-full border border-white/10 bg-white/5 p-3 lg:hidden"><Menu /></button>
      </div>
    </header>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] bg-black/85 p-6 backdrop-blur-xl lg:hidden"><div className="flex justify-end"><button onClick={() => setOpen(false)} className="rounded-full bg-white p-3 text-red-800"><X /></button></div><div className="mt-10 grid gap-3">{pages.map((p) => <button key={p.id} onClick={() => { setPage(p.id); setOpen(false); }} className="rounded-3xl border border-white/10 bg-white/10 px-6 py-5 text-left text-xl font-black">{p.label}</button>)}</div></motion.div>}</AnimatePresence>
    <main className="relative z-10">{children}</main>
    <WhatsAppFloat />
    <footer className="relative z-10 border-t border-white/10 bg-black/60 px-6 py-10 text-center text-sm text-white/50">© 2026 OneTech IT Services. Experts in Technology Solutions.</footer>
  </div>;
}

function WhatsAppFloat() {
  return <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi OneTech, I would like to request a quotation.")}`} target="_blank" className="fixed bottom-6 right-6 z-[90] flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 font-black text-white shadow-2xl shadow-green-900/40 transition hover:scale-105"><MessageCircle /> Chat on WhatsApp</a>;
}

function HeroGraphic() {
  return <div className="relative mx-auto h-[650px] w-full max-w-[650px]">
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 48, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 h-[570px] w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-400/25" />
    <motion.div animate={{ rotate: -360 }} transition={{ duration: 32, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 border-dashed" />
    <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[3.5rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl"><img src="/images/solar/solar-5.jpg" className="h-full w-full rounded-[2.7rem] object-cover opacity-80" /><div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-t from-black via-black/20 to-transparent" /><div className="absolute bottom-8 left-8"><Logo /><h3 className="mt-4 text-3xl font-black">Real projects. Real results.</h3></div></div>
    {[{icon:Camera,label:"CCTV",x:"8%",y:"18%"},{icon:Satellite,label:"Starlink",x:"70%",y:"8%"},{icon:Wifi,label:"WiFi",x:"82%",y:"55%"},{icon:Sun,label:"Solar",x:"16%",y:"72%"},{icon:Lock,label:"Security",x:"53%",y:"80%"}].map((n,i)=>{const Icon=n.icon;return <motion.div key={n.label} initial={{ opacity:0, scale:.5 }} animate={{ opacity:1, scale:1 }} transition={{ delay:.25+i*.1 }} className="absolute" style={{left:n.x,top:n.y}}><motion.div animate={{ y:[0,-14,0] }} transition={{ duration:3.2+i*.25, repeat:Infinity }} className="rounded-[1.7rem] border border-white/15 bg-black/35 p-5 text-white shadow-2xl backdrop-blur-2xl"><Icon className="mx-auto text-red-100" size={31}/><p className="mt-2 text-center text-xs font-black uppercase tracking-widest">{n.label}</p></motion.div></motion.div>})}
  </div>;
}

function HomePage({ setPage, openQuote, openService }) {
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <section className="px-6 py-16 md:py-24"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]"><div><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-100 backdrop-blur-xl"><Sparkles size={17}/> Premium IT, Security, Solar & Connectivity</div><h1 className="max-w-4xl text-6xl font-black leading-[0.92] tracking-[-0.065em] md:text-8xl lg:text-9xl">Smart technology, installed with <span className="bg-gradient-to-r from-red-400 via-red-500 to-white bg-clip-text text-transparent">precision.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">OneTech IT Services helps homes and businesses stay secure, connected and powered through CCTV, Starlink, WiFi, networking, solar and IT gadgets.</p><div className="mt-9 flex flex-col gap-4 sm:flex-row"><button onClick={() => openQuote()} className="group inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-4 font-black text-white shadow-2xl shadow-red-700/30 hover:bg-red-500">Request a Quote <ArrowRight className="ml-2" size={19}/></button><button onClick={() => setPage("services")} className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-black text-white backdrop-blur-xl hover:bg-white/10">Explore Services</button></div></div><HeroGraphic /></div></section>
    <section className="px-6 pb-24"><div className="mx-auto max-w-7xl"><div className="flex items-end justify-between gap-6"><div><p className="font-black uppercase tracking-[0.35em] text-red-400">Popular Services</p><h2 className="mt-4 text-5xl font-black tracking-[-0.05em] md:text-7xl">Choose a service.</h2></div></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.slice(0,4).map(s => <ServiceCard key={s.slug} service={s} openService={openService} openQuote={openQuote}/>)}</div></div></section>
    <TeamPreview setPage={setPage}/>
  </motion.div>;
}

function ServiceCard({ service, openService, openQuote }) { const Icon = service.icon; return <motion.div whileHover={{ y: -8 }} className="group overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.055] shadow-2xl backdrop-blur-xl"><div className="relative h-52 overflow-hidden"><img src={service.images[0]} className="h-full w-full object-cover transition duration-700 group-hover:scale-110"/><div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"/><div className="absolute bottom-4 left-4 rounded-2xl bg-red-600 p-3"><Icon/></div></div><div className="p-6"><h3 className="text-2xl font-black">{service.title}</h3><p className="mt-3 leading-7 text-white/60">{service.intro}</p><div className="mt-6 flex gap-3"><button onClick={() => openService(service.slug)} className="rounded-full bg-white px-5 py-3 text-sm font-black text-red-800">View details</button><button onClick={() => openQuote(service.slug)} className="rounded-full bg-red-600 px-5 py-3 text-sm font-black text-white">Quote</button></div></div></motion.div> }

function ServicesPage({ openService, openQuote }) { return <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="px-6 py-20"><div className="mx-auto max-w-7xl"><p className="font-black uppercase tracking-[0.35em] text-red-400">Services</p><h1 className="mt-4 max-w-4xl text-6xl font-black tracking-[-0.06em] md:text-8xl">Click any service to view its landing page.</h1><div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(s => <ServiceCard key={s.slug} service={s} openService={openService} openQuote={openQuote}/>)}</div></div></motion.div> }

function ServiceDetailPage({ serviceSlug, openQuote, setPage }) { const service = services.find(s => s.slug === serviceSlug) || services[0]; const Icon = service.icon; return <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="px-6 py-20"><div className="mx-auto max-w-7xl"><button onClick={() => setPage("services")} className="mb-6 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-bold text-white/80">← Back to Services</button><div className={`relative overflow-hidden rounded-[3.5rem] border border-white/10 bg-gradient-to-br ${service.gradient} p-8 shadow-2xl md:p-12`}><div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/15 blur-3xl"/><div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><div className="inline-flex rounded-[2rem] bg-white/15 p-5 ring-1 ring-white/15"><Icon size={52}/></div><h1 className="mt-8 text-6xl font-black tracking-[-0.06em] md:text-8xl">{service.title}</h1><p className="mt-6 max-w-2xl text-xl leading-9 text-white/80">{service.text}</p><div className="mt-9 grid gap-4 md:grid-cols-2">{service.points.map(p => <div key={p} className="rounded-2xl bg-white/12 p-5 font-bold ring-1 ring-white/10"><CheckCircle2 className="mb-3 text-red-100"/>{p}</div>)}</div><button onClick={() => openQuote(service.slug)} className="mt-9 rounded-full bg-white px-8 py-4 font-black text-red-800 shadow-xl">Request quotation</button></div><div className="grid grid-cols-2 gap-4">{service.images.slice(0,4).map((img,i)=><img key={img} src={img} className={`${i===0 ? "col-span-2 h-80" : "h-44"} w-full rounded-[2rem] object-cover shadow-2xl`}/>)}</div></div></div><div className="mt-8 grid gap-5 md:grid-cols-3">{service.images.slice(4).map(img => <img key={img} src={img} className="h-72 w-full rounded-[2rem] object-cover"/> )}</div></div></motion.div> }

function ProjectsPage({ openQuote }) { return <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="px-6 py-20"><div className="mx-auto max-w-7xl"><div className="rounded-[3.5rem] border border-white/10 bg-gradient-to-br from-red-600 via-red-800 to-black p-8 shadow-2xl md:p-12"><p className="font-black uppercase tracking-[0.35em] text-red-100">Solutions</p><h1 className="mt-4 text-6xl font-black tracking-[-0.06em] md:text-8xl">Packages that solve real customer problems.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-red-50/75">Business office setups, smart homes, hotspot businesses and solar-backed security systems.</p></div><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[{icon:Building2,title:"Business Office Setup",text:"CCTV, LAN cabling, WiFi coverage, routers, switches and backup power."},{icon:Home,title:"Smart Home Setup",text:"Home surveillance, Starlink, WiFi extension and gadget recommendations."},{icon:Router,title:"Hotspot Business Setup",text:"Guest WiFi, hotspot access, network layout and coverage planning."},{icon:Zap,title:"Always-On Connectivity",text:"Solar support for internet, cameras and critical technology devices."}].map(c => <div key={c.title} className="rounded-[2.2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl backdrop-blur-xl"><c.icon className="text-red-300" size={40}/><h3 className="mt-6 text-2xl font-black">{c.title}</h3><p className="mt-4 leading-7 text-white/58">{c.text}</p></div>)}</div><button onClick={() => openQuote()} className="mt-8 rounded-full bg-red-600 px-8 py-4 font-black text-white">Book a site assessment</button></div></motion.div> }

function TeamPreview({ setPage }) { return <section className="px-6 pb-24"><div className="mx-auto max-w-7xl rounded-[3.5rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl backdrop-blur-xl md:p-12"><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="font-black uppercase tracking-[0.35em] text-red-400">Meet Our Team</p><h2 className="mt-4 text-5xl font-black tracking-[-0.05em]">The people behind the installations.</h2><button onClick={() => setPage("team")} className="mt-8 rounded-full bg-red-600 px-7 py-4 font-black text-white">View Team</button></div><TeamGrid /></div></div></section> }
function TeamGrid() { return <div className="grid gap-5 md:grid-cols-2">{[{name:"OneTech Technical Lead",role:"Solar, CCTV & Network Installations",img:"/images/team/team-1.jpg"},{name:"OneTech Field Specialist",role:"WiFi, Starlink & Customer Support",img:"/images/team/team-2.jpg"}].map(t => <div key={t.name} className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-black/25"><img src={t.img} className="h-80 w-full object-cover"/><div className="p-6"><h3 className="text-2xl font-black">{t.name}</h3><p className="mt-2 text-red-200">{t.role}</p></div></div>)}</div> }
function TeamPage() { return <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="px-6 py-20"><div className="mx-auto max-w-7xl"><p className="font-black uppercase tracking-[0.35em] text-red-400">Team</p><h1 className="mt-4 text-6xl font-black tracking-[-0.06em] md:text-8xl">Meet our team.</h1><div className="mt-12"><TeamGrid /></div></div></motion.div> }

function ContactPage() { return <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="px-6 py-20"><div className="mx-auto max-w-7xl overflow-hidden rounded-[3.5rem] border border-white/10 bg-white text-zinc-950 shadow-2xl"><div className="grid lg:grid-cols-[1fr_0.9fr]"><div className="p-8 md:p-12"><p className="font-black uppercase tracking-[0.35em] text-red-700">Contact OneTech</p><h1 className="mt-4 text-6xl font-black tracking-[-0.06em] md:text-8xl">Let’s build your setup.</h1><div className="mt-10 grid gap-4"><a href={`tel:${COMPANY_PHONE}`} className="flex items-center gap-4 rounded-3xl bg-zinc-50 p-5"><Phone className="text-red-700"/><div><p className="text-sm font-semibold text-zinc-500">Phone</p><p className="font-black">{COMPANY_PHONE}</p></div></a><a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-4 rounded-3xl bg-zinc-50 p-5"><Mail className="text-red-700"/><div><p className="text-sm font-semibold text-zinc-500">Email</p><p className="font-black">{COMPANY_EMAIL}</p></div></a><div className="flex items-center gap-4 rounded-3xl bg-zinc-50 p-5"><MapPin className="text-red-700"/><div><p className="text-sm font-semibold text-zinc-500">Location</p><p className="font-black">{COMPANY_LOCATION}</p></div></div></div><SocialButtons /></div><div className="min-h-[620px] bg-zinc-950 p-4"><iframe title="OneTech Map" src="https://www.google.com/maps?q=Mutare%20Trade%20Centre%20Mutare%20Zimbabwe&output=embed" className="h-full min-h-[580px] w-full rounded-[2.5rem] border-0" loading="lazy"></iframe></div></div></div></motion.div> }
function SocialButtons() {
  const items = [
    { label: "Facebook", href: socialLinks.facebook, short: "f" },
    { label: "Instagram", href: socialLinks.instagram, short: "ig" },
    { label: "LinkedIn", href: socialLinks.linkedin, short: "in" },
    { label: "Website", href: socialLinks.website, short: "www" },
  ];

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 font-black text-white transition hover:bg-red-700"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-black uppercase text-red-700">
            {item.short}
          </span>
          {item.label}
        </a>
      ))}
    </div>
  );
}

function QuotePage({ selectedService = "" }) { const defaultService = selectedService || "cctv"; const [submitted, setSubmitted] = useState(false); const [form, setForm] = useState({ service: defaultService, name: "", email: "", phone: "", location: "", budget: "", timeline: "", specifications: "" }); const selected = services.find((s) => s.slug === form.service) || services[0]; const updateField = (field, value) => setForm((prev) => ({ ...prev, [field]: value })); const submitQuote = (event) => { event.preventDefault(); const subject = `Quotation Request - ${selected.title}`; const body = `Hello OneTech IT Services,%0D%0A%0D%0AI would like to request a quotation.%0D%0A%0D%0AService Required: ${selected.title}%0D%0AName: ${form.name}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0ALocation: ${form.location}%0D%0ABudget Range: ${form.budget || "Not specified"}%0D%0ATimeline: ${form.timeline || "Not specified"}%0D%0A%0D%0ASpecifications:%0D%0A${encodeURIComponent(form.specifications)}%0D%0A%0D%0APlease send the quotation to my email address above.`; window.location.href = `mailto:${COMPANY_EMAIL}?cc=${encodeURIComponent(form.email)}&subject=${encodeURIComponent(subject)}&body=${body}`; setSubmitted(true); }; return <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="px-6 py-20"><div className="mx-auto max-w-7xl"><div className="mb-8 rounded-[3.5rem] border border-white/10 bg-gradient-to-br from-red-600 via-red-800 to-black p-8 shadow-2xl md:p-12"><p className="font-black uppercase tracking-[0.35em] text-red-100">Request a Quotation</p><h1 className="mt-4 text-6xl font-black tracking-[-0.06em] md:text-8xl">Tell us what you need.</h1></div><form onSubmit={submitQuote} className="grid gap-6 rounded-[3.5rem] border border-white/10 bg-white p-6 text-zinc-950 shadow-2xl md:p-10 lg:grid-cols-2"><div className="rounded-[2.5rem] bg-zinc-50 p-6"><div className="mb-7 flex items-center gap-4"><div className="rounded-2xl bg-red-100 p-3 text-red-700"><ClipboardCheck /></div><div><h2 className="text-3xl font-black">Service Details</h2><p className="text-zinc-500">Select what the customer needs.</p></div></div><label className="block text-sm font-black uppercase tracking-wider text-zinc-500">Quotation Service</label><select required value={form.service} onChange={(e) => updateField("service", e.target.value)} className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100">{services.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}</select><div className="mt-5 grid gap-5 md:grid-cols-2"><input value={form.budget} onChange={(e) => updateField("budget", e.target.value)} placeholder="Budget range e.g. USD 300 - 500" className="rounded-2xl border border-zinc-200 px-5 py-4 outline-none"/><input value={form.timeline} onChange={(e) => updateField("timeline", e.target.value)} placeholder="Timeline e.g. This week" className="rounded-2xl border border-zinc-200 px-5 py-4 outline-none"/></div><textarea required value={form.specifications} onChange={(e) => updateField("specifications", e.target.value)} rows={9} placeholder="Write your specifications here..." className="mt-5 w-full resize-none rounded-2xl border border-zinc-200 px-5 py-4 outline-none" /></div><div className="rounded-[2.5rem] border border-zinc-100 p-6"><div className="mb-7 flex items-center gap-4"><div className="rounded-2xl bg-red-100 p-3 text-red-700"><UserRound /></div><div><h2 className="text-3xl font-black">Customer Details</h2><p className="text-zinc-500">Where the quotation response should go.</p></div></div><div className="grid gap-5 md:grid-cols-2"><input required value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Full name" className="rounded-2xl border border-zinc-200 px-5 py-4 outline-none"/><input required type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="Email address" className="rounded-2xl border border-zinc-200 px-5 py-4 outline-none"/><input required value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="Phone number" className="rounded-2xl border border-zinc-200 px-5 py-4 outline-none"/><input required value={form.location} onChange={(e) => updateField("location", e.target.value)} placeholder="Installation location" className="rounded-2xl border border-zinc-200 px-5 py-4 outline-none"/></div>{submitted && <div className="mt-5 rounded-2xl bg-green-50 p-5 font-bold text-green-700">Email prepared. Please send it from the opened email app.</div>}<button type="submit" className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-5 text-lg font-black text-white shadow-2xl shadow-red-200 hover:bg-red-700"><Send size={20} /> Request Quote</button></div></form></div></motion.div> }

export default function OneTechWebsite() { const [page, setPage] = useState("home"); const [quoteService, setQuoteService] = useState(""); const [serviceSlug, setServiceSlug] = useState("cctv"); const openQuote = (slug = "") => { setQuoteService(slug); setPage("quote"); }; const openService = (slug) => { setServiceSlug(slug); setPage("service-detail"); }; const CurrentPage = useMemo(() => { if (page === "services") return <ServicesPage openService={openService} openQuote={openQuote} />; if (page === "service-detail") return <ServiceDetailPage serviceSlug={serviceSlug} openQuote={openQuote} setPage={setPage} />; if (page === "projects") return <ProjectsPage openQuote={openQuote} />; if (page === "team") return <TeamPage />; if (page === "contact") return <ContactPage />; if (page === "quote") return <QuotePage selectedService={quoteService} />; return <HomePage setPage={setPage} openQuote={openQuote} openService={openService} />; }, [page, quoteService, serviceSlug]); return <AppShell page={page} setPage={setPage}><AnimatePresence mode="wait">{CurrentPage}</AnimatePresence></AppShell>; }
