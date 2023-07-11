"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <nav className="navbar bg-white shadow-md sticky top-0 z-[999]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/" className={path == "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/alternative"
                className={path == "/alternative" ? "active" : ""}
              >
                Alternative
              </Link>
            </li>
            <li>
              <Link
                href="/criterias"
                className={path == "/criterias" ? "active" : ""}
              >
                Criteria
              </Link>
            </li>
            <li>
              <Link
                href="/results"
                className={path == "/results" ? "active" : ""}
              >
                Results
              </Link>
            </li>
            <li>
              <Link href="/about" className={path == "/about" ? "active" : ""}>
                About
              </Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          DecisioMate
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-20">
          <li>
            <Link href="/" className={path == "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/alternative"
              className={path == "/alternative" ? "active" : ""}
            >
              Alternative
            </Link>
          </li>
          <li>
            <Link
              href="/criterias"
              className={path == "/criterias" ? "active" : ""}
            >
              Criteria
            </Link>
          </li>
          <li>
            <Link
              href="/results"
              className={path == "/results" ? "active" : ""}
            >
              Results
            </Link>
          </li>
          <li>
            <Link href="/about" className={path == "/about" ? "active" : ""}>
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </nav>
  );
};

export default Navbar;
