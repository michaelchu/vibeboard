import React from "react";
import Meta from "../components/Meta";
import Keyboard from "../components/Keyboard/Keyboard.tsx";
import { mac_os_65 } from "../components/Keyboard/layouts/mac_os_65.ts";
import { useKeyboardByTheme } from "../util/db.jsx";
import { KeyProps } from "../components/Keyboard/types.ts";

type LeftKeyProps = Omit<KeyProps, "key_cap_color" | "key_label_color">;
type RightKeyProps = Omit<
  KeyProps,
  "label" | "width" | "row" | "flexGrow" | "font_size"
>;

function IndexPage() {
  const { data: key_colors, status } = useKeyboardByTheme(
    "38f65a21-dcf1-4f5c-8978-8b32c51d825b"
  );

  const mergeArraysByKey = (left: LeftKeyProps[], right: RightKeyProps[]) => {
    if (left.length !== right.length) {
      throw new Error("The input arrays must have the same length.");
    }

    const map: Record<string, Partial<KeyProps>> = {};

    // Process the 'left' array first.
    for (const item of left) {
      map[item.key_id] = item;
    }

    // Then process the 'right' array.
    // This will overwrite properties in the 'left' array with 'right' array values when 'key_id's match.
    for (const item of right) {
      if (map[item.key_id]) {
        map[item.key_id] = { ...map[item.key_id], ...item };
      }
    }

    return left.map((item) => map[item.key_id] as KeyProps);
  };

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
