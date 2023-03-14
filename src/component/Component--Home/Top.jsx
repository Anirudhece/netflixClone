import React from "react";
export default function Top(props) {
  // const imgUrl = `htts://image.tmdb.org/t/p/w500p` + props.data[0].poster_path;
  // console.log(props.data[0].poster_path);

  return (
    <>
      <div className="topContainer">
        <div className="topContainer--text">
          TOP GUN
          <br />
          MAVERICK
          <br />
          <div>
            -'Top Gun: Maverick' grossed over $350 million worldwide at the box
            office
          </div>
        </div>
      </div>
    </>
  );
}
