import { EmailAddressResource } from "@clerk/types";

export type createUserData = {
  api_key: string;
  email: string | EmailAddressResource;
  auth_id: string;
};

export type userDataResponse = {
  id: number;
  created_at: string;
  email: string;
  credits: number;
  api_key: string;
  username: string;
  auth_id: string;
};

export type adDataResponse = {
  success: boolean;
  data: {
    id: number;
    created_at: string;
    description: string;
    one_liner: string;
    link: string;
    cta: string;
    user_id: number;
    credits_left: number;
    clicks_amount: number;
  }[];
  traceback: string;
};

export type SingleAdType = {
  id: number;
  created_at: string;
  description: string;
  one_liner: string;
  link: string;
  cta: string;
  user_id: number;
  credits_left: number;
  clicks_amount: number;
};
