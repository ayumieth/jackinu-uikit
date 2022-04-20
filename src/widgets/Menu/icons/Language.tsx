import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="20px" height="20px" viewBox="0 0 22 22" {...props}>
      <path d="M0.640625 11.0303C0.640625 8.13801 1.73532 5.36421 3.6839 3.31908C5.63248 1.27394 8.27532 0.125 11.031 0.125C13.7867 0.125 16.4296 1.27394 18.3781 3.31908C20.3267 5.36421 21.4214 8.13801 21.4214 11.0303C21.4214 13.9225 20.3267 16.6963 18.3781 18.7414C16.4296 20.7866 13.7867 21.9355 11.031 21.9355C8.27532 21.9355 5.63248 20.7866 3.6839 18.7414C1.73532 16.6963 0.640625 13.9225 0.640625 11.0303ZM11.031 1.48816C10.9206 1.48816 10.8102 1.49088 10.6998 1.49497C10.8531 1.79759 11.0284 2.18201 11.1843 2.61685C11.5479 3.63377 11.8687 5.09371 11.2947 6.37644C10.77 7.54876 9.86989 7.85411 9.17504 8.04222L9.04905 8.0763C8.39186 8.25351 8.06846 8.34075 7.84117 8.70335C7.62037 9.05368 7.67362 9.48581 7.88922 10.2205L7.93858 10.3896C8.0256 10.6772 8.12561 11.0125 8.17756 11.3274C8.2425 11.7173 8.25549 12.1944 8.03079 12.6497C7.79701 13.1173 7.49309 13.4321 7.13462 13.6366C6.83011 13.7984 6.50235 13.9067 6.16442 13.957L6.05012 13.9774C5.52151 14.0756 5.2124 14.1314 4.92406 14.4559C4.69418 14.7149 4.563 15.1484 4.48767 15.7386C4.4565 15.9813 4.43831 16.2225 4.41883 16.4665L4.40974 16.596C4.39324 16.873 4.35896 17.1486 4.30714 17.4207L4.30194 17.448C5.15327 18.4334 6.19195 19.2206 7.35098 19.7587C8.51001 20.2969 9.76364 20.574 11.031 20.5724C12.7844 20.5724 14.4235 20.0503 15.8132 19.1479C15.6865 19.0157 15.5673 18.876 15.456 18.7294C15.1054 18.2659 14.6651 17.4903 14.817 16.5892C14.8898 16.1626 15.1105 15.7972 15.3326 15.5069C15.5599 15.2124 15.834 14.9384 16.0808 14.6999L16.247 14.5404C16.4366 14.3591 16.6016 14.1996 16.7431 14.0456C16.9341 13.8356 16.9912 13.7225 17.0029 13.6871C17.0912 13.379 16.986 13.1363 16.8393 13.0164C16.7172 12.9169 16.4561 12.8228 16.047 13.0954C15.9104 13.1879 15.7705 13.2747 15.6275 13.3558C15.4915 13.4355 15.3441 13.4917 15.1911 13.5221C15.0635 13.5462 14.9322 13.5368 14.8089 13.4947C14.6856 13.4526 14.5742 13.3791 14.4845 13.2808C14.3622 13.1373 14.2819 12.9598 14.2533 12.7697C14.2339 12.6451 14.2209 12.5195 14.2144 12.3934L14.2079 12.3035C14.2014 12.2026 14.1936 12.099 14.1819 11.979C14.1496 11.5994 14.0875 11.2233 13.9962 10.8544C13.8312 10.1851 13.4247 9.64393 13.0039 9.08231C12.942 9.00037 12.8806 8.91813 12.8195 8.83558C12.6117 8.55477 12.348 8.18399 12.2532 7.78595C12.1903 7.53985 12.2016 7.27935 12.2857 7.0403C12.3787 6.79508 12.5369 6.5831 12.7415 6.42961C13.2974 5.99339 14.2066 5.04873 15.0053 4.17767C15.3989 3.74964 15.7548 3.35023 16.0119 3.05715L16.0184 3.04897C14.5374 2.0274 12.8032 1.48468 11.031 1.48816Z" fill="#36465E"/>
    </Svg>
  );
};

export default Icon;
