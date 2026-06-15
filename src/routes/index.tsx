import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone, MapPin, Sparkles, Camera, UtensilsCrossed, PartyPopper,
  Star, Clock, ShieldCheck, Heart, MessageCircle, Send, Menu, X,
  Quote, CheckCircle2, Award, Users,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import c1 from "@/assets/c1.webp";
import c2 from "@/assets/c2.webp";
import c3 from "@/assets/c3.webp";
import c4 from "@/assets/c4.webp";
import c5 from "@/assets/c5.webp";
import c6 from "@/assets/c6.webp";
import c7 from "@/assets/c7.webp";
import c8 from "@/assets/c8.webp";
import c9 from "@/assets/c9.webp";
import c10 from "@/assets/c10.webp";
import c11 from "@/assets/c11.webp";
import c12 from "@/assets/c12.webp";
import c13 from "@/assets/c13.webp";
import c14 from "@/assets/c14.webp";

const GALLERY = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14];
const PHONE = "082200 24200";
const WHATSAPP = "918220024200";
const ADDRESS = "74, Pulidevan St, Madurai, Tamil Nadu 625002";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smiley Events & Production — Luxury Event Planners in Madurai" },
      { name: "description", content: "24-hour event planners in Madurai crafting cinematic weddings, birthdays & cultural celebrations. Decor, photography, catering." },
      { property: "og:title", content: "Smiley Events & Production — Madurai" },
      { property: "og:description", content: "Cinematic weddings, birthdays & celebrations in Madurai. Book your event today." },
      { property: "og:image", content: GALLERY[0] },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Toaster richColors position="top-center" />
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Gallery />
      <WhyUs />
      <Testimonials />
      <Booking />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Services", "#services"],
    ["Gallery", "#gallery"],
    ["Why Us", "#why"],
    ["Reviews", "#reviews"],
    ["Book", "#book"],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-3 sm:mt-5 max-w-7xl px-4">
        <div className="glass rounded-full px-4 sm:px-6 py-3 flex items-center justify-between shadow-[var(--shadow-soft)]">
          <a href="#top" className="flex items-center gap-2 min-w-0">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--gradient-luxe)] text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-lg sm:text-xl font-semibold truncate text-primary">
              Smiley Events
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {links.map(([l, h]) => (
              <a key={h} href={h} className="text-foreground/75 hover:text-primary transition-colors">{l}</a>
            ))}
          </nav>
          <a href="#book" className="hidden md:inline-flex">
            <Button className="rounded-full">Book Now</Button>
          </a>
          <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden glass mt-2 rounded-2xl p-4 flex flex-col gap-3">
            {links.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-2 text-foreground/80">{l}</a>
            ))}
            <a href="#book" onClick={() => setOpen(false)}>
              <Button className="rounded-full w-full">Book Now</Button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 120]);
  const y2 = useTransform(scrollY, [0, 600], [0, -80]);
  const rotate = useTransform(scrollY, [0, 800], [0, 25]);

  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 px-4">
      {/* Ambient glow */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[var(--gold)] opacity-25 blur-[120px]" />
        <div className="absolute top-40 right-0 h-[460px] w-[460px] rounded-full bg-[var(--plum)] opacity-30 blur-[140px]" />
        <div className="absolute inset-0 bg-[var(--gradient-beige)] opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs sm:text-sm text-primary"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--gold)] animate-pulse" />
            Available 24 Hours · Madurai · ஸ்மைலி ஈவென்ட்ஸ்
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-primary"
          >
            Cinematic
            <span className="block italic text-gradient-luxe">celebrations,</span>
            crafted with soul.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground"
          >
            From regal weddings to vibrant birthdays and college culturals — we design the décor,
            capture the moments, and serve the feast. One trusted team, end to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#book"><Button size="lg" className="rounded-full px-7 h-12 text-base">Book Your Event</Button></a>
            <a href={`https://wa.me/${WHATSAPP}?text=Hi%20Smiley%20Events%2C%20I%27d%20like%20a%20quote.`} target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="rounded-full px-7 h-12 text-base border-primary/30 hover:bg-primary hover:text-primary-foreground">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}
            className="mt-10 grid grid-cols-3 gap-6 max-w-md"
          >
            <Stat n="4.4★" label="76 reviews" />
            <Stat n="24/7" label="On call" />
            <Stat n="500+" label="Events" />
          </motion.div>
        </div>

        {/* 3D Stage */}
        <div className="relative h-[460px] sm:h-[560px] lg:h-[640px] [perspective:1400px]">
          <motion.div
            style={{ y: y2, rotate }}
            aria-hidden
            className="absolute -top-6 right-6 h-44 w-44 sm:h-56 sm:w-56 rounded-full border border-[var(--gold)]/40 animate-spin-slow"
          />
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, rotateY: -30, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute inset-0 [transform-style:preserve-3d]"
          >
            {/* Main */}
            <motion.div
              whileHover={{ rotateY: -8, rotateX: 4 }}
              transition={{ type: "spring", stiffness: 80 }}
              className="absolute left-4 top-8 right-20 bottom-20 rounded-3xl overflow-hidden shadow-[var(--shadow-stage)] [transform:translateZ(60px)]"
            >
              <img src={GALLERY[0]} alt="Wedding stage decor" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)]/60 via-transparent to-transparent" />
            </motion.div>
            {/* Back card */}
            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity }}
              className="absolute right-0 top-0 h-44 w-40 sm:h-56 sm:w-52 rounded-2xl overflow-hidden shadow-xl [transform:translateZ(20px)_rotate(6deg)] border-4 border-white"
            >
              <img src={GALLERY[5]} alt="Floral arch" className="h-full w-full object-cover" />
            </motion.div>
            {/* Front card */}
            <motion.div
              animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute left-0 bottom-0 h-40 w-44 sm:h-52 sm:w-56 rounded-2xl overflow-hidden shadow-2xl [transform:translateZ(90px)_rotate(-5deg)] border-4 border-white"
            >
              <img src={GALLERY[8]} alt="Reception stage" className="h-full w-full object-cover" />
            </motion.div>
            {/* Glow orbs */}
            <div className="absolute right-10 bottom-10 h-20 w-20 rounded-full bg-[var(--gold)] blur-2xl animate-glow" />
            <div className="absolute left-20 top-24 h-16 w-16 rounded-full bg-[var(--rose)] blur-2xl animate-glow" />
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-4 left-2 glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[var(--shadow-soft)]"
          >
            <Award className="h-5 w-5 text-[var(--gold)]" />
            <div className="text-xs">
              <div className="font-semibold text-primary">4.4 ★ Google</div>
              <div className="text-muted-foreground">Trusted in Madurai</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-primary">{n}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = ["Weddings", "Birthdays", "Receptions", "Culturals", "Expos", "Engagements", "Baby Showers", "Corporate"];
  return (
    <section className="py-6 border-y border-border bg-primary text-primary-foreground overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-[shimmer_30s_linear_infinite]" style={{ animation: "marquee 28s linear infinite" }}>
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-12 font-display text-2xl">
            <span>{it}</span>
            <Sparkles className="h-4 w-4 text-[var(--gold)]" />
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const services = [
    { icon: Sparkles, title: "Décor & Stage Design", desc: "Floral arches, draping, lighting, theme stages tailored to your story.", img: GALLERY[1] },
    { icon: Camera, title: "Photography & PS Editing", desc: "Cinematic photo & video coverage with premium editing.", img: GALLERY[2] },
    { icon: UtensilsCrossed, title: "Catering", desc: "Mutton biryani, chicken 65 and full multi-course menus.", img: GALLERY[3] },
    { icon: PartyPopper, title: "Full Event Planning", desc: "Weddings, birthdays, culturals, expos — handled end to end.", img: GALLERY[4] },
  ];
  return (
    <section id="services" className="py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHead eyebrow="What we do" title="Every detail, devotedly designed." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-[var(--shadow-soft)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)] via-[var(--plum)]/40 to-transparent" />
                <div className="absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-full bg-white/90 backdrop-blur">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
        <span className="h-px w-10 bg-[var(--gold)]" /> {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-primary">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

/* ---------- GALLERY ---------- */
function Gallery() {
  // Bento layout that uses all 10 images, no empty space
  const cells = [
    { src: GALLERY[0], cls: "col-span-2 row-span-2" },
    { src: GALLERY[1], cls: "col-span-1 row-span-1" },
    { src: GALLERY[2], cls: "col-span-1 row-span-1" },
    { src: GALLERY[3], cls: "col-span-2 row-span-1" },
    { src: GALLERY[4], cls: "col-span-1 row-span-2" },
    { src: GALLERY[5], cls: "col-span-1 row-span-1" },
    { src: GALLERY[6], cls: "col-span-1 row-span-1" },
    { src: GALLERY[7], cls: "col-span-2 row-span-1" },
    { src: GALLERY[8], cls: "col-span-2 row-span-1" },
    { src: GALLERY[9], cls: "col-span-1 row-span-1" },
    { src: GALLERY[10], cls: "col-span-1 row-span-1" },
    { src: GALLERY[11], cls: "col-span-2 row-span-1" },
    { src: GALLERY[12], cls: "col-span-1 row-span-1" },
    { src: GALLERY[13], cls: "col-span-1 row-span-1" },
  ];
  return (
    <section id="gallery" className="py-24 sm:py-32 px-4 bg-[var(--beige-soft)]">
      <div className="mx-auto max-w-7xl">
        <SectionHead eyebrow="Portfolio" title="A reel of unforgettable nights." sub="Real stages we've built across Madurai — every garland, every glow, intentional." />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] gap-3 sm:gap-4">
          {cells.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] group ${c.cls}`}
            >
              <img src={c.src} alt="Event decoration" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <span className="glass rounded-full px-3 py-1 text-xs text-primary">Smiley Events</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
function WhyUs() {
  const items = [
    { icon: ShieldCheck, t: "Transparent pricing", d: "Clear quotes upfront. No surprises, no hidden add-ons." },
    { icon: Clock, t: "24-hour response", d: "Call or WhatsApp anytime. We answer fast and show up faster." },
    { icon: Users, t: "Dedicated team", d: "One point of contact. Decorators, photographers, chefs — all in-house." },
    { icon: Heart, t: "Memorable results", d: "Reviewed 4.4★ by 76 families. We obsess over the moments you'll re-watch forever." },
  ];
  return (
    <section id="why" className="py-24 sm:py-32 px-4 relative overflow-hidden">
      <div aria-hidden className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[var(--gold)]/20 blur-[120px]" />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={GALLERY[6]} alt="Decor team" className="rounded-3xl shadow-[var(--shadow-stage)] aspect-[4/5] object-cover w-full"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -right-2 sm:right-6 glass rounded-2xl p-5 max-w-[260px] shadow-xl"
          >
            <div className="flex items-center gap-2 text-[var(--gold)]">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-2 text-sm text-foreground">"They turned our hall into a dream. On time, on budget."</p>
            <p className="mt-1 text-xs text-muted-foreground">— Priya R., bride</p>
          </motion.div>
        </div>
        <div>
          <SectionHead eyebrow="Why families choose us" title="Reliability you can rehearse to." />
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {items.map((it, i) => (
              <motion.div
                key={it.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-[var(--gold)]/60 hover:shadow-[var(--shadow-soft)] transition-all"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-luxe)] text-primary-foreground">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl text-primary">{it.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const reviews = [
    { n: "Karthik M.", r: "Booked them for my sister's wedding. Decorations were stunning, biryani was a hit. Worth every rupee.", s: 5 },
    { n: "Anitha S.", r: "Best decoration team in Madurai. Very dedicated, came on time, finished early. Highly recommend.", s: 5 },
    { n: "Ravi K.", r: "College cultural was unforgettable. They handled lights, stage, sound — perfect coordination.", s: 4 },
    { n: "Meena V.", r: "Birthday surprise for my daughter turned out magical. Affordable for the quality we got.", s: 5 },
    { n: "Suresh P.", r: "Professional, transparent on pricing, and the photography editing was top-class.", s: 5 },
  ];
  return (
    <section id="reviews" className="py-24 sm:py-32 px-4 bg-primary text-primary-foreground relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-[var(--gold)] blur-[140px]" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[var(--rose)] blur-[160px]" />
      </div>
      <div className="mx-auto max-w-7xl relative">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
          <span className="h-px w-10 bg-[var(--gold)]" /> Loved in Madurai
        </div>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">What our families say.</h2>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass-dark rounded-2xl p-6 text-primary-foreground"
            >
              <Quote className="h-6 w-6 text-[var(--gold)]" />
              <div className="mt-3 flex gap-1 text-[var(--gold)]">
                {Array.from({ length: r.s }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-3 text-sm text-primary-foreground/90 leading-relaxed">"{r.r}"</p>
              <p className="mt-4 text-xs uppercase tracking-wider text-[var(--beige)]">{r.n}</p>
            </motion.div>
          ))}
          <div className="rounded-2xl p-6 bg-[var(--gold)] text-[var(--plum-deep)] flex flex-col justify-between">
            <div>
              <div className="font-display text-6xl">4.4★</div>
              <p className="mt-2 text-sm font-medium">Based on 76 Google reviews</p>
            </div>
            <p className="mt-6 text-xs uppercase tracking-wider">Smiley Events & Production</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- BOOKING ---------- */
function Booking() {
  const [form, setForm] = useState({ name: "", phone: "", event: "", date: "", details: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.event.trim()) {
      toast.error("Please fill name, phone & event type.");
      return;
    }
    setLoading(true);
    // Open WhatsApp with prefilled message — instant lead capture
    const msg = `*New Booking Inquiry*%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AEvent: ${encodeURIComponent(form.event)}%0ADate: ${encodeURIComponent(form.date || "TBD")}%0ADetails: ${encodeURIComponent(form.details || "—")}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    setTimeout(() => {
      toast.success("Inquiry sent! We'll reply within minutes.");
      setForm({ name: "", phone: "", event: "", date: "", details: "" });
      setLoading(false);
    }, 600);
  };

  return (
    <section id="book" className="py-24 sm:py-32 px-4 relative">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[var(--gradient-beige)]" />
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10">
        <div>
          <SectionHead eyebrow="Reserve your date" title="Let's design your celebration." sub="Tell us about your event — we'll respond within minutes, day or night." />
          <div className="mt-10 space-y-5">
            <ContactRow icon={Phone} label="Call us 24/7" value={PHONE} href={`tel:${PHONE.replace(/\s/g, "")}`} />
            <ContactRow icon={MessageCircle} label="WhatsApp" value="Chat instantly" href={`https://wa.me/${WHATSAPP}`} />
            <ContactRow icon={MapPin} label="Visit our studio" value={ADDRESS} href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`} />
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Transparent quotes", "On-time setup", "In-house team", "Same-day booking"].map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5 text-xs text-primary">
                <CheckCircle2 className="h-3.5 w-3.5 text-[var(--gold)]" /> {b}
              </span>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-[var(--shadow-stage)]"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Your name" v={form.name} on={(v) => setForm({ ...form, name: v })} placeholder="Full name" />
            <Field label="Phone" v={form.phone} on={(v) => setForm({ ...form, phone: v })} placeholder="+91…" type="tel" />
            <Field label="Event type" v={form.event} on={(v) => setForm({ ...form, event: v })} placeholder="Wedding, Birthday…" />
            <Field label="Event date" v={form.date} on={(v) => setForm({ ...form, date: v })} type="date" />
          </div>
          <div className="mt-4">
            <Label className="text-xs uppercase tracking-wider text-muted-foreground">Tell us more</Label>
            <Textarea
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
              placeholder="Venue, guest count, theme ideas…"
              className="mt-1.5 min-h-28"
              maxLength={1000}
            />
          </div>
          <Button type="submit" disabled={loading} size="lg" className="mt-6 w-full rounded-full h-12 text-base">
            <Send className="mr-2 h-4 w-4" /> {loading ? "Sending…" : "Send Inquiry"}
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Submits via WhatsApp — owner replies within minutes.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, v, on, placeholder, type = "text" }: { label: string; v: string; on: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <div>
      <Label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</Label>
      <Input type={type} value={v} onChange={(e) => on(e.target.value)} placeholder={placeholder} className="mt-1.5 h-11" maxLength={120} />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href: string }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
       className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 hover:border-[var(--gold)] transition-colors">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--gradient-luxe)] text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-display text-lg text-primary truncate">{value}</div>
      </div>
    </a>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-[var(--plum-deep)] text-primary-foreground px-4 py-14">
      <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--gold)] text-[var(--plum-deep)]"><Sparkles className="h-5 w-5" /></span>
            <span className="font-display text-2xl">Smiley Events</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70 max-w-sm">
            ஸ்மைலி ஈவென்ட்ஸ் & Production — luxury event planners turning Madurai venues into cinematic celebrations since day one.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-[var(--gold)]">Contact</div>
          <div className="mt-3 space-y-2 text-sm">
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="block">{PHONE}</a>
            <a href={`https://wa.me/${WHATSAPP}`} className="block">WhatsApp 24/7</a>
            <p className="text-primary-foreground/70">{ADDRESS}</p>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-[var(--gold)]">Services</div>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li>Wedding Décor</li><li>Photography & Editing</li><li>Catering</li><li>Birthdays & Culturals</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-10 pt-6 border-t border-white/10 text-xs text-primary-foreground/60 flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} Smiley Events & Production. All rights reserved.</span>
        <span>Madurai · Tamil Nadu</span>
      </div>
    </footer>
  );
}

/* ---------- WHATSAPP FAB ---------- */
function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=Hi%20Smiley%20Events%21`}
      target="_blank" rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
    </a>
  );
}
