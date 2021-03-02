import axios from 'axios';
import { FETCH_ALL} from './actionTypes';

const API = axios.create({ baseURL: 'https://mern-app-exp.herokuapp.com/' });


export const getData = () => async (dispatch) => {
    try {
      const {data} = await API.get('/api/customers');
      console.log(data);
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  