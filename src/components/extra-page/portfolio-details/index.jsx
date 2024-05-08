import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import React from "react";
import Fahrzeugbeschreibung from "./fahrzeugbeschreibung";

const index = ({ item }) => {
  return (
    <main>
      <Breadcrumb
        title={"Fahrzeugbeschreibung"}
        subTitle={"Fahrzeugbeschreibung"}
      />
      <Fahrzeugbeschreibung item={item} />
    </main>
  );
};

export default index;
