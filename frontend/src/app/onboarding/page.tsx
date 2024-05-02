import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

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
      <div className="flex items-center justify-center w-full h-[60vh]">
        <div className="flex flex-col gap-4 text-skin-base w-[40rem]">
          <p className="text-3xl">One more step..</p>
          <input placeholder="Organization"></input>
          <textarea placeholder="Describe your organization"></textarea>
          <Link href="/dashboard" className="w-full">
            <Button text="Proceed to dashboard ->" width="min-w-full" />
          </Link>
        </div>
      </div>
    </div>
  );
}
