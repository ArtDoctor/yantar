import React from "react";
import Button from "./Button";
import Link from "next/link";

const DeveloperBanner: React.FC = () => {
  return (
    <div className="bg-skin-base p-4 mt-2 rounded-lg">
      <h3 className="text-white text-2xl mb-4">
        Are you a developer? Start earning.
      </h3>
      <div className="flex flex-col gap-4 lg:justify-between lg:items-end lg:flex-row">
        <p className="text-white font-light max-w-[45ch] text-sm">
          Do you own or manage an AI platform? You can start earning credits by
          providing advertising space directly inside your AI generated text.
          Withdraw or use credits to run ads.
        </p>
        <Link href="/dashboard/developers">
          <Button
            text="Your API key ->"
            bg="bg-white"
            color="text-skin-base"
            width="min-w-full"
          />
        </Link>
      </div>
    </div>
  );
};
export default DeveloperBanner;
