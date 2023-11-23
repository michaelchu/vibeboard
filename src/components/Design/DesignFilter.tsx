import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import React from "react";
import { FilterSection } from "../../util/types.ts";

export default function DesignFilter({
  filters,
}: {
  filters: FilterSection[];
}) {
  return (
    <form className="space-y-10">
      {filters.map((section) => (
        <Disclosure as="div" defaultOpen={section.defaultOpen} key={section.id}>
          {({ open }) => (
            <>
              <h3 className="flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between  text-sm text-gray-400 hover:text-gray-500">
                  <span className="text-lg font-medium text-gray-200">
                    {section.name}
                  </span>
                  <span className="ml-6 flex items-center text-gray-200">
                    {open ? (
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                {section.options ? (
                  <div className="space-y-4 px-3">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="radio"
                          defaultChecked={section.defaultValue === option.value}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          onChange={(e) => {
                            if (section.onChange) {
                              section.onChange(e.target.value);
                            }
                          }}
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
                ) : (
                  section.element
                )}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </form>
  );
}
