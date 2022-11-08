import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { text: "I have done a couple of open source projects" },
  { text: "Solo Learn Java Script Certification" },
  { text: "Data Science with Python Simpli Learn Certification" },
  { text: "Solo Learn HTML 5 Certification" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number} </BoxNum>
          <BoxText>{card.text} </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
