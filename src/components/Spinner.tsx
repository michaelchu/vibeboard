interface Props {
  variant: "light" | "dark";
}

export const Spinner = ({ variant }: Props) => {
  const colorVariant = {
    light: {
      first: "bg-violet-900",
      second: "bg-fuchsia-900",
      third: "bg-rose-900",
    },
    dark: {
      first: "bg-cyan-200",
      second: "bg-cyan-500",
      third: "bg-cyan-800",
    },
  };

  return (
    <div className="flex space-x-2 justify-center items-center">
      <span className="sr-only">Loading...</span>
      <div
        className={`h-4 w-4 ${colorVariant[variant].first} rounded-full animate-bounce [animation-delay:-0.3s]`}
      ></div>
      <div
        className={`h-4 w-4 ${colorVariant[variant].second} rounded-full animate-bounce [animation-delay:-0.15s]`}
      ></div>
      <div
        className={`h-4 w-4 ${colorVariant[variant].third} rounded-full animate-bounce`}
      ></div>
    </div>
  );
};

export default Spinner;
