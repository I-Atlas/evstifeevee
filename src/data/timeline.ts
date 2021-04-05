export interface TimelineData {
  id: number,
  year: number;
  company: string;
  position: string;
  type: string;
}

export const timelineData: Array<TimelineData> = [
  {
    id: 1,
    year: 2021,
    company: "Landai",
    position: "Junior UX/UI designer",
    type: "AGENCY",
  },
  {
    id: 2,
    year: 2020,
    company: "None",
    position: "Junior UX/UI designer",
    type: "FREELANCE",
  },
  {
    id: 3,
    year: 2019,
    company: "None",
    position: "Motion  designer / Graphic designer",
    type: "FREELANCE",
  },
  {
    id: 4,
    year: 2018,
    company: "SIou",
    position: "3D designer",
    type: "AGENCY",
  },
  {
    id: 5,
    year: 2017,
    company: "Tiara",
    position: "3D designer",
    type: "AGENCY",
  },
  {
    id: 6,
    year: 2016,
    company: "Tiara",
    position: "3D designer",
    type: "AGENCY",
  },
  {
    id: 7,
    year: 2015,
    company: "None",
    position: "3D designer",
    type: "FREELANCE",
  },
];
