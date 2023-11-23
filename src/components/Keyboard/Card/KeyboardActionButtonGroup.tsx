import {
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function KeyboardActionButtonGroup({
  route,
  id,
  setIsModalOpen,
  setSelectedKeyboard,
}: {
  route: string;
  id: string;
  setIsModalOpen?: (state: boolean) => void;
  setSelectedKeyboard?: (id: string) => void;
}) {
  return (
    <>
      {route === "/dashboard" && setIsModalOpen && setSelectedKeyboard ? (
        <div className="isolate inline-flex rounded-md shadow-sm">
          <Link
            to={`/keyboard/edit/${id}`}
            className="relative inline-flex items-center rounded-l-md bg-gray-700 px-3 py-2 text-gray-300 ring-1 ring-inset ring-gray-900 hover:bg-gray-600 focus:z-10"
          >
            <PencilSquareIcon className={"w-5 h-5"} />
          </Link>
          <Link
            to={"#"}
            type="button"
            onClick={() => {
              setSelectedKeyboard(id);
              setIsModalOpen(true);
            }}
            className="relative -ml-px inline-flex items-center rounded-r-md bg-gray-700 px-3 py-2 text-red-500 ring-1 ring-inset ring-gray-900 hover:bg-gray-600 focus:z-10"
          >
            <TrashIcon className={"w-5 h-5"} />
          </Link>
        </div>
      ) : (
        <button
          type="button"
          className="inline-flex justify-center items-center space-x-3 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
        >
          <HeartIcon className="h-5 w-5" />
          <span>{Math.floor(Math.random() * (9998 - 100 + 1)) + 100}</span>
        </button>
      )}
    </>
  );
}
