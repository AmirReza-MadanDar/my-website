import {
  ClientContainer,
  ClientSection,
  ClientSliderWrapper,
  ClientTittelText,
} from "./clientElements";
import MySlider from "./slider";

const Client = ({ toggel }) => {
  return (
    <>
      <ClientSection id="client" onClick={toggel}>
        <ClientContainer>
          <ClientTittelText>Client</ClientTittelText>
          <ClientSliderWrapper>
            <MySlider />
          </ClientSliderWrapper>
        </ClientContainer>
      </ClientSection>
    </>
  );
};

export default Client;
