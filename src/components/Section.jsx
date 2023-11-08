import React from "react";
import BackgroundImage from "./BackgroundImage";

function Section(props) {
  const {
    size,
    bgColor = "bg-white",
    textColor,
    bgImage,
    bgImageOpacity,
    bgImageRepeat,
    className,
    children,
    ...otherProps
  } = props;

  return (
    <section
      className={
        "section relative" +
        (bgColor ? ` ${bgColor}` : "") +
        (textColor ? ` ${textColor}` : "") +
        (className ? ` ${className}` : "")
      }
      {...otherProps}
    >
      {bgImage && (
        <BackgroundImage
          image={bgImage}
          opacity={bgImageOpacity}
          repeat={bgImageRepeat}
        />
      )}

      <div
        className={
          "[&>.container]:relative" +
          (size === "sm" ? " py-10" : "") +
          (size === "md" ? " py-10 md:py-20" : "") +
          (size === "lg" ? " py-10 md:py-32" : "")
        }
      >
        {props.children}
      </div>
    </section>
  );
}

export default Section;
