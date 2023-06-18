import {
  ContactContainer,
  ContactInpoutContainer,
  ContactPersonalCol1,
  ContactPersonalWrapper,
  ContactSection,
  ContactTittelText,
  Input1,
  Input2,
  Input3,
  InputButton,
  InputCol1,
  MySochial,
  PersonalDetailes,
  PersonalIcon3,
  PersonalIcone,
  PersonalIcone2,
  PersonalText,
} from "./contactElements";
import React from "react";
import { MdAddIcCall, MdLocationOn, MdEmail } from "react-icons/md";
const Contact = ({ toggel }) => {
  const handelButoon = () => {
    return alert("Coming Soon ... :)");
  };
  return (
    <>
      <ContactSection id="contact" onClick={toggel}>
        <ContactContainer>
          <ContactTittelText>Get in touch</ContactTittelText>
          <ContactPersonalWrapper>
            <ContactPersonalCol1>
              <PersonalDetailes>
                <PersonalIcone>
                  <MdAddIcCall />
                </PersonalIcone>
                <PersonalText>Call Us On</PersonalText>
              </PersonalDetailes>
              <MySochial>+98 933 327 4797</MySochial>
            </ContactPersonalCol1>
            <ContactPersonalCol1>
              <PersonalDetailes>
                <PersonalIcone2>
                  <MdLocationOn />
                </PersonalIcone2>
                <PersonalText>Visit Office</PersonalText>
              </PersonalDetailes>
              <MySochial>Ponak Street, Tehran, Iran</MySochial>
            </ContactPersonalCol1>
            <ContactPersonalCol1>
              <PersonalDetailes>
                <PersonalIcon3>
                  <MdEmail />
                </PersonalIcon3>
                <PersonalText>Email Us At</PersonalText>
              </PersonalDetailes>
              <MySochial>amir.front.dev@gmail.com</MySochial>
            </ContactPersonalCol1>
          </ContactPersonalWrapper>
          <ContactInpoutContainer>
            <InputCol1>
              <Input1 placeholder="Your Name*" />
              <Input1 placeholder="Your Email*" />
            </InputCol1>
            <Input2 placeholder="Your Subject*" />
            <Input3 placeholder="Your Message..." />
            <InputButton onClick={handelButoon}>Send Message</InputButton>
          </ContactInpoutContainer>
        </ContactContainer>
      </ContactSection>
    </>
  );
};

export default Contact;
