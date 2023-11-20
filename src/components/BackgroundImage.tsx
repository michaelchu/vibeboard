import React, { CSSProperties } from "react";

function BackgroundImage(props) {
  const styles: CSSProperties = {
    ["--image" as any]: `url("${props.image}")`,
    ["--opacity" as any]: props.opacity,
  };

  return (
    <div
      className={
        "bg-[image:var(--image)] opacity-[var(--opacity)] absolute top-0 left-0 bottom-0 right-0 z-0" +
        (props.repeat ? " bg-auto bg-left-top bg-repeat" : "") +
        (!props.repeat ? "bg-center bg-cover" : "")
      }
      style={styles}
    />
  );
}

export default BackgroundImage;
