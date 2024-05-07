import React from "react";
import ServicesAreaTwo from "@components/home-2/services-area-two";
import MissionSection from "./mission-section";
import ApproachArea from "./approach-area";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";

const index = () => {
  return (
    <main>
      <Breadcrumb title={"Über uns"} subTitle={"Über uns"} />

      <ServicesAreaTwo />
      <ApproachArea />
      <MissionSection />
    </main>
  );
};

export default index;
