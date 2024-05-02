import Link from "next/link";
import { SingleAdType } from "../../../types";
import SingleAd from "./SingleAd";

type UserAdsProps = {
  ads: SingleAdType[];
};

export default async function UserAds({ ads }: UserAdsProps) {
  return (
    <div className="flex flex-col items-center bg-white p-4 border-skin-base border rounded-lg row-span-4">
      <div className="flex w-full justify-start">
        <h3 className="text-2xl text-skin-base">Your ads</h3>
      </div>
      <div className="justify-between border-b border-skin-base text-skin-base text-sm w-full pt-4 uppercase hidden md:flex">
        <p>Headline</p>
        <div className="flex w-1/3 justify-between">
          <p>Clicks</p>
          <p>Budget</p>
          <p>Created at</p>
        </div>
      </div>
      {ads.length > 0 ? (
        <div className="bg-white py-4 w-full rounded-lg max-h-96 overflow-y-auto custom-scrollbar">
          {ads.map((ad) => (
            <SingleAd key={ad.id} ad={ad} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <Link href="/dashboard/create-ad">
            <button className="rounded-full leading-none bg-skin-subtle text-skin-base text-4xl font-medium p-6">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6.68908H6.68907V0H9.31092V6.68908H16V9.31092H9.31092V16H6.68907V9.31092H0V6.68908Z"
                  fill="#000AFF"
                />
              </svg>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
