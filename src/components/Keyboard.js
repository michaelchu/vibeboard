import React from "react";
import { keys } from "../util/keys";
import { fullSizeLayout } from "../util/keyboard_layout";

const Key = ({ color_code, key_name, size }) => (
  <div
    className={`bg-gray-700 border border-gray-500 h-10 flex justify-center items-center mx-1 my-1 text-lg font-bold ${size}`}
    style={{ color: color_code }}
  >
    {key_name}
  </div>
);

const Keyboard = () => {
  // Convert keys array to dictionary for efficient key lookups
  const keysDict = keys.reduce(
    (acc, key) => ({ ...acc, [key.key_id]: key }),
    {},
  );

  return (
    <div className="bg-gray-800 p-10">
      {fullSizeLayout.map((row, i) => (
        <div key={i} className="flex justify-between">
          {row.map(
            (key_id) =>
              keysDict[key_id] && <Key key={key_id} {...keysDict[key_id]} />,
          )}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
