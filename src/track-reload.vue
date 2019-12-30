<template>
  <div class='vtr-info'>
    <p class='count'>reloadCount: {{ reloadCount }}</p>
    <p class='max'>maxReloads: {{ maxReloads }}</p>
    <p class='message'>WarningMessage: {{ warningMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'TrackReload',
  props: {
    maxReloads: {
      type: Number,
      default: 3,
      validator: (val) => {
        return (typeof val === 'number' && val > 0)
      }
    },
    maxReloadHandler: {
      type: Function
    }
  },
  data() {
    return {
      reloadCount: 0
    };
  },
  computed: {
    warningMessage() {
      if (this.reloadCount === 0) {
        return `If this page is reloaded ${this.maxReloads} times, you will be kicked off.`
      } else if (this.maxReloads - this.reloadCount === 1) {
        return 'This is your final warning! Do not reload anymore.'
      } else {
        return `Warning! If you reload ${this.reloadsLeft} more times you will be kicked off!`
      }
    },
    reloadsLeft() {
      return (this.maxReloads - this.reloadCount)
    }
  },
  created() {
    this.initializeReloadCount();
  },
  methods: {
    checkReload() {
      if (localStorage.getItem('reloadCount')) {
        this.reloadCount = parseInt(localStorage.getItem('reloadCount'));
      } else {
        this.reloadCount = 0;
        localStorage.setItem('reloadCount', this.reloadCount);
      }

      if (Math.floor(Date.now() / 1000) - localStorage.getItem('lastUnloadAt') < 5) {
        this.onReloadDetected();
      } else {
        this.reloadCount = 0;
        localStorage.setItem('reloadCount', 0);
      }
    },

    beforeUnloadHandler() {
      localStorage.setItem('lastUnloadAt', Math.floor(Date.now() / 1000));
    },

    handleThresholdReached() {
      // Do something when threshold is reached, for now, just alert the user and reset
      // alert('You\'ve reloaded enough! Resetting');
      this.resetReloadCount();
      
      // If maxReloadHandler prop passed in, call it
      if (this.maxReloadHandler) {
        this.maxReloadHandler()
      }
    },

    onReloadDetected() {
      this.reloadCount = this.reloadCount + 1;
      localStorage.setItem('reloadCount', this.reloadCount);

      if (this.reloadCount === this.maxReloads) {
        this.handleThresholdReached();
      }
    },

    resetReloadCount() {
      window.removeEventListener('beforeunload', this.beforeUnloadHandler);
      localStorage.removeItem('lastUnloadAt');
      localStorage.removeItem('reloadCount');
      this.initializeReloadCount();
    },

    initializeReloadCount() {
      window.addEventListener('beforeunload', this.beforeUnloadHandler);
      this.checkReload();
    }
  }
}
</script>

<style>
.vtr-info {
  display: none;
}
</style>