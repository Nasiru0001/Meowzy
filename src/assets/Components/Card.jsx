import React from "react";

const Card = ({ cat }) => {
  // const imgs = cat.slice(0, 1)[0];
  // let name = cat[1]?.url; // Safely access the 'name' property

  // // Step 2: Remove the object from the array
  // cat.splice(0, 1); // Removes the first element

  console.log(cat);

  return (
    <div className="card-container">
      <div className="card">
        <img className="img" src={cat} alt="" />
      </div>
    </div>
  );
};

export default Card;
