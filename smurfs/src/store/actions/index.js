import axios from 'axios';

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';

export const POST_DATA_START = 'POST_DATA_START';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';

export const PUT_DATA_START = 'PUT_DATA_START';
export const PUT_DATA_SUCCESS = 'PUT_DATA_SUCCESS';
export const PUT_DATA_FAILURE = 'PUT_DATA_FAILURE';

export const getData = () => dispatch => {
  dispatch({ type: FETCHING_DATA_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: FETCHING_DATA_FAILURE,
        payload: err.response.message,
      }),
    );
};

export const postData = data => dispatch => {
  dispatch({ type: POST_DATA_START });
  axios
    .post(`http://localhost:3333/smurfs`, data)
    .then(res => dispatch({ type: POST_DATA_SUCCESS }))
    .catch(err =>
      dispatch({ type: POST_DATA_FAILURE, payload: err.response.message }),
    );
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE_SMURF_SUCCESS }))
    .catch(err =>
      dispatch({
        type: DELETE_SMURF_FAILURE,
        payload: err.response.message,
      }),
    );
};

export const putData = (id, data) => dispatch => {
  dispatch({ type: PUT_DATA_START });
  axios
    .put(`http://localhost:3333/smurfs/${id}`, data)
    .then(res => dispatch({ type: PUT_DATA_SUCCESS }))
    .catch(err =>
      dispatch({ type: PUT_DATA_FAILURE, payload: err.response.message }),
    );
};
