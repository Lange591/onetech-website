import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera, Satellite, Wifi, Network, Sun, Laptop, Phone, Mail, MapPin,
  ArrowRight, CheckCircle2, Lock, Sparkles, Menu, X, Home,
  BriefcaseBusiness, MessageCircle, Building2, Router, Zap, ShoppingBag,
  Cpu, Fingerprint, ChevronRight, FileText, Send, UserRound, ClipboardCheck,
  Globe, Users, Info
} from "lucide-react";

const WHATSAPP_NUMBER = "263775131446";
const COMPANY_EMAIL = "info@onetechitservices.co.zw";
const COMPANY_LOCATION = "Mutare Trade Centre, Shop 69 & 80";

const socialLinks = {
  facebook: "https://www.facebook.com/onetechitservices",
  instagram: "https://www.instagram.com/onetechitservices",
  linkedin: "https://www.linkedin.com/company/onetechitservices",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
};

const services = [
  {
    slug: "starlink",
    icon: Satellite,
    title: "Starlink Installation",
    intro: "High-speed satellite internet setup with professional mounting and alignment.",
    text: "We provide professional Starlink installation, setup, troubleshooting, and relocation services for homes, schools, farms, offices, lodges, and businesses throughout Zimbabwe. Our team ensures optimal signal strength, proper mounting, network integration, and reliable internet connectivity.",
    points: ["Dish mounting & alignment", "Cable routing", "Router setup & configuration", "Speed testing & optimization"],
    images: ["/images/network/starlink-install.jpg", "/images/network/network-1.jpg", "/images/network/network-2.jpg", "/images/network/network-3.jpg"],
    gradient: "from-red-500 to-zinc-950",
  },
  {
    slug: "cctv",
    icon: Camera,
    title: "CCTV Security Systems",
    intro: "Smart surveillance for homes, shops, offices and commercial premises.",
    text: "Protect your home, business, school, farm, or warehouse with our advanced CCTV surveillance systems. We supply, install, configure, and maintain HD, IP, solar-powered, and AI security cameras with remote viewing capabilities.",
    points: ["Indoor & outdoor cameras", "Remote phone viewing", "DVR/NVR setup", "Solar-powered options"],
    images: ["/images/cctv/cctv-install.jpg", "/images/cctv/cctv-1.jpg", "/images/cctv/cctv-2.jpg", "/images/cctv/cctv-3.jpg", "/images/cctv/cctv-4.jpg", "/images/cctv/cctv-5.jpg"],
    gradient: "from-red-600 to-red-950",
  },
  {
    slug: "wifi",
    icon: Wifi,
    title: "WiFi & Network Solutions",
    intro: "High-performance wireless and wired networks for any environment.",
    text: "We design and install high-performance wireless and wired networks for homes, offices, schools, hotels, lodges, and industrial sites. Our solutions include Wi-Fi coverage extension, outdoor wireless links, network optimization, and internet sharing systems.",
    points: ["Coverage extension", "Guest hotspots", "Access points", "Network optimization"],
    images: ["/images/network/network-4.jpg", "/images/network/network-5.jpg", "/images/network/network-1.jpg", "/images/network/network-2.jpg"],
    gradient: "from-red-500 to-black",
  },
  {
    slug: "network",
    icon: Network,
    title: "Network Infrastructure",
    intro: "Structured cabling, switching, routing and business network upgrades.",
    text: "We design and install clean, scalable network infrastructure that supports daily business operations. Our services include structured cabling, switch and router setup, cabinet installations, and complete LAN upgrades.",
    points: ["Structured cabling", "Switches & routers", "Cabinet setup", "LAN upgrades"],
    images: ["/images/network/network-1.jpg", "/images/network/network-4.jpg", "/images/network/network-5.jpg", "/images/network/network-3.jpg"],
    gradient: "from-zinc-700 to-red-950",
  },
  {
    slug: "pbx",
    icon: Phone,
    title: "PBX & VoIP Systems",
    intro: "Modern IP telephone systems for better business communication.",
    text: "Improve communication with modern IP telephone systems. We supply and install PBX and VoIP solutions that reduce call costs and enhance communication within your organization.",
    points: ["PBX installation", "VoIP setup", "Call cost reduction", "Multi-line systems"],
    images: ["/images/network/network-2.jpg", "/images/network/network-3.jpg", "/images/network/network-1.jpg"],
    gradient: "from-red-700 to-zinc-900",
  },
  {
    slug: "solar",
    icon: Sun,
    title: "Solar Power Solutions",
    intro: "Solar backup solutions for homes, businesses, cameras and internet systems.",
    text: "We provide solar system design, installation, upgrades, and maintenance for homes, businesses, schools, and farms. Our systems help reduce electricity costs and provide reliable backup power.",
    points: ["Solar panels", "Inverters", "Battery backup", "Maintenance support"],
    images: ["/images/solar/inverter-thumbsup.jpg", "/images/solar/solar-inverter.jpg", "/images/solar/solar-panel-install.jpg", "/images/solar/rooftop-install.jpg", "/images/solar/solar-1.jpg"],
    gradient: "from-orange-500 to-red-950",
  },
  {
    slug: "biometric",
    icon: Fingerprint,
    title: "Biometric & Access Control",
    intro: "Modern attendance and access control solutions.",
    text: "Monitor employee and student attendance using modern biometric fingerprint, facial recognition, and access control systems. We offer complete installation, setup, training, and support.",
    points: ["Fingerprint systems", "Facial recognition", "Time attendance", "Access control"],
    images: ["/images/cctv/cctv-2.jpg", "/images/cctv/cctv-3.jpg", "/images/network/network-2.jpg"],
    gradient: "from-zinc-800 to-red-800",
  },
  {
    slug: "consulting",
    icon: Laptop,
    title: "IT Consultancy",
    intro: "Practical IT advice for better systems, fewer issues and smarter growth.",
    text: "Leverage our extensive experience in telecommunications and ICT project management. We provide network planning, infrastructure design, ICT audits, project supervision, and technology consulting services.",
    points: ["IT planning", "ICT audits", "Project management", "Digital upgrades"],
    images: ["/images/network/network-2.jpg", "/images/events/exhibition.jpg", "/images/events/radio-interview.jpg"],
    gradient: "from-zinc-700 to-red-950",
  },
  {
    slug: "gadgets",
    icon: ShoppingBag,
    title: "IT Accessories & Sales",
    intro: "Quality tech devices and accessories for work and connectivity.",
    text: "We supply laptops, desktops, networking equipment, printers, CCTV accessories, Starlink accessories, and provide professional computer repair and maintenance services.",
    points: ["Laptops & desktops", "Networking equipment", "CCTV accessories", "Starlink accessories"],
    images: ["/images/events/exhibition.jpg", "/images/network/network-2.jpg", "/images/network/network-3.jpg"],
    gradient: "from-zinc-800 to-red-700",
  },
];

const pages = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: Info },
  { id: "services", label: "Services", icon: BriefcaseBusiness },
  { id: "team", label: "Team", icon: Users },
  { id: "contact", label: "Contact", icon: MessageCircle },
  { id: "quote", label: "Quote", icon: FileText },
];

function TechBackground() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(239,68,68,0.32),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.08),transparent_25%),radial-gradient(circle_at_50%_90%,rgba(185,28,28,0.18),transparent_30%),linear-gradient(135deg,#0a0a0a_0%,#120808_46%,#050505_100%)]" />
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, rgba(239,68,68,.8) 0 1px, transparent 2px), radial-gradient(circle at 80% 60%, rgba(255,255,255,.6) 0 1px, transparent 2px)",
          backgroundSize: "100px 100px"
        }}
      />
    </>
  );
}

function Logo({ small = false }) {
  return (
    <img
      src="/images/brand/logo.jpg"
      alt="OneTech IT Services"
      className={`${small ? "h-12 w-12" : "h-24 w-24"} rounded-full object-cover bg-white shadow-xl`}
    />
  );
}

function AppShell({ page, setPage, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <TechBackground />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => setPage("home")} className="flex items-center gap-3 text-left">
            <Logo small />
            <div>
              <p className="text-xl font-black">
                <span className="text-red-500">One</span>Tech
              </p>
              <p className="-mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                IT Services
              </p>
            </div>
          </button>
          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm font-semibold text-white/70 backdrop-blur-xl lg:flex">
            {pages.map((p) => {
              const Icon = p.icon;
              return (
                <button
                  key={p.id}
                  onClick={() => setPage(p.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2.5 transition ${page === p.id ? "bg-white text-red-800" : "hover:bg-white/10 hover:text-white"}`}
                >
                  <Icon size={16} /> {p.label}
                </button>
              );
            })}
          </nav>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-green-500 px-5 py-2.5 text-sm font-black text-white shadow-xl transition hover:bg-green-600 lg:inline-flex"
          >
            WhatsApp
          </a>
          <button onClick={() => setOpen(true)} className="rounded-full border border-white/10 bg-white/5 p-3 lg:hidden">
            <Menu />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/90 p-6 backdrop-blur-xl lg:hidden"
          >
            <div className="flex justify-end">
              <button onClick={() => setOpen(false)} className="rounded-full bg-white p-3 text-red-800">
                <X />
              </button>
            </div>
            <div className="mt-10 grid gap-3">
              {pages.map((p) => (
                <button
                  key={p.id}
                  onClick={() => { setPage(p.id); setOpen(false); }}
                  className="rounded-3xl border border-white/10 bg-white/10 px-6 py-5 text-left text-xl font-black"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <main className="relative z-10">{children}</main>
      <WhatsAppFloat />
      <footer className="relative z-10 border-t border-white/10 bg-black/80 px-6 py-10 text-center text-sm text-white/50">
        2026 OneTech IT Services. Experts in Technology Solutions.
      </footer>
    </div>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi OneTech, I would like to request a quotation.")}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[90] flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 font-black text-white shadow-2xl shadow-green-900/40 transition hover:scale-105"
    >
      <MessageCircle /> Chat on WhatsApp
    </a>
  );
}

function HeroGraphic() {
  return (
    <div className="relative mx-auto h-[600px] w-full max-w-[600px]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-400/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
      />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[3rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl">
        <img
          src="/images/solar/inverter-thumbsup.jpg"
          alt="OneTech professional at work"
          className="h-full w-full rounded-[2.5rem] object-cover object-top"
        />
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <Logo />
          <h3 className="mt-3 text-2xl font-black leading-tight">Real projects. Real results.</h3>
        </div>
      </div>
      {[
        { icon: Camera, label: "CCTV", x: "8%", y: "18%" },
        { icon: Satellite, label: "Starlink", x: "70%", y: "8%" },
        { icon: Wifi, label: "WiFi", x: "82%", y: "55%" },
        { icon: Sun, label: "Solar", x: "16%", y: "72%" },
        { icon: Lock, label: "Security", x: "53%", y: "80%" }
      ].map((n, i) => {
        const Icon = n.icon;
        return (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 + i * 0.1 }}
            className="absolute"
            style={{ left: n.x, top: n.y }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.2 + i * 0.25, repeat: Infinity }}
              className="rounded-[1.5rem] border border-white/15 bg-black/50 p-4 text-white shadow-2xl backdrop-blur-2xl"
            >
              <Icon className="mx-auto text-red-100" size={28} />
              <p className="mt-2 text-center text-xs font-black uppercase tracking-widest">{n.label}</p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

function HomePage({ setPage, openQuote, openService }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-100 backdrop-blur-xl">
              <Sparkles size={17} /> Premium IT, Security, Solar & Connectivity
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              Smart technology, installed with{" "}
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-white bg-clip-text text-transparent">
                precision.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              OneTech IT Services is a leading ICT solutions provider specializing in Starlink installations, CCTV security systems, Computer networking, VoIP communications, solar solutions, IT consultancy and IT accessories sales. We help homes and businesses across Zimbabwe stay connected, secure, and powered for success.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => openQuote()}
                className="group inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-4 font-black text-white shadow-2xl shadow-red-700/30 hover:bg-red-500"
              >
                Request a Quote <ArrowRight className="ml-2" size={19} />
              </button>
              <button
                onClick={() => setPage("services")}
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-black text-white backdrop-blur-xl hover:bg-white/10"
              >
                Explore Services
              </button>
            </div>
          </div>
          <HeroGraphic />
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-black uppercase tracking-[0.35em] text-red-400">Popular Services</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">Choose a service.</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((s) => (
              <ServiceCard key={s.slug} service={s} openService={openService} openQuote={openQuote} />
            ))}
          </div>
        </div>
      </section>

      <AboutPreview setPage={setPage} />
      <TeamPreview setPage={setPage} />
      <GallerySection />
    </motion.div>
  );
}

function ServiceCard({ service, openService, openQuote }) {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-2xl backdrop-blur-xl"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.images[0]}
          alt={service.title}
          className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-2xl bg-red-600 p-3">
          <Icon />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black">{service.title}</h3>
        <p className="mt-3 line-clamp-2 leading-7 text-white/60">{service.intro}</p>
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => openService(service.slug)}
            className="rounded-full bg-white px-5 py-3 text-sm font-black text-red-800"
          >
            View details
          </button>
          <button
            onClick={() => openQuote(service.slug)}
            className="rounded-full bg-red-600 px-5 py-3 text-sm font-black text-white"
          >
            Quote
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ServicesPage({ openService, openQuote }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="font-black uppercase tracking-[0.35em] text-red-400">Services</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
          Professional ICT & Security Solutions
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
          Click any service below to view detailed information and request a quotation.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} openService={openService} openQuote={openQuote} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ServiceDetailPage({ serviceSlug, openQuote, setPage }) {
  const service = services.find((s) => s.slug === serviceSlug) || services[0];
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <button
          onClick={() => setPage("services")}
          className="mb-6 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-bold text-white/80"
        >
          Back to Services
        </button>
        <div className={`relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br ${service.gradient} p-8 shadow-2xl md:p-12`}>
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="inline-flex rounded-[2rem] bg-white/15 p-5 ring-1 ring-white/15">
                <Icon size={52} />
              </div>
              <h1 className="mt-8 text-5xl font-black tracking-[-0.05em] md:text-7xl">{service.title}</h1>
              <p className="mt-6 max-w-2xl text-xl leading-9 text-white/80">{service.text}</p>
              <div className="mt-9 grid gap-4 md:grid-cols-2">
                {service.points.map((p) => (
                  <div key={p} className="rounded-2xl bg-white/10 p-5 font-bold ring-1 ring-white/10">
                    <CheckCircle2 className="mb-3 text-red-100" />
                    {p}
                  </div>
                ))}
              </div>
              <button
                onClick={() => openQuote(service.slug)}
                className="mt-9 rounded-full bg-white px-8 py-4 font-black text-red-800 shadow-xl"
              >
                Request quotation
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {service.images.slice(0, 4).map((img, i) => (
                <img
                  key={img + i}
                  src={img}
                  alt={`${service.title} work ${i + 1}`}
                  className={`${i === 0 ? "col-span-2 h-72" : "h-40"} w-full rounded-[2rem] object-cover object-center shadow-2xl`}
                />
              ))}
            </div>
          </div>
        </div>
        {service.images.length > 4 && (
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {service.images.slice(4).map((img, i) => (
              <img
                key={img + i}
                src={img}
                alt={`${service.title} additional ${i + 1}`}
                className="h-64 w-full rounded-[2rem] object-cover object-center"
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function AboutPreview({ setPage }) {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/10 bg-gradient-to-br from-red-600/20 via-red-900/10 to-black p-8 shadow-2xl backdrop-blur-xl md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="font-black uppercase tracking-[0.35em] text-red-400">About Us</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">
              Reliable Technology Solutions
            </h2>
            <p className="mt-6 leading-8 text-white/70">
              At OneTech IT Services, we deliver reliable, innovative, and cost-effective technology solutions that help homes, businesses, schools, farms, lodges, and organizations stay connected, secure, and productive.
            </p>
            <button
              onClick={() => setPage("about")}
              className="mt-8 rounded-full bg-red-600 px-7 py-4 font-black text-white"
            >
              Learn More
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/solar/solar-panel-install.jpg"
              alt="Solar panel installation"
              className="h-48 w-full rounded-2xl object-cover object-center"
            />
            <img
              src="/images/cctv/cctv-install.jpg"
              alt="CCTV installation"
              className="h-48 w-full rounded-2xl object-cover object-center"
            />
            <img
              src="/images/network/starlink-install.jpg"
              alt="Starlink installation"
              className="col-span-2 h-48 w-full rounded-2xl object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  const whyChooseUs = [
    "Professional Installation & Support",
    "Experienced ICT & Telecoms Specialists",
    "Reliable & Affordable Solutions",
    "Quality Equipment from Trusted Brands",
    "Nationwide Service Coverage",
    "Customer-Focused Approach"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="font-black uppercase tracking-[0.35em] text-red-400">About Us</p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.05em] md:text-7xl">
          OneTech IT Services
        </h1>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[3rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur-xl md:p-10">
            <p className="text-lg leading-8 text-white/80">
              At OneTech IT Services, we deliver reliable, innovative, and cost-effective technology solutions that help homes, businesses, schools, farms, lodges, and organizations stay connected, secure, and productive.
            </p>
            <p className="mt-6 text-lg leading-8 text-white/80">
              With extensive experience in Information Technology, Telecommunications, and Project Management, we specialize in Starlink installations, CCTV security systems, Wi-Fi and LAN solutions, VoIP and PBX telephone systems, biometric attendance systems, solar power solutions, and ICT consultancy services.
            </p>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Our mission is to provide professional technology solutions tailored to our clients&apos; needs while maintaining the highest standards of quality, reliability, and customer service. Whether you need high-speed internet in a remote area, a comprehensive security surveillance system, a business communication platform, or a complete network infrastructure, our experienced team has the expertise to deliver results.
            </p>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Based in Mutare and serving clients across Zimbabwe, we are committed to helping individuals and organizations harness technology to improve efficiency, security, and connectivity.
            </p>
          </div>
          <div>
            <div className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-red-600 via-red-800 to-black p-8 shadow-2xl">
              <h3 className="text-2xl font-black">Why Choose OneTech IT Services?</h3>
              <div className="mt-6 grid gap-3">
                {whyChooseUs.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 p-4">
                    <CheckCircle2 className="shrink-0 text-green-400" size={20} />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <h4 className="font-black text-red-400">Contact</h4>
              <a href={`mailto:${COMPANY_EMAIL}`} className="mt-3 block text-lg font-semibold text-white/80 hover:text-white">
                {COMPANY_EMAIL}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <img
            src="/images/events/exhibition.jpg"
            alt="OneTech at exhibition"
            className="h-64 w-full rounded-[2rem] object-cover object-center"
          />
          <img
            src="/images/events/radio-interview.jpg"
            alt="OneTech radio interview"
            className="h-64 w-full rounded-[2rem] object-cover object-center"
          />
          <img
            src="/images/events/team-event.jpg"
            alt="OneTech team event"
            className="h-64 w-full rounded-[2rem] object-cover object-top"
          />
        </div>
      </div>
    </motion.div>
  );
}

function TeamPreview({ setPage }) {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur-xl md:p-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-black uppercase tracking-[0.35em] text-red-400">Meet Our Team</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em]">
              The people behind the installations.
            </h2>
            <p className="mt-4 leading-7 text-white/60">
              Our skilled technicians and engineers bring years of experience to every project.
            </p>
            <button
              onClick={() => setPage("team")}
              className="mt-8 rounded-full bg-red-600 px-7 py-4 font-black text-white"
            >
              View Team
            </button>
          </div>
          <TeamGrid />
        </div>
      </div>
    </section>
  );
}

function TeamGrid() {
  const team = [
    {
      name: "Technical Lead",
      role: "Solar, CCTV & Network Installations",
      img: "/images/team/team-1.jpg"
    },
    {
      name: "Field Specialist",
      role: "WiFi, Starlink & Customer Support",
      img: "/images/team/team-2.jpg"
    }
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {team.map((t) => (
        <div key={t.name} className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/30">
          <div className="relative h-72 overflow-hidden">
            <img
              src={t.img}
              alt={t.name}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-black">{t.name}</h3>
            <p className="mt-2 text-red-200">{t.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function TeamPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="font-black uppercase tracking-[0.35em] text-red-400">Team</p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.05em] md:text-7xl">Meet our team.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
          Our dedicated professionals bring expertise and commitment to every project.
        </p>
        <div className="mt-12">
          <TeamGrid />
        </div>
        <div className="mt-12 rounded-[3rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur-xl">
          <h3 className="text-2xl font-black">Our Team in Action</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <img
              src="/images/events/team-event.jpg"
              alt="Team at event"
              className="h-56 w-full rounded-2xl object-cover object-top"
            />
            <img
              src="/images/events/team-event-2.jpg"
              alt="Team at work"
              className="h-56 w-full rounded-2xl object-cover object-top"
            />
            <img
              src="/images/events/exhibition.jpg"
              alt="Exhibition booth"
              className="h-56 w-full rounded-2xl object-cover object-center"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function GallerySection() {
  const images = [
    { src: "/images/solar/inverter-thumbsup.jpg", alt: "Solar inverter installation" },
    { src: "/images/cctv/cctv-install.jpg", alt: "CCTV installation" },
    { src: "/images/network/starlink-install.jpg", alt: "Starlink installation" },
    { src: "/images/events/exhibition.jpg", alt: "Exhibition booth" },
  ];

  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-black uppercase tracking-[0.35em] text-red-400">Our Work</p>
        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">Recent Projects</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-64 w-full object-cover object-center transition duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="px-6 py-20"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-white/10 bg-white text-zinc-950 shadow-2xl">
        <div className="grid lg:grid-cols-[1fr_0.9fr]">
          <div className="p-8 md:p-12">
            <p className="font-black uppercase tracking-[0.35em] text-red-700">Contact OneTech</p>
            <h1 className="mt-4 text-5xl font-black tracking-[-0.05em] md:text-7xl">
              {"Let's build your setup."}
            </h1>
            <div className="mt-10 grid gap-4">
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="flex items-center gap-4 rounded-3xl bg-zinc-50 p-5"
              >
                <Mail className="text-red-700" />
                <div>
                  <p className="text-sm font-semibold text-zinc-500">Email</p>
                  <p className="font-black">{COMPANY_EMAIL}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-3xl bg-zinc-50 p-5">
                <MapPin className="text-red-700" />
                <div>
                  <p className="text-sm font-semibold text-zinc-500">Location</p>
                  <p className="font-black">{COMPANY_LOCATION}</p>
                </div>
              </div>
            </div>
            <SocialButtons />
          </div>
          <div className="min-h-[600px] bg-zinc-950 p-4">
            <iframe
              title="OneTech Map"
              src="https://www.google.com/maps?q=Mutare%20Trade%20Centre%20Mutare%20Zimbabwe&output=embed"
              className="h-full min-h-[560px] w-full rounded-[2.5rem] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SocialButtons() {
  const items = [
    { label: "Facebook", href: socialLinks.facebook, icon: "f" },
    { label: "Instagram", href: socialLinks.instagram, icon: "ig" },
    { label: "LinkedIn", href: socialLinks.linkedin, icon: "in" },
    { label: "WhatsApp", href: socialLinks.whatsapp, icon: "wa" },
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
            {item.icon}
          </span>
          {item.label}
        </a>
      ))}
    </div>
  );
}

function QuotePage({ selectedService = "" }) {
  const defaultService = selectedService || "starlink";
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: defaultService,
    name: "",
    email: "",
    phone: "",
    location: "",
    budget: "",
    timeline: "",
    specifications: ""
  });

  const selected = services.find((s) => s.slug === form.service) || services[0];

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const submitQuote = (event) => {
    event.preventDefault();
    const subject = `Quotation Request - ${selected.title}`;
    const body = `Hello OneTech IT Services,%0D%0A%0D%0AI would like to request a quotation.%0D%0A%0D%0AService Required: ${selected.title}%0D%0AName: ${form.name}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0ALocation: ${form.location}%0D%0ABudget Range: ${form.budget || "Not specified"}%0D%0ATimeline: ${form.timeline || "Not specified"}%0D%0A%0D%0ASpecifications:%0D%0A${encodeURIComponent(form.specifications)}%0D%0A%0D%0APlease send the quotation to my email address above.`;
    window.location.href = `mailto:${COMPANY_EMAIL}?cc=${encodeURIComponent(form.email)}&subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-[3rem] border border-white/10 bg-gradient-to-br from-red-600 via-red-800 to-black p-8 shadow-2xl md:p-12">
          <p className="font-black uppercase tracking-[0.35em] text-red-100">Request a Quotation</p>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.05em] md:text-7xl">Tell us what you need.</h1>
        </div>
        <form
          onSubmit={submitQuote}
          className="grid gap-6 rounded-[3rem] border border-white/10 bg-white p-6 text-zinc-950 shadow-2xl md:p-10 lg:grid-cols-2"
        >
          <div className="rounded-[2.5rem] bg-zinc-50 p-6">
            <div className="mb-7 flex items-center gap-4">
              <div className="rounded-2xl bg-red-600 p-4">
                <selected.icon className="text-white" />
              </div>
              <div>
                <p className="font-black">{selected.title}</p>
                <p className="text-sm text-zinc-500">Selected service</p>
              </div>
            </div>
            <label className="block">
              <span className="mb-2 block text-sm font-bold">Change service</span>
              <select
                value={form.service}
                onChange={(e) => updateField("service", e.target.value)}
                className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 font-semibold"
              >
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>{s.title}</option>
                ))}
              </select>
            </label>
            <div className="mt-6 rounded-2xl bg-red-50 p-4">
              <h4 className="font-black text-red-800">Service includes:</h4>
              <ul className="mt-3 grid gap-2">
                {selected.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-red-700">
                    <CheckCircle2 size={16} /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid gap-4">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-[2.5rem] bg-green-50 p-8 text-center">
                <CheckCircle2 className="text-green-600" size={64} />
                <h3 className="mt-4 text-2xl font-black text-green-800">Email client opened!</h3>
                <p className="mt-2 text-green-700">Complete sending the email to submit your quote request.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold">Full Name *</span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="w-full rounded-2xl border border-zinc-200 px-4 py-3"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold">Email *</span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full rounded-2xl border border-zinc-200 px-4 py-3"
                      placeholder="your@email.com"
                    />
                  </label>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold">Phone</span>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full rounded-2xl border border-zinc-200 px-4 py-3"
                      placeholder="+263 77..."
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold">Location *</span>
                    <input
                      type="text"
                      required
                      value={form.location}
                      onChange={(e) => updateField("location", e.target.value)}
                      className="w-full rounded-2xl border border-zinc-200 px-4 py-3"
                      placeholder="City/Area"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold">Project Details</span>
                  <textarea
                    value={form.specifications}
                    onChange={(e) => updateField("specifications", e.target.value)}
                    rows={4}
                    className="w-full rounded-2xl border border-zinc-200 px-4 py-3"
                    placeholder="Describe your requirements..."
                  />
                </label>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-4 font-black text-white hover:bg-red-500"
                >
                  <Send size={18} /> Submit Quote Request
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default function OneTechWebsite() {
  const [page, setPage] = useState("home");
  const [quoteService, setQuoteService] = useState("");
  const [serviceSlug, setServiceSlug] = useState("starlink");

  const openQuote = (slug = "") => {
    setQuoteService(slug);
    setPage("quote");
  };

  const openService = (slug) => {
    setServiceSlug(slug);
    setPage("service-detail");
  };

  const CurrentPage = useMemo(() => {
    if (page === "about") return <AboutPage />;
    if (page === "services") return <ServicesPage openService={openService} openQuote={openQuote} />;
    if (page === "service-detail") return <ServiceDetailPage serviceSlug={serviceSlug} openQuote={openQuote} setPage={setPage} />;
    if (page === "team") return <TeamPage />;
    if (page === "contact") return <ContactPage />;
    if (page === "quote") return <QuotePage selectedService={quoteService} />;
    return <HomePage setPage={setPage} openQuote={openQuote} openService={openService} />;
  }, [page, quoteService, serviceSlug]);

  return (
    <AppShell page={page} setPage={setPage}>
      <AnimatePresence mode="wait">
        {CurrentPage}
      </AnimatePresence>
    </AppShell>
  );
}
