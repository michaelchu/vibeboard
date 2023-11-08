import React from "react";

function BackgroundImage(props) {
  return (
    <div
      className={
        "bg-[image:var(--image)] opacity-[var(--opacity)] absolute top-0 left-0 bottom-0 right-0 z-0" +
        (props.repeat ? " bg-auto bg-left-top bg-repeat" : "") +
        (!props.repeat ? " bg-center bg-cover" : "")
      }
      style={{
        "--image": `url("${props.image}")`,
        "--opacity": props.opacity,
      }}
    />
  );
}

export default BackgroundImage;
