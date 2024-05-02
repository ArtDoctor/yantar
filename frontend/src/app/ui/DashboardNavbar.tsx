import React from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { currentUser } from "@clerk/nextjs/server";
import { userDataResponse } from "../../../types";
import { getUserInfo } from "@/lib/utils";

export default async function DashboardNavbar() {
  const user = await currentUser();
  const apiKey: string = process.env.YANTAR_API_KEY!;

  if (!user) {
    return (
      <div className="p-4">
        <div>
          <div className="flex items-center justify-center gap-2 rounded bg-skin-subtle pb-2 pt-[10px] font-medium">
            <Image
              alt="yantar logo"
              src="/yantar-logo.svg"
              width={60}
              height={20}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-0 md:gap-2 pt-2 justify-between">
          <div className="grid grid-cols-2 gap-2 md:flex w-full pb-2">
            <NavLink
              text="Dashboard"
              url="/dashboard"
              iconPath="M17.0252 2.07708V16.8744C17.0163 16.9248 17.0091 16.9759 16.9978 17.0256C16.9439 17.2649 16.8277 17.4689 16.6498 17.6376C16.4026 17.8718 16.105 17.9753 15.7676 17.9753C10.9425 17.9753 6.1177 17.9753 1.29258 17.9753C1.27612 17.9753 1.25967 17.9757 1.24321 17.9753C0.924003 17.9647 0.642513 17.8594 0.41108 17.6359C0.155647 17.3887 0.0356445 17.0856 0.0356445 16.7297C0.0366731 11.8936 0.0363303 7.05786 0.0363303 2.22177C0.0363303 2.19709 0.0363303 2.1724 0.037016 2.14771C0.0565592 1.59056 0.453252 1.11981 0.99909 1.00564C1.05223 0.994664 1.10572 0.985407 1.15921 0.975464C6.07518 0.975464 10.9912 0.975464 15.9071 0.975464C15.9603 0.98575 16.0134 0.995007 16.0666 1.00598C16.5733 1.11158 16.9511 1.52507 17.0118 2.03937C17.0132 2.05205 17.0204 2.0644 17.0252 2.07674V2.07708ZM1.26344 7.65855C1.24561 7.72781 1.24424 16.6741 1.26207 16.752H15.8067V7.65855H1.26344ZM7.32423 6.43453H15.806V2.20223C15.6778 2.1844 7.38149 2.19057 7.32423 2.20806V6.43453ZM6.10055 6.43522V2.19846H1.25487V6.43488H6.10021L6.10055 6.43522ZM7.31669 12.5454C7.29852 13.4701 6.5857 14.2484 5.64249 14.3231C5.16659 14.3608 4.73527 14.2309 4.36292 13.9302C3.91411 13.5678 3.69297 13.0895 3.67445 12.508C3.26885 12.506 2.86804 12.506 2.46723 12.508C2.44769 13.5105 3.01135 14.6999 4.22235 15.2629C5.41037 15.8153 6.81268 15.5424 7.70892 14.5895C8.60037 13.6419 8.79066 12.2255 8.17693 11.082C7.86561 10.5019 7.41166 10.0661 6.81988 9.77711C6.4057 9.57482 5.96752 9.47504 5.50123 9.47539V10.6857C6.5353 10.6977 7.33623 11.5439 7.31669 12.545V12.5454ZM12.161 9.48087H10.9658C10.9493 9.61493 10.9555 15.4817 10.972 15.5417H12.1658C12.1826 15.4062 12.1768 9.53779 12.161 9.48087ZM13.3994 15.5393H14.5943C14.6114 15.4309 14.6066 12.5728 14.5888 12.5111H13.3957C13.3795 12.6191 13.3843 15.4796 13.3998 15.5393H13.3994Z"
            />
            <NavLink
              text="Developers"
              url="/dashboard/developers"
              iconPath="M0 16.5761H16.4138V17.7485H0V16.5761ZM13.1897 6.6106H3.51724C3.20639 6.61091 2.90837 6.73454 2.68856 6.95434C2.46876 7.17414 2.34514 7.47217 2.34483 7.78302V12.4727C2.34576 13.2497 2.65486 13.9947 3.20434 14.5442C3.75381 15.0937 4.49879 15.4028 5.27586 15.4037H9.96552C10.7426 15.4028 11.4876 15.0937 12.037 14.5442C12.5865 13.9947 12.8956 13.2497 12.8966 12.4727V11.8865H13.1897C13.8893 11.8865 14.5602 11.6085 15.055 11.1138C15.5497 10.6191 15.8276 9.94816 15.8276 9.24853C15.8276 8.54891 15.5497 7.87794 15.055 7.38324C14.5602 6.88853 13.8893 6.6106 13.1897 6.6106ZM11.7241 12.4727C11.7237 12.9389 11.5382 13.386 11.2085 13.7157C10.8788 14.0454 10.4318 14.2308 9.96552 14.2313H5.27586C4.80959 14.2308 4.36255 14.0454 4.03284 13.7157C3.70314 13.386 3.51771 12.9389 3.51724 12.4727V7.78302H11.7241V12.4727ZM13.1897 10.7141H12.8966V7.78302H13.1897C13.5783 7.78302 13.9511 7.93742 14.2259 8.21226C14.5008 8.4871 14.6552 8.85986 14.6552 9.24853C14.6552 9.63721 14.5008 10.01 14.2259 10.2848C13.9511 10.5596 13.5783 10.7141 13.1897 10.7141ZM9.96552 5.43819H8.7931V5.3526C8.79396 5.13472 8.73373 4.92096 8.61923 4.73559C8.50473 4.55022 8.34056 4.40065 8.14535 4.30388L6.57138 3.51778C6.18109 3.32406 5.85285 3.0249 5.62388 2.65419C5.39491 2.28348 5.27435 1.85605 5.27586 1.42033V0.748535H6.44828V1.42033C6.44761 1.63824 6.50799 1.85199 6.62258 2.03734C6.73717 2.2227 6.90139 2.37225 7.09662 2.46905L8.66941 3.25516C9.05977 3.44884 9.38809 3.74798 9.61716 4.11868C9.84624 4.48939 9.96691 4.91684 9.96552 5.3526V5.43819Z"
            />
            <NavLink
              text="Create ad"
              url="/dashboard/create-ad"
              iconPath="M16.4351 9.24854C16.4351 5.24139 13.1566 1.96282 9.14941 1.96282C5.14227 1.96282 1.8637 5.24139 1.8637 9.24854C1.8637 13.2557 5.14227 16.5342 9.14941 16.5342C13.1566 16.5342 16.4351 13.2557 16.4351 9.24854ZM0.649414 9.24854C0.649414 4.57354 4.47441 0.748535 9.14941 0.748535C13.8244 0.748535 17.6494 4.57354 17.6494 9.24854C17.6494 13.9235 13.8244 17.7485 9.14941 17.7485C4.47441 17.7485 0.649414 13.9235 0.649414 9.24854ZM9.75656 8.64139H14.0066V9.85568H9.75656V14.1057H8.54227V9.85568H4.29227V8.64139H8.54227V4.39139H9.75656V8.64139Z"
            />
            <NavLink
              text="Buy credits"
              url="/dashboard/buy-credits"
              iconPath="M13.2858 2.58581C12.0172 1.73815 10.5257 1.28571 9 1.28571C6.95478 1.2881 4.994 2.10161 3.54781 3.54781C2.10162 4.994 1.2881 6.95477 1.28572 9C1.28572 10.5257 1.73815 12.0172 2.58581 13.2858C3.43347 14.5544 4.63827 15.5432 6.04787 16.1271C7.45747 16.7109 9.00856 16.8637 10.505 16.5661C12.0014 16.2684 13.376 15.5337 14.4548 14.4548C15.5337 13.376 16.2684 12.0014 16.5661 10.505C16.8637 9.00856 16.7109 7.45747 16.1271 6.04787C15.5432 4.63827 14.5544 3.43346 13.2858 2.58581ZM3.99987 1.51677C5.47991 0.527841 7.21997 0 9 0C11.387 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 10.78 17.4722 12.5201 16.4832 14.0001C15.4943 15.4802 14.0887 16.6337 12.4442 17.3149C10.7996 17.9961 8.99002 18.1743 7.24419 17.8271C5.49836 17.4798 3.89471 16.6226 2.63604 15.364C1.37737 14.1053 0.520203 12.5016 0.172936 10.7558C-0.17433 9.00998 0.00389955 7.20038 0.685088 5.55585C1.36628 3.91131 2.51983 2.50571 3.99987 1.51677ZM9 3.85714L3.85714 9L9 14.1429L14.1429 9L9 3.85714Z"
            />
            <NavLink
              text="Withdraw"
              url="/dashboard/withdraw"
              iconPath="M1.2418 9.53487C1.46934 9.76242 1.77774 9.89061 2.09954 9.89141H16.671C16.9929 9.89093 17.3014 9.76284 17.5291 9.53522C17.7567 9.3076 17.8848 8.99902 17.8853 8.67712V1.39141C17.8845 1.06961 17.7563 0.761215 17.5287 0.533665C17.3012 0.306116 16.9928 0.177926 16.671 0.177124H2.09954C1.77774 0.177926 1.46934 0.306116 1.2418 0.533665C1.01425 0.761215 0.886055 1.06961 0.885254 1.39141V8.67712C0.886055 8.99893 1.01425 9.30732 1.2418 9.53487ZM2.09954 1.39141H16.671V8.67712H2.09954V1.39141ZM17.8853 12.32V11.1057H0.885254V12.32H17.8853ZM17.8853 14.7486V13.5343H0.885254V14.7486H17.8853ZM13.5678 4.02463C13.7675 3.8912 14.0022 3.81998 14.2424 3.81998C14.5644 3.81998 14.8733 3.94792 15.101 4.17564C15.3287 4.40336 15.4567 4.71222 15.4567 5.03427C15.4567 5.27443 15.3855 5.5092 15.252 5.70889C15.1186 5.90858 14.929 6.06422 14.7071 6.15612C14.4852 6.24803 14.241 6.27208 14.0055 6.22522C13.77 6.17837 13.5536 6.06272 13.3838 5.8929C13.2139 5.72308 13.0983 5.50671 13.0514 5.27116C13.0046 5.03562 13.0286 4.79146 13.1205 4.56958C13.2124 4.3477 13.3681 4.15805 13.5678 4.02463ZM8.03601 7.05355C8.43539 7.32041 8.90493 7.46284 9.38525 7.46284C10.0291 7.46204 10.6464 7.20591 11.1016 6.75064C11.5569 6.29537 11.813 5.67812 11.8138 5.03427C11.8138 4.55394 11.6714 4.0844 11.4045 3.68503C11.1377 3.28565 10.7584 2.97437 10.3146 2.79056C9.87086 2.60675 9.38256 2.55865 8.91146 2.65236C8.44037 2.74607 8.00764 2.97737 7.66799 3.31701C7.32835 3.65665 7.09705 4.08938 7.00335 4.56048C6.90964 5.03157 6.95773 5.51988 7.14155 5.96364C7.32536 6.40741 7.63664 6.7867 8.03601 7.05355ZM8.71063 4.02463C8.91032 3.8912 9.14509 3.81998 9.38525 3.81998C9.7072 3.8203 10.0159 3.94834 10.2435 4.17599C10.4712 4.40365 10.5992 4.71232 10.5995 5.03427C10.5995 5.27443 10.5283 5.5092 10.3949 5.70889C10.2615 5.90858 10.0718 6.06422 9.84994 6.15612C9.62806 6.24803 9.38391 6.27208 9.14836 6.22522C8.91281 6.17837 8.69645 6.06272 8.52662 5.8929C8.3568 5.72308 8.24115 5.50671 8.1943 5.27116C8.14745 5.03562 8.17149 4.79146 8.2634 4.56958C8.35531 4.3477 8.51094 4.15805 8.71063 4.02463ZM3.85349 4.02463C4.05318 3.8912 4.28795 3.81998 4.52811 3.81998C4.85016 3.81998 5.15902 3.94792 5.38674 4.17564C5.61446 4.40336 5.7424 4.71222 5.7424 5.03427C5.7424 5.27443 5.67118 5.5092 5.53775 5.70889C5.40433 5.90858 5.21468 6.06422 4.9928 6.15612C4.77092 6.24803 4.52676 6.27208 4.29122 6.22522C4.05567 6.17837 3.8393 6.06272 3.66948 5.8929C3.49966 5.72308 3.38401 5.50671 3.33716 5.27116C3.2903 5.03562 3.31435 4.79146 3.40626 4.56958C3.49816 4.3477 3.6538 4.15805 3.85349 4.02463Z"
            />
            <NavLink
              text="Org name"
              url="/dashboard/account"
              iconPath="M17.0466 7.17573L13.4059 0.501136C13.3535 0.405378 13.2763 0.325525 13.1823 0.269995C13.0883 0.214464 12.9811 0.185312 12.872 0.18561H4.37704C4.26788 0.185312 4.16067 0.214464 4.0667 0.269995C3.97272 0.325525 3.89547 0.405378 3.84307 0.501136L0.202387 7.17573C0.149131 7.26797 0.121094 7.3726 0.121094 7.47912C0.121094 7.58563 0.149131 7.69026 0.202387 7.78251L3.84307 14.4571C3.89857 14.5483 3.97717 14.6233 4.07093 14.6745C4.16468 14.7256 4.27028 14.7511 4.37704 14.7484H12.872C12.9811 14.7486 13.0883 14.7195 13.1823 14.664C13.2763 14.6084 13.3535 14.5286 13.4059 14.4328L17.0466 7.75823C17.0955 7.66893 17.1211 7.56877 17.1211 7.46698C17.1211 7.36519 17.0955 7.26503 17.0466 7.17573ZM12.8295 2.00595L15.4933 6.8602H9.72885L12.8295 2.00595ZM8.6245 6.33837L5.48138 1.39917H11.7676L8.6245 6.33837ZM4.41951 2.00595L7.52016 6.8602H1.75575L4.41951 2.00595ZM1.75575 8.07376H7.52016L4.41951 12.928L1.75575 8.07376ZM8.6245 8.59559L11.7676 13.5348H5.48138L8.6245 8.59559ZM12.8295 12.928L9.72885 8.07376H15.4933L12.8295 12.928Z"
            />
          </div>
        </div>
      </div>
    );
  }

  const userData: userDataResponse = await getUserInfo(apiKey, user.id);

  return (
    <div className="p-4">
      <div>
        <div className="flex items-center justify-center gap-2 rounded bg-skin-subtle pb-2 pt-[10px] font-medium">
          <Image
            alt="yantar logo"
            src="/yantar-logo.svg"
            width={60}
            height={20}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-0 md:gap-2 pt-2 justify-between">
        <div className="grid grid-cols-2 gap-2 md:flex w-full pb-2">
          <NavLink
            text="Dashboard"
            url="/dashboard"
            iconPath="M17.0252 2.07708V16.8744C17.0163 16.9248 17.0091 16.9759 16.9978 17.0256C16.9439 17.2649 16.8277 17.4689 16.6498 17.6376C16.4026 17.8718 16.105 17.9753 15.7676 17.9753C10.9425 17.9753 6.1177 17.9753 1.29258 17.9753C1.27612 17.9753 1.25967 17.9757 1.24321 17.9753C0.924003 17.9647 0.642513 17.8594 0.41108 17.6359C0.155647 17.3887 0.0356445 17.0856 0.0356445 16.7297C0.0366731 11.8936 0.0363303 7.05786 0.0363303 2.22177C0.0363303 2.19709 0.0363303 2.1724 0.037016 2.14771C0.0565592 1.59056 0.453252 1.11981 0.99909 1.00564C1.05223 0.994664 1.10572 0.985407 1.15921 0.975464C6.07518 0.975464 10.9912 0.975464 15.9071 0.975464C15.9603 0.98575 16.0134 0.995007 16.0666 1.00598C16.5733 1.11158 16.9511 1.52507 17.0118 2.03937C17.0132 2.05205 17.0204 2.0644 17.0252 2.07674V2.07708ZM1.26344 7.65855C1.24561 7.72781 1.24424 16.6741 1.26207 16.752H15.8067V7.65855H1.26344ZM7.32423 6.43453H15.806V2.20223C15.6778 2.1844 7.38149 2.19057 7.32423 2.20806V6.43453ZM6.10055 6.43522V2.19846H1.25487V6.43488H6.10021L6.10055 6.43522ZM7.31669 12.5454C7.29852 13.4701 6.5857 14.2484 5.64249 14.3231C5.16659 14.3608 4.73527 14.2309 4.36292 13.9302C3.91411 13.5678 3.69297 13.0895 3.67445 12.508C3.26885 12.506 2.86804 12.506 2.46723 12.508C2.44769 13.5105 3.01135 14.6999 4.22235 15.2629C5.41037 15.8153 6.81268 15.5424 7.70892 14.5895C8.60037 13.6419 8.79066 12.2255 8.17693 11.082C7.86561 10.5019 7.41166 10.0661 6.81988 9.77711C6.4057 9.57482 5.96752 9.47504 5.50123 9.47539V10.6857C6.5353 10.6977 7.33623 11.5439 7.31669 12.545V12.5454ZM12.161 9.48087H10.9658C10.9493 9.61493 10.9555 15.4817 10.972 15.5417H12.1658C12.1826 15.4062 12.1768 9.53779 12.161 9.48087ZM13.3994 15.5393H14.5943C14.6114 15.4309 14.6066 12.5728 14.5888 12.5111H13.3957C13.3795 12.6191 13.3843 15.4796 13.3998 15.5393H13.3994Z"
          />
          <NavLink
            text="Developers"
            url="/dashboard/developers"
            iconPath="M0 16.5761H16.4138V17.7485H0V16.5761ZM13.1897 6.6106H3.51724C3.20639 6.61091 2.90837 6.73454 2.68856 6.95434C2.46876 7.17414 2.34514 7.47217 2.34483 7.78302V12.4727C2.34576 13.2497 2.65486 13.9947 3.20434 14.5442C3.75381 15.0937 4.49879 15.4028 5.27586 15.4037H9.96552C10.7426 15.4028 11.4876 15.0937 12.037 14.5442C12.5865 13.9947 12.8956 13.2497 12.8966 12.4727V11.8865H13.1897C13.8893 11.8865 14.5602 11.6085 15.055 11.1138C15.5497 10.6191 15.8276 9.94816 15.8276 9.24853C15.8276 8.54891 15.5497 7.87794 15.055 7.38324C14.5602 6.88853 13.8893 6.6106 13.1897 6.6106ZM11.7241 12.4727C11.7237 12.9389 11.5382 13.386 11.2085 13.7157C10.8788 14.0454 10.4318 14.2308 9.96552 14.2313H5.27586C4.80959 14.2308 4.36255 14.0454 4.03284 13.7157C3.70314 13.386 3.51771 12.9389 3.51724 12.4727V7.78302H11.7241V12.4727ZM13.1897 10.7141H12.8966V7.78302H13.1897C13.5783 7.78302 13.9511 7.93742 14.2259 8.21226C14.5008 8.4871 14.6552 8.85986 14.6552 9.24853C14.6552 9.63721 14.5008 10.01 14.2259 10.2848C13.9511 10.5596 13.5783 10.7141 13.1897 10.7141ZM9.96552 5.43819H8.7931V5.3526C8.79396 5.13472 8.73373 4.92096 8.61923 4.73559C8.50473 4.55022 8.34056 4.40065 8.14535 4.30388L6.57138 3.51778C6.18109 3.32406 5.85285 3.0249 5.62388 2.65419C5.39491 2.28348 5.27435 1.85605 5.27586 1.42033V0.748535H6.44828V1.42033C6.44761 1.63824 6.50799 1.85199 6.62258 2.03734C6.73717 2.2227 6.90139 2.37225 7.09662 2.46905L8.66941 3.25516C9.05977 3.44884 9.38809 3.74798 9.61716 4.11868C9.84624 4.48939 9.96691 4.91684 9.96552 5.3526V5.43819Z"
          />
          <NavLink
            text="Create ad"
            url="/dashboard/create-ad"
            iconPath="M16.4351 9.24854C16.4351 5.24139 13.1566 1.96282 9.14941 1.96282C5.14227 1.96282 1.8637 5.24139 1.8637 9.24854C1.8637 13.2557 5.14227 16.5342 9.14941 16.5342C13.1566 16.5342 16.4351 13.2557 16.4351 9.24854ZM0.649414 9.24854C0.649414 4.57354 4.47441 0.748535 9.14941 0.748535C13.8244 0.748535 17.6494 4.57354 17.6494 9.24854C17.6494 13.9235 13.8244 17.7485 9.14941 17.7485C4.47441 17.7485 0.649414 13.9235 0.649414 9.24854ZM9.75656 8.64139H14.0066V9.85568H9.75656V14.1057H8.54227V9.85568H4.29227V8.64139H8.54227V4.39139H9.75656V8.64139Z"
          />
          <NavLink
            text="Buy credits"
            url="/dashboard/buy-credits"
            iconPath="M13.2858 2.58581C12.0172 1.73815 10.5257 1.28571 9 1.28571C6.95478 1.2881 4.994 2.10161 3.54781 3.54781C2.10162 4.994 1.2881 6.95477 1.28572 9C1.28572 10.5257 1.73815 12.0172 2.58581 13.2858C3.43347 14.5544 4.63827 15.5432 6.04787 16.1271C7.45747 16.7109 9.00856 16.8637 10.505 16.5661C12.0014 16.2684 13.376 15.5337 14.4548 14.4548C15.5337 13.376 16.2684 12.0014 16.5661 10.505C16.8637 9.00856 16.7109 7.45747 16.1271 6.04787C15.5432 4.63827 14.5544 3.43346 13.2858 2.58581ZM3.99987 1.51677C5.47991 0.527841 7.21997 0 9 0C11.387 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 10.78 17.4722 12.5201 16.4832 14.0001C15.4943 15.4802 14.0887 16.6337 12.4442 17.3149C10.7996 17.9961 8.99002 18.1743 7.24419 17.8271C5.49836 17.4798 3.89471 16.6226 2.63604 15.364C1.37737 14.1053 0.520203 12.5016 0.172936 10.7558C-0.17433 9.00998 0.00389955 7.20038 0.685088 5.55585C1.36628 3.91131 2.51983 2.50571 3.99987 1.51677ZM9 3.85714L3.85714 9L9 14.1429L14.1429 9L9 3.85714Z"
          />
          <NavLink
            text="Withdraw"
            url="/dashboard/withdraw"
            iconPath="M1.2418 9.53487C1.46934 9.76242 1.77774 9.89061 2.09954 9.89141H16.671C16.9929 9.89093 17.3014 9.76284 17.5291 9.53522C17.7567 9.3076 17.8848 8.99902 17.8853 8.67712V1.39141C17.8845 1.06961 17.7563 0.761215 17.5287 0.533665C17.3012 0.306116 16.9928 0.177926 16.671 0.177124H2.09954C1.77774 0.177926 1.46934 0.306116 1.2418 0.533665C1.01425 0.761215 0.886055 1.06961 0.885254 1.39141V8.67712C0.886055 8.99893 1.01425 9.30732 1.2418 9.53487ZM2.09954 1.39141H16.671V8.67712H2.09954V1.39141ZM17.8853 12.32V11.1057H0.885254V12.32H17.8853ZM17.8853 14.7486V13.5343H0.885254V14.7486H17.8853ZM13.5678 4.02463C13.7675 3.8912 14.0022 3.81998 14.2424 3.81998C14.5644 3.81998 14.8733 3.94792 15.101 4.17564C15.3287 4.40336 15.4567 4.71222 15.4567 5.03427C15.4567 5.27443 15.3855 5.5092 15.252 5.70889C15.1186 5.90858 14.929 6.06422 14.7071 6.15612C14.4852 6.24803 14.241 6.27208 14.0055 6.22522C13.77 6.17837 13.5536 6.06272 13.3838 5.8929C13.2139 5.72308 13.0983 5.50671 13.0514 5.27116C13.0046 5.03562 13.0286 4.79146 13.1205 4.56958C13.2124 4.3477 13.3681 4.15805 13.5678 4.02463ZM8.03601 7.05355C8.43539 7.32041 8.90493 7.46284 9.38525 7.46284C10.0291 7.46204 10.6464 7.20591 11.1016 6.75064C11.5569 6.29537 11.813 5.67812 11.8138 5.03427C11.8138 4.55394 11.6714 4.0844 11.4045 3.68503C11.1377 3.28565 10.7584 2.97437 10.3146 2.79056C9.87086 2.60675 9.38256 2.55865 8.91146 2.65236C8.44037 2.74607 8.00764 2.97737 7.66799 3.31701C7.32835 3.65665 7.09705 4.08938 7.00335 4.56048C6.90964 5.03157 6.95773 5.51988 7.14155 5.96364C7.32536 6.40741 7.63664 6.7867 8.03601 7.05355ZM8.71063 4.02463C8.91032 3.8912 9.14509 3.81998 9.38525 3.81998C9.7072 3.8203 10.0159 3.94834 10.2435 4.17599C10.4712 4.40365 10.5992 4.71232 10.5995 5.03427C10.5995 5.27443 10.5283 5.5092 10.3949 5.70889C10.2615 5.90858 10.0718 6.06422 9.84994 6.15612C9.62806 6.24803 9.38391 6.27208 9.14836 6.22522C8.91281 6.17837 8.69645 6.06272 8.52662 5.8929C8.3568 5.72308 8.24115 5.50671 8.1943 5.27116C8.14745 5.03562 8.17149 4.79146 8.2634 4.56958C8.35531 4.3477 8.51094 4.15805 8.71063 4.02463ZM3.85349 4.02463C4.05318 3.8912 4.28795 3.81998 4.52811 3.81998C4.85016 3.81998 5.15902 3.94792 5.38674 4.17564C5.61446 4.40336 5.7424 4.71222 5.7424 5.03427C5.7424 5.27443 5.67118 5.5092 5.53775 5.70889C5.40433 5.90858 5.21468 6.06422 4.9928 6.15612C4.77092 6.24803 4.52676 6.27208 4.29122 6.22522C4.05567 6.17837 3.8393 6.06272 3.66948 5.8929C3.49966 5.72308 3.38401 5.50671 3.33716 5.27116C3.2903 5.03562 3.31435 4.79146 3.40626 4.56958C3.49816 4.3477 3.6538 4.15805 3.85349 4.02463Z"
          />
          <NavLink
            text="Org name"
            url="/dashboard/account"
            iconPath="M17.0466 7.17573L13.4059 0.501136C13.3535 0.405378 13.2763 0.325525 13.1823 0.269995C13.0883 0.214464 12.9811 0.185312 12.872 0.18561H4.37704C4.26788 0.185312 4.16067 0.214464 4.0667 0.269995C3.97272 0.325525 3.89547 0.405378 3.84307 0.501136L0.202387 7.17573C0.149131 7.26797 0.121094 7.3726 0.121094 7.47912C0.121094 7.58563 0.149131 7.69026 0.202387 7.78251L3.84307 14.4571C3.89857 14.5483 3.97717 14.6233 4.07093 14.6745C4.16468 14.7256 4.27028 14.7511 4.37704 14.7484H12.872C12.9811 14.7486 13.0883 14.7195 13.1823 14.664C13.2763 14.6084 13.3535 14.5286 13.4059 14.4328L17.0466 7.75823C17.0955 7.66893 17.1211 7.56877 17.1211 7.46698C17.1211 7.36519 17.0955 7.26503 17.0466 7.17573ZM12.8295 2.00595L15.4933 6.8602H9.72885L12.8295 2.00595ZM8.6245 6.33837L5.48138 1.39917H11.7676L8.6245 6.33837ZM4.41951 2.00595L7.52016 6.8602H1.75575L4.41951 2.00595ZM1.75575 8.07376H7.52016L4.41951 12.928L1.75575 8.07376ZM8.6245 8.59559L11.7676 13.5348H5.48138L8.6245 8.59559ZM12.8295 12.928L9.72885 8.07376H15.4933L12.8295 12.928Z"
          />
        </div>
      </div>
      {userData && (
        <div className="flex justify-end w-full">
          <span className="p-1 text-skin-base bg-skin-subtle leading-none rounded text-sm">
            {userData.credits}
          </span>
        </div>
      )}
    </div>
  );
}