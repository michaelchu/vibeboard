import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

function Footer() {
  return (
    <footer
      id="page-footer"
      className="flex flex-none items-center bg-white dark:bg-gray-800"
    >
      <div className="text-center flex flex-col md:text-left md:flex-row md:justify-between text-sm container xl:max-w-7xl mx-auto px-4 lg:px-8">
        <div className="pt-4 pb-1 md:pb-4">
          <a
            href="https://tailkit.com"
            className="font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
            target="_blank"
          >
            VibeBoard
          </a>{" "}
          © 2023 🇨🇦
        </div>
        <div className="pb-4 pt-1 md:pt-4 inline-flex items-center justify-center">
          <span>Made with</span>
          <HeartIcon className="mx-1 text-red-600 hi-solid hi-heart inline-block w-4 h-4" />
          <span> by Goldspan Labs</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
