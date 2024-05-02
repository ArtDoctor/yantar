import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";
import { adDataResponse, createUserData } from "../../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleSignUp = async (data: createUserData) => {
  const apiEndpoint = `https://backend.yantar.yazero.io/frontend/create-user`;

  try {
    const response = await axios.post(apiEndpoint, data, {
      headers: {
        Authorization: `Bearer ${data.api_key}`,
      },
    });

    console.log("User created on backend:", response.data);
    // Handle successful API response
  } catch (error) {
    console.error("Error creating user on backend:", error);
    // Handle API request error
  }
};

// TODO: getApiKey request to get current user API key
export const getUserInfo = async (api_key: string, auth_id: string) => {
  const apiEndpoint = `https://backend.yantar.yazero.io/frontend/get-user-info`;

  const payload = {
    api_key: api_key,
    auth_id: auth_id,
  };

  try {
    const response = await axios.post(apiEndpoint, payload, {
      headers: {
        Authorization: `Bearer ${api_key}`,
      },
    });

    console.log("User fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    // Handle API request error
    throw new Error("Failed to fetch user info");
  }
};

// TODO: create ad by posting the ad form data and API key to our API endpoint
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

// TODO: get ad data and render ad
export const getUserAds = async (
  api_key: string,
  auth_id: string
): Promise<adDataResponse> => {
  const apiEndpoint = `https://backend.yantar.yazero.io/frontend/get-user-ads`;

  const payload = {
    api_key: api_key,
    user_auth_id: auth_id,
  };

  try {
    const response = await axios.post(apiEndpoint, payload, {
      headers: {
        Authorization: `Bearer ${api_key}`,
      },
    });

    const responseData: adDataResponse = response.data;
    console.log("Ads fetched successfully:", response.data);
    return responseData;
  } catch (error) {
    console.error("Error fetching ads:", error);
    // Handle API request error
    throw new Error("Failed to fetch user ads");
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString); // Parse the date string

  // Define month names array
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  // Create formatted date string like "May 1"
  const formattedDate = `${monthNames[monthIndex]} ${day}`;

  return formattedDate;
};

// TODO: get user credits - probably with tanstack to be able to revalidate when the increase/decrease
