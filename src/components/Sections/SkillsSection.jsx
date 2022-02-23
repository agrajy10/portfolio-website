import { useState } from 'react';
import styled from 'styled-components';

import SectionWrapper from '../../layout/SectionWrapper';
import SectionHeading from '../SectionHeading';
import SkillsList from '../SkillsList';

import breakpoints from '../../styles/breakpoints';

import skillsData from '../../skills.json';

import SkillsIcon from '../../assets/images/skills-icon.png';

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px 30px;
  @media (min-width: ${breakpoints.sm}px) {
    max-width: 960px;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
  }
`;

function SkillsSection() {
  const [data, setData] = useState(skillsData);
  return (
    <SectionWrapper id="skills">
      <SectionHeading icon={SkillsIcon} heading="Tools &amp; Tech I use" subheading="Skills" />
      <SkillsGrid>
        <div>
          <SkillsList category={data[0].category} list={data[0].tech} />
        </div>
        <div>
          <SkillsList category={data[1].category} list={data[1].tech} />
          <SkillsList category={data[2].category} list={data[2].tech} />
        </div>
        <div>
          <SkillsList category={data[2].category} list={data[3].tech} />
          <SkillsList category={data[3].category} list={data[4].tech} />
        </div>
      </SkillsGrid>
    </SectionWrapper>
  );
}

export default SkillsSection;
