import styled from "styled-components";
import { media } from "@ultrasenses/system-theme";

export const HeadContainer = styled.div`
  width: 100%;
  padding: 32px 12px;
  ${media.forPhoneLarge} {
    padding: 52px 32px;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  justify-content: space-between;
  padding: 0 12px 0 12px;
  ${media.forPhoneLarge} {
    padding: 0 48px 0 48px;
    flex-direction: row;
  }
  ${media.forTablet} {
    padding: 0 64px 0 64px;
  }
  ${media.forTabletLarge} {
    padding: 0 96px 0 96px;
    margin-top: 100px;
  }
  ${media.forDesktop} {
    padding: 0 148px 0 148px;
  }
`;

export const ContactContainer = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: column;
`;

export const PortfolioContainer = styled.div`
  max-width: 320px;
  align-self: center;
`;
