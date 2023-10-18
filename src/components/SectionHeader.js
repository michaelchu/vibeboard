import React from "react";

function SectionHeader(props) {
  // Render nothing if no title or subtitle
  if (!props.title && !props.subtitle && !props.strapline) {
    return null;
  }
  return (
    <header
      className={
        "mb-8 last:mb-0" + (props.className ? ` ${props.className}` : "")
      }
    >
      {props.strapline && (
        <div className="text-sm uppercase font-bold tracking-wider mb-1 text-blue-700">
          {props.strapline}
        </div>
      )}

      {props.title && (
        <h1 className="text-3xl md:text-4xl font-extrabold">{props.title}</h1>
      )}

      {props.subtitle && (
        <h2 className="mt-4 inline-block text-lg md:text-xl md:leading-relaxed font-medium max-w-screen-md opacity-80">
          {props.subtitle}
        </h2>
      )}
    </header>
  );
}

export default SectionHeader;
