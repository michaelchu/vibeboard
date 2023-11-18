const labels = [
  // "Slate",
  // "Gray",
  // "Zinc",
  // "Neutral",
  // "Stone",
  "Red",
  "Orange",
  "Amber",
  "Yellow",
  "Lime",
  "Green",
  "Emerald",
  "Teal",
  "Cyan",
  "Sky",
  "Blue",
  "Indigo",
  "Violet",
  "Purple",
  "Fuchsia",
  "Pink",
  "Rose",
];

const intensities = [200, 300, 400, 500, 600, 700, 800];

export const colorList: string[][] = labels.map((label) => {
  return intensities.map((intensity) => `${label.toLowerCase()}-${intensity}`);
});
