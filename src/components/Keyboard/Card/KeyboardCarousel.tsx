import { Carousel } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import keyboard from "../Keyboard.tsx";

export default function KeyboardCarousel({ theme_id, image, pieces = 2 }) {
  const [slices, setSlices] = useState<string[]>([]);
  const customTheme: CustomFlowbiteTheme["carousel"] = {
    root: {
      base: "relative h-full w-full",
    },
    item: {
      base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    },
    control: {
      base: "hidden",
      icon: "hidden",
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
      snap: "snap-x",
    },
  };

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = image;
    img.onload = () => {
      const sliceWidth = img.width / pieces;
      const sliceHeight = img.height;
      const canvases = Array.from({ length: pieces }).map((_, i) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (ctx) {
          canvas.width = sliceWidth;
          canvas.height = sliceHeight;
          ctx.drawImage(
            img,
            i * sliceWidth,
            0,
            sliceWidth,
            sliceHeight,
            0,
            0,
            sliceWidth,
            sliceHeight,
          );
        }
        return canvas.toDataURL();
      });
      setSlices(canvases);
    };
  }, [image, pieces]);

  return (
    <Link to={`/keyboard/${theme_id}`}>
      <Carousel theme={customTheme} slide={false} indicators={false}>
        {slices.map((slice, i) => (
          <div
            key={i}
            style={{
              backgroundImage: `url(${slice})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
          />
        ))}
      </Carousel>
    </Link>
  );
}
