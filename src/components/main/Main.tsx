import { FC } from "react";
import {
  HeadContainer,
  HeadImage,
  TextContainer,
  TopText,
  MainText,
  BottomText,
} from "./Main.style";
import { ComponentWrapper, WhiteStrongText } from "../../App.style";
import { evstifeevee, logo } from "../../assets";
export const Main: FC = () => {
  return (
    <ComponentWrapper>
      <HeadContainer>
        <HeadImage src={evstifeevee} />
        <HeadImage src={logo} />
      </HeadContainer>
      <TextContainer>
        <TopText>Hello</TopText>
        <MainText>
          Im <WhiteStrongText>Egor Evstifeev</WhiteStrongText> 23 y/o.{" "}
          <WhiteStrongText>UI UX</WhiteStrongText> designer. I have accumulated{" "}
          <WhiteStrongText>7 years</WhiteStrongText> expirience of making{" "}
          <WhiteStrongText>different design</WhiteStrongText>, in agency and as
          freelance Сurrently working on{" "}
          <WhiteStrongText>Figma</WhiteStrongText>. Graduated from the
          university in the direction of graphic design. I also make a logo and
          3D design.
        </MainText>
        <BottomText>
          Based in <WhiteStrongText>SPB</WhiteStrongText> (Russia)
        </BottomText>
      </TextContainer>
    </ComponentWrapper>
  );
};
