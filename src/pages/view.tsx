import React from "react";
import Meta from "../components/Meta";
import { useRouter } from "../util/router.jsx";
import { useKeyboardByTheme } from "../util/db.jsx";
import Header from "../components/Header.tsx";
import Spinner from "../components/Spinner.tsx";
import supabase from "../util/supabase.ts";

function ViewPage() {
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
      <div className="bg-gray-50 dark:bg-gray-800/50">
        <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
          <div className="text-center sm:text-left sm:flex sm:items-center sm:justify-between py-2 lg:py-0 space-y-2 sm:space-y-0">
            <div className="grow">
              <h1 className="text-xl font-bold mb-1">{keyboard.theme_name}</h1>
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
}

export default ViewPage;
