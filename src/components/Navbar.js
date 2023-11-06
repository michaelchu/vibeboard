import React, { useState } from "react";
import {
  ChevronDownIcon,
  Squares2X2Icon,
  CogIcon,
  LockClosedIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";
import Section from "./Section";
import { Link } from "./../util/router";
import Button from "./Button";
import { useAuth } from "../util/auth";

function Navbar(props) {
  const auth = useAuth();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const classes = {
    navLink:
      "font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:text-blue-500 py-6",
    dropdown: {
      base: "absolute top-19 pt-1 z-10 invisible group-hover:visible transform transition duration-800 ease-in opacity-0 group-hover:opacity-100",
      left: "right-0",
      center: "left-1/2 -translate-x-1/2",
      right: "left-0",
      normal: "w-48",
      large: "w-96",
      inner:
        "bg-white shadow-xl ring-1 ring-black ring-opacity-5 rounded-lg overflow-hidden",
      title:
        "text-xs uppercase font-semibold tracking-wider text-blue-800 mb-5",
      link: "text-gray-600 hover:text-blue-600 font-medium text-sm flex items-center space-x-2",
      icon: "opacity-25 inline-block w-5 h-5",
      feature:
        "p-3 rounded-xl flex items-center space-x-4 text-gray-600 font-medium text-sm",
      featureName: "font-semibold mb-1",
      featureDescription: "opacity-75",
    },
    accountDropdown: {
      base: "absolute right-0 origin-top-right mt-2 w-48 z-10",
      inner:
        "bg-white ring-1 ring-black ring-opacity-5 rounded divide-y divide-gray-100 shadow-xl rounded",
      link: "flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700",
      linkActive: "text-gray-700 bg-gray-100",
      linkInactive:
        "text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700",
      icon: "opacity-50 inline-block w-5 h-5",
    },
  };

  return (
    <Section bgColor={props.bgColor}>
      <div className="container py-4">
        <div className="flex justify-between">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-blue-600 hover:text-blue-400"
          >
            <svg
              className="opacity-75 hi-outline hi-cube-transparent inline-block w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              />
            </svg>
            <span>VibeBoard</span>
          </Link>
          <div className="flex items-center ml-auto space-x-1 lg:space-x-4">
            <ul className="hidden lg:flex items-center ml-auto">
              <li className="relative group">
                <Link to="/trending" className={`${classes.navLink}`}>
                  <span>Trending</span>
                </Link>
              </li>
              <li className="relative group">
                <Link to="/top" className={`${classes.navLink}`}>
                  <span>Top</span>
                </Link>
              </li>
              <li className="relative group">
                <Link to="/recently-updated" className={`${classes.navLink}`}>
                  <span>Recently Updated</span>
                </Link>
              </li>

              {!auth.user && (
                <li className="relative group">
                  <Link to="/auth/signin" className={`${classes.navLink}`}>
                    <span>Sign in</span>
                  </Link>
                </li>
              )}
            </ul>

            {auth.user && (
              <Menu as="div" className="relative inline-block">
                <Button
                  component={Menu.Button}
                  variant="simple"
                  size="sm"
                  endIcon={
                    <ChevronDownIcon className="opacity-50 inline-block w-5 h-5" />
                  }
                >
                  Account
                </Button>
                <Transition
                  as={React.Fragment}
                  enter="transition ease-out duration-150"
                  enterFrom="transform opacity-0 scale-75"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-100"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-75"
                >
                  <Menu.Items className={classes.accountDropdown.base}>
                    <div className={`${classes.accountDropdown.inner}`}>
                      <div className="p-2 space-y-1">
                        <Menu.Item>
                          <Link
                            to="/dashboard"
                            className={`${classes.accountDropdown.link}`}
                          >
                            <Squares2X2Icon
                              className={classes.accountDropdown.icon}
                            />
                            <span>Dashboard</span>
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link
                            to="/settings/general"
                            className={`${classes.accountDropdown.link}`}
                          >
                            <CogIcon className={classes.accountDropdown.icon} />
                            <span>Settings</span>
                          </Link>
                        </Menu.Item>
                      </div>
                      <div className="p-2 space-y-1">
                        <Link
                          to="#"
                          className={`${classes.accountDropdown.link}`}
                          onClick={(e) => {
                            e.preventDefault();
                            auth.signout();
                          }}
                        >
                          <LockClosedIcon
                            className={classes.accountDropdown.icon}
                          />
                          <span>Sign out</span>
                        </Link>
                      </div>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}

            <div className="flex lg:hidden items-center justify-center">
              <Button
                variant="simple"
                size="sm"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                endIcon={<Bars3Icon className="inline-block w-5 h-5" />}
              />
            </div>
          </div>
        </div>
        <div className={"lg:hidden" + (!mobileNavOpen ? " hidden" : "")}>
          <div className="grid grid-cols-1 sm:grid-cols-3 border rounded-xl my-5">
            <div className="p-6 space-y-6">
              <nav className="flex flex-col space-y-3">
                <Link to="/" className={`${classes.dropdown.link}`}>
                  Trending
                </Link>
                <Link to="/" className={`${classes.dropdown.link}`}>
                  Top
                </Link>
                <Link to="/" className={`${classes.dropdown.link}`}>
                  Recently Updated
                </Link>

                {!auth.user && (
                  <Link
                    to="/auth/signin"
                    className={`${classes.dropdown.link}`}
                  >
                    Sign in
                  </Link>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Navbar;
