import NewAd from "@/app/ui/NewAd";
import { currentUser } from "@clerk/nextjs/server";
import { userDataResponse } from "../../../../types";
import { getUserInfo } from "@/lib/utils";

export default async function Page() {
  const user = await currentUser();
  const apiKey: string = process.env.YANTAR_API_KEY!;

  if (!user) return <div>Sign in to create ads.</div>;

  const userData: userDataResponse = await getUserInfo(apiKey, user.id);

  return (
    <div className="p-4 mt-2 lg:mt-8">
      <h1 className="text-skin-base text-5xl">New ad</h1>
      <NewAd apiKey={apiKey} authId={userData.auth_id} userId={userData.id} />
    </div>
  );
}
