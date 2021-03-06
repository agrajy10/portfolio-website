import styled from 'styled-components';

import Button from './Button';

import breakpoints from '../styles/breakpoints';

import placeholder from '../assets/images/placeholder.jpg';

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  align-items: flex-start;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
`;

const TechList = styled.ul`
  margin: 0 0 0.9375rem 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 0.9375rem;
  font-weight: 500;
  white-space: nowrap;
  li:not(:last-child)::after {
    content: '';
    display: inline-block;
    position: relative;
    top: -4px;
    width: 0.3125rem;
    height: 0.3125rem;
    background-color: #687086;
    border-radius: 50%;
    margin: 0 0.8125rem;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  color: ${({ theme }) => theme.heading.color};
  margin: 0 0 1.25rem 0;
  @media (min-width: ${breakpoints.md}px) {
    font-size: 2.25rem;
  }
`;

const Desc = styled.p`
  margin: 0 0 2.5rem 0;
  span {
    display: block;
    font-size: 0.9rem;
  }
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
    justify-content: center;
  }
`;

const GithubLink = styled.a`
  display: inline-block;
  position: relative;
  padding-bottom: 0.4375rem;
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
    height: 0.125rem;
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

function ProjectItem({ photo, tech, title, category, desc, live, github }) {
  return (
    <Wrapper>
      <a aria-hidden="true" href={live} target="_blank">
        <Image src={photo || placeholder} alt="" />
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
        <Desc>
          {desc}
          {category === 'freelance' && (
            <span>
              <strong>Design is not done by me.</strong>
            </span>
          )}
        </Desc>

        <LinksWrapper>
          {live && (
            <Button aria-label={`${title} - Visit website`} href={live} target="_blank">
              Visit website
            </Button>
          )}
          {github && (
            <GithubLink aria-label={`${title} - Visit Github repo`} href={github} target="_blank">
              Github repo
            </GithubLink>
          )}
        </LinksWrapper>
      </div>
    </Wrapper>
  );
}

export default ProjectItem;
