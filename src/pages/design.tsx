import React, { useRef, useState, useEffect } from "react";
import Meta from "../components/Meta";
import { requireAuth, useAuth } from "../util/auth.jsx";
import DesignSection from "../components/Design/DesignSection.tsx";
import Header from "../components/Header.tsx";
import { win_65 } from "../components/Keyboard/Layout/win_65.ts";
import DesignModal from "../components/Design/DesignModal.tsx";
import { createKeyboardTheme, useKeyboardByTheme } from "../util/db.jsx";
import { ErrorResponse, KeyboardProps, KeyProps } from "../util/types.ts";
import { generateScreenshot, uploadScreenshot } from "../util/screenshot.ts";
import toast from "react-hot-toast";
import Toast from "../components/Toast.tsx";
import { useRouter } from "../util/router.jsx";
import { mergeArraysByKey } from "../util/helpers.ts";
import NotFoundPage from "./404.tsx";
import DesignHeader from "../components/Design/DesignHeader.tsx";
import { directory } from "../components/Keyboard/directory.ts";
import Spinner from "../components/Spinner.tsx";

function DesignPage() {
  const auth = useAuth();
  const router = useRouter();
  const keyboardRef = useRef(null);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isOwner, setIsOwner] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const [themeData, setThemeData] = useState({
    themeName: "",
    description: "",
    keyboardColor: "black",
    keyCapColor: "dark",
    keyboardShape: "angular",
    keyboardSize: "65_keys",
    keyboardLayout: "QWERTY",
    platform: "win",
    imagePath: "",
  });
  const [tempKeyboard, setTempKeyboard] = useState(win_65);

  const {
    data,
    isError,
    isLoading: isKeyboardLoading,
  } = useKeyboardByTheme(
    router.query.theme_id || "",
    router.query.action === "edit",
  );

  if (isError) {
    toast.error("Error loading keyboard!");
  }

  useEffect(() => {
    setIsLoading(isKeyboardLoading);

    if (router.query.theme_id && data) {
      if (data[0].owner !== auth.user?.uid) {
        setIsOwner(false);
      } else {
        const currentKeyboard: KeyboardProps = data[0];
        const currentKeyboardWithColors = mergeArraysByKey(
          directory[currentKeyboard.platform][currentKeyboard.keyboard_size],
          currentKeyboard.keyboard_theme_keys,
        );
        setThemeData({
          ...themeData,
          ...{
            themeName: currentKeyboard.theme_name,
            description: currentKeyboard.description,
            keyboardColor: currentKeyboard.keyboard_color,
            keyCapColor: currentKeyboard.key_cap_color,
            keyboardShape: currentKeyboard.keyboard_shape,
            keyboardSize: currentKeyboard.keyboard_size,
            keyboardLayout: currentKeyboard.keyboard_layout,
            platform: currentKeyboard.platform,
            imagePath: currentKeyboard.image_path,
          },
        });
        setTempKeyboard(currentKeyboardWithColors);
      }
    }
  }, [router.query.theme_id, data, isError, isKeyboardLoading]);

  // Function to create the keyboard theme
  async function createTheme(imagePath: string) {
    const keyboardColors = tempKeyboard
      .filter((obj: KeyProps) => obj.key_label_color !== undefined)
      .map((obj: KeyProps) => {
        const { key_id, key_label_color } = obj;
        return { key_id, key_label_color };
      });

    await createKeyboardTheme(
      {
        theme_name: themeData.themeName,
        description: themeData.description,
        keyboard_color: themeData.keyboardColor,
        key_cap_color: themeData.keyCapColor,
        keyboard_shape: themeData.keyboardShape,
        keyboard_size: themeData.keyboardSize,
        keyboard_layout: themeData.keyboardLayout,
        platform: themeData.platform,
        owner: auth.user.id,
        image_path: imagePath,
      },
      keyboardColors,
    );
  }

  const resetModalInputs = () => {
    setThemeData({ ...themeData, ...{ themeTitle: "", themeDesc: "" } });
  };

  const handleSuccessfulSubmission = () => {
    toast.success("Successfully saved!");
    setModalOpen(false);
    resetModalInputs();
  };

  const handleFailedSubmission = (err: ErrorResponse) => {
    toast.error(`Error while saving: ${err.message}`);
    setModalOpen(false);
    resetModalInputs();
  };

  const handleSave = async () => {
    try {
      const screenshotBlob: Blob = await generateScreenshot(keyboardRef);
      const imagePath: string = await uploadScreenshot(
        `${auth.user.id}?t=${new Date().getTime()}`, //https://github.com/orgs/supabase/discussions/5737
        screenshotBlob,
      );
      await createTheme(imagePath);
      handleSuccessfulSubmission();
    } catch (err) {
      console.error(err);
      handleFailedSubmission(err as ErrorResponse);
    }
  };

  return (
    <>
      {!isOwner ? (
        <NotFoundPage />
      ) : (
        <>
          <Meta title="VibeBoard - Design your Keyboard" />
          <Header />
          <Toast />
          <DesignHeader
            setTempKeyboard={setTempKeyboard}
            setModalOpen={setModalOpen}
          />
          {isLoading ? (
            <Spinner variant={"dark"} />
          ) : (
            <DesignSection
              themeData={themeData}
              tempKeyboard={tempKeyboard}
              setTempKeyboard={setTempKeyboard}
              keyboardRef={keyboardRef}
              isLoading={isLoading}
            />
          )}
          <DesignModal
            themeData={themeData}
            setThemeData={setThemeData}
            isModalOpen={isModalOpen}
            setIsModalOpen={setModalOpen}
            handleSave={handleSave}
          />
        </>
      )}
    </>
  );
}

export default requireAuth(DesignPage);
