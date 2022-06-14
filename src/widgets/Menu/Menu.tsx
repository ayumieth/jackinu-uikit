import React, { useState, useEffect, useRef, SVGAttributes } from "react"
import styled, { DefaultTheme } from "styled-components"
import throttle from "lodash/throttle"
import Overlay from "../../components/Overlay/Overlay"
import Flex from "../../components/Box/Flex"
import { useMatchBreakpoints } from "../../hooks"
import Logo from "./components/Logo"
import Panel from "./components/Panel"
import UserBlock from "./components/UserBlock"
import LangSelector from "./components/LangSelector"
import ThemeSwitcher from "./components/ThemeSwitcher"
import { NavProps } from "./types"
import Avatar from "./components/Avatar"
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config"
import Dropdown from '../../components/DropBox'
// import { useDarkModeManager } from '../../state/user/hooks'
import { SpaceProps } from "styled-system";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean, isMarket: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  right: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  box-shadow: ${({ isMarket }) => isMarket ? 'rgb(0 0 0 / 5%) 0px 4px 8px' : 'none'};
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-left: 128px;

  @media (max-width: 967px) {
    margin-left: 20px;
  }

  @media (max-width: 670px) {
    display: none;
  }
`

const Navigate = styled.a`
  font-family: CircularStd;
  font-size: 18px;
  font-weight: 450;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`

const MyButton = styled.div`
  background-color:${({ theme }) => theme.nav.background}
`
const MyDropdown = styled.div`
  background-color:${({ theme }) => theme.nav.background}
`
const ChainName = styled.span`
  color:${({ theme }) => theme.colors.text}
`
const listStyle = {
  padding: 0,
  border: 'none',
  height: 30,
  width: 100,
  display: 'flex',
  justifyContent: 'space-between',
  textDecoration: 'none',
  cursor: 'pointer',
  alignItems: 'center'
}

const MarketPanel = styled.div<{ showMenu: boolean }>`
  padding-top: ${({ showMenu }) => (showMenu ? "66px" : 0)};
`

interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
  theme?: DefaultTheme;
  spin?: boolean;
}

const BinanceIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 16 16" {...props}>
      <circle cx="8" cy="8" r="8" fill="#F0B90B" />
      <path
        d="M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z"
        fill="#FFFDFA"
      />
    </svg>
  );
};

const ChevronDownIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...props}>
      <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"
        fill="#566FFE"
      />
    </svg>
  );
};

const EthereumIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="25" height="25" viewBox="0 0 32 32" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx="16" cy="16" r="16" fill="#627EEA" />
        <g fill="#FFF" fillRule="nonzero">
          <path fillOpacity=".602" d="M16.498 4v8.87l7.497 3.35z" />
          <path d="M16.498 4L9 16.22l7.498-3.35z" />
          <path fillOpacity=".602" d="M16.498 21.968v6.027L24 17.616z" />
          <path d="M16.498 27.995v-6.028L9 17.616z" />
          <path fillOpacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z" />
          <path fillOpacity=".602" d="M9 16.22l7.498 4.353v-7.701z" />
        </g>
      </g>
    </svg>
  );
};

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  isMarket = false,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  profile,
  topMenu,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);
  // const [darkMode, toggleDarkMode] = useDarkModeManager()

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu} isMarket={isMarket}>
        <Flex alignItems="center">
          <Logo
            isPushed={isPushed}
            togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
            isDark={isDark}
            href={homeLink?.href ?? "/"}
          />
          <NavMenu>
            <Navigate href="https://fastswap.finance/">{topMenu ? topMenu[0].translated : 'Trade'}</Navigate>
            <Navigate href="#">{topMenu ? topMenu[1].translated : 'Earn'}</Navigate>
            <Navigate href="#">{topMenu ? topMenu[2].translated : 'Win'}</Navigate>
            <Navigate href="https://nft.fastswap.finance/">{topMenu ? topMenu[3].translated : 'NFT'}</Navigate>
          </NavMenu>
        </Flex>
        <Flex alignItems="center">
          <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
          <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />

          <Dropdown position="bottom" target={
            <MyButton style={{
              marginRight: '8px',
              padding: '7px 10px',
              borderRadius: '40px',
              alignItems: 'center'
            }}>
              <BinanceIcon />
              <ChevronDownIcon />
            </MyButton>}>
            {/* <div style={{ backgroundColor: darkMode ? "#757B75" : "white", border: darkMode ? '1px solid rgba(255, 255, 255, 0.23)' : '1px solid rgba(0, 0, 0, 0.23)', borderRadius: 4, width: 100, padding: 10 }}> */}
            <MyDropdown style={{
              boxShadow: '2px 2px 10px #eeeeee',
              borderRadius: 4,
              width: 120,
              padding: "5px 10px"
            }}>
              <a href="https://fastswap.finance/#/swap" style={listStyle}>
                <BinanceIcon style={{ width: 20, height: 20 }} />
                <ChainName style={{ fontFamily: 'CircularStd' }}>Binance</ChainName>
              </a>
              <a href="https://fastswap.exchange/" style={listStyle}>
                <EthereumIcon style={{ width: 20, height: 20 }} />
                <ChainName style={{ fontFamily: 'CircularStd' }}>Ethereum</ChainName>
              </a>
            </MyDropdown>
          </Dropdown>

          <UserBlock account={account} login={login} logout={logout} />
          {profile && <Avatar profile={profile} />}
        </Flex>
      </StyledNav>
      {
        isMarket ?
          <MarketPanel showMenu={showMenu}>{children}</MarketPanel> :
          <BodyWrapper>
            <Panel
              isPushed={isPushed}
              isMobile={isMobile}
              showMenu={showMenu}
              isDark={isDark}
              toggleTheme={toggleTheme}
              langs={langs}
              setLang={setLang}
              currentLang={currentLang}
              cakePriceUsd={cakePriceUsd}
              pushNav={setIsPushed}
              links={links}
            />
            <Inner isPushed={isPushed} showMenu={showMenu}>
              {children}
            </Inner>
            <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
          </BodyWrapper>
      }
    </Wrapper >
  );
};

export default Menu;
