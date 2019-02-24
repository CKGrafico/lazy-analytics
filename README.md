# Lazy Analytics
This package is a helper to have some platform analytics in your website, the idea is to be able to add them as easy as possible.

[![Build Status](https://travis-ci.org/CKGrafico/Lazy-Analytics.svg?branch=vue)](https://travis-ci.org/CKGrafico/Lazy-Analytics)
![GitHub last commit](https://img.shields.io/github/last-commit/CKGrafico/Lazy-Analytics/master.svg)
[![GitHub license](https://img.shields.io/github/license/CKGrafico/Lazy-Analytics.svg)](https://github.com/CKGrafico/Lazy-Analytics/blob/vue/LICENSE)
[![GitHub forks](https://img.shields.io/github/forks/CKGrafico/Lazy-Analytics.svg)](https://github.com/CKGrafico/Lazy-Analytics/network)
![GitHub contributors](https://img.shields.io/github/contributors/CKGrafico/Lazy-Analytics.svg)
[![GitHub issues](https://img.shields.io/github/issues/CKGrafico/Lazy-Analytics.svg)](https://github.com/CKGrafico/Lazy-Analytics/issues)

Lazy analytics is compatible with:
- Google Analytics.
- Adobe Analytics.
- Facebook Pixel.
- Twitter Pixel.
- Linkedin Pixel.

## Installation
```
npm install --save lazy-analytics
```

## Usage
```
import { initAnalytics } from 'lazy-analytics';

// After app configuration
const options = {
  route: null,
  google: 'google analytics code',
  facebook: 'facebook pixel code',
  linkedin: 'linkedin pixel code',
  twitter: 'twitter pixel code',
  adobe: 'adobe analytics code'
};

initAnalytics(options);
```

> Note: You need to add at least one of them, but is not necessary to add all.

## Global events
If you have a router like `vue-router` you can add a global trigger for each route change.

```
import { onRouteChangeAnalytics } from 'lazy-analytics';

// After route change
onRouteChangeAnalytics(route);
```

