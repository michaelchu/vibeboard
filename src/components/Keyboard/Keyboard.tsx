import Key from "./Key.tsx";
import { KeyProps } from "./types";

interface KeyBoardProps {
  keys: KeyProps[];
  darkMode: Boolean;
}
export default function Keyboard({ keys, darkMode }: KeyBoardProps) {
  const keysByRow = keys.reduce<Record<string, KeyProps[]>>((acc, key) => {
    if (!acc[key.row]) {
      acc[key.row] = [];
    }
    acc[key.row].push(key);
    return acc;
  }, {});

  return (
    // Keyboard Border
    <div
      className={`${
        darkMode ? "bg-gray-800" : "bg-gray-300"
      } p-3 rounded-lg border-2 border-t-gray-400 dark:border-t-gray-600 border-x-gray-400 dark:border-x-gray-800 border-b-gray-500 dark:border-b-gray-900 shadow-lg`}
    >
      {/*Keyboard Inner Frame*/}
      <div
        className={`p-0.5 ${
          darkMode ? "bg-gray-900" : "bg-gray-700"
        } rounded overflow-hidden`}
      >
        {/*This splits the array into rows to process based on the row prop in keys*/}
        {Object.keys(keysByRow).map((rowNumber: string) => (
          <div
            key={rowNumber}
            className={`flex space-x-[2px] ${
              rowNumber !== "1" ? "mt-[2px]" : ""
            }`}
          >
            {keysByRow[rowNumber].map((key: KeyProps) => (
              <Key key={key.label} keyInfo={key} darkMode={darkMode} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
