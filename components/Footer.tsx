export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#091c0a", borderTop: "4px solid #ffe874", padding: "60px 0 30px 0" }}>
      <div className="container">
        <div className="row g-4 mb-5">
          {/* Brand Info */}
          <div className="col-12 col-md-6 col-lg-5">
            <h4 style={{ color: "#ffe874", fontWeight: "800", letterSpacing: "1px" }}>ADHISHRIHAAN</h4>
            <p className="mt-3" style={{ opacity: 0.8, fontSize: "14px", lineHeight: "1.7", maxWidth: "380px", color: "#dff4d7" }}>
              Nurturing silent change-makers across the country with resources, voice amplification, and impactful strategy.
            </p>
          </div>

          {/* Nav Links Column */}
          <div className="col-6 col-md-3 col-lg-3 offset-lg-1">
            <h6 className="text-uppercase fw-bold mb-3" style={{ color: "#ffe874", fontSize: "14px", letterSpacing: "1px" }}>Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: "14px" }}>
              <li><a href="#" className="text-white text-decoration-none opacity-75 style-link">Our Pillars</a></li>
              <li><a href="#" className="text-white text-decoration-none opacity-75 style-link">Focus Ecosystem</a></li>
              <li><a href="#" className="text-white text-decoration-none opacity-75 style-link">Summit Registration</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-6 col-md-3 col-lg-3">
            <h6 className="text-uppercase fw-bold mb-3" style={{ color: "#ffe874", fontSize: "14px", letterSpacing: "1px" }}>Legal</h6>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: "14px" }}>
              <li><a href="#" className="text-white text-decoration-none opacity-75 style-link">Privacy Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none opacity-75 style-link">Terms of Use</a></li>
            </ul>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.15)" }} />

        {/* Footer Sub-bar */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center text-center mt-4" style={{ fontSize: "13px", opacity: 0.7, color: "#dff4d7" }}>
          <p className="mb-2 mb-sm-0">&copy; 2026 Adhishrihaan Foundation. All rights reserved.</p>
          <p className="mb-0">Designed for Sustainable Scale.</p>
        </div>
      </div>
    </footer>
  );
}