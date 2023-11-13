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
            <svg
              className="hi-mini hi-chevron-left inline-block w-5 h-5 -mx-1.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
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
            <svg
              className="hi-mini hi-chevron-right inline-block w-5 h-5 -mx-1.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </nav>
        {/* END Visible on mobile */}

        {/* Visible on desktop */}
        <nav className="hidden sm:inline-flex">
          <a
            href="#"
            className="inline-flex justify-center items-center space-x-2 rounded-l-lg border font-semibold px-4 py-2 -mr-px leading-6 hover:z-1 focus:z-1 active:z-1 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
          >
            <svg
              className="hi-mini hi-chevron-left inline-block w-5 h-5 -mx-1.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
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
            <svg
              className="hi-mini hi-chevron-right inline-block w-5 h-5 -mx-1.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </nav>
        {/* END Visible on desktop */}
      </div>
      {/* END Pagination: Simple */}
    </>
  );
}
