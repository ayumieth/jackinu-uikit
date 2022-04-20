import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" {...props}>
        <circle cx="12.318" cy="12.3149" r="11.318" transform="rotate(-90 12.318 12.3149)" stroke={props.stroke} strokeWidth="2" fill="none"/>
        <path d="M13.0235 5.46755C12.633 5.07703 11.9998 5.07703 11.6093 5.46755L5.24534 11.8315C4.85481 12.222 4.85481 12.8552 5.24534 13.2457C5.63586 13.6362 6.26903 13.6362 6.65955 13.2457L12.3164 7.58887L17.9733 13.2457C18.3638 13.6362 18.9969 13.6362 19.3875 13.2457C19.778 12.8552 19.778 12.222 19.3875 11.8315L13.0235 5.46755ZM13.3164 18.4609L13.3164 6.17466L11.3164 6.17466L11.3164 18.4609L13.3164 18.4609Z" fill={props.fill}/>
    </Svg>
  );
};

export default Icon;