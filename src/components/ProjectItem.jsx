import styled from 'styled-components';

import Button from './Button';

import breakpoints from '../styles/breakpoints';

import placeholder from '../assets/images/placeholder.jpg';

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  align-items: center;
  text-align: center;
  @media (min-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
  }
  @media (min-width: ${breakpoints.lg}px) {
    grid-template-columns: 520px 1fr;
    gap: 40px;
  }
`;

const Image = styled.img`
  max-width: 100%;
`;

const TechList = styled.ul`
  margin: 0 0 15px 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  li:not(:last-child)::after {
    content: '';
    display: inline-block;
    position: relative;
    top: -4px;
    width: 5px;
    height: 5px;
    background-color: #687086;
    border-radius: 50%;
    margin: 0 13px;
  }
  @media (min-width: ${breakpoints.md}px) {
    justify-content: flex-start;
  }
`;

const Title = styled.h3`
  font-size: 32px;
  color: ${({ theme }) => theme.heading.color};
  margin: 0 0 20px 0;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 36px;
  }
`;

const Desc = styled.p`
  margin: 0 0 40px 0;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px;
  @media (min-width: ${breakpoints.md}px) {
    flex-direction: row;
  }
`;

const GithubLink = styled.a`
  display: inline-block;
  position: relative;
  padding-bottom: 7px;
  line-height: 1;
  font-weight: 500;
  color: ${({ theme }) => theme.link};
  text-decoration: none;
  white-space: nowrap;
  outline: none;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transform-origin: left center;
    background-color: ${({ theme }) => theme.nav.color};
    transition: transform 0.3s ease;
  }
  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
  }
`;

function ProjectItem({ photo, tech, title, desc, live, github }) {
  return (
    <Wrapper>
      <a aria-hidden="true" href={live}>
        <Image src={photo} alt="" />
      </a>
      <div>
        {tech.length > 0 && (
          <TechList>
            {tech.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </TechList>
        )}
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <LinksWrapper>
          <Button aria-label={`${title} - Visit website`} href={live} target="_blank">
            Visit website
          </Button>
          <GithubLink aria-label={`${title} - Visit Github repo`} href={github} target="_blank">
            Github repo
          </GithubLink>
        </LinksWrapper>
      </div>
    </Wrapper>
  );
}

export default ProjectItem;
