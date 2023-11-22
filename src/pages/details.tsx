import React, { useEffect } from "react";
import Meta from "../components/Meta";
import { useRouter } from "../util/router.jsx";
import { useKeyboardByTheme } from "../util/db.jsx";
import Header from "../components/Header.tsx";
import Spinner from "../components/Spinner.tsx";
import supabase from "../util/supabase.ts";
import useMobile from "../hooks/useMobile.ts";
import { KeyboardProps } from "../components/Keyboard/types.ts";
import MobileDetailSection from "../components/Detail/MobileDetailSection.tsx";
import DesktopDetailSection from "../components/Detail/DesktopDetailSection.tsx";

function DetailsPage() {
  const isMobile = useMobile();
  const router = useRouter();
  const { data, isLoading } = useKeyboardByTheme(router.query.theme_id);

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

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
        <MobileDetailSection keyboard={keyboard} image={publicUrl} />
      ) : (
        <div className={"container xl:max-w-7xl mx-auto px-4 lg:px-8"}>
          <DesktopDetailSection keyboard={keyboard} publicUrl={publicUrl} />
        </div>
      )}
    </>
  );
}

export default DetailsPage;
