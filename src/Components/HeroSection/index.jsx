import React from "react";
import resume from "./file/AmirReza-Madandar.pdf";
import {
  AboutMeText,
  FollowMeContainer,
  FollowMeIcones,
  FollowMeText,
  FollowMeUnderLine,
  HeroContainer,
  HeroDetaillesContainer,
  HeroDetaillesWrapper,
  HeroMyPhotoWrapper,
  HeroSection,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  MyJobSpan,
  MyJobText,
  MyNameSpan,
  MyNameText,
  MyPhoto,
  MyResumeBtn,
} from "./heroElements";
import Typed from "typed.js";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "../../loading.css";
const Hero = ({ id, img, toggel }) => {
  const handleDownload = () => {
    const fileUrl = resume;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "AmirReza-Madandar.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer.", "Frontend Developer.", "React JS Developer."],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <HeroSection id={id} onClick={toggel}>
        <HeroContainer>
          <HeroDetaillesWrapper>
            <HeroDetaillesContainer>
              <MyNameText>
                I'M <MyNameSpan>AmirReza MadanDar</MyNameSpan>
              </MyNameText>
              <MyJobText>
                A <MyJobSpan ref={el}>Frontend Developer</MyJobSpan>
              </MyJobText>
              <AboutMeText>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat alias aut voluptate Repellat .
              </AboutMeText>
              <MyResumeBtn onClick={handleDownload}>Download CV</MyResumeBtn>
            </HeroDetaillesContainer>
          </HeroDetaillesWrapper>
          <HeroMyPhotoWrapper>
            <MyPhoto src={img} />
          </HeroMyPhotoWrapper>
        </HeroContainer>
        <FollowMeContainer>
          <FollowMeText>Follow Me</FollowMeText>
          <FollowMeUnderLine />
          <FollowMeIcones>
            <Icon1
              href="https://instagram.com/a.a.mir77?igshid=OTk0YzhjMDVlZA=="
              target="blank"
            >
              <RiInstagramFill />
            </Icon1>
            <Icon2 href="https://t.me/Amirreza-madandar" target="blank">
              <FaTelegram />
            </Icon2>
            <Icon3 href="https://github.com/AmirReza-MadanDar" target="blank">
              <FaGithub />
            </Icon3>
            <Icon4
              href="https://www.linkedin.com/in/amir-reza-madandar-0b6988235"
              target="blank"
            >
              <FaLinkedinIn />
            </Icon4>
          </FollowMeIcones>
        </FollowMeContainer>
      </HeroSection>
    </>
  );
};

export default Hero;
