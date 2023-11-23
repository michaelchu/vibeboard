import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import Keyboard from "../Keyboard/Keyboard.tsx";
import DesignMobileFilter from "./DesignMobileFilter.tsx";
import { FilterSection, KeyProps, ThemeData } from "../../util/types.ts";
import DesignFilter from "./DesignFilter.tsx";
import ColorPicker from "../ColorPicker.tsx";
import { directory } from "../Keyboard/directory.ts";

export default function DesignSection({
  themeData,
  tempKeyboard,
  setTempKeyboard,
  keyboardRef,
}: {
  themeData: ThemeData;
  tempKeyboard: KeyProps[];
  setTempKeyboard: (keyboard: KeyProps[]) => void;
  keyboardRef: React.MutableRefObject<null>;
  isLoading: boolean;
}) {
  const [newThemeData, setNewThemeData] = useState(themeData);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("red-500");

  const handleSetLayout = (layout: string) => {
    setNewThemeData({ ...newThemeData, ...{ keyboardLayout: layout } });
    setTempKeyboard(directory[newThemeData.platform][layout]);
  };

  const handleSetPlatform = (platform: string) => {
    setNewThemeData({ ...newThemeData, ...{ platform: platform } });
    setTempKeyboard(directory[platform][newThemeData.platform]);
  };

  const handleOnClick = (key_id: string) => {
    const updatedKeys = tempKeyboard.map((k) =>
      k.key_id === key_id
        ? { ...k, ...{ key_id, key_label_color: selectedColor } }
        : k,
    );
    setTempKeyboard(updatedKeys);
  };

  const filters: FilterSection[] = [
    {
      id: "color",
      name: "Color Picker",
      element: (
        <ColorPicker
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      ),
    },
    {
      id: "layout",
      name: "Layout",
      onChange: handleSetLayout,
      defaultValue: newThemeData.keyboardSize,
      options: [
        { value: "40_keys", label: "40%" },
        { value: "40_ortho", label: "40% Ortho" },
        { value: "50_ortho", label: "50% Ortho" },
        { value: "60_keys", label: "60%" },
        { value: "65_keys", label: "65%" },
        { value: "75_keys", label: "75%" },
        { value: "80_keys", label: "80%" },
        { value: "100_keys", label: "90%" },
      ],
    },
    {
      id: "platform",
      name: "Platform",
      onChange: handleSetPlatform,
      defaultValue: newThemeData.platform,
      options: [
        { value: "win", label: "Windows" },
        { value: "mac", label: "Mac OS" },
      ],
    },
    {
      id: "case_color",
      name: "Case Color",
      onChange: (keyboardColor: string) =>
        setNewThemeData({ ...newThemeData, ...{ keyboardColor } }),
      defaultValue: newThemeData.keyboardColor,
      options: [
        { value: "white", label: "White" },
        { value: "red", label: "Red" },
        { value: "orange", label: "Orange" },
        { value: "yellow", label: "Yellow" },
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" },
        { value: "purple", label: "Purple" },
        { value: "black", label: "Black" },
      ],
    },
    {
      id: "case_style",
      name: "Case Style",
      onChange: (keyboardShape: string) =>
        setNewThemeData({ ...newThemeData, ...{ keyboardShape } }),
      defaultValue: newThemeData.keyboardShape,
      options: [
        { value: "angular", label: "Angular" },
        { value: "rounded", label: "Rounded" },
      ],
    },
    {
      id: "key_cap_style",
      name: "Key Cap Color",
      onChange: (keyCapColor: string) =>
        setNewThemeData({ ...newThemeData, ...{ keyCapColor } }),
      defaultValue: newThemeData.keyCapColor,
      options: [
        { value: "dark", label: "Dark" },
        { value: "darker", label: "Darker" },
        { value: "light", label: "Light" },
      ],
    },
  ];

  return (
    <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
      {/* Mobile filter dialog */}
      <DesignMobileFilter
        filters={filters}
        setMobileFiltersOpen={setMobileFiltersOpen}
        mobileFiltersOpen={mobileFiltersOpen}
      />

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
          <div className="hidden lg:block p-5 bg-gray-800/80">
            <DesignFilter filters={filters} />
          </div>
        </aside>

        {/* Product grid */}
        <div className="mt-10 sm:col-span-3 lg:mt-0 lg:bg-gray-700/80">
          <div className="flex items-center justify-center text-gray-400 w-full h-full">
            <main className="w-full h-full flex items-center justify-center">
              <Keyboard
                ref={keyboardRef}
                keys={tempKeyboard}
                color={newThemeData.keyboardColor}
                shape={newThemeData.keyboardShape}
                keyCapColor={newThemeData.keyCapColor}
                selectedColor={selectedColor}
                handleOnClick={handleOnClick}
              />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
