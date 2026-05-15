"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  const slides = [
    "/images/slide1.png",
    "/images/slide2.png",
    "/images/slide3.png",
  ];

  return (
    <>
      <div
        id="heroCarousel"
        className="carousel slide hero-slider"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        {/* Slides */}
        <div className="carousel-inner">
          {slides.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                className="position-relative w-100 overflow-hidden"
                style={{ height: "700px" }}
              >
                {/* Image */}
                <Image
                  src={img}
                  alt={`slide-${index}`}
                  fill
                  priority={index === 0}
                  className="object-fit-cover"
                />

                {/* Overlay */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.45))",
                  }}
                ></div>

                {/* Content */}
                <div
                  className="carousel-caption text-start"
                  style={{
                    bottom: "120px",
                    left: "8%",
                    right: "8%",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div className="d-flex gap-3 flex-wrap">
                      <button className="btn btn-outline-light custom-btn rounded-pill px-4 py-2 fw-bold text-uppercase">
                        Know More
                      </button>

                      <button className="btn btn-outline-light custom-btn rounded-pill px-4 py-2 fw-bold text-uppercase">
                        Volunteer
                      </button>
                    </div>

                    <button className="btn btn-outline-light custom-btn rounded-pill px-4 py-2 fw-bold text-uppercase">
                      Donate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="carousel-indicators mb-4">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
            />
          ))}
        </div>

        {/* Prev */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>

        {/* Next */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
      <div className="text-center text-white">
        <div className="bg-green">
          <h4>
            Empowering Those Who Empower Others: Investing in Grassroots,
            Investing in India's Future.
          </h4>
        </div>
        <div className="dark-green p-5">
          <p>
            At Adhishrihaan Foundation, we believe true transformation begins at
            the roots. We are the steadfast <br />
            support system for the unsung heroes of community development:
            grassroots NGOs, nurturing their <br />
            vital work with unwavering care and commitment.
          </p>

         
            <h4 className="p-4">DISCOVER OUR IMPACT | SUPPORT OUR MISSION</h4>
          
        </div>
      </div>
    </>
  );
}
