# Project setting
My personal coding setup for my projects which runs using Grunt. Contains Sass, ITCSS, BEM, SMACSS, Atomic Design, OOCSS or namespacing inspired by Harry Roberts.
## Setup
### Local development server
In root folder:
1. Install dependencies ```npm install```
2. Run Grunt with command ```grunt```

### Requires
- npm >= 6.9.0
- Grunt >= 1.1.0

## CSS structure
### 01 - Settings
- Config switches
- Globally-available variables
- General project settings so for the most basic high-level configuration
- Sass variables or CSS custom properties

### 02 - Design tokens
- Visual vocabulary of the site
- Tokens represent as a variables
- typography, colors, spacing, fonts, object styles
### 03 - Tools
- Globally used functions, placeholders and mixins
- Globally-available tools
- Helper functions
### 04 - Generic (Vendors)
- Third party vendors including normalize/reset
- Ground-zero styles
- This is the first layer which generates actual CSS

### 05 - Elements
These come with default styling from the browser so we can redefine them here.
- Unclassed HTML elements
- Last layer we see type selector

### 06 - Skeleton (s-)
Class-based selectors which define undecorated design patterns.
- OOCSS
- Design patterns
- No cosmetic
- Begin using classes exclusively

### 07 - Components (a-, m-, o-)
- The components are divided into three groups:
  - **atoms**: the smallest building blocks of a website, can't contain any other component
  - **molecules**: simple groups of UI elements functioning together as a unit
  - **organisms**: complex UI components composed of groups of molecules and/or atoms and/or other organisms
- Designed pieces of UI
- Still only using classes
- More explicitly named

### 08 - Utilities (u-)
Ability to override anything. It will most likely come with !important as we are sure to use them.
- Overrides, helpers, utilities
- Only affect one piece of the DOM at a time
