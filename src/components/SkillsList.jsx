import styled from 'styled-components';

const Heading = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.heading.color};
  margin: 0 0 1.25rem 0;
`;

const List = styled.ul`
  margin: 0 0 1.875rem 0;
  padding: 0;
  list-style: none;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5;
  li:not(:last-child) {
    margin-bottom: 0.9375rem;
  }
`;

function SkillsList({ category, list }) {
  return (
    <>
      <Heading>{category}</Heading>
      {list.length > 0 && (
        <List>
          {list.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </List>
      )}
    </>
  );
}

export default SkillsList;
