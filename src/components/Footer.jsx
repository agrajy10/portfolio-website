import styled from 'styled-components';

import HeartIcon from '../assets/images/heart-icon.png';

const Wrapper = styled.footer`
  padding: 2.1875rem 0.9375rem;
  text-align: center;
  font-size: 0.9375rem;
  font-weight: 500;
  img {
    display: inline-block;
    margin: 0 0.5rem;
    position: relative;
    top: 4px;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <span>
        Made with <img src={HeartIcon} alt="Heart Icon" /> Agraj Yadav
      </span>
    </Wrapper>
  );
}

export default Footer;
