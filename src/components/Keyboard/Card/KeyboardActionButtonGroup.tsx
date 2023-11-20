import {
  PencilSquareIcon,
  StarIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

export default function KeyboardActionButtonGroup({
  route,
}: {
  route: string;
}) {
  return (
    <>
      {route === "/dashboard" ? (
        <div className="space-x-2">
          <button
            type="button"
            className="hover:border-gray-300 hover:text-gray-900 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200"
          >
            <PencilSquareIcon className={"w-5 h-5"} />
          </button>
          <button
            type="button"
            className="hover:border-gray-300 hover:text-gray-900 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200"
          >
            <TrashIcon className={"w-5 h-5"} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="inline-flex justify-center items-center space-x-3 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
        >
          <StarIcon className="h-5 w-5" />
          <span>{Math.floor(Math.random() * (9998 - 100 + 1)) + 100}</span>
        </button>
      )}
    </>
  );
}
