<template>
  <div class="container">
    <div class="toolbar">
      <Logo />
    </div>
    <div class="content">
      <div>
        <h1 class="title">
          Choose your dream destination...
        </h1>
        <Ticket v-if="selectedTicket" :ticket="selectedTicket" />
        <div class="links">
          <ul>
            <li @click="selectTicket(ticket)" v-for="ticket in getTickets" :key="ticket.code">
              {{ ticket.passenger }}
              {{ ticket.flight }}
              {{ ticket.from }}
              {{ ticket.to }}
              {{ ticket.class }}
              {{ ticket.gate }}
              {{ ticket.time }}
              {{ ticket.seat }}
              {{ ticket.number }}
            </li>
            <p v-if="getTickets.length == 0">
              Aucun billet.
            </p>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Ticket from '../components/Ticket'

export default {
  data () {
    return {
      selectedTicket: null
    }
  },
  components: {
    Ticket
  },
  computed: {
    ...mapGetters(['getTickets'])
  },
  created () {
    this.getTicketsAPI(this.$route.params.code)
  },
  methods: {
    ...mapActions([
      'getTicketsAPI'
    ]),
    selectTicket (ticket) {
      this.selectedTicket = ticket
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.toolbar {
  height: 80px;
  background-color: #35495e;
  align-self: flex-start;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-image: url('~assets/airplane.jpg');
  background-size: cover;
}

.title {
  font-weight: 500;
  font-size: 58px;
  color: #fff;
  letter-spacing: 1px;
  text-shadow: 1px 1px 4px #000;
  text-align: center;
}

.links {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  & > * {
    margin: 5px;
  }
}
</style>
