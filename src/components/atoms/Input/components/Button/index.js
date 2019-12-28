import styled from '@emotion/styled';

const Button = styled.button`
  background: ${(props) => props.theme.colors[props.color] || props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  padding: 0 20px;
  font-weight: bold;
  cursor: pointer;
  height: 40px;
  border: 0;
  font-size: 0.8rem;
  outline: none;
`;

export default Button;
