import React from "react";
import Meta from "../components/Meta";
import AuthSection from "../components/AuthSection";
import { useLocation, useHistory } from "react-router-dom";

function AuthPage(props) {
  const location = useLocation();
  const history = useHistory();

  // The `search` property of `location` is a string representing a query string
  // including the leading '?'.
  // We can use the `URLSearchParams` API to parse this query string.
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");
  const next = queryParams.get("next") || "/dashboard";

  return (
    <>
      <Meta title="Auth" />
      <AuthSection
        size="md"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
        type={type}
        providers={["google", "facebook", "twitter"]}
        afterAuthPath={next}
      />
    </>
  );
}

export default AuthPage;
