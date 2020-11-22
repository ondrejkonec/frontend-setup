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
### Modules/Settings
- Config switches
- Globally-available variables
- Color pallete, etc.

#### Modules/Tools
- Globally used functions, placeholders and mixins
- Globally-available tools
- Helper functions

### 01 - Vendors (Generic)
- Third party vendors including normalize/reset
- Ground-zero styles
- This is the first layer which generates actual CSS

### 02 - Elements
These come with default styling from the browser so we can redefine them here.
- Unclassed HTML elements
- Last layer we see type selector

### 03 - Layouts (l-)
Class-based selectors which define undecorated design patterns.
- OOCSS
- Design patterns
- No cosmetic
- Begin using classes exclusively

### 04 - Components (a-, m-, o-)
- Component have three groups:
  - **atoms**: the smallest building blocks of a website, can't contain any other component
  - **molecules**: simple groups of UI elements functioning together as a unit
  - **organisms**: complex UI components composed of groups of molecules and/or atoms and/or other organisms
- Designed pieces of UI
- Still only using classes
- More explicitly named

### 05 - Scopes (s-)
- Scoped contexts in CSS solve a very specific and particular problem
- For example areas of user-generated content, where some long-form/prose HTML has come from a CMS

### 06 - Utilities (u-)
Ability to override anything. It will most likely come with !important as we are sure to use them.
- Overrides, helpers, utilities
- Only affect one piece of the DOM at a time
