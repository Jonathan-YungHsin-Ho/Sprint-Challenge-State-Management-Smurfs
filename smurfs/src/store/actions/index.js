import axios from 'axios';

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

export const getData = () => dispatch => {
  dispatch({ type: FETCHING_DATA_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_DATA_FAILURE, payload: err.response.message });
    });
};

export const postData = data => () => {
  // console.log(data);
  axios
    .post(`http://localhost:3333/smurfs`, data)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export const deleteSmurf = id => () => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
