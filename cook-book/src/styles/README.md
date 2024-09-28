# Styles

To ensure code readability and maintainability, we will follow a clear naming convention for all CSS classes. This naming system is designed to make it easy to understand where a CSS rule applies and to maintain a scalable structure as the project grows. We will also separate the global styles from page-specific styles for better organization.

### Naming Convention Format

We will follow a naming pattern that specifies the context of the element:

```
PARENTPAGE_LOCATIONINPAGE_ACTION_ELEMENTTYPE
or
PARENTPAGE_PARENTDIV_ACTION_ELEMENTTYPE
```

### Naming Rules

- Use ALL CAPS for naming classes (to easily distinguish CSS class names).
- Use underscores _ to separate different parts of the class name.
- Avoid numbers unless it is absolutely necessary.

This helps ensure that the purpose of each CSS rule is immediately clear. For example, a button in the navigation bar on the homepage would be named:


```
HOMEPAGE_NAVBAR_LOGIN_BUTTON
```

And if it is inside a login box on the homepage, it would be:

```
HOMEPAGE_LOGINBOX_LOGIN_BUTTON
```

### Global CSS
The global.css file will store styles that are common across all pages, such as body, fonts, and general layout.

### Page-Specific CSS
Each page will have its own CSS file for elements unique to that page.

### Avoid Generic Names
Do not use vague names like Button1 or Box2. Always use descriptive names that clearly define the element's purpose and location.