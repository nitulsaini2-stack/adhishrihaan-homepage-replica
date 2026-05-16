export default function Focus() {
  const focusAreas = [
    "/images/1one.png",
    "/images/2nd.png",
    "/images/3rd.png",
    "/images/4th.png",
    "/images/5th.png",
    "/images/6th.png",
    "/images/7th.png",
  ];
  const data = [
    {
      title: "Woman and Child Welfare",
      image: "https://adhishrihaan.org/wp-content/uploads/2025/08/6.jpg",
      height: "520px",
    },
    {
      title: "Education",
      image: "https://adhishrihaan.org/wp-content/uploads/2025/08/13.jpg",
    },
    {
      title: "Healthcare",
      image: "https://adhishrihaan.org/wp-content/uploads/2025/08/14.jpg",
    },
    {
      title: "Skill Development",
      image: "https://adhishrihaan.org/wp-content/uploads/2025/08/15.jpg",
    },
    {
      title: "Animal Welfare",
      image: "https://adhishrihaan.org/wp-content/uploads/2025/08/16.jpg",
    },
    {
      title: "Elderly Care",
      image: "https://adhishrihaan.org/wp-content/uploads/2025/08/17.jpg",
    },
    {
      title: "Environment",
      image: "https://adhishrihaan.org/wp-content/uploads/2025/08/18.jpg",
    },
  ];
  return (
    <>
      <div
        className="container-fluid px-lg-5 py-5"
        style={{
          backgroundImage: "url('/images/back.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "800px",
          borderBottom: "1px solid #ebdddd",
        }}
      >
        <div className="container text-center mt-4">
          <h1>OUR FOCUS AREAS</h1>
          <p>TOUCHING LIVES WITH COMPASSION</p>

          {/* Grid Layout */}
          <div className="row g-4 align-items-stretch mt-4">
            {/* Left Big Card */}
            <div className="col-lg-3">
              <div
                className="position-relative overflow-hidden rounded-4 h-100"
                style={{ minHeight: "250px" }}
              >
                <img
                  src={data[0].image}
                  alt=""
                  className="w-100 h-100 object-fit-cover image-hover"
                />

                <div
                  className="position-absolute bottom-0 start-0 w-100 p-3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  }}
                >
                  <h4
                    className="text-white fw-bold mb-0"
                    style={{ fontSize: "20px" }}
                  >
                    {data[0].title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Right Grid */}
            <div className="col-lg-8">
              <div className="row g-4">
                {data.slice(1).map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <div
                      className="position-relative overflow-hidden rounded-4"
                      style={{ height: "250px" }}
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="w-100 h-100 object-fit-cover image-hover"
                      />

                      <div
                        className="position-absolute bottom-0 start-0 w-100 p-3"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                        }}
                      >
                        <h5
                          className="text-white fw-bold mb-0"
                          style={{ fontSize: "20px" }}
                        >
                          {item.title}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    
      {/* Bottom Section */}
      <div className="container py-5 bg-white">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-6">
            <p
              style={{
                color: "#1f3b18",
                fontWeight: "700",
                letterSpacing: "1px",
                marginBottom: "10px",
              }}
            >
              OUR INITIATIVES
            </p>

            <h2
              style={{
                fontSize: "52px",
                fontWeight: "900",
                color: "#1f3b18",
                lineHeight: "58px",
              }}
            >
              Empowering Lives Through Care & Support
            </h2>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "34px",
                color: "#333",
                marginTop: "25px",
              }}
            >
              We work towards building a compassionate society by supporting
              education, healthcare, women empowerment, environmental care, and
              community development initiatives across different regions.
            </p>

            <button
              className="btn mt-4 px-4 py-3"
              style={{
                background: "#1f3b18",
                color: "white",
                borderRadius: "40px",
                fontWeight: "600",
              }}
            >
              Learn More
            </button>
          </div>
          <div className="col-lg-6">
            <div
              id="focusCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {focusAreas.map((item, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <img
                      src={item}
                      className="d-block w-100 rounded-4"
                      alt={`focus-${index}`}
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
