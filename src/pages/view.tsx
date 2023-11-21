import React from "react";
import Meta from "../components/Meta";
import { useRouter } from "../util/router.jsx";
import { useKeyboardByTheme } from "../util/db.jsx";
import Header from "../components/Header.tsx";
import Spinner from "../components/Spinner.tsx";
import supabase from "../util/supabase.ts";
import useMobile from "../hooks/useMobile.ts";
import KeyboardCarousel from "../components/Keyboard/Card/KeyboardCarousel.tsx";
import { lorem } from "../util/helpers.ts";
import { HeartIcon, ShareIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Avatar } from "flowbite-react";

function ViewPage() {
  const isMobile = useMobile();
  const router = useRouter();
  const { data, status } = useKeyboardByTheme(router.query.theme_id);

  if (status === "idle" || status === "loading") {
    return (
      <div>
        <Header />
        <div className="container xl:max-w-7xl mx-auto py-10 px-4 lg:p-8">
          <div className={"w-full h-full"}>
            <Spinner variant={"dark"} />
          </div>
        </div>
      </div>
    );
  }

  const keyboard = data[0];
  const { data: image } = supabase.storage
    .from("keyboards")
    .getPublicUrl(keyboard.image_path);

  return (
    <>
      <Header />
      <Meta title={`VibeBoard - ${keyboard.theme_name}`} />
      {isMobile && image ? (
        <>
          <div className="px-4 py-2 flex items-center space-x-2">
            <Avatar
              img={
                "https://cdn.tailkit.com/media/placeholders/avatar-iFgRcqHznqg-160x160.jpg"
              }
            />
            <div>
              <p className={"text-md"}>{keyboard.theme_name}</p>
              <p className="font-light text-sm text-gray-500">
                {lorem.generateWords(2)}
              </p>
            </div>
          </div>
          <KeyboardCarousel image={image.publicUrl} />

          {/* Action Bar*/}
          <div className="p-4 flex text-left items-center justify-between">
            <div className={"flex justify-between space-x-2"}>
              <button
                type="button"
                className="inline-flex items-center rounded-md justify-center space-x-2 border border-gray-200 bg-white px-2 py-1 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
              >
                <HeartIcon className={"h-6 w-6"} />
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-md justify-center space-x-2 border border-gray-200 bg-white px-2 py-1 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
              >
                <PlusIcon className={"h-6 w-6"} />
              </button>
            </div>
            <button
              type="button"
              className="inline-flex items-center rounded-md justify-center space-x-2 border border-gray-200 bg-white px-2 py-1 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
            >
              <ShareIcon className={"h-6 w-6"} />
            </button>
          </div>

          {/* Description */}
          <div className="px-4 pt-1 flex items-center">
            <h2 className={"text-md"}>{keyboard.description}</h2>
          </div>

          {/* Stats Bar */}
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
        </>
      ) : (
        <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
          <div className="pt-4 grid gap-5 lg:grid-cols-4">
            {/* Keyboard Stats*/}
            <aside>
              <div className="hidden lg:block p-5 bg-gray-800/80"></div>
            </aside>

            {/* Keyboard Image*/}
            <div className="mt-10 sm:col-span-3 lg:mt-0 bg-gray-700/80">
              <div className="flex items-center justify-center text-gray-400 w-full h-full">
                <main className="w-full h-full flex items-center justify-center">
                  <img
                    alt={"#"}
                    src={image.publicUrl}
                    className={"w-full h-full"}
                  />
                </main>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ViewPage;
