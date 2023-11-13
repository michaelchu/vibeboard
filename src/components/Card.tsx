export default function CardsApartment() {
  return (
    <>
      {/* Cards: Apartment */}
      <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-950">
        {/* Photo */}
        <img src="https://buanudtpjnjjwopvttso.supabase.co/storage/v1/object/sign/keyboards/sample_keyboard.JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJrZXlib2FyZHMvc2FtcGxlX2tleWJvYXJkLkpQRyIsImlhdCI6MTY5OTg0OTc4MiwiZXhwIjoxNzMxMzg1NzgyfQ.PEOcHbHMvX99yQ_JWaak-5D9S90_ZVNrQNdx6TKa5qY&t=2023-11-13T04%3A29%3A43.029Z" />
        {/* END Photo */}

        {/* Basic Info */}
        <div className="px-5 py-2 grow">
          <h3 className="text-lg text-gray-400 font-semibold mb-2">
            Sample Keyboard Title
          </h3>
        </div>
        {/* END Basic Info */}

        {/* Actions */}
        <div className="py-4 px-5 text-sm bg-gray-50 grid grid-cols-1 sm:grid-cols-2 text-center gap-4 lg:gap-6 dark:text-gray-400 dark:bg-gray-800/50 dark:divide-gray-500">
          <div>
            <a
              href="#"
              className="w-full group inline-flex justify-between items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
            >
              <span>Share</span>
              <svg
                className="hi-mini hi-arrow-right inline-block w-5 h-5 text-gray-400 group-hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="w-full group inline-flex justify-between items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
            >
              <span>More Details</span>
              <svg
                className="hi-mini hi-information-circle inline-block w-5 h-5 text-gray-400 group-hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* END Actions */}
      </div>
      {/* END Cards: Apartment */}
    </>
  );
}
