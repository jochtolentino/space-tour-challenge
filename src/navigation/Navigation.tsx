import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import styled from "styled-components";
import closeBtn from "../assets/menu/icon-close.svg";
import hamburger from "../assets/menu/icon-hamburger.svg";
import { useEffect, useState } from "react";

export const Span = styled.span`
  font-weight: 700;
  padding-right: 1rem;
  @media (min-width: 40rem) {
    display: none;
  }
  @media (min-width: 86rem) {
    display: inline-block;
  }
`;

export const CustomLink = styled(Link)`
  color: white;
  cursor: pointer;
  font-size: 1rem;
  position: relative;

  &:focus {
    outline: 2px dashed white;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:focus-visible {
    outline: 2px dashed white;
  }

  &::before {
    @media (min-width: 40rem) {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 3.1rem;
      background: white;
      width: 0;
      height: 3px;
      transition: all 0.3s ease-in;
    }
  }
  &:hover {
    color: white;
  }
  &:hover::before {
    width: 100%;
  }
`;

export const CustomLinkLogo = styled(Link)`
  padding-left: 2rem;
  padding-top: 1.25rem;
  padding-bottom: 1rem;
  width: clamp(2.25rem, 4vw, 3rem);
  &:focus {
    outline: 2px dashed white;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:focus-visible {
    outline: 2px dashed white;
  }
`;

export const NavSkip = styled(Link)`
  text-decoration: none;
  color: $clr-dark-blue;
  cursor: pointer;
  background: $clr-white;
  border: 0;
  border-radius: 0 0 5px 5px;
  padding: 0.5rem 1.5rem;
  position: absolute;
  top: 0;
  left: 0.5rem;
  transform: translateY(-120%);
  transition: transform 0.4s ease-in;
  text-transform: uppercase;
  font-size: 1.5rem;
  &:focus {
    transform: translateY(0);
    outline: none;
  }
`;
export const CustomHeader = styled.header`
  position: absolute;
  width: 100%;
  padding-top: 1.25rem;
  padding-bottom: 1rem;
  @media (min-width: 60rem) {
    padding-top: 3.15rem;
  }
`;

export const CustomMenu = styled.ul`
  position: fixed;
  z-index: 1000;
  inset: 0 0 0 30%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 10rem 2rem;
  background: hsla(230, 35%, 7%, 0.975);

  @media (min-width: 40rem) {
    position: absolute;
    background: hsla(0%, 0%, 59%, 0.2);
    flex-direction: row;
    justify-content: center;
    padding: 2rem 0rem;
  }
  @media (min-width: 60rem) {
    background: hsla(0, 0%, 59%, 0.25);
    gap: 5rem;
    top: 2rem;
    padding-bottom: 3.5rem;

    &::before {
      content: "";
      border: 0;
      border-top: 1px solid white;
      opacity: 0.2;
      width: clamp(12rem, 22vw, 25rem);
      background: 0;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateX(calc(-100% + 1.5rem)) translateY(-50%);
    }
  }
`;

export const HamburgerMenu = styled.ul`
  background: transparent;
  border: 0;
  cursor: pointer;
  position: absolute;
  z-index: 9999;
  top: 2rem;
  right: 2rem;
  @media (min-width: 40rem) {
    display: none;
  }
  &:focus {
    outline: 2px dashed white;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:focus-visible {
    outline: 2px dashed white;
  }
`;

const Navigation = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <CustomHeader>
      <NavSkip to="#main">Skip navigation</NavSkip>

      <CustomLinkLogo to="/space-tour-challenge/">
        <img src={logo} alt="Space Tourism." />
      </CustomLinkLogo>
      <nav>
        <HamburgerMenu
          aria-expanded={isOpened ? "true" : "false"}
          aria-controls="nav-menu"
          onClick={toggleMenu}
        >
          {isOpened ? (
            <img src={closeBtn} alt="" aria-hidden="true" />
          ) : (
            <img src={hamburger} alt="" aria-hidden="true" />
          )}

          <span className="sr-only">Menu</span>
        </HamburgerMenu>

        {(isOpened || screenWidth > 640) && (
          <CustomMenu id="nav-menu">
            <li>
              <CustomLink to="/space-tour-challenge/">
                <Span aria-hidden="true">00</Span>
                HOME
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/space-tour-challenge/destination">
                <Span aria-hidden="true">01</Span>
                DESTINATION
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/space-tour-challenge/crew">
                <Span aria-hidden="true">02</Span>
                CREW
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/space-tour-challenge/technology">
                <Span aria-hidden="true">03</Span>
                TECHNOLOGY
              </CustomLink>
            </li>
          </CustomMenu>
        )}
      </nav>
    </CustomHeader>
  );
};

export default Navigation;
