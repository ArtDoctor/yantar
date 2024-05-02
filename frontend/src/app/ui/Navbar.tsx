import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import SignInButton from "./SignButton";

const Navbar: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-center gap-2 rounded bg-skin-subtle pb-2 pt-[10px] font-medium">
        <Image
          alt="yantar logo"
          src="/yantar-logo.svg"
          width={60}
          height={20}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-0 md:gap-2 pt-2 justify-between">
        <div className="grid grid-cols-2 gap-2 md:flex md:w-1/2 pb-2">
          <NavLink
            text="Home"
            url="/"
            iconPath="M9.34425 1.24557C9.24444 1.16775 9.1215 1.12549 8.99494 1.12549C8.86838 1.12549 8.74544 1.16775 8.64562 1.24557L0.5625 7.54838L1.26169 8.43263L2.25 7.662V14.6252C2.25059 14.9234 2.36931 15.2092 2.58016 15.42C2.79101 15.6309 3.07681 15.7496 3.375 15.7502H14.625C14.9232 15.7496 15.209 15.6309 15.4198 15.42C15.6307 15.2092 15.7494 14.9234 15.75 14.6252V7.66707L16.7383 8.43769L17.4375 7.55344L9.34425 1.24557ZM10.125 14.6252H7.875V10.1252H10.125V14.6252ZM11.25 14.6252V10.1252C11.2497 9.82691 11.1311 9.54094 10.9202 9.33002C10.7093 9.11911 10.4233 9.00049 10.125 9.00019H7.875C7.57672 9.00049 7.29075 9.11911 7.07983 9.33002C6.86892 9.54094 6.7503 9.82691 6.75 10.1252V14.6252H3.375V6.78507L9 2.40319L14.625 6.79069V14.6252H11.25Z"
          />
          <NavLink
            text="Platform"
            url="#"
            iconPath="M16.4464 15.6607H12.5893C12.0778 15.6607 11.5873 15.8639 11.2256 16.2256C10.8639 16.5873 10.6607 17.0778 10.6607 17.5893V18.875H11.9464V17.5893C11.9464 17.4188 12.0142 17.2553 12.1347 17.1347C12.2553 17.0142 12.4188 16.9464 12.5893 16.9464H16.4464C16.6169 16.9464 16.7804 17.0142 16.901 17.1347C17.0216 17.2553 17.0893 17.4188 17.0893 17.5893V18.875H18.375V17.5893C18.375 17.0778 18.1718 16.5873 17.8101 16.2256C17.4485 15.8639 16.9579 15.6607 16.4464 15.6607ZM11.9464 12.4464C11.9464 12.955 12.0972 13.4522 12.3798 13.875C12.6623 14.2979 13.0639 14.6275 13.5338 14.8221C14.0037 15.0167 14.5207 15.0677 15.0195 14.9684C15.5183 14.8692 15.9765 14.6243 16.3361 14.2647C16.6958 13.9051 16.9407 13.4469 17.0399 12.9481C17.1391 12.4493 17.0882 11.9323 16.8935 11.4624C16.6989 10.9925 16.3693 10.5909 15.9465 10.3084C15.5236 10.0258 15.0264 9.875 14.5179 9.875C13.8359 9.875 13.1818 10.1459 12.6996 10.6282C12.2173 11.1104 11.9464 11.7644 11.9464 12.4464ZM15.8036 12.4464C15.8036 12.7007 15.7282 12.9493 15.5869 13.1607C15.4456 13.3722 15.2448 13.537 15.0099 13.6343C14.7749 13.7316 14.5164 13.757 14.267 13.7074C14.0176 13.6578 13.7885 13.5354 13.6087 13.3556C13.4289 13.1758 13.3065 12.9467 13.2568 12.6973C13.2072 12.4479 13.2327 12.1893 13.33 11.9544C13.4273 11.7195 13.5921 11.5187 13.8036 11.3774C14.015 11.2361 14.2636 11.1607 14.5179 11.1607C14.8588 11.1607 15.1859 11.2962 15.427 11.5373C15.6681 11.7784 15.8036 12.1054 15.8036 12.4464ZM2.94643 13.0893V12.4464H1.66071V13.0893C1.66071 14.2828 2.13482 15.4274 2.97873 16.2713C3.82265 17.1152 4.96724 17.5893 6.16071 17.5893H8.08928V16.3036H6.16071C5.30823 16.3036 4.49067 15.9649 3.88787 15.3621C3.28508 14.7593 2.94643 13.9418 2.94643 13.0893ZM11.3036 6.01786H15.8036V7.30357H11.3036V6.01786ZM11.3036 3.44643H17.7321V4.73214H11.3036V3.44643ZM11.3036 0.875001H17.7321V2.16072H11.3036V0.875001ZM6.16071 6.66071H2.30357C1.79208 6.66071 1.30154 6.8639 0.939865 7.22558C0.578188 7.58726 0.375 8.0778 0.375 8.58929V9.875H1.66071V8.58929C1.66071 8.41879 1.72844 8.25528 1.849 8.13472C1.96956 8.01416 2.13307 7.94643 2.30357 7.94643H6.16071C6.33121 7.94643 6.49472 8.01416 6.61528 8.13472C6.73584 8.25528 6.80357 8.41879 6.80357 8.58929V9.875H8.08928V8.58929C8.08928 8.0778 7.8861 7.58726 7.52442 7.22558C7.16274 6.8639 6.6722 6.66071 6.16071 6.66071ZM4.23214 6.01786C4.74072 6.01786 5.23788 5.86705 5.66075 5.58449C6.08362 5.30194 6.41321 4.90034 6.60783 4.43047C6.80246 3.96061 6.85338 3.44358 6.75416 2.94477C6.65494 2.44596 6.41004 1.98778 6.05042 1.62816C5.6908 1.26853 5.23261 1.02363 4.7338 0.92441C4.23499 0.825191 3.71797 0.876114 3.2481 1.07074C2.77823 1.26536 2.37663 1.59495 2.09408 2.01782C1.81153 2.44069 1.66071 2.93785 1.66071 3.44643C1.66071 4.12841 1.93163 4.78247 2.41387 5.2647C2.8961 5.74694 3.55016 6.01786 4.23214 6.01786ZM4.23214 2.16072C4.48643 2.16072 4.73501 2.23612 4.94645 2.3774C5.15788 2.51867 5.32267 2.71947 5.41999 2.95441C5.5173 3.18934 5.54276 3.44786 5.49315 3.69726C5.44354 3.94666 5.32109 4.17576 5.14128 4.35557C4.96147 4.53538 4.73238 4.65783 4.48297 4.70744C4.23357 4.75705 3.97505 4.73159 3.74012 4.63427C3.50519 4.53696 3.30439 4.37217 3.16311 4.16073C3.02183 3.9493 2.94643 3.70072 2.94643 3.44643C2.94643 3.10544 3.08189 2.77841 3.32301 2.53729C3.56412 2.29617 3.89115 2.16072 4.23214 2.16072Z"
          />
          <NavLink
            text="Pricing"
            url="/#"
            iconPath="M13.2858 2.58581C12.0172 1.73815 10.5257 1.28571 9 1.28571C6.95478 1.2881 4.994 2.10161 3.54781 3.54781C2.10162 4.994 1.2881 6.95477 1.28572 9C1.28572 10.5257 1.73815 12.0172 2.58581 13.2858C3.43347 14.5544 4.63827 15.5432 6.04787 16.1271C7.45747 16.7109 9.00856 16.8637 10.505 16.5661C12.0014 16.2684 13.376 15.5337 14.4548 14.4548C15.5337 13.376 16.2684 12.0014 16.5661 10.505C16.8637 9.00856 16.7109 7.45747 16.1271 6.04787C15.5432 4.63827 14.5544 3.43346 13.2858 2.58581ZM3.99987 1.51677C5.47991 0.527841 7.21997 0 9 0C11.387 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 10.78 17.4722 12.5201 16.4832 14.0001C15.4943 15.4802 14.0887 16.6337 12.4442 17.3149C10.7996 17.9961 8.99002 18.1743 7.24419 17.8271C5.49836 17.4798 3.89471 16.6226 2.63604 15.364C1.37737 14.1053 0.520203 12.5016 0.172936 10.7558C-0.17433 9.00998 0.00389955 7.20038 0.685088 5.55585C1.36628 3.91131 2.51983 2.50571 3.99987 1.51677ZM9 3.85714L3.85714 9L9 14.1429L14.1429 9L9 3.85714Z"
          />
          <NavLink
            text="Contact"
            url="#"
            iconPath="M2.90323 10.0799C3.33282 10.9391 3.95654 11.6864 4.725 12.2628L5.4 11.3628C4.77126 10.8912 4.26094 10.2798 3.90946 9.57681C3.55798 8.87386 3.375 8.09872 3.375 7.31279C3.375 6.52686 3.55798 5.75173 3.90946 5.04877C4.26094 4.34582 4.77126 3.73435 5.4 3.26279L4.725 2.36279C3.95654 2.93914 3.33282 3.68649 2.90323 4.54566C2.47365 5.40483 2.25 6.35221 2.25 7.31279C2.25 8.27337 2.47365 9.22076 2.90323 10.0799ZM12.6 11.3628L13.275 12.2628C14.0435 11.6864 14.6672 10.9391 15.0968 10.0799C15.5264 9.22076 15.75 8.27337 15.75 7.31279C15.75 6.35221 15.5264 5.40483 15.0968 4.54566C14.6672 3.68649 14.0435 2.93914 13.275 2.36279L12.6 3.26279C13.2287 3.73435 13.7391 4.34582 14.0905 5.04877C14.442 5.75173 14.625 6.52686 14.625 7.31279C14.625 8.09872 14.442 8.87386 14.0905 9.57681C13.7391 10.2798 13.2287 10.8912 12.6 11.3628ZM9.56266 6.75034H8.43766V16.8753H9.56266V6.75034ZM5.40271 8.92128C5.62916 9.42727 5.95989 9.87974 6.37328 10.2491L7.12703 9.41096C6.83149 9.14713 6.59502 8.82385 6.43311 8.46228C6.2712 8.1007 6.18751 7.709 6.18751 7.31284C6.18751 6.91667 6.2712 6.52497 6.43311 6.1634C6.59502 5.80183 6.83149 5.47854 7.12703 5.21471L6.37328 4.37659C5.95989 4.74593 5.62916 5.1984 5.40271 5.70439C5.17626 6.21038 5.0592 6.75849 5.0592 7.31284C5.0592 7.86719 5.17626 8.41529 5.40271 8.92128ZM10.8733 9.41096L11.627 10.2491C12.0404 9.87974 12.3712 9.42727 12.5976 8.92128C12.8241 8.41529 12.9411 7.86719 12.9411 7.31284C12.9411 6.75849 12.8241 6.21038 12.5976 5.70439C12.3712 5.1984 12.0404 4.74593 11.627 4.37659L10.8733 5.21471C11.1688 5.47854 11.4053 5.80183 11.5672 6.1634C11.7291 6.52497 11.8128 6.91667 11.8128 7.31284C11.8128 7.709 11.7291 8.1007 11.5672 8.46228C11.4053 8.82385 11.1688 9.14713 10.8733 9.41096Z"
          />
        </div>
        <SignInButton />
      </div>
    </div>
  );
};
export default Navbar;