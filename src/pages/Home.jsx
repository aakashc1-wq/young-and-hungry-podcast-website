import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import seanPhoto from "../assets/sean-young-photo.png";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.213 5.567 5.951-5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/youngandhungryk_12", Icon: InstagramIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@youngandhungryk_12", Icon: TikTokIcon },
  { label: "X / Twitter", href: "https://x.com/yandhshow", Icon: XIcon },
];

const slides = [
  {
    img: "https://picsum.photos/1600/900?random=11",
    title: "AI for Parents & Teachers",
    subtitle: "Practical guidance for using AI responsibly to support K-12 learning without the overwhelm.",
  },
  {
    img: "https://picsum.photos/1600/900?random=12",
    title: "Short Episodes. Big Takeaways.",
    subtitle: "A podcast built for busy adults: what AI is, how it works, and how to teach kids to use it well.",
  },
  {
    img: "https://picsum.photos/1600/900?random=13",
    title: "Turn Learning Into Action",
    subtitle: "Worksheets, activities, and interactive tools connected to each episode, ready for home or classroom.",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const active = slides[index];

  return (
    <main className="home">

      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${active.img})` }}
        aria-label="Podcast hero slideshow"
      >
        <div className="hero-overlay">
          <p className="eyebrow">Young and Hungry K-12 Podcast</p>
          <h1>{active.title}</h1>
          <p className="sub">{active.subtitle}</p>

          <div className="hero-actions">
            <Link to="/podcast" className="cta-button">
              Listen to Episodes
            </Link>
            <a
              href="https://uci.co1.qualtrics.com/jfe/form/SV_3TMvAyg2SEOFsI6"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              Join Newsletter
            </a>
          </div>

          <div className="hero-socials">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="hero-social-link"
              >
                <Icon className="social-icon" />
              </a>
            ))}
          </div>

          <div className="dots" aria-label="Slideshow controls">
            {slides.map((_, i) => (
              <button
                key={i}
                className={i === index ? "dot active" : "dot"}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PODCAST OVERVIEW */}
      <section className="podcast-overview">
        <div className="overview-text">
          <p className="overview-kicker">About the Show</p>
          <h2>Meet Young and Hungry K-12</h2>
          <p>
            Young and Hungry K-12 is a podcast hosted by <strong>Dr. Sean Young</strong> alongside
            youth co-hosts <strong>Melody</strong> and <strong>Maverick</strong>. Together they
            break down AI in ways that are honest, fun, and actually useful for the adults
            guiding the next generation.
          </p>
          <p>
            Each episode is short enough for a commute and practical enough to apply the same
            day, whether you are a parent at the kitchen table or a teacher planning your next unit.
          </p>
          <div className="overview-actions">
            <Link to="/podcast" className="cta-button dark">
              Browse All Episodes
            </Link>
            <a
              href="https://uci.co1.qualtrics.com/jfe/form/SV_9BRORRbI7lWp5qu"
              target="_blank"
              rel="noreferrer"
              className="outline-button"
            >
              Apply to Be a Guest
            </a>
          </div>
        </div>

        <div className="hosts">
          <div className="host-card">
            <img src={seanPhoto} alt="Dr. Sean Young" className="host-avatar host-photo" />
            <div className="host-info">
              <strong>Dr. Sean Young</strong>
              <span>Host and Research Lead</span>
            </div>
          </div>
          <div className="host-card">
            <div className="host-avatar host-secondary" />
            <div className="host-info">
              <strong>Melody</strong>
              <span>Co-host, Student Perspective</span>
            </div>
          </div>
          <div className="host-card">
            <div className="host-avatar host-tertiary" />
            <div className="host-info">
              <strong>Maverick</strong>
              <span>Co-host, Creativity and Fun</span>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL FOLLOW BANNER */}
      <section className="social-banner">
        <p className="social-banner-label">Follow us</p>
        <div className="social-links">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="social-pill"
            >
              <Icon className="social-pill-icon" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="split">
        <img
          src="https://picsum.photos/800/600?random=21"
          alt="A parent and teacher collaborating"
        />
        <div className="text">
          <h2>About</h2>
          <p>
            Our goal is to make AI education more accessible by centralizing
            guidance for parents and teachers. This website supports a podcast
            designed for busy working adults who want to help K-12 students
            become confident, responsible users of AI.
          </p>
          <p>
            On the About page, you will find the purpose behind the project and
            the stories of the creators, why we care about AI literacy and how
            we are building resources that actually fit into real schedules.
          </p>
          <Link to="/about" className="text-link">
            Learn more about the creators
          </Link>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="split reverse">
        <div className="text">
          <h2>Research</h2>
          <p>
            AI is changing what it means to learn, create, and evaluate
            information. But families and educators often face a gap: lots of
            AI content exists, yet it is scattered, inconsistent, or too
            technical to apply.
          </p>
          <p>
            Our Research page explains the background and significance of AI
            resources for K-12, highlights what existing solutions do well, and
            points to what is still missing, clear practical guidance paired with
            ready-to-use learning activities.
          </p>
          <Link to="/research" className="text-link">
            Read our research and rationale
          </Link>
        </div>
        <img
          src="https://picsum.photos/800/600?random=22"
          alt="A classroom learning environment"
        />
      </section>

      {/* RESOURCES */}
      <section className="split">
        <img
          src="https://picsum.photos/800/600?random=23"
          alt="Worksheets and learning tools"
        />
        <div className="text">
          <h2>Resources</h2>
          <p>
            Every episode links to extra materials, activity worksheets,
            discussion prompts, and interactive games that help kids understand
            AI concepts in age-appropriate ways.
          </p>
          <p>
            After listening, parents and teachers can immediately apply what
            they learned at home or in the classroom. Over time, learners can
            also earn badges or certificates for professional portfolios after
            reaching checkpoints in the podcast experience.
          </p>
          <Link to="/resources" className="text-link">
            Explore tools and activities
          </Link>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <div className="newsletter-inner">
          <p className="newsletter-kicker">Stay in the loop</p>
          <h2>Get new episodes in your inbox</h2>
          <p>
            Sign up for the Young and Hungry newsletter and be the first to hear about
            new episodes, resources, and AI literacy tips for parents and teachers.
          </p>
          <a
            href="https://uci.co1.qualtrics.com/jfe/form/SV_3TMvAyg2SEOFsI6"
            target="_blank"
            rel="noreferrer"
            className="newsletter-btn"
          >
            Sign Up for the Newsletter
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-preview">
        <h2>Contact</h2>
        <p>
          Want to suggest an episode topic, share a classroom challenge, or
          collaborate on resources? Reach out, we would love to hear from parents,
          teachers, and community partners.
        </p>
        <div className="contact-preview-actions">
          <Link to="/contact" className="cta-button small">
            Contact us
          </Link>
          <a
            href="https://uci.co1.qualtrics.com/jfe/form/SV_9BRORRbI7lWp5qu"
            target="_blank"
            rel="noreferrer"
            className="cta-button small cta-dark"
          >
            Apply to Be a Guest
          </a>
        </div>
      </section>
    </main>
  );
}
