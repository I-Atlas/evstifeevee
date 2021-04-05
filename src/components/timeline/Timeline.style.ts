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
  text-decoration: none;
  justify-content: space-between;
  border-bottom: 2px solid #ffffff;
  ${media.forTablet} {
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
  flex-direction: column;
  ${media.forTablet} {
    flex-direction: row;
  }
`;

export const Year = styled(YellowLightText)`
  ${media.forPhone} {
    margin-bottom: 4px;
  }
  ${media.forPhoneLarge} {
    margin-bottom: 8px;
  }
  ${media.forTablet} {
    margin-bottom: 0;
  }
`;

export const Position = styled(WhiteLightText)`
  ${media.forPhone} {
    margin-bottom: 4px;
  }
  ${media.forPhoneLarge} {
    margin-bottom: 8px;
  }
  ${media.forTablet} {
    margin-bottom: 0;
  }
`;

export const Company = styled(WhiteStrongText)`
  ${media.forPhone} {
    margin-bottom: 4px;
  }
  ${media.forPhoneLarge} {
    margin-bottom: 8px;
  }
  ${media.forTablet} {
    margin-left: 48px;
    margin-bottom: 0;
  }
  ${media.forTabletLarge} {
    margin-left: 58px;
  }
`;

export const Type = styled(YellowLightText)`
  width: 130px;
`;
