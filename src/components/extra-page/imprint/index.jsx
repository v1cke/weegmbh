import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import React from "react";
import Imprint from "./imprint";

const index = () => {
  return (
    <main>
      <Breadcrumb title="Impressum" subTitle="Impressum" />
      <Imprint />
    </main>
  );
};

export default index;
