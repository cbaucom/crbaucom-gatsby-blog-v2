---
title: 'Indecision'
description: 'A simple app that makes a decision for you based on given inputs'
date: '2018-10-28'
section: project
cover_image: './indecision-mockup2.png'
tags: ['javascript', 'react']
---

### A simple app that makes a decision for you based on given inputs

This app uses localStorage and is 100% a PWA!

![Indecision App](https://res.cloudinary.com/crbaucom/image/upload/v1546543786/crbaucom-images/indecision-pwa-lighthouse-100-desktop.png)

### Technologies

- JavaScript - ECMAScript 6
- SASS - SCSS preprocessor
- Node modules
- React - JavaScript library

### The code

The main logic behind the decision making is actually quite simple.

On our Action button, we call `handlePick` which does the following:

```
handlePick = () => {
  const randomNum = Math.floor(Math.random() * this.state.options.length);
  const option = this.state.options[randomNum];
  this.setState(() => ({ selectedOption: option }));
};
```

To see the full source, click [here](https://github.com/cbaucom/react-indecision-app) and you can visit the live site [here](https://indecision.builtbybaucom.com)

![Indecision App Mockup](./indecision-mockup.png)
