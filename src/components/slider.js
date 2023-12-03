import { ClassNames } from "@emotion/react";
import React from "react";
import { useState, useEffect } from "react";
import "./slider.css";

export const ImgSlider = ({ top_5_movies }) => {
  let [img_index, set_img_index] = useState(0);

  //   const images = [
  //     {
  //       url: "https://assetscdn1.paytm.com/images/cinema/Tiger-3--705x750-d0e91180-6f31-11ee-b230-2d48320d83d4-89baab90-7a3d-11ee-8577-ffac9279cee7.jpg?format=webp&imwidth=300",
  //     },
  //     {
  //       url: "https://assets-prd.ignimgs.com/2023/06/24/bestactionmovies-slideshow-1687567425222.jpg?crop=16%3A9&width=888",
  //     },
  //     {
  //       url: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00365163-cnsgbkuwvq-portrait.jpg",
  //     },
  //   ];
  function handlenext() {
    set_img_index((previndex) => {
      return previndex === top_5_movies.length - 1 ? 0 : previndex + 1;
    });
  }
  function handleprev() {
    set_img_index((previndex) => {
      return previndex === 0 ? top_5_movies.length - 1 : previndex - 1;
    });
  }

  return (
    <div>
      <div
        id="carouselExample"
        className="carousel slide mt-2"
        style={{ width: "100%" }}
        data-bs-ride="carousel"
      >
        <div
          className="carousel-inner"
          style={{ marginLeft: "40%", width: "60%" }}
        >
          {top_5_movies.map((movie, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? `active` : ``} `}
            >
              <img
                className="img_carousal"
                src={movie.image}
                alt={`slide${index + 1}`}
                style={{
                  height: "auto",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleprev}
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          style={{
            border: "solid 1px lightgrey",
            borderRadius: "5px",
            height: "5rem",
            width: "3rem",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            marginTop: "20%",
          }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          onClick={handlenext}
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          style={{
            border: "solid 1px lightgrey",
            height: "5rem",
            width: "3rem",
            borderRadius: "5px",
            marginTop: "20%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
