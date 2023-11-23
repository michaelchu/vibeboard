import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ShieldExclamationIcon } from "@heroicons/react/24/solid";

export default function DeleteDialog({
  isModalOpen,
  setIsModalOpen,
  handleDelete,
}) {
  return (
    <>
      {/* Modal Container */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-90"
          onClose={() => setIsModalOpen(false)}
        >
          {/* Modal Backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 backdrop-blur-sm" />
          </Transition.Child>
          {/* END Modal Backdrop */}

          {/* Modal Dialog */}
          <div className="fixed inset-0 overflow-y-auto p-4 lg:p-8 flex items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-125"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-125"
            >
              <Dialog.Panel className="mx-auto flex w-full max-w-md flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
                <div className="flex grow space-x-5 px-5 py-7">
                  <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-rose-100 text-rose-500 dark:bg-rose-700/50 dark:text-rose-300">
                    <ShieldExclamationIcon className={"inline-block h-8 w-8"} />
                  </div>
                  <div>
                    <Dialog.Title as="h4" className="mb-1 text-lg font-bold">
                      Keyboard Deletion
                    </Dialog.Title>
                    <p className="text-md text-gray-600 dark:text-gray-400">
                      Are you sure you want to delete this keyboard? This action
                      cannot be undone!
                    </p>
                  </div>
                </div>
                <div className="space-x-2 bg-gray-50 px-5 py-4 text-right dark:bg-gray-700/50">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    type="button"
                    className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-md leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      handleDelete();
                      setIsModalOpen(false);
                    }}
                    type="button"
                    className="inline-flex items-center justify-center space-x-2 rounded-lg border border-rose-700 bg-rose-700 px-3 py-2 text-md leading-5 text-white hover:border-rose-600 hover:bg-rose-600 hover:text-white focus:ring focus:ring-rose-400 focus:ring-opacity-50 active:border-rose-700 active:bg-rose-700 dark:focus:ring-rose-400 dark:focus:ring-opacity-90"
                  >
                    Yes, delete keyboard
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
