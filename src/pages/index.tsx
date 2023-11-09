import React from "react";
import Meta from "../components/Meta";
import Keyboard from "../components/Keyboard/Keyboard.tsx";
import { mac_os_75 } from "../components/Keyboard/layouts/mac_os_75.ts";

function IndexPage() {
  return (
    <div className={"dark"}>
      <Meta />
      <main className="min-w-full bg-gray-200 dark:bg-gray-700 min-h-screen flex items-center justify-center">
        <Keyboard keys={mac_os_75} darkMode={true} />
      </main>
    </div>
  );
}

export default IndexPage;
