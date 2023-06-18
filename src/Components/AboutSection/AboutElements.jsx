import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
export const AboutSection = styled.section`
  width: 100%;
  height: 940px;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 820px) {
    height: 1600px;
  }
  @media screen and (max-width: 480px) {
    justify-content: flex-start;
    align-items: flex-start;
    height: 1350px;
  }
`;
export const AboutContainer = styled.div`
  width: 100%;
  height: 770px;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 820px) {
    height: 1490px;
    justify-content: flex-start;
  }
  @media screen and (max-width: 480px) {
    margin-top: 32px;
    height: 1350px;
    justify-content: flex-start;
  }
`;
export const AboutMeWrapper = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    height: 1000px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 60%;
    justify-content: flex-start;
  }
`;
export const AboutMeImageContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 820px) {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 480px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 310px;
    display: flex;
    justify-content: center;
  }
`;
export const AboutMeImage = styled.img`
  width: 700px;
  height: 450px;
  border-radius: 24px;
  margin-top: -40px;

  @media screen and (max-width: 820px) {
    width: 665px;
    height: 435px;
    margin-top: 0;
  }
  @media screen and (max-width: 480px) {
    width: 345px;
    height: 266px;
    margin-top: 0;
  }
`;
export const AboutMeDetailsContainer = styled.div`
  width: 50%;
  height: 100%;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 820px) {
    width: 665px;
    margin-left: 0;
    height: 400px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 430px;
    margin-left: 0;
  }
`;
export const AboutMeText = styled.h1`
  color: #1ab394;
  font-size: 30px;
  @media screen and (max-width: 480px) {
    margin-left: 18px;
  }
`;
export const AboutMeJobText = styled.p`
  font-size: 24px;
  @media screen and (max-width: 480px) {
    margin-left: 18px;
  }
`;
export const MyJobSpan = styled.span`
  color: #1ab394;
`;
export const AboutMeDetailsWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    height: 200px;
    align-items: center;
  }
`;
export const AboutMeDetails = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    height: 200px;
    margin-left: 18px;
  }
`;
export const MyDetails = styled.p`
  color: #44464a;
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;
export const MyDetailsSpan = styled.span`
  color: #5f5f5f;
`;
export const AboutButtonWrapper = styled.div`
  width: 350px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 480px) {
    margin-left: 18px;
  }
`;
export const AboutBtn = styled.button`
  text-align: center;
  background-color: #1ab394;
  color: #ecfaed;
  width: 160px;
  height: 40px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #187f6a;
  }
`;
export const AboutBtn2 = styled(LinkS)`
  text-align: center;
  background-color: #1ab394;
  color: #ecfaed;
  width: 160px;
  height: 40px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #187f6a;
  }
`;
export const AboutMeSkillWrapper = styled.div`
  width: 100%;
  height: 255px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 820px) {
    height: 480px;
  }
  @media screen and (max-width: 480px) {
    height: 470px;
  }
`;
export const MySkillText = styled.h1`
  font-size: 32px;
  color: #1ab394;
  @media screen and (max-width: 820px) {
    margin-left: 75px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 52px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 18px;
  }
`;
export const MySkillsChartWrapper = styled.div`
  width: 100%;
  height: 175px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    height: 380px;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    height: 380px;
  }
`;
export const MySkillsChartcol = styled.div`
  width: 48.5%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 820px) {
    margin-bottom: 32px;
    width: 665px;
  }
  @media screen and (max-width: 480px) {
    width: 345px;
    height: 380px;
    margin-bottom: 32px;
  }
`;
export const MyChartName = styled.p`
  color: #212529;
`;
export const SkillsChartNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MYChartPercent = styled.p`
  color: #212529;
`;
export const MYChartShape = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e1e1e1;
  margin-top: 4px;
  border-radius: 8px;
`;
export const MyChartShape2 = styled.div`
  width: 95%;
  height: 100%;
  background-color: #ff5380;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;
export const MySkillsChartcolContainer = styled.div`
  width: 100%;
  height: 35px;
`;
export const MyChartShape3 = styled.div`
  width: 90%;
  height: 100%;
  background-color: #fbdd62;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;
export const MyChartShape4 = styled.div`
  width: 85%;
  height: 100%;
  background-color: #0bceaf;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;
export const MyChartShape5 = styled.div`
  width: 88%;
  height: 100%;
  background-color: #ff5380;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;
export const MyChartShape6 = styled.div`
  width: 80%;
  height: 100%;
  background-color: #fbdd62;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;
export const MyChartShape7 = styled.div`
  width: 90%;
  height: 100%;
  background-color: #0bceaf;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;
