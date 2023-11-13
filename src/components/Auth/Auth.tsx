import React, { useState } from "react";
import FormAlert from "../FormAlert.tsx";
import AuthForm from "./AuthForm.tsx";
import AuthSocial from "./AuthSocial.tsx";
import { useHistory } from "react-router-dom";

interface FormAlertState {
  type: "error" | "success";
  message: string;
}

function Auth(props) {
  const history = useHistory();
  const [formAlert, setFormAlert] = useState<FormAlertState | null>(null);

  const handleAuth = () => {
    history.push(props.afterAuthPath);
  };

  const handleFormAlert = (data) => {
    setFormAlert(data);
  };

  return (
    <>
      {formAlert && (
        <div className="mb-4">
          <FormAlert type={formAlert.type} message={formAlert.message} />
        </div>
      )}

      <AuthForm
        type={props.type}
        buttonAction={props.buttonAction}
        onAuth={handleAuth}
        onFormAlert={handleFormAlert}
      />

      {["signup", "signin"].includes(props.type) && (
        <>
          {props.providers && props.providers.length && (
            <AuthSocial
              buttonAction={props.buttonAction}
              providers={props.providers}
              showLastUsed={true}
              onAuth={handleAuth}
              onError={(message) => {
                handleFormAlert({
                  type: "error",
                  message: message,
                });
              }}
            />
          )}
        </>
      )}
    </>
  );
}

export default Auth;
