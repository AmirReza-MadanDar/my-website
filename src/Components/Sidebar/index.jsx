import {
  SidebarContainer,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuLink,
  SidebarWrapper,
  Sidebarsocial,
  SocialIcone,
} from "./sidebarElements";
import { FaInstagram, FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Sidebar = ({ isOpen, toggel }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuLink onClick={toggel} to="home">
              Home
            </SidebarMenuLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuLink onClick={toggel} to="about">
              About
            </SidebarMenuLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuLink onClick={toggel} to="services">
              Services
            </SidebarMenuLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuLink onClick={toggel} to="portfolio">
              Portfolio
            </SidebarMenuLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuLink onClick={toggel} to="client">
              Client
            </SidebarMenuLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuLink onClick={toggel} to="blog">
              Blog
            </SidebarMenuLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuLink onClick={toggel} to="contact">
              Contact
            </SidebarMenuLink>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarWrapper>
      <Sidebarsocial>
        <SocialIcone>
          <FaInstagram />
        </SocialIcone>
        <SocialIcone>
          <FaGithub />
        </SocialIcone>
        <SocialIcone>
          <FaTwitter />
        </SocialIcone>
        <SocialIcone>
          <FaLinkedinIn />
        </SocialIcone>
      </Sidebarsocial>
    </SidebarContainer>
  );
};

export default Sidebar;
