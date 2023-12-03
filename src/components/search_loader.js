import React from "react";
import { useState } from "react";
import "./Movies.css";
export const Search_loader = ({
  display_prop,
  set_display_prop,
  matched_items,
}) => {
  //   console.log(matched_items);

  return (
    <div>
      <div
        className="search_load"
        style={{
          display: display_prop,
          // width: "68.3ch",
          top: "3.2rem",
          right: "1.5rem",
          zIndex: "10",
          borderRadius: "2px",
          // height: "auto",

          backgroundColor: "#222222",
          color: "white",
          position: "absolute",
        }}
      >
        {matched_items.length === 0 ? (
          <p style={{ padding: "10px" }}>No movies found</p>
        ) : (
          matched_items.map((movie, index) => {
            if (index < 10) {
              return (
                <div>
                  <a
                    target="blank"
                    href={movie.link}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <p style={{ padding: "10px" }}>
                      {movie.title.toUpperCase()}
                    </p>{" "}
                    <hr style={{ margin: "0" }}></hr>
                  </a>
                </div>
              );
            }
          })
        )}
      </div>
    </div>
  );
};
