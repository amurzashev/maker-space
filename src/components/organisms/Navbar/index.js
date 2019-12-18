import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Wrap = styled.nav`
  height: 60px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 0 20px;
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.primary};
  color: white;
`;

export default () => (
  <Wrap>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </Wrap>
);
