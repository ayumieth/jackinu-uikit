import React, { cloneElement, Children, ReactElement } from "react";
import StyledButtonMenu from "./StyledButtonMenu";
import { scales, variants } from "../Button/types";
import { ButtonMenuProps } from "./types";
import { borderRadius } from "styled-system";

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  scale = scales.MD,
  variant = variants.PRIMARY,
  onItemClick,
  children,
}) => {
  const invariant = variant===variants.SPECIAL ? variants.PRIMARY : variant;
  return (
    <StyledButtonMenu variant={invariant} style={{
      border:scale===scales.SM?'1.5px solid #566FFE':'none',
      borderRadius:scale===scales.SM?'40px':'16px'}}>
      {Children.map(children, (child: ReactElement, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick: onItemClick ? () => onItemClick(index) : undefined,
          scale,
          variant: invariant,
        });
      })}
    </StyledButtonMenu>
  );
};

export default ButtonMenu;
