import styled from "styled-components";
import { scales } from "../Checkbox/types";
import { ToggleProps, HandleProps, InputProps, ScaleKeys } from "./types";

const scaleKeyValues = {
  sm: {
    handleHeight: "21px",
    handleWidth: "21px",
    handleLeft: "1px",
    handleTop: "1px",
    checkedLeft: "calc(100% - 22px)",
    toggleHeight: "25px",
    toggleWidth: "46px",
  },
  md: {
    handleHeight: "32px",
    handleWidth: "32px",
    handleLeft: "3px",
    handleTop: "3px",
    checkedLeft: "calc(100% - 35px)",
    toggleHeight: "40px",
    toggleWidth: "72px",
  },
};

const getScale = (property: ScaleKeys) => ({ scale = scales.MD }: ToggleProps) => {
  return scaleKeyValues[scale][property];
};

export const Handle = styled.div<HandleProps>`
  background-color: ${({ theme }) => theme.toggle.handleBackground};
  border-radius: 50%;
  cursor: pointer;
  height: ${getScale("handleHeight")};
  left: ${getScale("handleLeft")};
  position: absolute;
  top: ${getScale("handleTop")};
  transition: left 200ms ease-in;
  width: ${getScale("handleWidth")};
  z-index: 1;
`;

export const Input = styled.input<InputProps>`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: ${getScale("checkedLeft")};
  }

  &:focus + ${Handle} {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:hover + ${Handle}:not(:disabled):not(:checked) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

const StyledToggle = styled.div<ToggleProps>`
  align-items: center;
  background-color: ${({ theme, checked }) => theme.colors[checked ? "success" : "input"]};
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  border: 1px solid #566FFE;
  height: ${getScale("toggleHeight")};
  position: relative;
  transition: background-color 200ms;
  width: ${getScale("toggleWidth")};
`;

export default StyledToggle;
