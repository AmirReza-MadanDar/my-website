import {
  AboutBtn,
  AboutBtn2,
  AboutButtonWrapper,
  AboutContainer,
  AboutMeDetails,
  AboutMeDetailsContainer,
  AboutMeDetailsWrapper,
  AboutMeImage,
  AboutMeImageContainer,
  AboutMeJobText,
  AboutMeSkillWrapper,
  AboutMeText,
  AboutMeWrapper,
  AboutSection,
  MYChartPercent,
  MYChartShape,
  MyChartName,
  MyChartShape2,
  MyChartShape3,
  MyChartShape4,
  MyChartShape5,
  MyChartShape6,
  MyChartShape7,
  MyDetails,
  MyDetailsSpan,
  MyJobSpan,
  MySkillText,
  MySkillsChartWrapper,
  MySkillsChartcol,
  MySkillsChartcolContainer,
  SkillsChartNameContainer,
} from "./AboutElements";
import resume from "./file/AmirReza-Madandar.pdf";
const About = ({ id, img, toggel }) => {
  const handleDownload = () => {
    const fileUrl = resume;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "AmirReza-Madandar.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <AboutSection id={id} onClick={toggel}>
        <AboutContainer>
          <AboutMeWrapper>
            <AboutMeImageContainer>
              <AboutMeImage src={img} />
            </AboutMeImageContainer>
            <AboutMeDetailsContainer>
              <AboutMeText>About Me</AboutMeText>
              <AboutMeJobText>
                Front<MyJobSpan>end</MyJobSpan> Developer
              </AboutMeJobText>
              <AboutMeDetailsWrapper>
                <AboutMeDetails>
                  <MyDetails>
                    Birthday : <MyDetailsSpan>15 January 2002</MyDetailsSpan>
                  </MyDetails>
                  <MyDetails>
                    Website : <MyDetailsSpan>www.google.com</MyDetailsSpan>
                  </MyDetails>
                  <MyDetails>
                    Phone : <MyDetailsSpan>+98 933 327 4797</MyDetailsSpan>
                  </MyDetails>
                  <MyDetails>
                    Mail :
                    <MyDetailsSpan>amir.front.dev@gmail.com</MyDetailsSpan>
                  </MyDetails>
                </AboutMeDetails>
                <AboutMeDetails>
                  <MyDetails>
                    Age : <MyDetailsSpan>21</MyDetailsSpan>
                  </MyDetails>
                  <MyDetails>
                    Degree : <MyDetailsSpan>Junior</MyDetailsSpan>
                  </MyDetails>
                  <MyDetails>
                    City : <MyDetailsSpan>Tehran, Iran</MyDetailsSpan>
                  </MyDetails>
                  <MyDetails>
                    Freelance : <MyDetailsSpan>Available</MyDetailsSpan>
                  </MyDetails>
                </AboutMeDetails>
              </AboutMeDetailsWrapper>
              <AboutButtonWrapper>
                <AboutBtn onClick={handleDownload}>Download CV</AboutBtn>
                <AboutBtn2 to="contact" spy={true} smooth={true} delay={100}>
                  Hire Me
                </AboutBtn2>
              </AboutButtonWrapper>
            </AboutMeDetailsContainer>
          </AboutMeWrapper>
          <AboutMeSkillWrapper>
            <MySkillText>My Skills</MySkillText>
            <MySkillsChartWrapper>
              <MySkillsChartcol>
                <MySkillsChartcolContainer>
                  <SkillsChartNameContainer>
                    <MyChartName>HTML</MyChartName>
                    <MYChartPercent>95%</MYChartPercent>
                  </SkillsChartNameContainer>
                  <MYChartShape>
                    <MyChartShape2></MyChartShape2>
                  </MYChartShape>
                </MySkillsChartcolContainer>
                <MySkillsChartcolContainer>
                  <SkillsChartNameContainer>
                    <MyChartName>CSS</MyChartName>
                    <MYChartPercent>90%</MYChartPercent>
                  </SkillsChartNameContainer>
                  <MYChartShape>
                    <MyChartShape3></MyChartShape3>
                  </MYChartShape>
                </MySkillsChartcolContainer>
                <MySkillsChartcolContainer>
                  <SkillsChartNameContainer>
                    <MyChartName>JavaScript</MyChartName>
                    <MYChartPercent>85%</MYChartPercent>
                  </SkillsChartNameContainer>
                  <MYChartShape>
                    <MyChartShape4></MyChartShape4>
                  </MYChartShape>
                </MySkillsChartcolContainer>
              </MySkillsChartcol>
              <MySkillsChartcol>
                <MySkillsChartcolContainer>
                  <SkillsChartNameContainer>
                    <MyChartName>BootStrap</MyChartName>
                    <MYChartPercent>88%</MYChartPercent>
                  </SkillsChartNameContainer>
                  <MYChartShape>
                    <MyChartShape5></MyChartShape5>
                  </MYChartShape>
                </MySkillsChartcolContainer>
                <MySkillsChartcolContainer>
                  <SkillsChartNameContainer>
                    <MyChartName>React JS</MyChartName>
                    <MYChartPercent>80%</MYChartPercent>
                  </SkillsChartNameContainer>
                  <MYChartShape>
                    <MyChartShape6></MyChartShape6>
                  </MYChartShape>
                </MySkillsChartcolContainer>
                <MySkillsChartcolContainer>
                  <SkillsChartNameContainer>
                    <MyChartName>Responsive</MyChartName>
                    <MYChartPercent>90%</MYChartPercent>
                  </SkillsChartNameContainer>
                  <MYChartShape>
                    <MyChartShape7></MyChartShape7>
                  </MYChartShape>
                </MySkillsChartcolContainer>
              </MySkillsChartcol>
            </MySkillsChartWrapper>
          </AboutMeSkillWrapper>
        </AboutContainer>
      </AboutSection>
    </>
  );
};

export default About;
