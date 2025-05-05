# React Browser Zoom Listener

[![npm version](https://img.shields.io/npm/v/react-browser-zoom.svg?style=flat-square)](https://www.npmjs.com/package/react-browser-zoom) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A simple React hook (`useBrowserZoom`) to monitor browser zoom level changes by tracking `window.devicePixelRatio`. This version updates the value on every relevant `resize` event without debouncing.

## Important Limitation Note

It is crucial to understand that browsers **do not** provide a direct, reliable, cross-browser API to get the exact UI zoom percentage set by the user (e.g., 110%, 125%).

This hook monitors `window.devicePixelRatio` (DPR). The DPR value reflects a combination of:

1. **Browser Zoom:** The zoom level applied using Ctrl/Cmd + +/- or browser menus.
2. **Operating System Display Scaling:** Scaling settings configured in the OS (e.g., 125%, 150% scaling on Windows or Retina scaling on macOS).
3. **Screen Pixel Density:** The physical properties of the display (e.g., standard vs HiDPI/Retina).

Therefore, a DPR value of `1.25` could mean 125% browser zoom on a standard display with 100% OS scaling, OR it could mean 100% browser zoom on a standard display with 125% OS scaling, OR 100% browser zoom on a HiDPI display with specific scaling, etc.

**Use the returned DPR value as an indicator of the _effective_ pixel density the browser is rendering at, not as a direct measure of the user's chosen browser zoom percentage.**

## Installation

```bash
# Using npm
npm install react-browser-zoom

# Using Yarn
yarn add react-browser-zoom
```
