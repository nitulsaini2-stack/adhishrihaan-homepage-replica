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
        background: "white",
        borderTop: "10px solid #213d1f",
        padding: "30px 0",
        height: "700px",
      }}
    >
      <div className="container">

        {/* Heading */}
        <div className="row justify-content-end mb-5">
          <div className="col-lg-7">
            <h1 
              style={{
                fontSize: "50px",
                fontWeight: "900",
                lineHeight: "50px",
                color: "#213d1f",
            
              }}
            >
              WHAT WE DO
            </h1>

            <p
              style={{
                fontSize: "25px",
                fontWeight: "600",
                color: "#213d1f",
                textTransform: "uppercase",
              }}
            >
              OUR PILLARS OF SUPPORT
            </p>
          </div>
        </div>

        {/* Content */}
        {pillars.map((item, index) => (
          <div className="row mb-2 pb-2" key={index}>
            
            {/* Left Side */}
            <div className="col-lg-3 mb-2 mb-lg-0">
              <h2
                style={{
                  whiteSpace: "pre-line",
                  fontSize: "40px",
                  lineHeight: "56px",
                  fontWeight: "600",
                  color: "#213d1f",
                }}
              >
                {item.title}
              </h2>
            </div>

            {/* Right Side */}
            <div className="col-lg-9">
              <p
                style={{
                  fontSize: "16px",
                //   lineHeight: "40px",
                  color: "#1d1d1d",
                  fontWeight: "500",
                }}
              >
                {item.desc}
              </p>

              <h5
                style={{
                  marginTop: "15px",
                  fontSize: "20px",
                  lineHeight: "20px",
                  color: "#010101",
                  fontWeight: "600",
                }}
              >
                {item.action}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}