import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  NavIcone,
  NavLogo,
  NavLogoSpan,
  NavMenu,
  NavMenuItem,
  NavMenuLink,
  NavbarContainet,
  NavbarSection,
} from "./navbarElements";
import { FaBars } from "react-icons/fa";
const Navbar = ({ toggel }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggelHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <NavbarSection scrollNav={scrollNav}>
        <NavbarContainet>
          <NavLogo onClick={toggelHome} to="/">
            Amir Re<NavLogoSpan>za</NavLogoSpan>
          </NavLogo>
          <NavIcone onClick={toggel}>
            <FaBars />
          </NavIcone>
          <NavMenu>
            <NavMenuItem>
              <NavMenuLink
                spy={true}
                offset={-70}
                smooth={true}
                delay={100}
                to="home"
              >
                Home
              </NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink
                spy={true}
                offset={-70}
                smooth={true}
                delay={100}
                to="about"
              >
                About
              </NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink
                spy={true}
                offset={-70}
                smooth={true}
                delay={100}
                to="services"
              >
                Services
              </NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink
                spy={true}
                offset={-70}
                smooth={true}
                delay={100}
                to="portfolio"
              >
                Portfolio
              </NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink
                spy={true}
                offset={-70}
                smooth={true}
                delay={100}
                to="client"
              >
                Client
              </NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink
                spy={true}
                offset={-70}
                smooth={true}
                delay={100}
                to="blog"
              >
                Blog
              </NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink
                spy={true}
                offset={-70}
                smooth={true}
                delay={100}
                to="contact"
              >
                Contact
              </NavMenuLink>
            </NavMenuItem>
          </NavMenu>
        </NavbarContainet>
      </NavbarSection>
    </>
  );
};

export default Navbar;
