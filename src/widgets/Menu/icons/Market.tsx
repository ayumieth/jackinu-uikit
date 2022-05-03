import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 28 28" {...props}>
      <path d="M22.1667 5.83333V22.1667H5.83333V5.83333H22.1667ZM22.1667 3.5H5.83333C4.55 3.5 3.5 4.55 3.5 5.83333V22.1667C3.5 23.45 4.55 24.5 5.83333 24.5H22.1667C23.45 24.5 24.5 23.45 24.5 22.1667V5.83333C24.5 4.55 23.45 3.5 22.1667 3.5ZM16.4967 13.8367L12.9967 18.3517L10.5 15.33L7 19.8333H21L16.4967 13.8367Z" />
    </Svg>
  );
};

export default Icon;