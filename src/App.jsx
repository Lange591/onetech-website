import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Satellite,
  Wifi,
  Network,
  Sun,
  Laptop,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Server,
  Lock,
  Activity,
  Cable,
  Sparkles,
  Menu,
  X,
  Home,
  BriefcaseBusiness,
  MessageCircle,
  Gauge,
  Building2,
  Router,
  Zap,
  ShoppingBag,
  Cpu,
  Radar,
  Star,
  ChevronRight,
  FileText,
  Send,
  UserRound,
  CalendarClock,
  DollarSign,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    slug: "cctv",
    icon: Camera,
    title: "CCTV Installation",
    intro: "Smart surveillance for homes, shops, offices and commercial premises.",
    text: "We install HD cameras, DVR/NVR systems, remote viewing, clean cabling and secure camera positioning.",
    points: ["Indoor & outdoor cameras", "Remote phone viewing", "DVR/NVR configuration", "Business security coverage"],
    gradient: "from-red-500 to-red-950",
  },
  {
    slug: "starlink",
    icon: Satellite,
    title: "Starlink Installation",
    intro: "High-speed satellite internet setup with professional mounting and alignment.",
    text: "From dish placement to router setup, we make sure your Starlink connection is properly installed and tested.",
    points: ["Dish mounting", "Cable routing", "Speed testing", "Router configuration"],
    gradient: "from-red-400 to-zinc-950",
  },
  {
    slug: "consulting",
    icon: Laptop,
    title: "IT Consulting",
    intro: "Practical IT advice for businesses that want better systems and fewer technical headaches.",
    text: "We help you choose the right hardware, network setup, security approach and support plan for your environment.",
    points: ["IT planning", "System recommendations", "Business support", "Digital upgrades"],
    gradient: "from-zinc-700 to-red-950",
  },
  {
    slug: "wifi",
    icon: Wifi,
    title: "WiFi Extension & Hotspot Setup",
    intro: "Stronger WiFi coverage and hotspot solutions for homes, lodges, shops and offices.",
    text: "We extend coverage, reduce dead zones, configure access points and set up managed guest hotspot access.",
    points: ["Access points", "Guest hotspots", "Coverage extension", "Router optimisation"],
    gradient: "from-red-600 to-black",
  },
  {
    slug: "network",
    icon: Network,
    title: "Network Infrastructure",
    intro: "Structured cabling, switching, routing and network upgrades for serious connectivity.",
    text: "We design and install clean, scalable network infrastructure that supports your business operations.",
    points: ["Structured cabling", "Switches & routers", "Cabinet setup", "LAN upgrades"],
    gradient: "from-red-500 to-zinc-900",
  },
  {
    slug: "solar",
    icon: Sun,
    title: "Solar Installation",
    intro: "Power backup solutions for cameras, routers, offices and home technology setups.",
    text: "We help you keep critical systems online with practical solar and backup power installations.",
    points: ["Backup power", "Router power support", "Camera uptime", "Energy efficiency"],
    gradient: "from-orange-500 to-red-950",
  },
  {
    slug: "gadgets",
    icon: ShoppingBag,
    title: "IT Gadgets",
    intro: "Useful tech gadgets, accessories and devices for everyday business and home needs.",
    text: "We supply and advise on gadgets that improve security, connectivity, productivity and convenience.",
    points: ["Accessories", "Connectivity devices", "Security gadgets", "Tech recommendations"],
    gradient: "from-zinc-800 to-red-700",
  },
];

const pages = [
  { id: "home", label: "Home", icon: Home },
  { id: "services", label: "Services", icon: BriefcaseBusiness },
  { id: "projects", label: "Solutions", icon: Building2 },
  { id: "contact", label: "Contact", icon: MessageCircle },
  { id: "quote", label: "Quote", icon: FileText },
];

const trustStats = [
  ["7+", "Core Services"],
  ["24/7", "Connected Systems"],
  ["100%", "Clean Install Focus"],
  ["Mutare", "Local Support"],
];

function LogoMark({ small = false }) {
  return (
    <div className={`relative ${small ? "h-11 w-11" : "h-24 w-24"}`}>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="absolute -inset-2 rounded-full border border-red-300/40 border-dashed" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400 via-red-700 to-red-950 shadow-2xl shadow-red-500/30" />
      <div className="absolute inset-[18%] rounded-full bg-white/10" />
      <div className={`absolute inset-0 flex items-center justify-center ${small ? "text-xl" : "text-5xl"} font-black italic text-white`}>1</div>
      <div className="absolute -right-1 top-1 h-3 w-3 rounded-full bg-white shadow" />
      <div className="absolute -left-1 bottom-2 h-2.5 w-2.5 rounded-full bg-red-200 shadow" />
    </div>
  );
}

function DeviceStackGraphic() {
  const nodes = [
    { icon: Camera, label: "CCTV", x: "8%", y: "18%" },
    { icon: Satellite, label: "Starlink", x: "70%", y: "8%" },
    { icon: Wifi, label: "WiFi", x: "82%", y: "55%" },
    { icon: Sun, label: "Solar", x: "16%", y: "72%" },
    { icon: Lock, label: "Secure", x: "53%", y: "80%" },
  ];

  return (
    <div className="relative mx-auto h-[650px] w-full max-w-[650px]">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-400/25" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 border-dashed" />
      <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-[3.5rem] border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur-2xl">
        <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-br from-white/25 via-transparent to-red-700/20" />
        <div className="relative flex h-full flex-col items-center justify-center text-center">
          <LogoMark />
          <h3 className="mt-6 text-4xl font-black tracking-tight"><span className="text-red-200">One</span>Tech</h3>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.42em] text-red-100">Command Hub</p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-bold">
            <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">Secure</span>
            <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">Connected</span>
          </div>
        </div>
      </div>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 650 650" fill="none">
        <path d="M325 325 C155 95, 80 390, 240 520 C395 650, 610 420, 325 325Z" stroke="url(#a)" strokeWidth="2" strokeDasharray="7 11" />
        <path d="M105 210 C240 10, 520 90, 545 305 C575 560, 220 600, 105 390" stroke="url(#b)" strokeWidth="2" />
        <defs>
          <linearGradient id="a" x1="80" y1="95" x2="610" y2="650"><stop stopColor="#fff" stopOpacity="0"/><stop offset="0.5" stopColor="#ef4444"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient>
          <linearGradient id="b" x1="105" y1="10" x2="575" y2="600"><stop stopColor="#ef4444"/><stop offset="1" stopColor="#ffffff" stopOpacity="0.1"/></linearGradient>
        </defs>
      </svg>

      {nodes.map((n, i) => {
        const Icon = n.icon;
        return (
          <motion.div key={n.label} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 + i * 0.1 }} className="absolute" style={{ left: n.x, top: n.y }}>
            <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 3.2 + i * 0.25, repeat: Infinity }} className="rounded-[1.7rem] border border-white/15 bg-black/35 p-5 text-white shadow-2xl shadow-red-950/30 backdrop-blur-2xl">
              <Icon className="mx-auto text-red-100" size={31} />
              <p className="mt-2 text-center text-xs font-black uppercase tracking-widest">{n.label}</p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

function AppShell({ page, setPage, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.36),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_50%_85%,rgba(185,28,28,0.25),transparent_26%),linear-gradient(135deg,#070707_0%,#170101_48%,#050505_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)", backgroundSize: "42px 42px" }} />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => setPage("home")} className="flex items-center gap-3 text-left">
            <LogoMark small />
            <div>
              <p className="text-xl font-black tracking-tight"><span className="text-red-500">One</span>Tech</p>
              <p className="-mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/55">IT Services</p>
            </div>
          </button>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm font-semibold text-white/70 backdrop-blur-xl md:flex">
            {pages.map((p) => {
              const Icon = p.icon;
              return (
                <button key={p.id} onClick={() => setPage(p.id)} className={`flex items-center gap-2 rounded-full px-5 py-2.5 transition ${page === p.id ? "bg-white text-red-800" : "hover:bg-white/10 hover:text-white"}`}>
                  <Icon size={16} /> {p.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:+263775131446" className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-black text-white shadow-xl shadow-red-900/30 transition hover:bg-red-500">Call Now</a>
          </div>

          <button onClick={() => setOpen(true)} className="rounded-full border border-white/10 bg-white/5 p-3 md:hidden"><Menu /></button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] bg-black/80 p-6 backdrop-blur-xl md:hidden">
            <div className="flex justify-end"><button onClick={() => setOpen(false)} className="rounded-full bg-white p-3 text-red-800"><X /></button></div>
            <div className="mt-10 grid gap-3">
              {pages.map((p) => <button key={p.id} onClick={() => { setPage(p.id); setOpen(false); }} className="rounded-3xl border border-white/10 bg-white/10 px-6 py-5 text-left text-xl font-black">{p.label}</button>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">{children}</main>
      <footer className="relative z-10 border-t border-white/10 bg-black/60 px-6 py-10 text-center text-sm text-white/50">© 2026 OneTech IT Services. Experts in Technology Solutions.</footer>
    </div>
  );
}

function HomePage({ setPage, openQuote }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden px-6 py-12 md:py-20">
        <div className="absolute left-10 top-24 h-28 w-28 rounded-full bg-red-600/30 blur-3xl" />
        <div className="absolute right-16 top-40 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-100 shadow-lg shadow-red-950/30 backdrop-blur-xl"><Sparkles size={17} /> Premium IT, Security & Connectivity Solutions</div>
            <h1 className="max-w-4xl text-6xl font-black leading-[0.92] tracking-[-0.065em] md:text-8xl lg:text-9xl">Smart technology, installed with <span className="bg-gradient-to-r from-red-400 via-red-500 to-white bg-clip-text text-transparent">precision.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">OneTech IT Services helps homes and businesses stay secure, connected and powered through CCTV, Starlink, WiFi, networking, solar and IT gadgets.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button onClick={() => openQuote()} className="group inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-4 font-black text-white shadow-2xl shadow-red-700/30 transition hover:bg-red-500">Request a Quote <ArrowRight className="ml-2 transition group-hover:translate-x-1" size={19} /></button>
              <button onClick={() => setPage("services")} className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 font-black text-white backdrop-blur-xl transition hover:bg-white/10">Explore Services</button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">{trustStats.map(([big, small]) => <div key={small} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl"><p className="text-2xl font-black text-white">{big}</p><p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/45">{small}</p></div>)}</div>
          </motion.div>
          <DeviceStackGraphic />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[3.5rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl backdrop-blur-xl md:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div><p className="font-black uppercase tracking-[0.35em] text-red-400">Why Customers Choose Us</p><h2 className="mt-4 text-5xl font-black tracking-[-0.05em] md:text-7xl">One team for security, internet, power and IT support.</h2></div>
            <div className="grid gap-4 md:grid-cols-2">
              {["Professional site assessment before installation", "Clean cabling and neat finishing", "Solutions that can grow with your business", "Support for homes, shops, offices and hotspots"].map((x) => <div key={x} className="rounded-[2rem] border border-white/10 bg-black/25 p-6"><CheckCircle2 className="text-red-300" /><p className="mt-4 font-bold leading-7 text-white/75">{x}</p></div>)}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function ServicesPage({ setPage, openQuote }) {
  const [active, setActive] = useState(services[0]);
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="font-black uppercase tracking-[0.35em] text-red-400">Services</p><h1 className="mt-4 max-w-4xl text-6xl font-black tracking-[-0.06em] md:text-8xl">Everything your technology setup needs.</h1></div>
          <p className="max-w-md leading-8 text-white/60">A professional service range designed to attract customers who need serious connectivity, security and reliable installations.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-3">
            {services.map((s) => {
              const Icon = s.icon;
              return <button key={s.slug} onClick={() => setActive(s)} className={`group flex items-center gap-4 rounded-[1.6rem] border p-5 text-left transition ${active.slug === s.slug ? "border-red-300 bg-red-600 text-white shadow-2xl shadow-red-900/30" : "border-white/10 bg-white/[0.055] hover:bg-white/10"}`}><div className="rounded-2xl bg-white/10 p-3"><Icon /></div><div><p className="font-black">{s.title}</p><p className="mt-1 text-sm opacity-70">{s.intro}</p></div><ChevronRight className="ml-auto opacity-60" /></button>;
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={active.slug} initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -25 }} className={`relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br ${active.gradient} p-8 shadow-2xl md:p-10`}>
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
              <div className="absolute bottom-8 right-8 opacity-10"><active.icon size={230} /></div>
              <div className="relative">
                <div className="inline-flex rounded-[2rem] bg-white/15 p-5 ring-1 ring-white/15"><active.icon size={46} /></div>
                <h2 className="mt-8 text-5xl font-black tracking-[-0.05em] md:text-7xl">{active.title}</h2>
                <p className="mt-5 max-w-2xl text-xl leading-9 text-white/80">{active.text}</p>
                <div className="mt-9 grid gap-4 md:grid-cols-2">{active.points.map((p) => <div key={p} className="rounded-2xl bg-white/12 p-5 font-bold ring-1 ring-white/10"><CheckCircle2 className="mb-3 text-red-100" />{p}</div>)}</div>
                <button onClick={() => openQuote(active.slug)} className="mt-9 rounded-full bg-white px-8 py-4 font-black text-red-800 shadow-xl transition hover:bg-red-50">Request quotation for this service</button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectsPage({ setPage, openQuote }) {
  const solutionCards = [
    { icon: Building2, title: "Business Office Setup", text: "CCTV, LAN cabling, WiFi coverage, routers, switches and backup power." },
    { icon: Home, title: "Smart Home Setup", text: "Home surveillance, Starlink, WiFi extension and gadget recommendations." },
    { icon: Router, title: "Hotspot Business Setup", text: "Guest WiFi, hotspot access, network layout and coverage planning." },
    { icon: Zap, title: "Always-On Connectivity", text: "Solar support for internet, cameras and critical technology devices." },
  ];
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[3.5rem] border border-white/10 bg-gradient-to-br from-red-600 via-red-800 to-black p-8 shadow-2xl md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div><p className="font-black uppercase tracking-[0.35em] text-red-100">Solutions</p><h1 className="mt-4 text-6xl font-black tracking-[-0.06em] md:text-8xl">Packages that solve real customer problems.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-red-50/75">This page makes the website feel bigger than a normal one-page site, while also showing customers exactly how OneTech can help them.</p></div>
            <div className="relative min-h-[380px] rounded-[3rem] border border-white/15 bg-white/10 p-8 backdrop-blur-xl">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} className="absolute inset-10 rounded-full border border-white/20 border-dashed" />
              <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-red-800 shadow-2xl"><Cpu size={62} /></div>
              {[Camera, Satellite, Wifi, Sun].map((Icon, i) => <div key={i} className="absolute rounded-3xl bg-white/12 p-5 ring-1 ring-white/10" style={{ left: i % 2 ? "65%" : "12%", top: i < 2 ? "14%" : "66%" }}><Icon size={32} /></div>)}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{solutionCards.map((c) => <div key={c.title} className="group rounded-[2.2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/10"><c.icon className="text-red-300" size={40} /><h3 className="mt-6 text-2xl font-black">{c.title}</h3><p className="mt-4 leading-7 text-white/58">{c.text}</p></div>)}</div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[3rem] border border-white/10 bg-white p-8 text-zinc-950 lg:col-span-2"><Gauge className="text-red-700" size={44} /><h2 className="mt-6 text-5xl font-black tracking-[-0.05em]">Built to perform after installation.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">The goal is not just to install equipment. The goal is to make sure the customer gets strong coverage, clear camera views, stable internet and a setup that is easy to maintain.</p></div>
          <button onClick={() => openQuote()} className="rounded-[3rem] bg-red-600 p-8 text-left shadow-2xl shadow-red-900/30 transition hover:bg-red-500"><Radar size={44} /><h3 className="mt-6 text-3xl font-black">Book a site assessment</h3><p className="mt-4 text-red-50/75">Let OneTech recommend the right setup.</p><ArrowRight className="mt-8" /></button>
        </div>
      </div>
    </motion.div>
  );
}

function ContactPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="px-6 py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[3.5rem] border border-white/10 bg-white text-zinc-950 shadow-2xl">
        <div className="grid lg:grid-cols-[1fr_0.9fr]">
          <div className="p-8 md:p-12">
            <p className="font-black uppercase tracking-[0.35em] text-red-700">Contact OneTech</p>
            <h1 className="mt-4 text-6xl font-black tracking-[-0.06em] md:text-8xl">Let’s build your setup.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">Contact OneTech IT Services for CCTV, Starlink, WiFi, network infrastructure, solar installation and IT gadgets.</p>
            <div className="mt-10 grid gap-4">
              <a href="tel:+263775131446" className="flex items-center gap-4 rounded-3xl bg-zinc-50 p-5 transition hover:bg-red-50"><Phone className="text-red-700" /><div><p className="text-sm font-semibold text-zinc-500">Phone</p><p className="font-black">+263 775 131 446</p></div></a>
              <a href="mailto:info@onetechitservices.co.zw" className="flex items-center gap-4 rounded-3xl bg-zinc-50 p-5 transition hover:bg-red-50"><Mail className="text-red-700" /><div><p className="text-sm font-semibold text-zinc-500">Email</p><p className="font-black">info@onetechitservices.co.zw</p></div></a>
              <div className="flex items-center gap-4 rounded-3xl bg-zinc-50 p-5"><MapPin className="text-red-700" /><div><p className="text-sm font-semibold text-zinc-500">Location</p><p className="font-black">Mutare Trade Centre, Shop 69 & 80</p></div></div>
            </div>
          </div>
          <div className="relative min-h-[620px] bg-gradient-to-br from-red-700 via-red-900 to-black p-8">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #fff 0 2px, transparent 3px)", backgroundSize: "38px 38px" }} />
            <div className="relative flex h-full flex-col justify-between rounded-[2.5rem] border border-white/15 bg-white/10 p-8 text-white backdrop-blur-xl">
              <div><LogoMark /><h3 className="mt-8 text-5xl font-black tracking-[-0.05em]">OneTech IT Services</h3><p className="mt-3 text-red-100">Experts in Technology Solutions</p></div>
              <div className="grid gap-3">{["CCTV", "Starlink", "WiFi", "Networks", "Solar", "IT Gadgets"].map((x) => <div key={x} className="rounded-2xl bg-white/10 px-4 py-3 font-bold ring-1 ring-white/10">{x}</div>)}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function QuotePage({ selectedService = "" }) {
  const defaultService = selectedService || "cctv";
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: defaultService,
    name: "",
    email: "",
    phone: "",
    location: "",
    budget: "",
    timeline: "",
    specifications: "",
  });

  const selected = services.find((s) => s.slug === form.service) || services[0];
  const SelectedIcon = selected.icon;

  const updateField = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const submitQuote = (event) => {
    event.preventDefault();
    const subject = `Quotation Request - ${selected.title}`;
    const body = `Hello OneTech IT Services,%0D%0A%0D%0AI would like to request a quotation.%0D%0A%0D%0AService Required: ${selected.title}%0D%0AName: ${form.name}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0ALocation: ${form.location}%0D%0ABudget Range: ${form.budget || "Not specified"}%0D%0ATimeline: ${form.timeline || "Not specified"}%0D%0A%0D%0ASpecifications:%0D%0A${encodeURIComponent(form.specifications)}%0D%0A%0D%0APlease send the quotation to my email address above.%0D%0A%0D%0AThank you.`;
    window.location.href = `mailto:info@onetechitservices.co.zw?cc=${encodeURIComponent(form.email)}&subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[3.5rem] border border-white/10 bg-gradient-to-br from-red-600 via-red-800 to-black p-8 shadow-2xl md:p-12">
            <p className="font-black uppercase tracking-[0.35em] text-red-100">Request a Quotation</p>
            <h1 className="mt-4 text-6xl font-black tracking-[-0.06em] md:text-8xl">Tell us what you need.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-red-50/75">Choose the service, describe your requirements, add your contact details, and OneTech can prepare a proper quotation based on your specifications.</p>
          </div>
          <div className="relative overflow-hidden rounded-[3.5rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl backdrop-blur-xl">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-red-600/25 blur-3xl" />
            <div className="relative">
              <div className="inline-flex rounded-[2rem] bg-red-600 p-5 shadow-xl shadow-red-950/30"><SelectedIcon size={46} /></div>
              <h2 className="mt-7 text-4xl font-black tracking-[-0.04em]">{selected.title}</h2>
              <p className="mt-4 leading-8 text-white/62">{selected.intro}</p>
              <div className="mt-7 grid gap-3">{selected.points.map((p) => <div key={p} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold text-white/80 ring-1 ring-white/10"><CheckCircle2 className="text-red-200" size={18} /> {p}</div>)}</div>
            </div>
          </div>
        </div>

        <form onSubmit={submitQuote} className="grid gap-6 rounded-[3.5rem] border border-white/10 bg-white p-6 text-zinc-950 shadow-2xl md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.5rem] bg-zinc-50 p-6 md:p-8">
            <div className="mb-7 flex items-center gap-4"><div className="rounded-2xl bg-red-100 p-3 text-red-700"><ClipboardCheck /></div><div><h2 className="text-3xl font-black">Service Details</h2><p className="text-zinc-500">Select what the customer needs.</p></div></div>

            <label className="block text-sm font-black uppercase tracking-wider text-zinc-500">Quotation Service</label>
            <select required value={form.service} onChange={(e) => updateField("service", e.target.value)} className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-bold outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100">
              {services.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}
            </select>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div><label className="block text-sm font-black uppercase tracking-wider text-zinc-500">Budget Range</label><input value={form.budget} onChange={(e) => updateField("budget", e.target.value)} placeholder="e.g. USD 300 - 500" className="mt-2 w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100" /></div>
              <div><label className="block text-sm font-black uppercase tracking-wider text-zinc-500">Timeline</label><input value={form.timeline} onChange={(e) => updateField("timeline", e.target.value)} placeholder="e.g. This week" className="mt-2 w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100" /></div>
            </div>

            <label className="mt-5 block text-sm font-black uppercase tracking-wider text-zinc-500">Specifications / Requirements</label>
            <textarea required value={form.specifications} onChange={(e) => updateField("specifications", e.target.value)} rows={9} placeholder="Example: I need 6 CCTV cameras for a shop, remote viewing on phone, night vision, installation at Mutare Trade Centre..." className="mt-2 w-full resize-none rounded-2xl border border-zinc-200 px-5 py-4 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100" />
          </div>

          <div className="rounded-[2.5rem] border border-zinc-100 p-6 md:p-8">
            <div className="mb-7 flex items-center gap-4"><div className="rounded-2xl bg-red-100 p-3 text-red-700"><UserRound /></div><div><h2 className="text-3xl font-black">Customer Details</h2><p className="text-zinc-500">Where the quotation response should go.</p></div></div>

            <div className="grid gap-5 md:grid-cols-2">
              <div><label className="block text-sm font-black uppercase tracking-wider text-zinc-500">Full Name</label><input required value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Customer name" className="mt-2 w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100" /></div>
              <div><label className="block text-sm font-black uppercase tracking-wider text-zinc-500">Email Address</label><input required type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="customer@email.com" className="mt-2 w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100" /></div>
              <div><label className="block text-sm font-black uppercase tracking-wider text-zinc-500">Phone Number</label><input required value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+263..." className="mt-2 w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100" /></div>
              <div><label className="block text-sm font-black uppercase tracking-wider text-zinc-500">Installation Location</label><input required value={form.location} onChange={(e) => updateField("location", e.target.value)} placeholder="Area / city" className="mt-2 w-full rounded-2xl border border-zinc-200 px-5 py-4 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100" /></div>
            </div>

            <div className="mt-8 rounded-[2rem] bg-zinc-950 p-6 text-white">
              <div className="flex items-center gap-3 text-red-200"><Mail size={20} /><p className="font-black">How it works</p></div>
              <p className="mt-3 leading-7 text-white/65">When the customer clicks submit, their email app opens with the quotation request prepared for OneTech. Their own email is also copied so they receive a copy of the request.</p>
            </div>

            {submitted && <div className="mt-5 rounded-2xl bg-green-50 p-5 font-bold text-green-700">Quotation email prepared successfully. Please send it from the opened email app.</div>}

            <button type="submit" className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-5 text-lg font-black text-white shadow-2xl shadow-red-200 transition hover:bg-red-700"><Send size={20} /> Request Quote</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default function OneTechWebsite() {
  const [page, setPage] = useState("home");
  const [quoteService, setQuoteService] = useState("");

  const openQuote = (serviceSlug = "") => {
    setQuoteService(serviceSlug);
    setPage("quote");
  };
  const CurrentPage = useMemo(() => {
    if (page === "services") return <ServicesPage setPage={setPage} openQuote={openQuote} />;
    if (page === "projects") return <ProjectsPage setPage={setPage} openQuote={openQuote} />;
    if (page === "contact") return <ContactPage />;
    if (page === "quote") return <QuotePage selectedService={quoteService} />;
    return <HomePage setPage={setPage} openQuote={openQuote} />;
  }, [page, quoteService]);

  return (
    <AppShell page={page} setPage={setPage}>
      <AnimatePresence mode="wait">{CurrentPage}</AnimatePresence>
    </AppShell>
  );
}
