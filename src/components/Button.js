import React from "react";

const Button = React.forwardRef((props, ref) => {
  const {
    size = "md",
    variant = "primary",
    type = "button",
    children,
    onClick,
    className,
    disabled = false,
    href,
    target,
    isBlock = false,
    startIcon,
    endIcon,
    component,
    ...buttonProps
  } = props;

  // Element to render
  const Element = component ? component : props.href ? "a" : "button";

  // Tailwind classes
  const classes = {
    base: "inline-flex justify-center items-center border font-semibold focus:outline-none rounded focus:ring disabled:opacity-50",
    link: "whitespace-nowrap",
    block: "block w-full",
    size: {
      sm: "px-3 py-2 leading-5 text-sm space-x-2",
      md: "px-3 py-2 leading-6 space-x-3",
      lg: "px-4 py-3 leading-6 space-x-3",
      xl: "px-6 py-4 leading-6 space-x-3",
    },
    variant: {
      primary:
        "border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700",
      secondary:
        "border-blue-200 bg-blue-200 text-blue-700 hover:text-blue-700 hover:bg-blue-300 hover:border-blue-300 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-200 active:border-blue-200",
      simple:
        "border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white",
      light:
        "border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200",
      dark: "border-gray-700 bg-gray-700 text-white hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-700 active:border-gray-700",
    },
  };

  return (
    <Element
      className={
        `${classes.base} ${classes.size[size]} ${classes.variant[variant]}` +
        (Element === "a" ? ` ${classes.link}` : "") +
        (isBlock ? ` ${classes.block}` : "") +
        (className ? ` ${className}` : "")
      }
      href={href}
      target={target}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...buttonProps}
      ref={ref}
    >
      {startIcon && <span>{startIcon}</span>}

      {children && <span>{props.children}</span>}

      {endIcon && <span>{endIcon}</span>}
    </Element>
  );
});

export default Button;
