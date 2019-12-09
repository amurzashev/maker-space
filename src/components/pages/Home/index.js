import React from 'react';
import StyledForm from '../../molecules/StyledForm';
import Button from '../../atoms/Button';
import TextInput from '../../atoms/TextInput';

const Home = () => {
  return (
    <StyledForm>
      <TextInput type="text" />
      <Button>Add task</Button>
    </StyledForm>
  )
};

export default Home;
