import React, { useState } from "react";
import Meta from "../components/Meta";
import { requireAuth, useAuth } from "../util/auth.jsx";
import { PlusIcon } from "@heroicons/react/20/solid";
import { ArrowUturnRightIcon } from "@heroicons/react/24/solid";
import DesignSection from "../components/Design/DesignSection.tsx";
import Header from "../components/Header.tsx";
import { win_65 } from "../components/Keyboard/layouts/win_65.ts";
import DesignModal from "../components/Design/DesignModal.tsx";
import { createKeyboardTheme } from "../util/db.jsx";
import { KeyProps } from "../components/Keyboard/types.ts";
import Toast from "../components/Toast.tsx";

interface ErrorResponse {
  code: string;
  details: string;
  hint: string | null;
  message: string;
}

function DesignPage() {
  const auth = useAuth();
  const [tempKeyboard, setTempKeyboard] = useState(win_65);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastTitle, setToastTitle] = useState("");
  const [toastMsg, setToastMsg] = useState("");
  const [toastType, setToastType] = useState<"success" | "failure" | "info">(
    "success",
  );
  const [modalTitle, setModalTitle] = useState("");
  const [modalDesc, setModalDesc] = useState("");

  const resetModalInputs = () => {
    setModalTitle("");
    setModalDesc("");
  };

  const handleSuccessfulSubmission = () => {
    setToastTitle("Successfully saved!");
    setToastMsg("Your submission is being reviewed");
    setToastType("success");
    setIsToastOpen(true);
    setIsModalOpen(false);
    resetModalInputs();
  };

  const handleFailedSubmission = (err) => {
    setToastTitle("Error while saving!");
    setToastMsg(err.message);
    setToastType("failure");
    setIsToastOpen(true);
    setIsModalOpen(false);
    resetModalInputs();
  };

  const handleSave = () => {
    const keyboardColors = tempKeyboard
      .filter((obj: KeyProps) => obj.key_label_color !== undefined)
      .map((obj: KeyProps) => {
        const { key_id, key_label_color } = obj;
        return { key_id, key_label_color };
      });

    createKeyboardTheme(
      {
        theme_name: modalTitle || null,
        description: modalDesc,
        owner: auth.user.id,
        platform: "mac",
        keyboard_size: "65 keys",
        keyboard_layout: "QWERTY",
        image_path: "test.jpg",
      },
      keyboardColors,
    )
      .then(() => {
        handleSuccessfulSubmission();
      })
      .catch((err: ErrorResponse) => {
        handleFailedSubmission(err);
      });
  };

  return (
    <>
      <Header />
      <div className="bg-gray-50 dark:bg-gray-800/50">
        <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
          <div className="text-center sm:text-left sm:flex sm:items-center sm:justify-between py-2 lg:py-0 space-y-2 sm:space-y-0">
            <div className="grow">
              <h1 className="text-xl font-bold mb-1">Design Your Keyboard</h1>
              <h2 className="text-sm text-gray-500 font-medium dark:text-gray-400">
                Unleash your creativity and turn your keyboard into a stunning
                work of art with our customizable RGB lighting options.
              </h2>
            </div>
            <div className="flex-none flex items-center justify-center sm:justify-end space-x-3 py-3 rounded sm:bg-transparent px-2 sm:px-0">
              <button
                onClick={() => setTempKeyboard(win_65)}
                className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
              >
                <ArrowUturnRightIcon className="inline-block w-5 h-5 opacity-50" />
                <span>Reset</span>
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-5 text-sm border-gray-600 bg-gray-600 text-white hover:text-white hover:bg-gray-500 hover:border-gray-500 focus:ring focus:ring-gray-400 focus:ring-opacity-50 active:bg-gray-700 active:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-opacity-90"
              >
                <PlusIcon className="inline-block w-5 h-5 opacity-50" />
                <span>Save Keyboard</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Meta title="VibeBoard - Design your Keyboard" />
      <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
        <DesignSection
          tempKeyboard={tempKeyboard}
          setTempKeyboard={setTempKeyboard}
        />
      </div>
      <DesignModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        modalTitle={modalTitle}
        setModalTitle={setModalTitle}
        modalDesc={modalDesc}
        setModalDesc={setModalDesc}
        handleSave={handleSave}
      />
      <Toast
        show={isToastOpen}
        setShow={setIsToastOpen}
        title={toastTitle}
        msg={toastMsg}
        type={toastType}
      />
    </>
  );
}

export default requireAuth(DesignPage);
