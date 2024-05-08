import React from "react";

const FahrzeugbeschreibungText = ({ item }) => {
  return (
    <>
      <div className="section__title mb-20">
        <h3 className="title-sm">{item?.title && item.title}</h3>
      </div>
      <p className="content-para">{item?.description_1}</p>
    </>
  );
};

export default FahrzeugbeschreibungText;
