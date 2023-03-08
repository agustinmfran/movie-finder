"use client";
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white ">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" className="cursor-pointer">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold ">
                  MOVIE<span className="text-red-600">finder</span>
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
