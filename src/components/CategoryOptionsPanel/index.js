import React from "react";

export function CategoryOptionsPanel(props) {
  return (
    //  subcard 
    <div className=" category" >
      {/* image  */}
      <img src={props.image} className="card-img-top" alt="RestaurantImage" />
      {/* text */}
      <figcaption className="caption">{props.text}</figcaption>
    </div>
  )
}



