import React from "react";

const Banner = () => {
  const imageUrl =
    "https://res.cloudinary.com/mae-com-in/image/upload/v1694887964/products/images_2_jtnnmr.jpg";

  return (
    <div className="carousel position-relative">
      <img className="w-100" style={{ height: '440px' }} src={imageUrl} alt="banner" />
      <div className="text-light position-absolute translate-middle">
        <h1>Computer Engineering</h1>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
};

export default Banner;
