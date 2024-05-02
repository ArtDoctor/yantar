"use server";

import axios from "axios";

export const createAd = async (
  api_key: string,
  auth_id: string,
  description: string,
  one_liner: string,
  link: string,
  CTA: string,
  user_id: number
) => {
  const apiEndpoint = `https://backend.yantar.yazero.io/frontend/insert-ad`;

  const payload = {
    api_key: api_key,
    auth_id: auth_id,
    description: description,
    one_liner: one_liner,
    link: link,
    CTA: CTA,
    user_id: user_id,
    credits_left: 0,
  };

  try {
    const response = await axios.post(apiEndpoint, payload, {
      headers: {
        Authorization: `Bearer ${api_key}`,
      },
    });

    console.log("Ad created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating ad:", error);
    // Handle API request error
    throw new Error("Failed to create ad");
  }
};
