import { GET_WEATHER } from './types';

export default (state, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        temperature: action.payload.temperature,
        city: action.payload.city,
        country: action.payload.country,
        humidity: action.payload.humidity,
        description: action.payload.description,
        error: action.payload.error
      };

    default:
      return state;
  }
};
