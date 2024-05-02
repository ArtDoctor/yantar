import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FilterDropdown() {
  return (
    <div className="relative z-50 text-skin-base">
      <Select>
        <SelectTrigger className="w-[180px] border border-skin-base focus:border-blue-500 bg-white">
          <SelectValue placeholder="Last 30 days" />
        </SelectTrigger>
        <SelectContent className="border border-skin-base bg-white">
          <SelectGroup className="bg-skin-light">
            <SelectLabel className="text-skin-base">Filter</SelectLabel>
            <SelectItem
              value="today"
              className="hover:bg-skin-subtle cursor-pointer text-skin-muted transition-colors duration-200"
            >
              Today
            </SelectItem>
            <SelectItem
              value="7"
              className="hover:bg-skin-subtle cursor-pointer text-skin-muted transition-colors duration-200"
            >
              Last 7 Days
            </SelectItem>
            <SelectItem
              value="30"
              className="hover:bg-skin-subtle cursor-pointer text-skin-muted transition-colors duration-200"
            >
              Last 30 Days
            </SelectItem>
            <SelectItem
              value="all"
              className="hover:bg-skin-subtle cursor-pointer text-skin-muted transition-colors duration-200"
            >
              All time
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
