import { Fragment } from 'react';
import styled from 'styled-components';
import { Tab } from '@headlessui/react';

import SectionWrapper from '../../layout/SectionWrapper';
import SectionHeading from '../SectionHeading';
import ProjectItem from '../ProjectItem';

import { projects } from '../../data';

import ProjectsIcon from '../../assets/images/projects-icon.png';
import breakpoints from '../../styles/breakpoints';

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  @media (min-width: ${breakpoints.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TabList = styled(Tab.List)`
  display:flex;
  align-items-center;
  justify-content:center;
  max-width:576px;
  margin:0 auto 4.5rem auto;
`;

const ProjectCategory = styled.button`
  width: 100%;
  background-color: ${({ theme, selected }) =>
    selected ? theme.button.primary.bg : 'transparent'};
  color: ${({ theme, selected }) => (selected ? theme.button.primary.color : theme.link)};
  border: none;
  padding: 20px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  @media (min-width: ${breakpoints.sm}px) {
    font-size: 16px;
  }
`;

function ProjectsSection() {
  return (
    <SectionWrapper id="work">
      <SectionHeading icon={ProjectsIcon} heading="Projects I've Built" subheading="Work" />
      <Tab.Group>
        <TabList>
          <Tab as={Fragment}>
            {({ selected }) => (
              <ProjectCategory selected={selected}>Personal Projects</ProjectCategory>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <ProjectCategory selected={selected}>Freelance Projects</ProjectCategory>
            )}
          </Tab>
        </TabList>
        <Tab.Panels>
          <Tab.Panel>
            <ProjectsList>
              {projects
                .filter((project) => project.category === 'personal')
                .map((project, index) => {
                  return <ProjectItem key={index} {...project} />;
                })}
            </ProjectsList>
          </Tab.Panel>
          <Tab.Panel>
            <ProjectsList>
              {projects
                .filter((project) => project.category === 'freelance')
                .map((project, index) => {
                  return <ProjectItem key={index} {...project} />;
                })}
            </ProjectsList>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </SectionWrapper>
  );
}

export default ProjectsSection;
