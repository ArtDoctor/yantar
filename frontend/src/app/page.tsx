import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";
import Navbar from "./ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col md:flex-row justify-between items-center gap-8 p-4 md:mt-10">
        <div className="w-full lg:w-1/2">
          <h1 className="text-skin-base max-w-[20ch] text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl mb-4">
            Provide advertising space. Grow money and traffic.
          </h1>
          <p className="text-skin-base mb-6 max-w-[40ch] 3xl:text-lg">
            Are you an AI platform? Allow advertisers place relevant ads under
            your AI generated text and earn money. Withdraw money or put them
            back into your own ads.
          </p>
          <Link href="/sign-up">
            <Button text="Start earning ->" />
          </Link>
        </div>
        <div className="w-full h-80 lg:w-1/2 lg:h-[28rem]">
          <div className="relative w-full h-full">
            <Image
              alt="yantar abstact technological mighty hero image"
              src="/yantar-hero-image.png"
              className="rounded-md non-selectable"
              fill
              objectFit="cover"
              priority
            ></Image>
          </div>
        </div>
      </main>
    </>
  );
}
