// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// export default function Navbar() {
//   const [hover, setHover] = useState(false);

//   const navItems = [
//     { name: "HOME", link: "#" },
//     { name: "ABOUT", link: "#" },
//     { name: "THE SHRIHAAN SAHYOG GRANT", link: "#" },
//     { name: "INITIATIVES", link: "#" },
//     { name: "OUR IMPACT", link: "#" },
//     { name: "EVENTS", link: "#" },
//     { name: "NEWS & MEDIA", link: "#" },
//     { name: "GET INVOLVED", link: "#" },
//   ];

//   return (
//     <div
//       className="container px-lg-5 p-0 position-absolute start-50 translate-middle-x"
//       style={{
//         top: "0",
//         zIndex: 1000,
//       }}
//     >
//       <nav
//         className="navbar navbar-expand-lg navbar-dark shadow-sm px-4"
//         style={{
//           backgroundColor: "#2d4a22",
//           borderBottomLeftRadius: "40px",
//           borderBottomRightRadius: "40px",
//           minHeight: "80px",
//           border: "none",
//         }}
//       >
//         <div className="container-fluid">
//           {/* LOGO */}
//           <a
//             className="navbar-brand d-flex align-items-center p-0 m-0"
//             href="#"
//             onMouseEnter={() => setHover(true)}
//             onMouseLeave={() => setHover(false)}
//           >
//             <Image
//               src={hover ? "/images/logo2.png" : "/images/logo.png"}
//               alt="Adhishrihaan"
//               width={200}
//               height={80}
//               className="img-fluid user-select-none"
//               priority
//             />
//           </a>

//           {/* Hamburger */}
//           <button
//             className="navbar-toggler border-0 shadow-none"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* MENU */}
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto align-items-center">
//               {navItems.map((item, index) => (
//                 <li className="nav-item px-1" key={item.name}>
//                   <a
//                     className={`nav-link fw-bold p-2 ${
//                       index === 0 ? "active text-white" : "text-white-50"
//                     }`}
//                     href={item.link}
//                     style={{
//                       fontSize: "11px",
//                       letterSpacing: "0.5px",
//                       transition: "color 0.3s ease",
//                     }}
//                     onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
//                     onMouseOut={(e) => {
//                       if (index !== 0) {
//                         e.currentTarget.style.color = "rgba(255,255,255,0.5)";
//                       }
//                     }}
//                   >
//                     {item.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }


"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ============================================================
// Types
// ============================================================
interface NavChild {
  name: string;
  link: string;
}

interface NavItem {
  name: string;
  link: string;
  children?: NavChild[];
}

// ============================================================
// Data
// ============================================================
const NAV_ITEMS: NavItem[] = [
  { name: "HOME", link: "#" },
  { name: "ABOUT", link: "#" },
  { name: "THE SHRIHAAN SAHYOG GRANT", link: "#" },
  { name: "INITIATIVES", link: "#" },
  { name: "OUR IMPACT", link: "#" },
  {
    name: "EVENTS",
    link: "#",
    children: [
      { name: "Upcoming Events", link: "#" },
      { name: "Past Events", link: "#" },
    ],
  },
  { name: "NEWS & MEDIA", link: "#" },
  {
    name: "GET INVOLVED",
    link: "#",
    children: [
      { name: "Volunteer", link: "#" },
      { name: "Partner With Us", link: "#" },
      { name: "Donate", link: "#" },
    ],
  },
];

// ============================================================
// ChevronIcon
// ============================================================
const ChevronIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    style={{
      marginLeft: "4px",
      transition: "transform 0.25s ease",
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      flexShrink: 0,
    }}
  >
    <path
      d="M2 3.5L5 6.5L8 3.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ============================================================
// Desktop Dropdown
// ============================================================
interface DesktopDropdownProps {
  items: NavChild[];
  visible: boolean;
}

const DesktopDropdown: React.FC<DesktopDropdownProps> = ({ items, visible }) => (
  <ul
    style={{
      position: "absolute",
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
      minWidth: "180px",
      padding: "6px 0",
      listStyle: "none",
      margin: 0,
      zIndex: 9999,
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? "auto" : "none",
      transition: "opacity 0.2s ease, transform 0.2s ease",
      transformOrigin: "top center",
    }}
  >
    {items.map((child) => (
      <li key={child.name}>
        <a
          href={child.link}
          style={{
            display: "block",
            padding: "9px 18px",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.5px",
            color: "#2d4a22",
            textDecoration: "none",
            transition: "background 0.15s",
            fontFamily: "var(--font-body)",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.background = "#f0f5ee")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          {child.name}
        </a>
      </li>
    ))}
  </ul>
);

// ============================================================
// Mobile Menu Item (with optional accordion)
// ============================================================
interface MobileItemProps {
  item: NavItem;
  isActive: boolean;
  onClose: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({ item, isActive, onClose }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 24px",
          cursor: "pointer",
        }}
        onClick={() => {
          if (hasChildren) {
            setOpen((p) => !p);
          } else {
            onClose();
          }
        }}
      >
        <a
          href={hasChildren ? undefined : item.link}
          style={{
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.6px",
            color: isActive ? "#2d4a22" : "#333",
            textDecoration: "none",
            fontFamily: "var(--font-body)",
            flexGrow: 1,
          }}
          onClick={(e) => hasChildren && e.preventDefault()}
        >
          {item.name}
        </a>
        {hasChildren && <ChevronIcon open={open} />}
      </div>

      {/* Accordion children */}
      {hasChildren && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            maxHeight: open ? "300px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease",
            background: "#f8faf7",
          }}
        >
          {item.children!.map((child) => (
            <li key={child.name}>
              <a
                href={child.link}
                onClick={onClose}
                style={{
                  display: "block",
                  padding: "11px 36px",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.4px",
                  color: "#2d4a22",
                  textDecoration: "none",
                  fontFamily: "var(--font-body)",
                  borderBottom: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                {child.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

// ============================================================
// Main Navbar
// ============================================================
export default function Navbar() {
  const [logoHover, setLogoHover] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("HOME");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  // Shrink navbar on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleDropdownEnter = (name: string) => {
    clearTimeout(dropdownTimers.current[name]);
    setOpenDropdown(name);
  };

  const handleDropdownLeave = (name: string) => {
    dropdownTimers.current[name] = setTimeout(() => {
      setOpenDropdown((prev) => (prev === name ? null : prev));
    }, 120);
  };

  return (
    <>
      {/* ---- Global styles ---- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=DM+Sans:wght@400;600;700&display=swap');
        :root {
          --font-display: 'Cormorant Garamond', serif;
          --font-body: 'DM Sans', sans-serif;
          --green-dark: #2d4a22;
        }
        .nav-link-desktop {
          position: relative;
          white-space: nowrap;
          font-family: var(--font-body);
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.6px;
          color: rgba(255,255,255,0.75) !important;
          text-decoration: none;
          padding: 6px 4px !important;
          transition: color 0.25s;
          display: flex;
          align-items: center;
        }
        .nav-link-desktop:hover,
        .nav-link-desktop.active {
          color: #fff !important;
        }
        .nav-link-desktop::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: rgba(255,255,255,0.6);
          border-radius: 2px;
          transition: width 0.25s ease;
        }
        .nav-link-desktop:hover::after,
        .nav-link-desktop.active::after {
          width: 100%;
        }

        /* Mobile overlay */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          z-index: 1998;
          backdrop-filter: blur(2px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .mobile-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        /* Mobile drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: min(320px, 85vw);
          background: #fff;
          z-index: 1999;
          box-shadow: 4px 0 24px rgba(0,0,0,0.12);
          transform: translateX(-100%);
          transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }
        .mobile-drawer.open {
          transform: translateX(0);
        }

        /* Hamburger lines */
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
          margin: 4px 0;
        }
        .hamburger.active span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }
        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.active span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }
      `}</style>

      {/* ======================================================
          DESKTOP NAVBAR
      ====================================================== */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(1280px, 96vw)",
          zIndex: 1000,
          padding: "0 16px",
        }}
      >
        <nav
          style={{
            background: "var(--green-dark)",
            borderBottomLeftRadius: "36px",
            borderBottomRightRadius: "36px",
            padding: scrolled ? "6px 28px" : "10px 28px",
            transition: "padding 0.3s ease, box-shadow 0.3s ease",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.25)"
              : "0 4px 16px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          {/* LOGO */}
          <a
            href="#"
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
            style={{ flexShrink: 0 }}
          >
            <Image
              src={logoHover ? "/images/logo2.png" : "/images/logo.png"}
              alt="Adhishrihaan"
              width={170}
              height={60}
              priority
              style={{ objectFit: "contain", transition: "opacity 0.2s" }}
            />
          </a>

          {/* DESKTOP MENU — hidden on mobile */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              listStyle: "none",
              margin: 0,
              padding: 0,
              flexWrap: "nowrap",
            }}
            className="d-none d-xl-flex"
          >
            {NAV_ITEMS.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isActive = activeItem === item.name;

              return (
                <li
                  key={item.name}
                  style={{ position: "relative", padding: "0 6px" }}
                  onMouseEnter={() =>
                    hasChildren && handleDropdownEnter(item.name)
                  }
                  onMouseLeave={() =>
                    hasChildren && handleDropdownLeave(item.name)
                  }
                >
                  <a
                    href={item.link}
                    className={`nav-link-desktop${isActive ? " active" : ""}`}
                    onClick={(e) => {
                      if (hasChildren) e.preventDefault();
                      setActiveItem(item.name);
                    }}
                  >
                    {item.name}
                    {hasChildren && (
                      <ChevronIcon open={openDropdown === item.name} />
                    )}
                  </a>

                  {hasChildren && (
                    <DesktopDropdown
                      items={item.children!}
                      visible={openDropdown === item.name}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* HAMBURGER — visible below xl */}
          <button
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className={`hamburger d-xl-none${mobileOpen ? " active" : ""}`}
            onClick={() => setMobileOpen((p) => !p)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              flexShrink: 0,
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>

      {/* ======================================================
          MOBILE DRAWER
      ====================================================== */}
      {/* Overlay */}
      <div
        className={`mobile-overlay${mobileOpen ? " open" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`mobile-drawer${mobileOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div
          style={{
            background: "var(--green-dark)",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Adhishrihaan"
            width={140}
            height={52}
            style={{ objectFit: "contain" }}
          />
          <button
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "none",
              borderRadius: "6px",
              width: "32px",
              height: "32px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <ul style={{ listStyle: "none", margin: 0, padding: 0, flexGrow: 1 }}>
          {NAV_ITEMS.map((item) => (
            <MobileItem
              key={item.name}
              item={item}
              isActive={activeItem === item.name}
              onClose={() => {
                setActiveItem(item.name);
                setMobileOpen(false);
              }}
            />
          ))}
        </ul>

        {/* Drawer footer tagline */}
        <div
          style={{
            padding: "20px 24px",
            borderTop: "1px solid rgba(0,0,0,0.07)",
            fontFamily: "var(--font-display)",
            fontSize: "13px",
            color: "#2d4a22",
            fontStyle: "italic",
            flexShrink: 0,
          }}
        >
          Changing Lives, Building Futures.
        </div>
      </div>
    </>
  );
}
