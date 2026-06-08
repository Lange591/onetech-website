
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera, Satellite, Wifi, Network, Sun, Laptop, Phone, Mail, MapPin,
  ArrowRight, CheckCircle2, Lock, Sparkles, Menu, X, Home,
  BriefcaseBusiness, MessageCircle, Building2, Router, Zap, ShoppingBag,
  ChevronRight, FileText, Users, ExternalLink, Info
} from "lucide-react";

// @Lange coding

const WHATSAPP_NUMBER = "263786025853";
const COMPANY_EMAIL = "info@onetechitservices.co.zw";
const COMPANY_PHONE = "+263 786 025 853";
const COMPANY_PHONE_ALT1 = "+263 775 131 446";
const COMPANY_PHONE_ALT2 = "+263 773 566 596";
const COMPANY_LOCATION = "Mutare Trade Centre, Shop 69-70";

const socialLinks = {
  facebook: "https://www.facebook.com/share/1CSVtM7UHq/",
  instagram: "https://www.instagram.com/onetechitservices1?igsh=MXE0ZGtmd3M5ZnUwOA==",
  google: "https://share.google/Qbhmlnw4fSU3gV1II",
  website: "https://onetechitservices.co.zw",
};

// @Lange coding

const services = [
  {
    slug: "cctv",
    icon: Camera,
    title: "CCTV Installation",
    intro: "Smart surveillance for homes, shops, offices and commercial premises.",
    text: "We install HD cameras, DVR/NVR systems, remote viewing, clean cabling and secure camera positioning. Our professional team ensures optimal camera placement for maximum coverage and security.",
    points: ["Indoor & outdoor cameras", "Remote phone viewing", "DVR/NVR setup", "Solar-powered options"],
    images: [
      "/images/cctv/cctv-install.jpg",
      "/images/cctv/cctv-1.jpg",
      "/images/cctv/cctv-2.jpg",
      "/images/cctv/cctv-3.jpg",
      "/images/cctv/cctv-4.jpg",
      "/images/cctv/cctv-5.jpg",
      "/images/cctv/cctv-6.jpg"
    ],
    gradient: "from-red-500 to-red-950",
  },
  {
    slug: "starlink",
    icon: Satellite,
    title: "Starlink Installation",
    intro: "High-speed satellite internet setup with professional mounting and alignment.",
    text: "We install and configure Starlink for homes, businesses, farms and remote sites that need fast internet. Our team handles dish mounting, cable routing, and network optimization.",
    points: ["Dish mounting", "Cable routing", "Router setup", "Speed testing"],
    images: [
      "/images/network/starlink-install.jpg",
      "/images/network/wifi-install.jpg",
      "/images/network/network-4.jpg",
      "/images/network/network-5.jpg"
    ],
    gradient: "from-red-400 to-zinc-950",
  },
  {
    slug: "consulting",
    icon: Laptop,
    title: "IT Consulting",
    intro: "Practical IT advice for better systems, fewer issues and smarter growth.",
    text: "We help you choose the right devices, networks, security systems and support approach for your environment. Get expert guidance tailored to your specific needs.",
    points: ["IT planning", "Device recommendations", "Business support", "Digital upgrades"],
    images: [
      "/images/network/network-2.jpg",
      "/images/network/network-3.jpg",
      "/images/events/exhibition.jpg",
      "/images/events/team-event.jpg"
    ],
    gradient: "from-zinc-700 to-red-950",
  },
  {
    slug: "wifi",
    icon: Wifi,
    title: "WiFi Extension & Hotspot Setup",
    intro: "Stronger WiFi coverage and managed hotspot solutions.",
    text: "We extend coverage, reduce dead zones, configure access points and set up guest hotspot access. Our solutions ensure seamless connectivity throughout your premises.",
    points: ["Access points", "Guest hotspots", "Coverage extension", "Router optimisation"],
    images: [
      "/images/network/wifi-install.jpg",
      "/images/network/network-4.jpg",
      "/images/network/network-5.jpg",
      "/images/network/network-1.jpg"
    ],
    gradient: "from-red-600 to-black",
  },
  {
    slug: "network",
    icon: Network,
    title: "Network Infrastructure",
    intro: "Structured cabling, switching, routing and business network upgrades.",
    text: "We design and install clean, scalable network infrastructure that supports daily business operations. From small offices to large enterprises, we deliver reliable solutions.",
    points: ["Structured cabling", "Switches & routers", "Cabinet setup", "LAN upgrades"],
    images: [
      "/images/network/network-4.jpg",
      "/images/network/network-5.jpg",
      "/images/network/network-1.jpg",
      "/images/network/network-2.jpg"
    ],
    gradient: "from-red-500 to-zinc-900",
  },
  {
    slug: "solar",
    icon: Sun,
    title: "Solar Installation",
    intro: "Solar backup solutions for homes, businesses, cameras and internet systems.",
    text: "We install solar panels, inverters and batteries to keep critical systems running even during power cuts. Our solutions provide reliable, sustainable energy independence.",
    points: ["Solar panels", "Inverters", "Battery backup", "Maintenance support"],
    images: [
      "/images/solar/inverter-install-2.jpg",
      "/images/solar/solar-panel-install.jpg",
      "/images/solar/inverter-install-1.jpg",
      "/images/solar/solar-1.jpg",
      "/images/solar/solar-2.jpg",
      "/images/solar/solar-3.jpg",
      "/images/solar/solar-4.jpg",
      "/images/solar/solar-5.jpg"
    ],
    gradient: "from-orange-500 to-red-950",
  },
  {
    slug: "gadgets",
    icon: ShoppingBag,
    title: "IT Gadgets & Accessories",
    intro: "Useful tech devices and accessories for work, connectivity and security.",
    text: "We supply and advise on tech gadgets that improve productivity, internet access, safety and convenience. Quality equipment from trusted brands at competitive prices.",
    points: ["Routers", "Cameras", "Smart accessories", "Tech recommendations"],
    images: [
      "/images/events/tent-booth.jpg",
      "/images/network/network-2.jpg",
      "/images/network/network-3.jpg",
      "/images/events/team-booth.jpg"
    ],
    gradient: "from-zinc-800 to-red-700",
  },
];

// @Lange coding

const teamMembers = [
  {
    name: "Nixon Kunze",
    role: "Technical Director",
    img: "/images/team/nixon-kunze.jpg",
    description: "Leading the technical vision and overseeing all installations and projects."
  },
  {
    name: "Field Specialist",
    role: "WiFi, Starlink & Customer Support",
    img: "/images/solar/inverter-thumbsup.jpg",
    description: "Specialized in wireless solutions, satellite internet, and client relations."
  }
];

const pages = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: Info },
  { id: "services", label: "Services", icon: BriefcaseBusiness },
  { id: "team", label: "Team", icon: Users },
  { id: "contact", label: "Contact", icon: MessageCircle },
  { id: "quote", label: "Quote", icon: FileText },
];

// @Lange coding

function TechBackground() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 20}s`,
    duration: `${15 + Math.random() * 20}s`,
    size: Math.random() > 0.7 ? 3 : Math.random() > 0.4 ? 2 : 1,
  }));

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 bg-[#050508]" />
      
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          animation: 'pulse-glow 3s ease-in-out infinite',
          backgroundImage: `
            radial-gradient(ellipse 1000px 800px at 0% 0%, rgba(220,38,38,0.4), transparent 60%),
            radial-gradient(ellipse 800px 600px at 100% 100%, rgba(185,28,28,0.35), transparent 60%),
            radial-gradient(ellipse 600px 500px at 50% 30%, rgba(239,68,68,0.15), transparent 60%)
          `
        }}
      />
      
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          animation: 'pulse-glow 4s ease-in-out infinite 1.5s',
          backgroundImage: `
            radial-gradient(ellipse 700px 500px at 85% 15%, rgba(220,38,38,0.25), transparent 60%),
            radial-gradient(ellipse 500px 400px at 15% 85%, rgba(239,68,68,0.2), transparent 60%)
          `
        }}
      />

      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          animation: 'circuit-pulse 2.5s ease-in-out infinite',
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='none' stroke='%23dc2626' stroke-width='1'%3E%3Cpath d='M0 50h35M65 50h35' stroke-opacity='0.3'/%3E%3Cpath d='M50 0v35M50 65v35' stroke-opacity='0.3'/%3E%3Crect x='35' y='35' width='30' height='30' stroke-opacity='0.25'/%3E%3C/g%3E%3Ccircle cx='50' cy='50' r='4' fill='%23ef4444' fill-opacity='0.6'/%3E%3Ccircle cx='35' cy='50' r='2' fill='%23ef4444' fill-opacity='0.4'/%3E%3Ccircle cx='65' cy='50' r='2' fill='%23ef4444' fill-opacity='0.4'/%3E%3Ccircle cx='50' cy='35' r='2' fill='%23ef4444' fill-opacity='0.4'/%3E%3Ccircle cx='50' cy='65' r='2' fill='%23ef4444' fill-opacity='0.4'/%3E%3Ccircle cx='0' cy='50' r='2' fill='%23ef4444' fill-opacity='0.3'/%3E%3Ccircle cx='100' cy='50' r='2' fill='%23ef4444' fill-opacity='0.3'/%3E%3Ccircle cx='50' cy='0' r='2' fill='%23ef4444' fill-opacity='0.3'/%3E%3Ccircle cx='50' cy='100' r='2' fill='%23ef4444' fill-opacity='0.3'/%3E%3C/svg%3E")
          `,
          backgroundSize: "100px 100px"
        }}
      />
      
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.12]"
        style={{
          animation: 'hex-rotate 40s linear infinite',
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104' viewBox='0 0 60 104'%3E%3Cg fill='none' stroke='%23dc2626' stroke-width='0.8'%3E%3Cpath d='M30 0L60 17.3v34.6L30 69.2 0 51.9V17.3z'/%3E%3Cpath d='M30 34.6L60 51.9v34.6L30 103.8 0 86.5V51.9z'/%3E%3C/g%3E%3Ccircle cx='30' cy='34.6' r='3' fill='%23ef4444' fill-opacity='0.5'/%3E%3C/svg%3E")
          `,
          backgroundSize: "60px 104px"
        }}
      />
      
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          animation: 'grid-pulse 4s ease-in-out infinite',
          backgroundImage: `
            linear-gradient(90deg, transparent 0%, transparent 49.5%, rgba(220,38,38,0.15) 50%, transparent 50.5%, transparent 100%),
            linear-gradient(0deg, transparent 0%, transparent 49.5%, rgba(220,38,38,0.1) 50%, transparent 50.5%, transparent 100%)
          `,
          backgroundSize: "60px 60px"
        }}
      />
      
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.08]"
        style={{
          animation: 'data-flow 15s linear infinite',
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Ctext x='10' y='25' fill='%23ef4444' font-family='Consolas,monospace' font-size='11' font-weight='bold'%3E0101%3C/text%3E%3Ctext x='70' y='25' fill='%23ef4444' font-family='Consolas,monospace' font-size='11' opacity='0.7'%3E1100%3C/text%3E%3Ctext x='30' y='60' fill='%23ef4444' font-family='Consolas,monospace' font-size='11' opacity='0.8'%3E1010%3C/text%3E%3Ctext x='85' y='60' fill='%23ef4444' font-family='Consolas,monospace' font-size='11' opacity='0.6'%3E0011%3C/text%3E%3Ctext x='10' y='95' fill='%23ef4444' font-family='Consolas,monospace' font-size='11' opacity='0.6'%3E1111%3C/text%3E%3Ctext x='60' y='95' fill='%23ef4444' font-family='Consolas,monospace' font-size='11'%3E0100%3C/text%3E%3C/svg%3E")
          `,
          backgroundSize: "120px 120px"
        }}
      />

      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.1]"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Cg stroke='%23dc2626' stroke-width='0.6' fill='none'%3E%3Cpath d='M75 10L140 45v60L75 140 10 105V45z'/%3E%3Cpath d='M75 10v130M10 45l130 60M140 45L10 105' stroke-dasharray='4,4'/%3E%3C/g%3E%3Cg fill='%23ef4444'%3E%3Ccircle cx='75' cy='10' r='5'/%3E%3Ccircle cx='140' cy='45' r='4'/%3E%3Ccircle cx='140' cy='105' r='4'/%3E%3Ccircle cx='75' cy='140' r='5'/%3E%3Ccircle cx='10' cy='105' r='4'/%3E%3Ccircle cx='10' cy='45' r='4'/%3E%3Ccircle cx='75' cy='75' r='6'/%3E%3C/g%3E%3C/svg%3E")
          `,
          backgroundSize: "150px 150px"
        }}
      />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-red-500"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: p.left,
              bottom: '-10px',
              opacity: p.size === 3 ? 0.8 : p.size === 2 ? 0.5 : 0.3,
              animation: `float-particle ${p.duration} linear infinite`,
              animationDelay: p.delay,
              boxShadow: p.size === 3 ? '0 0 6px 2px rgba(239,68,68,0.6)' : 'none',
            }}
          />
        ))}
      </div>

      <div 
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-[0.03]"
      >
        <div
          className="absolute left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(220,38,38,0.5), transparent)',
            animation: 'scan-line 8s linear infinite',
          }}
        />
      </div>

      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(220,38,38,0.6) 40px, rgba(220,38,38,0.6) 41px),
            repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(185,28,28,0.4) 40px, rgba(185,28,28,0.4) 41px)
          `
        }}
      />
      
      <div 
        className="pointer-events-none fixed left-0 top-0 z-0 h-96 w-96 opacity-60"
        style={{
          background: `
            linear-gradient(135deg, rgba(220,38,38,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 0% 0%, rgba(239,68,68,0.2), transparent 70%)
          `
        }}
      />
      
      <div 
        className="pointer-events-none fixed bottom-0 right-0 z-0 h-96 w-96 opacity-60"
        style={{
          background: `
            linear-gradient(315deg, rgba(220,38,38,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 100% 100%, rgba(239,68,68,0.2), transparent 70%)
          `
        }}
      />
      
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)'
        }}
      />
      
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes circuit-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes hex-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes grid-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes data-flow {
          0% { transform: translateY(0); }
          100% { transform: translateY(-120px); }
        }
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        @keyframes scan-line {
          0% { top: -10%; }
          100% { top: 110%; }
        }
      `}</style>
    </>
  );
}

// @Lange coding

function Logo({ small = false }) {
  return (
    <img
      src="/images/brand/logo.jpg"
      alt="OneTech IT Services"
      className={`${small ? "h-10 w-10 sm:h-12 sm:w-12" : "h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24"} rounded-full object-cover bg-white shadow-xl`}
    />
  );
}

// @Lange coding

function AppShell({ page, setPage, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <TechBackground />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <button onClick={() => setPage("home")} className="flex items-center gap-2 sm:gap-3 text-left">
            <Logo small />
            <div>
              <p className="text-base sm:text-xl font-black">
                <span className="text-red-500">One</span>Tech
              </p>
              <p className="hidden sm:block -mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                IT Services
              </p>
            </div>
          </button>
          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-sm font-semibold text-white/70 backdrop-blur-xl md:flex lg:gap-2">
            {pages.map((p) => {
              const Icon = p.icon;
              return (
                <button
                  key={p.id}
                  onClick={() => setPage(p.id)}
                  className={`flex items-center gap-1 rounded-full px-3 py-2 transition md:px-4 md:py-2.5 ${
                    page === p.id ? "bg-white text-red-800" : "hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={14} className="md:h-4 md:w-4" />
                  <span className="text-xs md:text-sm">{p.label}</span>
                </button>
              );
            })}
          </nav>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-green-500 px-4 py-2 text-xs font-black text-white shadow-xl transition hover:bg-green-600 md:inline-flex md:px-5 md:py-2.5 md:text-sm"
          >
            WhatsApp
          </a>
          <button onClick={() => setOpen(true)} className="rounded-full border border-white/10 bg-white/5 p-2 md:p-3 lg:hidden">
            <Menu size={20} />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/95 p-6 backdrop-blur-xl lg:hidden"
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
                  onClick={() => {
                    setPage(p.id);
                    setOpen(false);
                  }}
                  className="rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-left text-lg font-black"
                >
                  {p.label}
                </button>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-green-600 px-6 py-4 text-center text-lg font-black text-white"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <main className="relative z-10 overflow-x-hidden">{children}</main>
      <WhatsAppFloat />
      <footer className="relative z-10 border-t border-white/10 bg-black/60 px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Logo small />
                <div>
                  <p className="text-xl font-black">
                    <span className="text-red-500">One</span>Tech
                  </p>
                  <p className="-mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                    IT Services
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/60 text-center md:text-left">
                Experts in Technology Solutions. Serving Zimbabwe with professional ICT services.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-black text-red-400">Contact</h4>
              <div className="mt-4 space-y-2 text-sm text-white/60">
                <p className="break-words">Email: {COMPANY_EMAIL}</p>
                <p>Location: {COMPANY_LOCATION}</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-black text-red-400">Follow Us</h4>
              <div className="mt-4 flex justify-center md:justify-start gap-3">
                <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-3 hover:bg-red-600">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-3 hover:bg-red-600">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                </a>
                <a href={socialLinks.google} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-3 hover:bg-red-600">
                  <span className="sr-only">Google Business</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 border-t border-white/10 pt-6 text-center text-xs text-white/50 sm:mt-8 sm:pt-8 sm:text-sm">
            OneTech IT Services. Experts in Technology Solutions.
          </div>
        </div>
      </footer>
    </div>
  );
}

// @Lange coding

function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi OneTech, I would like to request a quotation.")}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-[90] flex items-center gap-2 rounded-full bg-green-500 px-3 py-3 font-black text-white shadow-2xl shadow-green-900/40 transition hover:scale-105 sm:bottom-6 sm:right-6 sm:gap-3 sm:px-5 sm:py-4"
    >
      <MessageCircle size={18} className="sm:h-5 sm:w-5" /> 
      <span className="text-xs sm:text-base">Chat on WhatsApp</span>
    </a>
  );
}

// @Lange coding

function HeroGraphic() {
  return (
    <div className="relative mx-auto h-[400px] w-full max-w-[400px] sm:h-[500px] sm:max-w-[500px] md:h-[550px] md:max-w-[550px] lg:h-[650px] lg:max-w-[650px]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-400/25 sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px] lg:h-[570px] lg:w-[570px]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 border-dashed sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[440px] lg:w-[440px]"
      />
      <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-2xl sm:h-[280px] sm:w-[280px] sm:p-4 md:h-[300px] md:w-[300px] lg:h-[330px] lg:w-[330px] lg:rounded-[3.5rem] lg:p-5">
        <img
          src="/images/solar/inverter-install-2.jpg"
          alt="OneTech installation work"
          className="h-full w-full rounded-[1.5rem] object-cover object-top opacity-80 sm:rounded-[2rem] lg:rounded-[2.7rem]"
        />
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black via-black/20 to-transparent sm:rounded-[2.5rem] lg:rounded-[3.5rem]" />
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 lg:bottom-8 lg:left-8">
          <Logo />
          <h3 className="mt-1 text-sm font-black sm:mt-2 sm:text-base md:mt-3 md:text-xl lg:mt-4 lg:text-3xl">Real projects. Real results.</h3>
        </div>
      </div>
      {[
        { icon: Camera, label: "CCTV", x: "0%", y: "10%", size: 18 },
        { icon: Satellite, label: "Starlink", x: "75%", y: "0%", size: 18 },
        { icon: Wifi, label: "WiFi", x: "82%", y: "55%", size: 18 },
        { icon: Sun, label: "Solar", x: "8%", y: "75%", size: 18 },
        { icon: Lock, label: "Security", x: "55%", y: "85%", size: 18 }
      ].map((n, i) => {
        const Icon = n.icon;
        return (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 + i * 0.1 }}
            className="absolute hidden sm:block"
            style={{ left: n.x, top: n.y }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.2 + i * 0.25, repeat: Infinity }}
              className="rounded-[1rem] border border-white/15 bg-black/35 p-2 text-white shadow-2xl backdrop-blur-2xl sm:p-3 md:p-4 lg:p-5"
            >
              <Icon className="mx-auto text-red-100" size={n.size} />
              <p className="mt-1 text-center text-[8px] font-black uppercase tracking-widest sm:text-[10px] md:text-xs">{n.label}</p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

// @Lange coding

function HomePage({ setPage, openService }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 sm:gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1.5 text-xs font-bold text-red-100 backdrop-blur-xl sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <Sparkles size={14} className="sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">Premium IT, Security, Solar & Connectivity</span>
              <span className="xs:hidden">IT, Security & Solar</span>
            </div>
            <h1 className="text-4xl font-black leading-[1.1] tracking-[-0.04em] sm:text-6xl sm:leading-[0.92] sm:tracking-[-0.065em] md:text-7xl lg:text-8xl xl:text-9xl">
              Smart technology, installed with{" "}
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-white bg-clip-text text-transparent">
                precision.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/68 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
              OneTech IT Services is a leading ICT solutions provider specializing in Starlink installations, CCTV security systems, Computer networking, VoIP communications, solar solutions, IT consultancy and IT accessories sales. We help homes and businesses across Zimbabwe stay connected, secure, and powered for success.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4 lg:justify-start">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello OneTech IT Services, I would like to request a quote.")}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-3 text-sm font-black text-white shadow-2xl shadow-red-700/30 hover:bg-red-500 sm:px-8 sm:py-4 sm:text-base"
              >
                Request a Quote <ArrowRight className="ml-2" size={16} />
              </a>
              <button
                onClick={() => setPage("services")}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black text-white backdrop-blur-xl hover:bg-white/10 sm:px-8 sm:py-4 sm:text-base"
              >
                Explore Services
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <HeroGraphic />
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center sm:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1.5 sm:px-4 sm:py-2">
              <Router className="h-3 w-3 text-red-400 sm:h-4 sm:w-4" />
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 sm:text-sm">Popular Services</span>
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] sm:mt-6 sm:text-5xl md:text-7xl">
              Choose a <span className="text-red-500">service</span>.
            </h2>
          </div>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((s) => (
              <ServiceCard key={s.slug} service={s} openService={openService} />
            ))}
          </div>
        </div>
      </section>

      <WorkShowcase />
      <FlyersShowcase />
      <TeamPreview setPage={setPage} />
    </motion.div>
  );
}

// @Lange coding

function WorkShowcase() {
  const workImages = [
    { src: "/images/solar/inverter-install-2.jpg", alt: "Solar inverter installation", label: "Solar Installation" },
    { src: "/images/cctv/cctv-install.jpg", alt: "CCTV camera installation", label: "CCTV Setup" },
    { src: "/images/network/wifi-install.jpg", alt: "WiFi equipment installation", label: "Network Setup" },
    { src: "/images/network/starlink-install.jpg", alt: "Starlink dish installation", label: "Starlink Install" },
    { src: "/images/solar/solar-panel-install.jpg", alt: "Solar panel installation", label: "Solar Panels" },
    { src: "/images/events/team-booth.jpg", alt: "Team at event", label: "Community Events" },
  ];

  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1.5 sm:px-4 sm:py-2">
            <Zap className="h-3 w-3 text-red-400 sm:h-4 sm:w-4" />
            <span className="text-xs font-bold uppercase tracking-widest text-red-400 sm:text-sm">Our Work</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] sm:mt-6 sm:text-5xl md:text-7xl">
            Projects in <span className="text-red-500">action</span>.
          </h2>
        </div>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:rounded-[2rem]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5">
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-red-600 to-red-700 px-2 py-1 text-xs font-black text-white shadow-lg sm:gap-2 sm:px-3 sm:py-1.5 sm:text-sm">
                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4" />
                  {img.label}
                </span>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-2 ring-inset ring-red-500/40 transition-opacity duration-300 group-hover:opacity-100 sm:rounded-[2rem]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// @Lange coding

function FlyersShowcase() {
  const flyers = [
    { 
      src: "/images/flyers/solar-flyer.jpg", 
      alt: "Solar Installations - Clean energy solutions", 
      title: "Solar Installations", 
      description: "Powering homes and businesses with sustainable, clean energy solutions",
      icon: Sun,
      gradient: "from-orange-500 to-red-600",
      stats: "50+ Installations"
    },
    { 
      src: "/images/flyers/security-flyer.jpg", 
      alt: "CCTV & Cyber Security Solutions", 
      title: "Security Solutions", 
      description: "Complete CCTV systems and cyber security for total protection",
      icon: Camera,
      gradient: "from-red-500 to-red-700",
      stats: "24/7 Monitoring"
    },
    { 
      src: "/images/flyers/network-flyer.jpg", 
      alt: "Smart Network Solutions - Starlink & WiFi", 
      title: "Network Solutions", 
      description: "Starlink, WiFi extension, and enterprise network infrastructure",
      icon: Wifi,
      gradient: "from-red-600 to-zinc-800",
      stats: "High-Speed"
    },
  ];

  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1.5 sm:px-4 sm:py-2">
            <Sparkles className="h-3 w-3 text-red-400 sm:h-4 sm:w-4" />
            <span className="text-xs font-bold uppercase tracking-widest text-red-400 sm:text-sm">Our Services</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] sm:mt-6 sm:text-5xl md:text-7xl">
            What we <span className="text-red-500">offer</span>.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/60 sm:mt-4 sm:text-base md:text-lg">
            Professional IT solutions tailored to your needs. From solar installations to network infrastructure, we deliver excellence.
          </p>
        </div>
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {flyers.map((flyer, i) => {
            const Icon = flyer.icon;
            return (
              <motion.div
                key={flyer.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-2xl backdrop-blur-xl sm:rounded-[2rem]"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={flyer.src}
                    alt={flyer.alt}
                    className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${flyer.gradient} opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-30`} />
                  <div className={`absolute left-3 top-3 rounded-xl bg-gradient-to-br ${flyer.gradient} p-2 shadow-xl ring-1 ring-white/20 sm:left-5 sm:top-5 sm:rounded-2xl sm:p-3`}>
                    <Icon className="h-4 w-4 text-white sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="absolute right-3 top-3 rounded-full bg-black/50 px-2 py-1 backdrop-blur-md sm:right-5 sm:top-5 sm:px-3 sm:py-1.5">
                    <span className="text-[10px] font-bold text-white/90 sm:text-xs">{flyer.stats}</span>
                  </div>
                </div>
                <div className="relative p-4 sm:p-5 md:p-6">
                  <div className={`absolute left-4 top-0 h-1 w-8 -translate-y-0.5 rounded-full bg-gradient-to-r ${flyer.gradient} sm:left-5 sm:w-10 md:left-6 md:w-12`} />
                  <h3 className="text-base font-black tracking-tight sm:text-lg md:text-xl">{flyer.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60 sm:mt-3 sm:text-sm">{flyer.description}</p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-bold text-red-400 transition-colors group-hover:text-red-300 sm:mt-4 sm:gap-2 sm:text-sm">
                    <span>View Details</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-2 ring-inset ring-red-500/50 transition-opacity duration-300 group-hover:opacity-100 sm:rounded-[2rem]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// @Lange coding

function ServiceCard({ service, openService }) {
  const Icon = service.icon;
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-2xl backdrop-blur-xl sm:rounded-2xl"
    >
      <div className="relative h-36 overflow-hidden sm:h-44 md:h-52">
        <img
          src={service.images[0]}
          alt={service.title}
          className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className={`absolute bottom-2 left-2 rounded-lg bg-gradient-to-br ${service.gradient} p-1.5 shadow-lg ring-1 ring-white/20 sm:bottom-3 sm:left-3 sm:rounded-xl sm:p-2 md:bottom-4 md:left-4 md:p-3`}>
          <Icon className="h-3 w-3 text-white sm:h-4 sm:w-4 md:h-5 md:w-5" />
        </div>
      </div>
      <div className="p-3 sm:p-4 md:p-6">
        <h3 className="text-sm font-black tracking-tight sm:text-base md:text-xl">{service.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-white/60 sm:mt-2 sm:text-xs md:mt-3 md:text-sm">{service.intro}</p>
        <div className="mt-3 flex gap-2 sm:mt-4 sm:gap-2 md:mt-5 md:gap-3">
          <button
            onClick={() => openService(service.slug)}
            className="rounded-full bg-white px-2 py-1 text-xs font-black text-red-800 transition hover:bg-white/90 sm:px-3 sm:py-1.5 sm:text-xs md:px-4 md:py-2 md:text-sm"
          >
            View details
          </button>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello OneTech IT Services, I would like a quote for ${service.title}.`)}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-red-600 px-2 py-1 text-xs font-black text-white transition hover:bg-red-500 sm:px-3 sm:py-1.5 sm:text-xs md:px-4 md:py-2 md:text-sm"
          >
            Quote
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 ring-2 ring-inset ring-red-500/40 transition-opacity duration-300 group-hover:opacity-100 sm:rounded-2xl" />
    </motion.div>
  );
}

// @Lange coding

function ServicesPage({ openService }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="px-4 py-12 sm:px-6 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1.5 sm:px-4 sm:py-2">
            <BriefcaseBusiness className="h-3 w-3 text-red-400 sm:h-4 sm:w-4" />
            <span className="text-xs font-bold uppercase tracking-widest text-red-400 sm:text-sm">All Services</span>
          </div>
          <h1 className="mt-4 text-3xl font-black tracking-[-0.03em] sm:mt-6 sm:text-5xl md:text-7xl">
            Click any service to <span className="text-red-500">explore</span>.
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/60 sm:mt-4 sm:text-base">
            Discover our comprehensive range of professional IT and technology solutions.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} openService={openService} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// @Lange coding

function ServiceDetailPage({ serviceSlug, setPage }) {
  const service = services.find((s) => s.slug === serviceSlug) || services[0];
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="px-4 py-12 sm:px-6 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <button
          onClick={() => setPage("services")}
          className="mb-4 flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white/80 hover:bg-white/10 sm:mb-6 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
        >
          <ChevronRight className="rotate-180" size={14} /> Back to Services
        </button>
        <div
          className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${service.gradient} p-5 shadow-2xl sm:rounded-3xl sm:p-6 md:p-8 lg:p-12`}
        >
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/15 blur-3xl sm:-right-24 sm:-top-24 sm:h-80 sm:w-80" />
          <div className="relative grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div>
              <div className="inline-flex rounded-xl bg-white/15 p-3 ring-1 ring-white/15 sm:rounded-2xl sm:p-4 md:p-5">
                <Icon size={32} className="sm:h-10 sm:w-10 md:h-12 md:w-12" />
              </div>
              <h1 className="mt-4 text-3xl font-black tracking-[-0.06em] sm:mt-6 sm:text-5xl md:mt-8 md:text-6xl lg:text-8xl">{service.title}</h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base md:mt-6 md:text-lg lg:text-xl lg:leading-9">{service.text}</p>
              <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-3 md:mt-8 md:grid-cols-2 md:gap-4">
                {service.points.map((p) => (
                  <div key={p} className="rounded-xl bg-white/12 p-3 font-bold ring-1 ring-white/10 sm:rounded-2xl sm:p-4">
                    <CheckCircle2 className="mb-2 text-red-100 sm:mb-3" size={16} />
                    <span className="text-xs sm:text-sm">{p}</span>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello OneTech IT Services, I would like a quote for ${service.title}.`)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block rounded-full bg-white px-5 py-2 text-sm font-black text-red-800 shadow-xl hover:bg-white/90 sm:mt-6 sm:px-6 sm:py-2.5 sm:text-base md:mt-8 md:px-7 md:py-3 lg:mt-9 lg:px-8 lg:py-4"
              >
                Request quotation
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {service.images.slice(0, 4).map((img, i) => (
                <img
                  key={img}
                  src={img}
                  alt={`${service.title} work ${i + 1}`}
                  className={`${i === 0 ? "col-span-2 h-48 sm:h-64 md:h-80" : "h-24 sm:h-32 md:h-44"} w-full rounded-xl object-cover object-center shadow-2xl sm:rounded-2xl`}
                />
              ))}
            </div>
          </div>
        </div>
        {service.images.length > 4 && (
          <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 md:mt-8 md:grid-cols-3 md:gap-5">
            {service.images.slice(4).map((img, i) => (
              <img
                key={img}
                src={img}
                alt={`${service.title} additional work ${i + 1}`}
                className="h-40 w-full rounded-xl object-cover object-center sm:h-48 md:h-60 lg:h-72 lg:rounded-2xl"
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// @Lange coding

function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="px-4 py-12 sm:px-6 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-red-600 via-red-800 to-black p-6 shadow-2xl sm:rounded-3xl sm:p-8 md:p-10 lg:p-12">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-red-100 sm:text-sm">About Us</p>
          <h1 className="mt-3 text-3xl font-black tracking-[-0.06em] sm:mt-4 sm:text-5xl md:text-6xl lg:text-8xl">
            Your trusted technology partner.
          </h1>
        </div>

        <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl sm:rounded-3xl sm:p-6 md:p-8">
            <h2 className="text-xl font-black sm:text-2xl md:text-3xl">Who We Are</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:mt-5 sm:text-base md:mt-6 md:leading-8">
              At OneTech IT Services, we deliver reliable, innovative, and cost-effective technology solutions that help homes, businesses, schools, farms, lodges, and organizations stay connected, secure, and productive.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base md:leading-8">
              With extensive experience in Information Technology, Telecommunications, and Project Management, we specialize in Starlink installations, CCTV security systems, Wi-Fi and LAN solutions, VoIP and PBX telephone systems, biometric attendance systems, solar power solutions, and ICT consultancy services.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl sm:rounded-3xl sm:p-6 md:p-8">
            <h2 className="text-xl font-black sm:text-2xl md:text-3xl">Our Mission</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:mt-5 sm:text-base md:mt-6 md:leading-8">
              Our mission is to provide professional technology solutions tailored to our clients&apos; needs while maintaining the highest standards of quality, reliability, and customer service.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base md:leading-8">
              Whether you need high-speed internet in a remote area, a comprehensive security surveillance system, a business communication platform, or a complete network infrastructure, our experienced team has the expertise to deliver results.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base md:leading-8">
              Based in Mutare and serving clients across Zimbabwe, we are committed to helping individuals and organizations harness technology to improve efficiency, security, and connectivity.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl sm:mt-8 sm:rounded-3xl sm:p-6 md:p-8">
          <h2 className="text-xl font-black sm:text-2xl md:text-3xl">Why Choose OneTech IT Services?</h2>
          <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Professional Installation & Support",
              "Experienced ICT & Telecoms Specialists",
              "Reliable & Affordable Solutions",
              "Quality Equipment from Trusted Brands",
              "Nationwide Service Coverage",
              "Customer-Focused Approach"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 p-3 text-sm sm:gap-4 sm:rounded-2xl sm:p-4">
                <CheckCircle2 className="shrink-0 text-red-400" size={16} />
                <span className="text-xs font-bold sm:text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 md:grid-cols-3">
          <div className="aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
            <img
              src="/images/events/tent-booth.jpg"
              alt="OneTech event booth"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
            <img
              src="/images/events/team-booth.jpg"
              alt="OneTech team"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-2 aspect-[4/3] overflow-hidden rounded-xl md:col-span-1 sm:rounded-2xl">
            <img
              src="/images/events/radio-interview.jpg"
              alt="OneTech media appearance"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// @Lange coding

function TeamPreview({ setPage }) {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-24">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-5 shadow-2xl backdrop-blur-xl sm:rounded-3xl sm:p-6 md:p-8 lg:p-12">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1.5 sm:px-4 sm:py-2">
              <Users className="h-3 w-3 text-red-400 sm:h-4 sm:w-4" />
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 sm:text-sm">Meet Our Team</span>
            </div>
            <h2 className="mt-4 text-2xl font-black tracking-[-0.03em] sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl">
              The people behind the <span className="text-red-500">installations</span>.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60 sm:mt-4">
              Our experienced team of technicians and specialists are dedicated to delivering quality installations and exceptional customer service.
            </p>
            <button
              onClick={() => setPage("team")}
              className="mt-5 rounded-full bg-red-600 px-5 py-2.5 text-sm font-black text-white hover:bg-red-500 sm:mt-6 sm:px-6 sm:py-3 md:mt-8 md:px-7 md:py-4"
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

// @Lange coding

function TeamGrid() {
  return (
    <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
      {teamMembers.map((t) => (
        <div key={t.name} className="overflow-hidden rounded-xl border border-white/10 bg-black/25 sm:rounded-2xl">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={t.img}
              alt={t.name}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>
          <div className="p-4 sm:p-5 md:p-6">
            <h3 className="text-lg font-black sm:text-xl md:text-2xl">{t.name}</h3>
            <p className="mt-1 text-xs text-red-200 sm:mt-2 sm:text-sm">{t.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// @Lange coding

function TeamPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="px-4 py-12 sm:px-6 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-red-400 sm:text-sm">Team</p>
        <h1 className="mt-3 text-3xl font-black tracking-[-0.06em] sm:mt-4 sm:text-5xl md:text-6xl lg:text-8xl">Meet our team.</h1>
        <p className="mt-3 max-w-2xl text-sm text-white/60 sm:mt-4 sm:text-base md:mt-6 md:text-lg">
          Our dedicated team of professionals brings years of experience in IT, telecommunications, and project management to every installation.
        </p>
        <div className="mt-8 sm:mt-10 md:mt-12">
          <TeamGrid />
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl sm:mt-10 sm:rounded-3xl sm:p-6 md:mt-12 md:p-8">
          <h2 className="text-xl font-black sm:text-2xl md:text-3xl">Team in Action</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4 lg:grid-cols-4">
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src="/images/events/tent-booth.jpg"
                alt="Team at exhibition"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src="/images/events/team-booth.jpg"
                alt="Team at booth"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src="/images/events/outdoor-event.jpg"
                alt="Outdoor event"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src="/images/events/radio-interview.jpg"
                alt="Radio interview"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// @Lange coding

function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="px-4 py-12 sm:px-6 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-white text-zinc-950 shadow-2xl sm:rounded-3xl">
        <div className="grid lg:grid-cols-[1fr_0.9fr]">
          <div className="p-5 sm:p-6 md:p-8 lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-700 sm:text-sm">Contact OneTech</p>
            <h1 className="mt-3 text-3xl font-black tracking-[-0.06em] sm:mt-4 sm:text-5xl md:text-6xl lg:text-8xl">
              {"Let's build your setup."}
            </h1>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4">
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100 sm:gap-4 sm:rounded-3xl sm:p-5"
              >
                <Mail className="text-red-700" size={18} />
                <div>
                  <p className="text-xs font-semibold text-zinc-500 sm:text-sm">Email</p>
                  <p className="text-sm font-black break-words sm:text-base">{COMPANY_EMAIL}</p>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-4 sm:gap-4 sm:rounded-3xl sm:p-5">
                <MapPin className="text-red-700" size={18} />
                <div>
                  <p className="text-xs font-semibold text-zinc-500 sm:text-sm">Location</p>
                  <p className="text-sm font-black sm:text-base">{COMPANY_LOCATION}</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-green-50 p-4 transition hover:bg-green-100 sm:gap-4 sm:rounded-3xl sm:p-5"
              >
                <MessageCircle className="text-green-700" size={18} />
                <div>
                  <p className="text-xs font-semibold text-green-600 sm:text-sm">WhatsApp</p>
                  <p className="text-sm font-black text-green-800 sm:text-base">Chat with us directly</p>
                </div>
              </a>
            </div>
            <SocialButtons />
          </div>
          <div className="min-h-[400px] bg-zinc-950 p-3 sm:min-h-[500px] sm:p-4">
            <iframe
              title="OneTech Location Map"
              src="https://www.google.com/maps?q=Mutare%20Trade%20Centre%20Mutare%20Zimbabwe&output=embed"
              className="h-full min-h-[380px] w-full rounded-2xl border-0 sm:min-h-[480px] sm:rounded-3xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// @Lange coding

function SocialButtons() {
  const items = [
    {
      label: "Facebook",
      href: socialLinks.facebook,
      icon: (
        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      label: "Instagram",
      href: socialLinks.instagram,
      icon: (
        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
        </svg>
      )
    },
    {
      label: "Google",
      href: socialLinks.google,
      icon: (
        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      )
    },
    {
      label: "Website",
      href: socialLinks.website,
      icon: <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
    }
  ];

  return (
    <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-full bg-red-600 px-3 py-1.5 text-xs font-black text-white transition hover:bg-red-700 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-3"
        >
          {item.icon}
          {item.label}
        </a>
      ))}
    </div>
  );
}

// @Lange coding

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
    specifications: ""
  });

  const selected = services.find((s) => s.slug === form.service) || services[0];
  const updateField = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const submitQuote = (event) => {
    event.preventDefault();
    const subject = `Quotation Request - ${selected.title}`;
    const body = `Hello OneTech IT Services,%0D%0A%0D%0AI would like to request a quotation.%0D%0A%0D%0AService Required: ${selected.title}%0D%0AName: ${form.name}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0ALocation: ${form.location}%0D%0ABudget Range: ${form.budget || "Not specified"}%0D%0ATimeline: ${form.timeline || "Not specified"}%0D%0A%0D%0ASpecifications:%0D%0A${encodeURIComponent(form.specifications)}%0D%0A%0D%0APlease send the quotation to my email address above.`;
    window.location.href = `mailto:${COMPANY_EMAIL}?cc=${encodeURIComponent(form.email)}&subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4 py-12 sm:px-6 sm:py-16 md:py-20"
      >
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-8 backdrop-blur-xl sm:rounded-3xl sm:p-10 md:p-12">
            <CheckCircle2 className="mx-auto h-16 w-16 text-green-500 sm:h-20 sm:w-20" />
            <h1 className="mt-4 text-2xl font-black sm:mt-5 sm:text-3xl md:mt-6 md:text-4xl">Request Sent!</h1>
            <p className="mt-3 text-sm text-white/70 sm:mt-4 sm:text-base md:text-lg">
              Your email client should have opened with your quotation request. If it did not, please email us directly at {COMPANY_EMAIL}
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi OneTech, I just submitted a quotation request for ${selected.title}. Please confirm receipt.`)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-black text-white sm:mt-6 sm:px-6 sm:py-3 md:mt-8 md:px-8 md:py-4"
            >
              <MessageCircle /> Follow up on WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="px-4 py-12 sm:px-6 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 rounded-2xl border border-white/10 bg-gradient-to-br from-red-600 via-red-800 to-black p-6 shadow-2xl sm:mb-8 sm:rounded-3xl sm:p-8 md:p-10 lg:p-12">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-red-100 sm:text-sm">Request a Quotation</p>
          <h1 className="mt-3 text-3xl font-black tracking-[-0.06em] sm:mt-4 sm:text-5xl md:text-6xl lg:text-8xl">Tell us what you need.</h1>
        </div>

        <form
          onSubmit={submitQuote}
          className="grid gap-5 rounded-2xl border border-white/10 bg-white p-5 text-zinc-950 shadow-2xl sm:gap-6 sm:rounded-3xl sm:p-6 md:p-8 lg:grid-cols-2 lg:p-10"
        >
          <div className="rounded-xl bg-zinc-50 p-4 sm:rounded-2xl sm:p-5 md:p-6">
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <div className={`rounded-xl bg-gradient-to-br ${selected.gradient} p-2 sm:rounded-2xl sm:p-3 md:p-4`}>
                <selected.icon className="text-white" size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-500 sm:text-sm">Selected Service</p>
                <p className="text-base font-black sm:text-lg md:text-xl">{selected.title}</p>
              </div>
            </div>

            <label className="block">
              <span className="text-xs font-bold text-zinc-600 sm:text-sm">Change Service</span>
              <select
                value={form.service}
                onChange={(e) => updateField("service", e.target.value)}
                className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-2 text-sm font-semibold sm:mt-2 sm:rounded-2xl sm:p-3 md:p-4"
              >
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title}
                  </option>
                ))}
              </select>
            </label>

            <div className="mt-4 grid gap-3 sm:mt-5 sm:gap-4 md:mt-6">
              <label className="block">
                <span className="text-xs font-bold text-zinc-600 sm:text-sm">Your Name *</span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-2 text-sm sm:mt-2 sm:rounded-2xl sm:p-3 md:p-4"
                  placeholder="John Doe"
                />
              </label>
              <label className="block">
                <span className="text-xs font-bold text-zinc-600 sm:text-sm">Email *</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-2 text-sm sm:mt-2 sm:rounded-2xl sm:p-3 md:p-4"
                  placeholder="john@example.com"
                />
              </label>
              <label className="block">
                <span className="text-xs font-bold text-zinc-600 sm:text-sm">Phone *</span>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-2 text-sm sm:mt-2 sm:rounded-2xl sm:p-3 md:p-4"
                  placeholder="+263 77 123 4567"
                />
              </label>
            </div>
          </div>

          <div className="rounded-xl bg-zinc-50 p-4 sm:rounded-2xl sm:p-5 md:p-6">
            <h3 className="text-base font-black sm:text-lg md:text-xl">Project Details</h3>
            <div className="mt-4 grid gap-3 sm:mt-5 sm:gap-4 md:mt-6">
              <label className="block">
                <span className="text-xs font-bold text-zinc-600 sm:text-sm">Location *</span>
                <input
                  type="text"
                  required
                  value={form.location}
                  onChange={(e) => updateField("location", e.target.value)}
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-2 text-sm sm:mt-2 sm:rounded-2xl sm:p-3 md:p-4"
                  placeholder="Mutare, Zimbabwe"
                />
              </label>
              <label className="block">
                <span className="text-xs font-bold text-zinc-600 sm:text-sm">Budget Range (Optional)</span>
                <select
                  value={form.budget}
                  onChange={(e) => updateField("budget", e.target.value)}
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-2 text-sm sm:mt-2 sm:rounded-2xl sm:p-3 md:p-4"
                >
                  <option value="">Select budget range</option>
                  <option value="Under $500">Under $500</option>
                  <option value="$500 - $1,000">$500 - $1,000</option>
                  <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                  <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                  <option value="Above $5,000">Above $5,000</option>
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-bold text-zinc-600 sm:text-sm">Timeline (Optional)</span>
                <select
                  value={form.timeline}
                  onChange={(e) => updateField("timeline", e.target.value)}
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-2 text-sm sm:mt-2 sm:rounded-2xl sm:p-3 md:p-4"
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="Within 1 week">Within 1 week</option>
                  <option value="Within 2 weeks">Within 2 weeks</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-bold text-zinc-600 sm:text-sm">Additional Specifications</span>
                <textarea
                  value={form.specifications}
                  onChange={(e) => updateField("specifications", e.target.value)}
                  rows={3}
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white p-2 text-sm sm:mt-2 sm:rounded-2xl sm:p-3 md:rows-4 md:p-4"
                  placeholder="Tell us more about your requirements..."
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-red-600 px-5 py-2.5 text-sm font-black text-white shadow-xl hover:bg-red-500 sm:mt-6 sm:py-3 sm:text-base md:px-8 md:py-4"
            >
              Submit Quote Request
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

// @Lange coding

export default function OneTechWebsite() {
  const [page, setPage] = useState("home");
  const [quoteService, setQuoteService] = useState("");
  const [serviceSlug, setServiceSlug] = useState("cctv");

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
    if (page === "services") return <ServicesPage openService={openService} />;
    if (page === "service-detail") return <ServiceDetailPage serviceSlug={serviceSlug} setPage={setPage} />;
    if (page === "team") return <TeamPage />;
    if (page === "contact") return <ContactPage />;
    if (page === "quote") return <QuotePage selectedService={quoteService} />;
    return <HomePage setPage={setPage} openService={openService} />;
  }, [page, quoteService, serviceSlug]);

  return (
    <AppShell page={page} setPage={setPage}>
      <AnimatePresence mode="wait">{CurrentPage}</AnimatePresence>
    </AppShell>
  );
}
