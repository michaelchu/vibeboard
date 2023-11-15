import React, { useState } from "react";
import Meta from "../components/Meta";
import { requireAuth } from "../util/auth.jsx";
import { PlusIcon } from "@heroicons/react/20/solid";
import { ArrowUturnRightIcon } from "@heroicons/react/24/solid";
import DesignSection from "../components/DesignSection.tsx";
import { mac_65 } from "../components/Keyboard/layouts/mac_65.ts";
import Header from "../components/Header.tsx";

function DesignPage() {
  const [tempKeyboard, setTempKeyboard] = useState(mac_65);
  const handleSave = () => {};
  const handleReset = () => {};

  return (
    <>
      <Header />
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
              <button
                onClick={handleReset}
                className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-5 text-sm border-yellow-600 bg-yellow-600 text-white hover:text-white hover:bg-yellow-500 hover:border-yellow-500 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 active:bg-yellow-700 active:border-yellow-700 dark:focus:ring-yellow-400 dark:focus:ring-opacity-90"
              >
                <ArrowUturnRightIcon className="inline-block w-5 h-5 opacity-50" />
                <span>Reset</span>
              </button>
              <button
                onClick={handleSave}
                className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-5 text-sm border-green-700 bg-green-700 text-white hover:text-white hover:bg-green-600 hover:border-green-600 focus:ring focus:ring-green-400 focus:ring-opacity-50 active:bg-green-700 active:border-blue-700 dark:focus:ring-green-400 dark:focus:ring-opacity-90"
              >
                <PlusIcon className="inline-block w-5 h-5 opacity-50" />
                <span>Save Keyboard</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Meta title="VibeBoard - Design your Keyboard" />
      <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
        <DesignSection
          tempKeyboard={tempKeyboard}
          setTempKeyboard={setTempKeyboard}
        />
      </div>
    </>
  );
}

export default requireAuth(DesignPage);
