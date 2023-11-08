import { KeyProps } from "./types";

export default function Key({
  keyInfo,
  darkMode,
}: {
  keyInfo: KeyProps;
  darkMode: Boolean;
}) {
  return (
    <div
      key={keyInfo.label}
      className={`h-10 ${keyInfo.width} ${keyInfo.flexGrow ? "flex-grow" : ""}`}
    >
      <button
        className={`overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center ${
          darkMode ? "bg-gray-900" : "bg-gradient-to-b from-gray-50 to-gray-400"
        }  pt-[2px] transition-all duration-75 top-0 active:top-1 w-full`}
      >
        <div className="w-full h-10 absolute -top-[2px] left-0 flex items-center justify-between blur-sm">
          <div
            className={`h-8 w-8 ${
              darkMode ? "bg-gray-800" : "bg-gray-200"
            } flex-shrink-0 rotate-45 -left-5 relative`}
          ></div>
          <div
            className={`h-8 w-8 ${
              darkMode ? "bg-gray-800" : "bg-gray-200"
            } flex-shrink-0 rotate-45 -right-5 relative`}
          ></div>
        </div>
        <div
          className={`relative h-7 border ${
            darkMode ? "border-gray-900" : "border-gray-100"
          } flex-grow ${
            darkMode
              ? "bg-gray-800"
              : "bg-gradient-to-b from-gray-200 to-gray-50"
          } flex pt-1 pl-1 rounded`}
        >
          <span
            className={`leading-none ${
              keyInfo.font_size ? keyInfo.font_size : "text-[14px]"
            } font-semibold 
          ${darkMode ? "text-orange-400" : "text-gray-500"}`}
          >
            {keyInfo.label}
          </span>
        </div>
      </button>
    </div>
  );
}
