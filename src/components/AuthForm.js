import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import Button from "./Button";
import LoadingIcon from "./LoadingIcon";
import { useAuth } from "./../util/auth";

function AuthForm(props) {
  const auth = useAuth();

  const [pending, setPending] = useState(false);
  const { handleSubmit, register, errors, getValues } = useForm();

  const submitHandlersByType = {
    signin: ({ email, pass }) => {
      return auth.signin(email, pass).then((user) => {
        // Call auth complete handler
        props.onAuth(user);
      });
    },
    signup: ({ email, pass }) => {
      return auth.signup(email, pass).then((user) => {
        // Call auth complete handler
        props.onAuth(user);
      });
    },
    forgotpass: ({ email }) => {
      return auth.sendPasswordResetEmail(email).then(() => {
        setPending(false);
        // Show success alert message
        props.onFormAlert({
          type: "success",
          message: "Password reset email sent",
        });
      });
    },
    changepass: ({ pass }) => {
      return auth.confirmPasswordReset(pass).then(() => {
        setPending(false);
        // Show success alert message
        props.onFormAlert({
          type: "success",
          message: "Your password has been changed",
        });
      });
    },
  };

  // Handle form submission
  const onSubmit = ({ email, pass }) => {
    // Show pending indicator
    setPending(true);

    // Call submit handler for auth type
    submitHandlersByType[props.type]({
      email,
      pass,
    }).catch((error) => {
      setPending(false);
      // Show error alert message
      props.onFormAlert({
        type: "error",
        message: error.message,
      });
    });
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      {["signup", "signin", "forgotpass"].includes(props.type) && (
        <TextField
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          error={errors.email}
          inputRef={register({
            required: "Please enter an email address",
          })}
        />
      )}

      {["signup", "signin", "changepass"].includes(props.type) && (
        <TextField
          type="password"
          id="pass"
          name="pass"
          placeholder="Password"
          error={errors.pass}
          inputRef={register({
            required: "Please enter a password",
          })}
        />
      )}

      {["signup", "changepass"].includes(props.type) && (
        <TextField
          type="password"
          id="confirmPass"
          name="confirmPass"
          placeholder="Confirm Password"
          error={errors.confirmPass}
          inputRef={register({
            required: "Please enter your password again",
            validate: (value) => {
              if (value === getValues().pass) {
                return true;
              } else {
                return "This doesn't match your password";
              }
            },
          })}
        />
      )}

      <Button type="submit" size="lg" disabled={pending} isBlock={true}>
        {pending && <LoadingIcon className="w-6" />}

        {!pending && <>{props.buttonAction}</>}
      </Button>
    </form>
  );
}

export default AuthForm;
