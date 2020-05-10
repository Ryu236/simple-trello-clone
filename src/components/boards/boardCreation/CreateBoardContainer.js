import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import CreateBoard from "./CreateBoard";
import ActiveCreateBoard from "./ActiveCreateBoard";

class CreateBoardContainer extends Component {
  static propTypes = {
    createBoard: propTypes.object,
  };

  render() {
    const { createBoard } = this.props;

    return (
      <div>
        {createBoard.isBoardOpen ? <ActiveCreateBoard /> : <CreateBoard />}
      </div>
    );
  }
}

function mapStateToProps({ createBoard }) {
  return {
    createBoard,
  };
}

export default connect(mapStateToProps)(CreateBoardContainer);
