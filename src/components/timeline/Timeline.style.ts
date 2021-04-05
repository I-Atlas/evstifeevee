import styled from "styled-components";
import { media } from "@ultrasenses/system-theme";
import {
  YellowLightText,
  WhiteStrongText,
  WhiteLightText,
} from "../../App.style";

export const TimelineBlock = styled.a`
  width: 100%;
  padding: 32px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 2px solid #ffffff;
  ${media.forPhoneLarge} {
    flex-direction: row;
    padding: 52px 32px;
  }
  &:not(:first-child) {
    cursor: pointer;
    transition: background-color 0.35s ease-out;
  }
  &:not(:first-child):hover {
    background-color: #fff293;
    div {
      p {
        color: #181818;
      }
      strong {
        color: #181818;
      }
    }
    p {
      color: #181818;
    }
  }
`;

export const YearCompanyContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Year = styled(YellowLightText)``;

export const Position = styled(WhiteLightText)``;

export const Company = styled(WhiteStrongText)`
  margin-left: 24px;
  ${media.forPhoneLarge} {
    margin-left: 32px;
  }
  ${media.forTablet} {
    margin-left: 48px;
  }
  ${media.forTabletLarge} {
    margin-left: 58px;
  }
`;

export const Type = styled(YellowLightText)`
  width: 130px;
`;
