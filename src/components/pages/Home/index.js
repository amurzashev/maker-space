import React from 'react';
import StyledForm from '../../molecules/StyledForm';
import Input from '../../atoms/Input';

const Home = () => {
  return (
    <StyledForm>
      <Input type="text" />
      <Input type="submit">Add task</Input>
    </StyledForm>
  )
};

export default Home;
