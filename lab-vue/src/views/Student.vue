<template>
  <div class="events">
    <StudentCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import StudentCard from "@/components/StudentCard.vue"

import StudentService from '@/services/StudentService.js'
// import axios from 'axios'
export default {
  name: "StudentList",
  components: {
    StudentCard, //register it as a child component
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    StudentService.getEvents()
    .then((response) => {
      this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
