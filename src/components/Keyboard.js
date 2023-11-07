import React from "react";
import { fullSizeLayout } from "../keyboards/full_size_layout";
import PropTypes from "prop-types";

function Keyboard({ layout = "104 Keys", keysData, fontSize = 9 }) {
  let layoutData;
  switch (layout) {
    case "104 Keys":
      layoutData = fullSizeLayout;
      break;
    case "Compact":
      break;
    default:
      layoutData = fullSizeLayout;
  }

  // Create a lookup object to easily find keys by their ID
  const keysById = Object.fromEntries(keysData.map((key) => [key.key_id, key]));

  return (
    <div className="flex flex-col bg-gray-800 p-4 rounded-lg w-full">
      <h2 className="text-lg text-gray-200 mb-2">{layout}</h2>
      <div className="grid grid-cols-25 gap-2 mb-2">
        {layoutData.map((row, rowIndex) => (
          <>
            {row.map((keyLayout, index) => {
              const key = keysById[keyLayout.key_id];
              const isGap = keyLayout.key_id === 999;

              const colSpan = `col-span-${keyLayout.col_span}`;
              const rowSpan = keyLayout.row_span
                ? `row-span-${keyLayout.row_span}`
                : "";

              return (
                <div
                  key={`${keyLayout.key_id}-${index}`}
                  className={`${colSpan} ${rowSpan}`}
                >
                  <button
                    className={`${
                      isGap ? "invisible" : "bg-gray-700 text-gray-200"
                    } p-2 rounded w-full`}
                    style={{
                      fontSize: `${fontSize}px`,
                      color: key?.color_code,
                    }}
                  >
                    {keyLayout.key_name}
                  </button>
                </div>
              );
            })}
          </>
        ))}
      </div>
    </div>
  );
}

Keyboard.propTypes = {
  layout: PropTypes.string,
  keysData: PropTypes.array.isRequired,
  fontSize: PropTypes.number,
};

export default Keyboard;
