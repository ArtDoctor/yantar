"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  text: string;
  url?: string;
  iconPath?: string;
};

const NavLink: React.FC<NavLinkProps> = ({ text, url, iconPath }) => {
  const pathname = usePathname();
  const isActive = pathname === url;

  if (url) {
    return (
      <Link
        href={url}
        className={`group flex h-8 w-full items-center justify-center gap-[6px] rounded px-4 ${
          isActive ? "bg-skin-base" : "bg-skin-subtle"
        } grow transition`}
      >
        <span>
          <svg className="h-[18px] w-[18px]">
            <path
              d={iconPath}
              className={`${
                isActive
                  ? "fill-white"
                  : "fill-[#6366f1] group-hover:fill-[#000aff]"
              } transition`}
            />
          </svg>
        </span>
        <span
          className={`text-xs ${
            isActive
              ? "text-white"
              : "text-skin-muted group-hover:text-skin-base"
          } transition`}
        >
          {text}
        </span>
      </Link>
    );
  }

  // Render a div with the same styles if url is not provided
  return (
    <div
      className={`group flex h-8 w-full items-center justify-center gap-[6px] rounded px-4 bg-skin-subtle grow transition`}
    >
      <span>
        <svg className="h-[18px] w-[18px]">
          <path
            d={iconPath}
            className={`fill-[#6366f1] group-hover:fill-[#000aff] transition`}
          />
        </svg>
      </span>
      <span
        className={`text-xs text-skin-muted group-hover:text-skin-base transition`}
      >
        {text}
      </span>
    </div>
  );
};

export default NavLink;
