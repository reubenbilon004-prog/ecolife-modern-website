import React, { useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  Instagram,
  Facebook,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

import BlogCard from "../components/BlogCard";
import LanguageToggle from "../components/LanguageToggle";
import blogPosts from "../data/blogPosts";

const PHONE = "+91 90610 93666";

const INSTAGRAM = "https://www.instagram.com/ecolifeyoga";
const FACEBOOK = "https://www.facebook.com/ecolifekochi";

const MAPS =
  "https://maps.app.goo.gl/sGUuHtWHUQ2JUry5A";

function Blog() {
  const [language, setLanguage] = useState(
    localStorage.getItem("blogLanguage") || "en"
  );

  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (value) => {
    localStorage.setItem("blogLanguage", value);
    setLanguage(value);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="nav">

        <Link
          className="brand"
          to="/"
          onClick={closeMenu}
          aria-label="Ecolife home"
        >
          <img
            className="brand-logo"
            src="/assets/logo-black.png"
            alt="Ecolife"
          />
        </Link>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

          <Link to="/#about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/#yoga" onClick={closeMenu}>
            Nithya Lalitha
          </Link>

          <Link to="/#programs" onClick={closeMenu}>
            Programs
          </Link>

          <Link to="/#reviews" onClick={closeMenu}>
            Reviews
          </Link>

          <Link to="/blog" onClick={closeMenu}>
            Blog
          </Link>

          <Link to="/#contact" onClick={closeMenu}>
            Contact
          </Link>

          <a
            className="nav-cta"
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            onClick={closeMenu}
          >
            Start a conversation
            <ArrowUpRight size={15} />
          </a>

        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </header>


      {/* =========================
          BLOG CONTENT
      ========================= */}

      <main className="blog-page">

        <section className="blog-hero">

          <div className="blog-language-row">

            <div className="section-kicker">
              {language === "ml"
                ? "ECOLIFE / കഥകൾ"
                : "ECOLIFE / STORIES"}
            </div>

            <LanguageToggle
              language={language}
              setLanguage={changeLanguage}
            />

          </div>


          <h1>
            {language === "ml"
              ? "യഥാർത്ഥ അനുഭവങ്ങൾ."
              : "Real experiences."}

            <br />

            <em>
              {language === "ml"
                ? "ഉപകാരപ്രദമായ അറിവുകൾ."
                : "Useful perspectives."}
            </em>
          </h1>


          <p>
            {language === "ml"
              ? "യോഗ, ചലനം, ആരോഗ്യപരിപാലനം എന്നിവയുമായി ബന്ധപ്പെട്ട അനുഭവങ്ങളും അറിവുകളും Ecolife Wellness-ൽ നിന്ന്."
              : "Explore stories connected to yoga, movement and wellbeing, inspired by experiences shared through Ecolife Wellness."}
          </p>


          <Link
            className="text-link"
            to="/"
          >
            {language === "ml"
              ? "Ecolife-ലേക്ക് മടങ്ങുക"
              : "Back to Ecolife"}

            <ArrowUpRight size={16} />
          </Link>

        </section>


        {/* BLOG CARDS */}

        <section className="blog-grid-section">

          <div className="blog-grid">

            {blogPosts.map((post) => (
              <BlogCard
              key={post.id}
              post={post}
              language={language}
              />
            ))}

          </div>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="footer-brand">

          <div className="footer-logo-wrap">

            <img
              className="footer-logo"
              src="/assets/logo-black.png"
              alt="Ecolife"
            />

          </div>

          <p>
            Yoga + wellness for everyday life.
          </p>

        </div>


        <div className="socials">

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>

          <a
            href={FACEBOOK}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>

          <a
            href={MAPS}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Ecolife Wellness on Google Maps"
            title="Open Ecolife Wellness on Google Maps"
          >
            <MapPin size={18} />
          </a>

        </div>


        <span className="copyright">
          © {new Date().getFullYear()} Ecolife Wellness
        </span>

      </footer>

    </div>
  );
}

export default Blog;