const dudes = (state = [], action ) => {
  switch(action.type) {
    case 'DUDES':
      return action.dudes
    case 'ADD_DUDE':
      return [action.dude, ...state]
    case 'UPDATE_DUDE':
      return state.map( a => {
        if (a.id === action.dude.id)
          return action.dude
        return a
      })
    case 'DELETE_DUDE':
      return state.filter( a => a.id !== action.id )
    default:
      return state;
  }
}

export default dudes;
