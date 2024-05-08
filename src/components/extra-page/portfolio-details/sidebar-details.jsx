import React from "react";
import LeistungenSidebar from "./leistungen-sidebar";
import SearchInput from "./search-input";

const SidebarDetails = () => {
  return (
    <div className="service-details-sidebar mb-60">
      <SearchInput />
      <LeistungenSidebar />
    </div>
  );
};

export default SidebarDetails;
