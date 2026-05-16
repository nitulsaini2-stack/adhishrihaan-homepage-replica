export default function WhatWeDo() {
  const pillars = [
    {
      title: "CAPACITY\nBUILDING",
      desc: `We offer tailored training programs, essential funding assistance, and critical technological support to enhance the operational efficiency and program effectiveness of our partner NGOs. This includes workshops on project management, financial literacy, fundraising strategies, and digital tools. We believe in strengthening their internal capabilities so they can serve their communities even better.`,
      action:
        "Care in Action: Providing the tools and knowledge that empower grassroots leaders to sustain their vital work, ensuring their dedication translates into lasting impact.",
    },
    {
      title: "VISIBILITY",
      desc: `We are dedicated to amplifying the impactful stories of these silent warriors. We help them effectively communicate their achievements, document their journeys, and gain the recognition they truly deserve through strategic communication and media outreach. This includes developing compelling narratives, creating impact reports, and connecting them with broader audiences.`,
      action:
        "Care in Action: Shining a spotlight on the tireless efforts of those who work selflessly on the ground, ensuring their dedication inspires more support and change.",
    },
    {
      title: "NETWORKING",
      desc: `We connect grassroots NGOs with each other, fostering collaborative learning and shared solutions. We also link them with larger philanthropic organizations, corporate CSR initiatives, academic institutions, and government bodies. This builds a robust ecosystem of collective action and greater synergy for wider reach and sustainable impact.`,
      action:
        "Care in Action: Building bridges of partnership and shared purpose, creating a stronger, more united front for social transformation.",
    },
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        borderTop: "8px solid #213d1f",
        padding: "60px 0",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Heading Section */}
        <div className="row ">
          <div className="col-12 col-md-10 col-lg-7  text-md-end">
            <h2
              className="display-4"
              style={{
                // marginLeft: "200px",
                fontSize: "50px",
                fontWeight: "600",
                color: "#213d1f",
                letterSpacing: "-1px",
              }}
            >
              WHAT WE DO
            </h2>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "400",
                color: "#0c1409", // Soft vibrant accent contrast to the dark green
                textTransform: "uppercase",
                letterSpacing: "2px",
                // marginTop: "2px",
              }}
            >
              OUR PILLARS OF SUPPORT
            </p>
          </div>
        </div>

        {/* Content Pillars */}
        {pillars.map((item, index) => (
          <div 
            className="row align-items-start py-4 my-3" 
            key={index}
            style={{
              borderBottom: index !== pillars.length - 1 ? "1px solid #f0f2f0" : "none"
            }}
          >
            {/* Left Side (Title) */}
            <div className="col-12 col-lg-3 mb-3 mb-lg-0">
              <h2
                className="pillar-title"
                style={{
                  whiteSpace: "pre-line",
                  fontWeight: "800",
                  color: "#213d1f",
                }}
              >
                {item.title}
              </h2>
            </div>

            {/* Right Side (Details & Action Callout) */}
            <div className="col-12 col-lg-9">
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#333333",
                  fontWeight: "400",
                  textAlign: "justify"
                }}
              >
                {item.desc}
              </p>

              {/* Enhanced Action Card */}
              <div
                style={{
                  marginTop: "20px",
                  padding: "18px 24px",
                  backgroundColor: "#f4f7f4",
                  borderLeft: "4px solid #213d1f",
                  borderRadius: "4px 8px 8px 4px",
                }}
              >
                <h5
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.5",
                    color: "#1a2e19",
                    fontWeight: "600",
                    margin: 0,
                  }}
                >
                  {item.action}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}