import React from "react";
import Meta from "../components/Meta";
import { requireAuth } from "../util/auth.jsx";
import Keyboard from "../components/Keyboard/Keyboard.tsx";
import { mergeArraysByKey } from "../util/helpers.ts";
import { mac_os_65 } from "../components/Keyboard/layouts/mac_os_65.ts";
import { useKeyboardByTheme } from "../util/db.jsx";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/20/solid";
import { ArrowUturnRightIcon } from "@heroicons/react/24/solid";

const filters = [
  {
    id: "layout",
    name: "Layout",
    options: [
      { value: "40", label: "40%" },
      { value: "40_ortho", label: "40% Ortho" },
      { value: "50_ortho", label: "50% Ortho" },
      { value: "60", label: "60%" },
      { value: "65", label: "65%" },
      { value: "75", label: "75%" },
      { value: "80", label: "80%" },
      { value: "100", label: "90%" },
    ],
  },
  {
    id: "case_style",
    name: "Case Style",
    options: [
      { value: "angular", label: "Angular" },
      { value: "rounded", label: "Rounded" },
    ],
  },
  {
    id: "case_color",
    name: "Case Color",
    options: [
      { value: "red", label: "Red" },
      { value: "pink", label: "Pink" },
      { value: "yellow", label: "Yellow" },
      { value: "green", label: "Green" },
      { value: "blue", label: "Blue" },
      { value: "purple", label: "Purple" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DesignPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { data: key_colors, status } = useKeyboardByTheme(
    "ca5d93da-28ab-4892-803d-13dad50b9a22",
  );
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-800/50">
        <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
          <div className="text-center sm:text-left sm:flex sm:items-center sm:justify-between py-2 lg:py-0 space-y-2 sm:space-y-0">
            <div className="grow">
              <h1 className="text-xl font-bold mb-1">Design Your Keyboard</h1>
              <h2 className="text-sm text-gray-500 font-medium dark:text-gray-400">
                Unleash your creativity and turn your keyboard into a stunning
                work of art with our customizable RGB lighting options.
              </h2>
            </div>
            <div className="flex-none flex items-center justify-center sm:justify-end space-x-3 py-3 rounded sm:bg-transparent px-2 sm:px-0">
              <a
                href="javascript:void(0)"
                className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-5 text-sm border-yellow-600 bg-yellow-600 text-white hover:text-white hover:bg-yellow-500 hover:border-yellow-500 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 active:bg-yellow-700 active:border-yellow-700 dark:focus:ring-yellow-400 dark:focus:ring-opacity-90"
              >
                <ArrowUturnRightIcon className="inline-block w-5 h-5 opacity-50" />
                <span>Reset</span>
              </a>
              <a
                href="javascript:void(0)"
                className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-5 text-sm border-green-700 bg-green-700 text-white hover:text-white hover:bg-green-600 hover:border-green-600 focus:ring focus:ring-green-400 focus:ring-opacity-50 active:bg-green-700 active:border-blue-700 dark:focus:ring-green-400 dark:focus:ring-opacity-90"
              >
                <PlusIcon className="inline-block w-5 h-5 opacity-50" />
                <span>Save Keyboard</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Meta title="Design your Keyboard" />
      <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
        <div className="bg-gray-900">
          <div>
            {/* Mobile filter dialog */}
            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-40 lg:hidden"
                onClose={setMobileFiltersOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 z-40 flex">
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto py-4 pb-6 shadow-xl bg-gray-800">
                      <div className="flex items-center justify-between px-4">
                        <h2 className="text-lg font-medium text-gray-200">
                          Filters
                        </h2>
                        <button
                          type="button"
                          className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-200 hover:text-gray-300"
                          onClick={() => setMobileFiltersOpen(false)}
                        >
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>

                      {/* Filters */}
                      <form className="mt-4">
                        {filters.map((section) => (
                          <Disclosure
                            as="div"
                            key={section.name}
                            className="border-t border-gray-700 pb-4 pt-4"
                          >
                            {({ open }) => (
                              <fieldset>
                                <legend className="w-full px-2">
                                  <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                    <span className="text-sm font-medium text-gray-300">
                                      {section.name}
                                    </span>
                                    <span className="ml-6 flex h-7 items-center">
                                      <ChevronDownIcon
                                        className={classNames(
                                          open ? "-rotate-180" : "rotate-0",
                                          "h-5 w-5 transform",
                                        )}
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </Disclosure.Button>
                                </legend>
                                <Disclosure.Panel className="px-4 pb-2 pt-4">
                                  <div className="space-y-6">
                                    {section.options.map(
                                      (option, optionIdx) => (
                                        <div
                                          key={option.value}
                                          className="flex items-center"
                                        >
                                          <input
                                            id={`${section.id}-${optionIdx}-mobile`}
                                            name={`${section.id}[]`}
                                            defaultValue={option.value}
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-200 bg-gray-300 text-blue-600 focus:ring-blue-500"
                                          />
                                          <label
                                            htmlFor={`${section.id}-${optionIdx}-mobile`}
                                            className="ml-3 text-sm text-gray-400"
                                          >
                                            {option.label}
                                          </label>
                                        </div>
                                      ),
                                    )}
                                  </div>
                                </Disclosure.Panel>
                              </fieldset>
                            )}
                          </Disclosure>
                        ))}
                      </form>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>

            <div className="pt-4 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
              <aside>
                <h2 className="sr-only">Filters</h2>

                <button
                  type="button"
                  className="inline-flex items-center lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="text-sm font-medium text-gray-300">
                    Filters
                  </span>
                  <PlusIcon
                    className="ml-1 h-5 w-5 flex-shrink-0 text-gray-300"
                    aria-hidden="true"
                  />
                </button>

                <div className="hidden lg:block">
                  <form className="space-y-10 divide-y divide-gray-700">
                    {filters.map((section, sectionIdx) => (
                      <div
                        key={section.name}
                        className={sectionIdx === 0 ? undefined : "pt-10"}
                      >
                        <fieldset>
                          <legend className="block text-sm font-medium text-gray-300">
                            {section.name}
                          </legend>
                          <div className="space-y-3 pt-6">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-400"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </fieldset>
                      </div>
                    ))}
                  </form>
                </div>
              </aside>

              {/* Product grid */}
              <div className="mt-10 lg:col-span-2 lg:mt-0 xl:col-span-3">
                <div className="flex items-center justify-center text-gray-400 w-full h-full">
                  <div>
                    {status === "idle" || status === "loading" ? (
                      <span>One moment please</span>
                    ) : (
                      <main className="min-w-full min-h-fit flex items-center justify-center">
                        <Keyboard
                          keys={mergeArraysByKey(mac_os_65, key_colors)}
                          variant={"dark"}
                        />
                      </main>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default requireAuth(DesignPage);
