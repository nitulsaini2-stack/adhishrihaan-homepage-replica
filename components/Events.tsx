export default function Events() {
  const events = [
    { 
      title: "National Grassroots Summit", 
      date: "June 12, 2026", 
      loc: "New Delhi",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600" // Apni image lagayein
    },
    { 
      title: "NGO Capacity Accelerator", 
      date: "July 28, 2026", 
      loc: "Mumbai",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600" // Apni image lagayein
    }
  ];

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "80px 0" }}>
      <div className="container">
        {/* Header Grid */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-5 gap-3">
          <div>
            <h2 style={{ color: "#213d1f", fontWeight: "900" }} className="display-5">UPCOMING EVENTS</h2>
            <p className="text-muted mb-0">Join our collaborative ecosystems for knowledge and strategy mapping.</p>
          </div>
          <button className="button font-weight-bold px-4 py-2" style={{ fontWeight: "600" }}>View Calendar</button>
        </div>

        {/* Events Grid Wrapper */}
        <div className="row g-4">
          {events.map((ev, idx) => (
            <div className="col-12 col-lg-6" key={idx}>
              <div className="custom-border h-100 bg-white d-flex flex-column flex-sm-row overflow-hidden">
                
                {/* Event Image Banner Block */}
                <div style={{ width: "100%", maxWidth: "200px", minHeight: "180px" }} className="w-100 d-sm-block">
                  <img 
                    src={ev.image} 
                    alt={ev.title} 
                    className="w-100 h-100" 
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Event Information Content */}
                <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <span className="badge mb-2 px-3 py-2" style={{ backgroundColor: "#213d1f", color: "#ffe874" }}>CONFIRMED</span>
                    <h3 className="h5 font-weight-bold my-2" style={{ color: "#213d1f", fontWeight: "700" }}>{ev.title}</h3>
                  </div>
                  
                  <div className="text-muted mt-3" style={{ fontSize: "14px" }}>
                    <div className="mb-1">
                      <strong style={{ color: "#213d1f" }}>Date:</strong> {ev.date}
                    </div>
                    <div>
                      <strong style={{ color: "#213d1f" }}>Venue:</strong> {ev.loc}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}