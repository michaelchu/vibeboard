import React, { useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import FormAlert from "./FormAlert";
import TextField from "./TextField";
import Button from "./Button";
import LoadingIcon from "./LoadingIcon";
import AuthSocial from "./AuthSocial";
import { useAuth } from "./../util/auth";

function ReauthModal(props) {
  const auth = useAuth();
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const { pass } = data;
    setPending(true);

    auth
      .signin(auth.user.email, pass)
      .then(() => {
        // Call failed action that originally required reauth
        props.callback();
        // Let parent know we're done so they can hide modal
        props.onDone();
      })
      .catch((error) => {
        // Hide pending indicator
        setPending(false);
        // Show error alert message
        setFormAlert({
          type: "error",
          message: error.message,
        });
      });
  };

  return (
    <Transition appear={true} show={true}>
      <Dialog
        as="div"
        className="overflow-y-auto fixed inset-0 z-10"
        onClose={() => props.onDone()}
      >
        <div className="px-4 min-h-screen text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="inline-block overflow-hidden p-6 my-8 w-full max-w-md text-left align-middle bg-white rounded-2xl shadow-xl transition-all transform">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Please sign in again to complete this action
              </Dialog.Title>
              <div className="mt-4">
                {formAlert && (
                  <div className="mb-4">
                    <FormAlert
                      type={formAlert.type}
                      message={formAlert.message}
                    />
                  </div>
                )}

                {props.provider === "password" && (
                  <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                      type="password"
                      id="pass"
                      name="pass"
                      placeholder="Password"
                      error={errors.pass}
                      inputRef={register({
                        required: "Please enter your password",
                      })}
                    />
                    <div className="space-x-2 flex">
                      <Button
                        size="md"
                        variant="simple"
                        onClick={() => props.onDone()}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        size="md"
                        disabled={pending}
                        isBlock={true}
                        className="w-20"
                      >
                        {!pending && <>Sign in</>}

                        {pending && <LoadingIcon className="w-5" />}
                      </Button>
                    </div>
                  </form>
                )}

                {props.provider !== "password" && (
                  <AuthSocial
                    buttonAction="Sign in"
                    providers={[props.provider]}
                    showLastUsed={false}
                    onAuth={() => {
                      props.callback();
                      props.onDone();
                    }}
                    onError={(message) => {
                      setFormAlert({
                        type: "error",
                        message: message,
                      });
                    }}
                  />
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ReauthModal;
