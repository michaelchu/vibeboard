import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { DesignModalProps } from "../../util/types.ts";

export default function DesignModal({
  themeData,
  setThemeData,
  isModalOpen,
  setIsModalOpen,
  handleSave,
}: DesignModalProps) {
  return (
    <>
      <div>
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
            <div className="fixed inset-0 overflow-y-auto p-4 lg:p-8">
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
                  <div className="flex items-center justify-between bg-gray-50 px-5 py-4 dark:bg-gray-700/50">
                    <Dialog.Title
                      as="h3"
                      className="flex items-center space-x-2 font-medium"
                    >
                      <ArrowDownTrayIcon className={"h-5 w-5"} />
                      <span>Save your Design</span>
                    </Dialog.Title>

                    <div className="-my-4">
                      <button
                        onClick={() => setIsModalOpen(false)}
                        type="button"
                        className="inline-flex items-center justify-center space-x-2 rounded-lg border border-transparent px-2 py-1 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                      >
                        <XMarkIcon className={"h-5 w-5"} />
                      </button>
                    </div>
                  </div>
                  <div className="grow p-5">
                    <div className="space-y-2">
                      <label htmlFor="title" className="mb-3 font-medium">
                        Title
                      </label>
                      {/* TODO: We need to limit characters to only alphanumeric to generate snake case for file names */}
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder=""
                        value={themeData.themeName}
                        onChange={(e) =>
                          setThemeData({
                            ...themeData,
                            ...{ themeName: e.target.value },
                          })
                        }
                        className="block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm leading-5 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2 mt-3">
                      <label htmlFor="description" className="mb-3 font-medium">
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        placeholder=""
                        value={themeData.description}
                        onChange={(e) =>
                          setThemeData({
                            ...themeData,
                            ...{ description: e.target.value },
                          })
                        }
                        className="block w-full rounded-lg border border-gray-200 px-3 py-2 text-sm leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                      ></textarea>
                    </div>
                  </div>
                  <div className="space-x-2 bg-gray-50 px-5 py-4 text-right dark:bg-gray-700/50">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      type="button"
                      className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSave()}
                      type="button"
                      className="inline-flex items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
            {/* END Modal Dialog */}
          </Dialog>
        </Transition>
        {/* END Modal Container */}
      </div>
      {/* END Modals: With Form */}
    </>
  );
}
