import React from "react";
import Leistungen from "@components/leistungen/leistungen";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";

const index = () => {
  return (
    <main>
      <Breadcrumb title={"Leistungen"} subTitle={"Leistungen"} />
      <Leistungen />
    </main>
  );
};

export default index;
