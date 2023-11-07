import React from "react";

const Keyboard2 = ({ keys }) => {
  const keysByRow = keys.reduce((acc, key) => {
    if (!acc[key.row]) {
      acc[key.row] = [];
    }
    acc[key.row].push(key);
    return acc;
  }, {});

  const renderKey = (key) => (
    <div
      key={key.label}
      // className={`h-10 min-w-${key.width} ${key.flexGrow ? "flex-grow" : ""}`}
      className={`h-10 ${key.flexGrow ? "flex-grow" : ""}`}
    >
      <button
        className={`overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center bg-gradient-to-b from-gray-50 to-gray-400 pt-[2px] transition-all duration-75 top-0 active:top-1 w-[${key.width}px]`}
      >
        <div className="w-full h-10 absolute -top-[2px] left-0 flex items-center justify-between blur-sm">
          <div className="h-8 w-8 bg-gray-200 flex-shrink-0 rotate-45 -left-5 relative"></div>
          <div className="h-8 w-8 bg-gray-200 flex-shrink-0 rotate-45 -right-5 relative"></div>
        </div>
        <div className="relative h-7 border border-gray-100 flex-grow bg-gradient-to-b from-gray-200 to-gray-50 flex pt-1 pl-1 rounded">
          <span className="leading-none text-xs">{key.label}</span>
        </div>
      </button>
    </div>
  );

  return (
    <main className="min-w-full bg-gray-100 text-gray-700 min-h-screen flex items-center justify-center">
      <div className="bg-gray-700 p-3 rounded-lg border-2 border-t-gray-600 border-x-gray-800 border-b-gray-900 shadow-lg">
        <div className="p-1 bg-gray-900 rounded overflow-hidden">
          {Object.keys(keysByRow).map((rowNumber) => (
            <div
              key={rowNumber}
              className={`flex space-x-[2px] ${
                rowNumber !== "1" ? "mt-[2px]" : ""
              }`}
            >
              {keysByRow[rowNumber].map(renderKey)}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Keyboard2;
