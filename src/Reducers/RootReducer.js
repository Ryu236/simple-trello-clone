import { combineReducers } from "redux";
import CreateBoardReducer from "./CreateBoardReducer";
import BoardsReducer from "./BoardsReducer";
import ActiveBoardReducer from "./ActiveBoardReducer";
import { reducer as formReducer } from "redux-form";

const RootReducer = combineReducers({
  form: formReducer,
  newBoard: CreateBoardReducer,
  boardsCollection: BoardsReducer,
  activeBoard: ActiveBoardReducer,
});

export default RootReducer;
