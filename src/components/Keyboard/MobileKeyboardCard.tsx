import supabase from "../../util/supabase.ts";
import { KeyboardProps } from "./types.ts";
import { LoremIpsum } from "lorem-ipsum";
import BackgroundImage from "../BackgroundImage.tsx";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 4,
    min: 1,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export default function MobileKeyboardCard({
  keyboard,
}: {
  keyboard: KeyboardProps;
}) {
  const { data } = supabase.storage
    .from("keyboards")
    .getPublicUrl(keyboard.image_path);

  return (
    <>
      <div className="px-4 py-4 text-left flex justify-between items-center">
        <h2 className="font-semibold text-lg mb-1">{lorem.generateWords(2)}</h2>
      </div>
      <div className="overflow-x-scroll h-64 relative">
        {data && (
          <BackgroundImage
            image={data.publicUrl}
            opacity={100}
            repeat={false}
          />
        )}
      </div>
    </>
  );
}
