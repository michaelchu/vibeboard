import React from "react";
import Meta from "./../components/Meta";
import Keyboard from "../components/Keyboard/Keyboard";
import { mac_os_75 } from "../components/Keyboard/layouts/mac_os_75";

function IndexPage(props) {
  return (
    <div className={"dark"}>
      <Meta />
      <main className="min-w-full bg-gray-200 dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <Keyboard keys={mac_os_75} darkMode={true} />
      </main>
    </div>
  );
}

export default IndexPage;
