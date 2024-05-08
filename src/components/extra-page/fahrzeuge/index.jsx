import React from "react";
import Fahrzeuge from "./fahrzeuge";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";

const index = () => {
  return (
    <main>
      <Breadcrumb title={"Fahrzeuge"} subTitle={"Fahrzeuge"} />
      <Fahrzeuge />
    </main>
  );
};

export default index;
