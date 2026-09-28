import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowUpRight, Check, Clock3, Facebook,
  Instagram, Leaf, MapPin, Menu, Play, Quote, Star, X,
  Phone, Mail, Sparkles, Heart , BookOpen
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./styles.css";

const ADDRESS = "Ponneth Temple Rd, near Giridhar Eye Hospital, Kadavanthara, Elamkulam, Kochi, Ernakulam, Kerala 682020";
const PHONE = "+91 90610 93666";
const EMAIL = "ecolifewellness@gmail.com";
const INSTAGRAM = "https://www.instagram.com/ecolifeyoga";
const FACEBOOK = "https://www.facebook.com/ecolifekochi";
const MAPS = "https://www.google.com/maps/search/?api=1&query=place_id:ChIJQXu-3HlzCDsRhl90SomSBM0";

const services = [
  {
    number: "01",
    title: "Nithya Lalitha Yoga",
    text: "A simple, gentle approach to daily yoga, built around practical movement and a sustainable routine.",
    tags: ["Daily practice", "30–45 min", "Gentle movement"]
  },
  {
    number: "02",
    title: "Reiki Therapy",
    text: "A wellness service offered by Ecolife as part of its broader approach to wellbeing.",
    tags: ["Wellness", "Relaxation", "Personal care"]
  },
  {
    number: "03",
    title: "Psychological Counselling",
    text: "Professional counselling support included within Ecolife's wider wellness offering.",
    tags: ["Support", "Wellbeing", "Care"]
  },
  {
    number: "04",
    title: "Teacher Training",
    text: "Training programmes for people who want to deepen their understanding and practice of yoga.",
    tags: ["Learning", "Practice", "Training"]
  }
];

const principles = [
  "Safe and simple practice",
  "Designed for everyday life",
  "30–45 minute daily routine",
  "Physical health and functional flexibility",
  "Mental clarity and long-term wellbeing"
];

const reviews = [
  {
    name: "Google Reviews",
    text: "See the latest verified customer feedback directly on Ecolife Wellness's Google listing.",
    meta: "Live source"
  },
  {
    name: "Ecolife community",
    text: "Real experiences matter. We keep the review section focused on genuine feedback rather than template testimonials.",
    meta: "Authenticity first"
  }
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });

  useEffect(() => {
    document.body.style.overflow = menuOpen || videoOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, videoOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <motion.div className="progress" style={{ scaleX }} />

      <header className="nav">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Ecolife home">
          <img className="brand-logo" src="/assets/logo-black.png" alt="Ecolife" />
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["about", "yoga", "programs", "reviews", "blog", "contact"].map((id) => (
              <a
    key={id}
    href={id === "blog" ? "/blog" : `#${id}`}
    onClick={closeMenu}
  >
    {id === "yoga"
      ? "Nithya Lalitha"
      : id[0].toUpperCase() + id.slice(1)}
  </a>
          ))}
          <a className="nav-cta" href={`tel:${PHONE.replace(/\s/g, "")}`} onClick={closeMenu}>
            Start a conversation <ArrowUpRight size={15} />
          </a>
        </nav>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="leaf-orbit orbit-one"><Leaf /></div>
          <div className="leaf-orbit orbit-two"><Leaf /></div>

          <div className="hero-copy">
            <Reveal>
              <div className="eyebrow"><span /> Kochi · Kerala</div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1>Come back to<br /><em>your balance.</em></h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="hero-text">
                Safe, simple and effective yoga and wellness designed for everyday life.
                A practice you can actually live with.
              </p>
            </Reveal>
          <Reveal delay={0.24}>
  <div className="hero-actions">

    <a
      className="button button-dark"
      href="#yoga"
    >
      Explore Ecolife
      <ArrowDown size={16} />
    </a>

    <a
      className="hero-blog-button"
      href="/blog"
    >
      <span className="hero-blog-badge">
        NEW
      </span>

      <span className="hero-blog-icon">
        <BookOpen size={17} />
      </span>

      <span className="hero-blog-text">
        Explore Our Blog
      </span>

      <ArrowUpRight
        className="hero-blog-arrow"
        size={16}
      />
    </a>

    <a
      className="button button-quiet"
      href="#contact"
    >
      Contact us
      <ArrowUpRight size={16} />
    </a>

  </div>
</Reveal>
          </div>

          <motion.div
            className="hero-art"
            animate={{ y: [0, -10, 0], rotate: [0, 0.6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="sun-disc" />
            <div className="organic-frame">
              <img className="hero-image" src="/assets/hero-yoga.png" alt="Yoga practice at Ecolife" />
            </div>
            <div className="floating-chip chip-top"><Leaf size={14} /> Gentle</div>
            <div className="floating-chip chip-bottom"><Heart size={14} /> Everyday wellbeing</div>
          </motion.div>
        </section>

        <section id="about" className="intro section">
          <div className="section-kicker">01 / A simpler approach</div>
          <div className="intro-grid">
            <Reveal>
              <h2>Wellness that fits<br /><em>real life.</em></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="intro-content">
                <img className="intro-image" src="/assets/yoga-group.jpg" alt="Yoga group practice" />
                <p className="lead">Ecolife focuses on making yoga and wellbeing practical — not complicated.</p>
                <p>
                  The idea is simple: create a sustainable daily practice that supports physical health,
                  mental clarity, functional flexibility and long-term wellbeing.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="yoga" className="yoga-section section">
          <div className="breathing-bg" />
          <div className="section-kicker">02 / The Ecolife practice</div>
          <div className="yoga-grid">
            <Reveal>
              <div className="yoga-copy">
                <span className="small-label">NITHYA LALITHA YOGA</span>
                <h2>Daily.<br /><em>Gentle.</em><br />Practical.</h2>
                <p>
                  “Nithya” means daily. “Lalitha” means gentle.
                  The practice is built around simple, safe postures and a routine
                  that can become part of everyday life.
                </p>
                <a className="text-link" href="#contact">Ask about the practice <ArrowUpRight size={16} /></a>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="principles">
                {principles.map((item, i) => (
                  <motion.div
                    className="principle"
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    <span><Check size={15} /></span>
                    <p>{item}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="programs" className="programs section">
          <div className="section-heading">
            <div className="section-kicker">03 / What Ecolife offers</div>
            <h2>A few ways to<br /><em>begin.</em></h2>
          </div>
          <div className="service-list">
            {services.map((service, i) => (
              <Reveal key={service.number} delay={i * 0.05}>
                <article className="service-row">
                  <span className="service-no">{service.number}</span>
                  <div className="service-main">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <div className="tags">
                      {service.tags.map(tag => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <ArrowUpRight className="service-arrow" />
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="reviews" className="reviews section">
          <div className="section-kicker">04 / Real experiences</div>
          <div className="review-head">
            <div>
              <h2>See it.<br /><em>Hear it.</em></h2>
              <p>One real voice can say more than a page of promises.</p>
            </div>
            <a className="google-link" href={MAPS} target="_blank" rel="noreferrer">
              <span className="stars"><Star size={14} fill="currentColor" /> 5.0</span>
              <span>View Ecolife on Google Maps <ArrowUpRight size={14} /></span>
            </a>
          </div>

          <div className="video-card">
  <button
    className="video-thumbnail"
    onClick={() => setVideoOpen(true)}
    aria-label="Play Ecolife testimonial"
  >
    <img
      src="/assets/ecolife-review-cover.jpg"
      alt="Ecolife Wellness testimonial"
    />

    <span className="video-play">
      <Play size={24} fill="currentColor" />
    </span>

    <span className="video-label">
      Watch testimonial
      <ArrowUpRight size={14} />
    </span>
  </button>
</div>

          <div className="review-grid">
            {reviews.map((review, i) => (
              <Reveal key={review.name} delay={i * 0.08}>
                <article className="review-card">
                  <Quote size={25} />
                  <p>{review.text}</p>
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.meta}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="why section">
          <div className="why-card">
            <Sparkles size={20} />
            <div>
              <span className="small-label">THE IDEA</span>
              <h2>Not more wellness.<br /><em>More livable wellness.</em></h2>
            </div>
            <p>
              Short, sustainable practice. A calmer relationship with movement.
              And an approach designed to stay with you beyond the class.
            </p>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="contact-left">
            <div className="section-kicker">05 / Come say hello</div>
            <h2>Ready to make<br /><em>space for you?</em></h2>
            <p>Reach Ecolife Wellness in Kochi to ask about yoga, wellness services or training.</p>
            <div className="contact-actions">
              <a className="button button-dark" href={`tel:${PHONE.replace(/\s/g, "")}`}><Phone size={16} /> Call Ecolife</a>
              <a className="button button-light" href={`mailto:${EMAIL}`}><Mail size={16} /> Email</a>
            </div>
          </div>

          <div className="contact-map">
  <iframe
    src="https://www.google.com/maps?q=ecolife%20wellness%2C%20Ponneth%20Temple%20Road%2C%20Kadavanthara%2C%20Kochi%2C%20Kerala&output=embed"
    width="100%"
    height="520"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Ecolife Wellness location"
  />
</div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <img className="footer-logo" src="/assets/logo-black.png" alt="Ecolife" />
          </div>
          <p>Yoga + wellness for everyday life.</p>
        </div>
        <div className="socials">
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
          <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
          <a
  href="https://www.google.com/maps/search/?api=1&query=Ecolife+Wellness,+Ponneth+Temple+Road,+Kadavanthara,+Kochi,+Kerala"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Open Ecolife Wellness on Google Maps"
  title="Open Ecolife Wellness on Google Maps"
>
  <MapPin size={18} />
</a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Ecolife Wellness</span>
      </footer>

      {videoOpen && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label="Ecolife testimonial video">
          <button className="modal-close" onClick={() => setVideoOpen(false)} aria-label="Close video"><X /></button>
          <video src="/videos/testimonial-full.mp4" controls autoPlay playsInline />
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route
        path="/blog/:slug"
        element={<BlogArticle />}
      />
    </Routes>
  </BrowserRouter>
);
