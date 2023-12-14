import React from "react";

const Banner = () => {
  const imageUrl =
    "https://res.cloudinary.com/mae-com-in/image/upload/v1694887964/products/images_2_jtnnmr.jpg";

  return (
    <div className="">
      <img className="w-100 " style={{height:'440px'}} src={imageUrl} alt="banner" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Computer Engineering  </h5>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
};

export default Banner;
