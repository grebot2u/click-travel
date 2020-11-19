import apiTravel from '../plugins/apiTravel'

export const state = () => ({
  destinations: [],
  tickets: []
})

export const getters = {
  getDestinations: state => state.destinations.filter(destination => destination.isDreamDestination),
  getTickets: state => state.tickets
}

export const actions = {
  getDestinationsAPI: state => apiTravel.get('/destinations').then(response => state.commit('setDestinations', response.data)),
  getTicketsAPI: (state, dest) => apiTravel.get(`/tickets?filter={"offset": 0,"limit": 100,"skip": 0,"where": {"to": "${dest}"}}`).then(response => state.commit('setTickets', response.data))
}

export const mutations = {
  setDestinations (state, destinations) {
    state.destinations = destinations
  },
  setTickets (state, tickets) {
    state.tickets = tickets
  }
}
