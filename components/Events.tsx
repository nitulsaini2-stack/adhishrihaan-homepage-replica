import { title } from "node:process";

export default function Event() {
  const events = [
    {
      image: "/events/event1.jpg",
      title: "Mega heath checkup comp",
      date: "11/09/2025",
      lacation: "Faidan chandigarh",
       text: "Don Bosco Navjeevan Society",
      Last: "Past Events",
      Healthcare: "Healthcare",
      p: "India faces significant healthcare challenges, particularly in rural and underserved areas. According to recent reports,many communities lack access to essential healthcare services, leading to a high vulnerability",
      
    },
    {
      image: "/events/event2.webp",
      title: "Guardians of all Voiceless – Cat Shelter Foundation Stone",
      date: "01/09/2025",
      lacation: "Faidan chandigarh",
      Last: "Past Events",
       text: "DON BOSCO KAULI",
      Healthcare: "Animal Welfare",
      p: "In India, millions of street animals face challenges like lack of shelter, medical care, and compassion. Animal welfare remains a critical concern in urban and rural area",
      
    },
    {
      image: "/events/event3.webp",
      title: "Anemia Screening Camp",
      date: "05/09/2025",
      lacation: "chandigarh",
      text: "DON BOSCO KAULI",
      Last: "Past Events",
      Healthcare: "Woman and Child Welfare",
      p: "Anemia remains a significant public health concern in India, particularly among women and children. According to the latest National Family Health Survey (NFHS-5), approximately 53%  ",
      
    },
     {
      image: "/events/event4.webp",
      title: "Stationery Distribution at Maharish Dayanand Bal Ashram",
      date: "11/09/2025",
      lacation: "chandigarh",
      text: "Udham Singh Colony in Sector 74, Mohali",
      Last: "Past Events",
      Healthcare: "Education",
      p: "According to a 2023 report, people living in slum areas like Udham Singh Colony in Sector 74, Mohali, Chandigarh, face significant challenges. Often, these slums lack adequate infrastructure,",
      
    },
  ];
  return (
    <div className="container-fluid px-lg-5 py-5 bg-light">
      <div className="container text-center mt-4 shadow-sm p-4 rounded-4 bg-white">
        <div className="custom-border m-3">
          <div
            id="eventsCarousel"
            className="carousel slide position-relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {events.map((item, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="row g-2 ">
                    {/* Left Image */}
                    <div className="col-lg-6">
                      <img
                        src={item.image}
                        className="w-100 rounded-4"
                        alt={item.title}
                        style={{ height: "350px", objectFit: "cover" }}
                      />
                    </div>

                    {/* Right Content */}
                    <div className="col-lg-6 p-4 ">
                      <h5 className="d-flex justify-content-start">
                        {item.title}
                      </h5>
                      <div className="d-flex gap-3 mt-1">
                        <div className="button">
                         <p>{item.date}</p>
                        </div>
                        <div className="button">
                        <p>{item.lacation}</p>
                        </div>
                        <div className="button">
                         <p>{item.text}</p>
                        </div>
                      </div>
                      <div className="d-flex mb-2 mt-4 gap-3">
                        <div>
                          <button className="pt-1 bg-white border-info rounded text-black" >{item.Healthcare}</button>{" "}
                          
                        </div>
                        <div>
                          <button className="pt-1 border-info bg-white rounded">{item.Last}</button>
                        </div>
                      </div>

                      <p className="text-start mt-4">{item.p}</p>
                      <div className="text-start">
                        <button className="btn btn-success">Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-indicators custom-indicators">
              {events.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#eventsCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Controls */}
            <div className="carousel-controls">
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#eventsCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#eventsCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
