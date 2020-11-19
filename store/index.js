import apiTravel from '../plugins/apiTravel'

export const state = () => ({
  destinations: []
})

export const getters = {
  getDestinations: state => state.destinations.filter(destination => destination.isDreamDestination)
}

export const actions = {
  getDestinationsAPI: state => apiTravel.get().then(response => state.commit('setDestinations', response.data))
}

export const mutations = {
  setDestinations (state, destinations) {
    state.destinations = destinations
  }
}
