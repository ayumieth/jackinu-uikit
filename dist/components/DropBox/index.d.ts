import React from "react";
declare type Position = "top" | "top-right" | "bottom";
interface PositionProps {
    position?: Position;
}
interface DropdownProps extends PositionProps {
    target: React.ReactElement;
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
