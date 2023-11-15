import Key from "./Key.tsx";
import { KeyProps } from "./types";

interface KeyBoardProps {
  keys: KeyProps[];
  variant?: string;
  shape?: string;
  layout?: string;
}
export default function Keyboard({
  keys,
  variant = "black",
  shape = "angular",
  layout = "65_keys",
}: KeyBoardProps) {
  const colorVariants = {
    black: {
      border: "bg-gray-800/70",
      innerFrame: "bg-gray-900",
    },
    white: {
      border: "bg-gray-300/70",
      innerFrame: "bg-gray-900",
    },
    red: {
      border: "bg-red-600/70",
      innerFrame: "bg-gray-900",
    },
    orange: {
      border: "bg-orange-600/70",
      innerFrame: "bg-gray-900",
    },
    yellow: {
      border: "bg-yellow-600/70",
      innerFrame: "bg-gray-900",
    },
    green: {
      border: "bg-green-600/70",
      innerFrame: "bg-gray-900",
    },
    blue: {
      border: "bg-blue-600/70",
      innerFrame: "bg-gray-900",
    },
    purple: {
      border: "bg-purple-600/70",
      innerFrame: "bg-gray-900",
    },
  };

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
      className={`${colorVariants[variant].border} ${
        shape == "rounded" ? "rounded-xl" : ""
      }
      p-3 border-2 border-t-gray-400 dark:border-t-gray-800 border-x-gray-400 
      dark:border-x-gray-900 border-b-gray-500 dark:border-b-gray-950 shadow-lg`}
    >
      {/*Keyboard Inner Frame*/}
      <div
        className={`p-0.5 ${colorVariants[variant].innerFrame} rounded overflow-hidden`}
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
              <Key key={key.key_id} keyInfo={key} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
