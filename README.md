# vue-track-reloads
A vue component that tracks how many times a user reloads the page and will perform an action if a threshold is reached.

## Installation
```bash
yarn add vue-track-reloads
```

or with npm

```
npm install vue-track-reloads
```

## Default import
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
| maxReloadsHandler | Function | Function to execute when max reloads are reached. | alert |
| showInfo | Boolean | Will display the replay count info in the DOM. | true |

> **Note:** if you choose to show the reload count info, I have not added any styles. However, I have added classes to the elements for you to easily style them.

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

## Credits
The inspiration for this component came from [this article on CSSTricks](https://css-tricks.com/one-way-to-break-users-out-of-the-habit-of-reloading-too-much/) by Mateusz Rybczonek. While some of the functions are the same, I have also expanded on some of them and added my own.