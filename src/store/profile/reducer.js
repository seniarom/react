import * as types from './types'

const initialState = {
  name: 'Ivan',
  visible: true
}

export const profileReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.CHANGE_NAME:
      return {
        ...state,
        name: payload
      }

    default:
      return state
  }
}