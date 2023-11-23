import { win_65 } from "../Keyboard/Layout/win_65.ts";
import { ArrowUturnRightIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function DesignHeader({ setTempKeyboard, setModalOpen }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800/50">
      <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
        <div className="text-center sm:text-left sm:flex sm:items-center sm:justify-between py-2 lg:py-0 space-y-2 sm:space-y-0">
          <div className="grow">
            <h1 className="text-xl font-bold mb-1">Design Your Keyboard</h1>
          </div>
          <div className="flex-none flex items-center justify-center sm:justify-end space-x-3 py-3 rounded sm:bg-transparent px-2 sm:px-0">
            <button
              onClick={() => setTempKeyboard(win_65)}
              className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
            >
              <ArrowUturnRightIcon className="inline-block w-5 h-5 opacity-50" />
              <span>Reset</span>
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-5 text-sm border-gray-600 bg-gray-600 text-white hover:text-white hover:bg-gray-500 hover:border-gray-500 focus:ring focus:ring-gray-400 focus:ring-opacity-50 active:bg-gray-700 active:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-opacity-90"
            >
              <PlusIcon className="inline-block w-5 h-5 opacity-50" />
              <span>Save Keyboard</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
