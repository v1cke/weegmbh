import React from "react";
import MapBg from "@assets/img/map/map_ger.png";

const LocationMap = () => {
  return (
    <div className="location-map-area pt-120 wow fadeInUp" data-wow-delay=".3s">
      <div className="container">
        <div
          className="location-map-bg"
          style={{ backgroundImage: `url(${MapBg.src})` }}
        ></div>
      </div>
    </div>
  );
};

export default LocationMap;
