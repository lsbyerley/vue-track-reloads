import TrackReloads from './track-reloads'

export default {
  install(Vue, options) {
    // Register the component globally
    Vue.component('vue-track-reloads', TrackReloads)
  }
}