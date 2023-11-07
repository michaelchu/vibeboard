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
      <h2 className="text-lg text-gray-200 mb-1">{layout}</h2>
      <div className="grid grid-cols-25 grid-rows-6 gap-1">
        {layoutData.map((row, rowIndex) => (
          <>
            {row.map((keyLayout, index) => {
              const key = keysById[keyLayout.key_id];
              const isGap = keyLayout.key_id === 999;

              const colSpan = `col-span-${keyLayout.col_span}`;

              return (
                <div
                  key={`${keyLayout.key_id}-${index}`}
                  className={`${colSpan} ${
                    keyLayout.row_span ? `row-span-${keyLayout.row_span}` : ""
                  } ${
                    isGap ? "invisible" : "bg-gray-700 text-gray-200"
                  } p-2 rounded w-full font-extrabold text-center`}
                  style={{
                    fontSize: `${fontSize}px`,
                    color: key?.color_code,
                    textAlign: "center",
                  }}
                >
                  {keyLayout.key_name}
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
