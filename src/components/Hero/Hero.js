import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Emmanuel Wangila
        <br />
        Front End Developer
      </SectionTitle>
      <SectionText>
        I'm a Software developer, highly motivated and interested in Technology,
        applying my skills to better our society
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More About Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
