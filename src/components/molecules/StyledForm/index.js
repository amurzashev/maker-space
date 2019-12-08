import React from 'react';
import styled from '@emotion/styled';
import Button from '../../atoms/Button';
import TextInput from '../../atoms/TextInput';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Form = () => {
  return (
    <StyledForm>
      <Button />
      <TextInput />
    </StyledForm>
  )
};

export default Form;
