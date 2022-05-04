import React from "react";
import { SvgProps } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Flex from "../../../components/Box/Flex";
import Button from "../../../components/Button/Button";
import * as IconModule from "../icons";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon } = Icons;

interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const ThemeSwitcher: React.FC<Props> = ({ isDark, toggleTheme }) => {

  return (
    <Button variant="text" onClick={() => toggleTheme(!isDark)} padding="0px 8px">
      {/* alignItems center is a Safari fix */}
      <Flex alignItems="center">
        <SunIcon fill={isDark ? "white" : "#183B56"} />
        <Text color={isDark ? "white" : "#183B56"} mx="4px">
          /
        </Text>
        <MoonIcon fill={isDark ? "white" : "#183B56"} />
      </Flex>
    </Button>
  )
};

export default React.memo(ThemeSwitcher, (prev, next) => prev.isDark === next.isDark);
