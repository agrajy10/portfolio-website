import styled from 'styled-components';

const Element = styled.button`
  display: inline-block;
  position: relative;
  cursor: pointer;
  user-select: none;
  outline: none;
  border: none;
  text-decoration: none;
  background: transparent;
  padding: 0;
  z-index: 1;
  span {
    display: block;
    font-size: 1rem;
    font-weight: 500;
    background-color: ${({ theme, variant }) => theme.button[variant].bg};
    color: ${({ theme, variant }) => theme.button[variant].color};
    text-align: center;
    line-height: 1;
    min-width: 242px;
    padding: 1.375rem;
    border: 2px solid ${({ theme, variant }) => theme.button[variant].borderColor};
    border-radius: 100px;
    transition: border-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover,
  &:focus {
    span {
      border-color: ${({ theme, variant }) => theme.button[variant].hover.borderColor};
    }
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    background-color: transparent;
    border: 2px solid ${({ theme, variant }) => theme.button[variant].hover.outlineColor};
    transform: translate(-50%, -50%);
    transform-origin: center center;
    z-index: -1;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover::before,
  &:focus::before {
    width: calc(100% + 12px);
    height: calc(100% + 12px);
  }
`;

function Button({ type = 'button', variant = 'primary', className, children, href, ...rest }) {
  if (href) {
    return (
      <Element as="a" href={href} type={type} variant={variant} className={className} {...rest}>
        <span>{children}</span>
      </Element>
    );
  }

  return (
    <Element type={type} variant={variant} className={className} {...rest}>
      <span>{children}</span>
    </Element>
  );
}

export default Button;
