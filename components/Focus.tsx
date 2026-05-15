export default function Focus() {
  const focuses = [
    { 
      area: "Rural Literacy", 
      highlight: "15k+ Students Trained",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600" // Apni original image ka path yahan dalein
    },
    { 
      area: "Healthcare Synergy", 
      highlight: "80+ Clinics Automated",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600" // Apni original image ka path yahan dalein
    },
    { 
      area: "Sustainable Farming", 
      highlight: "400+ Families Assisted",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600" // Apni original image ka path yahan dalein
    }
  ];

  return (
    <section className="dark-green text-white py-5" style={{ minHeight: "auto", padding: "60px 0" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5" style={{ fontWeight: "800", color: "#ffe874" }}>OUR CORE FOCUS AREAS</h2>
          <div style={{ width: "60px", height: "4px", backgroundColor: "#ffe874", margin: "15px auto 0 auto", borderRadius: "2px" }}></div>
        </div>

        <div className="row g-4 justify-content-center">
          {focuses.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div 
                className="card h-100 border-0" 
                style={{ 
                  backgroundColor: "#213d1f", 
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                }}
              >
                {/* Image Wrapper with Hover Effect */}
                <div style={{ overflow: "hidden", height: "220px", position: "relative" }}>
                  <img 
                    src={item.image} 
                    alt={item.area}
                    className="image-hover w-100 h-100"
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  />
                  <div 
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: "15px",
                      backgroundColor: "rgba(33, 61, 31, 0.85)",
                      color: "#ffe874",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "700"
                    }}
                  >
                    0{index + 1}
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-body p-4 text-center">
                  <h3 className="h4 font-weight-bold mb-2" style={{ color: "#ffffff", fontWeight: "700" }}>
                    {item.area}
                  </h3>
                  <p className="mb-0 card-text" style={{ color: "#ffe874", fontSize: "15px", fontWeight: "500" }}>
                    {item.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}