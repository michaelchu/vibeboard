import React from "react";
import Meta from "../components/Meta";
import SettingsSection from "../components/SettingsSection";
import { useLocation } from "react-router-dom";
import { requireAuth } from "../util/auth.jsx";

function SettingsPage() {
  const location = useLocation();

  // Get the 'section' query parameter from the URL
  const searchParams = new URLSearchParams(location.search);
  const section = searchParams.get("section") || "general";

  return (
    <>
      <Meta title="Settings" />
      <SettingsSection
        size="md"
        bgColor="bg-gray-700"
        bgImage=""
        bgImageOpacity={1}
        section={section}
        key={section}
      />
    </>
  );
}

export default requireAuth(SettingsPage);
