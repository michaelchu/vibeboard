import { Link } from "react-router-dom";

interface listItemProps {
  title: string;
  subtitle: string;
  icon: string;
  href: string;
}

export default function TrendList({
  title,
  list,
  iconStyle = "rounded-full",
  placeholder = false,
}) {
  return (
    <div className="p-5 overflow-hidden rounded-lg border border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className={"font-semibold"}>{title}</div>
      {list.map((item: listItemProps, idx: number) => {
        return (
          <Link
            key={idx}
            to={item.href}
            className="flex items-center justify-between py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-700 active:bg-white dark:text-gray-200 dark:hover:bg-gray-800/50 dark:active:bg-gray-900"
          >
            <div className="flex items-center space-x-4">
              {placeholder ? (
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-500">
                  {item.title.substring(0, 2).toUpperCase()}
                </div>
              ) : (
                <img
                  src={item.icon}
                  alt="User Avatar"
                  className={`inline-block h-10 w-10 ${iconStyle}`}
                />
              )}
              <div>
                <p className="text-sm truncate overflow-hidden">{item.title}</p>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
