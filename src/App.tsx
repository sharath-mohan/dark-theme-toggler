import { useLayoutEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BsSun, BsMoon } from "react-icons/bs";
import { useThemeStore } from "./app/store/theme-store";
function App() {
  const loadPreferences = useThemeStore((state) => state.loadPreferences);
  const theme = useThemeStore((state) => state.theme);
  const setPreferrence = useThemeStore((state) => state.setPreference);
  useLayoutEffect(() => {
    loadPreferences();
  }, []);
  return (
    <div className="flex h-screen  bg-gray-50 dark:bg-slate-700 flex-col">
      <div className="py-10 px-10 self-end">
        {theme === "light" ? (
          <button
            className="bg-gray-100 text-gray-600 h-10 w-10 rounded  grid place-content-center "
            onClick={() => setPreferrence("dark")}
          >
            <BsMoon />
          </button>
        ) : (
          <button
            className="bg-slate-800 text-white h-10 w-10 rounded grid place-content-center"
            onClick={() => setPreferrence("light")}
          >
            <BsSun />
          </button>
        )}
      </div>
      <div className="mx-5 w-full sm:w-[400px] grow self-center">
        <img
          src={reactLogo}
          alt="react logo"
          className="h-[50px] mb-5 mx-auto"
        />
        <label
          htmlFor="name"
          className="text-gray-600 block mb-2 dark:text-gray-100"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="py-2 px-3 border border-gray-300 w-full mb-5 rounded dark:bg-slate-800 dark:border-gray-700 focus:border-sky-300 dark:text-white"
        />
        <label
          htmlFor="password"
          className="text-gray-600 block  mb-2 dark:text-gray-100"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="py-2 px-3 border border-gray-300 w-full mb-5 rounded dark:bg-slate-800 dark:border-gray-700 focus:border-sky-300 dark:text-white"
        />
        <button className="bg-sky-600 block w-full py-2 px-3  rounded text-white mb-3">
          Log In
        </button>
        <button className="text-sky-600 block w-full py-2 px-3  dark:text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default App;
