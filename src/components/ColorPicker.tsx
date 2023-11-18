import React from "react";
import { colorList } from "../util/colors.ts";

export default function ColorPicker({ selectedColor, setSelectedColor }) {
  return (
    <div className="grid gap-0.5">
      {colorList.map((colorGroup, index) => (
        <div
          key={index}
          className="grid grid-cols-7 gap-0.5 place-items-center"
        >
          {colorGroup.map((color) => (
            <button
              key={color}
              type="button"
              className={`h-9 w-9 bg-${color} ${
                selectedColor === color ? "ring-2 ring-red-500" : ""
              }`}
              onClick={() => setSelectedColor(color)}
            ></button>
          ))}
        </div>
      ))}
    </div>
  );
}
