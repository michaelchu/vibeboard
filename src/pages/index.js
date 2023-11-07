import React from "react";
import Meta from "./../components/Meta";
import { keys } from "../keyboards/keys";
import Keyboard from "../components/Keyboard";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <div className="container flex flex-col lg:space-y-0 text-center lg:text-left">
        <Keyboard layout={"104 Keys"} keysData={keys} />
      </div>
    </>
  );
}

export default IndexPage;
