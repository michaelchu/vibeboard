import React from "react";
import Meta from "./../components/Meta";
import { keys2 } from "../keyboards/keys2";
import Keyboard2 from "../components/Keyboard2";

function IndexPage(props) {
  return (
    <div className={"container"}>
      <Meta />
      <Keyboard2 keys={keys2} />
    </div>
  );
}

export default IndexPage;
