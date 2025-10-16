import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope, faPhone, faMap)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
