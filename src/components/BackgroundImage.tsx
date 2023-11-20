import React, { CSSProperties } from "react";

function BackgroundImage(props) {
  const styles: CSSProperties = {
    ["--image" as any]: `url("${props.image}")`,
    ["--opacity" as any]: props.opacity,
    height: "100%",
    width: "150%",
  };

  return (
    <div
      className={
        "bg-[image:var(--image)] opacity-[var(--opacity)] relative z-0" +
        (props.repeat ? " bg-auto bg-left-top bg-repeat" : "") +
        (!props.repeat ? "bg-center bg-cover" : "")
      }
      style={styles}
    />
  );
}

export default BackgroundImage;
