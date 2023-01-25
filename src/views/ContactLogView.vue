<template>
  <div class="home">
    <h2>Your recent Contact that you called</h2>
    <div v-for="call in callLog" :key="call.date">
        <h2>{{call.number}}</h2>
        <p>{{call.name}}</p>
        <p>{{call.date}}</p>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['callLog'])
  }
}
</script>
<style scoped>

</style>
