import {
  ServicesCartContainer,
  ServicesCartDetailse,
  ServicesCartDetailseContainer,
  ServicesCartTextWrapper,
  ServicesCartTittel,
  ServicesCartView1,
  ServicesCartView2,
  ServicesCartView3,
  ServicesContainer,
  ServicesIcon1,
  ServicesIcon2,
  ServicesIcon3,
  ServicesIcon4,
  ServicesIcon5,
  ServicesIcon6,
  ServicesSection,
  ServicesTextTittel,
} from "./servicesElements";
import { FaCode, FaShoppingBag, FaAddressCard } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { IoBagAdd } from "react-icons/io5";
import { MdOutlinePersonalVideo } from "react-icons/md";

const Services = ({ id, toggel }) => {
  return (
    <>
      <ServicesSection id={id} onClick={toggel}>
        <ServicesContainer>
          <ServicesTextTittel>My Services</ServicesTextTittel>
          <ServicesCartContainer>
            <ServicesCartView1>
              <ServicesCartDetailseContainer>
                <ServicesIcon1>
                  <FaCode />
                </ServicesIcon1>
                <ServicesCartTextWrapper>
                  <ServicesCartTittel>Web Developer</ServicesCartTittel>
                  <ServicesCartDetailse>
                    In a professional context it often happens that private
                    clients corder a publication to be made.
                  </ServicesCartDetailse>
                </ServicesCartTextWrapper>
              </ServicesCartDetailseContainer>
            </ServicesCartView1>
            <ServicesCartView2>
              <ServicesCartDetailseContainer>
                <ServicesIcon2>
                  <FaShoppingBag />
                </ServicesIcon2>
                <ServicesCartTextWrapper>
                  <ServicesCartTittel>Shopping Website</ServicesCartTittel>
                  <ServicesCartDetailse>
                    In a professional context it often happens that private
                    clients corder a publication to be made.
                  </ServicesCartDetailse>
                </ServicesCartTextWrapper>
              </ServicesCartDetailseContainer>
            </ServicesCartView2>
            <ServicesCartView3>
              <ServicesCartDetailseContainer>
                <ServicesIcon3>
                  <FaAddressCard />
                </ServicesIcon3>
                <ServicesCartTextWrapper>
                  <ServicesCartTittel>Admin Panel</ServicesCartTittel>
                  <ServicesCartDetailse>
                    In a professional context it often happens that private
                    clients corder a publication to be made.
                  </ServicesCartDetailse>
                </ServicesCartTextWrapper>
              </ServicesCartDetailseContainer>
            </ServicesCartView3>

            <ServicesCartView2>
              <ServicesCartDetailseContainer>
                <ServicesIcon5>
                  <IoBagAdd />
                </ServicesIcon5>
                <ServicesCartTextWrapper>
                  <ServicesCartTittel>Portfolio of Works</ServicesCartTittel>
                  <ServicesCartDetailse>
                    In a professional context it often happens that private
                    clients corder a publication to be made.
                  </ServicesCartDetailse>
                </ServicesCartTextWrapper>
              </ServicesCartDetailseContainer>
            </ServicesCartView2>
            <ServicesCartView3>
              <ServicesCartDetailseContainer>
                <ServicesIcon6>
                  <DiJavascript1 />
                </ServicesIcon6>
                <ServicesCartTextWrapper>
                  <ServicesCartTittel>Java Script</ServicesCartTittel>
                  <ServicesCartDetailse>
                    In a professional context it often happens that private
                    clients corder a publication to be made.
                  </ServicesCartDetailse>
                </ServicesCartTextWrapper>
              </ServicesCartDetailseContainer>
            </ServicesCartView3>
            <ServicesCartView1>
              <ServicesCartDetailseContainer>
                <ServicesIcon4>
                  <MdOutlinePersonalVideo />
                </ServicesIcon4>
                <ServicesCartTextWrapper>
                  <ServicesCartTittel>Response Web</ServicesCartTittel>
                  <ServicesCartDetailse>
                    In a professional context it often happens that private
                    clients corder a publication to be made.
                  </ServicesCartDetailse>
                </ServicesCartTextWrapper>
              </ServicesCartDetailseContainer>
            </ServicesCartView1>
          </ServicesCartContainer>
        </ServicesContainer>
      </ServicesSection>
    </>
  );
};

export default Services;
