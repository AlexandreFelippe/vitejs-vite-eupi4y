import { Dispatch } from '../../types';
export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (image: string) => ({
  type: GET_PICTURE,
  payload: image,
});

export function fetchAPI() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch('https://randomfox.ca/floof/');
      const data = await response.json();
      dispatch(getPicture(data.image));
    } catch (error) {
      console.log(error)
    }
  }
  }
}


export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

function requestStarted() {
  return { type: REQUEST_STARTED };
}

function requestSuccessful(imageURL: string) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: imageURL,
  };
}

function requestFailed(error: string) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export function fetchDogImage() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      dispatch(requestSuccessful(data.message));
    } catch (error: any) {
      dispatch(requestFailed(error.message));
    }
  };
}
