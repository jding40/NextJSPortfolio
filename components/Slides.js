"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "./Slides.css";

function Slides() {
  const next_icon = useRef(null);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then(() => {
      // 等待 Carousel 初始化完成后触发点击
      if (next_icon.current) {
        next_icon.current.click();
      }
    });
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            src="/Presidents_Honour_List_2023_Fall.png"
            className="d-block w-100"
            alt="Presidents Honour List 2023 Fall."
            width={800}
            height={700}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            {/* <p>President&apos;s Honour for my 2nd semester.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <Image
            src="/Presidents_Honour_List_2024 Winter.png"
            className="d-block w-100"
            alt="Presidents Honour List 2024 Winter"
            width={800}
            height={700}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <Image
            src="/President's_Honour_List_2024 Summer.png"
            className="d-block w-100"
            alt="Presidents Honour List 2024 Summer"
            width={800}
            height={700}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p className="text-success"></p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          ref={next_icon}
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slides;
