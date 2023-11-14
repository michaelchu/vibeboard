import supabase from "../../util/supabase.ts";
import { StarIcon } from "@heroicons/react/24/solid";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 4,
    min: 1,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export default function KeyboardCard({ keyboard }) {
  const { data } = supabase.storage
    .from("keyboards")
    .getPublicUrl(keyboard.image_path);

  return (
    <>
      {/* Card Headings: Title with Subtitle and Action */}
      <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-101 dark:bg-gray-800">
        {/* Card Header */}
        <div className="py-4 px-5 bg-gray-50 space-y-3 sm:space-y-0 sm:text-left sm:flex sm:justify-between sm:items-center dark:bg-gray-800/70">
          <div>
            <h2 className="font-semibold text-lg mb-1">
              {lorem.generateWords(2)}
            </h2>
          </div>
          <div className={"hidden md:block"}>
            <button
              type="button"
              className="inline-flex justify-center items-center space-x-3 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
            >
              <StarIcon className="h-5 w-5" />
              <span>{Math.floor(Math.random() * (9998 - 100 + 1)) + 100}</span>
            </button>
          </div>
        </div>
        {/* END Card Header */}

        {/* Card Body */}
        <div className="">
          {/* Placeholder */}
          {data && <img alt={"#"} src={data.publicUrl} />}
        </div>
        {/* Card Body */}

        {/* Card Footer */}
        <div className="flex-1 flex py-4 px-5 bg-gray-50 space-y-3 sm:space-y-0 sm:text-left sm:flex sm:justify-between sm:items-center dark:bg-gray-900/30">
          <h3 className="mb-1 text-gray-500 overflow-ellipsis">
            {lorem.generateParagraphs(1)}
          </h3>
        </div>
        <div className="py-3 px-5 bg-gray-50 grid grid-cols-3 text-center dark:bg-gray-900/60">
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
              {keyboard.keyboard_layout}
            </dt>
            <dd className="text-xs font-semibold uppercase tracking-wider text-gray-501 dark:text-gray-400">
              Layout
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
