import { createRouter, createWebHistory } from "vue-router"
import EventList from "../views/EventList.vue"
import About from '../views/About.vue'
import Page from '../views/Page.vue'
import Student from '../views/Student.vue'

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/page",
    name: "Page",
    component: Page
  },
  {
    path: "/student",
    name: "StudentList",
    component: Student
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
