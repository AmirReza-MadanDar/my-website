import styled from "styled-components";
export const ClientSection = styled.section`
  width: 100%;
  height: 500px;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ClientContainer = styled.div`
  width: 100%;
  height: 410px;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: 820px) {
    width: 675px;
  }
  @media screen and (max-width: 480px) {
    width: 350px;
  }
`;
export const ClientTittelText = styled.h1`
  font-size: 2rem;
  color: #1ab394;
`;
export const ClientSliderWrapper = styled.div`
  width: 100%;
  height: 310px;
  overflow: hidden;
`;
