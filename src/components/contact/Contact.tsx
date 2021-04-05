import { FC } from "react";
import {
  HeadContainer,
  MainContainer,
  ContactContainer,
  PortfolioContainer,
} from "./Contact.style";
import {
  ComponentWrapper,
  YellowLightText,
  WhiteLightText,
  WhiteStrongText,
  YellowLightLink,
  WhiteHeadText,
} from "../../App.style";
export const Contact: FC = () => {
  return (
    <ComponentWrapper>
      <HeadContainer>
        <YellowLightText>CONTACT</YellowLightText>
      </HeadContainer>
      <MainContainer>
        <ContactContainer>
          <WhiteHeadText style={{ marginBottom: "28px" }}>
            Get in touch ?
          </WhiteHeadText>
          <WhiteLightText>
            The easiest way to contact me is to send me an{" "}
            <WhiteStrongText>email</WhiteStrongText> to
          </WhiteLightText>
          <YellowLightLink href="mailto:w.evstifeevee@gmail.com">
            w.evstifeevee@gmail.com
          </YellowLightLink>
        </ContactContainer>
        <PortfolioContainer>
          <WhiteLightText>My portfolio you can see on</WhiteLightText>
          <YellowLightLink>behance</YellowLightLink>
        </PortfolioContainer>
      </MainContainer>
    </ComponentWrapper>
  );
};
