"use client";

import React, { ChangeEvent, useState } from "react";
import Input from "./Input";
import { CtaDropdown } from "./CtaDropdown";
import { useToast } from "@/components/ui/use-toast";
import { createAd } from "@/lib/utils";
import { Button } from "@chakra-ui/button";

type NewAdProps = {
  apiKey: string;
  authId: string;
  userId: number;
};

const NewAd: React.FC<NewAdProps> = ({ userId, apiKey, authId }) => {
  const [headlineValue, setHeadlineValue] = useState<string>("");
  const [descriptionValue, setDescriptionValue] = useState<string>("");
  const [linkValue, setLinkValue] = useState<string>("");
  const [isValidLink, setIsValidLink] = useState<boolean>(true);
  const [ctaValue, setCtaValue] = useState<string>("Shop now");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleHeadlineChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= 60) {
      setHeadlineValue(inputValue);
    } else {
      setHeadlineValue(inputValue.slice(0, 60));
    }
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= 300) {
      setDescriptionValue(inputValue);
    } else {
      setDescriptionValue(inputValue.slice(0, 300));
    }
  };

  const handleLinkChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    setLinkValue(inputValue);

    const urlRegex = /^(https?:\/\/)?([\w.]+)\.([a-z]{2,})(\/[\w .-]*)*\/?$/i;
    const isValid = urlRegex.test(inputValue);

    setIsValidLink(isValid);
  };

  const handleCtaChange = (value: string) => {
    setCtaValue(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!headlineValue.trim() || !linkValue.trim()) {
      toast({
        title: "Headline or Link are empty",
        description:
          "Please make sure that both Headline and Link are filled in.",
      });
      return;
    }

    if (!isValidLink) {
      toast({
        title: "Link is not valid",
        description: "Please enter a valid link.",
      });
      return;
    }

    try {
      setIsLoading(true);
      await createAd(
        apiKey,
        authId,
        descriptionValue,
        headlineValue,
        linkValue,
        ctaValue,
        userId
      );

      setIsLoading(false);
      setHeadlineValue("");
      setDescriptionValue("");
      setLinkValue("");
      setIsValidLink(true);

      toast({
        title: "Ad created successfully!",
        description: "Manage your ad from the Dashboard.",
      });
    } catch (error) {
      console.log("Ad creation error:", error);
      toast({
        title: "Ad creation not successful",
        description: "Please try again.",
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2 mt-6">
      <div className="w-full lg:w-1/3 p-4 border-skin-base border rounded-lg">
        <form onSubmit={handleSubmit}>
          <div>
            <p className="text-xl text-skin-base mb-1">Headline</p>
            <p className="text-skin-muted text-sm mb-3">
              Tell your potential customers about your product or service.
            </p>
            <Input
              height="3rem"
              name="headline"
              placeholder="Enter headline"
              value={headlineValue}
              onChange={handleHeadlineChange}
            />
            <p className="text-sm text-right text-skin-invisible">
              {headlineValue.length}/60
            </p>
          </div>
          <div className="mt-3">
            <p className="text-xl text-skin-base mb-1">Description</p>
            <p className="text-skin-muted text-sm mb-3">
              Describe your product or service so Yantar can better target your
              ad.
            </p>
            <Input
              height="5rem"
              name="description"
              placeholder="Enter description"
              value={descriptionValue}
              onChange={handleDescriptionChange}
            />
            <p className="text-sm text-right text-skin-invisible">
              {descriptionValue.length}/300
            </p>
          </div>
          <div className="mt-3">
            <p className="text-xl text-skin-base mb-1">Link</p>
            <p className="text-skin-muted text-sm mb-3">
              This is where you want to drive traffic.
            </p>
            <Input
              height="3rem"
              name="link"
              placeholder="Enter link"
              value={linkValue}
              onChange={handleLinkChange}
            />
          </div>
          <div className="mt-3">
            <p className="text-xl text-skin-base mb-3">CTA</p>
            <CtaDropdown onChange={handleCtaChange} />
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <Button
              isLoading={isLoading}
              type="submit"
              className="bg-skin-base text-white w-full text-md md:w-auto py-2 px-12 font-medium rounded-md 3xl:text-lg"
            >
              Create ad
            </Button>
          </div>
        </form>
      </div>
      <div className="flex flex-col w-full lg:w-2/3 bg-white p-4 border-skin-base border rounded-lg">
        <p className="text-xl text-skin-base mb-1">Preview</p>
        <div className="flex items-center justify-center w-full grow pb-7">
          <div className="p-3 bg-gray-100 h-min border border-gray-200 rounded-lg pr-8">
            <span className="px-3 py-[2px] bg-white text-gray-400 text-[10px] font-medium rounded">
              Sponsored
            </span>
            <p className="mt-1 max-w-[28ch] text-lg mb-2 break-words">
              {headlineValue}
            </p>
            {isValidLink && (
              <a href={linkValue} target="_blank" className="text-skin-base">
                {ctaValue}
              </a>
            )}
            {!isValidLink && (
              <span className="text-red-500">
                Invalid link. Please enter a valid URL.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewAd;
