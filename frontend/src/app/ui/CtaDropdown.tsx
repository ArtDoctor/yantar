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

type CtaDropdownProps = {
  onChange: (value: string) => void;
};

export const CtaDropdown: React.FC<CtaDropdownProps> = ({ onChange }) => {
  const handleSelectChange = (selectedValue: string) => {
    onChange(selectedValue);
  };

  return (
    <div className="relative z-50 text-skin-base">
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-full border-b-2 border-skin-base focus:border-blue-500 bg-white rounded-none">
          <SelectValue placeholder="Select CTA" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup className="bg-skin-light">
            <SelectLabel className="text-skin-base">CTA</SelectLabel>
            <SelectItem
              value="Shop now"
              className="hover:bg-skin-subtle cursor-pointer text-skin-muted transition-colors duration-200"
            >
              Shop now
            </SelectItem>
            <SelectItem
              value="Browse all"
              className="hover:bg-skin-subtle cursor-pointer text-skin-muted transition-colors duration-200"
            >
              Browse all
            </SelectItem>
            <SelectItem
              value="Learn more"
              className="hover:bg-skin-subtle cursor-pointer text-skin-muted transition-colors duration-200"
            >
              Learn more
            </SelectItem>
            <SelectItem
              value="Book a demo"
              className="hover:bg-skin-subtle cursor-pointer text-skin-muted transition-colors duration-200"
            >
              Book a demo
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
