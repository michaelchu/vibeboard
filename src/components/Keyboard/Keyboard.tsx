import React, { forwardRef } from "react";
import Key from "./Key.tsx";
import { KeyBoardComponentProps, KeyProps } from "../../util/types.ts";
import { keysByRow } from "../../util/helpers.ts";

/*
Keyboard component renders a keyboard layout based on the provided keys array.

Props:

- keys: Array of KeyProps objects, each defining a key on the keyboard
- variant: Color variant - one of 'black', 'white', 'red', etc. Sets border and inner frame colors
- shape: 'angular' (default) or 'rounded' - sets border radius

Functionality:

- Keys array is grouped by row using the 'row' property on each key
- Keys in each row are rendered using the Key component
- Color variants set the colors for the keyboard border and inner frame
- Shape prop sets border radius for rounded corners

- colorVariants object maps variant prop to tailwind classes for styling
- keysByRow groups keys by row for rendering
- Keys are rendered in rows using the Key component
- Tailwind utilities used for styling based on variant and shape

Usage:

<Keyboard
  keys={keys}
  variant="black"
  shape="rounded"
/>

*/

function Keyboard(
  {
    keys,
    color,
    keyCapColor,
    shape,
    selectedColor,
    handleOnClick,
  }: KeyBoardComponentProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const colorVariants = {
    black: {
      border: "bg-gray-800",
      innerFrame: "bg-gray-900",
      keyCapVariant: "dark",
    },
    white: {
      border: "bg-gray-300",
      innerFrame: "bg-gray-900",
      keyCapVariant: "light",
    },
    red: {
      border: "bg-red-600/70",
      innerFrame: "bg-gray-900",
      keyCapVariant: "dark",
    },
    orange: {
      border: "bg-orange-600",
      innerFrame: "bg-gray-900",
      keyCapVariant: "dark",
    },
    yellow: {
      border: "bg-yellow-500",
      innerFrame: "bg-gray-900",
      keyCapVariant: "dark",
    },
    green: {
      border: "bg-green-600/70",
      innerFrame: "bg-gray-900",
      keyCapVariant: "dark",
    },
    blue: {
      border: "bg-blue-600/70",
      innerFrame: "bg-gray-900",
      keyCapVariant: "dark",
    },
    purple: {
      border: "bg-purple-600/70",
      innerFrame: "bg-gray-900",
      keyCapVariant: "dark",
    },
  };

  const kbr = keysByRow(keys);

  return (
    // Keyboard Border
    <div
      ref={ref}
      className={`${colorVariants[color].border} ${
        shape == "rounded" ? "rounded-xl" : ""
      }
      p-3 border-2 border-t-gray-400 dark:border-t-gray-700/50 border-x-gray-400 
      dark:border-x-gray-900/70 border-b-gray-500 dark:border-b-gray-950/70 shadow-lg`}
    >
      {/*Keyboard Inner Frame*/}
      <div
        className={`p-0.5 ${colorVariants[color].innerFrame} rounded overflow-hidden`}
      >
        {/*This splits the array into rows to process based on the row prop in keys*/}
        {Object.keys(kbr).map((rowNumber: string) => (
          <div
            key={rowNumber}
            className={`flex space-x-[2px] ${
              rowNumber !== "1" ? "mt-[2px]" : ""
            }`}
          >
            {kbr[rowNumber].map((key: KeyProps) => (
              <Key
                key={key.key_id}
                keyInfo={key}
                keyCapVariant={
                  keyCapColor || colorVariants[color].keyCapVariant
                }
                selectedColor={selectedColor}
                handleOnClick={handleOnClick}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default forwardRef(Keyboard);
