import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Pagination() {
  return (
    <>
      {/* Pagination: Simple */}
      <div className="text-center dark:text-gray-100">
        {/* Visible on mobile */}
        <nav className="flex sm:hidden">
          <a
            href="#"
            className="inline-flex justify-center items-center space-x-2 rounded-lg border font-semibold px-4 py-2 leading-6 hover:z-1 focus:z-1 active:z-1 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            <ChevronLeftIcon className="hi-mini hi-chevron-left inline-block w-5 h-5 -mx-1.5" />
          </a>
          <div className="flex items-center grow justify-center px-2 sm:px-4">
            <span>
              Page <span className="font-semibold">1</span> of{" "}
              <span className="font-semibold">20</span>
            </span>
          </div>
          <a
            href="#"
            className="inline-flex justify-center items-center space-x-2 rounded-lg border font-semibold px-4 py-2 leading-6 hover:z-1 focus:z-1 active:z-1 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            <ChevronRightIcon className="hi-mini hi-chevron-right inline-block w-5 h-5 -mx-1.5" />
          </a>
        </nav>
        {/* END Visible on mobile */}

        {/* Visible on desktop */}
        <nav className="hidden sm:inline-flex">
          <a
            href="#"
            className="inline-flex justify-center items-center space-x-2 rounded-l-lg border font-semibold px-4 py-2 -mr-px leading-6 hover:z-1 focus:z-1 active:z-1 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            <ChevronLeftIcon className="hi-mini hi-chevron-left inline-block w-5 h-5 -mx-1.5" />
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center space-x-2 border font-semibold px-4 py-2 -mr-px leading-6 hover:z-1 focus:z-1 active:z-1 border-gray-200 bg-gray-100 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-700/75 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            1
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center space-x-2 border font-semibold px-4 py-2 -mr-px leading-6 hover:z-1 focus:z-1 active:z-1 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            2
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center space-x-2 border font-semibold px-4 py-2 -mr-px leading-6 hover:z-1 focus:z-1 active:z-1 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            3
          </a>
          <div className="text-gray-800 bg-white border border-gray-200 flex items-center justify-center px-4 -mr-px dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700">
            ...
          </div>
          <a
            href="#"
            className="inline-flex justify-center items-center space-x-2 border font-semibold px-4 py-2 -mr-px leading-6 hover:z-1 focus:z-1 active:z-1 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            19
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center space-x-2 border font-semibold px-4 py-2 -mr-px leading-6 hover:z-1 focus:z-1 active:z-1 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            20
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center space-x-2 rounded-r-lg border font-semibold px-4 py-2 leading-6 hover:z-1 focus:z-1 active:z-1 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            <ChevronRightIcon className="hi-mini hi-chevron-right inline-block w-5 h-5 -mx-1.5" />
          </a>
        </nav>
        {/* END Visible on desktop */}
      </div>
      {/* END Pagination: Simple */}
    </>
  );
}
