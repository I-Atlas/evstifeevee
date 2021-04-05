import { FC } from "react";
import {
  TimelineBlock,
  YearCompanyContainer,
  Year,
  Position,
  Company,
  Type,
} from "./Timeline.style";
import { timelineData } from "../../data";
import { ComponentWrapper } from "../../App.style";
export const Timeline: FC = () => {
  return (
    <ComponentWrapper>
      <TimelineBlock>
        <Type>TIMELINE</Type>
      </TimelineBlock>
      {timelineData.map((item) => (
        <TimelineBlock key={item.id}>
          <YearCompanyContainer>
            <Year>{item.year}</Year>
            <Company>{item.company}</Company>
          </YearCompanyContainer>
          <Position>{item.position}</Position>
          <Type>{item.type}</Type>
        </TimelineBlock>
      ))}
    </ComponentWrapper>
  );
};
