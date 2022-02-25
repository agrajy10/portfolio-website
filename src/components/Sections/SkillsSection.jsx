import styled from 'styled-components';

import SectionWrapper from '../../layout/SectionWrapper';
import SectionHeading from '../SectionHeading';
import SkillsList from '../SkillsList';

import breakpoints from '../../styles/breakpoints';

import { skills } from '../../data';

import SkillsIcon from '../../assets/images/skills-icon.png';

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px 30px;
  @media (min-width: ${breakpoints.sm}px) {
    max-width: 60rem;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
  }
`;

function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading icon={SkillsIcon} heading="Tools &amp; Tech I use" subheading="Skills" />
      <SkillsGrid>
        <div>
          <SkillsList category={skills[0].category} list={skills[0].tech} />
        </div>
        <div>
          <SkillsList category={skills[1].category} list={skills[1].tech} />
          <SkillsList category={skills[2].category} list={skills[2].tech} />
        </div>
        <div>
          <SkillsList category={skills[3].category} list={skills[3].tech} />
          <SkillsList category={skills[4].category} list={skills[4].tech} />
        </div>
      </SkillsGrid>
    </SectionWrapper>
  );
}

export default SkillsSection;
