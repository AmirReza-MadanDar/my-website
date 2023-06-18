import React from "react";
import {
  BlogButoon,
  BlogButoonContainer,
  BlogCartButton,
  BlogCartContainer,
  BlogCartTextContainer,
  BlogCartTextDescription,
  BlogCartTextTittel,
  BlogCartView,
  BlogContainer,
  BlogIcon1,
  BlogIcon2,
  BlogImg,
  BlogSection,
  BlogTextCol2,
  BlogTextCul1,
  BlogTextTittel,
  DateIcon,
  DateText,
  MessageIcon,
  MessageText,
} from "./blogElements";
import i1 from "../../images/12.jpg";
import i2 from "../../images/13.jpg";
import i3 from "../../images/14.jpg";
import { RxCalendar } from "react-icons/rx";
import { TbMessageDots } from "react-icons/tb";
const Blog = ({ toggel2 }) => {
  const handelAlertButoon = () => {
    return alert("Coming Soon ... :)");
  };
  return (
    <>
      <BlogSection id="blog" onClick={toggel2}>
        <BlogContainer>
          <BlogTextTittel>Latest blog</BlogTextTittel>
          <BlogCartContainer>
            <BlogCartView>
              <BlogImg src={i1} />
              <BlogCartTextContainer>
                <BlogTextCul1>
                  <BlogIcon1>
                    <DateIcon>
                      <RxCalendar />
                    </DateIcon>
                    <DateText>June 02, 2020</DateText>
                  </BlogIcon1>
                  <BlogIcon2>
                    <MessageIcon>
                      <TbMessageDots />
                    </MessageIcon>
                    <MessageText>5</MessageText>
                  </BlogIcon2>
                </BlogTextCul1>
                <BlogTextCol2>
                  <BlogCartTextTittel>Be Your Best Version</BlogCartTextTittel>
                  <BlogCartTextDescription>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                  </BlogCartTextDescription>
                  <BlogCartButton onClick={handelAlertButoon}>
                    Read More...
                  </BlogCartButton>
                </BlogTextCol2>
              </BlogCartTextContainer>
            </BlogCartView>
            <BlogCartView>
              <BlogImg src={i2} />
              <BlogCartTextContainer>
                <BlogTextCul1>
                  <BlogIcon1>
                    <DateIcon>
                      <RxCalendar />
                    </DateIcon>
                    <DateText>June 08, 2020</DateText>
                  </BlogIcon1>
                  <BlogIcon2>
                    <MessageIcon>
                      <TbMessageDots />
                    </MessageIcon>
                    <MessageText>3</MessageText>
                  </BlogIcon2>
                </BlogTextCul1>
                <BlogTextCol2>
                  <BlogCartTextTittel>
                    5 Tips In UI/UX Web Design
                  </BlogCartTextTittel>
                  <BlogCartTextDescription>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                  </BlogCartTextDescription>
                  <BlogCartButton onClick={handelAlertButoon}>
                    Read More...
                  </BlogCartButton>
                </BlogTextCol2>
              </BlogCartTextContainer>
            </BlogCartView>
            <BlogCartView>
              <BlogImg src={i3} />
              <BlogCartTextContainer>
                <BlogTextCul1>
                  <BlogIcon1>
                    <DateIcon>
                      <RxCalendar />
                    </DateIcon>
                    <DateText>June 12, 2020</DateText>
                  </BlogIcon1>
                  <BlogIcon2>
                    <MessageIcon>
                      <TbMessageDots />
                    </MessageIcon>
                    <MessageText>8</MessageText>
                  </BlogIcon2>
                </BlogTextCul1>
                <BlogTextCol2>
                  <BlogCartTextTittel>Write Your Dreams</BlogCartTextTittel>
                  <BlogCartTextDescription>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                  </BlogCartTextDescription>
                  <BlogCartButton onClick={handelAlertButoon}>
                    Read More...
                  </BlogCartButton>
                </BlogTextCol2>
              </BlogCartTextContainer>
            </BlogCartView>
          </BlogCartContainer>
          <BlogButoonContainer>
            <BlogButoon onClick={handelAlertButoon}>View More</BlogButoon>
          </BlogButoonContainer>
        </BlogContainer>
      </BlogSection>
    </>
  );
};

export default Blog;
