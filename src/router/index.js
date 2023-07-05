import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue'
import location from '../components/location.vue'
import stopwatch from '../components/stopwatch.vue'
import weather from '../components/weather.vue'
import game from '../components/game.vue'

const routes = [{
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/location',
        name: 'location',
        component: location
    },
    {
        path: '/stopwatch',
        name: 'stopwatch',
        component: stopwatch
    },
    {
        path: '/weather',
        name: 'weather',
        component: weather
    },
    {
        path: '/game',
        name: 'game',
        component: game
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router