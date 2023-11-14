import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../util/auth.jsx";
import { classNames } from "../util/helpers.js";
import {
  SwatchIcon,
  MagnifyingGlassIcon,
  ArrowTrendingUpIcon,
  FireIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  LockClosedIcon,
  Bars3Icon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";

const active =
  "group text-sm font-semibold flex items-center space-x-2 px-3 py-2 rounded-lg text-blue-600 border border-blue-50 bg-blue-50 dark:text-white dark:bg-gray-700/75 dark:border-transparent";
const inactive =
  "group text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 border border-transparent hover:text-blue-600 hover:bg-blue-50 active:border-blue-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700 dark:active:border-gray-600";

enum ROUTES {
  EXPLORE = "/explore/",
  TRENDING = "/trending/",
  RECENTLY_UPDATED = "/recently-updated/",
  TOP = "/top/",
}

const headerNavigation = (currentRoute: string) => {
  return [
        {
          name: "Explore",
          to: "/",
          current: true,
          icon: <MagnifyingGlassIcon className={"w-5 h-5"} />,
        },
    {
      name: "Trending",
      to: "/trending",
      current: false,
      icon: <ArrowTrendingUpIcon className={"w-5 h-5"} />,
    },
    {
      name: "Recently Updated",
      to: "/recently-updated",
      current: false,
      icon: <ClockIcon className={"w-5 h-5"} />,
    },
    {
      name: "Top",
      to: "/top",
      current: false,
      icon: <FireIcon className={"w-5 h-5"} />,
    },
  ]
};


export default function Header() {
  const auth = useAuth();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();
  const currentRoute = location.pathname;


  return (
    <header
      id="page-header"
      className="flex flex-none items-center shadow-sm z-1 bg-gray-800"
    >
      <div className="container xl:max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between py-4">
          {/* Left Section */}
          <div className="flex items-center space-x-2 lg:space-x-6 dark">
            {/* Logo */}
            <Link
              to="/"
              className="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
            >
              <SwatchIcon className={"w-10 h-10"} />
              <span>VibeBoard</span>
            </Link>
            {/* END Logo */}

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {headerNavigation(currentRoute).map((item, index) => (
                <div key={`desktop-${index}`} className="mx-0.5">
                  {
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(item.current ? active : inactive)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  }
                </div>
              ))}
            </nav>
            {/* END Desktop Navigation */}
          </div>
          {/* END Left Section */}

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            {!auth.user && (
              <Link
                to="/auth/signin"
                className="group text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 border border-transparent hover:text-blue-600 hover:bg-blue-50 active:border-blue-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700 dark:active:border-gray-600"
              >
                <UserCircleIcon className={"w-5 h-5"} />
                <span>Sign in</span>
              </Link>
            )}
            {/* User Dropdown */}
            {auth.user && (
              <Menu as="div" className="relative inline-block">
                {/* Dropdown Toggle Button */}
                <div className="dark">
                  <Menu.Button className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                    <UserCircleIcon className="inline-block w-5 h-5" />
                    <span className="hidden sm:inline">{auth.user.name}</span>
                    <ChevronDownIcon className="w-5 h-5 opacity-40 hidden sm:inline-block" />
                  </Menu.Button>
                </div>
                {/* END Dropdown Toggle Button */}

                {/* Dropdown */}
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="opacity-0 scale-90"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-90"
                >
                  <Menu.Items className="absolute right-0 origin-top-right z-10 mt-2 w-48 shadow-xl rounded-lg dark:shadow-gray-900 focus:outline-none">
                    <div className="bg-white ring-1 ring-black ring-opacity-5 rounded-lg divide-y divide-gray-100 dark:bg-gray-800 dark:divide-gray-700 dark:ring-gray-700">
                      <div className="p-2.5 space-y-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/dashboard"
                              className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${
                                active
                                  ? "text-blue-800 bg-blue-50 dark:text-white dark:bg-gray-700/75 dark:border-transparent"
                                  : "text-gray-700 hover:text-blue-800 hover:bg-blue-50 active:border-blue-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700/75 dark:active:border-gray-600"
                              }`}
                            >
                              <UserCircleIcon
                                className={
                                  "w-5 h-5 opacity-25 group-hover:opacity-50"
                                }
                              />
                              <span className="grow">Dashboard</span>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/settings/general"
                              className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${
                                active
                                  ? "text-blue-800 bg-blue-50 dark:text-white dark:bg-gray-700/75 dark:border-transparent"
                                  : "text-gray-700 hover:text-blue-800 hover:bg-blue-50 active:border-blue-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700/75 dark:active:border-gray-600"
                              }`}
                            >
                              <Cog6ToothIcon
                                className={
                                  "w-5 h-5 opacity-25 group-hover:opacity-50"
                                }
                              />
                              <span className="grow">Settings</span>
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="p-2.5 space-y-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="#"
                              className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${
                                active
                                  ? "text-blue-800 bg-blue-50 dark:text-white dark:bg-gray-700/75 dark:border-transparent"
                                  : "text-gray-700 hover:text-blue-800 hover:bg-blue-50 active:border-blue-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700/75 dark:active:border-gray-600"
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                auth.signout();
                              }}
                            >
                              <LockClosedIcon
                                className={
                                  "w-5 h-5 opacity-25 group-hover:opacity-50"
                                }
                              />
                              <span className="grow">Sign out</span>
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </div>
                  </Menu.Items>
                </Transition>
                {/* END Dropdown */}
              </Menu>
            )}
            {/* END User Dropdown */}

            {/* Toggle Mobile Navigation */}
            <div className="lg:hidden dark">
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                type="button"
                className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
              >
                <Bars3Icon className={"w-5 h-5"} />
              </button>
            </div>
            {/* END Toggle Mobile Navigation */}
          </div>
          {/* END Right Section */}
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden dark ${mobileNavOpen ? "" : "hidden"}`}>
          <nav className="flex flex-col space-y-2 py-4 border-t dark:border-gray-700">
            {headerNavigation(currentRoute).map((item, index) => (
              <a
                key={`mobile-${index}`}
                href={item.to}
                className={classNames(item.current ? active : inactive)}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
        {/* END Mobile Navigation */}
      </div>
    </header>
  );
}
