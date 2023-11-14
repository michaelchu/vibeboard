import { Dialog, Disclosure, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import Keyboard from "./Keyboard/Keyboard.tsx";
import { mergeArraysByKey } from "../util/helpers.ts";
import { mac_os_65 } from "./Keyboard/layouts/mac_os_65.ts";
import { useKeyboardByTheme } from "../util/db.jsx";

export default function DesignSection() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { data: key_colors, status } = useKeyboardByTheme(
    "ca5d93da-28ab-4892-803d-13dad50b9a22",
  );
  const filters = [
    {
      id: "layout",
      name: "Layout",
      defaultOpen: true,
      options: [
        { value: "40", label: "40%", checked: true },
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
        { value: "angular", label: "Angular", checked: true },
        { value: "rounded", label: "Rounded" },
      ],
    },
    {
      id: "case_color",
      name: "Case Color",
      options: [
        { value: "white", label: "White", checked: true },
        { value: "red", label: "Red" },
        { value: "orange", label: "Orange" },
        { value: "yellow", label: "Yellow" },
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" },
        { value: "purple", label: "Purple" },
        { value: "black", label: "Black" },
      ],
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
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
                  <h2 className="text-lg font-medium text-gray-200">Filters</h2>
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
                      defaultOpen={section.defaultOpen}
                      className="border-t border-gray-700 pb-4 pt-4"
                    >
                      {({ open }) => (
                        <fieldset>
                          <legend className="w-full px-2">
                            <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                              <span className="text-md font-medium text-gray-300">
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
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`${section.id}-${optionIdx}-mobile`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="radio"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-200 bg-gray-300 text-blue-600 focus:ring-blue-500"
                                  />
                                  <label
                                    htmlFor={`${section.id}-${optionIdx}-mobile`}
                                    className="ml-3 text-sm text-gray-400"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
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

      <div className="pt-4 lg:grid lg:grid-cols-4 xl:grid-cols-4 rounded-lg">
        <aside>
          <h2 className="sr-only">Filters</h2>

          {/* Mobile filter button */}
          <button
            type="button"
            className="inline-flex items-center lg:hidden"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <span className="text-sm font-medium text-gray-300">Filters</span>
            <PlusIcon
              className="ml-1 h-5 w-5 flex-shrink-0 text-gray-300"
              aria-hidden="true"
            />
          </button>

          {/* Main filter section */}
          <div className="hidden lg:block p-4 bg-gray-800/80">
            <form className="space-y-10">
              {filters.map((section) => (
                <Disclosure
                  as="div"
                  defaultOpen={section.defaultOpen}
                  key={section.id}
                >
                  {({ open }) => (
                    <>
                      <h3 className="flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between  text-sm text-gray-400 hover:text-gray-500">
                          <span className="text-lg font-medium text-gray-200">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center text-gray-200">
                            {open ? (
                              <MinusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="radio"
                                defaultChecked={option.checked}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-300"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </form>
          </div>
        </aside>

        {/* Product grid */}
        <div className="mt-10 lg:col-span-2 lg:mt-0 xl:col-span-3 bg-gray-800/50">
          <div className="flex items-center justify-center text-gray-400 w-full h-full">
            {status === "idle" || status === "loading" ? (
              <span>One moment please</span>
            ) : (
              <main className="w-full h-full flex items-center justify-center">
                <Keyboard keys={mac_os_65} variant={"orange"} />
              </main>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
