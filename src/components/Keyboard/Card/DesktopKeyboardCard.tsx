import supabase from "../../../util/supabase.ts";
import { StarIcon } from "@heroicons/react/24/solid";
import { KeyboardProps } from "../types.ts";
import { lorem } from "../../../util/helpers.ts";
import { useLocation } from "react-router-dom";
import KeyboardActionButtonGroup from "./KeyboardActionButtonGroup.tsx";

/*
DesktopKeyboardCard component renders a card displaying information about a keyboard.

Props:

- keyboard: KeyboardProps object containing data to display

Functionality:

- Fetches keyboard image from Supabase storage
- Renders card with header, body, and footer sections
- Header shows keyboard name and a star button
- Body displays keyboard image
- Footer shows description, size, comments, trend info
- Uses dummy placeholder data for text content

Usage:

<KeyboardCard
  keyboard={keyboard}
/>

*/

export default function DesktopKeyboardCard({
  keyboard,
}: {
  keyboard: KeyboardProps;
}) {
  const location = useLocation();
  const currentRoute = location.pathname;
  const { data } = supabase.storage
    .from("keyboards")
    .getPublicUrl(keyboard.image_path);

  return (
    <>
      {/* Card Headings: Title with Subtitle and Action */}
      <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-101 dark:bg-gray-800">
        {/* Card Header */}
        <div className="py-3 px-5 bg-gray-50 text-left flex justify-between items-center dark:bg-gray-800/70">
          <div>
            <h2 className="font-semibold text-lg mb-1">
              {lorem.generateWords(2)}
            </h2>
          </div>
          <div>
            <KeyboardActionButtonGroup route={currentRoute} />
          </div>
        </div>
        {/* END Card Header */}

        {/* Card Body */}
        <div>
          {data && (
            <img alt={"#"} src={data.publicUrl} className={"w-full h-full"} />
          )}
        </div>
        {/* Card Body */}

        {/* Card Footer */}
        <div className="flex-1 flex py-3 px-5 bg-gray-50 space-y-3 sm:space-y-0 sm:text-left sm:flex sm:justify-between dark:bg-gray-900/30">
          <h3 className="mb-1 text-gray-500">{lorem.generateParagraphs(1)}</h3>
        </div>
        <div className="py-2 px-5 bg-gray-50 grid grid-cols-3 text-center dark:bg-gray-900/60">
          <dl className="py-3 space-y-1">
            <dt className="text-md text-gray-300 font-semibold">
              {keyboard.keyboard_size}
            </dt>
            <dd className="text-xs font-semibold uppercase tracking-wider text-gray-501 dark:text-gray-400">
              Size
            </dd>
          </dl>
          <dl className="py-3 space-y-1">
            <dt className="text-md text-gray-300 font-semibold">
              {Math.floor(Math.random() * (100 - 1 + 1)) + 1}
            </dt>
            <dd className="text-xs font-semibold uppercase tracking-wider text-gray-501 dark:text-gray-400">
              Comments
            </dd>
          </dl>
          <dl className="py-3 space-y-1">
            <dt className="text-md text-gray-300 font-semibold">24/week</dt>
            <dd className="text-xs font-semibold uppercase tracking-wider text-gray-501 dark:text-gray-400">
              Trend
            </dd>
          </dl>
        </div>
        {/* END Card Footer */}
      </div>
      {/* END Card Headings: Title with Subtitle and Action */}
    </>
  );
}
