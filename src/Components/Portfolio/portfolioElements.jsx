import styled from "styled-components";
export const PortfolioSection = styled.section`
  width: 100%;
  height: 900px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    height: 3550px;
    justify-content: flex-start;
  }
  @media screen and (max-width: 480px) {
    height: 2300px;
  }
`;
export const PortfolioContainer = styled.div`
  width: 100%;
  height: 800px;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 820px) {
    align-items: center;
    height: 3450px;
  }
  @media screen and (max-width: 480px) {
    height: 2200px;
  }
`;
export const PortfolioTittelText = styled.h1`
  font-size: 2rem;
  color: #1ab394;
`;
export const PortfolioMenuUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  width: 600px;
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    width: 300px;
  }
`;
export const PortfolioMenuLi = styled.li`
  cursor: pointer;

  padding: 8px 15px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #1ab394;
    color: #fff;
  }

  &.active {
    background-color: #1ab394;
  }
`;
export const PortfolioCartContainer = styled.div`
  width: 100%;
  height: 620px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    height: 3300px;
  }
  @media screen and (max-width: 480px) {
    height: 2000px;
  }
`;
export const PortfolioCartView = styled.div`
  width: 355px;
  height: 265px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 8px 0px rgba(145, 145, 145, 0.1);
  display: ${({ num }) => (num ? "block" : "none")};

  @media screen and (max-width: 820px) {
    width: 660px;
    height: 505px;
    display: flex;
  }
  @media screen and (max-width: 480px) {
    width: 345px;
    height: 265px;
  }
`;

export const PortfolioCartImg = styled.img`
  width: 310px;
  height: 220px;
  cursor: pointer;
  margin-left: 30px;
  margin-top: 10px;
  @media screen and (max-width: 820px) {
    width: 410px;
    height: 300px;
    display: flex;
    margin-left: 0;
    margin-top: 0;
  }
  @media screen and (max-width: 480px) {
    width: 230px;
    height: 160px;
    margin-left: 0;
    margin-top: 0;
  }
`;
export const PortfolioButoonContainer = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PortfolioPageButoon = styled.button`
  background-color: #1ab394;
  border: none;
  padding: 12px 52px;
  display: flex;
  border-radius: 16px;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
  transition: all 0.3s ease-in-out;
  margin-top: 35px;

  &:hover {
    background-color: #0f8c73;
  }
`;
