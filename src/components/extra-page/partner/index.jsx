import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import React from "react";
import PartnerArea from "./partner-area";

const index = () => {
  return (
    <main>
      <Breadcrumb title="Partner" subTitle="partner" />
      <PartnerArea />
    </main>
  );
};

export default index;
