import React from "react";
import { Link } from "./../util/router";

function AuthFooter(props) {
  return (
    <div
      className={
        "px-3 mt-6 text-sm text-center" +
        (props.className ? ` ${props.className}` : "")
      }
    >
      {props.type === "signup" && (
        <>
          {props.showAgreement && (
            <div className="mb-3">
              By signing up, you are agreeing to our{" "}
              <Link to={props.termsPath} className="text-blue-600">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to={props.privacyPolicyPath} className="text-blue-600">
                Privacy Policy
              </Link>
              .
            </div>
          )}

          {props.signinText}
          <Link to={props.signinPath} className="ml-3 text-blue-600">
            {props.signinAction}
          </Link>
        </>
      )}

      {props.type === "signin" && (
        <>
          <Link to={props.signupPath} className="text-blue-600">
            {props.signupAction}
          </Link>

          {props.forgotPassAction && (
            <Link to={props.forgotPassPath} className="ml-4 text-blue-600">
              {props.forgotPassAction}
            </Link>
          )}
        </>
      )}

      {props.type === "forgotpass" && (
        <>
          {props.signinText}
          <Link to={props.signinPath} className="ml-3 text-blue-600">
            {props.signinAction}
          </Link>
        </>
      )}
    </div>
  );
}

export default AuthFooter;
