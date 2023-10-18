import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import Button from "./Button";
import LoadingIcon from "./LoadingIcon";
import { useAuth } from "./../util/auth";

function SettingsPassword(props) {
  const auth = useAuth();
  const [pending, setPending] = useState(false);

  const { register, handleSubmit, errors, reset, getValues } = useForm();

  const onSubmit = (data) => {
    // Show pending indicator
    setPending(true);

    auth
      .updatePassword(data.pass)
      .then(() => {
        // Clear form
        reset();
        // Set success status
        props.onStatus({
          type: "success",
          message: "Your password has been updated",
        });
      })
      .catch((error) => {
        if (error.code === "auth/requires-recent-login") {
          // Update state to show re-authentication modal
          props.onStatus({
            type: "requires-recent-login",
            // Resubmit after reauth flow
            callback: () => onSubmit({ pass: data.pass }),
          });
        } else {
          // Set error status
          props.onStatus({
            type: "error",
            message: error.message,
          });
        }
      })
      .finally(() => {
        // Hide pending indicator
        setPending(false);
      });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type="password"
        id="pass"
        name="pass"
        placeholder="Password"
        label="Password"
        error={errors.pass}
        inputRef={register({
          required: "Please enter a password",
        })}
      />
      <TextField
        type="password"
        id="confirmPass"
        name="confirmPass"
        placeholder="Confirm Password"
        label="Confirm New Password"
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
      <Button
        type="submit"
        size="md"
        variant="primary"
        disabled={pending}
        isBlock={true}
      >
        {!pending && <>Save</>}

        {pending && <LoadingIcon className="w-6" />}
      </Button>
    </form>
  );
}

export default SettingsPassword;
