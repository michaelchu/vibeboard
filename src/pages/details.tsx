import React from "react";
import Meta from "../components/Meta";
import { useRouter } from "../util/router.jsx";
import { useKeyboardByTheme } from "../util/db.jsx";
import Header from "../components/Header.tsx";
import Spinner from "../components/Spinner.tsx";
import supabase from "../util/supabase.ts";
import useMobile from "../hooks/useMobile.ts";
import { KeyboardProps } from "../components/Keyboard/types.ts";
import MobileViewSection from "../components/MobileViewSection.tsx";
import { Avatar, Rating } from "flowbite-react";
import { lorem } from "../util/helpers.ts";

function DetailsPage() {
  const isMobile = useMobile();
  const router = useRouter();
  const { data, isLoading } = useKeyboardByTheme(router.query.theme_id);

  if (isLoading) {
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

  const keyboard: KeyboardProps = data[0];
  const {
    data: { publicUrl },
  } = supabase.storage.from("keyboards").getPublicUrl(keyboard.image_path);

  return (
    <>
      <Header />
      <Meta title={`VibeBoard - ${keyboard.theme_name}`} />
      {isMobile && publicUrl ? (
        <MobileViewSection keyboard={keyboard} image={publicUrl} />
      ) : (
        <div className="container mx-auto">
          <main className="w-full h-full items-center justify-center sm:p-20">
            <div className="pb-8 flex items-center space-x-2">
              <Avatar
                img={
                  "https://cdn.tailkit.com/media/placeholders/avatar-iFgRcqHznqg-160x160.jpg"
                }
                size={"lg"}
              />
              <div>
                <p className={"text-xl"}>{keyboard.theme_name}</p>
                <p className="font-light text-lg text-gray-500">
                  {lorem.generateWords(2)}
                </p>
                <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                </Rating>
              </div>
            </div>
            <img alt={"#"} src={publicUrl} className={"w-full h-full"} />
          </main>
        </div>
      )}
    </>
  );
}

export default DetailsPage;
