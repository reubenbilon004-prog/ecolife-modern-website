import React, { useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import blogPosts from "../data/blogPosts";
import LanguageToggle from "../components/LanguageToggle";

function BlogArticle() {
  const { slug } = useParams();

  const [language, setLanguage] = useState(
    localStorage.getItem("blogLanguage") || "en"
  );

  const post = blogPosts.find((item) => item.slug === slug);

  const changeLanguage = (value) => {
    localStorage.setItem("blogLanguage", value);
    setLanguage(value);
  };

  if (!post) {
    return (
      <main className="blog-article-page">
        <div className="article-container">
          <h1>Article not found</h1>

          <Link to="/blog" className="article-back">
            <ArrowLeft size={16} />
            <span>Back to all stories</span>
          </Link>
        </div>
      </main>
    );
  }

  const isMalayalam = language === "ml";

  /*
   * ------------------------------------------------
   * LANGUAGE CONTENT
   * ------------------------------------------------
   *
   * Your blogPosts.js uses:
   *
   * English:
   * category
   * title
   * description
   * intro
   * sections
   *
   * Malayalam:
   * mlCategory
   * mlTitle
   * mlDescription
   * mlIntro
   * sectionsMl
   *
   * ------------------------------------------------
   */

  const category = isMalayalam
    ? post.mlCategory || post.category
    : post.category;

  const title = isMalayalam
    ? post.mlTitle || post.title
    : post.title;

  const intro = isMalayalam
    ? post.mlIntro || post.mlDescription || post.description
    : post.intro || post.description;

  const sections = isMalayalam
    ? post.sectionsMl || post.sections
    : post.sections;

  return (
    <main
      className={`blog-article-page ${
        isMalayalam ? "malayalam-page" : ""
      }`}
    >
      {/* ================================
          TOP BAR
      ================================= */}

      <div className="article-topbar">

        <Link to="/blog" className="article-back">
          <ArrowLeft size={16} />

          <span>
            {isMalayalam
              ? "എല്ലാ കഥകളും"
              : "All stories"}
          </span>
        </Link>

        <LanguageToggle
          language={language}
          setLanguage={changeLanguage}
        />

      </div>


      {/* ================================
          ARTICLE
      ================================= */}

      <article className="article-container">

        {/* CATEGORY */}

        <div className="article-category">
          {category}
        </div>


        {/* TITLE */}

        <h1 className="article-title">
          {title}
        </h1>


        {/* INTRO */}

        <p className="article-intro">
          {intro}
        </p>


        {/* YOUTUBE VIDEO */}

        {post.videoId && (
          <div className="article-video">

            <iframe
              src={`https://www.youtube.com/embed/${post.videoId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

          </div>
        )}


        {/* ================================
            ARTICLE CONTENT
        ================================= */}

        <div className="article-content">

          {sections?.map((section, index) => (

            <section
              className="article-section"
              key={index}
            >

              <h2>
                {isMalayalam
                  ? section.mlHeading || section.heading
                  : section.heading}
              </h2>


              {section.paragraphs?.map(
                (paragraph, paragraphIndex) => (

                  <p key={paragraphIndex}>
                    {paragraph}
                  </p>

                )
              )}

            </section>

          ))}


          {/* ================================
              CTA
          ================================= */}

          <div className="article-cta">

            <div>

              <span className="article-cta-label">
                ECOLIFE WELLNESS
              </span>

              <h2>
                {isMalayalam
                  ? "Ecolife Wellness അറിയുക."
                  : "Explore Ecolife Wellness."}
              </h2>

              <p>
                {isMalayalam
                  ? "യോഗയും ആരോഗ്യപരിപാലനവും സംബന്ധിച്ച കൂടുതൽ വിവരങ്ങൾ അറിയാം."
                  : "Learn more about Ecolife's approach to yoga and wellbeing."}
              </p>

            </div>


            <Link
              to="/#programs"
              className="article-cta-button"
            >

              {isMalayalam
                ? "കൂടുതൽ അറിയുക"
                : "Visit Ecolife"}

              <ArrowUpRight size={16} />

            </Link>

          </div>

        </div>

      </article>

    </main>
  );
}

export default BlogArticle;