import styled from '@emotion/styled';

export default styled.li`
  height: 40px;
  padding: 0 20px;
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  box-sizing: border-box;
  transition: 0.3s;
  user-select: none;
  ${(props) => (props.isCrossed ? `
    text-decoration: line-through;
    opacity: 0.6;
  ` : `
    text-decoration: initial;
  `)}
`;
