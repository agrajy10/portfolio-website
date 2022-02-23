import { useState } from 'react';
import styled from 'styled-components';

import SectionWrapper from '../../layout/SectionWrapper';
import SectionHeading from '../SectionHeading';
import ProjectItem from '../ProjectItem';

import projectsData from '../../projects.json';

import ProjectsIcon from '../../assets/images/projects-icon.png';

const ProjectsList = styled.div`
  article:not(:last-child) {
    margin-bottom: 60px;
  }
`;

function ProjectsSection() {
  const [data, setData] = useState(projectsData);
  return (
    <SectionWrapper id="work">
      <SectionHeading icon={ProjectsIcon} heading="Projects I've Built" subheading="Work" />
      <ProjectsList>
        {data.map((project, index) => {
          return <ProjectItem key={index} {...project} />;
        })}
      </ProjectsList>
    </SectionWrapper>
  );
}

export default ProjectsSection;
