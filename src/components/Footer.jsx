import styled from 'styled-components';

import HeartIcon from '../assets/images/heart-icon.png';

const Wrapper = styled.footer`
  padding: 35px 15px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  img {
    display: inline-block;
    margin: 0 8px;
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
