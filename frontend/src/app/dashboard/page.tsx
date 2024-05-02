import Link from "next/link";
import { FilterDropdown } from "../ui/FilterDropdown";
import DeveloperBanner from "../ui/DeveloperBanner";
import { currentUser } from "@clerk/nextjs/server";
import { SingleAdType, adDataResponse, userDataResponse } from "../../../types";
import { getUserAds, getUserInfo } from "@/lib/utils";
import UserAds from "../ui/UserAds";
import { unstable_noStore as noStore } from "next/cache";

export default async function Page() {
  noStore();
  const user = await currentUser();
  const apiKey: string = process.env.YANTAR_API_KEY!;

  if (!user) {
    return (
      <div className="text-skin-base">
        Please <Link href="/sign-up">Sign up</Link> to view the Dashboard.
      </div>
    );
  }

  const userData: userDataResponse = await getUserInfo(apiKey, user.id);
  const adData: adDataResponse = await getUserAds(apiKey, user.id);
  const ads = adData.data;

  const calculateTotalClicks = (ads: SingleAdType[]) => {
    let totalClicks = 0;

    ads.forEach((ad) => {
      totalClicks += ad.clicks_amount;
    });

    return totalClicks;
  };

  return (
    <div className="p-4 mt-2 lg:mt-8">
      <h1 className="text-skin-base text-5xl">Dashboard</h1>
      <Link href="/">Back home</Link>
      <div className="flex justify-between items-end mt-6">
        <h2 className="text-skin-base">Analytics</h2>
        <FilterDropdown />
      </div>
      {/* DASHBOARD GRID  */}
      <div className="flex flex-col gap-2 mt-3 lg:grid lg:grid-cols-2 lg:grid-rows-6">
        <div className="flex flex-col items-center bg-white py-6 border-skin-base border rounded-lg row-span-1">
          <span className="text-skin-base text-4xl font-bold">0</span>
          <span className="text-sm text-skin-muted">Clicks generated</span>
        </div>
        <div className="flex flex-col items-center bg-white py-6 border-skin-base border rounded-lg row-span-1">
          <span className="text-skin-base text-4xl font-bold">
            {userData.credits}
          </span>
          <span className="text-sm text-skin-muted">Credits earned</span>
        </div>
        <div className="flex flex-col items-center bg-white p-4 border-skin-base border rounded-lg row-span-4">
          <div className="flex w-full justify-start">
            <h3 className="text-2xl text-skin-base">Traffic</h3>
          </div>
          <span className="flex items-center text-skin-base text-9xl font-bold h-full pb-8">
            {calculateTotalClicks(ads)}
          </span>
        </div>
        <UserAds ads={ads} />
        <div className="flex flex-col items-center bg-white py-6 border-skin-base border rounded-lg row-span-1">
          <span className="text-skin-base text-4xl font-bold">0$</span>
          <span className="text-sm text-skin-muted">Spent</span>
        </div>
        <div className="flex flex-col items-center bg-white py-6 border-skin-base border rounded-lg row-span-1">
          <span className="text-skin-base text-4xl font-bold">0$</span>
          <span className="text-sm text-skin-muted">Avg. CPC</span>
        </div>
      </div>
      <DeveloperBanner />
    </div>
  );
}

export const revalidate = 1;
