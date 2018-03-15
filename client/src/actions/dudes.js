import axios from 'axios';

export const getDudes = (cb) => {
  return (dispatch) => {
    axios.get('/api/dudes')
      .then( res => dispatch({ type: 'DUDES', dudes: res.data }) )
      .then( cb() )
  }
}

export const addDude = (dude) => {
  return (dispatch) => {
    axios.post('/api/dudes', { dude } )
     .then( res => dispatch({ type: 'ADD_DUDE', dude: res.data }) )
  }
}

export const updateDude = (dude) => {
  return (dispatch) => {
    axios.put(`/api/dudes/${dude.id}`, { dude } )
      .then( res => dispatch({ type: 'UPDATE_DUDE', dude: res.data }) )
  }
}

export const deleteDude = (id) => {
  return (dispatch) => {
    axios.delete(`/api/dudes/${id}`)
      .then( () => dispatch({ type: 'DELETE_DUDE', id }) )
  }
}
