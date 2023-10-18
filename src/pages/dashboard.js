import React from "react";
import Meta from "./../components/Meta";
import DashboardSection from "./../components/DashboardSection";
import { requireAuth } from "./../util/auth";

function DashboardPage(props) {
  return (
    <>
      <Meta title="Dashboard" />
      <DashboardSection
        title="Dashboard"
        subtitle=""
        strapline=""
        size="md"
        bgColor="bg-white"
      />
    </>
  );
}

export default requireAuth(DashboardPage);
