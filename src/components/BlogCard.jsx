import React from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

function BlogCard({ post, language = "en" }) {
  if (!post) return null;

  const isMalayalam = language === "ml";

  const category = isMalayalam
    ? post.mlCategory || post.category
    : post.category;

  const title = isMalayalam
    ? post.mlTitle || post.title
    : post.title;

  const description = isMalayalam
    ? post.mlDescription || post.description
    : post.description;

  return (
    <article
      className={`blog-card ${
        isMalayalam ? "blog-card-ml" : ""
      }`}
    >

      {/* VIDEO THUMBNAIL */}
      <Link
        to={`/blog/${post.slug}`}
        className="blog-card-media"
        aria-label={title}
      >

        <img
          src={post.thumbnail}
          alt={title}
          loading="lazy"
        />

        <span className="blog-card-play">
          <Play size={15} fill="currentColor" />
        </span>

      </Link>


      {/* CONTENT */}
      <div className="blog-card-content">

        <span className="blog-card-category">
          {category}
        </span>

        <h2>
          <Link to={`/blog/${post.slug}`}>
            {title}
          </Link>
        </h2>

        <p>
          {description}
        </p>

        <Link
          to={`/blog/${post.slug}`}
          className="blog-card-link"
        >
          {isMalayalam ? "കഥ വായിക്കുക" : "Read story"}

          <ArrowUpRight size={15} />
        </Link>

      </div>

    </article>
  );
}

export default BlogCard;