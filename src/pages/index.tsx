import React from "react";
import Meta from "../components/Meta";
import Keyboard from "../components/Keyboard/Keyboard.tsx";
import { mac_os_65 } from "../components/Keyboard/layouts/mac_os_65.ts";
import { useKeyboardByTheme } from "../util/db.jsx";
import { mergeArraysByKey } from "../util/helpers.ts";

function IndexPage() {
  const { data: key_colors, status } = useKeyboardByTheme(
    "38f65a21-dcf1-4f5c-8978-8b32c51d825b",
  );

  return (
    <div className={"dark"}>
      <Meta />
      <div>
        {status === "idle" || status === "loading" ? (
          <span>One moment please</span>
        ) : (
          <main className="min-w-full bg-gray-200 dark:bg-gray-700 min-h-screen flex items-center justify-center">
            <Keyboard
              keys={mergeArraysByKey(mac_os_65, key_colors)}
              variant={"dark"}
            />
          </main>
        )}
      </div>
    </div>
  );
}

export default IndexPage;
