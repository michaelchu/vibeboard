import React from "react";
import { Link } from "react-router-dom";

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
              <Link to={props.termsPath} className="text-gray-400">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to={props.privacyPolicyPath} className="text-gray-400">
                Privacy Policy
              </Link>
              .
            </div>
          )}

          {props.signinText}
          <Link to={props.signinPath} className="ml-3 text-gray-400">
            {props.signinAction}
          </Link>
        </>
      )}

      {props.type === "signin" && (
        <>
          <Link to={props.signupPath} className="text-gray-400">
            {props.signupAction}
          </Link>

          {props.forgotPassAction && (
            <Link to={props.forgotPassPath} className="ml-4 text-gray-400">
              {props.forgotPassAction}
            </Link>
          )}
        </>
      )}

      {props.type === "forgotpass" && (
        <>
          {props.signinText}
          <Link to={props.signinPath} className="ml-3 text-gray-400">
            {props.signinAction}
          </Link>
        </>
      )}
    </div>
  );
}

export default AuthFooter;
