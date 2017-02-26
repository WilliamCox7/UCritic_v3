// - TYPES
const SAVE_USER = 'user/SAVE_USER';

// - INITIAL STATE
let user = {}

// - REDUCER
export default (state = user, action) => {
  switch(action.type) {
    default: return state;
  }
}

// - EXPORTED FUNCTIONS
export function saveUser(user) {
  return {
    type: SAVE_USER,
    user: user
  }
}
