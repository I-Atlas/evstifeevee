import styled from "styled-components";
import { typography, media } from "@ultrasenses/system-theme";

export const HeadContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  ${media.forPhoneLarge} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const HeadImage = styled.img`
  width: auto;
  height: 36px;
  ${media.forPhone} {
    height: 48px;
  }
  ${media.forPhoneLarge} {
    height: auto;
  }
`;

export const TextContainer = styled.div`
  width: auto;
  height: auto;
  max-height: 500px;
  max-width: 500px;
  color: #fffefe;
  display: flex;
  flex-direction: column;
  ${typography.light16};
  ${media.forPhoneLarge} {
    ${typography.light18};
  }
  ${media.forTablet} {
    ${typography.light20};
  }
  ${media.forTabletLarge} {
    ${typography.lightr24};
    max-height: 600px;
    max-width: 600px;
  }
`;

export const TopText = styled.div`
  margin-bottom: 32px;
  ${media.forTablet} {
    margin-bottom: 28px;
  }
`;

export const MainText = styled(TopText)``;

export const BottomText = styled.div``;