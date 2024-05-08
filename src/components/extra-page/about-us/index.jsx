import React from "react";
import Leistungen from "@components/leistungen/leistungen";
import MissionSection from "./mission-section";
import ApproachArea from "./approach-area";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";

const index = () => {
  return (
    <main>
      <Breadcrumb title={"Über uns"} subTitle={"Über uns"} />

      <Leistungen />
      <ApproachArea />
      <MissionSection />
    </main>
  );
};

export default index;
