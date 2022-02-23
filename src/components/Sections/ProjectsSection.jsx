import styled from 'styled-components';

import SectionWrapper from '../../layout/SectionWrapper';
import SectionHeading from '../SectionHeading';
import ProjectItem from '../ProjectItem';

import { projects } from '../../data';

import ProjectsIcon from '../../assets/images/projects-icon.png';

const ProjectsList = styled.div`
  article:not(:last-child) {
    margin-bottom: 60px;
  }
`;

function ProjectsSection() {
  return (
    <SectionWrapper id="work">
      <SectionHeading icon={ProjectsIcon} heading="Projects I've Built" subheading="Work" />
      <ProjectsList>
        {projects.map((project, index) => {
          return <ProjectItem key={index} {...project} />;
        })}
      </ProjectsList>
    </SectionWrapper>
  );
}

export default ProjectsSection;
