import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";
import Keyboard from "../Keyboard/Keyboard.tsx";
import { mac_65 } from "../Keyboard/layouts/mac_65.ts";
import { win_65 } from "../Keyboard/layouts/win_65.ts";
import DesignMobileFilter from "./DesignMobileFilter.tsx";
import { FilterSection } from "./types.ts";
import DesignFilter from "./DesignFilter.tsx";

export default function DesignSection({ tempKeyboard, setTempKeyboard }) {
  const [color, setColor] = useState("white");
  const [shape, setShape] = useState("angular");
  const [platform, setPlatform] = useState("win");
  const [layout, setLayout] = useState("65_keys");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const directory = {
    win: {
      "40_keys": win_65,
      "40_ortho": win_65,
      "50_ortho": win_65,
      "60_keys": win_65,
      "65_keys": win_65,
      "75_keys": win_65,
      "80_keys": win_65,
      "100_keys": win_65,
    },
    mac: {
      "40_keys": mac_65,
      "40_ortho": mac_65,
      "50_ortho": mac_65,
      "60_keys": mac_65,
      "65_keys": mac_65,
      "75_keys": mac_65,
      "80_keys": mac_65,
      "100_keys": mac_65,
    },
  };

  const handleSetLayout = (layout: string) => {
    setLayout(layout);
    setTempKeyboard(directory[platform][layout]);
  };

  const handleSetPlatform = (platform: string) => {
    setPlatform(platform);
    setTempKeyboard(directory[platform][layout]);
  };

  const filters: FilterSection[] = [
    {
      id: "layout",
      name: "Layout",
      defaultOpen: true,
      onChange: handleSetLayout,
      options: [
        { value: "40_keys", label: "40%" },
        { value: "40_ortho", label: "40% Ortho" },
        { value: "50_ortho", label: "50% Ortho" },
        { value: "60_keys", label: "60%" },
        { value: "65_keys", label: "65%", checked: true },
        { value: "75_keys", label: "75%" },
        { value: "80_keys", label: "80%" },
        { value: "100_keys", label: "90%" },
      ],
    },
    {
      id: "platform",
      name: "Platform",
      onChange: handleSetPlatform,
      options: [
        { value: "win", label: "Windows", checked: true },
        { value: "mac", label: "Mac OS" },
      ],
    },
    {
      id: "case_color",
      name: "Case Color",
      onChange: setColor,
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
    {
      id: "case_style",
      name: "Case Style",
      onChange: setShape,
      options: [
        { value: "angular", label: "Angular", checked: true },
        { value: "rounded", label: "Rounded" },
      ],
    },
  ];

  return (
    <div>
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
        <div className="mt-10 lg:col-span-2 lg:mt-0 xl:col-span-3 bg-gray-700/80">
          <div className="flex items-center justify-center text-gray-400 w-full h-full">
            <main className="w-full h-full flex items-center justify-center">
              <Keyboard keys={tempKeyboard} variant={color} shape={shape} />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
