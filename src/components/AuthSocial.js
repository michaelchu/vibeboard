import React, { useState } from "react";
import Button from "./Button";
import LoadingIcon from "./LoadingIcon";
import { useAuth } from "./../util/auth";

function AuthSocial(props) {
  const auth = useAuth();
  const [pending, setPending] = useState(null);

  const providerDisplayNames = {
    google: "Google",
    facebook: "Facebook",
    twitter: "Twitter",
    github: "GitHub",
  };

  const onSigninWithProvider = (provider) => {
    setPending(provider);
    auth
      .signinWithProvider(provider)
      .then((user) => {
        // Remember this provider was last used
        // so we can indicate for next login.
        localStorage.setItem("lastUsedAuthProvider", provider);
        props.onAuth(user);
      })
      .catch((error) => {
        setPending(null);
        props.onError(error.message);
      });
  };

  return (
    <div className="mt-8 space-y-2">
      {props.providers.map((provider) => (
        <div className="mb-2" key={provider}>
          <Button
            size="lg"
            variant="simple"
            disabled={pending === provider}
            isBlock={true}
            onClick={() => {
              onSigninWithProvider(provider);
            }}
            startIcon={
              pending !== provider && (
                <img
                  src={`https://uploads.divjoy.com/icon-${provider}.svg`}
                  alt={providerDisplayNames[provider]}
                  className="w-5 h-5"
                />
              )
            }
          >
            {pending === provider && <LoadingIcon className="w-6" />}

            {pending !== provider && (
              <>
                {props.buttonAction} with {providerDisplayNames[provider]}
              </>
            )}
          </Button>
        </div>
      ))}
    </div>
  );
}

export default AuthSocial;
