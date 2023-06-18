import styled from "styled-components";
import { Link } from "react-router-dom";
export const BlogSection = styled.section`
  width: 100%;
  height: 700px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    height: 2250px;
  }
  @media screen and (max-width: 480px) {
    height: 1950px;
  }
`;
export const BlogContainer = styled.div`
  width: 100%;
  height: 650px;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    height: 2250px;
    width: 680px;
  }
  @media screen and (max-width: 480px) {
    width: 345px;
    height: 1950px;
  }
`;
export const BlogTextTittel = styled.h1`
  font-size: 2rem;
  color: #1ab394;
`;
export const BlogCartContainer = styled.div`
  width: 100%;
  height: 470px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    height: 1900px;
  }
  @media screen and (max-width: 480px) {
    height: 1500px;
  }
`;
export const BlogCartView = styled.div`
  width: 355px;
  height: 415px;
  background-color: #fefefe;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 0px 16px rgba(145, 145, 145, 0.2) !important;
  @media screen and (max-width: 820px) {
    width: 100%;
    height: 560px;
  }
  @media screen and (max-width: 480px) {
    height: 415px;
  }
`;
export const BlogImg = styled.img`
  width: 285px;
  height: 185px;
  border-radius: 24px;
  margin-top: -55px;

  @media screen and (max-width: 820px) {
    width: 595px;
    height: 390px;
    margin-top: -100px;
  }
  @media screen and (max-width: 480px) {
    width: 275px;
    height: 185px;
  }
`;
export const BlogCartTextContainer = styled.div`
  width: 285px;
  height: 215px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 820px) {
    width: 595px;
    margin-bottom: 0;
    height: 150px;
  }
  @media screen and (max-width: 480px) {
    width: 275px;
    height: 250px;
  }
`;
export const BlogTextCul1 = styled.div`
  width: 275px;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;
export const BlogIcon1 = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const DateIcon = styled.div`
  font-size: 1.5rem;
  color: #ff5883;
`;
export const DateText = styled.h6`
  font-size: 0.9rem;
  color: #858c93;
`;
export const BlogIcon2 = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const MessageIcon = styled.div`
  font-size: 1.5rem;
  color: #fbdd63;
`;
export const MessageText = styled.h6`
  font-size: 1.3rem;
  color: #858c93;
`;
export const BlogCartTextTittel = styled.p`
  font-size: 1rem;
  width: 100%;
  @media screen and (max-width: 820px) {
    height: 50px;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 0;
  }
`;
export const BlogCartTextDescription = styled.p`
  font-size: 1rem;
  color: #7b7f83;
  height: 90px;

  @media screen and (max-width: 820px) {
    height: 50px;
  }
  @media screen and (max-width: 480px) {
    height: 80px;
  }
`;
export const BlogCartButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #54c6af;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #1ab394;
  }
`;
export const BlogTextCol2 = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 480px) {
    height: 200px;
  }
`;
export const BlogButoonContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    height: 120px;
    align-items: flex-start;
  }
  @media screen and (max-width: 480px) {
    height: 200px;
    margin-top: -50px;
  }
`;
export const BlogButoon = styled(Link)`
  padding: 13px 50px;
  border-radius: 16px;
  border: none;
  background-color: #1ab394;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #0f8c73;
  }
`;
