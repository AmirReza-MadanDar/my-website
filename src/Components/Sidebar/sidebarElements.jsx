import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
export const SidebarContainer = styled.aside`
  width: 100%;
  height: 400px;
  background-color: #fafafa;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  justify-content: space-between;
  z-index: 9;
  position: fixed;
  transition: all 0.3s ease-in-out;
  top: ${({ isOpen }) => (isOpen ? "70px" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;
export const SidebarWrapper = styled.div`
  width: 100px;
  height: 260px;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  margin-top: 24px;
`;
export const SidebarMenu = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;
export const SidebarMenuItem = styled.li`
  list-style: none;
`;
export const SidebarMenuLink = styled(LinkS)`
  color: #676767;
  cursor: pointer;
  font-size: 1.1rem;

  &.active {
    color: #1ab394;
  }
`;
export const Sidebarsocial = styled.div`
  width: 150px;
  height: 50px;
  margin-left: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
`;
export const SocialIcone = styled.div`
  color: #3c3c3c;
  font-size: 1.3rem;
`;
