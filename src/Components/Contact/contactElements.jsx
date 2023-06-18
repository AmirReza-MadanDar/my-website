import styled from "styled-components";
export const ContactSection = styled.section`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  @media screen and (max-width: 820px) {
    height: 900px;
  }
`;
export const ContactContainer = styled.div`
  width: 100%;
  height: 600px;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: 820px) {
    width: 665px;
    height: 800px;
  }

  @media screen and (max-width: 480px) {
    width: 345px;
  }
`;
export const ContactTittelText = styled.h1`
  font-size: 2rem;
  color: #1ab394;
`;
export const ContactPersonalWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 665px;
    align-items: flex-start;
    height: 230px;
  }
  @media screen and (max-width: 480px) {
    width: 345px;
  }
`;
export const ContactPersonalCol1 = styled.div`
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const PersonalDetailes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PersonalIcone = styled.div`
  font-size: 1.5rem;
  color: #69ccf8;
`;
export const PersonalText = styled.p`
  font-size: 1.2rem;
  margin-left: 4px;
  font-weight: bold;
  width: 150px;
`;
export const MySochial = styled.p`
  color: #7a8289;
  font-size: 14px;
`;
export const PersonalIcone2 = styled.div`
  font-size: 1.5rem;
  color: #ec2d55;
`;
export const PersonalIcon3 = styled.div`
  font-size: 1.5rem;
  color: rgb(220, 144, 212);
`;
export const ContactInpoutContainer = styled.div`
  width: 100%;
  height: 380px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: 820px) {
    height: 445px;
  }
`;
export const InputCol1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    height: 115px;
  }
`;
export const Input1 = styled.input`
  width: 530px;
  height: 45px;
  border: none;
  border-radius: 42px;
  padding-left: 14px;
  box-shadow: 3px 3px 8px 0px rgba(145, 145, 145, 0.1) !important;

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;
export const Input2 = styled.input`
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 42px;
  padding-left: 14px;
  box-shadow: 3px 3px 8px 0px rgba(145, 145, 145, 0.1) !important;
`;
export const Input3 = styled.input`
  width: 100%;
  height: 175px;
  border: none;
  border-radius: 24px;
  padding-left: 14px;
  padding-bottom: 110px;
  box-shadow: 3px 3px 8px 0px rgba(145, 145, 145, 0.1) !important;
`;
export const InputButton = styled.button`
  border: none;
  border-radius: 16px;
  width: 165px;
  height: 45px;
  cursor: pointer;
  background-color: #1ab394;
  transition: all 0.3s ease-in-out;
  color: #fff;
  &:hover {
    background-color: #0f8c73;
  }
`;
