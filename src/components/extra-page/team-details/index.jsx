import React from "react";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ExperienceArea from "./experience-area";

const index = ({ item }) => {
  return (
    <main>
      <Breadcrumb title="Team Details" subTitle="Team Details" />
      <section className="tmd pt-120 pb-120">
        <div className="container">
          <div className="row">
            <ExperienceArea item={item} />
            {/* <Skills />
            <Education /> */}
            {/* <CarrerInfo /> */}
            {/* <div
              className="col-lg-12 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay=".3s"
            >
              <TmdForm item={item} />
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default index;
