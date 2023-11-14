import React from "react";
import Meta from "../components/Meta";
import { requireAuth } from "../util/auth.jsx";
import Dropdown from "../components/Dropdown.tsx";
import Keyboard from "../components/Keyboard/Keyboard.tsx";
import { mergeArraysByKey } from "../util/helpers.ts";
import { mac_os_65 } from "../components/Keyboard/layouts/mac_os_65.ts";
import { useKeyboardByTheme } from "../util/db.jsx";
import { PlusIcon } from "@heroicons/react/24/solid";

function DesignPage() {
  const { data: key_colors, status } = useKeyboardByTheme(
    "ca5d93da-28ab-4892-803d-13dad50b9a22",
  );
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-800/50">
        <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
          <div className="text-center sm:text-left sm:flex sm:items-center sm:justify-between py-2 lg:py-0 space-y-2 sm:space-y-0">
            <div className="grow">
              <h1 className="text-xl font-bold mb-1">
                Customize Your Keyboard
              </h1>
              <h2 className="text-sm text-gray-500 font-medium dark:text-gray-400">
                Unleash your creativity and turn your keyboard into a stunning
                work of art with our customizable RGB lighting options.
              </h2>
            </div>
            <div className="flex-none flex items-center justify-center sm:justify-end space-x-2 py-3 rounded sm:bg-transparent px-2 sm:px-0">
              <Dropdown />
              <a
                href="javascript:void(0)"
                className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
              >
                <PlusIcon className="hi-mini hi-plus inline-block w-5 h-5 opacity-50" />
                <span>New Keyboard</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Meta title="Design your Keyboard" />
      <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
        <div className="flex items-center justify-center rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-400 py-32 dark:bg-gray-800 dark:border-gray-700">
          <div>
            {status === "idle" || status === "loading" ? (
              <span>One moment please</span>
            ) : (
              <main className="min-w-full bg-gray-200 dark:bg-gray-700 min-h-fit flex items-center justify-center">
                <Keyboard
                  keys={mergeArraysByKey(mac_os_65, key_colors)}
                  variant={"dark"}
                />
              </main>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default requireAuth(DesignPage);
