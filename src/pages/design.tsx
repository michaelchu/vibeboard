import React, { useRef, useState, useEffect } from "react";
import Meta from "../components/Meta";
import { requireAuth, useAuth } from "../util/auth.jsx";
import DesignSection from "../components/Design/DesignSection.tsx";
import Header from "../components/Header.tsx";
import { win_65 } from "../components/Keyboard/Layout/win_65.ts";
import DesignModal from "../components/Design/DesignModal.tsx";
import { createKeyboardTheme, useKeyboardByTheme } from "../util/db.jsx";
import { KeyProps } from "../components/Keyboard/types.ts";
import { generateScreenshot, uploadScreenshot } from "../util/screenshot.ts";
import toast from "react-hot-toast";
import Toast from "../components/Toast.tsx";
import { useRouter } from "../util/router.jsx";
import { mergeArraysByKey } from "../util/helpers.ts";
import NotFoundPage from "./404.tsx";
import DesignHeader from "../components/Design/DesignHeader.tsx";

interface ErrorResponse {
  code: string;
  details: string;
  hint: string | null;
  message: string;
}

function DesignPage() {
  const auth = useAuth();
  const router = useRouter();
  const keyboardRef = useRef(null);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isOwner, setIsOwner] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const [themeData, setThemeData] = useState({
    themeTitle: "",
    themeDesc: "",
    keyboardColor: "black",
    keyCapColor: "dark",
    shape: "angular",
    platform: "win",
    layout: "65_keys",
  });
  const [tempKeyboard, setTempKeyboard] = useState(win_65);

  const {
    data,
    isError,
    isLoading: isKeyboardLoading,
  } = useKeyboardByTheme(
    router.query.theme_id || "",
    router.query.action === "edit"
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
        const currentKeyboard = data[0];
        const newKeyboard = mergeArraysByKey(
          win_65,
          currentKeyboard.keyboard_theme_keys
        );
        setThemeData({
          themeTitle: currentKeyboard.theme_name,
          themeDesc: currentKeyboard.description,
        });
        setTempKeyboard(newKeyboard);
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
        theme_name: themeData.themeTitle || null,
        description: themeData.themeDesc,
        owner: auth.user.id,
        platform: "mac",
        keyboard_size: "65 keys",
        keyboard_layout: "QWERTY",
        image_path: imagePath,
      },
      keyboardColors
    );
  }

  const resetModalInputs = () => {
    setThemeData({ themeTitle: "", themeDesc: "" });
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
        themeData.themeTitle,
        screenshotBlob
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
          <DesignSection
            themeData={themeData}
            tempKeyboard={tempKeyboard}
            setTempKeyboard={setTempKeyboard}
            keyboardRef={keyboardRef}
            isLoading={isLoading}
          />
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
