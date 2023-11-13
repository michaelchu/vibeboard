import React from "react";
import Meta from "./../components/Meta";
import AuthSection from "../components/Auth/AuthSection.tsx";
import { useRouter } from "./../util/router";

function AuthPage() {
  const router = useRouter();

  return (
    <>
      <Meta title="Auth" />
      <AuthSection
        size="md"
        bgColor="bg-gray-700"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
        type={router.query.type}
        providers={["google", "facebook", "twitter"]}
        afterAuthPath={router.query.next || "/dashboard"}
      />
    </>
  );
}

export default AuthPage;
