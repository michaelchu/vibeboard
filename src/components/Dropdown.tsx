import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

const options = [
  { id: 1, label: "Default", value: "default" },
  { id: 2, label: "AstroSynapse", value: "astrosynapse" },
  { id: 3, label: "BioNexis", value: "bionexis" },
];

export default function Dropdown() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <>
      {/* Select Menus: Simple */}
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative sm:w-48">
          {/* Select Menu Toggle */}
          <div className="space-y-1">
            <Listbox.Button className="group w-full text-left flex justify-between items-center gap-2 border bg-white px-3 py-1.5 leading-6 rounded-lg border-gray-200 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500">
              <span className="grow truncate">{selected.label}</span>
              <ChevronUpDownIcon className="flex-none hi-mini hi-chevron-up-down inline-block w-5 h-5 opacity-40 transition group-hover:opacity-60 group-active:scale-90" />
            </Listbox.Button>
          </div>
          {/* END Select Menu Toggle */}

          {/* Select Menu */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Listbox.Options className="absolute inset-x-0 origin-top z-10 mt-2 py-2.5 max-h-60 rounded-lg overflow-y-auto shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:ring-gray-700 dark:shadow-gray-900">
              {options.map((option) => (
                <Listbox.Option
                  key={option.id}
                  className={({ active, selected }) =>
                    `cursor-pointer group text-sm flex items-center justify-between gap-2 focus:outline-none px-3 border-y border-transparent ${
                      selected ? "font-semibold dark:font-medium" : null
                    } ${
                      selected || active
                        ? "text-gray-950 dark:text-white"
                        : "text-gray-600 dark:text-gray-300"
                    } ${active ? "bg-blue-50 dark:bg-gray-700/75" : null}`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <div className="grow py-1.5 truncate">{option.label}</div>
                      <div
                        className={`pointer-events-none flex-none w-5 h-5 text-blue-600 dark:text-blue-500 ${
                          !selected ? "invisible" : null
                        }`}
                      >
                        {selected ? (
                          <CheckCircleIcon className="flex-none hi-mini hi-chevron-up-down inline-block w-5 h-5 opacity-40 transition group-hover:opacity-60 group-active:scale-90" />
                        ) : null}
                      </div>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
          {/* END Select Menu */}
        </div>
      </Listbox>
      {/* END Select Menus: Simple */}
    </>
  );
}
