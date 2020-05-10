import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Wrapper } from "./CreateBoard";
import cancelCreatingBoard from "./../../../Actions/CancelCreatingBoard";
import closeIcon from "../../../Assets/closeIcon.svg";

const Title = styled.h3`
  color: black;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-contnet: space-around;
  align-items: center;
  width: 100%;
  border-bottom: solid 1px rgb(240, 240, 240);
`;

const CloseBoardIcon = styled.img`
  width: 24px;
  height: 24px;
  padding: 5px;
  transition: all 200ms ease-in-out;

  &:hover {
    transition: all 200ms ease-in-out;
    transform: scale(1.25) rotate(4.5deg);
  }
`;

const bodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;
`;

const BoardNamingInput = styled.imput`
  margin: 20px 2rem 5px;
  padding: 11px 15px;
  font-size: 16px;
  border-radius: 3px;
  border: 2.5px solid #4481eb;
  width: 75%;
`;

const ButtomWrapper = styled.div`
  margin: 20px 0 5p[x 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const SubmitButton = styled.button`
  width: 114px;
  height: 43px;
  margin: 15px 18px 5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    transition: all 200ms ease-in-out;
    background-color: #4481eb;
    color: white;
  }
`;

class ActiveCreateBoard extends Components {
  handleForm = () => {
    console.log("submitted");
  };

  renderForm = (props) => {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.hadleForm)}>
        <Field name="boardTitle" component={BoardNamingInput} type="text" />
      </form>
    );
  };

  render() {
    const { cancelCreatingBoard } = this.props;
    return (
      <Wrapper>
        <TopWrapper>
          <Title>Creating a bard</Title>
          <CloseBoardIcon
            onClick={() => cancelCreatingBoard()}
            src={require("../../../Assets/closeIcon.svg")}
          />
        </TopWrapper>
        <BodyWrapper>
          <BoardNamingTitle>What shall we call the board?</BoardNamingTitle>
          {this.renderForm()}
          <ButtonWrapper>
            <CancelButton onClick={() => cancelCreateBoard()}>
              Cancel
            </CancelButton>
            <SubmitButton onClick={this.handleForm()}>Create</SubmitButton>
          </ButtonWrapper>
        </BodyWrapper>
      </Wrapper>
    );
  }
}

function validate(values) {
  let errors = {};

  if (!values.boardTitle) {
    errors.boardTitle = "Oops! Looks like you forgot the name!";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "boardTitle",
})(connect(null, { cancelCreatingBoard })(ActiveCreateBoard));
