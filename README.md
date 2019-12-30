# vue-track-reloads
A vue component that tracks how many times a user reloads the page and will perform an action if a threshold is reached.

## Default import
Install the component:

```javascript
import Vue from 'vue'
import TrackReloads from 'vue-track-reloads'

Vue.use(TrackReloads)
```

## Usage
After installing, simply use the component in your vue template

```html
<template>
  <vue-track-reloads :maxReloads=5 :maxReloadsHandler="myHandler" :showInfo=false />
</template>
```

## Properties / Attributes
You can make use of the following to customize.

| Property | Type   | Description                         | Default |
|----------|--------|-------------------------------------|----------|
| maxReloads | Number | Number of max reloads allowed. | 3 |
| maxReloadsandler | Function | Function to execute when max reloads are reached. | null |
| showInfo | Boolean | Will display the replay count info in the dom. | true |


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