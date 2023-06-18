import styled from "styled-components";
export const HeroSection = styled.section`
  width: 100%;
  height: 750px;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  @media screen and (max-width: 820px) {
    align-items: flex-start;
    height: 800px;
  }
  @media screen and (max-width: 480px) {
    height: 700px;
  }
`;
export const HeroContainer = styled.div`
  width: 100%;
  height: 460px;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 90px;
  @media screen and (max-width: 820px) {
    margin-top: 72px;
    height: 800px;
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 480px) {
    height: 600px;
  }
`;
export const HeroDetaillesWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 24px;
  @media screen and (max-width: 820px) {
    width: 100%;
    margin-left: 0;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
  }
`;
export const HeroMyPhotoWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    width: 100%;
    height: 100%;
  }
`;
export const MyPhoto = styled.img`
  width: 455px;
  height: 455px;
  border-radius: 50%;
  @media screen and (max-width: 480px) {
    width: 360px;
    height: 360px;
  }
`;
export const HeroDetaillesContainer = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 820px) {
    align-items: center;
    height: 200px;
    margin-top: 24px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 16px;
  }
`;
export const MyNameText = styled.h1`
  color: #212529;
  font-size: 2rem;
  @media screen and (max-width: 480px) {
    font-size: 1.7rem;
  }
`;
export const MyNameSpan = styled.span`
  color: #1ab394;
`;
export const MyJobText = styled.h1`
  color: #1ab394;
`;
export const MyJobSpan = styled.span`
  color: #212529;
`;
export const AboutMeText = styled.p`
  color: #676767;
  width: 90%;
  @media screen and (max-width: 820px) {
    width: 50%;
  }
  @media screen and (max-width: 480px) {
    width: 80%;
    display: flex;
  }
`;
export const MyResumeBtn = styled.button`
  background-color: #1ab394;
  color: #fff;
  width: 160px;
  height: 40px;
  text-align: center;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0f8c73;
  }
`;
export const FollowMeContainer = styled.div`
  background-color: #f8f8f8;
  height: 290px;
  width: 40px;
  position: fixed;
  z-index: 8;
  left: 0;
  bottom: 0;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;
export const FollowMeText = styled.p`
  font-size: 14px;
  transform: rotate(90deg);
  width: 100px;
  margin-left: -16px;
  margin-top: 42px;
`;
export const FollowMeUnderLine = styled.div`
  border-right: 3px solid #1ab394;
  height: 60px;
  margin-top: 20px;
  margin-right: 6px;
`;
export const FollowMeIcones = styled.div`
  height: 115px;
  width: 15px;
  margin-left: 25px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const Icon1 = styled.a`
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #3c3c3c;
  &:hover {
    color: #f60278;
  }
`;
export const Icon2 = styled.a`
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #3c3c3c;
  &:hover {
    color: #1da1f2;
  }
`;
export const Icon3 = styled.a`
  font-size: 1rem;
  cursor: pointer;
  color: #3c3c3c;
`;
export const Icon4 = styled.a`
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #3c3c3c;
  &:hover {
    color: #15487d;
  }
`;
