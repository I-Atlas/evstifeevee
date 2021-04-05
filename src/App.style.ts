import styled, { createGlobalStyle } from "styled-components";
import { media, typography } from "@ultrasenses/system-theme";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: 'Heebo', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #151517;
}`;

export const AppContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  max-width: 282px;
  ${media.forPhone} {
    max-width: 342px;
  }
  ${media.forPhoneLarge} {
    max-width: 542px;
  }
  ${media.forTablet} {
    max-width: 724px;
  }
  ${media.forTabletLarge} {
    max-width: 968px;
  }
  ${media.forDesktop} {
    max-width: 1148px;
  }
`;

export const ComponentWrapper = styled.div`
  margin: 60px 0;
  ${media.forPhoneLarge} {
    margin: 80px 0;
  }
  ${media.forTablet} {
    margin: 100px 0;
  }
  ${media.forTabletLarge} {
    margin: 120px 0;
  }
`;

export const YellowLightLink = styled.a`
  transition: color 0.3s ease-out;
  color: #fff293;
  cursor: pointer;
  text-decoration: none;
  ${typography.light16};
  ${media.forPhoneLarge} {
    ${typography.light18};
  }
  ${media.forTablet} {
    ${typography.light20};
  }
  ${media.forTabletLarge} {
    ${typography.lightr24};
  }
  &:hover {
    color: #fffefe;
  }
`;

export const YellowLightText = styled.p`
  margin: 0;
  color: #fff293;
  ${typography.light16};
  ${media.forPhoneLarge} {
    ${typography.light18};
  }
  ${media.forTablet} {
    ${typography.light20};
  }
  ${media.forTabletLarge} {
    ${typography.lightr24};
  }
`;

export const WhiteLightText = styled.p`
  margin: 0;
  color: #fffefe;
  ${typography.light16};
  ${media.forPhoneLarge} {
    ${typography.light18};
  }
  ${media.forTablet} {
    ${typography.light20};
  }
  ${media.forTabletLarge} {
    ${typography.lightr24};
  }
`;

export const WhiteStrongText = styled.strong`
  margin: 0;
  color: #fffefe;
  ${typography.medium16};
  ${media.forPhoneLarge} {
    ${typography.medium18};
  }
  ${media.forTablet} {
    ${typography.medium20};
  }
  ${media.forTabletLarge} {
    ${typography.medium24};
  }
`;

export const WhiteHeadText = styled.p`
  margin: 0;
  color: #fffefe;
  ${typography.medium24};
  ${media.forPhoneLarge} {
    ${typography.medium32};
  }
  ${media.forTablet} {
    ${typography.medium40};
  }
  ${media.forTabletLarge} {
    ${typography.medium52};
  }
`;
