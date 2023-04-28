import { createStore } from "redux";

type state = {
  createdAt : string|object,
  email : string,
  firstName: string,
  lastName: string,
  id : string|null,
  updatedAt : string|object,
  token : string
}
const initialState : state = {
  createdAt : "",
  email: "",
  firstName: "",
  lastName: "",
  id: "",
  updatedAt: "",
  token: ""
}

type action = {
type : string,
payload:payload
}
type payload ={
  token : string,
  data : {
    body ?: {[key:string] : string | number}},
    firstName ?:string,
    lastName ?: string
}

function reducer(state = initialState, action:action) {
  if (action.type === "signOut") {
    return initialState;
  }
  if (action.type === "login") {
    return { ...state, token: action.payload.token }
  }
  if (action.type === "getDataUser") {
    const data = { ...action.payload.data.body }
    return {
      ...state,
      createdAt: data.createdAt,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      id: data.id,
      updatedAt: data.updatedAt
    }
  }
  if (action.type === "updateName") {
    return {
      ...state, firstName:
        action.payload.firstName,
      lastName: action.payload.lastName
    }
  }
  if (action.type === "logout") {
    return {...state,
      ...state,
      createdAt: null,
      email: "",
      firstName: "",
      lastName: "",
      id: null,
      updatedAt: null,
      token: null
    }

  }

  return state;
}

export const store = createStore(reducer);