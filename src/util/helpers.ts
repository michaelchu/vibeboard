import { KeyProps, RightKeyProps } from "../components/Keyboard/types.ts";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const mergeArraysByKey = (
  left: KeyProps[],
  right: RightKeyProps[],
): KeyProps[] => {
  if (left.length !== right.length) {
    throw new Error(
      `The input arrays have different lengths. Left: ${left.length}, Right: ${right.length}`,
    );
  }

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
    if (!rightMap[item.key_id]) {
      throw new Error(`Missing key_id in right array: ${item.key_id}`);
    }
    return { ...item, ...rightMap[item.key_id] };
  });
};
