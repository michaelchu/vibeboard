import { KeyProps } from "../../util/types.ts";

/*
Key component renders a single key on a keyboard.

Props:

- keyInfo: KeyProps object containing data for the key

Functionality:

- Renders a button styled as a key
- Applies styling based on keyInfo properties:
  - font_size for text size
  - key_label_color for text color
- Uses colorVariant object to set colors based on 'variant'
- Adds hover animation to button

Usage:

<Key
  keyInfo={keyInfo}
/>

*/

export default function Key({
  keyInfo,
  keyCapVariant = "darker",
  handleOnClick,
}: {
  keyInfo: KeyProps;
  keyCapVariant?: string;
  selectedColor: string;
  handleOnClick: (key_id: string) => void;
}) {
  const fontSize = keyInfo.font_size ? keyInfo.font_size : "text-[14px]";
  const colorVariant = {
    dark: {
      button: "bg-gray-900 bg-gradient-to-b from-gray-700 to-gray-900",
      leftShadow: "bg-gray-800",
      rightShadow: "bg-gray-800",
      border: "border-gray-800 bg-gray-800",
      textColor: keyInfo.key_label_color
        ? `text-${keyInfo.key_label_color}`
        : "text-white",
    },
    darker: {
      button: "bg-black bg-gradient-to-b from-gray-900 to-gray-950",
      leftShadow: "bg-black",
      rightShadow: "bg-black",
      border: "border-gray-950 bg-gray-950",
      textColor: keyInfo.key_label_color
        ? `text-${keyInfo.key_label_color}`
        : "text-white",
    },
    light: {
      button: "bg-gradient-to-b from-gray-50 to-gray-400",
      leftShadow: "bg-gray-200",
      rightShadow: "bg-gray-200",
      border: "border-gray-100 bg-gradient-to-b from-gray-200 to-gray-50",
      textColor: keyInfo.key_label_color
        ? `text-${keyInfo.key_label_color}`
        : "text-black",
    },
  };

  return (
    <div
      className={`h-10 ${keyInfo.width} ${keyInfo.flexGrow ? "flex-grow" : ""}`}
    >
      <button
        onClick={() => handleOnClick(keyInfo.key_id)}
        className={`${colorVariant[keyCapVariant].button}  
        overflow-hidden relative h-10 px-1 rounded flex justify-center shadow align-center 
        pt-[2px] transition-all duration-75 top-0 active:top-1 w-full`}
      >
        <div className="w-full h-10 absolute -top-[2px] left-0 flex items-center justify-between blur-sm">
          <div
            className={`h-8 w-8 ${colorVariant[keyCapVariant].leftShadow} flex-shrink-0 rotate-45 -left-7 relative`}
          />
          <div
            className={`h-8 w-8 ${colorVariant[keyCapVariant].rightShadow} flex-shrink-0 rotate-45 -right-8 relative`}
          />
        </div>
        <div
          className={`relative h-7 border flex-grow ${colorVariant[keyCapVariant].border} flex pt-1 pl-1 rounded`}
        >
          <span
            className={`leading-none font-semibold ${fontSize} ${colorVariant[keyCapVariant].textColor}`}
          >
            {keyInfo.label}
          </span>
        </div>
      </button>
    </div>
  );
}
