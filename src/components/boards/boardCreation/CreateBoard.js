import React, { Component } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 25%;
  background-color: white;
  padding: 30px, 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5.5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transition: 200ms ease-in-out;
  }

  @media(max-width: 960px) {
    widthL: 50px;
  }
`

const Text = styled.h3`
  color: black;
`

const CreateBoard = ({ createNewBoard }) => {
  return (
    <Wrapper onClick={ () => createNewBoard() }>
      <Text>Create a new board...</Text>
    </Wrapper>
  )
}

CreateBoard.PropTypes = {
  createNewBoard: PropTypes.func.isRequired
}

export default connect(null, { createNewBoard })(CreateBoard);
