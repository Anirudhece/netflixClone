import React from "react";
export default function Slider(props) {
  const imgUr = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div className="card-container">
        <img src={imgUr + props.imgSrc} alt="posterImage" />
      </div>
    </>
  );
}
