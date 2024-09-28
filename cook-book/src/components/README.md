# Components

The components folder contains all reusable UI components. Each component is modular and can be used across different pages or features. Components are typically written as functional components in React.


## Common Components

Some examples of components that might be included in this directory are:

- **Buttons**: Customizable button components that can be reused across pages.
- **Form Fields:** Components for input fields, text areas, dropdowns, and more.
- **Modal:** A reusable modal component for popups.
- **Card:** A card component that can display various types of content.

```js

// components/Button.js
import React from 'react';

const Button = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

```
