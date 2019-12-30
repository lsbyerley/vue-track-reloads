import TrackReload from './track-reload'

export default {
  install(Vue, options) {
    // Register the component globally
    Vue.component('vue-track-reload', TrackReload)
  }
}