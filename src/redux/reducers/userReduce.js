import {
  INFO_USER,
  UPDATE_INFO_USER
} from "../actionTypes"
import { userModels } from "../Models/userModels"

const defaultState = userModels;

export const userReduce = (state = defaultState, action) => {
  switch (action.type) {
    case INFO_USER:
      // payload = [{}]
      return [...state, action.payload];

    case UPDATE_INFO_USER:
      // map te retourne un nouveau state
      return state.map(param => {
        console.log(param.findId, 'param.findId')
        // console.log(action.payload, 'action.payload')
        // console.log(action.payload.param, 'action.payload.param')
        // console.log(UPDATE_INFO_USER, 'UPDATE_INFO_USER')
        if (param.findId === action.payload.findId) {
          return {
            id: action.payload.param.users.id,
            token: action.payload.param.tok,
            name: action.payload.param.users.name,
            surname: action.payload.param.users.surname,
            username: action.payload.param.users.username,
            email: action.payload.param.users.email,
            is_activated: action.payload.param.users.is_activated,
            password: action.payload.param.pwd,

            findId: 1,
          }
        } else {
          return param;
        }
      })

    default:
      return state;
  }
};
