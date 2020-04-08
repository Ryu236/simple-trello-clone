import { combineReducers } from 'redux';
import CreateBoardReducer from './CreateBoardReducer';
import BoardReducer from './BoardReducer';
import { resucer as formReducer } from 'redux-form';

const RootReducer = combineReducers({
  createBoard: CreateBoardReducer,
  board: BoardReducer,
  form: formReducer
})

export default RootReducer
