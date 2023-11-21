import React from "react";
import { Transition } from "@headlessui/react";
import { resolveValue, Toaster, ToastIcon } from "react-hot-toast";

export default function Toast() {
  return (
    <Toaster position={"top-center"}>
      {(t) => (
        <Transition
          appear
          show={t.visible}
          className="transform p-4 flex bg-gray-700/90 rounded shadow-lg"
          enter="transition-all duration-150"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
        >
          <ToastIcon toast={t} />
          <p className={"px-2 pb-1"}>{resolveValue(t.message, t)}</p>
        </Transition>
      )}
    </Toaster>
  );
}
