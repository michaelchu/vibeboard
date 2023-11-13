export default function CardWithHeading() {
  return (
    <>
      {/* Card Headings: Title with Subtitle and Action */}
      <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
        {/* Card Header */}
        <div className="py-4 px-5 bg-gray-50 space-y-3 sm:space-y-0 sm:text-left sm:flex sm:justify-between sm:items-center dark:bg-gray-900/50">
          <div>
            <h3 className="font-semibold mb-1">Sample Keyboard Title</h3>
          </div>
          {/*<div>*/}
          {/*  <button*/}
          {/*    type="button"*/}
          {/*    className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"*/}
          {/*  >*/}
          {/*    <svg*/}
          {/*      className="hi-mini hi-star inline-block w-5 h-5"*/}
          {/*      xmlns="http://www.w3.org/2000/svg"*/}
          {/*      viewBox="0 0 20 20"*/}
          {/*      fill="currentColor"*/}
          {/*      aria-hidden="true"*/}
          {/*    >*/}
          {/*      <path*/}
          {/*        fill-rule="evenodd"*/}
          {/*        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"*/}
          {/*        clip-rule="evenodd"*/}
          {/*      />*/}
          {/*    </svg>*/}
          {/*    <span>{Math.floor(Math.random() * (9999 - 100 + 1)) + 100}</span>*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
        {/* END Card Header */}

        {/* Card Body */}
        <div className="grow">
          {/* Placeholder */}
          <img
            alt={"#"}
            src="https://buanudtpjnjjwopvttso.supabase.co/storage/v1/object/sign/keyboards/sample_keyboard.JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJrZXlib2FyZHMvc2FtcGxlX2tleWJvYXJkLkpQRyIsImlhdCI6MTY5OTg0OTc4MiwiZXhwIjoxNzMxMzg1NzgyfQ.PEOcHbHMvX99yQ_JWaak-5D9S90_ZVNrQNdx6TKa5qY&t=2023-11-13T04%3A29%3A43.029Z"
          />
        </div>
        {/* Card Body */}

        {/* Card Footer */}
        <div className="py-4 px-5 bg-gray-50 space-y-3 sm:space-y-0 sm:text-left sm:flex sm:justify-between sm:items-center dark:bg-gray-900/50">
          <h4 className="mb-1 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            consequat turpis nec diam pretium, in consequat turpis lobortis.
          </h4>
        </div>
        <div className="py-2 px-5 bg-gray-50 grid grid-cols-3 text-center dark:bg-gray-900/70">
          <dl className="py-2 space-y-1">
            <dt className="text-lg font-bold">15</dt>
            <dd className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Likes
            </dd>
          </dl>
          <dl className="py-2 space-y-1">
            <dt className="text-lg font-bold">8.9k</dt>
            <dd className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Comments
            </dd>
          </dl>
          <dl className="py-2 space-y-1">
            <dt className="text-lg font-bold">1.6k</dt>
            <dd className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Board Views
            </dd>
          </dl>
        </div>
        {/* END Card Footer */}
      </div>
      {/* END Card Headings: Title with Subtitle and Action */}
    </>
  );
}
