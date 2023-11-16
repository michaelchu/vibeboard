import React from "react";
import Meta from "./../components/Meta";
import AuthSection from "../components/Auth/AuthSection.tsx";
import { useRouter } from "./../util/router";

/*
AuthPage component handles authentication flow.

Renders:

- Meta component for title
- AuthSection component for login/signup

Props:

- None

Functionality:

- Gets router query params for auth type and redirect
- Passes auth type and providers to AuthSection
- Sets redirect path after auth to router.query.next

Usage:

<AuthPage />

*/

function AuthPage() {
  const router = useRouter();

  return (
    <>
      <Meta title="Auth" />
      <AuthSection
        size="md"
        bgColor="bg-gray-900"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
        type={router.query.type}
        providers={["google", "facebook"]}
        afterAuthPath={router.query.next || "/dashboard"}
      />
    </>
  );
}

export default AuthPage;
