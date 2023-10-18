import React, { useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import FormAlert from "./FormAlert";
import TextField from "./TextField";
import Button from "./Button";
import LoadingIcon from "./LoadingIcon";
import { useAuth } from "./../util/auth";
import { useItem, updateItem, createItem } from "./../util/db";

function EditItemModal(props) {
  const auth = useAuth();
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);

  const { register, handleSubmit, errors } = useForm();

  // This will fetch item if props.id is defined
  // Otherwise query does nothing and we assume
  // we are creating a new item.
  const { data: itemData, status: itemStatus } = useItem(props.id);

  // If we are updating an existing item
  // don't show modal until item data is fetched.
  if (props.id && itemStatus !== "success") {
    return null;
  }

  const onSubmit = (data) => {
    setPending(true);

    const query = props.id
      ? updateItem(props.id, data)
      : createItem({ owner: auth.user.uid, ...data });

    query
      .then(() => {
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
                {props.id ? "Update" : "Create"} Item
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

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    defaultValue={itemData && itemData.name}
                    error={errors.name}
                    inputRef={register({
                      required: "Please enter a name",
                    })}
                  />
                  <div className="space-x-2 flex items-stretch">
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
                      {!pending && <>Save</>}

                      {pending && <LoadingIcon className="w-5" />}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default EditItemModal;
