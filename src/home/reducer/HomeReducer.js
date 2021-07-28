import {
  START_GET_DATA_HOME,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  FILTER_DATA_PRICE,
  FILTER_DATA_ARTIST,
  FILTER_DATA_DATE,
  FILTER_BY_TEXT,
} from '../action/home-action-type';

const initialState = {
  isLoading: false,
  entry: [],
  entryBackUp: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GET_DATA_HOME:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        entry: action.payload.feed.entry,
        entryBackUp: action.payload.feed.entry,
      };
    case GET_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    case FILTER_DATA_PRICE:
      console.log('datamodifNew', action.data);
      return {
        ...state,
        entry: action.data,
      };
    case FILTER_DATA_DATE:
      console.log('datamodifNew', action.data);
      return {
        ...state,
        entry: action.data,
      };
    case FILTER_BY_TEXT:
      return {
        ...state,
        entry: action.data,
      };
  }
  return state;
};

export default HomeReducer;
