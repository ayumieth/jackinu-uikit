import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" {...props}>
        <circle cx="12.3188" cy="12.318" r="11.318" transform="rotate(90 12.3188 12.318)" stroke={props.stroke} strokeWidth="2" fill="none"/>
        <path d="M11.6132 19.1653C12.0037 19.5558 12.6369 19.5558 13.0274 19.1653L19.3914 12.8013C19.7819 12.4108 19.7819 11.7776 19.3914 11.3871C19.0009 10.9966 18.3677 10.9966 17.9772 11.3871L12.3203 17.0439L6.66346 11.3871C6.27293 10.9966 5.63977 10.9966 5.24924 11.3871C4.85872 11.7776 4.85872 12.4108 5.24924 12.8013L11.6132 19.1653ZM11.3203 6.17187L11.3203 18.4582L13.3203 18.4582L13.3203 6.17188L11.3203 6.17187Z" fill={props.fill} />
    </Svg>
  );
};

export default Icon;