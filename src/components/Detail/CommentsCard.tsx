export default function CommentsCard() {
  return (
    <>
      {/* Comments Section: Card Based */}
      <div className=" dark:text-gray-100">
        <div className="max-w-2xl space-y-4 lg:space-y-8">
          {/* Post Comment Form */}
          <div className="flex flex-col overflow-hidden rounded-lg shadow-sm dark:text-gray-100">
            <div className="flex grow space-x-4 p-5">
              <div className="relative w-10 flex-none sm:w-12">
                <img
                  src="https://cdn.tailkit.com/media/placeholders/avatar-iFgRcqHznqg-160x160.jpg"
                  className="relative inline-block w-full rounded-full"
                  alt="User Avatar"
                />
              </div>
              <div className="grow">
                <div className="mb-1 text-sm leading-relaxed">
                  <a
                    href="#"
                    className="font-semibold text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Jose Wagner
                  </a>
                </div>
                <form className="space-y-4">
                  <textarea
                    id="comment"
                    name="comment"
                    rows={2}
                    placeholder="Join the conversation.."
                    className="block text-xs w-full rounded-lg border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                    defaultValue={""}
                  />
                  <button
                    type="submit"
                    className="inline-flex text-xs items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-2 py-1 text-sm font-semibold leading-5 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
                  >
                    <svg
                      className="hi-mini hi-pencil inline-block h-4 w-4 opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                    </svg>
                    <span>Post Comment</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* END Post Comment Form */}

          {/* Comment Card */}
          <div className="flex flex-col overflow-hidden rounded-lg shadow-sm dark:text-gray-100">
            <div className="flex grow space-x-4 p-5">
              <div className="relative w-10 flex-none sm:w-12">
                <img
                  src="https://cdn.tailkit.com/media/placeholders/avatar-mEZ3PoFGs_k-160x160.jpg"
                  className="relative inline-block w-full rounded-full"
                  alt="User Avatar"
                />
              </div>
              <div className="grow">
                <h5 className="flex items-center space-x-1 text-sm leading-relaxed">
                  <a
                    href="#"
                    className="font-semibold text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Lori Grant
                  </a>
                  <span className="opacity-25">•</span>
                  <span className="text-gray-500 dark:text-gray-400">4h</span>
                </h5>
                <p className="mb-1 text-sm leading-relaxed">
                  I just started a new Tailwind CSS based project and I find it
                  very refreshing. Could you suggest any tools to help me out?
                </p>
                <div className="-ml-2 flex items-center">
                  <button
                    type="button"
                    className="inline-block rounded-full px-2 py-0.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  >
                    Like
                  </button>
                  <button
                    type="button"
                    className="inline-block rounded-full px-2 py-0.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  >
                    Reply
                  </button>
                </div>
                <div className="-ml-4 mt-4 space-y-4 sm:ml-0">
                  <div className="flex space-x-4">
                    <div className="relative w-10 flex-none sm:w-12">
                      <img
                        src="https://cdn.tailkit.com/media/placeholders/avatar-iFgRcqHznqg-160x160.jpg"
                        className="relative inline-block w-full rounded-full"
                        alt="User Avatar"
                      />
                    </div>
                    <div className="grow">
                      <h5 className="flex items-center space-x-1 text-sm leading-relaxed">
                        <a
                          href="#"
                          className="font-semibold text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Brian Cruz
                        </a>
                        <span className="opacity-25">•</span>
                        <span className="text-gray-500 dark:text-gray-400">
                          2h
                        </span>
                      </h5>
                      <p className="mb-1 text-sm leading-relaxed">
                        Check out Tailkit, a UI component library, that can help
                        you build your user interface.
                      </p>
                      <div className="-ml-2 flex items-center">
                        <button
                          type="button"
                          className="inline-block rounded-full px-2 py-0.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        >
                          Like
                        </button>
                        <button
                          type="button"
                          className="inline-block rounded-full px-2 py-0.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="relative w-10 flex-none sm:w-12">
                      <img
                        src="https://cdn.tailkit.com/media/placeholders/avatar-BGz8vO3pK8k-160x160.jpg"
                        className="relative inline-block w-full rounded-full"
                        alt="User Avatar"
                      />
                    </div>
                    <div className="grow">
                      <h5 className="flex items-center space-x-1 text-sm leading-relaxed">
                        <a
                          href="#"
                          className="font-semibold text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Sara Fields
                        </a>
                        <span className="opacity-25">•</span>
                        <span className="text-gray-500 dark:text-gray-400">
                          3h
                        </span>
                      </h5>
                      <p className="mb-1 text-sm leading-relaxed">
                        I second that, it is a great toolkit for any Tailwind
                        CSS based project!
                      </p>
                      <div className="-ml-2 flex items-center">
                        <button
                          type="button"
                          className="inline-block rounded-full px-2 py-0.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        >
                          Like
                        </button>
                        <button
                          type="button"
                          className="inline-block rounded-full px-2 py-0.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END Comment Card */}

          {/* Comment Card */}
          <div className="flex flex-col overflow-hidden rounded-lg shadow-sm dark:text-gray-100">
            <div className="flex grow space-x-4 p-5">
              <div className="relative w-10 flex-none sm:w-12">
                <img
                  src="https://cdn.tailkit.com/media/placeholders/avatar-n4KewLKFOZw-160x160.jpg"
                  className="relative inline-block w-full rounded-full"
                  alt="User Avatar"
                />
              </div>
              <div className="grow">
                <h5 className="flex items-center space-x-1 text-sm leading-relaxed">
                  <a
                    href="#"
                    className="font-semibold text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Jose Wagner
                  </a>
                  <span className="opacity-25">•</span>
                  <span className="text-gray-500 dark:text-gray-400">10h</span>
                </h5>
                <p className="mb-1 text-sm leading-relaxed">
                  Tailwind CSS is a nice utility based framework! I will make
                  sure to use it in my upcoming project.
                </p>
                <div className="-ml-2 flex items-center">
                  <button
                    type="button"
                    className="inline-block rounded-full px-2 py-0.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  >
                    Like
                  </button>
                  <button
                    type="button"
                    className="inline-block rounded-full px-2 py-0.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  >
                    Reply
                  </button>
                </div>
                <div className="-ml-4 mt-4 space-y-4 sm:ml-0">
                  <div className="flex space-x-4">
                    <div className="relative w-10 flex-none sm:w-12">
                      <img
                        src="https://cdn.tailkit.com/media/placeholders/avatar-c_GmwfHBDzk-160x160.jpg"
                        className="relative inline-block w-full rounded-full"
                        alt="User Avatar"
                      />
                    </div>
                    <div className="grow">
                      <h5 className="flex items-center space-x-1 text-sm leading-relaxed">
                        <a
                          href="#"
                          className="font-semibold text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Brian Cruz
                        </a>
                        <span className="opacity-25">•</span>
                        <span className="text-gray-500 dark:text-gray-400">
                          9h
                        </span>
                      </h5>
                      <p className="mb-1 text-sm leading-relaxed">
                        It seems interesting, I will definitely check it out!
                      </p>
                      <div className="-ml-2 flex items-center">
                        <button
                          type="button"
                          className="inline-block rounded-full px-2 py-0.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        >
                          Like
                        </button>
                        <button
                          type="button"
                          className="inline-block rounded-full px-2 py-0.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END Comment Card */}
        </div>
      </div>
      {/* END Comments Section: Card Based */}
    </>
  );
}
