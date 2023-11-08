import React from "react";
import Section from "./Section";
import LoadingIcon from "./LoadingIcon";

function PageLoader(props) {
  return (
    <Section size="lg">
      {!props.children && <LoadingIcon className="mx-auto w-7" />}

      {props.children && <>{props.children}</>}
    </Section>
  );
}

export default PageLoader;
