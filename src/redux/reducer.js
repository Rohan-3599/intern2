import { FETCH_ALL} from './actionTypes';
export default (data = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return [...action.payload ];
      default:
        return data;
    }
  };