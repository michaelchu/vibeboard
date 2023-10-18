import React from "react";

function Avatar(props) {
  const { image, size = "md", alt, className } = props;

  const classes = {
    size: {
      sm: "w-16 h-16",
      md: "w-20 h-20",
      lg: "w-28 h-28",
    },
  };

  return (
    <span
      className={
        `block rounded-full overflow-hidden border-2 border-gray-50 ${classes.size[size]}` +
        (className ? ` ${className}` : "")
      }
    >
      <img src={image} alt={alt} />
    </span>
  );
}

export default Avatar;
