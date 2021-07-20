import type { FunctionComponent } from "preact";

import { h } from "preact";

const SearchBar: FunctionComponent = () => {
  return (
    <button
      type="button"
      className="group leading-6 font-medium flex items-center space-x-3 sm:space-x-4 hover:text-gray-600 transition-colors duration-200 w-full py-2">

      <svg width="24" height="24" fill="none" className="text-gray-400 group-hover:text-gray-500 transition-colors duration-200">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        </path>
      </svg>
      <span>Quick search<span className="hidden sm:inline"> for movies</span></span>
      <span style="opacity: 1;" className="hidden sm:block text-gray-400 text-sm leading-5 py-0.5 px-1.5 border border-gray-300 rounded-md">
        <span className="sr-only">Press </span>
        <kbd className="font-sans">
          <abbr title="Control" className="no-underline">Ctrl </abbr>
        </kbd>
        <span className="sr-only"> and </span>
        <kbd className="font-sans">K</kbd>
        <span className="sr-only"> to search</span>
      </span>
    </button>
  );
}

export default SearchBar;