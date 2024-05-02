import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-4">
      <Link href="/">
        <div className="flex items-center justify-center gap-2 rounded bg-skin-subtle pb-2 pt-[10px] font-medium">
          <Image
            alt="yantar logo"
            src="/yantar-logo.svg"
            width={60}
            height={20}
          />
        </div>
      </Link>
      <div className="h-[80vh] flex flex-col items-center justify-center pb-24">
        <SignIn path="/sign-in" />
      </div>
    </div>
  );
}
