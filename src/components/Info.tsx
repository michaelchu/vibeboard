import { KeyboardProps } from "../util/types.ts";

interface InfoProps {
  infoItems: { label: string; value: string | number }[];
}

export default function Info({ keyboard }: { keyboard: KeyboardProps }) {
  const infoItems: InfoProps["infoItems"] = [
    { label: "Size", value: keyboard.keyboard_size },
    { label: "Comments", value: Math.floor(Math.random() * (100 - 1 + 1)) + 1 },
    { label: "Trend", value: "24/week" },
  ];
  return (
    <div className="px-5 bg-gray-50 grid grid-cols-3 text-center dark:bg-gray-900/60">
      {infoItems.map((item) => (
        <dl className="py-3 space-y-1" key={item.label}>
          <dt className="text-md text-gray-300 font-semibold">{item.value}</dt>
          <dd className="text-xs font-semibold uppercase tracking-wider text-gray-501 dark:text-gray-400">
            {item.label}
          </dd>
        </dl>
      ))}
    </div>
  );
}
