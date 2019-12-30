# vue-track-reload
A vue component that tracks how many times a user reloads the page and will perform an action if a threshold is reached.

## Default import

Install the component:

```javascript
import Vue from 'vue'
import TrackReload from 'vue-track-reload'

Vue.use(TrackReload)
```

## Usage
After installing, simply use the component in your vue template

```html
<template>
  <vue-track-reload :maxReloads=5 :maxReloadHandler="myHandler" />
</template>
```

## Properties / Attributes
You can make use of the following to customize.

| Property | Type   | Description                         | Default |
|----------|--------|-------------------------------------|----------|
| maxReloads | Number | Number of max reloads allowed. | 3 |
| maxReloadHandler | Function | Function to execute when max reloads are reached. | null |


## Local Development
Clone the repo to your machine and change to the directory, then..
```
npm install
npm run dev
```

## Production Build
```
npm run build
```