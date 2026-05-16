import React from "react";

// ============================================================
// Types
// ============================================================
interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  ariaLabel: string;
}

// ============================================================
// Data
// ============================================================
const navLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Initiatives", href: "#" },
  { label: "Our Impact", href: "#" },
  { label: "Contact Us", href: "#" },
];

const socialLinks: SocialLink[] = [
  {
    href: "#",
    ariaLabel: "Facebook",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "#",
    ariaLabel: "Instagram",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "#",
    ariaLabel: "Twitter / X",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "#",
    ariaLabel: "LinkedIn",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "#",
    ariaLabel: "YouTube",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
];

// ============================================================
// Sub-components
// ============================================================

const FooterBrand: React.FC = () => (
  <div className="footer-brand">
    <h2 className="footer-logo">Adhishrihaan</h2>
    <div className="footer-contact mt-3">
      <div className="row g-3">
        <div className="col-auto">
          <p className="footer-label">Email</p>
          <a href="mailto:info@adhishrihaan.com" className="footer-value">
            info@adhishrihaan.com
          </a>
        </div>
        <div className="col-auto ms-4">
          <p className="footer-label">Phone</p>
          <a href="tel:+97066000007" className="footer-value">
            +970 66 00 00 7
          </a>
        </div>
      </div>
    </div>
  </div>
);

const FooterSocial: React.FC = () => (
  <div className="footer-social text-center">
    <p className="footer-label mb-3">Follow Us</p>
    <div className="d-flex gap-2 justify-content-center">
      {socialLinks.map((s) => (
        <a
          key={s.ariaLabel}
          href={s.href}
          aria-label={s.ariaLabel}
          className="social-icon"
        >
          {s.icon}
        </a>
      ))}
    </div>
  </div>
);

const FooterCta: React.FC = () => (
  <div className="footer-cta text-end">
    <p className="footer-tagline">Changing Lives, Building Futures.</p>
    <a href="#donate" className="btn btn-donate mt-2">
      DONATE NOW
    </a>
  </div>
);

const FooterBottom: React.FC = () => (
  <div className="footer-bottom mt-4 pt-3">
    <div className="row align-items-center">
      <div className="col-md-6">
        <p className="footer-copy mb-0">
          © 2025 Adhishrihaan | All rights reserved | Designed by Akki Studios
        </p>
      </div>
      <div className="col-md-6">
        <nav className="d-flex justify-content-md-end justify-content-start flex-wrap gap-0 mt-2 mt-md-0">
          {navLinks.map((link, i) => (
            <React.Fragment key={link.label}>
              <a href={link.href} className="footer-nav-link">
                {i === 0 && (
                  <svg
                    width="12"
                    height="12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="me-1"
                  >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                )}
                {link.label}
              </a>
              {i < navLinks.length - 1 && (
                <span className="footer-divider">|</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  </div>
);

// ============================================================
// Main Footer Component
// ============================================================
const Footer: React.FC = () => {
  return (
    <>
      {/* ---- Scoped styles ---- */}
      <style>{`
        /* Google Font Import */
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        /* CSS Variables */
        :root {
          --footer-bg-start: #0a0f0a;
          --footer-bg-end: #1a3a1a;
          --footer-accent: #4caf50;
          --footer-text: rgba(255, 255, 255, 0.85);
          --footer-muted: rgba(255, 255, 255, 0.45);
          --footer-border: rgba(255, 255, 255, 0.12);
          --footer-btn-text: #0a0f0a;
          --font-display: 'Cormorant Garamond', serif;
          --font-body: 'DM Sans', sans-serif;
        }

        /* Footer wrapper */
        .site-footer {
          background: linear-gradient(135deg, var(--footer-bg-start) 0%, var(--footer-bg-end) 100%);
          font-family: var(--font-body);
          padding: 48px 0 28px;
          position: relative;
          overflow: hidden;
        }

        /* Subtle noise texture overlay */
        .site-footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.5;
        }

        /* Logo */
        .footer-logo {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: 0.02em;
          margin: 0;
        }

        /* Labels */
        .footer-label {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--footer-muted);
          margin-bottom: 4px;
        }

        /* Contact values */
        .footer-value {
          font-size: 0.875rem;
          color: var(--footer-text);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-value:hover {
          color: var(--footer-accent);
        }

        /* Social icons */
        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--footer-border);
          color: var(--footer-text);
          text-decoration: none;
          transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.2s;
        }
        .social-icon:hover {
          background: var(--footer-accent);
          border-color: var(--footer-accent);
          color: #fff;
          transform: translateY(-2px);
        }

        /* Tagline */
        .footer-tagline {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--footer-text);
          font-style: italic;
          margin-bottom: 0;
        }

        /* Donate button */
        .btn-donate {
          background: transparent;
          border: 1.5px solid #ffffff;
          color: #ffffff;
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          padding: 10px 28px;
          border-radius: 50px;
          text-decoration: none;
          display: inline-block;
          transition: background 0.25s, color 0.25s, transform 0.2s, box-shadow 0.25s;
        }
        .btn-donate:hover {
          background: #ffffff;
          color: var(--footer-btn-text);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }

        /* Divider line */
        .footer-bottom {
          border-top: 1px solid var(--footer-border);
        }

        /* Copyright */
        .footer-copy {
          font-size: 0.75rem;
          color: var(--footer-muted);
        }

        /* Bottom nav links */
        .footer-nav-link {
          font-size: 0.8rem;
          color: var(--footer-text);
          text-decoration: none;
          padding: 0 10px;
          transition: color 0.2s;
          display: inline-flex;
          align-items: center;
        }
        .footer-nav-link:hover {
          color: var(--footer-accent);
        }
        .footer-divider {
          color: var(--footer-border);
          user-select: none;
        }

        /* Responsive tweaks */
        @media (max-width: 767px) {
          .footer-cta {
            text-align: center !important;
          }
          .footer-social {
            margin: 24px 0;
          }
        }
      `}</style>

      <footer className="site-footer">
        <div className="container">
          {/* ---- Top row ---- */}
          <div className="row align-items-start gy-4">
            {/* Brand + Contact */}
            <div className="col-lg-5 col-md-12">
              <FooterBrand />
            </div>

            {/* Social */}
            <div className="col-lg-3 col-md-6">
              <FooterSocial />
            </div>

            {/* CTA */}
            <div className="col-lg-4 col-md-6">
              <FooterCta />
            </div>
          </div>

          {/* ---- Bottom row ---- */}
          <FooterBottom />
        </div>
      </footer>
    </>
  );
};

export default Footer;