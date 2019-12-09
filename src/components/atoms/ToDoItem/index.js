import styled from '@emotion/styled';

export default styled.li`
  height: 40px;
  padding: 0 20px;
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #e2e2e2;
  }
  &:nth-of-type(odd):not(:hover) {
    background: #eee;
  }
`;
