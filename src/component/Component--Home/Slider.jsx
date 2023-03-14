import React from "react";
import Card from "./Card";
export default function Slider(props) {
  return (
    <>
      <div className="slider">
        <h5>{props.heading}</h5>
        <div className="slider-container">
          {props.data.map((val, index) => {
            return (
              <Card
                className="container--card_component"
                imgSrc={val.poster_path}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
