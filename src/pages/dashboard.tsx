import React from "react";
import Meta from "../components/Meta";
import { requireAuth } from "../util/auth.jsx";

function DashboardPage() {
  return (
    <>
      <Meta title="Dashboard" />
    </>
  );
}

export default requireAuth(DashboardPage);
