import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const NavbarSection = styled.nav`
  width: 100%;
  background-color: ${({ scrollNav }) => (scrollNav ? "#FAFAFA" : "#f8f8f8")};
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0 1px 3px 0 rgba(0, 0, 0, 0.1)" : "none"};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  z-index: 10;
  top: 0;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 820px) {
    background-color: #fafafa;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    top: 0;
  }
`;
export const NavbarContainet = styled.div`
  width: 100%;
  height: 70px;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavLogo = styled(LinkR)`
  color: #676767;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  padding: 0 12px;

  &:hover {
    color: #1ab394;
  }

  @media screen and (max-width: 820px) {
    padding: 0 24px;
  }
`;
export const NavLogoSpan = styled.span`
  color: #1ab394;
`;
export const NavMenu = styled.ul`
  height: 80px;
  display: flex;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 820px) {
    display: none;
  }
`;
export const NavIcone = styled.div`
  display: none;
  @media screen and (max-width: 820px) {
    display: block;
    color: #676767;
    position: absolute;
    top: 22 px;
    right: 0;
    font-size: 1.5rem;
    padding: 0 24px;
  }
`;
export const NavMenuItem = styled.li`
  list-style: none;
`;
export const NavMenuLink = styled(LinkS)`
  color: #676767;
  cursor: pointer;
  height: 100%;
  font-size: 1.1rem;
  padding: 0 12px;

  &.active {
    color: #1ab394;
  }
`;
