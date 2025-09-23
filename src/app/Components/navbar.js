"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Bell, Moon, Sun, Monitor } from "lucide-react"; // Assuming you have lucide-react for icons
import { useTheme } from "next-themes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const { setTheme } = useTheme();

  return (
    <nav className="w-full bg-gray-900 fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Main Nav */}
        <div className="flex items-center space-x-10">
          <Link href="/" className="flex items-center space-x-2 text-white">
            {/* Replace with your actual logo component or SVG */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM10.5 8C10.0858 8 9.75 8.33579 9.75 8.75V15.25C9.75 15.6642 10.0858 16 10.5 16H13.5C13.9142 16 14.25 15.6642 14.25 15.25V8.75C14.25 8.33579 13.9142 8 13.5 8H10.5Z"
                fill="currentColor"
              />
            </svg>
            <span className="font-semibold text-xl">Flow</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium text-gray-300">
            <li>
              <Link
                href="/dashboard"
                className="hover:text-white transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-blue-500"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className="hover:text-white transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-blue-500"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-white transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-blue-500"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/calendar"
                className="hover:text-white transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-blue-500"
              >
                Calendar
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-800 rounded-md px-3 py-2">
            <Search className="text-gray-400 h-5 w-5 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white focus:outline-none placeholder-gray-400 w-48"
            />
          </div>

          {/* Icons and Theme Changer */}
          <div className="hidden md:flex items-center space-x-4">
            <Bell className="text-gray-400 h-6 w-6 hover:text-white cursor-pointer" />
            <div className="relative">
              <button
                onClick={() => setThemeOpen(!themeOpen)}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white focus:outline-none"
              >
                <Sun className="h-5 w-5" />
              </button>
              {themeOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1">
                  <button
                    onClick={() => setTheme("light")}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                  >
                    <Sun className="mr-3 h-5 w-5" />
                    Light
                  </button>
                  <button
                    onClick={() => setTheme("dark")}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                  >
                    <Moon className="mr-3 h-5 w-5" />
                    Dark
                  </button>
                  <button
                    onClick={() => setTheme("system")}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                  >
                    <Monitor className="mr-3 h-5 w-5" />
                    System
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-400 focus:outline-none hover:text-white"
          >
            {open ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-gray-900 shadow-lg">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-300">
            <li>
              <Link href="/dashboard" onClick={() => setOpen(false)} className="hover:text-white">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/team" onClick={() => setOpen(false)} className="hover:text-white">
                Team
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={() => setOpen(false)} className="hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/calendar" onClick={() => setOpen(false)} className="hover:text-white">
                Calendar
              </Link>
            </li>
            <li className="w-full px-6">
              <div className="flex items-center bg-gray-800 rounded-md px-3 py-2">
                <Search className="text-gray-400 h-5 w-5 mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent text-white focus:outline-none placeholder-gray-400 w-full"
                />
              </div>
            </li>
            <li className="flex items-center space-x-4 pt-4">
                <Bell className="text-gray-400 h-6 w-6 hover:text-white cursor-pointer" />
                <div className="relative">
                  <button
                    onClick={() => setThemeOpen(!themeOpen)}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white focus:outline-none"
                  >
                    <Sun className="h-5 w-5" />
                  </button>
                  {themeOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1">
                      <button
                        onClick={() => setTheme("light")}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                      >
                        <Sun className="mr-3 h-5 w-5" />
                        Light
                      </button>
                      <button
                        onClick={() => setTheme("dark")}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                      >
                        <Moon className="mr-3 h-5 w-5" />
                        Dark
                      </button>
                      <button
                        onClick={() => setTheme("system")}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                      >
                        <Monitor className="mr-3 h-5 w-5" />
                        System
                      </button>
                    </div>
                  )}
                </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}