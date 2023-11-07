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
      className={`h-10 min-w-10 ${key.flexGrow ? "flex-grow" : ""}`}
    >
      <button
        className={`overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center bg-gradient-to-b from-purple-50 to-purple-400 pt-[2px] transition-all duration-75 top-0 active:top-1 w-${key.width}`}
      >
        <div className="w-full h-10 absolute -top-[2px] left-0 flex items-center justify-between blur-sm">
          <div className="h-8 w-8 bg-purple-200 flex-shrink-0 rotate-45 -left-5 relative"></div>
          <div className="h-8 w-8 bg-purple-200 flex-shrink-0 rotate-45 -right-5 relative"></div>
        </div>
        <div className="relative h-7 border border-purple-100 flex-grow bg-gradient-to-b from-purple-200 to-purple-50 flex pt-1 pl-1 rounded">
          <span className="leading-none">{key.label}</span>
        </div>
      </button>
    </div>
  );

  return (
    <main className="min-w-full bg-purple-500 text-orange-700 text-xs min-h-screen flex items-center justify-center">
      <div className="bg-purple-700 p-3 rounded-lg border-2 border-t-purple-600 border-x-purple-800 border-b-purple-900 shadow-lg">
        <div className="p-1 bg-purple-900 rounded overflow-hidden">
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
