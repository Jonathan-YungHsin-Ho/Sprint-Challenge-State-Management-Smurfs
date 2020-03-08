import {
  FETCHING_DATA_START,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE,
  POST_DATA_START,
  POST_DATA_SUCCESS,
  POST_DATA_FAILURE,
  PUT_DATA_START,
  PUT_DATA_SUCCESS,
  PUT_DATA_FAILURE,
} from '../actions';

const initialState = {
  data: [],
  isFetching: false,
  isDeleting: false,
  isPosting: false,
  isPutting: false,
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA_START:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_SMURF_START:
      return {
        ...state,
        isDeleting: true,
        error: '',
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        isDeleting: false,
      };
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case POST_DATA_START:
      return {
        ...state,
        isPosting: true,
        error: '',
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        isPosting: false,
      };
    case POST_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case PUT_DATA_START:
      return {
        ...state,
        isPutting: true,
        error: '',
      };
    case PUT_DATA_SUCCESS:
      return {
        ...state,
        isPutting: false,
      };
    case PUT_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
