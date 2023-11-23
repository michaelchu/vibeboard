import { KeyProps, RightKeyProps } from "./types.ts";
import { LoremIpsum } from "lorem-ipsum";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const mergeArraysByKey = (
  left: KeyProps[],
  right: RightKeyProps[] | undefined,
): KeyProps[] | never => {
  if (!right) return left;

  // Convert the 'right' array into a map for quick lookup.
  const rightMap = right.reduce(
    (acc, item) => {
      acc[item.key_id] = item;
      return acc;
    },
    {} as Record<string, RightKeyProps>,
  );

  // Map over the 'left' array and merge the properties from the 'right' array.
  return left.map((item) => {
    return { ...item, ...rightMap[item.key_id] };
  });
};

export const keysByRow = (keys: KeyProps[]) => {
  return keys.reduce<Record<string, KeyProps[]>>((acc, key) => {
    if (!acc[key.row]) {
      acc[key.row] = [];
    }
    acc[key.row].push(key);
    return acc;
  }, {});
};

export const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 4,
    min: 1,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});
