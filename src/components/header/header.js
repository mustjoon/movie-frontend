import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-3">
      <nav className="container mx-auto flex items-center justify-between">
        <h1 className="font-medium text-xl">
          <Link href="/">Movie app</Link>
        </h1>
        <ul className="flex items-center">
          <li className="mr-6">
            <Link
              href="/"
              className="text-gray-400 hover:text-white cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="mr-6">
            <Link
              href="/movies/create"
              className="text-gray-400 hover:text-white"
            >
              Create
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
