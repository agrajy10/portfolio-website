import styled from 'styled-components';

const Element = styled.button`
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  background-color: ${({ theme, variant }) => theme.button[variant].bg};
  color: ${({ theme, variant }) => theme.button[variant].color};
  text-align: center;
  line-height: 1;
  text-decoration: none;
  min-width: 242px;
  padding: 22px;
  border: 2px solid ${({ theme, variant }) => theme.button[variant].borderColor};
  border-radius: 100px;
  cursor: pointer;
  user-select: none;
`;

function Button({ type = 'button', variant = 'primary', className, children, href, ...rest }) {
  if (href) {
    return (
      <Element as="a" href={href} type={type} variant={variant} className={className} {...rest}>
        {children}
      </Element>
    );
  }

  return (
    <Element type={type} variant={variant} className={className} {...rest}>
      {children}
    </Element>
  );
}

export default Button;
