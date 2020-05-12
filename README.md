# Project setting
Local settings for my projects with Sass, ITCSS, BEM, Grunt, Bootstrap-grid, Modern-normalize.css
## Setup
# Local development server
In root folder:
1. Install dependencies ```npm install```
2. Run Grunt with command ```grunt```

# Requires
- npm >= 6.9.0
- Grunt >= 1.1.0

## ITCSS
### 01 - Settings
- Config switches
- Globally-available variables
- Color pallete, etc.

### 02 - Tools
- Globally used functions, placeholders and mixins
- Globally-available tools
- Helper functions

### 03 - Generic (Vendors)
- Third party vendors including normalize/reset
- Ground-zero styles
- This is the first layer which generates actual CSS

### 04 - Elements
These come with default styling from the browser so we can redefine them here.
- Unclassed HTML elements
- Last layer we see type selector

### 05 - Objects
Class-based selectors which define undecorated design patterns.
- OOCSS
- Design patterns
- No cosmetic
- Begin using classes exclusively

### 06 - Components
- Designed pieces of UI
- Still only using classes
- More explicitly named

### 07 - Patterns
Collections of components. Patterns are built from components.

### 08 - Utilities
Ability to override anything. It will most likely come with !important as we are sure to use them.
- Overrides, helpers, utilities
- Only affect one piece of the DOM at a time
