"use client";
import React, { useState } from "react";

type ApiKeyProps = {
  apiKey: string;
};

const ApiKey: React.FC<ApiKeyProps> = ({ apiKey }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 1500); // Reset copy success message after 1.5 seconds
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  };

  return (
    <>
      {apiKey ? (
        <span
          onClick={() => handleCopyToClipboard(apiKey)}
          className="font-semibold"
        >
          {apiKey}
          {copySuccess && (
            <span className="text-green-600 ml-2 text-sm">Copied!</span>
          )}
        </span>
      ) : (
        <p>Generating API key...</p>
      )}
    </>
  );
};

export default ApiKey;
