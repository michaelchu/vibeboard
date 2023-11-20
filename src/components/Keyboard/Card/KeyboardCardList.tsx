import { KeyboardProps } from "../types.ts";
import DesktopKeyboardCard from "./DesktopKeyboardCard.tsx";
import MobileKeyboardCard from "./MobileKeyboardCard.tsx";
import useMobile from "../../../hooks/useMobile.ts";

export default function KeyboardCardList({ data }) {
  const isMobile = useMobile();
  return (
    <>
      {!isMobile ? (
        <div className="container xl:max-w-7xl mx-auto py-10 px-4 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
            {data.map((keyboard: KeyboardProps, idx: number) => (
              <DesktopKeyboardCard key={idx} keyboard={keyboard} />
            ))}
          </div>
        </div>
      ) : (
        <div className={"overflow-x-auto whitespace-nowrap"}>
          {data.map((keyboard: KeyboardProps, idx: number) => (
            <MobileKeyboardCard key={idx} keyboard={keyboard} />
          ))}
        </div>
      )}
    </>
  );
}
