import React from "react";
import { fullSizeLayout } from "../util/keyboard_layout";
import PropTypes from 'prop-types';


function Keyboard({ layout = "104 Keys", keysData, fontSize = 10 }) {
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
  const keysById = Object.fromEntries(keysData.map(key => [key.key_id, key]));

  return (
    <div className="flex flex-col bg-gray-800 p-4 rounded-lg w-full">
      <h2 className="text-lg text-gray-200 mb-2">{layout}</h2>
      {layoutData.map((row, rowIndex) => (
        <div className="grid grid-cols-24 gap-2" key={rowIndex}>
          {row.map((keyLayout, index) => {
            const key = keysById[keyLayout.key_id];
            const isGap = keyLayout.key_id === 999;

            // Use size attribute to control col-span and row-span
            const colSpan = isNaN(keyLayout.size) ? 1 : parseInt(keyLayout.size);
            const rowSpan = isNaN(keyLayout.size) ? 1 : parseInt(keyLayout.size);

            return (
              <button
                className={`key col-span-${colSpan} row-span-${rowSpan} ${isGap ? 'invisible' : 'bg-gray-500 text-gray-200'} p-2 rounded w-full`}
                style={{ fontSize: `${fontSize}px` }}
                key={`${keyLayout.key_id}-${index}`}
              >
                {keyLayout.key_name}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

Keyboard.propTypes = {
  layout: PropTypes.string,
  keysData: PropTypes.array.isRequired,
  fontSize: PropTypes.number,
};

export default Keyboard;